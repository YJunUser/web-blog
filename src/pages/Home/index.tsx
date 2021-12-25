import React from 'react';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Introduction } from './components/Introduction';
import { LatestArticle } from './components/LatestArticle';
import { Life } from './components/Life';

export const Home = () => {
  return (
    <React.Fragment>
      <Introduction></Introduction>
      <LatestArticle></LatestArticle>
      <Life></Life>
      <Banner></Banner>
      <Footer></Footer>
    </React.Fragment>
  );
};
