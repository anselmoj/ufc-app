import {Method} from 'axios';

interface IPostBodyIOSRequest {
  body: Record<string, string | number | boolean | undefined> | undefined;
  headers: Record<string, string | number | boolean>;
  method: Method;
  params?: Record<string, string | number | undefined>;
  url: string;
}

export default IPostBodyIOSRequest;
