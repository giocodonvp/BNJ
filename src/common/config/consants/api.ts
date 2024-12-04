// export const SERVER_API_URL = process.env.SERVER_API_URL;
export const SERVER_API_URL = '';
const PRE_FIX_AUTH = '/auth/v1/';
const PRE_FIX_API = '/api/v1/';
const PRE_FIX_INFOPLUS = '/infoplus/v1/';

/**
 * Common API
 */
export const API_COMMON_SELECT_MGRLIST = PRE_FIX_API + 'common/selectMgrList';
export const API_COMMON_SELECT_GRPLIST = PRE_FIX_API + 'common/selectGrpList';
export const API_COMMON_SELECT_CODELIST = PRE_FIX_API + 'common/selectGrpList';
export const API_COMMON_SELECT_PAYER_LIST = PRE_FIX_API + 'common/selectPayerList';
export const API_COMMON_SELECT_PAYER_INFO = PRE_FIX_API + 'common/selectPayerInfo';
export const API_COMMON_SELECT_WITHDRAW_ACCOUNT = PRE_FIX_API + 'common/selectWithdrawAccntList';
export const API_COMMON_SELECT_BANK_CODE_LIST = PRE_FIX_API + 'common/selectBankCodeList';

/**
 * Login and extend
 */
export const APT_POST_SIGNIN = PRE_FIX_AUTH + 'login';
export const API_EXTEND_TOKEN = PRE_FIX_AUTH + 'extend';

/**
 * Dashboard
 */
export const API_DASHBOARD_SELECT_NOTIFICATION = PRE_FIX_API + 'dashboard/selectNoticeList';
export const API_DASHBOARD_SELECT_RECV_LIST = PRE_FIX_API + 'dashboard/selectRecvList';
export const API_DASHBOARD_SELECT_DAILY_COL_LIST = PRE_FIX_API + 'dashboard/selectDailyColList';
export const API_DASHBOARD_SELECT_TOTAL_COL_LIST = PRE_FIX_API + 'dashboard/selectTotColList';
export const API_DASHBOARD_TOTAL_AMOUNT_COLLECTION = PRE_FIX_API + 'dashboard/selectTotAmt';
export const API_REPORT_DAILY_V2 = PRE_FIX_API + 'dashboard/selectDailyColListV2';
export const API_REPORT_MONTHLY = PRE_FIX_API + 'dashboard/selectMonthlyColList';
export const API_DOWNLOAD_REPORT_DAILY = PRE_FIX_API + 'dashboard/exportDailyReport';
export const API_DOWNLOAD_REPORT_MONTHLY = PRE_FIX_API + 'dashboard/exportMonthyReport';
export const API_SELECT_QR_PROFILE = PRE_FIX_API + 'dashboard/selectQrProfile';
export const API_ACTIVE_QR_PROFILE = PRE_FIX_API + 'dashboard/activeQrProfile';
export const API_SELECT_TOTAL_QR_PROFILE = PRE_FIX_API + 'dashboard/selectTotQrTrans';

/**
 * A001 E-Collection code setting
 */
export const API_A001_SELECT = PRE_FIX_API + 'A001/select';
export const API_A001_UPDATE = PRE_FIX_API + 'A001/update';

/**
 * Setting payer group management
 */
export const API_GET_LIST_GROUP = PRE_FIX_API + 'A002/selectList';
export const API_ADD_LIST_GROUP = PRE_FIX_API + 'A002/insert';
export const API_UPDATE_LIST_GROUP = PRE_FIX_API + 'A002/update';
export const API_DELETE_LIST_GROUP = PRE_FIX_API + 'A002/delete';
export const API_GET_DETAIL_GROUP_SETTING = PRE_FIX_API + 'A002/select';
export const API_GET_BENEFIT_ACCOUNT_GROUP_SETTING = PRE_FIX_API + 'A002/selectBenefitAccntNoList';

/**
 * Setting Register Information
 */
export const API_GET_COMPANY_INFORMATION = PRE_FIX_API + 'B001/select';
export const API_GET_SERVICES_INFORMATION = PRE_FIX_API + 'B001/selectList';

/**
 * Setting Bank account information
 */
export const API_GET_INFORMATION_BANK_ACCOUNT = PRE_FIX_API + 'B002/selectList';

/**
 * Get Information external
 */
export const API_GET_INFORMATION_EXTERNAL = PRE_FIX_API + 'A003/select';

/**
 * Setting user information management
 */
export const API_GET_LIST_USER_INFORMATION = PRE_FIX_API + 'B004/selectList';
export const API_GET_LIST_GROUP_USER_INFORMATION = PRE_FIX_API + 'B004/selectGrpList';
export const API_GET_DETAIL_USER_INFORMATION = PRE_FIX_API + 'B004/select';
export const API_INSERT_USER_INFORMATION = PRE_FIX_API + 'B004/insert';
export const API_UPDATE_USER_INFORMATION = PRE_FIX_API + 'B004/update';
export const API_INIT_USER_INFORMATION = PRE_FIX_API + 'B004/init';

/**
 * C001 EC General Information
 */
export const API_GENERAL_INFORMATION_SELECT = PRE_FIX_API + 'C001/selectList';
export const API_GENERAL_INFORMATION_SELECTSMS = PRE_FIX_API + 'C001/selectSMS';
export const API_GENERAL_INFORMATION_UPDATESMS = PRE_FIX_API + 'C001/updateSMS';

/**
 * C002 EC Payer Management
 */
export const API_PAYER_MANAGEMENT_SELECT_LIST = PRE_FIX_API + 'C002/selectList';
export const API_PAYER_MANAGEMENT_SELECT_MGRLIST = PRE_FIX_API + 'C002/selectMgrList';
export const API_PAYER_MANAGEMENT_SELECT_GRPLIST = PRE_FIX_API + 'C002/selectGrpList';
export const API_PAYER_MANAGEMENT_SELECT = PRE_FIX_API + 'C002/select';
export const API_PAYER_MANAGEMENT_INSERT = PRE_FIX_API + 'C002/insert';
export const API_PAYER_MANAGEMENT_DELETE = PRE_FIX_API + 'C002/delete';
export const API_PAYER_MANAGEMENT_SELECT_BASE = PRE_FIX_API + 'C002/selectBaseInfo';
export const API_PAYER_MANAGEMENT_BATCH_INSERT = PRE_FIX_API + 'C002/batchInsert';
export const API_PAYER_MANAGEMENT_DOWNLOAD = PRE_FIX_API + 'C002/download';
export const API_PAYER_ALL_DOWNLOAD = PRE_FIX_API + 'C002/download-payer';
export const API_PAYER_MANAGEMENT_UPLOAD = PRE_FIX_API + 'C002/upload';
export const API_PAYER_MANAGEMENT_UPDATE = PRE_FIX_API + 'C002/update';

/**
 * D001 AC General Information
 */
export const API_ACGENERAL_INFORMATION_SELECTLIST = PRE_FIX_API + 'D001/selectList';
export const API_ACGENERAL_INFORMATION_SELECTSMS = PRE_FIX_API + 'D001/selectSMS';
export const API_ACGENERAL_INFORMATION_UPDATESMS = PRE_FIX_API + 'D001/updateSMS';

/**
 * D002 AC Payer Management
 */
export const API_D002_DOWNLOAD = PRE_FIX_API + 'D002/download';
export const API_D002_UPLOAD = PRE_FIX_API + 'D002/upload';
export const API_D002_SELECT_BASE_INFO = PRE_FIX_API + 'D002/selectBaseInfo';
export const API_D002_INSERT = PRE_FIX_API + 'D002/insert';
export const API_D002_BATCH_INSERT = PRE_FIX_API + 'D002/batchInsert';
export const API_D002_SELECT = PRE_FIX_API + 'D002/select';
export const API_D002_ACCOUNT_INQUIRY = PRE_FIX_API + 'D002/accntInquiry';
export const API_D002_SELECT_LIST = PRE_FIX_API + 'D002/selectList';
export const API_D002_UPDATE = PRE_FIX_API + 'D002/update';
export const API_D002_DELETE = PRE_FIX_API + 'D002/delete';
export const API_D002_SELECT_FILE = PRE_FIX_API + 'D002/selectFile';

/**
 * D003 Auto Collection Register
 */
export const API_D003_SELECT_LIST = PRE_FIX_API + 'D003/selectList';
export const API_D003_INSERT = PRE_FIX_API + 'D003/insert';
export const API_D003_UPLOAD = PRE_FIX_API + 'D003/upload';
export const API_D003_DOWNLOAD = PRE_FIX_API + 'D003/download';
export const API_D003_BATCH_INSERT = PRE_FIX_API + 'D003/batchInsert';
export const API_D003_EXECUTE = PRE_FIX_API + 'D003/execute';
export const API_D003_DELETE = PRE_FIX_API + 'D003/delete';
export const API_D003_SELECT = PRE_FIX_API + 'D003/select';
export const API_D003_UPDATE = PRE_FIX_API + 'D003/update';

/**
 * D004 Auto Collection Inquiry
 */
export const API_D004_SELECT_LIST = PRE_FIX_API + 'D004/selectList';
export const API_D004_DAILY_SELECT_LIST = PRE_FIX_API + 'D004/dailySelectList';
export const API_D004_DOWNLOAD = PRE_FIX_API + 'D004/download';

/**
 * E001 RM General Information
 */
export const API_RMGENERAL_INFORMATION_SELECTLIST = PRE_FIX_API + 'E001/selectList';
export const API_RMGENERAL_INFORMATION_SELECTSMS = PRE_FIX_API + 'E001/selectSMS';
export const API_RMGENERAL_INFORMATION_UPDATESMS = PRE_FIX_API + 'E001/updateSMS';

/**
 * G001 Single Transfer
 */
export const API_GET_LIST_SINGLE_TRANSFER = PRE_FIX_API + 'G001/selectList';
export const API_CONFIRM_FEE_AND_AMOUNT = PRE_FIX_API + 'G001/inquiryReceiverBankAccnt';
export const API_INSERT_TRANSACTION = PRE_FIX_API + 'G001/insert';
export const API_GET_AMOUNT = PRE_FIX_API + 'G001/selectTransferableAmt';
export const API_DELETE_SINGLE_TRANSFER = PRE_FIX_API + 'G001/delete';
export const API_EXECUTE_SINGLE_TRANSFER = PRE_FIX_API + 'G001/execute';
export const API_SYNC_REMARK_SINGLE_TRANSFER = PRE_FIX_API + 'G001/save';
export const API_UPDATE_TRANSACTION = PRE_FIX_API + 'G001/update';
export const API_SELECT_TRANSACTION_SINGLE = PRE_FIX_API + 'G001/select';
export const API_UPDATE_WITH_ACC_NBR = PRE_FIX_API + 'G001/updateWithdrAcctNbr';

/**
 * Approval Management
 */
export const API_GET_LIST_APPROVAL_REQUEST = PRE_FIX_API + 'H001/selectList';
export const API_GET_LIST_APPROVAL_RECEIPT = PRE_FIX_API + 'H002/selectList';

/**
 * C003 E-Collection Inquiry
 */
export const API_GET_LIST_C003 = PRE_FIX_API + 'C003/selectList';
export const API_DOWNLOAD_C003 = PRE_FIX_API + 'C003/download';

/**
 * C004 Receivable register
 */
export const API_SELECT_LIST_C004 = PRE_FIX_API + 'C004/selectList';
export const API_DOWNLOAD_TEMPLATE_C004 = PRE_FIX_API + 'C004/download';
export const API_UPLOAD_FILE_C004 = PRE_FIX_API + 'C004/upload';
export const API_BATCH_INSERT_C004 = PRE_FIX_API + 'C004/batchInsert';
export const API_SELECT_DATA_C004 = PRE_FIX_API + 'C004/select';
export const API_DELETE_DATA_C004 = PRE_FIX_API + 'C004/delete';
export const API_INSERT_DATA_C004 = PRE_FIX_API + 'C004/insert';
export const API_NOTI_INSERT_DATA_C004 = PRE_FIX_API + 'C004/notiInsert';
export const API_SELECT_PAYER_C004 = PRE_FIX_API + 'C004/selectPayerInfo';
export const API_UPDATE_DATA_C004 = PRE_FIX_API + 'C004/update';
/**
 * E002 Receivable Management
 */
export const API_E002_SELECT_LIST = PRE_FIX_API + 'E002/selectList';
export const API_E002_SELECT = PRE_FIX_API + 'E002/select';
export const API_E002_INSERT = PRE_FIX_API + 'E002/insert';
export const API_E002_SEND_NOTIFICATION = PRE_FIX_API + 'E002/notiInsert';
export const API_E002_DOWNLOAD = PRE_FIX_API + 'E002/download';

/**
 * E003 Overdue Unpaid Management
 */
export const API_E003_SELECT_LIST = PRE_FIX_API + 'E003/selectList';

/**
 * F003 Collection finished inquiry
 */
export const API_SELECT_LIST_F003 = PRE_FIX_API + 'F003/selectList';
export const API_DOWNLOAD_EXCEL_F003 = PRE_FIX_API + 'F003/download';

/**
 * F001 Total Payer Inquiry
 */
export const API_F001_SELECT_LIST = PRE_FIX_API + 'F001/selectList';
export const API_F001_DOWNLOAD = PRE_FIX_API + 'F001/download';
export const API_F001_EMAIL_INSERT = PRE_FIX_API + 'F001/emailNotiInsert';

/**
 * F002 Deleted Payer Inquiry
 */
export const API_F002_SELECT_LIST = PRE_FIX_API + 'F002/selectList';
export const API_F002_DELETE = PRE_FIX_API + 'F002/delete';
export const API_F002_RESTORE = PRE_FIX_API + 'F002/restore';
/**
 * F007 Notice Board Management
 */
export const API_SELECT_LIST_F007 = PRE_FIX_API + 'F007/selectList';
export const API_SELECT_F007 = PRE_FIX_API + 'F007/select';
export const API_INSERT_F007 = PRE_FIX_API + 'F007/insert';
export const API_UPDATE_F007 = PRE_FIX_API + 'F007/update';
export const API_DELETE_F007 = PRE_FIX_API + 'F007/delete';

/**
 * F006 SMS Inquiry
 */
export const API_F006_SELECT_LIST = PRE_FIX_API + 'F006/selectList';
export const API_F006_DOWNLOAD = PRE_FIX_API + 'F006/download';

/**
 * G002 Multiple Transfer
 */
export const API_G002_SELECT_LIST = PRE_FIX_API + 'G002/selectList';
export const API_G002_DOWNLOAD = PRE_FIX_API + 'G002/download';
export const API_G002_BATCH_INSERT = PRE_FIX_API + 'G002/batchInsert';
export const API_G002_CONFIRM = PRE_FIX_API + 'G002/confirm';
export const API_G002_DELETE = PRE_FIX_API + 'G002/delete';
export const API_G002_EXECUTE = PRE_FIX_API + 'G002/execute';
export const API_G002_INSERT = PRE_FIX_API + 'G002/insert';
export const API_G002_SAVE = PRE_FIX_API + 'G002/save';
export const API_G002_SELECT = PRE_FIX_API + 'G002/select';
export const API_G002_SELECT_TRANSFERABLE_AMT = PRE_FIX_API + 'G002/selectTransferableAmt';
export const API_G002_UPDATE = PRE_FIX_API + 'G002/update';
export const API_G002_UPLOAD = PRE_FIX_API + 'G002/upload';
export const API_G002_UPDATE_WITHDRAW_ACCNT = PRE_FIX_API + 'G002/updateWithdrAcctNbr';

/**
 * H001
 */
export const API_H001_SELECTELIST = PRE_FIX_API + 'H001/selectList';
export const API_H001_SELECT = PRE_FIX_API + 'H001/select';
export const API_H001_RECALL = PRE_FIX_API + 'H001/recall';
export const API_H001_REDO = PRE_FIX_API + 'H001/redo';
/**
 * H002
 */
export const API_H002_SELECTELIST = PRE_FIX_API + 'H002/selectList';
export const API_H002_SELECT = PRE_FIX_API + 'H002/select';
export const API_H002_REJECT = PRE_FIX_API + 'H002/reject';
export const API_H002_OTP = PRE_FIX_API + 'H002/generateOtp';
export const API_H002_APROVE = PRE_FIX_API + 'H002/approve';
/**
 * G003 Payroll Transfer
 */
export const API_G003_SELECT_LIST = PRE_FIX_API + 'G003/selectList';
export const API_G003_DOWNLOAD = PRE_FIX_API + 'G003/download';
export const API_G003_BATCH_INSERT = PRE_FIX_API + 'G003/batchInsert';
export const API_G003_CONFIRM = PRE_FIX_API + 'G003/confirm';
export const API_G003_DELETE = PRE_FIX_API + 'G003/delete';
export const API_G003_EXECUTE = PRE_FIX_API + 'G003/execute';
export const API_G003_INSERT = PRE_FIX_API + 'G003/insert';
export const API_G003_SAVE = PRE_FIX_API + 'G003/save';
export const API_G003_SELECT = PRE_FIX_API + 'G003/select';
export const API_G003_SELECT_TRANSFERABLE_AMT = PRE_FIX_API + 'G003/selectTransferableAmt';
export const API_G003_UPDATE = PRE_FIX_API + 'G003/update';
export const API_G003_UPLOAD = PRE_FIX_API + 'G003/upload';
export const API_G003_UPDATE_WITHDRAW_ACCNT = PRE_FIX_API + 'G003/updateWithdrAcctNbr';
/**
 * G004 Transfer Transaction Inquiry
 */
export const API_G004_SELECT_LIST = PRE_FIX_API + 'G004/selectList';
export const API_G004_SELECT_DETAIL_LIST = PRE_FIX_API + 'G004/selectDetailList';
export const API_G004_DOWNLOAD = PRE_FIX_API + 'G004/download';

/**
 * I001 Report
 */
export const API_I001_SELECT = PRE_FIX_API + 'I001/select';
export const API_I001_SELECT_BY_PAYER_GROUP = PRE_FIX_API + 'I001/selectByPayerGrp';
export const API_I001_SELECT_BY_USER_AMOUNT = PRE_FIX_API + 'I001/selectByUserAmt';
export const API_I001_SELECT_BY_YEAR = PRE_FIX_API + 'I001/selectByYear';

/**
 * Z024, Z025 Report transaction
 */
export const API_Z024_ALL_CUSTOMER = PRE_FIX_INFOPLUS + 'Z024/selectCustomers';
export const API_Z024_REPORT_DAILY = PRE_FIX_INFOPLUS + 'Z024/selectList';
export const API_Z024_EXPORT = PRE_FIX_INFOPLUS + 'Z024/export';

export const API_Z025_REPORT_MONTHLY = PRE_FIX_INFOPLUS + 'Z025/selectList';
export const API_Z025_EXPORT = PRE_FIX_INFOPLUS + 'Z025/export';

/**
 * K001 Collection finished inquiry
 */
export const API_SELECT_LIST_K001 = PRE_FIX_API + 'K001/selectFinished';
export const API_DOWNLOAD_EXCEL_K001 = PRE_FIX_API + 'K001/download';

/**
 * K002 Collection in progress inquiry
 */
export const API_SELECT_LIST_K002 = PRE_FIX_API + 'K002/selectInProgress';
export const API_DOWNLOAD_EXCEL_K002 = PRE_FIX_API + 'K002/download';

/**
 * K003 Collection overdue inquiry
 */
export const API_SELECT_LIST_K003 = PRE_FIX_API + 'K003/selectList';
export const API_DOWNLOAD_EXCEL_K003 = PRE_FIX_API + 'K003/download';
export const API_SEND_NOTI_K003 = PRE_FIX_API + 'K003/notiInsert';
export const API_EXCLUDE_OVERDUE_K003 = PRE_FIX_API + 'K003/excludeOverdue';
export const API_INCLUDE_OVERDUE_K003 = PRE_FIX_API + 'K003/includeOverdue';

/**
 * SSE URL
 */
export const API_SSE_URL = SERVER_API_URL + '/sse/register-client?userId=';
