import HttpStatusCode from '../client/http-status-code';
import { getAuthToken } from 'app/shared/util/store-utils';

const setupAxiosInterceptors = (onUnauthenticated, revokeToken, apiClient) => {
  const onRequestSuccess = config => {
    const token = getAuthToken();

    if (token) {
      config.headers.token = `${token}`;
    }

    return config;
  };

  const onResponseSuccess = response => {
    const { data } = response;

    if (data) {
      if (
        data.responseCd === HttpStatusCode.NEED_EXTEND_SESSION ||
        data.responseCd === HttpStatusCode.NEED_LOGIN ||
        data.responseCd === HttpStatusCode.SESSION_TIMEOUT ||
        data.responseCd === HttpStatusCode.INVALID_SESSION ||
        data.code === HttpStatusCode.NEED_EXTEND_SESSION ||
        data.code === HttpStatusCode.NEED_LOGIN ||
        data.code === HttpStatusCode.SESSION_TIMEOUT ||
        data.code === HttpStatusCode.INVALID_SESSION
      ) {
        onUnauthenticated();
        revokeToken();
      }

      return response;
    }
  };

  const onResponseError = err => {
    return Promise.reject(err);
  };

  apiClient.interceptors.request.use(onRequestSuccess);
  apiClient.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
