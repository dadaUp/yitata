Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "small";
    return new Promise(function(n, a) {
        _fetch2.default.post(REFRESH_CAPTCHA_API, {
            size: e
        }, {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }).then(function(e) {
            var t = e.data, r = (t.status, t.payload);
            r ? n(r) : a(e.data);
        }).catch(function(e) {
            a(e);
        });
    });
};

var _fetch = require("4EFBC6A4C9B4369C289DAEA384B228F4.js"), _fetch2 = _interopRequireDefault(_fetch), _const = require("04D06682C9B4369C62B60E85CE7228F4.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var REFRESH_CAPTCHA_API = _const.API_DOMAIN + "/j/captcha/refresh";