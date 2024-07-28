'use client';

import { useFormState } from 'react-dom';
import Form from '@/app/components/ui/form/Form';
import Input from '@/app/components/ui/input/Input';
import Error from '@/app/components/ui/error/Error';
import { signup } from './actions';
import SubmitButton from '@/app/components/SubmitButton';

const SignUpForm = () => {
  const [state, action] = useFormState(signup, undefined);

  return (
    <Form action={action}>
      <Input name="email" placeholder="john@example.com" />
      {state?.errors?.email && <Error>{state.errors.email.join(', ')}</Error>}
      <Input name="username" placeholder="John" />
      {state?.errors?.username && (
        <Error>{state.errors.username.join(', ')}</Error>
      )}
      <Input name="password" placeholder="Password" type="password" />
      {state?.errors?.password && (
        <Error>{state.errors.password.join(', ')}</Error>
      )}
      {state?.message && <Error>{state.message}</Error>}
      <SubmitButton type="submit" title="Sign Up" />
    </Form>
  );
};

export default SignUpForm;
