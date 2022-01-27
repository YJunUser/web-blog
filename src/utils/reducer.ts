import { Toast } from '@douyinfe/semi-ui';
import React from 'react';
import { Article, getArticles, getLife } from '../api/articles';

interface State<T> {
  isLoading?: boolean;
  data: T;
  error?: string;
}

type Action<T> =
  | { type: 'REQUEST' }
  | { type: 'SUCCESS'; data: T }
  | { type: 'FAILURE' };

const ArticleReducer: React.Reducer<State<Article[]>, Action<Article[]>> = (
  state,
  action
) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        isLoading: true,
      };

    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };

    case 'FAILURE':
      return {
        ...state,
        isLoading: false,
        error: '请求失败，请重试',
      };
  }
};

export function useFetchArticles() {
  const [state, dispatch] = React.useReducer(ArticleReducer, {
    isLoading: false,
    data: [],
    error: '',
  });

  React.useEffect(() => {
    const getData = async () => {
      try {
        dispatch({ type: 'REQUEST' });
        const articles = (await (await getArticles()).data.data) || [];
        dispatch({ type: 'SUCCESS', data: articles });
      } catch (error) {
        dispatch({ type: 'FAILURE' });
        Toast.error('服务出错，请稍后重试');
      }
    };
    getData();
  }, []);

  return {
    isLoading: state.isLoading,
    data: state.data,
    error: state.error,
  };
}

export function useFetchMoments() {
  const [state, dispatch] = React.useReducer(ArticleReducer, {
    isLoading: false,
    data: [],
    error: '',
  });

  React.useEffect(() => {
    const getData = async () => {
      try {
        dispatch({ type: 'REQUEST' });
        const articles = (await (await getLife()).data.data) || [];
        dispatch({ type: 'SUCCESS', data: articles });
      } catch (error) {
        dispatch({ type: 'FAILURE' });
        Toast.error('服务出错，请稍后重试');
      }
    };
    getData();
  }, []);

  return {
    isLoading: state.isLoading,
    data: state.data,
    error: state.error,
  };
}
