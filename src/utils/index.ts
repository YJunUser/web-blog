export function getTrueURL(url: string) {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    return url;
  } else {
    return `/api${url}`;
  }
}
