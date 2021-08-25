!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([ "exports" ], t) : t(e.reduxLogger = e.reduxLogger || {});
}(this, function(e) {
    "use strict";
    function t(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
    }
    function r(e, t) {
        Object.defineProperty(this, "kind", {
            value: e,
            enumerable: !0
        }), t && t.length && Object.defineProperty(this, "path", {
            value: t,
            enumerable: !0
        });
    }
    function v(e, t, r) {
        v.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
            value: t,
            enumerable: !0
        }), Object.defineProperty(this, "rhs", {
            value: r,
            enumerable: !0
        });
    }
    function y(e, t) {
        y.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
            value: t,
            enumerable: !0
        });
    }
    function b(e, t) {
        b.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
            value: t,
            enumerable: !0
        });
    }
    function m(e, t, r) {
        m.super_.call(this, "A", e), Object.defineProperty(this, "index", {
            value: t,
            enumerable: !0
        }), Object.defineProperty(this, "item", {
            value: r,
            enumerable: !0
        });
    }
    function w(e, t, r) {
        var n = e.slice((r || t) + 1 || e.length);
        return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e;
    }
    function x(e) {
        var t = void 0 === e ? "undefined" : j(e);
        return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
    }
    function S(n, o, i, a, e, t, c) {
        c = c || [];
        var l = (e = e || []).slice(0);
        if (void 0 !== t) {
            if (a) {
                if ("function" == typeof a && a(l, t)) return;
                if ("object" === (void 0 === a ? "undefined" : j(a))) {
                    if (a.prefilter && a.prefilter(l, t)) return;
                    if (a.normalize) {
                        var r = a.normalize(l, t, n, o);
                        r && (n = r[0], o = r[1]);
                    }
                }
            }
            l.push(t);
        }
        "regexp" === x(n) && "regexp" === x(o) && (n = n.toString(), o = o.toString());
        var f = void 0 === n ? "undefined" : j(n), u = void 0 === o ? "undefined" : j(o), s = "undefined" !== f || c && c[c.length - 1].lhs && c[c.length - 1].lhs.hasOwnProperty(t), p = "undefined" !== u || c && c[c.length - 1].rhs && c[c.length - 1].rhs.hasOwnProperty(t);
        if (!s && p) i(new y(l, o)); else if (!p && s) i(new b(l, n)); else if (x(n) !== x(o)) i(new v(l, n, o)); else if ("date" === x(n) && n - o != 0) i(new v(l, n, o)); else if ("object" === f && null !== n && null !== o) if (c.filter(function(e) {
            return e.lhs === n;
        }).length) n !== o && i(new v(l, n, o)); else {
            if (c.push({
                lhs: n,
                rhs: o
            }), Array.isArray(n)) {
                var d;
                for (n.length, d = 0; d < n.length; d++) d >= o.length ? i(new m(l, d, new b(void 0, n[d]))) : S(n[d], o[d], i, a, l, d, c);
                for (;d < o.length; ) i(new m(l, d, new y(void 0, o[d++])));
            } else {
                var h = Object.keys(n), g = Object.keys(o);
                h.forEach(function(e, t) {
                    var r = g.indexOf(e);
                    0 <= r ? (S(n[e], o[e], i, a, l, e, c), g = w(g, r)) : S(n[e], void 0, i, a, l, e, c);
                }), g.forEach(function(e) {
                    S(void 0, o[e], i, a, l, e, c);
                });
            }
            c.length = c.length - 1;
        } else n !== o && ("number" === f && isNaN(n) && isNaN(o) || i(new v(l, n, o)));
    }
    function i(e, t, r, n) {
        return n = n || [], S(e, t, function(e) {
            e && n.push(e);
        }, r), n.length ? n : void 0;
    }
    function o(e, t, r) {
        if (e && t && r && r.kind) {
            for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i; ) void 0 === n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), 
            n = n[r.path[o]];
            switch (r.kind) {
              case "A":
                !function e(t, r, n) {
                    if (n.path && n.path.length) {
                        var o, i = t[r], a = n.path.length - 1;
                        for (o = 0; o < a; o++) i = i[n.path[o]];
                        switch (n.kind) {
                          case "A":
                            e(i[n.path[o]], n.index, n.item);
                            break;

                          case "D":
                            delete i[n.path[o]];
                            break;

                          case "E":
                          case "N":
                            i[n.path[o]] = n.rhs;
                        }
                    } else switch (n.kind) {
                      case "A":
                        e(t[r], n.index, n.item);
                        break;

                      case "D":
                        t = w(t, r);
                        break;

                      case "E":
                      case "N":
                        t[r] = n.rhs;
                    }
                    return t;
                }(r.path ? n[r.path[o]] : n, r.index, r.item);
                break;

              case "D":
                delete n[r.path[o]];
                break;

              case "E":
              case "N":
                n[r.path[o]] = r.rhs;
            }
        }
    }
    function L(e, t, o, r) {
        var n = i(e, t);
        try {
            r ? o.groupCollapsed("diff") : o.group("diff");
        } catch (e) {
            o.log("diff");
        }
        n ? n.forEach(function(e) {
            var t, r = e.kind, n = function(e) {
                var t = e.kind, r = e.path, n = e.lhs, o = e.rhs, i = e.index, a = e.item;
                switch (t) {
                  case "E":
                    return [ r.join("."), n, "→", o ];

                  case "N":
                    return [ r.join("."), o ];

                  case "D":
                    return [ r.join(".") ];

                  case "A":
                    return [ r.join(".") + "[" + i + "]", a ];

                  default:
                    return [];
                }
            }(e);
            o.log.apply(o, [ "%c " + s[r].text, (t = r, "color: " + s[t].color + "; font-weight: bold") ].concat(f(n)));
        }) : o.log("—— no diff ——");
        try {
            o.groupEnd();
        } catch (e) {
            o.log("—— diff end —— ");
        }
    }
    function M(e, t, r, n) {
        switch (void 0 === e ? "undefined" : j(e)) {
          case "object":
            return "function" == typeof e[n] ? e[n].apply(e, f(r)) : e[n];

          case "function":
            return e(t);

          default:
            return e;
        }
    }
    function d(k, D) {
        var e, o, i, E = D.logger, A = D.actionTransformer, t = D.titleFormatter, O = void 0 === t ? (o = (e = D).timestamp, 
        i = e.duration, function(e, t, r) {
            var n = [ "action" ];
            return n.push("%c" + String(e.type)), o && n.push("%c@ " + t), i && n.push("%c(in " + r.toFixed(2) + " ms)"), 
            n.join(" ");
        }) : t, N = D.collapsed, P = D.colors, C = D.level, F = D.diff, T = void 0 === D.titleFormatter;
        k.forEach(function(e, t) {
            var r = e.started, n = e.startedTime, o = e.action, i = e.prevState, a = e.error, c = e.took, l = e.nextState, f = k[t + 1];
            f && (l = f.prevState, c = f.started - r);
            var u = A(o), s = "function" == typeof N ? N(function() {
                return l;
            }, o, e) : N, p = _(n), d = P.title ? "color: " + P.title(u) + ";" : "", h = [ "color: gray; font-weight: lighter;" ];
            h.push(d), D.timestamp && h.push("color: gray; font-weight: lighter;"), D.duration && h.push("color: gray; font-weight: lighter;");
            var g = O(u, p, c);
            try {
                s ? P.title && T ? E.groupCollapsed.apply(E, [ "%c " + g ].concat(h)) : E.groupCollapsed(g) : P.title && T ? E.group.apply(E, [ "%c " + g ].concat(h)) : E.group(g);
            } catch (e) {
                E.log(g);
            }
            var v = M(C, u, [ i ], "prevState"), y = M(C, u, [ u ], "action"), b = M(C, u, [ a, i ], "error"), m = M(C, u, [ l ], "nextState");
            if (v) if (P.prevState) {
                var w = "color: " + P.prevState(i) + "; font-weight: bold";
                E[v]("%c prev state", w, i);
            } else E[v]("prev state", i);
            if (y) if (P.action) {
                var x = "color: " + P.action(u) + "; font-weight: bold";
                E[y]("%c action    ", x, u);
            } else E[y]("action    ", u);
            if (a && b) if (P.error) {
                var S = "color: " + P.error(a, i) + "; font-weight: bold;";
                E[b]("%c error     ", S, a);
            } else E[b]("error     ", a);
            if (m) if (P.nextState) {
                var j = "color: " + P.nextState(l) + "; font-weight: bold";
                E[m]("%c next state", j, l);
            } else E[m]("next state", l);
            F && L(i, l, E, s);
            try {
                E.groupEnd();
            } catch (e) {
                E.log("—— log end ——");
            }
        });
    }
    function n() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, a = Object.assign({}, g, e), t = a.logger, c = a.stateTransformer, l = a.errorTransformer, f = a.predicate, u = a.logErrors, s = a.diffPredicate;
        if (void 0 === t) return function() {
            return function(t) {
                return function(e) {
                    return t(e);
                };
            };
        };
        if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), 
        function() {
            return function(t) {
                return function(e) {
                    return t(e);
                };
            };
        };
        var p = [];
        return function(e) {
            var i = e.getState;
            return function(o) {
                return function(e) {
                    if ("function" == typeof f && !f(i, e)) return o(e);
                    var t = {};
                    p.push(t), t.started = h.now(), t.startedTime = new Date(), t.prevState = c(i()), 
                    t.action = e;
                    var r = void 0;
                    if (u) try {
                        r = o(e);
                    } catch (e) {
                        t.error = l(e);
                    } else r = o(e);
                    t.took = h.now() - t.started, t.nextState = c(i());
                    var n = a.diff && "function" == typeof s ? s(i, e) : a.diff;
                    if (d(p, Object.assign({}, a, {
                        diff: n
                    })), p.length = 0, t.error) throw t.error;
                    return r;
                };
            };
        };
    }
    var a, c, l = function(e, t) {
        return r = "0", n = t - e.toString().length, new Array(n + 1).join(r) + e;
        var r, n;
    }, _ = function(e) {
        return l(e.getHours(), 2) + ":" + l(e.getMinutes(), 2) + ":" + l(e.getSeconds(), 2) + "." + l(e.getMilliseconds(), 3);
    }, h = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date, j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, f = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
        }
        return Array.from(e);
    }, u = [];
    a = "object" === ("undefined" == typeof global ? "undefined" : j(global)) && global ? global : "undefined" != typeof window ? window : {}, 
    (c = a.DeepDiff) && u.push(function() {
        void 0 !== c && a.DeepDiff === i && (a.DeepDiff = c, c = void 0);
    }), t(v, r), t(y, r), t(b, r), t(m, r), Object.defineProperties(i, {
        diff: {
            value: i,
            enumerable: !0
        },
        observableDiff: {
            value: S,
            enumerable: !0
        },
        applyDiff: {
            value: function(t, r, n) {
                t && r && S(t, r, function(e) {
                    n && !n(t, r, e) || o(t, r, e);
                });
            },
            enumerable: !0
        },
        applyChange: {
            value: o,
            enumerable: !0
        },
        revertChange: {
            value: function(e, t, r) {
                if (e && t && r && r.kind) {
                    var n, o, i = e;
                    for (o = r.path.length - 1, n = 0; n < o; n++) void 0 === i[r.path[n]] && (i[r.path[n]] = {}), 
                    i = i[r.path[n]];
                    switch (r.kind) {
                      case "A":
                        !function e(t, r, n) {
                            if (n.path && n.path.length) {
                                var o, i = t[r], a = n.path.length - 1;
                                for (o = 0; o < a; o++) i = i[n.path[o]];
                                switch (n.kind) {
                                  case "A":
                                    e(i[n.path[o]], n.index, n.item);
                                    break;

                                  case "D":
                                  case "E":
                                    i[n.path[o]] = n.lhs;
                                    break;

                                  case "N":
                                    delete i[n.path[o]];
                                }
                            } else switch (n.kind) {
                              case "A":
                                e(t[r], n.index, n.item);
                                break;

                              case "D":
                              case "E":
                                t[r] = n.lhs;
                                break;

                              case "N":
                                t = w(t, r);
                            }
                            return t;
                        }(i[r.path[n]], r.index, r.item);
                        break;

                      case "D":
                      case "E":
                        i[r.path[n]] = r.lhs;
                        break;

                      case "N":
                        delete i[r.path[n]];
                    }
                }
            },
            enumerable: !0
        },
        isConflict: {
            value: function() {
                return void 0 !== c;
            },
            enumerable: !0
        },
        noConflict: {
            value: function() {
                return u && (u.forEach(function(e) {
                    e();
                }), u = null), i;
            },
            enumerable: !0
        }
    });
    var s = {
        E: {
            color: "#2196F3",
            text: "CHANGED:"
        },
        N: {
            color: "#4CAF50",
            text: "ADDED:"
        },
        D: {
            color: "#F44336",
            text: "DELETED:"
        },
        A: {
            color: "#2196F3",
            text: "ARRAY:"
        }
    }, g = {
        level: "log",
        logger: console,
        logErrors: !0,
        collapsed: void 0,
        predicate: void 0,
        duration: !1,
        timestamp: !0,
        stateTransformer: function(e) {
            return e;
        },
        actionTransformer: function(e) {
            return e;
        },
        errorTransformer: function(e) {
            return e;
        },
        colors: {
            title: function() {
                return "inherit";
            },
            prevState: function() {
                return "#9E9E9E";
            },
            action: function() {
                return "#03A9F4";
            },
            nextState: function() {
                return "#4CAF50";
            },
            error: function() {
                return "#F20404";
            }
        },
        diff: !1,
        diffPredicate: void 0,
        transformer: void 0
    }, p = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.dispatch, r = e.getState;
        return "function" == typeof t || "function" == typeof r ? n()({
            dispatch: t,
            getState: r
        }) : void 0;
    };
    e.defaults = g, e.createLogger = n, e.logger = p, e.default = p, Object.defineProperty(e, "__esModule", {
        value: !0
    });
});