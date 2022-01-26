import { List } from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../../../api/articles';
import { Container, Introduction, RD, Time, Title } from './style';
import { ReactComponent as LifeIcon } from '../../../../assets/life.svg';

export const ArticleItem = ({ article }: { article: Article }) => {
  const navigate = useNavigate();
  return (
    <List.Item
      style={{ marginTop: '100px' }}
      header={
        <LifeIcon
          article={article}
          style={{ width: '50px', height: '50px' }}
        ></LifeIcon>
      }
      main={
        <Container>
          <Time>{article.date}</Time>
          <Title>{article.title}</Title>
          <Introduction>{article.introduction}</Introduction>
          <RD
            onClick={() => {
              navigate(`/life/${article.title}`);
            }}
          >
            Read more...
          </RD>
        </Container>
      }
    ></List.Item>
  );
};
