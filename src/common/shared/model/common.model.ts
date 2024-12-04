import { CUSTOMER_ID } from 'app/config/constant/constants';
import { getUserId } from 'app/shared/util/entity-utils';
import { getDateTimeNow } from 'app/shared/util/date-utils';
import { getLanguage } from 'app/shared/util/store-utils';

export interface IGrp {
  grpCd: string;
  grpNm: string;
  serviceId: string;
}

export interface IPaging {
  pageNum: number;
  pageSize: number;
}

export interface IMgr {
  userId: string;
  userNm: string;
}

export interface IPayer {
  payerNo: string;
  payerNm: string;
  grpCd: string;
  grpNm: string;
  serviceId: string;
  managerId: string;
}

export interface IPayerInfo {
  accntHolderNm: string;
  accntNo: string;
  bankCd: string;
  bankNm: string;
  benefitAccntNo: string;
  emailNotiStatus: string;
  payerNm: string;
  payerNo: string;
  payerTel: string;
  smsNotiStatus: string;
}

export interface IParamCommon {
  customerId: string;
  userId: string;
  requestTs: string;
  lang: string;
  data?: any;
  list?: any;
  page?: any;
}

export interface IResponseCommon {
  responseCd: string;
  responseMsg: string;
  responseTs: string;
  data?: any;
  list?: any;
  totalRecord?: number;
  totalAmount?: number;
  totalRecvAmount?: number;
  totalUnrecvAmount?: number;
}

export interface ILookup {
  dataSource: any;
  valueExpr: string;
  displayExpr: string;
}

export interface IDataColumnTable {
  dataField: string;
  allowFiltering: boolean;
  caption: string;
  width?: any;
  isPrice?: boolean;
  isDate?: boolean;
  formatDateInput?: string;
  formatDateOutput?: string;
  alignment: string;
  isLookup: boolean;
  lookup?: ILookup;
  isRequired?: boolean;
  minWidth?: any;
  isTranslate?: boolean;
}

export const createCommonIParams = (data?: any): IParamCommon => {
  return {
    customerId: Storage.session.get(CUSTOMER_ID),
    userId: getUserId(),
    requestTs: getDateTimeNow(),
    lang: getLanguage(),
    data,
  };
};

export const createCommonIParamsList = (list?: any): IParamCommon => {
  return {
    customerId: Storage.session.get(CUSTOMER_ID),
    userId: getUserId(),
    requestTs: getDateTimeNow(),
    lang: getLanguage(),
    list,
  };
};

export const createCommonIParamsListAndData = (data?: any, list?: any): IParamCommon => {
  return {
    customerId: Storage.session.get(CUSTOMER_ID),
    userId: getUserId(),
    requestTs: getDateTimeNow(),
    lang: getLanguage(),
    list,
    data,
  };
};

export const createCommonIParamsPage = (page?: IPaging): IParamCommon => {
  return {
    customerId: Storage.session.get(CUSTOMER_ID),
    userId: getUserId(),
    requestTs: getDateTimeNow(),
    lang: getLanguage(),
    page,
  };
};
export const createCommonIParamsDataPage = (data?, page?: IPaging): IParamCommon => {
  return {
    customerId: Storage.session.get(CUSTOMER_ID),
    userId: getUserId(),
    requestTs: getDateTimeNow(),
    lang: getLanguage(),
    data,
    page,
  };
};
