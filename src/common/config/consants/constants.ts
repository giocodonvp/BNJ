export const LOCALE = 'locale';
export const DEFAULT_LOCALE = 'vi';
export const ACCESS_TOKEN = 'access-token';
export const REFRESH_TOKEN = 'refresh-idx';
export const USER_NAME = 'user-name';
export const CUSTOMER_NAME = 'customer-name';
export const CUSTOMER_ID = 'customer-id';
export const APP_DATE_MONTH_YEAR_FORMAT = 'MM-YYYY';
export const APP_DATE_YEAR_MONTH_FORMAT = 'YYYYMM';
export const APP_TIME_FORMAT = 'HH:mm';
export const APP_TIME_FORMAT_2 = 'HH:mm:ss';
export const TYPE_TIME_FORMAT = 'HHmmss';
export const TYPE_TIME_FORMAT_OUTPUT = 'HH:mm:ss';
export const FORMAT_YYYY_MM_DD = 'YYYY-MM-DD';
export const FORMAT_YYYYMMDD = 'YYYYMMDD';
export const FORMAT_YYYYMMDDHHMMSS = 'YYYYMMDDHHmmss';
export const FORMAT_DD_MM_YYYY = 'DD/MM/YYYY';
export const FORMAT_HHMMSSDD_MM_YYYY = 'HH:mm:ss DD-MM-YYYY';
export const APP_TIMESTAMP_FORMAT = 'DD.MM.YYYY HH:mm';
export const APP_TIMESTAMP_FORMAT_2 = 'DD/MM/YYYY HH:mm:ss';
export const APP_LOCAL_DATE_FORMAT = 'DD.MM.YYYY';
export const APP_LOCAL_DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm';
export const APP_DATETIME_FORMAT_ES = 'YYYY-MM-DDTHH:mm:ss';
export const APP_DD_MM_YYYY = 'DD-MM-YYYY';
export const APP_DATE_OUTPUT = 'YYYYMMDD';
export const FORMAT_DATE = 'YYYY-MM-DD HH:mm:ss SSS';
export const VND = 'vnđ';
export const TEXT_EMPTY = '';
export const RESPONSECD_SUCCESS = '000000';
export const DEFAULT_SIZE = 15;
export const EXCEL_EXTENSION = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
export const PDF_EXTENSION = 'application/pdf';
export const PNG_EXTENSION = 'image/png';
export const JPG_EXTENSION = 'image/jpeg';
export const BANK_CODE_DEFAULT = 'BKCD';
export const VND_CD = 'VND';
export const MAX_TRANS_PER_REQUEST = 1000;
export const MAX_PRICE_NUMBER = 99999999999999999999;

export const MOBILE_DATE_FORMAT = 'DD/MM/YYYY';
export const MOBILE_DATE_TIME_FORMAT = 'DD/MM/YYYY HH:mm';

export const LOCALES_SUPPOST = {
  vi: 'vi',
  ko: 'ko',
  en: 'en',
};

export const NOTIFICATION = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
};

export const BOOLEAN_STR = {
  TRUE_STR: 'Y',
  FALSE_STR: 'N',
};

export const USER_TYPE = {
  M: 'userType.master',
  A: 'userType.all',
  G: 'userType.group',
};

export const SERVICES_TYPE = {
  E: 'E-Collection',
  A: 'Auto Collection',
  T: 'Domestic Transfer',
};

export const AUTO_COLLECTION_STATUS = [
  { name: 'all', value: '' },
  { name: 'transaction-status.transfer-request', value: 'R' },
  { name: 'transaction-status.waiting-for', value: 'W' },
  { name: 'transaction-status.processing', value: 'P' },
  { name: 'transaction-status.done', value: 'D' },
  { name: 'transaction-status.fail', value: 'F' },
];
