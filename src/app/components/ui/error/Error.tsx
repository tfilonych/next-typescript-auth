import { ReactNode } from 'react';
import styles from './Error.module.css';

type ErrorProps = {
  children: ReactNode;
};

const Error = ({ children }: ErrorProps) => {
  return <p className={styles.error}>{children}</p>;
};

export default Error;
