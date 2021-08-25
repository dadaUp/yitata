Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var t = e.wxa_sessionid, r = e.appid, n = e.encryptedData, a = e.iv, o = e.phoneEncryptedData, i = e.phoneIv;
    return _fetch2.default.post("" + _const.API_DOMAIN + THIRDPARTY_LOGIN_API, {
        wxa_sessionid: t,
        appid: r,
        encryptedData: n,
        iv: a,
        phoneEncryptedData: o,
        phoneIv: i
    }, {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    });
};

var _fetch = require("4EFBC6A4C9B4369C289DAEA384B228F4.js"), _fetch2 = _interopRequireDefault(_fetch), _const = require("04D06682C9B4369C62B60E85CE7228F4.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var THIRDPARTY_LOGIN_API = "/j/wxa/login/thirdparty";