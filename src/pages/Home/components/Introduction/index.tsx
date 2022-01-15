import { Avatar } from '@douyinfe/semi-ui';
import { Article, Content, Link, Title } from './style';
import Me from '../../../../assets/me.jpg';
interface IntroProps {
  setModalVisible: (modalVisible: boolean) => void;
}
export const Introduction = (props: IntroProps) => {
  const { setModalVisible } = props;
  return (
    <Article>
      <div>
        <Title>
          Hi, I'm YaoBoJun, beginners and <br></br> programming enthusiasts.
        </Title>
        <Content>
          This website is mainly to record my study and life process.<br></br>I
          talk about my journey on&nbsp;
          <Link
            href="https://weibo.com/u/6362416325"
            color="#ff8200"
            target={'_blank'}
          >
            WeiBo
          </Link>
          , commit code to&nbsp;
          <Link
            href="https://github.com/YJunUser"
            color="gray"
            target={'_blank'}
          >
            Github
          </Link>
          , <br></br>
          and Chat on&nbsp;
          <Link
            color="#39b362"
            target={'_blank'}
            onClick={(e) => {
              e.preventDefault();
              setModalVisible(true);
            }}
            href="/"
          >
            WeChat
          </Link>
          .
        </Content>
      </div>
      <Avatar
        src={Me}
        style={{ width: '255px', height: '255px', marginRight: '60px' }}
      ></Avatar>
    </Article>
  );
};
