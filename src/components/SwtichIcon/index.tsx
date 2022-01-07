import { ReactComponent as JavascriptIcon } from '../../assets/Components/Icons/JavaScript.svg';
import { ReactComponent as ReactIcon } from '../../assets/Components/Icons/React.svg';
import { ReactComponent as CssIcon } from '../../assets/Components/Icons/Storybook.svg';
import { ReactComponent as NginxIcon } from '../../assets/Components/Icons/Nginx.svg';
import { ReactComponent as NodeIcon } from '../../assets/Components/Icons/nodejs.svg';
import { ReactComponent as LinuxIcon } from '../../assets/Components/Icons/linux.svg';
import { ReactComponent as MysqlIcon } from '../../assets/Components/Icons/mysql.svg';
import { ReactComponent as TypescriptIcon } from '../../assets/Components/Icons/typescript.svg';
import { ReactComponent as VueIcon } from '../../assets/Components/Icons/vue.svg';
import { Article } from '../../api/articles';
import React from 'react';
export const SwitchIcon = ({
  article,
  style,
}: {
  article: Article;
  style: React.CSSProperties;
}): JSX.Element => {
  const { width, height } = style;
  switch (article.tags) {
    case 'CSS': {
      return <CssIcon width={width} height={height}></CssIcon>;
    }
    case 'React': {
      return <ReactIcon width={width} height={height}></ReactIcon>;
    }
    case 'Nginx': {
      return <NginxIcon width={width} height={height}></NginxIcon>;
    }
    case 'nodejs': {
      return <NodeIcon width={width} height={height}></NodeIcon>;
    }
    case 'linux': {
      return <LinuxIcon width={width} height={height}></LinuxIcon>;
    }
    case 'mysql': {
      return <MysqlIcon width={width} height={height}></MysqlIcon>;
    }
    case 'Vue': {
      return <VueIcon width={width} height={height}></VueIcon>;
    }
    case 'TypeScript': {
      return <TypescriptIcon width={width} height={height}></TypescriptIcon>;
    }
  }
  return <JavascriptIcon width={width} height={height}></JavascriptIcon>;
};
