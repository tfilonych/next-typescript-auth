import { FormEventHandler, ReactElement } from 'react';
import FormStyled from './Form.styles';

type FormProps = {
  submitHandler: FormEventHandler<HTMLFormElement> | undefined,
  children: ReactElement;
}

const Form = function ({ submitHandler, children }: FormProps) {
  return <FormStyled onSubmit={submitHandler}>{children}</FormStyled>;
};

export default Form;
