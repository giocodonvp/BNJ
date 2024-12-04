
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { ACCESS_TOKEN, LOCALE, USER_NAME } from '../../config/consants/constants';
import localforage from 'localforage';


const getLoacalValue = async (key: any) => {
  localforage.getItem(key).then((value) => {
    if (value !== null) {
      console.log('Key exists with value:', value);
      return value;
    } else {
      console.log('Key does not exist');
      return '';
    }
  }).catch((err) => {
    console.error('Error checking key:', err);
    return '';
  });
};

export const getAuthToken = () => getLoacalValue(ACCESS_TOKEN);

export const getUserId = () => {
  // const accessToken = getAuthToken();
  
  const accessToken ='';

  if (accessToken) {
    const jwtPayload: JwtPayload = jwtDecode(accessToken);

    return jwtPayload.aud;
  }
};

// export const getUserName = () => {
//   const userName = getStore().getState().authentication.userNm || Storage.session.get(USER_NAME);

//   if (userName) {
//     return userName;
//   }
//   return '';
// };

// export const getLanguage = () => {
//   const lang = getStore().getState().locale.currentLocale || Storage.local.get(LOCALE);

//   if (lang) {
//     return lang;
//   }

//   return 'vi';
// };
