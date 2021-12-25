import { IconGithubLogo, IconInstagram, IconWeibo } from '@douyinfe/semi-icons';
import { Container } from './style';

export const Footer = () => {
  const openBlank = (url: string) => {
    window.open(url);
  };

  return (
    <Container>
      <IconGithubLogo
        size="extra-large"
        onClick={() => openBlank('https://github.com/YJunUser')}
      />
      <IconWeibo
        size="extra-large"
        onClick={() => openBlank('https://weibo.com/u/6362416325')}
      />
      <IconInstagram size="extra-large" />
    </Container>
  );
};
