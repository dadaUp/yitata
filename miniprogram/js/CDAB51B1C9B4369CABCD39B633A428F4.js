Object.defineProperty(exports, "__esModule", {
    value: !0
});

var root, _ponyfill = require("C29D0067C9B4369CA4FB686004B428F4.js"), _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

root = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")();

var result = (0, _ponyfill2.default)(root);

exports.default = result;