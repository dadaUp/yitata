!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(e) : "function" == typeof define && define.amd ? define(t) : t(e);
}("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : this, function(t) {
    "use strict";
    var e, r = (t = t || {}).Base64, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = function(e) {
        for (var t = {}, r = 0, n = e.length; r < n; r++) t[e.charAt(r)] = r;
        return t;
    }(f), c = String.fromCharCode, n = function(e) {
        if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? c(192 | t >>> 6) + c(128 | 63 & t) : c(224 | t >>> 12 & 15) + c(128 | t >>> 6 & 63) + c(128 | 63 & t);
        var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return c(240 | t >>> 18 & 7) + c(128 | t >>> 12 & 63) + c(128 | t >>> 6 & 63) + c(128 | 63 & t);
    }, o = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, u = function(e) {
        return e.replace(o, n);
    }, i = function(e) {
        var t = [ 0, 2, 1 ][e.length % 3], r = e.charCodeAt(0) << 16 | (1 < e.length ? e.charCodeAt(1) : 0) << 8 | (2 < e.length ? e.charCodeAt(2) : 0);
        return [ f.charAt(r >>> 18), f.charAt(r >>> 12 & 63), 2 <= t ? "=" : f.charAt(r >>> 6 & 63), 1 <= t ? "=" : f.charAt(63 & r) ].join("");
    }, d = t.btoa && "function" == typeof t.btoa ? function(e) {
        return t.btoa(e);
    } : function(e) {
        if (e.match(/[^\x00-\xFF]/)) throw new RangeError("The string contains invalid characters.");
        return e.replace(/[\s\S]{1,3}/g, i);
    }, h = function(e) {
        return d(u(String(e)));
    }, l = function(e) {
        return e.replace(/[+\/]/g, function(e) {
            return "+" == e ? "-" : "_";
        }).replace(/=/g, "");
    }, s = function(e, t) {
        return t ? l(h(e)) : h(e);
    };
    t.Uint8Array && (e = function(e, t) {
        for (var r = "", n = 0, o = e.length; n < o; n += 3) {
            var a = e[n], c = e[n + 1], u = e[n + 2], i = a << 16 | c << 8 | u;
            r += f.charAt(i >>> 18) + f.charAt(i >>> 12 & 63) + (void 0 !== c ? f.charAt(i >>> 6 & 63) : "=") + (void 0 !== u ? f.charAt(63 & i) : "=");
        }
        return t ? l(r) : r;
    });
    var A, p = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, g = function(e) {
        switch (e.length) {
          case 4:
            var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
            return c(55296 + (t >>> 10)) + c(56320 + (1023 & t));

          case 3:
            return c((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

          default:
            return c((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
        }
    }, y = function(e) {
        return e.replace(p, g);
    }, x = function(e) {
        var t = e.length, r = t % 4, n = (0 < t ? a[e.charAt(0)] << 18 : 0) | (1 < t ? a[e.charAt(1)] << 12 : 0) | (2 < t ? a[e.charAt(2)] << 6 : 0) | (3 < t ? a[e.charAt(3)] : 0), o = [ c(n >>> 16), c(n >>> 8 & 255), c(255 & n) ];
        return o.length -= [ 0, 0, 2, 1 ][r], o.join("");
    }, B = t.atob && "function" == typeof t.atob ? function(e) {
        return t.atob(e);
    } : function(e) {
        return e.replace(/\S{1,4}/g, x);
    }, C = function(e) {
        return B(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""));
    }, b = function(e) {
        return String(e).replace(/[-_]/g, function(e) {
            return "-" == e ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, "");
    }, v = function(e) {
        return t = b(e), y(B(t));
        var t;
    };
    t.Uint8Array && (A = function(e) {
        return Uint8Array.from(C(b(e)), function(e) {
            return e.charCodeAt(0);
        });
    });
    if (t.Base64 = {
        VERSION: "2.6.4",
        atob: C,
        btoa: d,
        fromBase64: v,
        toBase64: s,
        utob: u,
        encode: s,
        encodeURI: function(e) {
            return s(e, !0);
        },
        btou: y,
        decode: v,
        noConflict: function() {
            var e = t.Base64;
            return t.Base64 = r, e;
        },
        fromUint8Array: e,
        toUint8Array: A
    }, "function" == typeof Object.defineProperty) {
        var F = function(e) {
            return {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            };
        };
        t.Base64.extendString = function() {
            Object.defineProperty(String.prototype, "fromBase64", F(function() {
                return v(this);
            })), Object.defineProperty(String.prototype, "toBase64", F(function(e) {
                return s(this, e);
            })), Object.defineProperty(String.prototype, "toBase64URI", F(function() {
                return s(this, !0);
            }));
        };
    }
    return t.Meteor && (Base64 = t.Base64), "undefined" != typeof module && module.exports ? module.exports.Base64 = t.Base64 : "function" == typeof define && define.amd && define([], function() {
        return t.Base64;
    }), {
        Base64: t.Base64
    };
});