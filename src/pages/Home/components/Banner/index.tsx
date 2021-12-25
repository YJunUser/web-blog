import { Chat, Content, Ground, Title } from './style';
import chatPng from '../../../../assets/chat.png';

export const Banner = () => {
  return (
    <Ground>
      <Title>Are you interested in me?</Title>
      <Content>
        Let's have a conversation! I'd love to hear about what you're <br></br>
        working, how you feel about me.<br></br>
        (maybe we can find a way to work together or become friends.)
      </Content>
      <Chat>
        <img src={chatPng} alt=""></img>
        <span>Chat</span>
      </Chat>
    </Ground>
  );
};
