Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var t = e.split("?")[0].replace("/", ""), r = getCurrentPages().map(function(e) {
        return e.route || e.__route__;
    }), u = r.indexOf(t);
    -1 != u ? wx.navigateBack({
        delta: r.length - u - 1
    }) : wx.redirectTo({
        url: e
    });
};