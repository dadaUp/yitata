Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.api = api, exports.init = init;

var _index = require("A8D9B013C9B4369CCEBFD814EDA528F4.js"), Utils = _interopRequireWildcard(_index), _index2 = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}

function _interopRequireWildcard(r) {
    if (r && r.__esModule) return r;
    var e = {};
    if (null != r) for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    return e.default = r, e;
}

function _defineProperty(r, e, n) {
    return e in r ? Object.defineProperty(r, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = n, r;
}

function _asyncToGenerator(r) {
    return function() {
        var u = r.apply(this, arguments);
        return new Promise(function(i, o) {
            return function e(r, n) {
                try {
                    var t = u[r](n), a = t.value;
                } catch (r) {
                    return void o(r);
                }
                if (!t.done) return Promise.resolve(a).then(function(r) {
                    e("next", r);
                }, function(r) {
                    e("throw", r);
                });
                i(a);
            }("next");
        });
    };
}

function api(o, n) {
    var e, u = this, s = !0, r = {
        enableLoadingFlag: function() {
            s = !0;
        },
        disableLoadingFlag: function() {
            s = !1;
        }
    }, c = {}, d = (e = _asyncToGenerator(regeneratorRuntime.mark(function r(e) {
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.next = 2, new Promise(function(r) {
                    return n.setState(e, r);
                });

              case 2:
                return r.next = 4, Utils.sleep(10);

              case 4:
              case "end":
                return r.stop();
            }
        }, r, u);
    })), function(r) {
        return e.apply(this, arguments);
    }), t = function(t) {
        var a = o[t].updater || function(r) {
            return r;
        }, i = o[t].init;
        r[t] = function() {
            var r, e, n;
            return s && d(function(r) {
                return _defineProperty({}, t, {
                    isLoading: !0,
                    error: "",
                    data: a(i),
                    rawError: null
                });
            }), (r = o[t]).api.apply(r, arguments).then((n = _asyncToGenerator(regeneratorRuntime.mark(function r(e) {
                var n;
                return regeneratorRuntime.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return Utils.debug(o[t].api.name, e), n = {
                            isLoading: !1,
                            error: "",
                            data: a(e.data),
                            rawError: null
                        }, e.code && (n.error = e.data.localized_message || e.data.description || e.data.message, 
                        n.rawError = e.data, n.data = a(i), Utils.debug("request " + t + " failed", e), 
                        !1 !== o[t].toast && Utils.showErr(n.error)), r.next = 5, d(function(r) {
                            return _defineProperty({}, t, n);
                        });

                      case 5:
                        return r.abrupt("return", e);

                      case 6:
                      case "end":
                        return r.stop();
                    }
                }, r, u);
            })), function(r) {
                return n.apply(this, arguments);
            })).catch((e = _asyncToGenerator(regeneratorRuntime.mark(function r(e) {
                return regeneratorRuntime.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return Utils.debug(t, e), _index3.default.showToast({
                            icon: "none",
                            title: "请求" + t + "失败"
                        }), r.next = 4, d(function(r) {
                            return _defineProperty({}, t, {
                                isLoading: !1,
                                error: e.message,
                                data: a(r[t].data),
                                rawError: null
                            });
                        });

                      case 4:
                        throw e;

                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r, u);
            })), function(r) {
                return e.apply(this, arguments);
            }));
        }, c[t] = {
            error: "",
            data: a(i),
            isLoading: !1,
            rawError: null
        };
    };
    for (var a in o) t(a);
    return r;
}

function init(r) {
    var e = {};
    for (var n in r) {
        var t = r[n].updater;
        e[n] = {
            error: "",
            data: t ? t(r[n].init) : r[n].init,
            isLoading: !1,
            rawError: null
        };
    }
    return e;
}