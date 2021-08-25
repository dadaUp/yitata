Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _slicedToArray = function(e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e)) return function(e, t) {
        var r = [], n = !0, a = !1, o = void 0;
        try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), 
            !t || r.length !== t); n = !0) ;
        } catch (e) {
            a = !0, o = e;
        } finally {
            try {
                !n && s.return && s.return();
            } finally {
                if (a) throw o;
            }
        }
        return r;
    }(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}, _index = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), _index2 = _interopRequireDefault(_index), _wxaLogin = require("97EBB403C9B4369CF18DDC04AD7328F4.js"), _wxaLogin2 = _interopRequireDefault(_wxaLogin), _consts = require("D6E57543C9B4369CB0831D44849528F4.js"), _helpers = require("A7F53A42C9B4369CC193524514A528F4.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var s = e.apply(this, arguments);
        return new Promise(function(o, i) {
            return function t(e, r) {
                try {
                    var n = s[e](r), a = n.value;
                } catch (e) {
                    return void i(e);
                }
                if (!n.done) return Promise.resolve(a).then(function(e) {
                    t("next", e);
                }, function(e) {
                    t("throw", e);
                });
                o(a);
            }("next");
        });
    };
}

var apiEndPointURL = "https://frodo.douban.com/api/v2/wx/data/subject_share", wxCheckSession = function() {
    return new Promise(function(e, t) {
        wx.checkSession({
            success: function() {
                e(!0);
            },
            fail: function() {
                e(!1);
            }
        });
    });
}, appendParamsToPath = function(e, t) {
    var r = (0, _helpers.obj2str)(t);
    return e.includes("?") ? e += "&" : e += "?", e += r;
}, dateToStr = function(e) {
    var t = e.getFullYear(), r = [ e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds() ].map(function(e) {
        return e.toString().padStart(2, "0");
    }), n = _slicedToArray(r, 5);
    return t + "-" + n[0] + "-" + n[1] + " " + n[2] + ":" + n[3] + ":" + n[4];
}, ShareDataCollector = function(e) {
    var n, t = e.prototype, r = t.componentDidMount, a = t.onShareAppMessage;
    e.prototype.componentDidMount = new Proxy(r, {
        apply: (n = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, n) {
            var a, o, i, s, u, c, d, p, l, f, x, h, _, y, w, g, S, m, v, b, P, T, k, D;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return _index2.default.showShareMenu({
                        withShareTicket: !0
                    }), e.next = 3, Reflect.apply(t, r, n);

                  case 3:
                    if (a = _index2.default.getStorageSync("wxa_sessionid"), e.t0 = "" === a, e.t0) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 8, wxCheckSession();

                  case 8:
                    e.t0 = !e.sent;

                  case 9:
                    if (e.t0) return e.next = 12, _index2.default.login();
                    e.next = 19;
                    break;

                  case 12:
                    return o = e.sent, i = o.code, e.next = 16, (0, _wxaLogin2.default)({
                        code: i,
                        appid: _consts.APP_ID
                    });

                  case 16:
                    s = e.sent, a = s.data.payload.wxa_sessionid, _index2.default.setStorageSync("wxa_sessionid", a);

                  case 19:
                    if ("" === (u = a)) return e.abrupt("return");
                    e.next = 22;
                    break;

                  case 22:
                    if (c = r.$router.params.shareTime) {
                        e.next = 25;
                        break;
                    }
                    return e.abrupt("return");

                  case 25:
                    if (c = dateToStr(new Date(parseInt(c))), d = wx.getLaunchOptionsSync(), p = d.shareTicket) return e.next = 30, 
                    _index2.default.getShareInfo({
                        shareTicket: p
                    });
                    e.next = 33;
                    break;

                  case 30:
                    e.t1 = e.sent, e.next = 34;
                    break;

                  case 33:
                    e.t1 = {};

                  case 34:
                    return l = e.t1, f = l.encryptedData, x = void 0 === f ? "" : f, h = l.iv, _ = void 0 === h ? "" : h, 
                    y = r.$router.params, w = y.sharerSessionId, g = void 0 === w ? "" : w, S = y.sharerUid, 
                    m = void 0 === S ? "" : S, v = _index2.default.getCurrentPages(), b = v[v.length - 1], 
                    P = b.route, T = dateToStr(new Date()), k = r.$router.params.id, D = (0, _helpers.obj2str)({
                        url: P,
                        iv: _,
                        subject_id: k,
                        encrypted_data: x,
                        sharer_sessionid: g,
                        uid: m,
                        share_time: c,
                        clicker_sessionid: u,
                        click_time: T
                    }), e.next = 48, _index2.default.request({
                        url: apiEndPointURL,
                        data: D,
                        method: "POST",
                        header: {
                            "x-api-key": _consts.API_KEY,
                            "content-type": "application/x-www-form-urlencoded"
                        }
                    });

                  case 48:
                  case "end":
                    return e.stop();
                }
            }, e, void 0);
        })), function(e, t, r) {
            return n.apply(this, arguments);
        })
    }), e.prototype.onShareAppMessage = new Proxy(a, {
        apply: function(e, t, r) {
            var n = Reflect.apply(e, t, r), a = new Date().getTime(), o = _index2.default.getStorageSync("wxa_sessionid");
            return o && (n.path = appendParamsToPath(n.path, {
                shareTime: a,
                sharerSessionId: o
            })), n;
        }
    });
};

exports.default = ShareDataCollector;