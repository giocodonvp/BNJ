
import { IResponseCommon } from '../model/common.model';
import { AxiosResponse } from 'axios';
import { UploadFile } from 'antd/es/upload/interface';

export const SUCCESS = '000000';

export const calculateTime = (momentTime: any) => {
  return (momentTime.hours() * 3600 + momentTime.minutes() * 60 + momentTime.seconds()) * 1000;
};

export const regexNumber = (text: string) => {
  if (!text) {
    return;
  }
  return text.replace(/[^0-9.]/g, '');
};

export const checkSuccess = (response: AxiosResponse<IResponseCommon>) => {
  return response.data.responseCd === SUCCESS;
};

export const validateFileType = ({ type, name }: UploadFile, allowedTypes?: string) => {
  if (!allowedTypes) {
    return true;
  }

  if (type) {
    return allowedTypes.includes(type);
  }
};

export const validateListFileType = ({ type, name }: UploadFile, allowedTypes?: string[]) => {
  if (!allowedTypes) {
    return true;
  }
  if (type) {
    return allowedTypes.filter(allowType => allowType.includes(type)).length > 0;
  }
};

export const removeVietnameseAccents = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .replace(/\s+/g, ' ');
};

export const removeSpaceString = (str: string) => {
  return str.replace(/\s+/g, '');
};
