import React, { SelectHTMLAttributes } from 'react';
import SelectBlock from './styles';

interface SelectBlockProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  placeholder: string;
}

const Select: React.FC<SelectBlockProps> = ({
  label,
  name,
  options,
  placeholder,
  ...rest
}) => {
  return (
    <SelectBlock>
      <label htmlFor={name}>
        {label}
        <select id={name} {...rest}>
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </SelectBlock>
  );
};

export default Select;
