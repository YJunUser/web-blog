import http, { Response } from '../request';
import { AxiosPromise } from 'axios';

type ArticleTag = 'CSS' | 'React' | 'Typescript' | 'nodejs' | 'Nginx';

export interface Article {
  title?: string;
  date?: string;
  tags?: ArticleTag;
  introduction: string;
}

export const getArticles = (): AxiosPromise<Response<Article[]>> => {
  return http.request({
    url: '/api/articles',
    method: 'get',
  });
};
