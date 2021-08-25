Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _promisify = require("8588D406C9B4369CE3EEBC01DEF228F4.js"), _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var setStorage = (0, _promisify2.default)(wx.setStorage);

exports.default = function(e) {
    var r = function(r) {
        e.hasOwnProperty(r) && wx.setStorage({
            key: r,
            data: e[r],
            fail: function(e) {
                console.error("set " + r + " failed");
            }
        });
    };
    for (var t in e) r(t);
};