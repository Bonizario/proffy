import styled from 'styled-components';

const SelectBlock = styled.div`
  position: relative;
  margin-top: 2.4rem;

  > label {
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
  }

  > label > select {
    appearance: none;

    width: 100%;
    height: 5.6rem;
    padding: 0 1.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    color: var(--color-text-base);
    font: 400 1.6rem/2.6rem Poppins, sans-serif;
    border: 1px solid var(--color-line-in-white);
    background-color: var(--color-input-background);
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    bottom: 0;
    left: 1.6rem;
    right: 1.6rem;
    position: absolute;
    background-color: var(--color-primary-light);
  }
`;

export default SelectBlock;
