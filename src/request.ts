import axios, { AxiosRequestConfig } from 'axios';

const apiBaseUrl =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

export interface Response<T> {
  data?: T;
}
class HttpRequest {
  constructor(
    public baseURL: string | undefined = apiBaseUrl,
    public timeout: number = 5000
  ) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  private mergeOptions(option: AxiosRequestConfig): AxiosRequestConfig {
    return { ...option, baseURL: this.baseURL, timeout: this.timeout };
  }

  public request(option: AxiosRequestConfig) {
    const instance = axios.create();
    const options = this.mergeOptions(option);
    return instance(options);
  }
}

export default new HttpRequest();
