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
  input:enabled:read-write:-webkit-any(:focus, :hover)::-webkit-clear-button {
    opacity: 0;
    appearance: none;
  }
  input[type='time' i]::-webkit-inner-spin-button {
    opacity: 0;
    appearance: none;
  }

  label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 43.75em) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.6rem;
    position: absolute;
    bottom: -2.8rem;
  }
`;

export const Main = styled.main`
  width: 90%;
  margin: 5.6rem auto;
  > article:first-of-type {
    margin-top: 44rem;
  }
  @media (min-width: 43.75em) {
    max-width: 74rem;
  }
`;
