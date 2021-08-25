function _interopDefault(t) {
    return t && "object" == typeof t && "default" in t ? t.default : t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var Taro = require("F296F1D7C9B4369C94F099D01BC328F4.js"), Taro__default = _interopDefault(Taro), store = null, appGlobal = global || {}, globalRef = Object.getPrototypeOf(appGlobal) || appGlobal;

function getStore() {
    return store;
}

function setStore(t) {
    store = t;
}

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(t, n.key, n);
    }
}

function _createClass(t, e, r) {
    return e && _defineProperties(t.prototype, e), r && _defineProperties(t, r), t;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && _setPrototypeOf(t, e);
}

function _getPrototypeOf(t) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

function _setPrototypeOf(t, e) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}

function _possibleConstructorReturn(t, e) {
    return !e || "object" != typeof e && "function" != typeof e ? _assertThisInitialized(t) : e;
}

function _superPropBase(t, e) {
    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)); ) ;
    return t;
}

function _get(t, e, r) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, r) {
        var n = _superPropBase(t, e);
        if (n) {
            var o = Object.getOwnPropertyDescriptor(n, e);
            return o.get ? o.get.call(r) : o.value;
        }
    })(t, e, r || t);
}

function _slicedToArray(t, e) {
    return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _nonIterableRest();
}

function _arrayWithHoles(t) {
    if (Array.isArray(t)) return t;
}

function _iterableToArrayLimit(t, e) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
        var r = [], n = !0, o = !1, i = void 0;
        try {
            for (var s, u = t[Symbol.iterator](); !(n = (s = u.next()).done) && (r.push(s.value), 
            !e || r.length !== e); n = !0) ;
        } catch (t) {
            o = !0, i = t;
        } finally {
            try {
                n || null == u.return || u.return();
            } finally {
                if (o) throw i;
            }
        }
        return r;
    }
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function isObject(t) {
    return null != t && "object" === _typeof(t) && !Array.isArray(t);
}

function mergeObjects(t, e) {
    var r = Object.assign({}, t);
    if (isObject(t) && isObject(e)) for (var n in e) isObject(t[n]) && isObject(e[n]) ? r[n] = mergeObjects(t[n], e[n]) : r[n] = e[n];
    return r;
}

function wrapPropsWithDispatch(n, o) {
    return "function" == typeof n ? n(o) : isObject(n) ? Object.keys(n).reduce(function(t, e) {
        var r = n[e];
        return "function" == typeof r && (t[e] = function() {
            return o(r.apply(void 0, arguments));
        }), t;
    }, {}) : {};
}

function connect(i, t) {
    var s = getStore(), e = s.dispatch, u = wrapPropsWithDispatch(t, e);
    u.dispatch = e;
    return function(e) {
        var t = i(s.getState(), e.defaultProps || {});
        e.properties && t && Object.keys(t).forEach(function(t) {
            delete e.properties[t];
        });
        var r = null;
        return function(t) {
            function n(t, e) {
                var r;
                return _classCallCheck(this, n), r = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, Object.assign.apply(Object, Array.prototype.slice.call(arguments).concat([ mergeObjects(i(s.getState(), t), u) ])), e)), 
                Object.keys(u).forEach(function(t) {
                    r["__event_".concat(t)] = u[t];
                }), r;
            }
            return _inherits(n, e), _createClass(n, [ {
                key: "_constructor",
                value: function() {
                    if (this.$scope) {
                        var t = getStore();
                        Object.assign(this.props, mergeObjects(i(t.getState(), this.props), u)), r = t.subscribe(function() {
                            var r = this, n = !1, o = i(s.getState(), this.props), t = Object.assign({}, this.props);
                            Object.keys(o).forEach(function(t) {
                                var e = o[t];
                                isObject(e) && isObject(u[t]) && (e = mergeObjects(e, u[t])), r.props[t] !== e && (r.props[t] = e, 
                                n = !0);
                            }), n && (this.prevProps = t, this._unsafeCallUpdate = !0, this.setState({}, function() {
                                delete r._unsafeCallUpdate;
                            }));
                        }.bind(this)), _get(_getPrototypeOf(n.prototype), "_constructor", this) && _get(_getPrototypeOf(n.prototype), "_constructor", this).call(this, this.props);
                    } else _get(_getPrototypeOf(n.prototype), "_constructor", this) && _get(_getPrototypeOf(n.prototype), "_constructor", this).call(this, this.props);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    _get(_getPrototypeOf(n.prototype), "componentWillUnmount", this) && _get(_getPrototypeOf(n.prototype), "componentWillUnmount", this).call(this), 
                    r && r(), r = null;
                }
            } ]), n;
        }();
    };
}

var Provider = function t() {
    _classCallCheck(this, t);
}, ReduxContext = Taro__default.createContext(null);

function useReduxContext() {
    return Taro.useContext(ReduxContext);
}

function useStore() {
    return useReduxContext().store;
}

function useDispatch() {
    return useStore().dispatch;
}

function defaultNoopBatch(t) {
    t();
}

var batch = defaultNoopBatch, getBatch = function() {
    return batch;
}, CLEARED = null, nullListeners = {
    notify: function() {}
};

function createListenerCollection() {
    var t = getBatch(), r = [], n = [];
    return {
        clear: function() {
            r = n = CLEARED;
        },
        notify: function() {
            var e = r = n;
            t(function() {
                for (var t = 0; t < e.length; t++) e[t]();
            });
        },
        get: function() {
            return n;
        },
        subscribe: function(t) {
            var e = !0;
            return n === r && (n = r.slice()), n.push(t), function() {
                e && r !== CLEARED && (e = !1, n === r && (n = r.slice()), n.splice(n.indexOf(t), 1));
            };
        }
    };
}

var Subscription = function() {
    function r(t, e) {
        _classCallCheck(this, r), this.store = t, this.parentSub = e, this.unsubscribe = null, 
        this.listeners = nullListeners, this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
    }
    return _createClass(r, [ {
        key: "addNestedSub",
        value: function(t) {
            return this.trySubscribe(), this.listeners.subscribe(t);
        }
    }, {
        key: "notifyNestedSubs",
        value: function() {
            this.listeners.notify();
        }
    }, {
        key: "handleChangeWrapper",
        value: function() {
            this.onStateChange && this.onStateChange();
        }
    }, {
        key: "isSubscribed",
        value: function() {
            return Boolean(this.unsubscribe);
        }
    }, {
        key: "trySubscribe",
        value: function() {
            this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), 
            this.listeners = createListenerCollection());
        }
    }, {
        key: "tryUnsubscribe",
        value: function() {
            this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), 
            this.listeners = nullListeners);
        }
    } ]), r;
}();

function invariant(t, e, r, n, o, i, s, u) {
    if (!t) {
        var c;
        if (void 0 === e) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
            var a = [ r, n, o, i, s, u ], l = 0;
            (c = new Error(e.replace(/%s/g, function() {
                return a[l++];
            }))).name = "Invariant Violation";
        }
        throw c.framesToPop = 1, c;
    }
}

var refEquality = function(t, e) {
    return t === e;
};

function useSelector(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : refEquality;
    invariant(t, "You must pass a selector to useSelectors");
    var r, n = useReduxContext(), o = n.store, i = n.subscription, s = _slicedToArray(Taro.useReducer(function(t) {
        return t + 1;
    }, 0), 2)[1], u = Taro.useMemo(function() {
        return new Subscription(o, i);
    }, [ o, i ]), c = Taro.useRef(), a = Taro.useRef(), l = Taro.useRef();
    try {
        r = t !== a.current || c.current ? t(o.getState()) : l.current;
    } catch (t) {
        var f = "An error occured while selecting the store state: ".concat(t.message, ".");
        throw c.current && (f += "\nThe error may be correlated with this previous error:\n".concat(c.current.stack, "\n\nOriginal stack trace:")), 
        new Error(f);
    }
    return Taro.useEffect(function() {
        a.current = t, l.current = r, c.current = void 0;
    }), Taro.useEffect(function() {
        function t() {
            try {
                var t = a.current(o.getState());
                if (e(t, l.current)) return;
                l.current = t;
            } catch (t) {
                c.current = t;
            }
            s({});
        }
        return u.onStateChange = t, u.trySubscribe(), t(), function() {
            return u.tryUnsubscribe();
        };
    }, [ o, u ]), r;
}

var index = {
    connect: connect,
    Provider: Provider,
    getStore: getStore,
    setStore: setStore,
    useDispatch: useDispatch,
    useSelector: useSelector,
    useStore: useStore,
    ReduxContext: ReduxContext
};

exports.default = index, exports.connect = connect, exports.Provider = Provider, 
exports.getStore = getStore, exports.setStore = setStore, exports.useDispatch = useDispatch, 
exports.useSelector = useSelector, exports.useStore = useStore, exports.ReduxContext = ReduxContext;