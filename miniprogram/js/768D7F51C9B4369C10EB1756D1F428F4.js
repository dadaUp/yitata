Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.accountInfo = accountInfo;

var _account = require("7965D801C9B4369C1F03B006D4E128F4.js"), _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function accountInfo() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null, t = arguments[1];
    switch (t.type) {
      case _account2.default.RECEIVE_ACCOUNTINFO:
        return t.payload;

      default:
        return e;
    }
}