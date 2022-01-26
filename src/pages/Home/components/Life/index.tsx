import React, { useEffect, useState } from 'react';
import {
  AllActives,
  FirstLine,
  Intro,
  MainContent,
  SecondLine,
  Title,
  TitleContainer,
} from './style';
import { IconDoubleChevronRight } from '@douyinfe/semi-icons';
import { Toast } from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';
import { Article, getLife } from '../../../../api/articles';
import { ReactComponent as LifeIcon } from '../../../../assets/life.svg';

const ArticleCom = ({ article }: { article: Article }) => {
  const navigate = useNavigate();

  return (
    <Intro
      onClick={() => {
        navigate(`/life/${article.title}`);
      }}
    >
      <FirstLine>
        <LifeIcon width={'22px'} height={'22px'}></LifeIcon>
        <span>{article.title}</span>
      </FirstLine>
      <SecondLine>{article.introduction}</SecondLine>
    </Intro>
  );
};

export const Life = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const articles = (await (await getLife()).data.data) || [];
        setArticles(articles.slice(0, 3));
      } catch (error) {
        Toast.error('服务出错，请稍后重试');
      }
    };

    getData();
  }, []);
  return (
    <MainContent>
      <TitleContainer>
        <Title>Life Moments</Title>
        <AllActives onClick={() => navigate('/life')}>
          All moments
          <IconDoubleChevronRight size="small" style={{ marginLeft: '6px' }} />
        </AllActives>
      </TitleContainer>
      {articles.map((article, index) => {
        return <ArticleCom article={article} key={index}></ArticleCom>;
      })}
    </MainContent>
  );
};
