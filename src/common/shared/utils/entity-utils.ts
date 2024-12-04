// import { ACCESS_TOKEN, NOTIFICATION, USER_NAME } from 'app/config/constant/constants';
// import { Storage, translate } from 'react-jhipster';
// import jwtDecode, { JwtPayload } from 'jwt-decode';
// import { toast } from 'react-toastify';
// import { Modal } from 'antd';
// import { useAppSelector } from 'app/config/redux/store';
// import {
//   CloseIcon,
//   ErrorNotificationIcon,
//   NotificationConfirmIcon,
//   SuccessNotificationIcon,
//   WarningNotificationIcon,
// } from '../components/icon';

// export const getUserId = () => {
//   const accessToken = Storage.session.get(ACCESS_TOKEN);

//   if (accessToken) {
//     const jwtPayload: JwtPayload = jwtDecode(accessToken);

//     return jwtPayload['userId'];
//   }
// };

// export const getRoleUser = () => {
//   const accessToken = Storage.session.get(ACCESS_TOKEN);
//   const stateToken = useAppSelector(state => state.authentication.accessToken);

//   if (accessToken) {
//     const jwtPayload: JwtPayload = jwtDecode(accessToken);

//     return jwtPayload['userType'];
//   } else {
//     if (stateToken) {
//       const jwtPayload: JwtPayload = jwtDecode(stateToken);

//       return jwtPayload['userType'];
//     }
//   }
// };

// export const getUserName = () => {
//   const userName = Storage.session.get(USER_NAME);

//   if (userName) {
//     return userName;
//   }
//   return '';
// };

// export const openNotification = (type: string, key?: string, data?: any, message?: string) => {
//   let description = key ? translate(key, data) : message;

//   if (description && description.startsWith('translation-not-found')) {
//     description = message ? message : 'Can not find description, please contact administrator for this message: ' + key;
//   }

//   toast[type](description, {
//     position: 'top-right',
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//   });
// };

// function checkTypeNoti(type) {
//   if (type === 'error') {
//     return translate('notificationTitleError');
//   } else if (type === 'success') {
//     return translate('notificationTitleSuccess');
//   } else if (type === 'info') {
//     return translate('label.notify');
//   } else {
//     return translate('notificationTitleWarning');
//   }
// }

// export const openNotificationAction = (type: string, key?: string, data?: any, message?: string) => {
//   let description = key ? translate(key, data) : message;

//   if (description && description.startsWith('translation-not-found')) {
//     description = message ? message : 'Can not find description, please contact administrator for this message: ' + key;
//   }

//   Modal[type]({
//     title: checkTypeNoti(type),
//     content: description,
//     okText: translate('button.close'),
//   });
// };

// export const toastUpdate = (success: boolean) => {
//   const type = success ? NOTIFICATION.SUCCESS : NOTIFICATION.ERROR;
//   const description = success ? translate('message.update-success') : translate('message.update-fail');
//   Modal[type]({
//     title: checkTypeNoti(type),
//     content: description,
//     okText: translate('button.close'),
//   });
// };

// export const toastDelete = (success: boolean) => {
//   const type = success ? NOTIFICATION.SUCCESS : NOTIFICATION.ERROR;
//   const description = success ? translate('message.delete-success') : translate('message.delete-fail');
//   Modal[type]({
//     title: checkTypeNoti(type),
//     content: description,
//     okText: translate('button.close'),
//   });
// };

// export const toastInsert = (success: boolean) => {
//   const type = success ? NOTIFICATION.SUCCESS : NOTIFICATION.ERROR;
//   const description = success ? translate('message.insert-success') : translate('message.insert-fail');
//   Modal[type]({
//     title: checkTypeNoti(type),
//     content: description,
//     okText: translate('button.close'),
//   });
// };

// export const modalNotificationMobile = (type: string, description: string) => {
//   Modal[type]({
//     className: 'modal-notification-mobile',
//     title: checkTypeNoti(type),
//     closable: true,
//     closeIcon: CloseIcon(),
//     icon:
//       type === 'success'
//         ? SuccessNotificationIcon()
//         : type === 'error'
//         ? ErrorNotificationIcon()
//         : type === 'info'
//         ? NotificationConfirmIcon()
//         : WarningNotificationIcon(),
//     content: description,
//   });
// };
