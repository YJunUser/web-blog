import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyle = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.isActive ? 'var(--primary)' : '#000')};
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
`;
