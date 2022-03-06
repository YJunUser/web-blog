import styled from '@emotion/styled';

export const Title = styled.div`
  font-size: 44px;
  line-height: 60px;
  font-weight: bold;
  color: #21243d;
`;

export const Content = styled.main`
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  /* Dark Color */
  color: #21243d;
  margin-top: 40px;
`;

export const Link = styled.a<{ color: string }>`
  color: ${(props) => props.color};
  text-decoration: underline;
`;

export const Article = styled.article`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
`;
