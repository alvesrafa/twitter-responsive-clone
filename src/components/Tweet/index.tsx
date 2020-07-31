import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  Dot,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Perfil</strong>
            <span>@rocket</span>
            <Dot />
            <time>21 de Jul</time>
          </Header>
          <Description>Titulo Tweet</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              13
            </Status>
            <Status>
              <RetweetIcon />
              13
            </Status>
            <Status>
              <LikeIcon />
              666
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
