import Toast from 'react-native-root-toast';

import EHttpStatusCodes from '@enums/httpStatusCodes';
import colors from '@styles/colors';
import {AxiosError} from 'axios';

import IHttpClientError from '@services/httpClient/response/default/IHttpClientError';

import getToastConfig from './toastConfig';

function _httpClientError(err: AxiosError<IHttpClientError>): void {
  const statusHttpCode = err.response?.status;
  if (statusHttpCode === EHttpStatusCodes.BAD_REQUEST) {
    const message = err.response?.data.error.message;
    Toast.show(
      message || 'Falha para realizar ação',
      getToastConfig(colors.danger),
    );
    return;
  }
  if (statusHttpCode === EHttpStatusCodes.CONFLICT) {
    const message = err.response?.data.error.message;
    Toast.show(message || 'Falha na requisição', getToastConfig(colors.danger));
    return;
  }
  if (statusHttpCode === EHttpStatusCodes.UNAUTHORIZED) {
    const message = err.response?.data.error.message;
    Toast.show(message || 'Falha na requisição', getToastConfig(colors.danger));
    return;
  }
  if (statusHttpCode === EHttpStatusCodes.INTERNAL_SERVER_ERROR) {
    Toast.show(
      'Servidor indisponível no momento',
      getToastConfig(colors.danger),
    );
    return;
  }
  if (statusHttpCode === EHttpStatusCodes.FORBIDDEN) {
    const message = err.response?.data.error.message as string;
    Toast.show(message, getToastConfig(colors.danger));
    return;
  }
  Toast.show('Falha na requisição', getToastConfig(colors.danger));
}
function _appError(message: string): void {
  Toast.show(message, getToastConfig(colors.danger));
}
function errorHandling(err: AxiosError<any>): void {
  if (err.isAxiosError) {
    _httpClientError(err);
    return;
  }
  _appError(err.message);
}
export default errorHandling;
