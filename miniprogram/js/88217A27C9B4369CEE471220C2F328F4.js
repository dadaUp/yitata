Object.defineProperty(exports, "__esModule", {
    value: !0
});

var taro = require("F296F1D7C9B4369C94F099D01BC328F4.js");

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
        }))), r.forEach(function(e) {
            _defineProperty(t, e, n[e]);
        });
    }
    return t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t);
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" != typeof t && "function" != typeof t ? _assertThisInitialized(e) : t;
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
}

function _iterableToArray(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var objectIs = Object.is || function(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
};

function shallowEqual(e, t) {
    if ("object" !== _typeof(e) && "object" !== _typeof(t)) return e === t;
    if (null === e && null === t) return !0;
    if (null === e || null === t) return !1;
    if (objectIs(e, t)) return !0;
    var n = e ? Object.keys(e) : [], r = t ? Object.keys(t) : [];
    if (n.length !== r.length) return !1;
    for (var o = 0; o < n.length; o++) {
        var a = n[o];
        if (!t.hasOwnProperty(a) || !objectIs(e[a], t[a])) return !1;
    }
    return !0;
}

var SimpleMap = function() {
    function e() {
        _classCallCheck(this, e), this.cache = [], this.size = 0;
    }
    return _createClass(e, [ {
        key: "set",
        value: function(e, t) {
            var n = this.cache.length;
            if (!n) return this.cache.push({
                k: e,
                v: t
            }), void (this.size += 1);
            for (var r = 0; r < n; r++) {
                var o = this.cache[r];
                if (o.k === e) return void (o.v = t);
            }
            this.cache.push({
                k: e,
                v: t
            }), this.size += 1;
        }
    }, {
        key: "get",
        value: function(e) {
            var t = this.cache.length;
            if (t) for (var n = 0; n < t; n++) {
                var r = this.cache[n];
                if (r.k === e) return r.v;
            }
        }
    }, {
        key: "has",
        value: function(e) {
            var t = this.cache.length;
            if (!t) return !1;
            for (var n = 0; n < t; n++) {
                if (this.cache[n].k === e) return !0;
            }
            return !1;
        }
    }, {
        key: "delete",
        value: function(e) {
            for (var t = this.cache.length, n = 0; n < t; n++) {
                if (this.cache[n].k === e) return this.cache.splice(n, 1), this.size -= 1, !0;
            }
            return !1;
        }
    }, {
        key: "clear",
        value: function() {
            var e = this.cache.length;
            if (this.size = 0, e) for (;e; ) this.cache.pop(), e--;
        }
    } ]), e;
}();

function addLeadingSlash(e) {
    return "/" === e.charAt(0) ? e : "/" + e;
}

function getCurrentPageUrl() {
    var e = getCurrentPages(), t = e[e.length - 1];
    return addLeadingSlash(t.route || t.__route__);
}

var nextTick = function(e) {
    for (var t, n = arguments.length, r = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
    e = "function" == typeof e ? (t = e).bind.apply(t, [ null ].concat(r)) : e, (wx.nextTick ? wx.nextTick : setTimeout)(e);
}, commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function unwrapExports(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}

function createCommonjsModule(e, t) {
    return e(t = {
        exports: {}
    }, t.exports), t.exports;
}

var reactIs_production_min = createCommonjsModule(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && Symbol.for, r = n ? Symbol.for("react.element") : 60103, o = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, c = n ? Symbol.for("react.profiler") : 60114, s = n ? Symbol.for("react.provider") : 60109, p = n ? Symbol.for("react.context") : 60110, u = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, _ = n ? Symbol.for("react.memo") : 60115, y = n ? Symbol.for("react.lazy") : 60116, h = n ? Symbol.for("react.fundamental") : 60117, v = n ? Symbol.for("react.responder") : 60118, g = n ? Symbol.for("react.scope") : 60119;
    function b(e) {
        if ("object" === _typeof(e) && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch (e = e.type) {
                  case u:
                  case l:
                  case a:
                  case c:
                  case i:
                  case d:
                    return e;

                  default:
                    switch (e = e && e.$$typeof) {
                      case p:
                      case f:
                      case s:
                        return e;

                      default:
                        return t;
                    }
                }

              case y:
              case _:
              case o:
                return t;
            }
        }
    }
    function P(e) {
        return b(e) === l;
    }
    t.typeOf = b, t.AsyncMode = u, t.ConcurrentMode = l, t.ContextConsumer = p, t.ContextProvider = s, 
    t.Element = r, t.ForwardRef = f, t.Fragment = a, t.Lazy = y, t.Memo = _, t.Portal = o, 
    t.Profiler = c, t.StrictMode = i, t.Suspense = d, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === l || e === c || e === i || e === d || e === m || "object" === _typeof(e) && null !== e && (e.$$typeof === y || e.$$typeof === _ || e.$$typeof === s || e.$$typeof === p || e.$$typeof === f || e.$$typeof === h || e.$$typeof === v || e.$$typeof === g);
    }, t.isAsyncMode = function(e) {
        return P(e) || b(e) === u;
    }, t.isConcurrentMode = P, t.isContextConsumer = function(e) {
        return b(e) === p;
    }, t.isContextProvider = function(e) {
        return b(e) === s;
    }, t.isElement = function(e) {
        return "object" === _typeof(e) && null !== e && e.$$typeof === r;
    }, t.isForwardRef = function(e) {
        return b(e) === f;
    }, t.isFragment = function(e) {
        return b(e) === a;
    }, t.isLazy = function(e) {
        return b(e) === y;
    }, t.isMemo = function(e) {
        return b(e) === _;
    }, t.isPortal = function(e) {
        return b(e) === o;
    }, t.isProfiler = function(e) {
        return b(e) === c;
    }, t.isStrictMode = function(e) {
        return b(e) === i;
    }, t.isSuspense = function(e) {
        return b(e) === d;
    };
});

unwrapExports(reactIs_production_min);

var reactIs_production_min_1 = reactIs_production_min.typeOf, reactIs_production_min_2 = reactIs_production_min.AsyncMode, reactIs_production_min_3 = reactIs_production_min.ConcurrentMode, reactIs_production_min_4 = reactIs_production_min.ContextConsumer, reactIs_production_min_5 = reactIs_production_min.ContextProvider, reactIs_production_min_6 = reactIs_production_min.Element, reactIs_production_min_7 = reactIs_production_min.ForwardRef, reactIs_production_min_8 = reactIs_production_min.Fragment, reactIs_production_min_9 = reactIs_production_min.Lazy, reactIs_production_min_10 = reactIs_production_min.Memo, reactIs_production_min_11 = reactIs_production_min.Portal, reactIs_production_min_12 = reactIs_production_min.Profiler, reactIs_production_min_13 = reactIs_production_min.StrictMode, reactIs_production_min_14 = reactIs_production_min.Suspense, reactIs_production_min_15 = reactIs_production_min.isValidElementType, reactIs_production_min_16 = reactIs_production_min.isAsyncMode, reactIs_production_min_17 = reactIs_production_min.isConcurrentMode, reactIs_production_min_18 = reactIs_production_min.isContextConsumer, reactIs_production_min_19 = reactIs_production_min.isContextProvider, reactIs_production_min_20 = reactIs_production_min.isElement, reactIs_production_min_21 = reactIs_production_min.isForwardRef, reactIs_production_min_22 = reactIs_production_min.isFragment, reactIs_production_min_23 = reactIs_production_min.isLazy, reactIs_production_min_24 = reactIs_production_min.isMemo, reactIs_production_min_25 = reactIs_production_min.isPortal, reactIs_production_min_26 = reactIs_production_min.isProfiler, reactIs_production_min_27 = reactIs_production_min.isStrictMode, reactIs_production_min_28 = reactIs_production_min.isSuspense, reactIs_development = createCommonjsModule(function(e, t) {});

unwrapExports(reactIs_development);

var reactIs_development_1 = reactIs_development.typeOf, reactIs_development_2 = reactIs_development.AsyncMode, reactIs_development_3 = reactIs_development.ConcurrentMode, reactIs_development_4 = reactIs_development.ContextConsumer, reactIs_development_5 = reactIs_development.ContextProvider, reactIs_development_6 = reactIs_development.Element, reactIs_development_7 = reactIs_development.ForwardRef, reactIs_development_8 = reactIs_development.Fragment, reactIs_development_9 = reactIs_development.Lazy, reactIs_development_10 = reactIs_development.Memo, reactIs_development_11 = reactIs_development.Portal, reactIs_development_12 = reactIs_development.Profiler, reactIs_development_13 = reactIs_development.StrictMode, reactIs_development_14 = reactIs_development.Suspense, reactIs_development_15 = reactIs_development.isValidElementType, reactIs_development_16 = reactIs_development.isAsyncMode, reactIs_development_17 = reactIs_development.isConcurrentMode, reactIs_development_18 = reactIs_development.isContextConsumer, reactIs_development_19 = reactIs_development.isContextProvider, reactIs_development_20 = reactIs_development.isElement, reactIs_development_21 = reactIs_development.isForwardRef, reactIs_development_22 = reactIs_development.isFragment, reactIs_development_23 = reactIs_development.isLazy, reactIs_development_24 = reactIs_development.isMemo, reactIs_development_25 = reactIs_development.isPortal, reactIs_development_26 = reactIs_development.isProfiler, reactIs_development_27 = reactIs_development.isStrictMode, reactIs_development_28 = reactIs_development.isSuspense, reactIs = createCommonjsModule(function(e) {
    e.exports = reactIs_production_min;
}), getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(e) {
    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e);
}

function shouldUseNative() {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
            return t[e];
        }).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
            r[e] = e;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
    } catch (e) {
        return !1;
    }
}

var objectAssign = shouldUseNative() ? Object.assign : function(e, t) {
    for (var n, r, o = toObject(e), a = 1; a < arguments.length; a++) {
        for (var i in n = Object(arguments[a])) hasOwnProperty.call(n, i) && (o[i] = n[i]);
        if (getOwnPropertySymbols) {
            r = getOwnPropertySymbols(n);
            for (var c = 0; c < r.length; c++) propIsEnumerable.call(n, r[c]) && (o[r[c]] = n[r[c]]);
        }
    }
    return o;
}, ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", ReactPropTypesSecret_1 = ReactPropTypesSecret, printWarning = function() {};

function checkPropTypes(e, t, n, r, o) {}

checkPropTypes.resetWarningCache = function() {};

var checkPropTypes_1 = checkPropTypes, has$1 = Function.call.bind(Object.prototype.hasOwnProperty), printWarning$1 = function() {};

function emptyFunctionThatReturnsNull() {
    return null;
}

var factoryWithTypeCheckers = function(c, p) {
    var a = "function" == typeof Symbol && Symbol.iterator, i = "@@iterator";
    var u = "<<anonymous>>", e = {
        array: t("array"),
        bool: t("boolean"),
        func: t("function"),
        number: t("number"),
        object: t("object"),
        string: t("string"),
        symbol: t("symbol"),
        any: n(emptyFunctionThatReturnsNull),
        arrayOf: function(p) {
            return n(function(e, t, n, r, o) {
                if ("function" != typeof p) return new f("Property `" + o + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");
                var a = e[t];
                if (!Array.isArray(a)) {
                    var i = d(a);
                    return new f("Invalid " + r + " `" + o + "` of type `" + i + "` supplied to `" + n + "`, expected an array.");
                }
                for (var c = 0; c < a.length; c++) {
                    var s = p(a, c, n, r, o + "[" + c + "]", ReactPropTypesSecret_1);
                    if (s instanceof Error) return s;
                }
                return null;
            });
        },
        element: n(function(e, t, n, r, o) {
            var a = e[t];
            if (c(a)) return null;
            var i = d(a);
            return new f("Invalid " + r + " `" + o + "` of type `" + i + "` supplied to `" + n + "`, expected a single ReactElement.");
        }),
        elementType: n(function(e, t, n, r, o) {
            var a = e[t];
            if (reactIs.isValidElementType(a)) return null;
            var i = d(a);
            return new f("Invalid " + r + " `" + o + "` of type `" + i + "` supplied to `" + n + "`, expected a single ReactElement type.");
        }),
        instanceOf: function(s) {
            return n(function(e, t, n, r, o) {
                if (e[t] instanceof s) return null;
                var a = s.name || u, i = (c = e[t], c.constructor && c.constructor.name ? c.constructor.name : u);
                var c;
                return new f("Invalid " + r + " `" + o + "` of type `" + i + "` supplied to `" + n + "`, expected instance of `" + a + "`.");
            });
        },
        node: n(function(e, t, n, r, o) {
            return s(e[t]) ? null : new f("Invalid " + r + " `" + o + "` supplied to `" + n + "`, expected a ReactNode.");
        }),
        objectOf: function(p) {
            return n(function(e, t, n, r, o) {
                if ("function" != typeof p) return new f("Property `" + o + "` of component `" + n + "` has invalid PropType notation inside objectOf.");
                var a = e[t], i = d(a);
                if ("object" !== i) return new f("Invalid " + r + " `" + o + "` of type `" + i + "` supplied to `" + n + "`, expected an object.");
                for (var c in a) if (has$1(a, c)) {
                    var s = p(a, c, n, r, o + "." + c, ReactPropTypesSecret_1);
                    if (s instanceof Error) return s;
                }
                return null;
            });
        },
        oneOf: function(s) {
            if (!Array.isArray(s)) return emptyFunctionThatReturnsNull;
            return n(function(e, t, n, r, o) {
                for (var a = e[t], i = 0; i < s.length; i++) if (l(a, s[i])) return null;
                var c = JSON.stringify(s, function(e, t) {
                    var n = m(t);
                    return "symbol" === n ? String(t) : t;
                });
                return new f("Invalid " + r + " `" + o + "` of value `" + String(a) + "` supplied to `" + n + "`, expected one of " + c + ".");
            });
        },
        oneOfType: function(c) {
            if (!Array.isArray(c)) return emptyFunctionThatReturnsNull;
            for (var e = 0; e < c.length; e++) {
                var t = c[e];
                if ("function" != typeof t) return printWarning$1("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + r(t) + " at index " + e + "."), 
                emptyFunctionThatReturnsNull;
            }
            return n(function(e, t, n, r, o) {
                for (var a = 0; a < c.length; a++) {
                    var i = c[a];
                    if (null == i(e, t, n, r, o, ReactPropTypesSecret_1)) return null;
                }
                return new f("Invalid " + r + " `" + o + "` supplied to `" + n + "`.");
            });
        },
        shape: function(u) {
            return n(function(e, t, n, r, o) {
                var a = e[t], i = d(a);
                if ("object" !== i) return new f("Invalid " + r + " `" + o + "` of type `" + i + "` supplied to `" + n + "`, expected `object`.");
                for (var c in u) {
                    var s = u[c];
                    if (s) {
                        var p = s(a, c, n, r, o + "." + c, ReactPropTypesSecret_1);
                        if (p) return p;
                    }
                }
                return null;
            });
        },
        exact: function(l) {
            return n(function(e, t, n, r, o) {
                var a = e[t], i = d(a);
                if ("object" !== i) return new f("Invalid " + r + " `" + o + "` of type `" + i + "` supplied to `" + n + "`, expected `object`.");
                var c = objectAssign({}, e[t], l);
                for (var s in c) {
                    var p = l[s];
                    if (!p) return new f("Invalid " + r + " `" + o + "` key `" + s + "` supplied to `" + n + "`.\nBad object: " + JSON.stringify(e[t], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(l), null, "  "));
                    var u = p(a, s, n, r, o + "." + s, ReactPropTypesSecret_1);
                    if (u) return u;
                }
                return null;
            });
        }
    };
    function l(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    }
    function f(e) {
        this.message = e, this.stack = "";
    }
    function n(s) {
        function e(e, t, n, r, o, a, i) {
            if (r = r || u, a = a || n, i !== ReactPropTypesSecret_1 && p) {
                var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                throw c.name = "Invariant Violation", c;
            }
            return null == t[n] ? e ? null === t[n] ? new f("The " + o + " `" + a + "` is marked as required in `" + r + "`, but its value is `null`.") : new f("The " + o + " `" + a + "` is marked as required in `" + r + "`, but its value is `undefined`.") : null : s(t, n, r, o, a);
        }
        var t = e.bind(null, !1);
        return t.isRequired = e.bind(null, !0), t;
    }
    function t(c) {
        return n(function(e, t, n, r, o, a) {
            var i = e[t];
            return d(i) === c ? null : new f("Invalid " + r + " `" + o + "` of type `" + m(i) + "` supplied to `" + n + "`, expected `" + c + "`.");
        });
    }
    function s(e) {
        switch (_typeof(e)) {
          case "number":
          case "string":
          case "undefined":
            return !0;

          case "boolean":
            return !e;

          case "object":
            if (Array.isArray(e)) return e.every(s);
            if (null === e || c(e)) return !0;
            var t = function(e) {
                var t = e && (a && e[a] || e[i]);
                if ("function" == typeof t) return t;
            }(e);
            if (!t) return !1;
            var n, r = t.call(e);
            if (t !== e.entries) {
                for (;!(n = r.next()).done; ) if (!s(n.value)) return !1;
            } else for (;!(n = r.next()).done; ) {
                var o = n.value;
                if (o && !s(o[1])) return !1;
            }
            return !0;

          default:
            return !1;
        }
    }
    function d(e) {
        var t, n = _typeof(e);
        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : (t = e, "symbol" === n || t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol) ? "symbol" : n);
    }
    function m(e) {
        if (null == e) return "" + e;
        var t = d(e);
        if ("object" === t) {
            if (e instanceof Date) return "date";
            if (e instanceof RegExp) return "regexp";
        }
        return t;
    }
    function r(e) {
        var t = m(e);
        switch (t) {
          case "array":
          case "object":
            return "an " + t;

          case "boolean":
          case "date":
          case "regexp":
            return "a " + t;

          default:
            return t;
        }
    }
    return f.prototype = Error.prototype, e.checkPropTypes = checkPropTypes_1, e.resetWarningCache = checkPropTypes_1.resetWarningCache, 
    e.PropTypes = e;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
    function e(e, t, n, r, o, a) {
        if (a !== ReactPropTypesSecret_1) {
            var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw i.name = "Invariant Violation", i;
        }
    }
    function t() {
        return e;
    }
    var n = {
        array: e.isRequired = e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
    };
    return n.PropTypes = n;
}, propTypes = createCommonjsModule(function(e) {
    e.exports = factoryWithThrowingShims();
}), freeGlobal = "object" == _typeof(commonjsGlobal) && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal, _freeGlobal = freeGlobal, freeSelf = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self, root = _freeGlobal || freeSelf || Function("return this")(), _root = root, _Symbol2 = _root.Symbol, _Symbol = _Symbol2, objectProto = Object.prototype, hasOwnProperty$1 = objectProto.hasOwnProperty, nativeObjectToString = objectProto.toString, symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;

function getRawTag(e) {
    var t = hasOwnProperty$1.call(e, symToStringTag), n = e[symToStringTag];
    try {
        e[symToStringTag] = void 0;
    } catch (e) {}
    var r = nativeObjectToString.call(e);
    return t ? e[symToStringTag] = n : delete e[symToStringTag], r;
}

var _getRawTag = getRawTag, objectProto$1 = Object.prototype, nativeObjectToString$1 = objectProto$1.toString;

function objectToString(e) {
    return nativeObjectToString$1.call(e);
}

var _objectToString = objectToString, nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag$1 = _Symbol ? _Symbol.toStringTag : void 0;

function baseGetTag(e) {
    return null == e ? void 0 === e ? undefinedTag : nullTag : symToStringTag$1 && symToStringTag$1 in Object(e) ? _getRawTag(e) : _objectToString(e);
}

var _baseGetTag = baseGetTag;

function overArg(t, n) {
    return function(e) {
        return t(n(e));
    };
}

var _overArg = overArg, getPrototype = _overArg(Object.getPrototypeOf, Object), _getPrototype = getPrototype;

function isObjectLike(e) {
    return null != e && "object" == _typeof(e);
}

var isObjectLike_1 = isObjectLike, objectTag = "[object Object]", funcProto = Function.prototype, objectProto$2 = Object.prototype, funcToString = funcProto.toString, hasOwnProperty$2 = objectProto$2.hasOwnProperty, objectCtorString = funcToString.call(Object);

function isPlainObject(e) {
    if (!isObjectLike_1(e) || _baseGetTag(e) != objectTag) return !1;
    var t = _getPrototype(e);
    if (null === t) return !0;
    var n = hasOwnProperty$2.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n instanceof n && funcToString.call(n) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

function isEmptyObject(e) {
    if (!e || !isPlainObject_1(e)) return !1;
    for (var t in e) if (e.hasOwnProperty(t)) return !1;
    return !0;
}

function isUndefined(e) {
    return void 0 === e;
}

function isFunction(e) {
    return "function" == typeof e;
}

function isArray(e) {
    return Array.isArray(e);
}

function cloneDeep(e) {
    var t;
    if (isArray(e)) {
        t = [];
        for (var n = e.length, r = 0; r < n; r++) t.push(cloneDeep(e[r]));
    } else {
        if (!isPlainObject_1(e)) return e;
        for (var o in t = {}, e) {
            var a = cloneDeep(e[o]);
            t[o] = a;
        }
    }
    return t;
}

var keyList = Object.keys, hasProp = Object.prototype.hasOwnProperty;

function diffArrToPath(c, s) {
    for (var p = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, u = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "", e = c.length, t = function(e) {
        var t = c[e], n = s[e], r = "".concat(u, "[").concat(e, "]");
        if (t === n) return "continue";
        if (_typeof(t) !== _typeof(n)) p[r] = t; else if ("object" !== _typeof(t)) p[r] = t; else {
            var o = isArray(t), a = isArray(n);
            if (o !== a) p[r] = t; else if (o && a) t.length < n.length ? p[r] = t : diffArrToPath(t, n, p, "".concat(r)); else if (!t || !n || keyList(t).length < keyList(n).length) p[r] = t; else {
                var i = isPlainObject_1(t);
                i && Object.keys(n).some(function(e) {
                    if (void 0 === t[e] && void 0 !== n[e]) return !(i = !1);
                }), i ? diffObjToPath(t, n, p, "".concat(r, ".")) : p[r] = t;
            }
        }
    }, n = 0; n < e; n++) t(n);
    return p;
}

function diffObjToPath(s, p) {
    for (var u = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, l = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "", f = keyList(s), e = f.length, t = function(e) {
        var t = f[e], n = s[t], r = p[t], o = "".concat(l).concat(t);
        if (/^\$compid__/.test(t)) u[o] = n; else {
            if (n === r) return "continue";
            if (hasProp.call(p, t)) if (_typeof(n) !== _typeof(r)) u[o] = n; else if ("object" !== _typeof(n)) u[o] = n; else {
                var a = isArray(n), i = isArray(r);
                if (a !== i) u[o] = n; else if (a && i) n.length < r.length ? u[o] = n : diffArrToPath(n, r, u, "".concat(o)); else if (n && r) {
                    var c = isPlainObject_1(n);
                    c && Object.keys(r).some(function(e) {
                        if (void 0 === n[e] && void 0 !== r[e]) return !(c = !1);
                    }), c ? diffObjToPath(n, r, u, "".concat(o, ".")) : u[o] = n;
                } else u[o] = n;
            } else u[o] = n;
        }
    }, n = 0; n < e; n++) t(n);
    return u;
}

function queryToJson(e) {
    for (var t, n, r, o = decodeURIComponent, a = e.split("&"), i = {}, c = 0, s = a.length; c < s; ++c) if ((r = a[c]).length) {
        var p = r.indexOf("=");
        n = p < 0 ? (t = o(r), "") : (t = o(r.slice(0, p)), o(r.slice(p + 1))), "string" == typeof i[t] && (i[t] = [ i[t] ]), 
        isArray(i[t]) ? i[t].push(n) : i[t] = n;
    }
    return i;
}

var _loadTime = new Date().getTime().toString(), _i = 1;

function getUniqueKey() {
    return _loadTime + _i++;
}

function getElementById(e, t, n) {
    if (!e) return null;
    var r;
    "component" === n ? r = (r = e.selectComponent(t)) ? r.$component || r : null : r = wx.createSelectorQuery().in(e).select(t);
    return r || null;
}

var compIdsMapper, id$1 = 0;

function genId() {
    return String(id$1++);
}

try {
    compIdsMapper = new Map();
} catch (e) {
    compIdsMapper = new SimpleMap();
}

function genCompid(e, t) {
    if (!taro.Current || !taro.Current.current || !taro.Current.current.$scope) return [];
    var n = compIdsMapper.get(e);
    if (t) {
        var r = genId();
        return compIdsMapper.set(e, r), [ n, r ];
    }
    var o = n || genId();
    return !n && compIdsMapper.set(e, o), [ null, o ];
}

var prefix = 0;

function genCompPrefix() {
    return String(prefix++);
}

var data = {};

function cacheDataSet(e, t) {
    data[e] = t;
}

function cacheDataGet(e, t) {
    var n = data[e];
    return t && delete data[e], n;
}

function cacheDataHas(e) {
    return e in data;
}

var Manager = function() {
    function e() {
        _classCallCheck(this, e), _defineProperty(this, "map", {}), _defineProperty(this, "observers", {});
    }
    return _createClass(e, [ {
        key: "set",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, a = 1 < arguments.length ? arguments[1] : void 0, t = 2 < arguments.length ? arguments[2] : void 0;
            if (a) {
                t && this.delete(t);
                var i = this.observers;
                this.map[a] || Object.defineProperty(this.map, a, {
                    configurable: !0,
                    get: function() {
                        return this["__".concat(a)];
                    },
                    set: function(e) {
                        this["__".concat(a)] = e;
                        var t = i[a] && i[a].component, n = i[a] && i[a].ComponentClass;
                        if (t && n && t.__isReady) {
                            var r = t.$scope && t.$scope.data && t.$scope.data.extraProps || null, o = filterProps(n.defaultProps, e, t.props, r);
                            t.props = o, nextTick(function() {
                                t._unsafeCallUpdate = !0, updateComponent(t), t._unsafeCallUpdate = !1;
                            });
                        }
                    }
                }), this.map[a] = e;
            }
        }
    }, {
        key: "delete",
        value: function(e) {
            delete this.map[e], delete this.map["__".concat(e)], delete this.observers[e];
        }
    } ]), e;
}(), propsManager = new Manager(), anonymousFnNamePreffix = "funPrivate", routerParamsPrivateKey = "__key_", preloadPrivateKey = "__preload_", PRELOAD_DATA_KEY = "preload", preloadInitedComponent = "$preloadComponent", pageExtraFns = [ "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap", "onResize" ];

function bindProperties(e, i, c) {
    if (e.properties = {}, c) {
        e.properties[routerParamsPrivateKey] = {
            type: null,
            value: null
        }, e.properties[preloadPrivateKey] = {
            type: null,
            value: null
        };
        var t = i.defaultParams || {};
        for (var n in t) t.hasOwnProperty(n) && (e.properties[n] = {
            type: null,
            value: null
        });
    }
    e.properties.compid = {
        type: null,
        value: null,
        observer: function(e, t) {
            var n = this;
            if (initComponent.apply(this, [ i, c ]), t && t !== e) {
                var r = this.data.extraProps, o = this.$component;
                propsManager.observers[e] = {
                    component: o,
                    ComponentClass: o.constructor
                };
                var a = filterProps(o.constructor.defaultProps, propsManager.map[e], o.props, r || null);
                this.$component.props = a, nextTick(function() {
                    n.$component._unsafeCallUpdate = !0, updateComponent(n.$component), n.$component._unsafeCallUpdate = !1;
                });
            }
        }
    }, e.properties.extraProps = {
        type: null,
        value: null,
        observer: function() {
            var e = this;
            if (this.$component && this.$component.__isReady) {
                var t = filterProps(i.defaultProps, {}, this.$component.props, this.data.extraProps);
                this.$component.props = t, nextTick(function() {
                    e.$component._unsafeCallUpdate = !0, updateComponent(e.$component), e.$component._unsafeCallUpdate = !1;
                });
            }
        }
    };
}

function bindBehaviors(e, t) {
    t.behaviors && (e.behaviors = t.behaviors);
}

function bindStaticOptions(e, t) {
    t.options && (e.options = t.options);
}

function bindMultipleSlots(e, t) {
    var n = t.multipleSlots;
    n && (e.options = _objectSpread({}, e.options, {
        multipleSlots: n
    }));
}

function bindStaticFns(t, n) {
    for (var e in n) "function" == typeof n[e] && (t[e] = n[e]);
    Object.getOwnPropertyNames(n).forEach(function(e) {
        [ "arguments", "caller", "length", "name", "prototype" ].indexOf(e) < 0 && "function" == typeof n[e] && (t[e] = n[e]);
    });
}

function processEvent(f, e) {
    e[f] || (e[f] = function(e) {
        e && (e.preventDefault = function() {}, e.stopPropagation = function() {}, e.currentTarget = e.currentTarget || e.target || {}, 
        e.target && Object.assign(e.target, e.detail), Object.assign(e.currentTarget, e.detail));
        var t = this.$component, n = t, r = -1 < f.indexOf(anonymousFnNamePreffix), o = [], a = [], i = [], c = !1, s = e.currentTarget.dataset || {}, p = {}, u = e.type.toLocaleLowerCase();
        if (Object.keys(s).forEach(function(e) {
            var t = e.toLocaleLowerCase();
            if (/^e/.test(t) && 0 <= (t = t.replace(/^e/, "")).indexOf(u)) {
                var n = t.replace(u, "");
                /^(a[a-z]|so)$/.test(n) && (p[n] = s[e]);
            }
        }), e.detail && e.detail.__arguments && 0 < e.detail.__arguments.length && (a = e.detail.__arguments), 
        r) {
            var l = null;
            "so" in p && ("this" !== p.so && (l = p.so), c = !0, delete p.so), 0 < a.length && (!c && a[0] && (n = a[0]), 
            a.shift()), isEmptyObject(p) || (i = Object.keys(p).sort().map(function(e) {
                return p[e];
            })), o = [ l ].concat(_toConsumableArray(i), _toConsumableArray(a), [ e ]);
        } else "so" in p && ("this" !== p.so && (n = p.so), c = !0, delete p.so), 0 < a.length && (!c && a[0] && (n = a[0]), 
        a.shift()), isEmptyObject(p) || (i = Object.keys(p).sort().map(function(e) {
            return p[e];
        })), o = _toConsumableArray(i).concat(_toConsumableArray(a), [ e ]);
        return t[f].apply(n, o);
    });
}

function bindEvents(e, t, n) {
    e.methods = e.methods || {};
    var r = e.methods;
    t.forEach(function(e) {
        processEvent(e, r);
    });
}

function filterProps() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r = 3 < arguments.length ? arguments[3] : void 0, o = Object.assign({}, n, t);
    if (!isEmptyObject(e)) for (var a in e) void 0 === o[a] && (o[a] = e[a]);
    return r && (o = Object.assign({}, o, r)), o;
}

function filterParams(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = {};
    for (var r in t) n[r] = r in e ? e[r] : t[r];
    return n;
}

function componentTrigger(n, e, t) {
    var r;
    if (t = t || [], "componentDidMount" === e) {
        if (n.$$refs && 0 < n.$$refs.length) {
            var o = {};
            n.$$refs.forEach(function(e) {
                var t;
                "component" === e.type ? t = (t = n.$scope.selectComponent("#".concat(e.id))) ? t.$component || t : null : t = wx.createSelectorQuery().in(n.$scope).select("#".concat(e.id));
                taro.commitAttachRef(e, t, n, o, !0), e.target = t;
            }), n.refs = Object.assign({}, n.refs || {}, o);
        }
        n.$$hasLoopRef && (taro.Current.current = n, taro.Current.index = 0, n._disableEffect = !0, 
        n._createData(n.state, n.props, !0), n._disableEffect = !1, taro.Current.current = null);
    }
    if ("componentWillUnmount" === e) {
        var a = n.$scope.data.compid;
        a && propsManager.delete(a);
    }
    n[e] && "function" == typeof n[e] && (r = n[e]).call.apply(r, [ n ].concat(_toConsumableArray(t))), 
    "componentWillMount" === e && (n._dirty = !1, n._disable = !1, n.state = n.getState()), 
    "componentWillUnmount" === e && (n._dirty = !0, n._disable = !0, n.$router = {
        params: {},
        path: ""
    }, n._pendingStates = [], n._pendingCallbacks = [], taro.detachAllRef(n));
}

function initComponent(e, t) {
    if (!this.$component.__isReady) {
        if (this.$component.__isReady = !0, t) this.$component.$router.path = getCurrentPageUrl(); else {
            var n = this.data.compid;
            n && (propsManager.observers[n] = {
                component: this.$component,
                ComponentClass: e
            });
            var r = filterProps(e.defaultProps, propsManager.map[n], this.$component.props, this.data.extraProps);
            this.$component.props = r;
        }
        mountComponent(this.$component);
    }
}

function createComponent(r, o) {
    var e = {}, t = filterProps(r.defaultProps), a = new r(t);
    a._constructor && a._constructor(t);
    try {
        taro.Current.current = a, taro.Current.index = 0, a.state = a._createData() || a.state;
    } catch (e) {
        o ? console.warn("[Taro warn] 请给页面提供初始 `state` 以提高初次渲染性能！") : console.warn("[Taro warn] 请给组件提供一个 `defaultProps` 以提高初次渲染性能！"), 
        console.warn(e);
    }
    var i = {
        data: e = Object.assign({}, e, a.props, a.state),
        created: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            o && cacheDataHas(preloadInitedComponent) ? (this.$component = cacheDataGet(preloadInitedComponent, !0), 
            this.$component.$componentType = "PAGE") : this.$component = new r({}, o), this.$component._init(this), 
            this.$component.render = this.$component._createData, this.$component.__propTypes = r.propTypes, 
            Object.assign(this.$component.$router.params, e);
        },
        attached: function() {
            var e;
            if (o) {
                var t = {};
                if (t = (e = cacheDataHas(this.data[routerParamsPrivateKey])) ? Object.assign({}, r.defaultParams, cacheDataGet(this.data[routerParamsPrivateKey], !0)) : filterParams(this.data, r.defaultParams), 
                cacheDataHas(PRELOAD_DATA_KEY)) {
                    var n = cacheDataGet(PRELOAD_DATA_KEY, !0);
                    this.$component.$router.preload = n;
                }
                Object.assign(this.$component.$router.params, t), cacheDataHas(this.data[preloadPrivateKey]) ? this.$component.$preloadData = cacheDataGet(this.data[preloadPrivateKey], !0) : this.$component.$preloadData = null;
            }
            !e && o || initComponent.apply(this, [ r, o ]);
        },
        ready: function() {
            o || this.$component.__mounted || (this.$component.__mounted = !0, componentTrigger(this.$component, "componentDidMount"));
        },
        detached: function() {
            var e = this.$component;
            componentTrigger(e, "componentWillUnmount"), e.hooks.forEach(function(e) {
                isFunction(e.cleanup) && e.cleanup();
            });
            var t = e.$$renderPropsEvents;
            isArray(t) && t.forEach(function(e) {
                return taro.eventCenter.off(e);
            });
        }
    };
    return o ? (i.methods = i.methods || {}, i.methods.onLoad = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        this.$component.__isReady || (Object.assign(this.$component.$router.params, e), 
        initComponent.apply(this, [ r, o ]));
    }, i.methods.onReady = function() {
        this.$component.__mounted = !0, componentTrigger(this.$component, "componentDidMount");
    }, i.methods.onShow = function() {
        componentTrigger(this.$component, "componentDidShow");
    }, i.methods.onHide = function() {
        componentTrigger(this.$component, "componentDidHide");
    }, pageExtraFns.forEach(function(n) {
        a[n] && "function" == typeof a[n] && (i.methods[n] = function() {
            var e, t = this.$component;
            if (t && t[n] && "function" == typeof t[n]) return (e = t[n]).call.apply(e, [ t ].concat(Array.prototype.slice.call(arguments)));
        });
    }), __wxRoute && cacheDataSet(__wxRoute, r)) : (i.pageLifetimes = i.pageLifetimes || {}, 
    i.pageLifetimes.show = function() {
        componentTrigger(this.$component, "componentDidShow");
    }, i.pageLifetimes.hide = function() {
        componentTrigger(this.$component, "componentDidHide");
    }, i.pageLifetimes.resize = function() {
        componentTrigger(this.$component, "onResize");
    }), bindProperties(i, r, o), bindBehaviors(i, r), bindStaticFns(i, r), bindStaticOptions(i, r), 
    bindMultipleSlots(i, r), r.$$events && bindEvents(i, r.$$events, o), r.externalClasses && r.externalClasses.length && (i.externalClasses = r.externalClasses), 
    i;
}

var isDEV = "undefined" == typeof process || !process.env || !1;

function hasNewLifecycle(e) {
    var t = e.constructor.getDerivedStateFromProps, n = e.getSnapshotBeforeUpdate;
    return isFunction(t) || isFunction(n);
}

function callGetDerivedStateFromProps(e, t, n) {
    var r, o = e.constructor.getDerivedStateFromProps;
    if (isFunction(o)) {
        var a = o(t, n);
        isUndefined(a) ? console.warn("getDerivedStateFromProps 没有返回任何内容，这个生命周期必须返回 null 或一个新对象。") : r = Object.assign({}, n, a);
    }
    return r;
}

function callGetSnapshotBeforeUpdate(e, t, n) {
    var r, o = e.getSnapshotBeforeUpdate;
    return isFunction(o) && (r = o.call(e, t, n)), r;
}

function updateComponent(e) {
    var t = e.props, n = e.__propTypes;
    if (isDEV && n) {
        var r = e.constructor.name;
        if (isUndefined(r)) {
            var o = e.constructor.toString().match(/^function\s*([^\s(]+)/);
            r = isArray(o) ? o[0] : "Component";
        }
        propTypes.checkPropTypes(n, t, "prop", r);
    }
    var a = e.prevProps || t;
    e.props = a, e.__mounted && !0 === e._unsafeCallUpdate && !hasNewLifecycle(e) && e.componentWillReceiveProps && (e._disable = !0, 
    e.componentWillReceiveProps(t), e._disable = !1);
    var i = e.getState(), c = e.prevState || i, s = callGetDerivedStateFromProps(e, t, i);
    isUndefined(s) || (i = s);
    var p = !1;
    e.__mounted && ("function" != typeof e.shouldComponentUpdate || e._isForceUpdate || !1 !== e.shouldComponentUpdate(t, i) ? !hasNewLifecycle(e) && isFunction(e.componentWillUpdate) && e.componentWillUpdate(t, i) : p = !0), 
    e.props = t, e.state = i, e._dirty = !1, e._isForceUpdate = !1, p || doUpdate(e, a, c), 
    e.prevProps = e.props, e.prevState = e.state;
}

function mountComponent(e) {
    var t = e.props;
    e.__componentWillMountTriggered || e._constructor && e._constructor(t);
    var n = callGetDerivedStateFromProps(e, t, e.state);
    isUndefined(n) || (e.state = n), e._dirty = !1, e._disable = !1, e._isForceUpdate = !1, 
    e.__componentWillMountTriggered || (e.__componentWillMountTriggered = !0, hasNewLifecycle(e) || componentTrigger(e, "componentWillMount")), 
    doUpdate(e, t, e.state), e.prevProps = e.props, e.prevState = e.state;
}

function injectContextType(t) {
    var e = t.constructor.contextType;
    if (e) {
        var n = e.context, r = n.emitter;
        if (null === r) return void (t.context = n._defaultValue);
        t._hasContext || (t._hasContext = !0, r.on(function(e) {
            return enqueueRender(t);
        })), t.context = r.value;
    }
}

function doUpdate(n, t, r) {
    var e = n.state, o = n.props, a = void 0 === o ? {} : o, i = e || {};
    if (n._createData && (n.__isReady && (injectContextType(n), taro.Current.current = n, 
    taro.Current.index = 0, taro.invokeEffects(n, !0)), i = n._createData(e, a) || i, 
    n.__isReady && (taro.Current.current = null)), i = Object.assign({}, a, i), n.$usedState && n.$usedState.length) {
        var c = {};
        n.$usedState.forEach(function(e) {
            var t = taro.internal_safe_get(i, e);
            if (void 0 !== t) if ("object" === _typeof(t)) {
                if (isEmptyObject(t)) return taro.internal_safe_set(c, e, {});
                isEmptyObject(t = cloneDeep(t)) || taro.internal_safe_set(c, e, t);
            } else taro.internal_safe_set(c, e, t);
        }), i = c;
    }
    i.$taroCompReady = !0;
    var s, p = diffObjToPath(i, n.$scope.data), u = n.__mounted;
    u && (s = callGetSnapshotBeforeUpdate(n, t, r));
    var l = [];
    n._pendingCallbacks && n._pendingCallbacks.length && (l = n._pendingCallbacks, n._pendingCallbacks = []);
    var f = function() {
        if (u && (taro.invokeEffects(n), n.$$refs && 0 < n.$$refs.length && n.$$refs.forEach(function(e) {
            if ("component" === e.type) {
                var t = n.$scope.selectComponent("#".concat(e.id));
                (t = t ? t.$component || t : null) !== e.target && (taro.commitAttachRef(e, t, n, n.refs), 
                e.target = t);
            }
        }), n.$$hasLoopRef && (taro.Current.current = n, taro.Current.index = 0, n._disableEffect = !0, 
        n._createData(n.state, n.props, !0), n._disableEffect = !1, taro.Current.current = null), 
        isFunction(n.componentDidUpdate) && n.componentDidUpdate(t, r, s)), l.length) for (var e = l.length; 0 <= --e; ) "function" == typeof l[e] && l[e].call(n);
    };
    0 === Object.keys(p).length ? f() : n.$scope.setData(p, f);
}

var items = [];

function enqueueRender(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    e._isForceUpdate = t, !e._dirty && (e._dirty = !0) && 1 === items.push(e) && nextTick(function() {
        rerender();
    });
}

function rerender() {
    var e, t = items;
    for (items = []; e = t.pop(); ) e._dirty && updateComponent(e, !0);
}

var PRELOAD_DATA_KEY$1 = "preload", BaseComponent = function() {
    function n() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = 1 < arguments.length ? arguments[1] : void 0;
        _classCallCheck(this, n), _defineProperty(this, "__computed", {}), _defineProperty(this, "__props", {}), 
        _defineProperty(this, "__isReady", !1), _defineProperty(this, "__mounted", !1), 
        _defineProperty(this, "context", {}), _defineProperty(this, "_dirty", !0), _defineProperty(this, "_disable", !0), 
        _defineProperty(this, "_isForceUpdate", !1), _defineProperty(this, "_pendingStates", []), 
        _defineProperty(this, "_pendingCallbacks", []), _defineProperty(this, "$componentType", ""), 
        _defineProperty(this, "$router", {
            params: {},
            path: ""
        }), _defineProperty(this, "_afterScheduleEffect", !1), _defineProperty(this, "_disableEffect", !1), 
        _defineProperty(this, "hooks", []), _defineProperty(this, "effects", []), _defineProperty(this, "layoutEffects", []), 
        this.state = {}, this.props = e, this.$componentType = t ? "PAGE" : "COMPONENT", 
        this.$prefix = genCompPrefix(), this.isTaroComponent = this.$componentType && this.$router && this._pendingStates;
    }
    return _createClass(n, [ {
        key: "_constructor",
        value: function(e) {
            this.props = e || {};
        }
    }, {
        key: "_init",
        value: function(e) {
            this.$scope = e;
        }
    }, {
        key: "setState",
        value: function(e, t) {
            e && (this._pendingStates = this._pendingStates || []).push(e), isFunction(t) && (this._pendingCallbacks = this._pendingCallbacks || []).push(t), 
            this._disable || enqueueRender(this, t === taro.internal_force_update);
        }
    }, {
        key: "getState",
        value: function() {
            var t = this, e = this._pendingStates, n = this.state, r = this.props, o = Object.assign({}, n);
            if (delete o.__data, !e.length) return o;
            var a = e.concat();
            return this._pendingStates.length = 0, a.forEach(function(e) {
                isFunction(e) && (e = e.call(t, o, r)), Object.assign(o, e);
            }), o;
        }
    }, {
        key: "forceUpdate",
        value: function(e) {
            isFunction(e) && (this._pendingCallbacks = this._pendingCallbacks || []).push(e), 
            this._isForceUpdate = !0, updateComponent(this);
        }
    }, {
        key: "$preload",
        value: function(e, t) {
            var n = cacheDataGet(PRELOAD_DATA_KEY$1) || {};
            if ("object" === _typeof(e)) for (var r in e) n[r] = e[r]; else n[e] = t;
            cacheDataSet(PRELOAD_DATA_KEY$1, n);
        }
    }, {
        key: "__triggerPropsFn",
        value: function(e, t) {
            var n = e.split("."), r = "__event_" + n.shift();
            if (r in this) {
                var o = t.shift();
                (0 < n.length ? taro.internal_safe_get(this[r], n.join(".")) : this[r]).apply(o, t);
            } else {
                var a = e.toLocaleLowerCase(), i = {
                    __isCustomEvt: !0,
                    __arguments: t
                };
                0 < t.length && (i.value = t.slice(1)), this.$scope.triggerEvent(a, i);
            }
        }
    } ]), n;
}(), PureComponent = function(e) {
    function a() {
        var e, t;
        _classCallCheck(this, a);
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return _defineProperty(_assertThisInitialized(_assertThisInitialized(t = _possibleConstructorReturn(this, (e = _getPrototypeOf(a)).call.apply(e, [ this ].concat(r))))), "isPureComponent", !0), 
        t;
    }
    return _inherits(a, BaseComponent), _createClass(a, [ {
        key: "shouldComponentUpdate",
        value: function(e, t) {
            return !shallowEqual(this.props, e) || !shallowEqual(this.state, t);
        }
    } ]), a;
}();

function createApp(e) {
    var t = new e(), n = {
        onLaunch: function(e) {
            t.$app = this, t.$app.$router = t.$router = {
                params: e
            }, t.componentWillMount && t.componentWillMount(), t.componentDidMount && t.componentDidMount();
        },
        onShow: function(e) {
            Object.assign(t.$router.params, e), t.componentDidShow && t.componentDidShow();
        },
        onHide: function() {
            t.componentDidHide && t.componentDidHide();
        },
        onError: function(e) {
            t.componentDidCatchError && t.componentDidCatchError(e);
        },
        onPageNotFound: function(e) {
            t.componentDidNotFound && t.componentDidNotFound(e);
        }
    };
    return Object.assign(n, t);
}

var RequestQueue = {
    MAX_REQUEST: 5,
    queue: [],
    request: function(e) {
        return this.push(e), this.run();
    },
    push: function(e) {
        this.queue.push(e);
    },
    run: function() {
        var r = this;
        if (this.queue.length && this.queue.length <= this.MAX_REQUEST) {
            var o = this.queue.shift(), a = o.complete;
            return o.complete = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                a && a.apply(o, t), r.run();
            }, wx.request(o);
        }
    }
};

function taroInterceptor(e) {
    return request(e.requestParams);
}

var link = new taro.Link(taroInterceptor);

function request(e) {
    "string" == typeof (e = e || {}) && (e = {
        url: e
    });
    var r, o = e.success, a = e.fail, i = e.complete, t = new Promise(function(t, n) {
        e.success = function(e) {
            o && o(e), t(e);
        }, e.fail = function(e) {
            a && a(e), n(e);
        }, e.complete = function(e) {
            i && i(e);
        }, r = RequestQueue.request(e);
    });
    return t.abort = function(e) {
        return e && e(), r && r.abort(), t;
    }, t;
}

function processApis(e) {
    var t = Object.assign({}, taro.onAndSyncApis, taro.noPromiseApis, taro.otherApis), P = {
        navigateTo: !0,
        redirectTo: !0,
        reLaunch: !0
    };
    Object.keys(t).forEach(function(b) {
        b in wx ? taro.onAndSyncApis[b] || taro.noPromiseApis[b] ? e[b] = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = t.length, o = t.concat(), a = o[r - 1];
            return a && a.isTaroComponent && a.$scope && o.splice(r - 1, 1, a.$scope), wx[b].apply(wx, o);
        } : e[b] = function(o) {
            for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
            o = o || {};
            var r, a = null, i = Object.assign({}, o);
            if ("string" == typeof o) return t.length ? (r = wx)[b].apply(r, [ o ].concat(t)) : wx[b](o);
            if ("navigateTo" === b || "redirectTo" === b || "switchTab" === b) {
                var c = i.url ? i.url.replace(/^\//, "") : "";
                -1 < c.indexOf("?") && (c = c.split("?")[0]);
                var s = cacheDataGet(c);
                if (s) {
                    var p = new s();
                    if (p.componentWillPreload) {
                        var u = getUniqueKey(), l = i.url.indexOf("?"), f = -1 < l, d = queryToJson(f ? i.url.substring(l + 1, i.url.length) : "");
                        i.url += (f ? "&" : "?") + "".concat("__preload_", "=").concat(u), cacheDataSet(u, p.componentWillPreload(d)), 
                        cacheDataSet("$preloadComponent", p);
                    }
                }
            }
            if (P[b]) {
                var m = i.url = i.url || "", _ = m.indexOf("?"), y = -1 < _, h = queryToJson(y ? m.substring(_ + 1, m.length) : ""), v = getUniqueKey();
                i.url += (y ? "&" : "?") + "".concat("__key_", "=").concat(v), cacheDataSet(v, h);
            }
            var g = new Promise(function(n, r) {
                var e;
                ([ "fail", "success", "complete" ].forEach(function(t) {
                    i[t] = function(e) {
                        o[t] && o[t](e), "success" === t ? n("connectSocket" === b ? Promise.resolve().then(function() {
                            return Object.assign(a, e);
                        }) : e) : "fail" === t && r(e);
                    };
                }), t.length) ? a = (e = wx)[b].apply(e, [ i ].concat(t)) : a = wx[b](i);
            });
            return "uploadFile" !== b && "downloadFile" !== b || (g.progress = function(e) {
                return a && a.onProgressUpdate(e), g;
            }, g.abort = function(e) {
                return e && e(), a && a.abort(), g;
            }), g;
        } : e[b] = function() {
            console.warn("微信小程序暂不支持 ".concat(b));
        };
    });
}

function pxTransform(e) {
    var t = this.config || {}, n = t.designWidth, r = void 0 === n ? 750 : n, o = t.deviceRatio, a = void 0 === o ? {
        640: 1.17,
        750: 1,
        828: .905
    } : o;
    if (!(r in a)) throw new Error("deviceRatio 配置中不存在 ".concat(r, " 的设置！"));
    return parseInt(e, 10) / a[r] + "rpx";
}

function canIUseWebp() {
    var e = wx.getSystemInfoSync().platform.toLowerCase();
    return "android" === e || "devtools" === e;
}

function wxCloud(e) {
    var t = wx.cloud || {}, n = {};
    [ "init", "database", "uploadFile", "downloadFile", "getTempFileURL", "deleteFile", "callFunction", "CloudID" ].forEach(function(e) {
        n[e] = t[e];
    }), e.cloud = n;
}

function initNativeApi(e) {
    processApis(e), e.request = link.request.bind(link), e.addInterceptor = link.addInterceptor.bind(link), 
    e.cleanInterceptors = link.cleanInterceptors.bind(link), e.getCurrentPages = getCurrentPages, 
    e.getApp = getApp, e.requirePlugin = requirePlugin, e.initPxTransform = taro.initPxTransform.bind(e), 
    e.pxTransform = pxTransform.bind(e), e.canIUseWebp = canIUseWebp, wxCloud(e);
}

var Taro = {
    Component: BaseComponent,
    PureComponent: PureComponent,
    createApp: createApp,
    initNativeApi: initNativeApi,
    Events: taro.Events,
    eventCenter: taro.eventCenter,
    getEnv: taro.getEnv,
    createRef: taro.createRef,
    render: taro.render,
    ENV_TYPE: taro.ENV_TYPE,
    internal_safe_get: taro.internal_safe_get,
    internal_safe_set: taro.internal_safe_set,
    internal_inline_style: taro.internal_inline_style,
    createComponent: createComponent,
    internal_get_original: taro.internal_get_original,
    handleLoopRef: taro.handleLoopRef(getElementById),
    propsManager: propsManager,
    interceptors: taro.interceptors,
    RefsArray: taro.RefsArray,
    genCompid: genCompid,
    useEffect: taro.useEffect,
    useLayoutEffect: taro.useLayoutEffect,
    useReducer: taro.useReducer,
    useState: taro.useState,
    useDidShow: taro.useDidShow,
    useDidHide: taro.useDidHide,
    usePullDownRefresh: taro.usePullDownRefresh,
    useReachBottom: taro.useReachBottom,
    usePageScroll: taro.usePageScroll,
    useResize: taro.useResize,
    useShareAppMessage: taro.useShareAppMessage,
    useTabItemTap: taro.useTabItemTap,
    useRouter: taro.useRouter,
    useScope: taro.useScope,
    useRef: taro.useRef,
    useCallback: taro.useCallback,
    useMemo: taro.useMemo,
    useImperativeHandle: taro.useImperativeHandle,
    useContext: taro.useContext,
    createContext: taro.createContext,
    memo: taro.memo,
    shallowEqual: shallowEqual
};

initNativeApi(Taro), exports.Taro = Taro, exports.default = Taro;