import React from 'react';
import {
  Container,
  Page,
  LogoContainer,
  ButtonsContainer,
  Connections,
} from './styles';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

const Landing: React.FC = () => {
  return (
    <Page>
      <Container>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h1>Your online learning platform.</h1>
        </LogoContainer>

        <img
          src={landingImg}
          alt="Proffy - Connect with students and teachers from around the world"
        />

        <ButtonsContainer>
          <a href="/">
            <img src={studyIcon} alt="Study" />
            Study
          </a>

          <a href="/">
            <img src={giveClassesIcon} alt="Give Classes" />
            Teach
          </a>
        </ButtonsContainer>

        <Connections>
          Total of 200 people connected
          <img src={purpleHeartIcon} alt="Purple heart" />
        </Connections>
      </Container>
    </Page>
  );
};

export default Landing;
