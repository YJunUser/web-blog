import React from 'react';
import { AllActives, MainContent, Title, TitleContainer } from './style';
import { IconDoubleChevronRight } from '@douyinfe/semi-icons';

export const Life = () => {
  return (
    <MainContent>
      <TitleContainer>
        <Title>Life Moments</Title>
        <AllActives>
          All moments
          <IconDoubleChevronRight size="small" style={{ marginLeft: '6px' }} />
        </AllActives>
      </TitleContainer>
    </MainContent>
  );
};
