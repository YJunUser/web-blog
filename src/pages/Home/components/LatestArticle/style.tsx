import styled from '@emotion/styled';

export const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
`;

export const AllActives = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainContent = styled.div`
  padding-bottom: 100px;
`;

export const Intro = styled.div`
  max-width: 926px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 30px;
`;

export const FirstLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  span {
    margin-left: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const SecondLine = styled.span`
  margin-top: 10px;
  margin-left: 27px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #8695a4;
`;
