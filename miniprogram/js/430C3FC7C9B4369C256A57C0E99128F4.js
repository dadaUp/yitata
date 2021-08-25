Object.defineProperty(exports, "__esModule", {
    value: !0
});

var isAndroid = function(i) {
    return -1 < i.indexOf("Android") || -1 < i.indexOf("Adr");
}, isiOS = function(i) {
    return -1 < i.indexOf("iOS");
}, isiPad = exports.isiPad = function(i) {
    return i && i.toLocaleLowerCase().includes("ipad");
}, getOS = exports.getOS = function(i) {
    return isAndroid(i) ? "android" : isiOS(i) ? "ios" : "";
}, MIN_NAV_GAP = 14, SET_CUSTOM_NAV_HEIGHT = exports.SET_CUSTOM_NAV_HEIGHT = function(i) {
    return 30 + i + MIN_NAV_GAP;
};