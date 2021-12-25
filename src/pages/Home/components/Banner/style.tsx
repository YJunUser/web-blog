import styled from '@emotion/styled';

export const Ground = styled.div`
  width: 100vw;
  height: 400px;
  background: #edf7fa;
  position: absolute;
  left: calc((1200px - 100vw) / 2);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 48px;
  line-height: 142%;
`;

export const Content = styled.span`
  margin-top: 23px;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 20px;
  width: 90px;
  height: 30px;
  background: #83f9a2;
  border-radius: 6px;
  margin-top: 46px;
  cursor: pointer;
  img {
    margin: 0px 9px;
  }
  span {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    color: #111a20;
  }
`;
