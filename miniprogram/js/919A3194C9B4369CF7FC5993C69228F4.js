Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _getDataToStorage = require("346E1454C9B4369C52087C53DDB228F4.js"), _getDataToStorage2 = _interopRequireDefault(_getDataToStorage);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

exports.default = function() {
    var e = (0, _getDataToStorage2.default)("access_token"), t = (0, _getDataToStorage2.default)("expires_in"), a = (0, 
    _getDataToStorage2.default)("access_token_set_time"), r = new Date().getTime();
    return !(!e | !t) && !!(e && r < a + 1e3 * parseInt(t, 10));
};