import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  height: 34rem;
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text-in-primary);

  > a {
    height: 3.2rem;
    transition: opacity 150ms;

    &:hover {
      opacity: 0.6;
    }
  }

  > img {
    height: 1.6rem;
  }

  @media (min-width: 43.75em) {
    max-width: 110rem;
  }
`;

interface HeaderContentProps {
  teacherForm?: boolean;
}

export const HeaderContent = styled.div<HeaderContentProps>`
  width: 90%;
  position: relative;
  margin: 3.2rem auto;
  padding-top: ${props => (props.teacherForm ? '0' : '4.8rem')};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > strong {
    font: 700 3.6rem/4.2rem Archivo, sans-serif;
    color: var(--color-title-in-primary);
  }

  > p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }

  @media (min-width: 43.75em) {
    flex: 1;
    max-width: 74rem;
    padding-top: ${props => (props.teacherForm ? '2.4rem' : '4.8rem')};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    > strong {
      max-width: 35rem;
    }
  }
`;
