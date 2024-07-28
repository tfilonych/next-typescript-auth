'use server';

import * as yup from 'yup';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import SignUpSchema from './../schemas/SignUpSchema';
import User from '@/models/User';
import connectMongo from '@/app/lib/connect-mongo';
import { createSession } from '../session';

let urlToRedirect: string | null;

export async function signup(
  state: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> {
  try {
    // Validate the form data using the yup schema
    const validatedFields = await SignUpSchema.validate(
      {
        email: formData.get('email'),
        password: formData.get('password'),
        username: formData.get('username'),
      },
      { abortEarly: false }
    );

    // If validation is successful, prepare data for insertion into database
    const { email, password, username } = validatedFields;
    await connectMongo();

    // Check if the user's email already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return {
        message: 'Email already exists, please use a different email or login.',
      };
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 5);

    // Update the DB
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });
    const user = await newUser.save();

    // Create a session for the user
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
    urlToRedirect && redirect(urlToRedirect);
  }
}
