Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(t, e) {
    var r = _objectWithoutProperties(e, []);
    return _fetch2.default.post(BASIC_LOGIN_API, {
        name: r.name || "",
        password: r.password || "",
        phone: r.phone || "",
        captcha_id: r.captcha_id || "",
        captcha_solution: r.captcha_solution || "",
        ticket: r.ticket || "",
        randstr: r.randstr || "",
        appid: t
    }, {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    });
};

var _fetch = require("4EFBC6A4C9B4369C289DAEA384B228F4.js"), _fetch2 = _interopRequireDefault(_fetch), _const = require("04D06682C9B4369C62B60E85CE7228F4.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _objectWithoutProperties(t, e) {
    var r = {};
    for (var o in t) 0 <= e.indexOf(o) || Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
    return r;
}

var BASIC_LOGIN_API = _const.API_DOMAIN + "/j/wxa/login/basic";