import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import { Header, TopBarContainer, HeaderContent } from './styles';

interface PageHeaderProps {
  title: String;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Header>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Back" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>
      <HeaderContent>
        <strong>{title}</strong>
        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
