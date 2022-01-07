import http, { Response } from '../request';
import { AxiosPromise } from 'axios';
import { getTrueURL } from '../utils';

type ArticleTag =
  | 'CSS'
  | 'React'
  | 'nodejs'
  | 'Nginx'
  | 'linux'
  | 'Vue'
  | 'TypeScript'
  | 'mysql';

export interface Article {
  title?: string;
  date?: string;
  tags?: ArticleTag;
  introduction: string;
}

export const getArticles = (): AxiosPromise<Response<Article[]>> => {
  return http.request({
    url: getTrueURL('/articles'),
    method: 'get',
  });
};

export const getArticleByPath = (
  path: string
): AxiosPromise<Response<string>> => {
  return http.request({
    url: getTrueURL(`/articles/${path}`),
    method: 'get',
  });
};
