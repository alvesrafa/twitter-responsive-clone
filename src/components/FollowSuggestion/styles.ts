import styled from 'styled-components';
import Button from '../Button'
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;
export const Avatar = styled.div`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  background: var(--gray);
  margin-right: 10px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  > strong, span {
    font-size: 14px;
  }
  > span {
    color: var(--gray);
  }
`
export const FollowButton = styled(Button)`
  padding: 6px 17px;
`