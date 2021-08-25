Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.userInfo = userInfo;

var _user = require("92436F92C9B4369CF42507955E0228F4.js"), _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var INITIAL_STATE = {
    isPhoneVerified: !1
};

function userInfo() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : INITIAL_STATE, r = arguments[1];
    switch (r.type) {
      case _user2.default.RECEIVE_USERINFO:
        return {
            isPhoneVerified: r.isPhoneVerified
        };

      default:
        return e;
    }
}