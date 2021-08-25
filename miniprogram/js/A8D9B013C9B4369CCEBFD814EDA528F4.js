Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getActionCnByType = exports.requirePhoneVerified = exports.requireLogin = exports.showErr = exports.sleep = void 0, 
exports.debug = debug, exports.initPageRes = initPageRes, exports.showSuccess = showSuccess, 
exports.redirectToLogin = redirectToLogin, exports.setRatio = setRatio;

var _index = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), _index2 = _interopRequireDefault(_index), _index3 = require("A963ABF4C9B4369CCF05C3F37FC428F4.js"), _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function debug() {}

function initPageRes(e) {
    var r, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = t.start, o = void 0 === n ? 0 : n, i = t.count, u = void 0 === i ? 10 : i, a = t.total;
    return _defineProperty(r = {
        start: o,
        total: void 0 === a ? 0 : a
    }, e, []), _defineProperty(r, "count", u), r;
}

var sleep = exports.sleep = function(r) {
    return new Promise(function(e) {
        return setTimeout(e, r);
    });
}, showErr = exports.showErr = function(e) {
    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1500;
    console.error("showError", new Error(e)), _index2.default.showToast({
        icon: "none",
        title: e,
        duration: r
    });
};

function showSuccess(e) {
    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1e3, t = arguments[2];
    "function" == typeof r && (t = r, r = 1e3), _index2.default.showToast({
        icon: "success",
        title: e,
        duration: r
    }), t && setTimeout(t, r);
}

function redirectToLogin() {
    var e = (0, _index.getCurrentPages)(), r = e[e.length - 1], t = r.route;
    "/" !== t[0] && (t = "/" + t);
    var n = (0, _index4.default)(t, !0);
    Object.assign(n.query, r.options), t = n.toString(), _index2.default.navigateTo({
        url: "/pages/login/wxa?redirect=" + encodeURIComponent(t)
    });
}

var requireLogin = exports.requireLogin = function(l) {
    return function(e, r, t) {
        var c = t.value;
        return t.value = function() {
            var e = this;
            l = "string" == typeof l ? l.split(".") : l;
            var r = !0, t = !1, n = void 0;
            try {
                for (var o, i = l[Symbol.iterator](); !(r = (o = i.next()).done); r = !0) {
                    e = e[o.value];
                }
            } catch (e) {
                t = !0, n = e;
            } finally {
                try {
                    !r && i.return && i.return();
                } finally {
                    if (t) throw n;
                }
            }
            if (e) {
                for (var u = arguments.length, a = Array(u), s = 0; s < u; s++) a[s] = arguments[s];
                return c.apply(this, a);
            }
            redirectToLogin();
        }, t;
    };
}, requirePhoneVerified = exports.requirePhoneVerified = function(l) {
    return function(e, r, t) {
        var c = t.value;
        return t.value = function() {
            var e = this;
            l = "string" == typeof l ? l.split(".") : l;
            var r = !0, t = !1, n = void 0;
            try {
                for (var o, i = l[Symbol.iterator](); !(r = (o = i.next()).done); r = !0) {
                    e = e[o.value];
                }
            } catch (e) {
                t = !0, n = e;
            } finally {
                try {
                    !r && i.return && i.return();
                } finally {
                    if (t) throw n;
                }
            }
            if (e) {
                for (var u = arguments.length, a = Array(u), s = 0; s < u; s++) a[s] = arguments[s];
                return c.apply(this, a);
            }
            _index2.default.navigateTo({
                url: "/pages/user/verify"
            });
        }, t;
    };
}, getActionCnByType = exports.getActionCnByType = function(e) {
    switch (e) {
      case "movie":
      case "tv":
        return "看";

      case "book":
        return "读";

      case "music":
        return "听";

      case "game":
        return "玩";

      default:
        return "看";
    }
};

function setRatio(e) {
    var r = {
        movie: 1.4,
        book: 1.4,
        music: 1
    };
    return r[e] ? r[e] : 1.4;
}