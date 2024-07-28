'use server';

import * as yup from 'yup';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import LoginSchema from '../schemas/LoginSchema';
import User from '@/models/User';
import connectMongo from '@/app/lib/connect-mongo';
import { createSession } from '../session';

let urlToRedirect: string | null;

export async function signin(
  state: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  try {
    const errorMessage = 'Invalid login credentials.';
    // Validate the form data using the yup schema
    const validatedFields = await LoginSchema.validate(
      {
        email: formData.get('email'),
        password: formData.get('password'),
      },
      { abortEarly: false }
    );

    // If validation is successful, prepare data for insertion into database
    const { email, password } = validatedFields;
    await connectMongo();

    // Query the database for the user with the given email
    const user = await User.findOne({ email });

    if (!user) {
      return { message: errorMessage };
    }

    // Compare the user's password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the password does not match, return error
    if (!passwordMatch) {
      return { message: errorMessage };
    }

    // Get user ID and create a session
    const userId = user._id.toString();
    await createSession(userId);

    // set URL to redirect
    urlToRedirect = '/';
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      // If there are validation errors, return early with the errors
      const errors: Record<string, string[]> = err.inner.reduce(
        (acc: Record<string, string[]>, error) => {
          if (error.path) {
            acc[error.path] = acc[error.path] || [];
            acc[error.path].push(error.message);
          }
          return acc;
        },
        {}
      );
      return { errors };
    }
    // Handle other unexpected errors
    return { message: 'An unexpected error occurred.' };
  } finally {
    // redirect to home page after successful session creation
    if (urlToRedirect) {
      redirect(urlToRedirect);
    }
  }
}
