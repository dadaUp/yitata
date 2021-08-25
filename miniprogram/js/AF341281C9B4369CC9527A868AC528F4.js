Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, sendLog = function() {
    var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        var t, n, o, u, a, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                for (n in t = {}, i) (o = i[n]) && (t[n] = o);
                return u = "", e.next = 5, _keyvDb2.default.accountInfo.get();

              case 5:
                (a = e.sent) && (u = a.id), (0, _index.request)({
                    url: "https://m.douban.com/stat.html",
                    method: "GET",
                    data: _extends({
                        from: "wx_miniprogram",
                        event: r,
                        current_uid: u
                    }, t)
                });

              case 8:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}(), _index = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), _keyvDb = require("28580F34C9B4369C4E3E6733F04528F4.js"), _keyvDb2 = _interopRequireDefault(_keyvDb);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var i = e.apply(this, arguments);
        return new Promise(function(u, a) {
            return function r(e, t) {
                try {
                    var n = i[e](t), o = n.value;
                } catch (e) {
                    return void a(e);
                }
                if (!n.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                u(o);
            }("next");
        });
    };
}

exports.default = sendLog;