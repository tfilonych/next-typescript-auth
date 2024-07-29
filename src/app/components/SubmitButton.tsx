import { useState } from 'react';
import Button from './ui/button/Button';

type btnTypes = 'submit' | 'reset' | 'button';
type SignUpButtonProps = {
  title: string;
  type: btnTypes;
};

const SubmitButton = ({ title, type = 'submit' }: SignUpButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pending, setPending] = useState<boolean>(false);

  return (
    <Button aria-disabled={pending} type={type}>
      {pending ? 'Submitting...' : title}
    </Button>
  );
};

export default SubmitButton;
