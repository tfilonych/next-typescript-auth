import { ReactNode } from 'react';
import ErrorStyled from './Error.styles';

type ErrorProps = {
  children: ReactNode;
};

const Error = ({ children }: ErrorProps) => {
  return <ErrorStyled>{children}</ErrorStyled>;
};

export default Error;
