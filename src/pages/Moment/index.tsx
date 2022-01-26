import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLifeByPath } from '../../api/articles';

function showhtml(htmlString: string) {
  var html = { __html: htmlString };
  return <div dangerouslySetInnerHTML={html}></div>;
}

export const Moment = () => {
  const params = useParams();
  const [htmlStr, setHtmlStr] = useState<string>('');
  useEffect(() => {
    const getArticle = async () => {
      const res = await (await getLifeByPath(params.path || '')).data;
      setHtmlStr(res.data || '');
    };

    getArticle();
  }, []);
  return <div style={{ paddingBottom: '30px' }}>{showhtml(htmlStr)}</div>;
};