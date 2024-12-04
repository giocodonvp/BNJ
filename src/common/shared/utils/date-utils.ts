import {
  APP_DATE_MONTH_YEAR_FORMAT,
  APP_DATE_YEAR_MONTH_FORMAT,
  APP_DATETIME_FORMAT_ES,
  APP_LOCAL_DATE_FORMAT,
  APP_LOCAL_DATETIME_FORMAT,
  APP_TIME_FORMAT,
  APP_TIMESTAMP_FORMAT,
  FORMAT_DATE,
  FORMAT_YYYY_MM_DD,
  MOBILE_DATE_FORMAT,
  MOBILE_DATE_TIME_FORMAT,
} from '../../config/consants/constants';
import dayjs from 'dayjs';
import moment from 'moment';

export const convertDateTimeFromServer = (date: string) => (date ? dayjs(date).format(APP_LOCAL_DATETIME_FORMAT) : null);

export const convertDateTimeToServerTime = (date: string) => (date ? dayjs(date).format(APP_DATETIME_FORMAT_ES) : null);

export const convertDateTimeToServer = (date: string) => (date ? dayjs(date).toDate() : null);

export const displayDefaultDateTime = () => dayjs().startOf('day').format(APP_LOCAL_DATETIME_FORMAT);

export const convertDateToDDMMYYYY = (date: string) => (date ? moment.utc(date).local().format(APP_LOCAL_DATE_FORMAT) : '');

export const convertDateToYYYY_MM_DD = (date: string) => (date ? moment.utc(date).local().format(FORMAT_YYYY_MM_DD) : '');

export const convertStringToDateTime = (date: string) => (date ? moment.utc(date).local().format(APP_TIMESTAMP_FORMAT) : '');

export const convertDateToTime = (date: string) => (date ? moment.utc(date).local().format(APP_TIME_FORMAT) : '');

export const convertToYearMonth = (date: string) => (date ? moment.utc(date).local().format(APP_DATE_YEAR_MONTH_FORMAT) : '');

export const convertToMonthYear = (date: string) => (date ? moment.utc(date).local().format(APP_DATE_MONTH_YEAR_FORMAT) : '');

export const msToTime = (milliseconds: number) => {
  const ms = milliseconds % 1000;
  milliseconds = (milliseconds - ms) / 1000;
  const secs = milliseconds % 60;
  milliseconds = (milliseconds - secs) / 60;
  const mins = milliseconds % 60;
  const hrs = (milliseconds - mins) / 60;
  return hrs + ':' + mins + ':' + secs + '.' + ms;
};

export const convertTimeToMilliseconds = (date: string) => {
  const dateTime = convertDateToTime(date);
  const timeItems: string[] = dateTime.split(':');
  const hour = +timeItems[0];
  const minute = +timeItems[1];
  return (hour * 60 + minute) * 60000;
};

export const getDateTimeNow = () => {
  return moment(new Date()).format(FORMAT_DATE);
};

export const convertStringToDate = (string: string) => {
  if (string) {
    return moment(string, 'YYYYMMDD').format('DD-MM-YYYY');
  } else {
    return null;
  }
};

export const convertStringToDateMobile = (string: string) => {
  if (string) {
    return moment(string, 'YYYYMMDD').format(MOBILE_DATE_FORMAT);
  } else {
    return null;
  }
};

export const convertStringToTime = (string: string) => {
  if (string) {
    return moment(string, 'HHmmss').format('HH:mm:ss');
  } else {
    return null;
  }
};

export const convertStringToTimeMobile = (string: string) => {
  if (string) {
    return moment(string, 'HHmmss').format('HH:mm');
  } else {
    return null;
  }
};

export const convertStringToDateTime2 = (string: string) => {
  if (string) {
    return moment(string, 'YYYYMMDDHHmmss').format('HH:mm DD-MM-YYYY');
  } else {
    return null;
  }
};

export const convertStringToDateTimeMobile = (string: string) => {
  if (string) {
    return moment(string, 'YYYYMMDDHHmmss').format(MOBILE_DATE_TIME_FORMAT);
  } else {
    return null;
  }
};

export const convertStringToDateTime3 = (string: string) => {
  if (string) {
    return moment(string, 'YYYYMMDDHHmmss').format('HH:mm:ss DD-MM-YYYY');
  } else {
    return null;
  }
};

export const convertStringToFullDateTime = (string: string) => {
  if (string) {
    return moment(string, 'YYYYMMDDHHmmss').format('DD-MM-YYYY HH:mm');
  } else {
    return null;
  }
};

export const convertMomentToString = (date: string) => {
  if (date) {
    return moment(date).format('YYYYMMDD');
  } else {
    return null;
  }
};

export const convertStringToMoment = (string: string) => {
  if (string) {
    return moment(string, 'YYYYMMDD');
  } else {
    return null;
  }
};

export const convertMomentToTimeString = (date: string) => {
  if (date) {
    return moment(date).format('HHmmss');
  } else {
    return null;
  }
};

export const convertStringToDateFormat = (string: string, format: string) => {
  if (string) {
    return moment(string, 'YYYYMMDD').format(format);
  } else {
    return null;
  }
};
