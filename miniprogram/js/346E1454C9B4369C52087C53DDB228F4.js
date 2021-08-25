Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(t) {
    try {
        return wx.getStorageSync("" + t);
    } catch (e) {
        return console.log("get " + t + " failed"), "";
    }
};