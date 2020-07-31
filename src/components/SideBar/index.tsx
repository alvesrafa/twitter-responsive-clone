import React from 'react';
import StickBox from 'react-sticky-box';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

interface Props {
  modalIsOpen: Boolean;
}
const SideBar: React.FC<Props> = ({ modalIsOpen }) => {
  return (
    <Container>
      <SearchWrapper modalIsOpen={modalIsOpen}>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Nome aleatorio" nickname="@nomeale" />,
              <FollowSuggestion name="Nome aleatorio" nickname="@nomeale" />,
              <FollowSuggestion name="Nome aleatorio" nickname="@nomeale" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickBox>
    </Container>
  );
};

export default SideBar;
