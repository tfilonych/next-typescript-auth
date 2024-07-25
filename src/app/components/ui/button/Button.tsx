import { ReactNode } from 'react';
import ButtonStyles from './Button.styles';

type ButtonProps = {
  type: 'button' | 'submit';
  children: ReactNode;
};

const Button = ({ type, children }: ButtonProps) => {
  return <ButtonStyles>{children}</ButtonStyles>;
};

export default Button;
