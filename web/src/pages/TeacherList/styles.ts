import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  @media (min-width: 43.75em) {
    max-width: 100%;
  }
`;

export const SearchTeachersForm = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 43.75em) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.6rem;
    position: absolute;
    bottom: -4.4rem;
  }
`;

export const InputBlock = styled.div`
  position: relative;

  > label {
    font-size: 1.4rem;
  }

  > label > input {
    width: 100%;
    height: 5.6rem;
    padding: 0 1.6rem;
    margin-top: 0.8rem;
    font: 1.6rem Archivo;
    border-radius: 0.8rem;
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

  & + & {
    margin-top: 2rem;
  }

  @media (min-width: 43.75em) {
    & + & {
      margin-top: 0;
    }
  }
`;

export const Main = styled.main`
  width: 90%;
  margin: 3.2rem auto 4.8rem;

  @media (min-width: 43.75em) {
    max-width: 74rem;
  }
`;
