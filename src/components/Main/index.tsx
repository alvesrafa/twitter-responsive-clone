import React from 'react';
import ProfilePage from '../ProfilePage';
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  BellIcon,
  HomeIcon,
  SearchIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Rafael Alves</strong>
          <span>100 tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
