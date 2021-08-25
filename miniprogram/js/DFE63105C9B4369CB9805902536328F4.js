Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var t = e.appid, r = e.vtoken, o = e.area_code, i = void 0 === o ? "" : o, a = e.number, n = void 0 === a ? "" : a, c = e.encryptedData, d = void 0 === c ? "" : c, s = e.iv, u = void 0 === s ? "" : s, _ = e.wxa_sessionid, p = void 0 === _ ? "" : _;
    return _fetch2.default.post(REGISTER_API, {
        appid: t,
        vtoken: r,
        area_code: i,
        number: n,
        encryptedData: d,
        iv: u,
        wxa_sessionid: p
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

var REGISTER_API = _const.API_DOMAIN + "/j/wxa/register/complete";