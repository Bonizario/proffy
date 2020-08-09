import React, { ButtonHTMLAttributes } from 'react';
import Button from './styles';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  marginTop?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ type, text, ...rest }) => {
  return (
    <Button type={type} {...rest}>
      {text}
    </Button>
  );
};

export default SubmitButton;
