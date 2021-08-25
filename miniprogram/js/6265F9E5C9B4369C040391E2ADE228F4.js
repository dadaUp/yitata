Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createParams = createParams, exports.param2str = param2str;

var app = getApp();

function createParams(a) {
    var p = {};
    if (app.globalData && app.globalData.appid && (p.appid = app.globalData.appid), 
    app.globalData && (app.globalData.loginSuccessUrl && (p.redirect = app.globalData.loginSuccessUrl), 
    app.globalData.useTCaptcha && (p.useTCaptcha = app.globalData.useTCaptcha)), a) for (var r in options) options.hasOwnProperty(r) && (p[r] = options[r]);
    return p;
}

function param2str(a) {
    var p = [];
    for (var r in a) a.hasOwnProperty(r) && p.push(r + "=" + a[r]);
    return 0 === p.length ? "" : p.join("&");
}