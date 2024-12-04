import queryString from 'query-string';
import axios from 'axios';
import moment from 'moment';
import { Storage, translate } from 'react-jhipster';

import { openNotification, openNotificationAction } from 'app/shared/util/entity-utils';
import { checkSuccessDownload } from 'app/shared/util/global-function';
import { SERVER_API_URL } from '../constant/api';
import { ACCESS_TOKEN, APP_DD_MM_YYYY, NOTIFICATION } from '../constant/constants';
import { IParamCommon } from 'app/shared/model/common.model';

/**
 * Create basic config axios
 */
export const apiClient = axios.create({
  baseURL: SERVER_API_URL,
  timeout: 15000,
  withCredentials: true,
});

export const downloadFileWithAxios = (urlApi: string, query: IParamCommon, fileName: string) => {
  const token = Storage.session.get(ACCESS_TOKEN);
  const newQuery = {
    customerId: query.customerId,
    userId: query.userId,
    requestTs: query.requestTs,
    lang: query.lang,
    ...query.data,
  };

  const queryUrl = queryString.stringify(newQuery);
  const requestUrl = `${SERVER_API_URL}${urlApi}?${queryUrl}`;

  axios({
    url: requestUrl,
    method: 'GET',
    responseType: 'blob',
    headers: {
      token,
    },
  })
    .then(response => {
      if (checkSuccessDownload(response)) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${translate(fileName)}${moment().format(APP_DD_MM_YYYY)}.xlsx`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        openNotificationAction(NOTIFICATION.ERROR, 'message.download-error', '', response.data.responseMsg);
      }
    })
    .catch(error => {
      openNotification(NOTIFICATION.ERROR, '', '', error.message);
    });
};
