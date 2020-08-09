import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Main = styled.div`
  background-color: var(--color-box-base);
  width: 90%;
  max-width: 74rem;
  overflow: hidden;
  padding-top: 6rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  -webkit-box-shadow: 0px 8px 23px -16px rgba(128, 128, 128, 0.64);
  -moz-box-shadow: 0px 8px 23px -16px rgba(128, 128, 128, 0.64);
  box-shadow: 0px 8px 23px -16px rgba(128, 128, 128, 0.64);

  fieldset {
    padding: 0 2.4rem;

    & + fieldset {
      margin-top: 6rem;
    }

    > legend {
      font: 700 2.4rem/3.4rem Archivo, sans-serif;
      color: var(--color-text-title);
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-line-in-white);

      > button {
        background: none;
        color: var(--color-primary);
        font: 700 1.6rem/2.6rem Archivo, sans-serif;
        transition: color 150ms;

        &:hover {
          color: var(--color-primary-dark);
        }
      }
    }
  }

  @media (min-width: 43.75em) {
    padding: 5.6rem 0;

    > fieldset {
      padding: 0 6.4rem;
    }
  }
`;

export const ScheduleItem = styled.div`
  input:enabled:read-write:-webkit-any(:focus, :hover)::-webkit-clear-button {
    opacity: 0;
    appearance: none;
  }
  input[type='time' i]::-webkit-inner-spin-button {
    opacity: 0;
    appearance: none;
  }

  @media (min-width: 43.75em) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }
`;

export const FormFooter = styled.footer`
  padding: 4rem 2.4rem;
  background-color: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;
  display: flex;
  flex-direction: column;

  > p {
    align-self: flex-start;

    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      margin-right: 2rem;
    }
  }

  @media (min-width: 43.75em) {
    padding: 4rem 6.4rem;
    flex-direction: row;
    justify-content: space-between;

    > p {
      align-self: center;
      justify-content: space-between;
    }

    > button {
      align-self: center;
      width: 20rem;
      margin: 0;
    }
  }
`;
