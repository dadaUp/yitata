Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
}, _createClass = function() {
    function o(e, r) {
        for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(e, r, t) {
        return r && o(e.prototype, r), t && o(e, t), e;
    };
}(), _index = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), Taro = _interopRequireWildcard(_index);

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    return r.default = e, r;
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

var BaseAPI = function() {
    function e() {
        _classCallCheck(this, e), this._commonQuery = {};
    }
    return _createClass(e, [ {
        key: "_baseFetch",
        value: function(r) {
            var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = o.header || {};
            return (o = _extends({
                toastError: !0
            }, o)) && "POST" === o.method && !e["content-type"] && (e["content-type"] = "application/x-www-form-urlencoded"), 
            Taro.request(_extends({
                url: r
            }, o, {
                header: e
            })).then(function(e) {
                if ((e.statusCode < 200 || 300 <= e.statusCode) && (console.error("request failed", e), 
                o.toastError)) {
                    var r = e.data, t = r.localized_message || r.msg || r.description || r.message || "请求失败";
                    throw Taro.showToast({
                        title: t,
                        icon: "none"
                    }), new Error("request failed: " + t);
                }
                return e;
            }).catch(function(e) {
                throw console.error("wx fetch error:", e, "\nurl:", r, "\nprops:", o), Taro.showToast({
                    title: "无法连接网络"
                }), e;
            });
        }
    } ]), e;
}();

exports.default = BaseAPI;