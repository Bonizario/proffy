import React, { InputHTMLAttributes } from 'react';
import InputBlock from './styles';

interface InputBlockProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputBlockProps> = ({ label, name, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={name}>
        {label}
        <input type="text" id={name} {...rest} />
      </label>
    </InputBlock>
  );
};

export default Input;
