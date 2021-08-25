Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = logger;

var _index = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), _index2 = _interopRequireDefault(_index), _log = require("AF341281C9B4369CC9527A868AC528F4.js"), _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function logger(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "", r = "tab", o = null;
    1011 !== e && 1012 !== e && 1013 !== e || (r = "pc_qrcode"), 1007 !== e && 1008 !== e || (r = "wx_chat");
    var u = _index2.default.getCurrentPages();
    if (2 <= u.length) {
        var i = u[u.length - 2];
        "pages/standbyme/2018" === i.route && (o = i.options.uid);
    }
    (0, _log2.default)("profile_loaded", {
        source: r,
        from_uid: o,
        target_uid: t
    });
}