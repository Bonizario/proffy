import React from 'react';
import { Link } from 'react-router-dom';
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
      <Container className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h1>Your online learning platform.</h1>
        </LogoContainer>

        <img
          src={landingImg}
          alt="Proffy - Connect with students and teachers from around the world"
        />

        <ButtonsContainer>
          <Link to="/study">
            <img src={studyIcon} alt="Study" />
            Study
          </Link>

          <Link to="/give-classes">
            <img src={giveClassesIcon} alt="Give Classes" />
            Teach
          </Link>
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
