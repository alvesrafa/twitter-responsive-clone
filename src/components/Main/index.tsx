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
  BrushIcon
} from './styles';
interface Props {
  modalIsOpen: Boolean;
}
const Main: React.FC<Props> = ({ modalIsOpen }) => {
  return (
    <Container>
      <Header modalIsOpen={modalIsOpen}>
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
        <BrushIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
