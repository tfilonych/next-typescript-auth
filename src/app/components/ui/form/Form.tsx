import { forwardRef, FormEventHandler, ReactNode } from 'react';
import styles from './form.module.css';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  submitHandler?: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ submitHandler, children, className, ...props }, ref) => {
    return (
      <form
        className={`${styles.form} ${className}`}
        onSubmit={submitHandler}
        ref={ref}
        {...props}
      >
        {children}
      </form>
    );
  }
);

Form.displayName = 'Form';

export default Form;
