import styled from 'styled-components';

const Item = styled.article`
  overflow: hidden;
  margin-top: 2.4rem;
  border-radius: 0.8rem;
  background-color: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);

  > header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;

    > img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    > div {
      margin-left: 2.4rem;

      > strong {
        display: block;
        color: var(--color-text-title);
        font: 700 2.4rem Archivo, sans-serif;
      }

      > span {
        display: block;
        font-size: 1.7rem;
        margin-top: 0.4rem;
      }
    }
  }

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  > footer {
    margin-top: 3.2rem;
    padding: 3.2rem 2rem;
    background-color: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      margin-right: 1.4rem;
    }

    > p > strong {
      display: block;
      font-size: 1.6rem;
      color: var(--color-primary);
    }

    > a {
      width: 70%;
      height: 5.6rem;
      max-width: 20rem;
      border: 0;
      border-radius: 0.8rem;
      color: var(--color-button-text);
      background-color: var(--color-secondary);
      font: 700 1.6rem/2.6rem Archivo, sans-serif;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: background-color 150ms;

      &:hover {
        background-color: var(--color-secondary-dark);
      }
    }
  }

  @media (min-width: 43.75em) {
    > header,
    > footer {
      padding: 3.2rem;
    }

    > p {
      padding: 0 3.2rem;
    }

    > footer > p > strong {
      display: initial;
      margin-left: 1.6rem;
    }

    > footer > a {
      width: 24.5rem;
      font-size: 1.6rem;
      justify-content: center;
    }

    > footer > a > img {
      margin-right: 1.6rem;
    }
  }
`;

export default Item;
