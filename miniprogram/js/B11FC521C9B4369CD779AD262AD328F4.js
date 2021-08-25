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

function isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
        !0;
    } catch (e) {
        return !1;
    }
}

function _construct(e, t, n) {
    return (_construct = isNativeReflectConstruct() ? Reflect.construct : function(e, t, n) {
        var r = [ null ];
        r.push.apply(r, t);
        var o = new (Function.bind.apply(e, r))();
        return n && _setPrototypeOf(o, n.prototype), o;
    }).apply(null, arguments);
}

function _isNativeFunction(e) {
    return -1 !== Function.toString.call(e).indexOf("[native code]");
}

function _wrapNativeSuper(e) {
    var n = "function" == typeof Map ? new Map() : void 0;
    return (_wrapNativeSuper = function(e) {
        if (null === e || !_isNativeFunction(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== n) {
            if (n.has(e)) return n.get(e);
            n.set(e, t);
        }
        function t() {
            return _construct(e, arguments, _getPrototypeOf(this).constructor);
        }
        return t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), _setPrototypeOf(t, e);
    })(e);
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), "function" != typeof Object.assign && (Object.assign = function(e) {
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
    for (var t = Object(e), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (null != r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
}), "function" != typeof Object.defineProperties && (Object.defineProperties = function(e, t) {
    function n(e) {
        function t(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }
        function n(e) {
            return "function" == typeof e;
        }
        if ("object" !== _typeof(e) || null === e) throw new TypeError("bad desc");
        var r = {};
        if (t(e, "enumerable") && (r.enumerable = !!e.enumerable), t(e, "configurable") && (r.configurable = !!e.configurable), 
        t(e, "value") && (r.value = e.value), t(e, "writable") && (r.writable = !!e.writable), 
        t(e, "get")) {
            var o = e.get;
            if (!n(o) && void 0 !== o) throw new TypeError("bad get");
            r.get = o;
        }
        if (t(e, "set")) {
            var a = e.set;
            if (!n(a) && void 0 !== a) throw new TypeError("bad set");
            r.set = a;
        }
        if (("get" in r || "set" in r) && ("value" in r || "writable" in r)) throw new TypeError("identity-confused descriptor");
        return r;
    }
    if ("object" !== _typeof(e) || null === e) throw new TypeError("bad obj");
    t = Object(t);
    for (var r = Object.keys(t), o = [], a = 0; a < r.length; a++) o.push([ r[a], n(t[r[a]]) ]);
    for (a = 0; a < o.length; a++) Object.defineProperty(e, o[a][0], o[a][1]);
    return e;
});

var Component = function e(t) {
    _classCallCheck(this, e), this.state = {}, this.props = t || {};
}, FUNC_ERROR_TEXT = "Expected a function", HASH_UNDEFINED = "__lodash_hash_undefined__", INFINITY = 1 / 0, funcTag = "[object Function]", genTag = "[object GeneratorFunction]", symbolTag = "[object Symbol]", reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reEscapeChar = /\\(\\)?/g, reIsHostCtor = /^\[object .+?Constructor\]$/, freeGlobal = "object" === ("undefined" == typeof global ? "undefined" : _typeof(global)) && global && global.Object === Object && global, freeSelf = "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), MAX_SAFE_INTEGER = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;

function getValue(e, t) {
    return null == e ? void 0 : e[t];
}

function isHostObject(e) {
    var t = !1;
    if (null != e && "function" != typeof e.toString) try {
        t = !!(e + "");
    } catch (e) {}
    return t;
}

var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = root["__core-js_shared__"], maskSrcKey = function() {
    var e = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
}(), funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), _Symbol = root.Symbol, splice = arrayProto.splice, Map$1 = getNative(root, "Map"), nativeCreate = getNative(Object, "create"), symbolProto = _Symbol ? _Symbol.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;

function Hash(e) {
    var t = -1, n = e ? e.length : 0;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}

function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

function hashDelete(e) {
    return this.has(e) && delete this.__data__[e];
}

function hashGet(e) {
    var t = this.__data__;
    if (nativeCreate) {
        var n = t[e];
        return n === HASH_UNDEFINED ? void 0 : n;
    }
    return hasOwnProperty.call(t, e) ? t[e] : void 0;
}

function hashHas(e) {
    var t = this.__data__;
    return nativeCreate ? void 0 !== t[e] : hasOwnProperty.call(t, e);
}

function hashSet(e, t) {
    return this.__data__[e] = nativeCreate && void 0 === t ? HASH_UNDEFINED : t, this;
}

function ListCache(e) {
    var t = -1, n = e ? e.length : 0;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}

function listCacheClear() {
    this.__data__ = [];
}

function listCacheDelete(e) {
    var t = this.__data__, n = assocIndexOf(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : splice.call(t, n, 1), !0);
}

function listCacheGet(e) {
    var t = this.__data__, n = assocIndexOf(t, e);
    return n < 0 ? void 0 : t[n][1];
}

function listCacheHas(e) {
    return -1 < assocIndexOf(this.__data__, e);
}

function listCacheSet(e, t) {
    var n = this.__data__, r = assocIndexOf(n, e);
    return r < 0 ? n.push([ e, t ]) : n[r][1] = t, this;
}

function MapCache(e) {
    var t = -1, n = e ? e.length : 0;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}

function mapCacheClear() {
    this.__data__ = {
        hash: new Hash(),
        map: new (Map$1 || ListCache)(),
        string: new Hash()
    };
}

function mapCacheDelete(e) {
    return getMapData(this, e).delete(e);
}

function mapCacheGet(e) {
    return getMapData(this, e).get(e);
}

function mapCacheHas(e) {
    return getMapData(this, e).has(e);
}

function mapCacheSet(e, t) {
    return getMapData(this, e).set(e, t), this;
}

function assocIndexOf(e, t) {
    for (var n = e.length; n--; ) if (eq(e[n][0], t)) return n;
    return -1;
}

function baseGet(e, t) {
    for (var n = 0, r = (t = isKey(t, e) ? [ t ] : castPath(t)).length; null != e && n < r; ) e = e[toKey(t[n++])];
    return n && n == r ? e : void 0;
}

function baseIsNative(e) {
    return !(!isObject(e) || isMasked(e)) && (isFunction(e) || isHostObject(e) ? reIsNative : reIsHostCtor).test(toSource(e));
}

function baseToString(e) {
    if ("string" == typeof e) return e;
    if (isSymbol(e)) return symbolToString ? symbolToString.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
}

function castPath(e) {
    return isArray(e) ? e : stringToPath(e);
}

function getMapData(e, t) {
    var n = e.__data__;
    return isKeyable(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
}

function getNative(e, t) {
    var n = getValue(e, t);
    return baseIsNative(n) ? n : void 0;
}

function isKey(e, t) {
    if (isArray(e)) return !1;
    var n = _typeof(e);
    return !("number" != n && "symbol" != n && "boolean" != n && null != e && !isSymbol(e)) || (reIsPlainProp.test(e) || !reIsDeepProp.test(e) || null != t && e in Object(t));
}

function isKeyable(e) {
    var t = _typeof(e);
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
}

function isMasked(e) {
    return !!maskSrcKey && maskSrcKey in e;
}

Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, 
Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, 
ListCache.prototype.delete = listCacheDelete, ListCache.prototype.get = listCacheGet, 
ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, 
MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, 
MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet;

var stringToPath = memoize(function(e) {
    e = toString(e);
    var o = [];
    return reLeadingDot.test(e) && o.push(""), e.replace(rePropName, function(e, t, n, r) {
        o.push(n ? r.replace(reEscapeChar, "$1") : t || e);
    }), o;
});

function toKey(e) {
    if ("string" == typeof e || isSymbol(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
}

function toSource(e) {
    if (null != e) {
        try {
            return funcToString.call(e);
        } catch (e) {}
        try {
            return e + "";
        } catch (e) {}
    }
    return "";
}

function memoize(a, i) {
    if ("function" != typeof a || i && "function" != typeof i) throw new TypeError(FUNC_ERROR_TEXT);
    var e = function e() {
        var t = arguments, n = i ? i.apply(this, t) : t[0], r = e.cache;
        if (r.has(n)) return r.get(n);
        var o = a.apply(this, t);
        return e.cache = r.set(n, o), o;
    };
    return e.cache = new (memoize.Cache || MapCache)(), e;
}

function eq(e, t) {
    return e === t || e != e && t != t;
}

memoize.Cache = MapCache;

var isArray = Array.isArray;

function isFunction(e) {
    var t = isObject(e) ? objectToString.call(e) : "";
    return t == funcTag || t == genTag;
}

function isObject(e) {
    var t = _typeof(e);
    return !!e && ("object" == t || "function" == t);
}

function isObjectLike(e) {
    return !!e && "object" === _typeof(e);
}

function isSymbol(e) {
    return "symbol" === _typeof(e) || isObjectLike(e) && objectToString.call(e) == symbolTag;
}

function toString(e) {
    return null == e ? "" : baseToString(e);
}

function isIndex(e, t) {
    var n = _typeof(e);
    return !!(t = null == t ? MAX_SAFE_INTEGER : t) && ("number" == n || "symbol" != n && reIsUint.test(e)) && -1 < e && e % 1 == 0 && e < t;
}

function baseAssignValue(e, t, n) {
    "__proto__" == t ? Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n;
}

hasOwnProperty = Object.prototype.hasOwnProperty;

function assignValue(e, t, n) {
    var r = e[t];
    hasOwnProperty.call(e, t) && eq(r, n) && (void 0 !== n || t in e) || baseAssignValue(e, t, n);
}

function baseSet(e, t, n, r) {
    if (!isObject(e)) return e;
    for (var o = (t = castPath(t, e)).length, a = o - 1, i = -1, s = e; null != s && ++i < o; ) {
        var c = toKey(t[i]), u = n;
        if (i != a) {
            var f = s[c];
            void 0 === (u = r ? r(f, c, s) : void 0) && (u = isObject(f) ? f : isIndex(t[i + 1]) ? [] : {});
        }
        assignValue(s, c, u), s = s[c];
    }
    return e;
}

function get(e, t, n) {
    var r = null == e ? void 0 : baseGet(e, t);
    return void 0 === r ? n : r;
}

function set$1(e, t, n) {
    return null == e ? e : baseSet(e, t, n);
}

var upperCasePattern = /([A-Z])/g;

function dashify(e) {
    return e.replace(upperCasePattern, dashLower);
}

function dashLower(e) {
    return "-" + e.toLowerCase();
}

function isObject$1(e) {
    return null != e && "object" === _typeof(e) && !1 === Array.isArray(e);
}

function inlineStyle(t) {
    if (null == t) return "";
    if ("string" == typeof t) return t;
    if (null == t) return "";
    if (!isObject$1(t)) throw new TypeError("style 只能是一个对象或字符串。");
    return Object.keys(t).map(function(e) {
        return dashify(e).concat(":").concat(t[e]);
    }).join(";");
}

var ENV_TYPE = {
    WEAPP: "WEAPP",
    WEB: "WEB",
    RN: "RN",
    SWAN: "SWAN",
    ALIPAY: "ALIPAY",
    QUICKAPP: "QUICKAPP",
    TT: "TT",
    QQ: "QQ",
    JD: "JD"
}, _env = null;

function getEnv() {
    return _env || ("undefined" != typeof jd && jd.getSystemInfo ? (_env = ENV_TYPE.JD, 
    ENV_TYPE.JD) : "undefined" != typeof qq && qq.getSystemInfo ? (_env = ENV_TYPE.QQ, 
    ENV_TYPE.QQ) : "undefined" != typeof tt && tt.getSystemInfo ? (_env = ENV_TYPE.TT, 
    ENV_TYPE.TT) : "undefined" != typeof wx && wx.getSystemInfo ? (_env = ENV_TYPE.WEAPP, 
    ENV_TYPE.WEAPP) : "undefined" != typeof qa && qa.getSystemInfo ? (_env = ENV_TYPE.QUICKAPP, 
    ENV_TYPE.QUICKAPP) : "undefined" != typeof swan && swan.getSystemInfo ? (_env = ENV_TYPE.SWAN, 
    ENV_TYPE.SWAN) : "undefined" != typeof my && my.getSystemInfo ? (_env = ENV_TYPE.ALIPAY, 
    ENV_TYPE.ALIPAY) : "undefined" != typeof global && global.__fbGenNativeModule ? (_env = ENV_TYPE.RN, 
    ENV_TYPE.RN) : "undefined" != typeof window ? (_env = ENV_TYPE.WEB, ENV_TYPE.WEB) : "Unknown environment");
}

function isObject$2(e) {
    return e === Object(e) && "function" != typeof e;
}

var env = null;

function getOriginal(e) {
    return null === env && (env = getEnv()), isObject$2(e) && e[env === ENV_TYPE.SWAN ? "privateOriginal" : "$original"] || e;
}

var Events = function() {
    function u(e) {
        _classCallCheck(this, u), void 0 !== e && e.callbacks ? this.callbacks = e.callbacks : this.callbacks = {};
    }
    return _createClass(u, [ {
        key: "on",
        value: function(e, t, n) {
            var r, o, a, i, s;
            if (!t) return this;
            for (e = e.split(u.eventSplitter), r = this.callbacks; o = e.shift(); ) (a = (s = r[o]) ? s.tail : {}).next = i = {}, 
            a.context = n, a.callback = t, r[o] = {
                tail: i,
                next: s ? s.next : a
            };
            return this;
        }
    }, {
        key: "once",
        value: function(o, a, i) {
            var s = this;
            return this.on(o, function e() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                a.apply(s, n), s.off(o, e, i);
            }, i), this;
        }
    }, {
        key: "off",
        value: function(e, t, n) {
            var r, o, a, i, s, c;
            if (!(o = this.callbacks)) return this;
            if (!(e || t || n)) return delete this.callbacks, this;
            for (e = e ? e.split(u.eventSplitter) : Object.keys(o); r = e.shift(); ) if (a = o[r], 
            delete o[r], a && (t || n)) for (i = a.tail; (a = a.next) !== i; ) s = a.callback, 
            c = a.context, (t && s !== t || n && c !== n) && this.on(r, s, c);
            return this;
        }
    }, {
        key: "trigger",
        value: function(e) {
            var t, n, r, o, a;
            if (!(r = this.callbacks)) return this;
            for (e = e.split(u.eventSplitter), a = [].slice.call(arguments, 1); t = e.shift(); ) if (n = r[t]) for (o = n.tail; (n = n.next) !== o; ) n.callback.apply(n.context || this, a);
            return this;
        }
    } ]), u;
}();

function render() {}

function createRef() {
    return {
        current: null
    };
}

function commitAttachRef(e, t, n, r) {
    4 < arguments.length && void 0 !== arguments[4] && arguments[4] && !t || ("refName" in e && e.refName ? r[e.refName] = t : "fn" in e && "function" == typeof e.fn ? e.fn.call(n, t) : e.fn && "object" === _typeof(e.fn) && "current" in e.fn && (e.fn.current = t));
}

function detachAllRef(t) {
    t.$$refs && 0 < t.$$refs.length && (t.$$refs.forEach(function(e) {
        "function" == typeof e.fn ? e.fn.call(t, null) : e.fn && "object" === _typeof(e.fn) && "current" in e.fn && (e.fn.current = null), 
        "target" in e && delete e.target;
    }), t.refs = {});
}

Events.eventSplitter = /\s+/;

var RefsArray = function(e) {
    function r() {
        var e, t, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
        return _classCallCheck(this, r), (t = _possibleConstructorReturn(this, (e = _getPrototypeOf(r)).call.apply(e, [ this ].concat(_toConsumableArray(n))))).inited = !1, 
        t;
    }
    return _inherits(r, _wrapNativeSuper(Array)), _createClass(r, [ {
        key: "pushRefs",
        value: function(e) {
            var t = this;
            this.inited || (e.forEach(function(e) {
                return t.pushRef(e);
            }), this.inited = !0);
        }
    }, {
        key: "pushRef",
        value: function(t) {
            !this.find(function(e) {
                return e.id === t.id;
            }) && this.push(t);
        }
    } ]), r;
}();

function handleLoopRef(i) {
    return function(e, t, n, r) {
        if (!e) return null;
        var o = i(e, t, n), a = _typeof(r);
        if ("function" !== a && "object" !== a) return console.warn("循环 Ref 只支持函数或 createRef()，当前类型为：".concat(a));
        "object" === a ? r.current = o : "function" === a && r.call(e.$component, o);
    };
}

var Chain = function() {
    function r(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
        _classCallCheck(this, r), this.index = n, this.requestParams = e, this.interceptors = t;
    }
    return _createClass(r, [ {
        key: "proceed",
        value: function(e) {
            if (this.requestParams = e, this.index >= this.interceptors.length) throw new Error("chain 参数错误, 请勿直接修改 request.chain");
            var t = this._getNextInterceptor()(this._getNextChain()), n = t.catch(function(e) {
                return Promise.reject(e);
            });
            return "function" == typeof t.abort && (n.abort = t.abort), n;
        }
    }, {
        key: "_getNextInterceptor",
        value: function() {
            return this.interceptors[this.index];
        }
    }, {
        key: "_getNextChain",
        value: function() {
            return new r(this.requestParams, this.interceptors, this.index + 1);
        }
    } ]), r;
}(), Link = function() {
    function t(e) {
        _classCallCheck(this, t), this.taroInterceptor = e, this.chain = new Chain();
    }
    return _createClass(t, [ {
        key: "request",
        value: function(e) {
            var t = this;
            return this.chain.interceptors = this.chain.interceptors.filter(function(e) {
                return e !== t.taroInterceptor;
            }), this.chain.interceptors.push(this.taroInterceptor), this.chain.proceed(_objectSpread({}, e));
        }
    }, {
        key: "addInterceptor",
        value: function(e) {
            this.chain.interceptors.push(e);
        }
    }, {
        key: "cleanInterceptors",
        value: function() {
            this.chain = new Chain();
        }
    } ]), t;
}();

function timeoutInterceptor(e) {
    var o, a = e.requestParams, t = new Promise(function(t, n) {
        var r = setTimeout(function() {
            r = null, n(new Error("网络链接超时,请稍后再试！"));
        }, a && a.timeout || 6e4);
        (o = e.proceed(a)).then(function(e) {
            r && (clearTimeout(r), t(e));
        }).catch(function(e) {
            r && clearTimeout(r), n(e);
        });
    });
    return "function" == typeof o.abort && (t.abort = o.abort), t;
}

function logInterceptor(e) {
    var t = e.requestParams, n = t.method, r = t.data, o = t.url;
    console.log("http ".concat(n || "GET", " --\x3e ").concat(o, " data: "), r);
    var a = e.proceed(t), i = a.then(function(e) {
        return console.log("http <-- ".concat(o, " result:"), e), e;
    });
    return "function" == typeof a.abort && (i.abort = a.abort), i;
}

var interceptors = Object.freeze({
    timeoutInterceptor: timeoutInterceptor,
    logInterceptor: logInterceptor
}), onAndSyncApis = {
    onSocketOpen: !0,
    onSocketError: !0,
    onSocketMessage: !0,
    onSocketClose: !0,
    onBackgroundAudioPlay: !0,
    onBackgroundAudioPause: !0,
    onBackgroundAudioStop: !0,
    onNetworkStatusChange: !0,
    onAccelerometerChange: !0,
    onCompassChange: !0,
    onBluetoothAdapterStateChange: !0,
    onBluetoothDeviceFound: !0,
    onBLEConnectionStateChange: !0,
    onBLECharacteristicValueChange: !0,
    onBeaconUpdate: !0,
    onBeaconServiceChange: !0,
    onUserCaptureScreen: !0,
    onHCEMessage: !0,
    onGetWifiList: !0,
    onWifiConnected: !0,
    offWifiConnected: !0,
    offGetWifiList: !0,
    onDeviceMotionChange: !0,
    setStorageSync: !0,
    getStorageSync: !0,
    getStorageInfoSync: !0,
    removeStorageSync: !0,
    clearStorageSync: !0,
    getSystemInfoSync: !0,
    getExtConfigSync: !0,
    getLogManager: !0,
    onMemoryWarning: !0,
    reportMonitor: !0,
    reportAnalytics: !0,
    navigateToSmartGameProgram: !0,
    getFileSystemManager: !0,
    getLaunchOptionsSync: !0,
    onPageNotFound: !0,
    onError: !0,
    onAppShow: !0,
    onAppHide: !0,
    offPageNotFound: !0,
    offError: !0,
    offAppShow: !0,
    offAppHide: !0,
    onAudioInterruptionEnd: !0,
    onAudioInterruptionBegin: !0,
    onLocationChange: !0,
    offLocationChange: !0
}, noPromiseApis = {
    stopRecord: !0,
    getRecorderManager: !0,
    pauseVoice: !0,
    stopVoice: !0,
    pauseBackgroundAudio: !0,
    stopBackgroundAudio: !0,
    getBackgroundAudioManager: !0,
    createAudioContext: !0,
    createInnerAudioContext: !0,
    createVideoContext: !0,
    createCameraContext: !0,
    createLivePlayerContext: !0,
    createLivePusherContext: !0,
    createMapContext: !0,
    canIUse: !0,
    startAccelerometer: !0,
    stopAccelerometer: !0,
    startCompass: !0,
    stopCompass: !0,
    hideToast: !0,
    hideLoading: !0,
    showNavigationBarLoading: !0,
    hideNavigationBarLoading: !0,
    createAnimation: !0,
    createSelectorQuery: !0,
    createOffscreenCanvas: !0,
    createCanvasContext: !0,
    drawCanvas: !0,
    hideKeyboard: !0,
    stopPullDownRefresh: !0,
    createIntersectionObserver: !0,
    nextTick: !0,
    getMenuButtonBoundingClientRect: !0,
    onWindowResize: !0,
    offWindowResize: !0,
    arrayBufferToBase64: !0,
    base64ToArrayBuffer: !0,
    getAccountInfoSync: !0,
    getUpdateManager: !0,
    createWorker: !0,
    createRewardedVideoAd: !0,
    createInterstitialAd: !0,
    getRealtimeLogManager: !0
}, otherApis = {
    uploadFile: !0,
    downloadFile: !0,
    connectSocket: !0,
    sendSocketMessage: !0,
    closeSocket: !0,
    chooseImage: !0,
    chooseMessageFile: !0,
    previewImage: !0,
    getImageInfo: !0,
    compressImage: !0,
    saveImageToPhotosAlbum: !0,
    startRecord: !0,
    playVoice: !0,
    setInnerAudioOption: !0,
    getAvailableAudioSources: !0,
    getBackgroundAudioPlayerState: !0,
    playBackgroundAudio: !0,
    seekBackgroundAudio: !0,
    chooseVideo: !0,
    saveVideoToPhotosAlbum: !0,
    loadFontFace: !0,
    saveFile: !0,
    getFileInfo: !0,
    getSavedFileList: !0,
    getSavedFileInfo: !0,
    removeSavedFile: !0,
    openDocument: !0,
    setStorage: !0,
    getStorage: !0,
    getStorageInfo: !0,
    removeStorage: !0,
    clearStorage: !0,
    navigateBack: !0,
    navigateTo: !0,
    redirectTo: !0,
    switchTab: !0,
    reLaunch: !0,
    startLocationUpdate: !0,
    startLocationUpdateBackground: !0,
    stopLocationUpdate: !0,
    getLocation: !0,
    chooseLocation: !0,
    openLocation: !0,
    getSystemInfo: !0,
    getNetworkType: !0,
    makePhoneCall: !0,
    scanCode: !0,
    setClipboardData: !0,
    getClipboardData: !0,
    openBluetoothAdapter: !0,
    closeBluetoothAdapter: !0,
    getBluetoothAdapterState: !0,
    startBluetoothDevicesDiscovery: !0,
    stopBluetoothDevicesDiscovery: !0,
    getBluetoothDevices: !0,
    getConnectedBluetoothDevices: !0,
    createBLEConnection: !0,
    closeBLEConnection: !0,
    getBLEDeviceServices: !0,
    getBLEDeviceCharacteristics: !0,
    readBLECharacteristicValue: !0,
    writeBLECharacteristicValue: !0,
    notifyBLECharacteristicValueChange: !0,
    startBeaconDiscovery: !0,
    stopBeaconDiscovery: !0,
    getBeacons: !0,
    setScreenBrightness: !0,
    getScreenBrightness: !0,
    setKeepScreenOn: !0,
    vibrateLong: !0,
    vibrateShort: !0,
    addPhoneContact: !0,
    getHCEState: !0,
    startHCE: !0,
    stopHCE: !0,
    sendHCEMessage: !0,
    startWifi: !0,
    stopWifi: !0,
    connectWifi: !0,
    getWifiList: !0,
    setWifiList: !0,
    getConnectedWifi: !0,
    startDeviceMotionListening: !0,
    stopDeviceMotionListening: !0,
    pageScrollTo: !0,
    showToast: !0,
    showLoading: !0,
    showModal: !0,
    showActionSheet: !0,
    setNavigationBarTitle: !0,
    setNavigationBarColor: !0,
    setTabBarBadge: !0,
    removeTabBarBadge: !0,
    showTabBarRedDot: !0,
    hideTabBarRedDot: !0,
    setTabBarStyle: !0,
    setTabBarItem: !0,
    showTabBar: !0,
    hideTabBar: !0,
    setTopBarText: !0,
    startPullDownRefresh: !0,
    canvasToTempFilePath: !0,
    canvasGetImageData: !0,
    canvasPutImageData: !0,
    setBackgroundColor: !0,
    setBackgroundTextStyle: !0,
    getSelectedTextRange: !0,
    hideHomeButton: !0,
    getExtConfig: !0,
    login: !0,
    checkSession: !0,
    authorize: !0,
    getUserInfo: !0,
    checkIsSupportFacialRecognition: !0,
    startFacialRecognitionVerify: !0,
    startFacialRecognitionVerifyAndUploadVideo: !0,
    faceVerifyForPay: !0,
    requestPayment: !0,
    showShareMenu: !0,
    hideShareMenu: !0,
    updateShareMenu: !0,
    getShareInfo: !0,
    chooseAddress: !0,
    addCard: !0,
    openCard: !0,
    openSetting: !0,
    getSetting: !0,
    getWeRunData: !0,
    navigateToMiniProgram: !0,
    navigateBackMiniProgram: !0,
    chooseInvoice: !0,
    chooseInvoiceTitle: !0,
    checkIsSupportSoterAuthentication: !0,
    startSoterAuthentication: !0,
    checkIsSoterEnrolledInDevice: !0,
    requestSubscribeMessage: !0,
    setEnableDebug: !0,
    getOpenUserInfo: !0,
    ocrIdCard: !0,
    ocrBankCard: !0,
    ocrDrivingLicense: !0,
    ocrVehicleLicense: !0,
    textReview: !0,
    textToAudio: !0,
    imageAudit: !0,
    advancedGeneralIdentify: !0,
    objectDetectIdentify: !0,
    carClassify: !0,
    dishClassify: !0,
    logoClassify: !0,
    animalClassify: !0,
    plantClassify: !0,
    setPageInfo: !0,
    getSwanId: !0,
    requestPolymerPayment: !0,
    navigateToSmartProgram: !0,
    navigateBackSmartProgram: !0,
    preloadSubPackage: !0
};

function initPxTransform(e) {
    var t = e.designWidth, n = void 0 === t ? 700 : t, r = e.deviceRatio, o = void 0 === r ? {
        640: 1.17,
        750: 1,
        828: .905
    } : r;
    this.config = this.config || {}, this.config.designWidth = n, this.config.deviceRatio = o;
}

function objectIs(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}

function isFunction$1(e) {
    return "function" == typeof e;
}

var defer = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

function isUndefined(e) {
    return void 0 === e;
}

function isArray$1(e) {
    return Array.isArray(e);
}

function isNullOrUndef(e) {
    return isUndefined(e) || null === e;
}

var Current = {
    current: null,
    index: 0
};

function forceUpdateCallback() {}

function getHooks(e) {
    if (null === Current.current) throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
    var t = Current.current.hooks;
    return e >= t.length && t.push({}), t[e];
}

function useState(e) {
    isFunction$1(e) && (e = e());
    var n = getHooks(Current.index++);
    return n.state || (n.component = Current.current, n.state = [ e, function(e) {
        var t = isFunction$1(e) ? e(n.state[0]) : e;
        n.state[0] !== t && (n.state[0] = t, n.component._disable = !1, n.component.setState({}, forceUpdateCallback));
    } ]), n.state;
}

function usePageLifecycle(e, t) {
    var n = getHooks(Current.index++);
    if (n.marked) n.callback = e; else {
        n.marked = !0, n.component = Current.current, n.callback = e;
        var r = n.component, o = r[t];
        n.component[t] = function() {
            var e = n.callback;
            return o && o.call.apply(o, [ r ].concat(Array.prototype.slice.call(arguments))), 
            e && e.call.apply(e, [ r ].concat(Array.prototype.slice.call(arguments)));
        };
    }
}

function useDidShow(e) {
    usePageLifecycle(e, "componentDidShow");
}

function useDidHide(e) {
    usePageLifecycle(e, "componentDidHide");
}

function usePullDownRefresh(e) {
    usePageLifecycle(e, "onPullDownRefresh");
}

function useReachBottom(e) {
    usePageLifecycle(e, "onReachBottom");
}

function usePageScroll(e) {
    usePageLifecycle(e, "onPageScroll");
}

function useResize(e) {
    usePageLifecycle(e, "onResize");
}

function useShareAppMessage(e) {
    usePageLifecycle(e, "onShareAppMessage");
}

function useTabItemTap(e) {
    usePageLifecycle(e, "onTabItemTap");
}

function useRouter() {
    var e = getHooks(Current.index++);
    return e.router || (e.component = Current.current, e.router = e.component.$router), 
    e.router;
}

function useScope() {
    var e = getHooks(Current.index++);
    return e.scope || (e.component = Current.current, e.scope = e.component.$scope), 
    e.scope;
}

function useReducer(t, e, n) {
    isFunction$1(e) && (e = e());
    var r = getHooks(Current.index++);
    return r.state || (r.component = Current.current, r.state = [ isUndefined(n) ? e : n(e), function(e) {
        r.state[0] = t(r.state[0], e), r.component._disable = !1, r.component.setState({}, forceUpdateCallback);
    } ]), r.state;
}

function areDepsChanged(n, e) {
    return !(!isNullOrUndef(n) && !isNullOrUndef(e)) || e.some(function(e, t) {
        return !objectIs(e, n[t]);
    });
}

function invokeEffects(e, t) {
    (t ? e.effects : e.layoutEffects).forEach(function(e) {
        isFunction$1(e.cleanup) && e.cleanup();
        var t = e.effect();
        isFunction$1(t) && (e.cleanup = t);
    }), t ? e.effects = [] : e.layoutEffects = [];
}

var scheduleEffectComponents = [];

function invokeScheduleEffects(e) {
    e._afterScheduleEffect || (e._afterScheduleEffect = !0, scheduleEffectComponents.push(e), 
    1 === scheduleEffectComponents.length && defer(function() {
        setTimeout(function() {
            scheduleEffectComponents.forEach(function(e) {
                e._afterScheduleEffect = !1, invokeEffects(e, !0);
            }), scheduleEffectComponents = [];
        }, 0);
    }));
}

function useEffectImpl(e, t, n) {
    var r = getHooks(Current.index++);
    !Current.current._disableEffect && Current.current.__isReady && areDepsChanged(r.deps, t) && (r.effect = e, 
    r.deps = t, n ? (Current.current.effects = Current.current.effects.concat(r), invokeScheduleEffects(Current.current)) : Current.current.layoutEffects = Current.current.layoutEffects.concat(r));
}

function useEffect(e, t) {
    useEffectImpl(e, t, !0);
}

function useLayoutEffect(e, t) {
    useEffectImpl(e, t);
}

function useRef(e) {
    var t = getHooks(Current.index++);
    return t.ref || (t.ref = {
        current: e
    }), t.ref;
}

function useMemo(e, t) {
    var n = getHooks(Current.index++);
    return areDepsChanged(n.deps, t) && (n.deps = t, n.callback = e, n.value = e()), 
    n.value;
}

function useCallback(e, t) {
    return useMemo(function() {
        return e;
    }, t);
}

function useImperativeHandle(e, t, n) {
    useLayoutEffect(function() {
        return isFunction$1(e) ? (e(t()), function() {
            return e(null);
        }) : isUndefined(e) ? void 0 : (e.current = t(), function() {
            delete e.current;
        });
    }, isArray$1(n) ? n.concat([ e ]) : void 0);
}

function useContext(e) {
    var t = e.context, n = t.emitter;
    if (null === n) return t._defaultValue;
    var r = getHooks(Current.index++);
    return isUndefined(r.context) && (r.context = !0, r.component = Current.current, 
    n.on(function(e) {
        r.component && (r.component._disable = !1, r.component.setState({}));
    })), n.value;
}

var Emitter = function() {
    function t() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        _classCallCheck(this, t), this.value = e, this.handlers = [];
    }
    return _createClass(t, [ {
        key: "on",
        value: function(e) {
            this.handlers.push(e);
        }
    }, {
        key: "off",
        value: function(t) {
            this.handlers = this.handlers.filter(function(e) {
                return e !== t;
            });
        }
    }, {
        key: "set",
        value: function(e) {
            var t = this;
            objectIs(e, this.value) || (this.value = e, this.handlers.forEach(function(e) {
                return e(t.value);
            }));
        }
    } ]), t;
}(), contextUid = 0;

function createContext(n) {
    var r = {
        emitter: null,
        _id: "__context_" + contextUid++ + "__",
        _defaultValue: n
    };
    return {
        Provider: function(e) {
            var t = r.emitter;
            t ? t.set(e) : r.emitter = new Emitter(n);
        },
        context: r
    };
}

var objectIs$1 = Object.is || function(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
};

function shallowEqual(e, t) {
    if ("object" !== _typeof(e) && "object" !== _typeof(t)) return e === t;
    if (null === e && null === t) return !0;
    if (null === e || null === t) return !1;
    if (objectIs$1(e, t)) return !0;
    var n = e ? Object.keys(e) : [], r = t ? Object.keys(t) : [];
    if (n.length !== r.length) return !1;
    for (var o = 0; o < n.length; o++) {
        var a = n[o];
        if (!t.hasOwnProperty(a) || !objectIs$1(e[a], t[a])) return !1;
    }
    return !0;
}

function memo(e, t) {
    return e.prototype.shouldComponentUpdate = function(e) {
        return isFunction$1(t) ? !t(this.props, e) : !shallowEqual(this.props, e);
    }, e;
}

exports.eventCenter = new Events();

var index = {
    Component: Component,
    Events: Events,
    eventCenter: exports.eventCenter,
    getEnv: getEnv,
    ENV_TYPE: ENV_TYPE,
    render: render,
    internal_safe_get: get,
    internal_safe_set: set$1,
    internal_inline_style: inlineStyle,
    internal_get_original: getOriginal,
    internal_force_update: forceUpdateCallback,
    noPromiseApis: noPromiseApis,
    onAndSyncApis: onAndSyncApis,
    otherApis: otherApis,
    initPxTransform: initPxTransform,
    createRef: createRef,
    commitAttachRef: commitAttachRef,
    detachAllRef: detachAllRef,
    Link: Link,
    interceptors: interceptors,
    RefsArray: RefsArray,
    handleLoopRef: handleLoopRef,
    Current: Current,
    useEffect: useEffect,
    useLayoutEffect: useLayoutEffect,
    useReducer: useReducer,
    useState: useState,
    useDidShow: useDidShow,
    useDidHide: useDidHide,
    usePullDownRefresh: usePullDownRefresh,
    useReachBottom: useReachBottom,
    usePageScroll: usePageScroll,
    useResize: useResize,
    useShareAppMessage: useShareAppMessage,
    useTabItemTap: useTabItemTap,
    useRouter: useRouter,
    useScope: useScope,
    useRef: useRef,
    useCallback: useCallback,
    useMemo: useMemo,
    useImperativeHandle: useImperativeHandle,
    invokeEffects: invokeEffects,
    useContext: useContext,
    createContext: createContext,
    memo: memo
};

exports.Component = Component, exports.Events = Events, exports.getEnv = getEnv, 
exports.ENV_TYPE = ENV_TYPE, exports.render = render, exports.internal_safe_get = get, 
exports.internal_safe_set = set$1, exports.internal_inline_style = inlineStyle, 
exports.internal_get_original = getOriginal, exports.internal_force_update = forceUpdateCallback, 
exports.noPromiseApis = noPromiseApis, exports.onAndSyncApis = onAndSyncApis, exports.otherApis = otherApis, 
exports.initPxTransform = initPxTransform, exports.createRef = createRef, exports.commitAttachRef = commitAttachRef, 
exports.detachAllRef = detachAllRef, exports.Link = Link, exports.interceptors = interceptors, 
exports.RefsArray = RefsArray, exports.handleLoopRef = handleLoopRef, exports.Current = Current, 
exports.useEffect = useEffect, exports.useLayoutEffect = useLayoutEffect, exports.useReducer = useReducer, 
exports.useState = useState, exports.useDidShow = useDidShow, exports.useDidHide = useDidHide, 
exports.usePullDownRefresh = usePullDownRefresh, exports.useReachBottom = useReachBottom, 
exports.usePageScroll = usePageScroll, exports.useResize = useResize, exports.useShareAppMessage = useShareAppMessage, 
exports.useTabItemTap = useTabItemTap, exports.useRouter = useRouter, exports.useScope = useScope, 
exports.useRef = useRef, exports.useCallback = useCallback, exports.useMemo = useMemo, 
exports.useImperativeHandle = useImperativeHandle, exports.invokeEffects = invokeEffects, 
exports.useContext = useContext, exports.createContext = createContext, exports.memo = memo, 
exports.default = index;