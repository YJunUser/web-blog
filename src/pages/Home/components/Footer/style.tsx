import styled from '@emotion/styled';

export const Container = styled.footer`
  margin-top: 400px;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    &:nth-of-type(n + 2) {
      margin-left: 33px;
    }
  }
`;
