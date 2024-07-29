'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import Form from '@/app/components/ui/form/Form';
import Input from '@/app/components/ui/input/Input';
import Error from '@/app/components/ui/error/Error';
import { signin } from './actions';
import SubmitButton from '@/app/components/SubmitButton';
import styles from './login.module.css';

const LogInForm = () => {
  const [state, action] = useFormState(signin, undefined);

  return (
    <>
      <Form action={action}>
        <Input id="email" name="email" placeholder="john@example.com" />
        {state?.errors?.email && <Error>{state.errors.email}</Error>}
        <Input id="password" name="password" type="password" />
        {state?.errors?.password && <Error>{state.errors.password}</Error>}
        <SubmitButton title="Sign In" type="submit" />
        <div className={styles.form_footer}>
          Don't have an account yet?{' '}
          <Link href="/signup" className={styles.link}>
            Sign Up
          </Link>
        </div>
      </Form>
    </>
  );
};

export default LogInForm;
