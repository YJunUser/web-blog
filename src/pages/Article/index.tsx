import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByPath } from '../../api/articles';

function showhtml(htmlString: string) {
  var html = { __html: htmlString };
  return <div dangerouslySetInnerHTML={html}></div>;
}

export const Article = () => {
  const params = useParams();
  const [htmlStr, setHtmlStr] = useState<string>('');
  useEffect(() => {
    const getArticle = async () => {
      const res = await (await getArticleByPath(params.article || '')).data;
      setHtmlStr(res.data || '');
    };
    window.scrollTo(0, 0);

    getArticle();
  }, []);
  return <div style={{ paddingBottom: '30px' }}>{showhtml(htmlStr)}</div>;
};
