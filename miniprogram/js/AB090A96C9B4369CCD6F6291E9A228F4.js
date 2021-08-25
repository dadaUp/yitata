Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.failedHandler = exports.successHandler = void 0;

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
}, _setDataToStorage = require("7899AEF0C9B4369C1EFFC6F71E1328F4.js"), _setDataToStorage2 = _interopRequireDefault(_setDataToStorage), _navigateBack = require("AA159523C9B4369CCC73FD24E9D228F4.js"), _navigateBack2 = _interopRequireDefault(_navigateBack), _ma = require("1F1A8630C9B4369C797CEE373DC228F4.js"), _ma2 = _interopRequireDefault(_ma);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var ma = new _ma2.default(), successHandler = exports.successHandler = function(e, t) {
    var a = e.detail, r = a.type;
    ma.report(r + "LoginSuccess", {}), wx.showToast({
        title: "登录成功"
    });
    var o = a.payload, s = new Date().getTime();
    (0, _setDataToStorage2.default)(_extends({
        access_token_set_time: s
    }, o)), t || (t = this.data.params), t && t.redirect ? setTimeout(function() {
        (0, _navigateBack2.default)(decodeURIComponent(t.redirect));
    }, 500) : setTimeout(function() {
        wx.navigateBack({
            delta: -1
        });
    }, 500);
}, failedHandler = exports.failedHandler = function(e) {
    var t = e.detail;
    wx.showModal({
        title: "登录失败",
        content: t.description || t.message || "出错啦,请重试",
        showCancel: !1
    });
};