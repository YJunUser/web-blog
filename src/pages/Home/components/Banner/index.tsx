import { Chat, Content, Ground, Title } from './style';
import chatPng from '../../../../assets/chat.png';
import { useEffect, useState } from 'react';

interface BannerProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}
export const Banner = (props: BannerProps) => {
  const { setModalVisible } = props;

  const [big, setBig] = useState<boolean>(true);

  useEffect(() => {
    window.onresize = function () {
      const width = window.innerWidth;
      if (width > 1200) setBig(true);
      else setBig(false);
    };
  }, []);

  return (
    <Ground big={big}>
      <Title>Are you interested in me?</Title>
      <Content>
        Let's have a conversation! I'd love to hear about what you're <br></br>
        working, how you feel about me.<br></br>
        (maybe we can find a way to work together or become friends.)
      </Content>
      <Chat
        onClick={() => {
          setModalVisible(true);
        }}
      >
        <img src={chatPng} alt=""></img>
        <span>Chat</span>
      </Chat>
    </Ground>
  );
};
