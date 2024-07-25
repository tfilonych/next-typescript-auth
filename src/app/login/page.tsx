'use client';

import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '@/app/schemas/LoginSchema';
import Form from '../components/ui/form/Form';
import Input from '../components/ui/input/Input';
import Button from '../components/ui/button/Button';
import Error from '@/app/components/ui/error/Error';

type FormProps = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(LoginSchema),
  });

  const submitHandler = async (data: any) => {
    console.log(data);
    // Handle authentication logic here
  };

  return (
    <Form submitHandler={submitHandler}>
      <>
        <Input type="email" placeholder="Email" {...register('email')} />
        {errors.email && <Error>{errors.email.message}</Error>}

        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        {errors.password && <Error>{errors.password.message}</Error>}

        <Button type="submit">Login</Button>
      </>
    </Form>
  );
};

export default LoginForm;
