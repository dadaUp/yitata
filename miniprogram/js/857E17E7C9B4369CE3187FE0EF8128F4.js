Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fetchUserInfo = exports.userPhoneVerified = void 0;

var _user = require("92436F92C9B4369CF42507955E0228F4.js"), _user2 = _interopRequireDefault(_user), _frodoApi = require("AC93F8F1C9B4369CCAF590F6273528F4.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var userPhoneVerified = exports.userPhoneVerified = function(e) {
    return {
        type: _user2.default.RECEIVE_USERINFO,
        isPhoneVerified: e
    };
}, fetchUserInfo = exports.fetchUserInfo = function(e) {
    return function(o) {
        return _frodoApi.frodoApi.user(e).then(function(e) {
            if (0 === e.code) {
                var r = e.data;
                o(userPhoneVerified(r.is_phone_verified));
            }
        });
    };
};