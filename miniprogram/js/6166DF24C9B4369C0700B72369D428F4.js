Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportClickResult = exports.reportViewResult = exports.reportDoSearch = void 0;

var _extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
}, _index = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), MarketAnalytics = function(e) {
    var s = "https://market.douban.com/analytics/" + e.MA_ACCOUNT_ID + "/collect";
    return function(t, o) {
        return new Promise(function(e, r) {
            (0, _index.request)({
                url: s,
                method: "POST",
                data: _extends({
                    action: t
                }, o),
                success: e
            });
        });
    };
}, report = MarketAnalytics({
    MA_ACCOUNT_ID: "l9dw0fcAyWfVs37N"
}), reportDoSearch = exports.reportDoSearch = function(e) {
    report("doSearch", e);
}, reportViewResult = exports.reportViewResult = function(e) {
    report("viewSearchResult", e);
}, reportClickResult = exports.reportClickResult = function(e) {
    report("clickSearchResult", e);
};