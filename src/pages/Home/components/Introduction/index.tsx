import { Article, Content, Link, Title } from './style';

export const Introduction = () => {
  return (
    <Article>
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
        <Link href="https://github.com/YJunUser" color="gray" target={'_blank'}>
          Github
        </Link>
        , <br></br>
        and Chat on&nbsp;
        <Link
          href="https://github.com/YJunUser"
          color="#39b362"
          target={'_blank'}
        >
          WeChat
        </Link>
        .
      </Content>
    </Article>
  );
};
