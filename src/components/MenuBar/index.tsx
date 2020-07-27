import React from 'react';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';
import Button from '../Button';
interface Props {
  setColors: Function;
}

const MenuBar: React.FC<Props> = ({ setColors }) => {
  const handleSetColors = () => {
    setColors('pink');
  };
  const colors = ['blue', 'yellow', 'pink', 'purple', 'orange', 'green'];
  return (
    <Container>
      <Topside>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>
        <MenuButton onClick={handleSetColors}>
          <ProfileIcon />
          <span>Tema</span>
        </MenuButton>
        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Rafael Alves</strong>
          <span>@alvesrafa</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
