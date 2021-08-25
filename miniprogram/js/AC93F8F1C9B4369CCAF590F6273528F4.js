Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.frodoApi = exports.FrodoAPI = void 0;

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
}, _createClass = function() {
    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
    };
}(), _get = function e(t, r, n) {
    null === t && (t = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(t, r);
    if (void 0 === o) {
        var i = Object.getPrototypeOf(t);
        return null === i ? void 0 : e(i, r, n);
    }
    if ("value" in o) return o.value;
    var s = o.get;
    return void 0 !== s ? s.call(n) : void 0;
}, _tslib = require("BC651C54C9B4369CDA0374538FB428F4.js"), tslib_1 = _interopRequireWildcard(_tslib), _index = require("A8D9B013C9B4369CCEBFD814EDA528F4.js"), Utils = _interopRequireWildcard(_index), _baseApi = require("A11D0224C9B4369CC77B6A23482528F4.js"), _baseApi2 = _interopRequireDefault(_baseApi), _index2 = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), Taro = _interopRequireWildcard(_index2), _index3 = require("05A51172C9B4369C63C37975740428F4.js"), _index4 = _interopRequireDefault(_index3), _keyvDb = require("28580F34C9B4369C4E3E6733F04528F4.js"), _keyvDb2 = _interopRequireDefault(_keyvDb), _consts = require("D6E57543C9B4369CB0831D44849528F4.js"), _index5 = require("A963ABF4C9B4369CCF05C3F37FC428F4.js"), _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}

function _asyncToGenerator(e) {
    return function() {
        var a = e.apply(this, arguments);
        return new Promise(function(i, s) {
            return function t(e, r) {
                try {
                    var n = a[e](r), o = n.value;
                } catch (e) {
                    return void s(e);
                }
                if (!n.done) return Promise.resolve(o).then(function(e) {
                    t("next", e);
                }, function(e) {
                    t("throw", e);
                });
                i(o);
            }("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var FrodoAPI = function(e) {
    function o() {
        return _classCallCheck(this, o), _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
    }
    var t;
    return _inherits(o, _baseApi2.default), _createClass(o, [ {
        key: "fetch",
        value: (t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, i, n, s = this, a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = _extends({
                        toastError: !0
                    }, a), /^http/.test(t) || (t = "" + _consts.FRODO_API + t), (r = (0, _index6.default)(t, {}, !0)).query.apiKey = _consts.API_KEY, 
                    t = r.toString(), e.next = 7, _keyvDb2.default.accessToken.get();

                  case 7:
                    return i = e.sent, n = a.header || {}, i && (n.Authorization = "Bearer " + i), e.abrupt("return", _get(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "_baseFetch", this).call(this, t, _extends({}, a, {
                        toastError: !1,
                        header: n
                    })).then(function(e) {
                        return e.statusCode < 200 || 300 <= e.statusCode ? e.data : {
                            code: 0,
                            data: e.data,
                            msg: "success",
                            localized_message: "success",
                            request: ""
                        };
                    }).then(function() {
                        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                            var r, n, o;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!t.code) {
                                        e.next = 11;
                                        break;
                                    }
                                    if (r = t.localized_message || t.msg, 106 === t.code || "need_permission" === t.msg) return Utils.debug("frodo-api: expire token by fetch", t), 
                                    e.next = 6, _keyvDb2.default.remove(_keyvDb2.default.accessToken.key);
                                    e.next = 8;
                                    break;

                                  case 6:
                                    e.next = 9;
                                    break;

                                  case 8:
                                    128 === t.code || /^user_is_locked/.test(t.msg) ? Taro.showToast({
                                        title: r,
                                        icon: "none"
                                    }) : 1269 === t.code ? (n = t.extra.solution_uri, o = "https://accounts.douban.com/auth2_redir?token=" + i + "&url=" + n, 
                                    Taro.showToast({
                                        title: r,
                                        icon: "none"
                                    }), Taro.navigateTo({
                                        url: "/pages/webview/index?url=" + encodeURIComponent(o)
                                    })) : a.toastError && Taro.showToast({
                                        title: r,
                                        icon: "none"
                                    });

                                  case 9:
                                    if (a.toastError) throw new Error("request failed: " + r);
                                    e.next = 11;
                                    break;

                                  case 11:
                                    return e.abrupt("return", t);

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, s);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()));

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return t.apply(this, arguments);
        })
    }, {
        key: "retrieveData",
        value: function(e) {
            return e.data;
        }
    }, {
        key: "me",
        value: function() {
            return this.fetch("/~me");
        }
    }, {
        key: "user",
        value: function(e) {
            return this.fetch("/user/" + e);
        }
    }, {
        key: "userInterests",
        value: function(e, t) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 20, o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "movie";
            return this.fetch("/user/" + e + "/interests?type=" + o + "&status=" + t + "&start=" + r + "&count=" + n);
        }
    }, {
        key: "subjectCollection",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 20;
            return this.fetch("/subject_collection/" + e + "/items?start=" + t + "&count=" + r);
        }
    }, {
        key: "markRecommendations",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
            return this.fetch("/noviciate/mark_recommendations?start=" + e + (t ? "&series_id=" + t : ""));
        }
    }, {
        key: "status",
        value: function(e) {
            return this.fetch("/status/" + e);
        }
    }, {
        key: "related_statuses",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 20;
            return this.fetch("/status/" + e + "/related_statuses?start=" + t + "&count=" + r);
        }
    }, {
        key: "statusComments",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 20;
            return this.fetch("/status/" + e + "/comments?start=" + t + "&count=" + r);
        }
    }, {
        key: "likeStatus",
        value: function(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            return this.fetch("/status/" + e + "/" + (t ? "like" : "unlike"), {
                method: "POST"
            });
        }
    }, {
        key: "collectionStats",
        value: function(e) {
            return this.fetch("/user/" + e + "/collection_stats");
        }
    }, {
        key: "collection",
        value: function(e, t) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 20;
            return this.fetch("/subject_collection/" + e + "/items?start=" + t + "&count=" + r).then(this.retrieveData);
        }
    }, {
        key: "search",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 20;
            return this.fetch("/search/weixin?q=" + e + "&start=" + t + "&count=" + r);
        }
    }, {
        key: "ereborAd",
        value: function(e) {
            var t = e.unit, r = void 0 === t ? "" : t, n = e.bid, o = void 0 === n ? "" : n, i = e.uid, s = void 0 === i ? "" : i;
            return this.fetch("https://erebor.douban.com/lite/?unit=" + r + "&bid=" + o + "&uid=" + s);
        }
    } ]), o;
}();

exports.FrodoAPI = FrodoAPI = tslib_1.__decorate([ _index4.default ], FrodoAPI), 
exports.FrodoAPI = FrodoAPI;

var frodoApi = exports.frodoApi = new FrodoAPI();

exports.default = frodoApi;