var _STATUS_TEXT;

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.STATUS_TEXT = exports.MA_REPORT_URL = exports.MA_ACCOUNT_ID = exports.DEFAULT_AVATAR = exports.API_DOMAIN = exports.T_CAPTCHA_EXTRA_APPID = exports.T_CAPTCHA_MINIPROHRAM_APPID = exports.UNEXPECT_STATUS = exports.ACCOUNT_NOT_EXIST = exports.CAPTCHA = exports.LOGIN_MESSAGE_NEED_CAPTCHA = exports.LOGIN_FAILED_EVENT = exports.LOGIN_SUCCESS_EVENT = exports.LOGIN_FAILED = exports.LOGIN_SUCCESS = exports.LOGIN_TYPE_FOREIGN = exports.LOGIN_TYPE_BASIC = exports.LOGIN_TYPE_SMS = exports.LOGIN_TYPE_WXA_USER = exports.LOGIN_TYPE_WXA_PHONE = exports.LOGIN_TYPE_WXA_OPENID = exports.LOGIN_TYPE_WXA = void 0;

var _asyncStatus = require("EF15B521C9B4369C8973DD269A8228F4.js");

function _defineProperty(_, T, A) {
    return T in _ ? Object.defineProperty(_, T, {
        value: A,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : _[T] = A, _;
}

var LOGIN_TYPE_WXA = exports.LOGIN_TYPE_WXA = "wxa", LOGIN_TYPE_WXA_OPENID = exports.LOGIN_TYPE_WXA_OPENID = "wxaOpenId", LOGIN_TYPE_WXA_PHONE = exports.LOGIN_TYPE_WXA_PHONE = "wxaPhone", LOGIN_TYPE_WXA_USER = exports.LOGIN_TYPE_WXA_USER = "wxaUser", LOGIN_TYPE_SMS = exports.LOGIN_TYPE_SMS = "sms", LOGIN_TYPE_BASIC = exports.LOGIN_TYPE_BASIC = "basic", LOGIN_TYPE_FOREIGN = exports.LOGIN_TYPE_FOREIGN = "foreign", LOGIN_SUCCESS = exports.LOGIN_SUCCESS = "success", LOGIN_FAILED = exports.LOGIN_FAILED = "failed", LOGIN_SUCCESS_EVENT = exports.LOGIN_SUCCESS_EVENT = "loginSuccess", LOGIN_FAILED_EVENT = exports.LOGIN_FAILED_EVENT = "loginFailed", LOGIN_MESSAGE_NEED_CAPTCHA = exports.LOGIN_MESSAGE_NEED_CAPTCHA = "captcha_required", CAPTCHA = exports.CAPTCHA = "captcha", ACCOUNT_NOT_EXIST = exports.ACCOUNT_NOT_EXIST = "account_not_exist", UNEXPECT_STATUS = exports.UNEXPECT_STATUS = "unexpect_status", T_CAPTCHA_MINIPROHRAM_APPID = exports.T_CAPTCHA_MINIPROHRAM_APPID = "wx5a3a7366fd07e119", T_CAPTCHA_EXTRA_APPID = exports.T_CAPTCHA_EXTRA_APPID = "2057542833", API_DOMAIN = exports.API_DOMAIN = "https://accounts.douban.com", DEFAULT_AVATAR = exports.DEFAULT_AVATAR = "https://img3.doubanio.com/img/files/file-1541500990-0.png", MA_ACCOUNT_ID = exports.MA_ACCOUNT_ID = "5hxY1zXpdfCVVUpE", MA_REPORT_URL = exports.MA_REPORT_URL = "https://market.douban.com/analytics/" + MA_ACCOUNT_ID + "/collect", STATUS_TEXT = exports.STATUS_TEXT = (_defineProperty(_STATUS_TEXT = {}, _asyncStatus.PENDING, "提交中..."), 
_defineProperty(_STATUS_TEXT, _asyncStatus.SUCCESS, "登录成功"), _defineProperty(_STATUS_TEXT, _asyncStatus.FAIL, "失败, 请重试"), 
_defineProperty(_STATUS_TEXT, _asyncStatus.DEFAULT, "登录"), _defineProperty(_STATUS_TEXT, CAPTCHA, "验证并登录"), 
_STATUS_TEXT);