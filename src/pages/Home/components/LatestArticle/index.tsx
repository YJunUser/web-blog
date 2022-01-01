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
import { Article, getArticles } from '../../../../api/articles';
import { Toast } from '@douyinfe/semi-ui';
import { ReactComponent as JavascriptIcon } from '../../../../assets/Components/Icons/JavaScript.svg';
import { ReactComponent as ReactIcon } from '../../../../assets/Components/Icons/React.svg';
import { ReactComponent as CssIcon } from '../../../../assets/Components/Icons/Storybook.svg';
import { ReactComponent as NginxIcon } from '../../../../assets/Components/Icons/Nginx.svg';
import { useNavigate } from 'react-router-dom';

const ArticleCom = ({ article }: { article: Article }) => {
  const navigate = useNavigate();
  const SwitchIcon = (): JSX.Element => {
    switch (article.tags) {
      case 'CSS': {
        return <CssIcon width={'22px'} height={'22px'}></CssIcon>;
      }
      case 'React': {
        return <ReactIcon width={'22px'} height={'22px'}></ReactIcon>;
      }
      case 'Typescript': {
        return <JavascriptIcon width={'22px'} height={'22px'}></JavascriptIcon>;
      }
      case 'Nginx': {
        return <NginxIcon width={'22px'} height={'22px'}></NginxIcon>;
      }
    }
    return <JavascriptIcon></JavascriptIcon>;
  };

  return (
    <Intro
      onClick={() => {
        navigate(`/articles/${article.title}`);
      }}
    >
      <FirstLine>
        <SwitchIcon></SwitchIcon>
        <span>{article.title}</span>
      </FirstLine>
      <SecondLine>{article.introduction}</SecondLine>
    </Intro>
  );
};

export const LatestArticle = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const articles = (await (await getArticles()).data.data) || [];
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
        <Title>Latest Articles</Title>
        <AllActives onClick={() => navigate('/articles')}>
          All articles
          <IconDoubleChevronRight size="small" style={{ marginLeft: '6px' }} />
        </AllActives>
      </TitleContainer>
      {articles.map((article, index) => {
        return <ArticleCom article={article} key={index}></ArticleCom>;
      })}
    </MainContent>
  );
};
