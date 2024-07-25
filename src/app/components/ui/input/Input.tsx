import InputStyled from './Input.styles';

type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type }: InputProps) => {
  return <InputStyled type={type} />;
};

export default Input;
