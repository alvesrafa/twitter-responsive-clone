import React from 'react';
import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Rafael Alves</h1>
        <h2>@raufael_</h2>

        <p>
          ReactJS developer
          <a href="github.com/alvesrafa"> @raufael_</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Ilhabela - SP
          </li>
          <li>
            <CakeIcon />
            Nascido em 17 de maio de 1999
          </li>
        </ul>
        <Followage>
          <span>
            seguindo<strong> 23</strong>
          </span>
          <span>
            <strong>234 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
