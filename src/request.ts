import axios, { AxiosRequestConfig } from 'axios';

const apiBaseUrl = '';
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
