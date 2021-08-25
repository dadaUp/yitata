Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.keyvDb = void 0;

var _createClass = function() {
    function n(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(e, r, t) {
        return r && n(e.prototype, r), t && n(e, t), e;
    };
}(), _index = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), Taro = _interopRequireWildcard(_index), _checkAccount = require("919A3194C9B4369CF7FC5993C69228F4.js"), _checkAccount2 = _interopRequireDefault(_checkAccount);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    return r.default = e, r;
}

function _asyncToGenerator(e) {
    return function() {
        var c = e.apply(this, arguments);
        return new Promise(function(u, o) {
            return function r(e, t) {
                try {
                    var n = c[e](t), a = n.value;
                } catch (e) {
                    return void o(e);
                }
                if (!n.done) return Promise.resolve(a).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                u(a);
            }("next");
        });
    };
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

var KeyvDb = function() {
    function u() {
        var e, r, t, n, a = this;
        _classCallCheck(this, u), this.accessToken = {
            key: "access_token",
            get: (r = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, keyvDb.isLogin();

                      case 2:
                        if (e.sent) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return");

                      case 5:
                        return e.abrupt("return", keyvDb.get(keyvDb.accessToken.key));

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, a);
            })), function() {
                return r.apply(this, arguments);
            }),
            set: function(e) {
                return keyvDb.set(keyvDb.accessToken.key, e);
            },
            remove: (e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", keyvDb.remove(keyvDb.accessToken.key));

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, a);
            })), function() {
                return e.apply(this, arguments);
            })
        }, this.accountInfo = {
            key: "account_info",
            get: (n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, keyvDb.isLogin();

                      case 2:
                        if (e.sent) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return");

                      case 5:
                        return e.abrupt("return", keyvDb.get(keyvDb.accountInfo.key));

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return n.apply(this, arguments);
            }),
            remove: (t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", keyvDb.remove(keyvDb.accountInfo.key));

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, a);
            })), function() {
                return t.apply(this, arguments);
            })
        };
    }
    var e, r, t, n, a;
    return _createClass(u, [ {
        key: "get",
        value: (a = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, keyvDb._getRealKey(r);

                  case 2:
                    return r = e.sent, e.abrupt("return", Taro.getStorage({
                        key: r
                    }).then(function(e) {
                        return e.data;
                    }).catch(function(e) {
                        return console.error(e), t;
                    }));

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, r) {
            return a.apply(this, arguments);
        })
    }, {
        key: "set",
        value: (n = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, keyvDb._getRealKey(r);

                  case 2:
                    return r = e.sent, e.abrupt("return", Taro.setStorage({
                        key: r,
                        data: t
                    }));

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, r) {
            return n.apply(this, arguments);
        })
    }, {
        key: "remove",
        value: (t = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, keyvDb._getRealKey(r);

                  case 2:
                    return r = e.sent, e.abrupt("return", Taro.removeStorage({
                        key: r
                    }));

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return t.apply(this, arguments);
        })
    }, {
        key: "_getRealKey",
        value: (r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", r);

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return r.apply(this, arguments);
        })
    }, {
        key: "isLogin",
        value: (e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, (0, _checkAccount2.default)();

                  case 2:
                    return (r = e.sent) || (keyvDb.accessToken.remove(), keyvDb.accountInfo.remove()), 
                    e.abrupt("return", r);

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return e.apply(this, arguments);
        })
    } ]), u;
}(), keyvDb = exports.keyvDb = new KeyvDb();

exports.default = keyvDb;