Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, _slicedToArray = function(e, r) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e)) return function(e, r) {
        var t = [], n = !0, a = !1, o = void 0;
        try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (t.push(i.value), 
            !r || t.length !== r); n = !0) ;
        } catch (e) {
            a = !0, o = e;
        } finally {
            try {
                !n && s.return && s.return();
            } finally {
                if (a) throw o;
            }
        }
        return t;
    }(e, r);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
};

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
    return Array.from(e);
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function obj2str(r) {
    return Object.getOwnPropertyNames(r).filter(function(e) {
        return null != r[e];
    }).map(function(e) {
        return encodeURIComponent(e) + "=" + encodeURIComponent(r[e]);
    }).join("&");
}

function str2obj(e) {
    return e ? e.split("&").reduce(function(e, r) {
        var t = r.split("="), n = _slicedToArray(t, 2), a = n[0], o = n[1];
        return a = decodeURIComponent(a), o = decodeURIComponent(o), _extends({}, e, _defineProperty({}, a, o));
    }, {}) : {};
}

function hex2rgb(e, r) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, r, t, n) {
        return r + r + t + t + n + n;
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e), n = t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : {};
    return "rgba(" + n.r + "," + n.g + "," + n.b + (r ? "," + r : "") + ")";
}

function str2date(e) {
    return "string" != typeof e ? (console.error(new TypeError("Invalid Date input:" + e), e), 
    new Date()) : new Date(e.replace(/\s+/g, "T").concat("+08:00"));
}

function formatTime(e) {
    if ("string" == typeof e) {
        var r = e;
        if (e = str2date(e).getTime() / 1e3, isNaN(e)) return r;
    }
    var t = new Date(), n = Math.floor(t.getTime() / 1e3) - e, a = n < 0;
    n = Math.abs(n);
    var o = Math.floor(n / 86400), i = Math.floor(n / 3600), s = Math.floor(n / 60);
    if (a) {
        var l = new Date(1e3 * e), u = (new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime()) / 1e3, f = Math.floor((n + 86400 - u) / 86400), c = ("0" + l.getHours()).slice(-2) + ":" + ("0" + l.getMinutes()).slice(-2);
        if (1 === f) return "明天 " + c;
        if (2 === f) return "后天 " + c;
        if (0 < f && f < 4) return f + "天后 " + c;
        if (f <= 0 && 0 < i) return "今天 " + c;
        if (i <= 0 && 0 < s) return s + "分钟后";
        if (s <= 0) return n + "秒后";
        var g = l.getFullYear(), p = "";
        return g !== t.getFullYear() && (p = g + "年"), "" + p + (l.getMonth() + 1) + "月" + l.getDate() + "日 " + c;
    }
    if (0 < o && o < 4) return o + "天前";
    if (o <= 0 && 0 < i) return i + "小时前";
    if (i <= 0 && 0 < s) return s + "分钟前";
    if (s <= 0) return "刚刚";
    var d = new Date(1e3 * e), m = d.getFullYear(), y = "";
    return m !== t.getFullYear() && (y = m + "年"), "" + y + (d.getMonth() + 1) + "月" + d.getDate() + "日";
}

function debounce(t) {
    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 200, a = void 0;
    return function() {
        var e = this, r = arguments;
        clearTimeout(a), a = setTimeout(function() {
            t.apply(e, r);
        }, n);
    };
}

exports.obj2str = obj2str, exports.str2obj = str2obj, exports.hex2rgb = hex2rgb, 
exports.str2date = str2date, exports.formatTime = formatTime, exports.debounce = debounce;

var DateUtil = exports.DateUtil = {
    format: function(e, r) {
        var t = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        for (var n in /(y+)/.test(r) && (r = r.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), 
        t) new RegExp("(" + n + ")").test(r) && (r = r.replace(RegExp.$1, 1 === RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
        return r;
    },
    parse: function(e, r) {
        var t = {
            "y+": 0,
            "M+": 1,
            "d+": 2,
            "h+": 3,
            "m+": 4,
            "s+": 5
        }, n = Array.apply(null, Array(6)).map(function() {
            return 0;
        }), a = 0;
        for (var o in t) {
            var i = new RegExp("(" + o + ")"), s = r.match(i);
            if (s) {
                var l = s.index + a, u = l + s[1].length, f = e.substring(l, u), c = parseInt(f, 10);
                if (1 === s[1].length) {
                    var g = void 0;
                    switch (o) {
                      case "M+":
                        g = 12;
                        break;

                      case "d+":
                        g = 31;
                        break;

                      case "h+":
                      case "m+":
                      case "s+":
                        g = 60;
                    }
                    if (g) {
                        f = e.substring(l, u + 1);
                        var p = parseInt(f, 10);
                        p <= g && 10 <= p && (a++, c = p);
                    }
                }
                isNaN(c) && (c = 0, console.error(new Error("DateUtil.parse error: parse('" + e + ", " + r + "') " + f + " is not integer!"))), 
                "y+" === o && c < 100 ? c += 100 * parseInt(new Date().getFullYear() / 100, 10) : "M+" === o && (c -= 1), 
                n[t[o]] = c;
            }
        }
        return new (Function.prototype.bind.apply(Date, [ null ].concat(_toConsumableArray(n))))();
    },
    _agoType: {
        seconds: {
            label: "秒前",
            ms: 1
        },
        minute: {
            label: "分钟前",
            ms: 6e4
        },
        hour: {
            label: "小时前",
            ms: 36e5
        },
        day: {
            label: "天前",
            ms: 864e5
        },
        week: {
            label: "周前",
            ms: 6048e5
        },
        month: {
            label: "个月前",
            ms: 2592e6
        },
        year: {
            label: "年前",
            ms: 31536e6
        }
    },
    getAgo: function(e) {
        var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = r.maxDays, n = void 0 === t ? 30 : t, a = r.fallbackFormat, o = void 0 === a ? "yyyy-MM-dd hh:mm:ss" : a, i = r.types, s = void 0 === i ? [ "year", "month", "week", "day", "hour", "minute" ] : i;
        "string" == typeof e && (e = Date.parse(e.replace(/-/g, "/"))), e instanceof Date && (e = e.getTime());
        var l = new Date().getTime() - e;
        if (!(l < 0)) {
            var u = (l / DateUtil._agoType.day.ms | 0) <= n, f = void 0;
            return u && s.some(function(e) {
                var r = DateUtil._agoType[e], t = l / r.ms | 0;
                return 0 < t && (f = t + r.label, !0);
            }), !f && o && (f = DateUtil.format(new Date(e), o)), f;
        }
    }
};