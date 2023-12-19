import axios, {AxiosInstance} from 'axios';

class AxiosClient {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create();
  }

  public create() {
    this.httpClient = axios.create({
      baseURL: 'http://localhost:3333',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      withCredentials: true,
      timeout: 1000 * 90,
      timeoutErrorMessage: 'Servidor indisponível',
    });
  }

  public get(): AxiosInstance {
    return this.httpClient;
  }
}

export default new AxiosClient();
