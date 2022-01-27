import { Spin } from '@douyinfe/semi-ui';

export const LoadingIndex = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
      }}
    >
      <Spin size="large"></Spin>
    </div>
  );
};
