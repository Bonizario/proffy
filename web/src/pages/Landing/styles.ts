import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-in-primary);
  background-color: var(--color-primary);
  padding: 4rem 0;
`;

// 68.75em = 68.75 * 16px (DO NOT USE rem IN MEDIA QUERIES)
// https://medium.com/@barrypeng6/why-should-not-use-rem-unit-in-media-query-5645d0163ce5
export const Container = styled.div`
  > img {
    width: 100%;
  }

  /* 700px */
  @media (min-width: 68.75em) {
    > img {
      grid-area: hero;
      justify-self: end;
    }

    &.container {
      max-width: 110rem;
      display: grid;
      grid-template-rows: 35rem 1fr;
      grid-template-columns: 9fr 5fr 6fr;
      grid-template-areas:
        'logo hero hero'
        'buttons buttons total';
    }
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 3.2rem;
  text-align: center;

  > img {
    height: 8rem;
  }

  > h1 {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 68.75em) {
    text-align: initial;
    align-self: center;
    grid-area: logo;
    margin: 0;

    > h1 {
      font-size: 3.2rem;
      line-height: 4.2rem;
      width: 302px;
      height: 92px;
    }

    > img {
      height: 100%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3.2rem 0;

  > a {
    width: 96%;
    height: 10.4rem;
    border-radius: 0.8rem;
    color: var(--color-button-text);
    font: 700 2rem Archivo, sans-serif;
    transition: background-color 150ms;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > a > img {
    margin-right: 2.4rem;
  }

  > a:first-child {
    background-color: var(--color-primary-lighter);

    &:hover {
      background-color: var(--color-primary-light);
    }
  }

  > a:last-child {
    margin-top: 1.6rem;
    background-color: var(--color-secondary);

    &:hover {
      background-color: var(--color-secondary-dark);
    }
  }

  > a > img {
    width: 4rem;
  }

  @media (min-width: 68.75em) {
    grid-area: buttons;
    justify-content: flex-start;

    > a {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 30em) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > a {
      width: 30rem;
    }

    > a:first-child {
      margin-right: 1.6rem;
    }

    > a:last-child {
      margin-top: 0;
    }
  }
`;

export const Connections = styled.span`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin-left: 0.8rem;
  }

  @media (min-width: 68.75em) {
    justify-content: flex-end;
    grid-area: total;
  }
`;
