import React from 'react';

import { Container, Wrapper } from './styles';
import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';

interface Props {
  setColors: Function;
}
const Layout: React.FC<Props> = ({ setColors }) => {
  return (
    <Container>
      <Wrapper>
        <MenuBar setColors={setColors} />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
