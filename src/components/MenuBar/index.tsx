import React, { useState } from 'react';

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
  Modal,
  ColorPick,
} from './styles';
import Button from '../Button';
interface Props {
  setColors: Function;
}

const MenuBar: React.FC<Props> = ({ setColors }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSetColors = (color: String) => {
    closeModal();
    setColors(color);
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
        <MenuButton onClick={openModal}>
          <ProfileIcon />
          <span>Tema</span>
        </MenuButton>
        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h4>Personalizar sua exibição</h4>
        <p>
          As configurações de exibição afetam todas as suas contas do Twitter
          neste navegador. Essas configurações só estão visíveis para você.
        </p>
        <div className="colors">
          <ColorPick onClick={() => handleSetColors('blue')} color="blue">
            <div className="color" />
            <img src="https://abs-0.twimg.com/emoji/v2/svg/1f499.svg" alt="" />
          </ColorPick>
          <ColorPick onClick={() => handleSetColors('yellow')} color="yellow">
            <div className="color" />
            <img src="https://abs-0.twimg.com/emoji/v2/svg/2b50.svg" alt="" />
          </ColorPick>
          <ColorPick onClick={() => handleSetColors('pink')} color="pink">
            <div className="color" />
            <img src="https://abs-0.twimg.com/emoji/v2/svg/1f338.svg" alt="" />
          </ColorPick>
          <ColorPick onClick={() => handleSetColors('purple')} color="purple">
            <div className="color" />
            <img src="https://abs-0.twimg.com/emoji/v2/svg/1f419.svg" alt="" />
          </ColorPick>
          <ColorPick onClick={() => handleSetColors('orange')} color="orange">
            <div className="color" />
            <img src="https://abs-0.twimg.com/emoji/v2/svg/1f525.svg" alt="" />
          </ColorPick>
          <ColorPick onClick={() => handleSetColors('green')} color="green">
            <div className="color" />
            <img src="https://abs-0.twimg.com/emoji/v2/svg/1f951.svg" alt="" />
          </ColorPick>
        </div>
      </Modal>
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
