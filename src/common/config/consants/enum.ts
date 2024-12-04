// import { translate } from 'react-jhipster';


const translate = (e: string) => {
  return e;
}

export const SUCCESS = {
  UPDATED: 'success.updated',
  DELETED: 'success.deleted',
  SEND_REQUIRED: 'success.send-required',
};

export const AC_ENROLL_STATUS = [
  {
    val: '0',
    text: translate('enroll-status.standby'),
    textColor: '#babfc7',
  },
  {
    val: '1',
    text: translate('enroll-status.requested'),
    textColor: '#4b4b4b',
  },
  {
    val: 'A',
    text: translate('enroll-status.approved'),
    textColor: '#28C76F',
  },
  {
    val: 'R',
    text: translate('enroll-status.rejected'),
    textColor: '#EA5455',
  },
];

export const APPROVAL_STATUS = [
  {
    val: '1',
    text: translate('approval-status.pending'),
    textColor: '#3babec',
  },
  {
    val: '2',
    text: translate('approval-status.approved'),
    textColor: '#28C76F',
  },
  {
    val: '3',
    text: translate('approval-status.rejected'),
    textColor: '#EA5455',
  },
  {
    val: '4',
    text: translate('approval-status.recall'),
    textColor: '#e7a223',
  },
];

export const TRANSFER_STATUS = [
  {
    val: '0',
    text: translate('transfer-status.not-execute'),
    textColor: '#BABFC7',
  },
  {
    val: '1',
    text: translate('transfer-status.success'),
    textColor: '#28C76F',
  },
  {
    val: '2',
    text: translate('transfer-status.partial-fail'),
    textColor: '#FF9F43',
  },
  {
    val: '3',
    text: translate('transfer-status.fail'),
    textColor: '#EA5455',
  },
  {
    val: '4',
    text: translate('transfer-status.processing'),
    textColor: '#3babec',
  },
];

export const TRANSFER_TYPE = [
  {
    transferTypeCd: '0',
    transferTypeNm: translate('transfer-type.single-transfer'),
  },
  {
    transferTypeCd: '1',
    transferTypeNm: translate('transfer-type.multiple-transfer'),
  },
  {
    transferTypeCd: '3',
    transferTypeNm: translate('transfer-type.payroll-transfer'),
  },
];

export const TRANSACTION_STATUS = [
  {
    val: 'R',
    text: translate('transaction-status.transfer-request'),
    textColor: '#4B4B4B',
  },
  {
    val: 'W',
    text: translate('transaction-status.waiting-for'),
    textColor: '#00CFE8',
  },
  {
    val: 'P',
    text: translate('transaction-status.processing'),
    textColor: '#3babec',
  },
  {
    val: 'D',
    text: translate('transaction-status.done'),
    textColor: '#28C76F',
  },
  {
    val: 'F',
    text: translate('transaction-status.fail'),
    textColor: '#EA5455',
  },
];

export const RESTRICTION_TYPE = [
  {
    val: '0',
    text: 'receivablesRegister.singleRegister.noRestrictions',
  },
  {
    val: '1',
    text: 'receivablesRegister.singleRegister.specifiedAmount',
  },
  {
    val: '2',
    text: 'receivablesRegister.singleRegister.thanSpecified',
  },
  {
    val: '3',
    text: 'receivablesRegister.singleRegister.lessThanSpecified',
  },
];

export const TIME_TYPE = [
  {
    val: '0',
    text: 'receivablesRegister.singleRegister.noRuler',
  },
  {
    val: '1',
    text: 'receivablesRegister.singleRegister.timePeriod',
  },
  {
    val: '2',
    text: 'receivablesRegister.singleRegister.timeFrame',
  },
];

export const PAID_TYPE = [
  {
    val: 'Y',
    text: 'mobileText.common.paidYes',
  },
  {
    val: 'N',
    text: 'mobileText.common.paidNo',
  },
];

export const PAGE_SIZE_OPTION = [10, 20, 50, 100, 200, 500, 1000];

export const LIST_MONTH = [
  { value: '01', name: 'monthList.jan' },
  { value: '02', name: 'monthList.feb' },
  { value: '03', name: 'monthList.mar' },
  { value: '04', name: 'monthList.apr' },
  { value: '05', name: 'monthList.may' },
  { value: '06', name: 'monthList.jun' },
  { value: '07', name: 'monthList.jul' },
  { value: '08', name: 'monthList.aug' },
  { value: '09', name: 'monthList.sep' },
  { value: '10', name: 'monthList.oct' },
  { value: '11', name: 'monthList.nov' },
  { value: '12', name: 'monthList.dec' },
];
