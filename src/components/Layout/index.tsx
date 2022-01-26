import React from 'react';
import { Outlet } from 'react-router-dom';

import { CustomLink } from '../CustomLink';
import { Container, Right } from './style';

export const Layout = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Container>
        <CustomLink to="/about">Yao</CustomLink>
        <Right>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/articles">Articles</CustomLink>
          <CustomLink to="/life">Life</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </Right>
      </Container>
      <Outlet></Outlet>
    </React.Fragment>
  );
};
