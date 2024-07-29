// @typescript-eslint/no-unused-vars
import { useState } from 'react';
import Button from './ui/button/Button';

type btnTypes = 'submit' | 'reset' | 'button';
type SignUpButtonProps = {
  title: string;
  type: btnTypes;
};

const SubmitButton = ({ title, type = 'submit' }: SignUpButtonProps) => {
  const [pending, setPending] = useState<boolean>(false);

  return (
    <Button aria-disabled={pending} type={type}>
      {pending ? 'Submitting...' : title}
    </Button>
  );
};

export default SubmitButton;
