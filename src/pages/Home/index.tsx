import React from 'react';
import { Introduction } from './components/Introduction';
import { LatestArticle } from './components/LatestArticle';
import { Life } from './components/Life';

export const Home = () => {
  return (
    <React.Fragment>
      <Introduction></Introduction>
      <LatestArticle></LatestArticle>
      <Life></Life>
    </React.Fragment>
  );
};
