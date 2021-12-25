import React from 'react';
import { AllActives, MainContent, Title, TitleContainer } from './style';
import { IconDoubleChevronRight } from '@douyinfe/semi-icons';

export const LatestArticle = () => {
  return (
    <MainContent>
      <TitleContainer>
        <Title>Latest Articles</Title>
        <AllActives>
          All articles{' '}
          <IconDoubleChevronRight size="small" style={{ marginLeft: '6px' }} />
        </AllActives>
      </TitleContainer>
    </MainContent>
  );
};
