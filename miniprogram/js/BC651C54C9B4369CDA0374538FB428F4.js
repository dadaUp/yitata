var __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault;

!function(e) {
    var o = "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : {};
    function r(r, n) {
        return r !== o && ("function" == typeof Object.create ? Object.defineProperty(r, "__esModule", {
            value: !0
        }) : r.__esModule = !0), function(t, e) {
            return r[t] = n ? n(t, e) : e;
        };
    }
    "function" == typeof define && define.amd ? define("tslib", [ "exports" ], function(t) {
        e(r(o, r(t)));
    }) : "object" == typeof module && "object" == typeof module.exports ? e(r(o, r(module.exports))) : e(r(o));
}(function(t) {
    var n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    };
    __extends = function(t, e) {
        function r() {
            this.constructor = t;
        }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, 
        new r());
    }, __assign = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
    }, __rest = function(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]]);
        }
        return r;
    }, __decorate = function(t, e, r, n) {
        var o, a = arguments.length, _ = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) _ = Reflect.decorate(t, e, r, n); else for (var i = t.length - 1; 0 <= i; i--) (o = t[i]) && (_ = (a < 3 ? o(_) : 3 < a ? o(e, r, _) : o(e, r)) || _);
        return 3 < a && _ && Object.defineProperty(e, r, _), _;
    }, __param = function(r, n) {
        return function(t, e) {
            n(t, e, r);
        };
    }, __metadata = function(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
    }, __awaiter = function(a, _, i, c) {
        return new (i || (i = Promise))(function(t, e) {
            function r(t) {
                try {
                    o(c.next(t));
                } catch (t) {
                    e(t);
                }
            }
            function n(t) {
                try {
                    o(c.throw(t));
                } catch (t) {
                    e(t);
                }
            }
            function o(e) {
                e.done ? t(e.value) : new i(function(t) {
                    t(e.value);
                }).then(r, n);
            }
            o((c = c.apply(a, _ || [])).next());
        });
    }, __generator = function(r, n) {
        var o, a, _, t, i = {
            label: 0,
            sent: function() {
                if (1 & _[0]) throw _[1];
                return _[1];
            },
            trys: [],
            ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
            return this;
        }), t;
        function e(e) {
            return function(t) {
                return function(e) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (;i; ) try {
                        if (o = 1, a && (_ = 2 & e[0] ? a.return : e[0] ? a.throw || ((_ = a.return) && _.call(a), 
                        0) : a.next) && !(_ = _.call(a, e[1])).done) return _;
                        switch (a = 0, _ && (e = [ 2 & e[0], _.value ]), e[0]) {
                          case 0:
                          case 1:
                            _ = e;
                            break;

                          case 4:
                            return i.label++, {
                                value: e[1],
                                done: !1
                            };

                          case 5:
                            i.label++, a = e[1], e = [ 0 ];
                            continue;

                          case 7:
                            e = i.ops.pop(), i.trys.pop();
                            continue;

                          default:
                            if (!(_ = 0 < (_ = i.trys).length && _[_.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                i = 0;
                                continue;
                            }
                            if (3 === e[0] && (!_ || e[1] > _[0] && e[1] < _[3])) {
                                i.label = e[1];
                                break;
                            }
                            if (6 === e[0] && i.label < _[1]) {
                                i.label = _[1], _ = e;
                                break;
                            }
                            if (_ && i.label < _[2]) {
                                i.label = _[2], i.ops.push(e);
                                break;
                            }
                            _[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        e = n.call(r, i);
                    } catch (t) {
                        e = [ 6, t ], a = 0;
                    } finally {
                        o = _ = 0;
                    }
                    if (5 & e[0]) throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    };
                }([ e, t ]);
            };
        }
    }, __exportStar = function(t, e) {
        for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r]);
    }, __values = function(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator], r = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                };
            }
        };
    }, __read = function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, o, a = r.call(t), _ = [];
        try {
            for (;(void 0 === e || 0 < e--) && !(n = a.next()).done; ) _.push(n.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally {
            try {
                n && !n.done && (r = a.return) && r.call(a);
            } finally {
                if (o) throw o.error;
            }
        }
        return _;
    }, __spread = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(__read(arguments[e]));
        return t;
    }, __await = function(t) {
        return this instanceof __await ? (this.v = t, this) : new __await(t);
    }, __asyncGenerator = function(t, e, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o, a = r.apply(t, e || []), _ = [];
        return o = {}, n("next"), n("throw"), n("return"), o[Symbol.asyncIterator] = function() {
            return this;
        }, o;
        function n(n) {
            a[n] && (o[n] = function(r) {
                return new Promise(function(t, e) {
                    1 < _.push([ n, r, t, e ]) || i(n, r);
                });
            });
        }
        function i(t, e) {
            try {
                (r = a[t](e)).value instanceof __await ? Promise.resolve(r.value.v).then(c, u) : f(_[0][2], r);
            } catch (t) {
                f(_[0][3], t);
            }
            var r;
        }
        function c(t) {
            i("next", t);
        }
        function u(t) {
            i("throw", t);
        }
        function f(t, e) {
            t(e), _.shift(), _.length && i(_[0][0], _[0][1]);
        }
    }, __asyncDelegator = function(n) {
        var t, o;
        return t = {}, e("next"), e("throw", function(t) {
            throw t;
        }), e("return"), t[Symbol.iterator] = function() {
            return this;
        }, t;
        function e(e, r) {
            t[e] = n[e] ? function(t) {
                return (o = !o) ? {
                    value: __await(n[e](t)),
                    done: "return" === e
                } : r ? r(t) : t;
            } : r;
        }
    }, __asyncValues = function(c) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, e = c[Symbol.asyncIterator];
        return e ? e.call(c) : (c = "function" == typeof __values ? __values(c) : c[Symbol.iterator](), 
        t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
            return this;
        }, t);
        function r(i) {
            t[i] = c[i] && function(_) {
                return new Promise(function(t, e) {
                    var r, n, o, a;
                    _ = c[i](_), r = t, n = e, o = _.done, a = _.value, Promise.resolve(a).then(function(t) {
                        r({
                            value: t,
                            done: o
                        });
                    }, n);
                });
            };
        }
    }, __makeTemplateObject = function(t, e) {
        return Object.defineProperty ? Object.defineProperty(t, "raw", {
            value: e
        }) : t.raw = e, t;
    }, __importStar = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
    }, __importDefault = function(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }, t("__extends", __extends), t("__assign", __assign), t("__rest", __rest), t("__decorate", __decorate), 
    t("__param", __param), t("__metadata", __metadata), t("__awaiter", __awaiter), t("__generator", __generator), 
    t("__exportStar", __exportStar), t("__values", __values), t("__read", __read), t("__spread", __spread), 
    t("__await", __await), t("__asyncGenerator", __asyncGenerator), t("__asyncDelegator", __asyncDelegator), 
    t("__asyncValues", __asyncValues), t("__makeTemplateObject", __makeTemplateObject), 
    t("__importStar", __importStar), t("__importDefault", __importDefault);
});