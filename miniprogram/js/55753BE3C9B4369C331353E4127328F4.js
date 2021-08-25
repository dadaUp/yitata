Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var t = e.area_code, r = e.number, o = e.code, _ = e.appid;
    return _fetch2.default.post("" + _const.API_DOMAIN + VERIFY_PHONE_CODE_API, {
        area_code: t,
        number: r,
        code: o,
        appid: _
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

var VERIFY_PHONE_CODE_API = "/j/wxa/login/verify_phone_code";