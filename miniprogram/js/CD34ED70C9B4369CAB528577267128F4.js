Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.receiveAccountInfo = void 0, exports.getAccountInfo = getAccountInfo, 
exports.removeAccountInfo = removeAccountInfo, exports.logout = logout;

var _account = require("7965D801C9B4369C1F03B006D4E128F4.js"), _account2 = _interopRequireDefault(_account), _keyvDb = require("28580F34C9B4369C4E3E6733F04528F4.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var a = e.apply(this, arguments);
        return new Promise(function(c, u) {
            return function n(e, t) {
                try {
                    var r = a[e](t), o = r.value;
                } catch (e) {
                    return void u(e);
                }
                if (!r.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                c(o);
            }("next");
        });
    };
}

var receiveAccountInfo = exports.receiveAccountInfo = function(e) {
    return {
        type: _account2.default.RECEIVE_ACCOUNTINFO,
        payload: e
    };
};

function getAccountInfo() {
    var n, r = this;
    return n = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
        var t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, _keyvDb.keyvDb.accountInfo.get();

              case 2:
                return t = e.sent, e.next = 5, n(receiveAccountInfo(t || null));

              case 5:
                return e.abrupt("return", t);

              case 6:
              case "end":
                return e.stop();
            }
        }, e, r);
    })), function(e) {
        return n.apply(this, arguments);
    };
}

function removeAccountInfo() {
    var n, t = this;
    return n = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, _keyvDb.keyvDb.accountInfo.remove();

              case 2:
                return e.next = 4, _keyvDb.keyvDb.accessToken.remove();

              case 4:
                return e.abrupt("return", n(receiveAccountInfo(null)));

              case 5:
              case "end":
                return e.stop();
            }
        }, e, t);
    })), function(e) {
        return n.apply(this, arguments);
    };
}

function logout() {
    return function(e) {
        return _keyvDb.keyvDb.accessToken.remove().then(function() {
            e(removeAccountInfo());
        });
    };
}