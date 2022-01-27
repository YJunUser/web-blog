import { Empty, List } from '@douyinfe/semi-ui';
import { ArticleItem } from './components/ArticleItem';
import { useFetchArticles } from '../../utils/reducer';
import { Title } from './style';
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from '@douyinfe/semi-illustrations';
import { LoadingIndex } from '../../components/Loading';

export const Articles = () => {
  const { data: articles, isLoading, error } = useFetchArticles();

  if (isLoading) {
    return <LoadingIndex></LoadingIndex>;
  }

  if (error) {
    return (
      <Empty
        image={<IllustrationConstruction style={{ width: 150, height: 150 }} />}
        darkModeImage={
          <IllustrationConstructionDark style={{ width: 150, height: 150 }} />
        }
        title={'功能建设中'}
        description="当前功能暂未开放，敬请期待。"
      />
    );
  }
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
