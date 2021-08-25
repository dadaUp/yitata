Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function a(e, t) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(e, t, r) {
        return t && a(e.prototype, t), r && a(e, r), e;
    };
}(), _fetch = require("4EFBC6A4C9B4369C289DAEA384B228F4.js"), _fetch2 = _interopRequireDefault(_fetch), _getDataToStorage = require("346E1454C9B4369C52087C53DDB228F4.js"), _getDataToStorage2 = _interopRequireDefault(_getDataToStorage), _const = require("04D06682C9B4369C62B60E85CE7228F4.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var MarketAnalytics = function() {
    function e() {
        _classCallCheck(this, e), this.app = getApp(), this.reportUrl = _const.MA_REPORT_URL;
    }
    return _createClass(e, [ {
        key: "report",
        value: function(t, e) {
            var r = this._prepare(e), a = getCurrentPages().reverse(), n = {
                group: "userAction",
                action: t,
                url: this.getPageUrl(a[0]),
                referrer: this.getPageUrl(a[1]),
                extra: JSON.stringify(r)
            }, o = this.app.globalData.openMaReport;
            return !(!o && 0) && _fetch2.default.post(this.reportUrl, {
                actions: [ n ],
                flush: !0
            }).then(function(e) {
                200 === e.statusCode && console.log("MA数据上报成功", t, {
                    url: n.url,
                    referrer: n.referrer,
                    extra: r
                });
            });
        }
    }, {
        key: "_prepare",
        value: function(e) {
            var t = this.app, r = Object.assign({}, e, {
                appid: t.globalData.appid
            });
            return {
                scene: (0, _getDataToStorage2.default)("scene"),
                entry_id: (0, _getDataToStorage2.default)("entry_id"),
                referrer_info: (0, _getDataToStorage2.default)("referrer_info"),
                system_info: wx.getSystemInfoSync(),
                network_type: t.globalData.networkType,
                version: t.globalData.version,
                data: r
            };
        }
    }, {
        key: "getPageUrl",
        value: function(e) {
            if (!e) return "";
            var t = e.route || e.__route__, r = e ? this.json2string(e.options) : "";
            return "" + t + (r = r ? "?" + r : "");
        }
    }, {
        key: "json2string",
        value: function(e) {
            var t = Object.assign({}, e);
            return Object.keys(t).map(function(e) {
                return e + "=" + t[e];
            }).join("&");
        }
    } ]), e;
}();

exports.default = MarketAnalytics;