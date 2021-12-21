import styled from '@emotion/styled';
import Logo from '../../assets/red.png';

export const Content = styled.div`
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 50%;
  height: 50%;
`;

export const Widget = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #bc0d0d;
  flex-flow: column nowrap;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 24px;
`;
