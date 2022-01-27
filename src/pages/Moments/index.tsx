import { Empty, List } from '@douyinfe/semi-ui';
import { LoadingIndex } from '../../components/Loading';
import { useFetchMoments } from '../../utils/reducer';
import { ArticleItem } from './components/ArticleItem';
import { Title } from './style';
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from '@douyinfe/semi-illustrations';

export const Moments = () => {
  const { data: articles, isLoading, error } = useFetchMoments();

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
      <Title>Life Moments</Title>
      <List
        dataSource={articles}
        split={false}
        renderItem={(item) => <ArticleItem article={item}></ArticleItem>}
      ></List>
    </div>
  );
};
