Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    if (e && 1038 === e.scene) {
        var t = e.referrerInfo.extraData, r = getCurrentPages().reverse()[0], s = r.route || r.__route__;
        if (t && 0 === t.ret) (0, _subscriptEvent.trigger)("tCaptchaSuccess", {
            ticket: t.ticket,
            randstr: t.randstr,
            currentRoute: s
        }); else {
            var u = Object.assign({}, e, {
                currentRoute: s
            });
            (0, _subscriptEvent.trigger)("tCaptchaFailed", u);
        }
    }
};

var _subscriptEvent = require("374DFA64C9B4369C512B9263682328F4.js");