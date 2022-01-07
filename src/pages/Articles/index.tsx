import { List, Toast } from '@douyinfe/semi-ui';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Article, getArticles } from '../../api/articles';
import { ArticleItem } from './components/ArticleItem';
import { Title } from './style';

export const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const articles = (await (await getArticles()).data.data) || [];
        setArticles(articles);
      } catch (error) {
        Toast.error('服务出错，请稍后重试');
      }
    };

    getData();
  }, []);
  return (
    <div>
      <Title>Articles</Title>
      <List
        dataSource={articles}
        split={false}
        renderItem={(item) => <ArticleItem article={item}></ArticleItem>}
      ></List>
    </div>
  );
};
