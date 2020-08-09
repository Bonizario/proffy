import styled from 'styled-components';

const TextAreaBlock = styled.div`
  position: relative;
  margin-top: 2rem;

  > label {
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
  }

  > label > textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    resize: vertical;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    padding: 1.2rem 1.6rem;
    color: var(--color-text-base);
    font: 400 1.6rem/2.6rem Poppins, sans-serif;
    border: 1px solid var(--color-line-in-white);
    background-color: var(--color-input-background);
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    bottom: 7px;
    left: 1.6rem;
    right: 1.6rem;
    position: absolute;
    background-color: var(--color-primary-light);
  }

  @media (min-width: 43.75em) {
    margin-top: 2.4rem;
  }
`;

export default TextAreaBlock;
