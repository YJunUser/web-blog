import { List } from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../../../api/articles';
import { SwitchIcon } from '../../../../components/SwtichIcon';
import { Container, Introduction, RD, Time, Title } from './style';

export const ArticleItem = ({ article }: { article: Article }) => {
  const navigate = useNavigate();
  return (
    <List.Item
      style={{ marginTop: '100px' }}
      header={
        <SwitchIcon
          article={article}
          style={{ width: '50px', height: '50px' }}
        ></SwitchIcon>
      }
      main={
        <Container>
          <Time>{article.date}</Time>
          <Title>{article.title}</Title>
          <Introduction>{article.introduction}</Introduction>
          <RD
            onClick={() => {
              navigate(`/articles/${article.title}`);
            }}
          >
            Read more...
          </RD>
        </Container>
      }
    ></List.Item>
  );
};
