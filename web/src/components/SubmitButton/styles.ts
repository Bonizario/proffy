import styled from 'styled-components';

interface ButtonProps {
  marginTop?: string;
}

const Button = styled.button`
  width: 100%;
  height: 5.6rem;
  margin-top: ${(props: ButtonProps) => props.marginTop || '0'};
  border-radius: 0.8rem;
  color: var(--color-button-text);
  background-color: var(--color-secondary);
  font: 600 1.6rem/2.6rem Archivo, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 150ms;

  &:hover {
    background-color: var(--color-secondary-dark);
  }
`;

export default Button;
