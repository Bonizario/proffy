import React, { TextareaHTMLAttributes } from 'react';
import TextAreaBlock from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <TextAreaBlock>
      <label htmlFor={name}>
        {label}
        <textarea id={name} {...rest} />
      </label>
    </TextAreaBlock>
  );
};

export default Textarea;
