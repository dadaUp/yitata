Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LOGIN_SMS = exports.LOGIN_BASIC = exports.API_KEY = exports.ENV = exports.CURRENT_ENV = exports.QQ_APP_ID = exports.APP_ID = exports.HTTPS_ACOUNT = exports.FRODO_API = exports.HTTPS_FRODO = exports.UA = void 0;

var _index = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), _index2 = _interopRequireDefault(_index), _base = require("82CF3E31C9B4369CE4A956367A1428F4.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var UA = exports.UA = "com.douban.frodo/5.20.0 rexxardev", HTTPS_FRODO = exports.HTTPS_FRODO = "https://frodo.douban.com", FRODO_API = exports.FRODO_API = "https://frodo.douban.com/api/v2", HTTPS_ACOUNT = exports.HTTPS_ACOUNT = "https://accounts.douban.com", APP_ID = exports.APP_ID = "wx2f9b06c1de1ccfca", QQ_APP_ID = exports.QQ_APP_ID = "1109017316", DEFAULT_API_KEY_P1 = "MGFjNDRhZTAxNjQ5MGRiMj", DEFAULT_API_KEY_P2 = "IwNGNlMGEwNDJkYjI5MTY=", QQ_API_KEY_P1 = "MGZiZDJmOGNiZjY5YjBmYz", QQ_API_KEY_P2 = "JmMzc4ZWE2M2UzZDEyZjQ=", CURRENT_ENV = exports.CURRENT_ENV = _index2.default.getEnv(), ENV = exports.ENV = {
    isWeapp: CURRENT_ENV === _index.ENV_TYPE.WEAPP,
    isQQ: "QQ" === CURRENT_ENV
}, API_KEY = exports.API_KEY = _base.Base64.decode(ENV.isWeapp ? "MGFjNDRhZTAxNjQ5MGRiMjIwNGNlMGEwNDJkYjI5MTY=" : "MGZiZDJmOGNiZjY5YjBmYzJmMzc4ZWE2M2UzZDEyZjQ="), LOGIN_BASIC = exports.LOGIN_BASIC = "/pages/login/wxa", LOGIN_SMS = exports.LOGIN_SMS = "/pages/login/sms";