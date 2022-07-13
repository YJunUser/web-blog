export function getTrueURL(url: string) {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    return url;
  } else {
    return `/api${url}`;
  }
}

export function lazyLoad() {
  const imgs = document.querySelectorAll('img');
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  const winHeight = window.innerHeight;
  if (imgs && imgs.length) {
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].offsetTop < scrollTop + winHeight) {
        imgs[i].src = imgs[i].getAttribute('data-src') || '';
      }
    }
  }
}
