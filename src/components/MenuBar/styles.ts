import styled, { css } from 'styled-components';
import { Home, Notifications, Email, FavoriteBorder, Person, ExitToApp, Rocketseat, Brush } from '../../styles/Icons';
import RModal from 'react-modal';
import Button from '../Button'
export const Container = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;

    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    align-items: flex-start;

  }
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
      
    }
    padding-right: 15px;
  }

  padding: 8px.25px 0;
  outline: 0;
  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }
    @media (min-width: 1280px) {
      width: 100%;
      height: unset;
      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;

  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }
  &:hover, &.active {
    span, svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`


const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`
export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;
  > path {
    fill: var(--twitter);
  }
  margin-bottom: 20px;
`

export const HomeIcon = styled(Home)`${iconCSS}`
export const BellIcon = styled(Notifications)`${iconCSS}`
export const EmailIcon = styled(Email)`${iconCSS}`
export const FavoriteIcon = styled(FavoriteBorder)`${iconCSS}`
export const ProfileIcon = styled(Person)`${iconCSS}`
export const BrushIcon = styled(Brush)`${iconCSS}`


export const Botside = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;

    >span {
      color: var(--gray);
    }
  }
`

export const ExitIcon = styled(ExitToApp)`
display: none;

@media (min-width: 1280px) {
  display: inline-block;
  width: 25px;
  height: 25px;
  color: var(--white);

  margin-left: 30px;

  cursor: pointer;

  &:hover {
    >path {
      color: var(--like);
    }
  }
}
`
export const ColorPick = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  .color {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: ${props => props.color ? `var(--${props.color})` : 'var(--blue)'};
    
  }
  cursor: pointer;
  transition: transform .2s;
  > img {
    margin-top: 8px;
    width: 30px;
  }
  &:hover {
    transform: scale(1.1);
  }
`
export const Modal = styled(RModal)`
  border: 0;
  position: absolute;
  background: var(--primary);
  padding: 32px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  @media (min-width: 390px) {width: 90%}
  @media (min-width: 590px) {width: 70%}
  @media (min-width: 990px) {width: 40%}
  display: flex;
  flex-direction: column;
  align-items: center;
  > h4 {
    font-size: 20px;
  }
  > p {
    text-align: center;
    color: var(--gray);
  }
  .colors {
    background: var(--secondary);
    padding: 12px 20px;
    border-radius: 6px;
    margin-top: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
export const SuccessButton = styled(Button)`
  margin-top: 16px;
  border-radius: 16px;
  padding: 8px;
`