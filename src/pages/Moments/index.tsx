import { List, Toast } from '@douyinfe/semi-ui';
import React, { useEffect, useState } from 'react';
import { Article, getLife } from '../../api/articles';
import { ArticleItem } from './components/ArticleItem';
import { Title } from './style';

export const Moments = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const articles = (await (await getLife()).data.data) || [];
        setArticles(articles);
      } catch (error) {
        Toast.error('服务出错，请稍后重试');
      }
    };

    getData();
  }, []);
  return (
    <div>
      <Title>Life Moments</Title>
      <List
        dataSource={articles}
        split={false}
        renderItem={(item) => <ArticleItem article={item}></ArticleItem>}
      ></List>
    </div>
  );
};
