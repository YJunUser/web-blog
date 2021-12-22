import styled from '@emotion/styled';

export const Container = styled.main`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;

export const Right = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  div {
    &:nth-of-type(n + 2) {
      margin-left: 33px;
    }
  }
`;
