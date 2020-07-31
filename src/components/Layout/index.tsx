import React, { useState } from 'react';

import { Container, Wrapper } from './styles';
import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';

interface Props {
  setColors: Function;
}
const Layout: React.FC<Props> = ({ setColors }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <MenuBar
          setColors={setColors}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
        <Main modalIsOpen={modalIsOpen}/>
        <SideBar modalIsOpen={modalIsOpen}/>
      </Wrapper>
    </Container>
  );
};

export default Layout;
