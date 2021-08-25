Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.trailerAdUnitId = void 0, exports.createBid = createBid;

var _index = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function createBid() {
    var e = String(new Date() / 1e3), r = String(Math.random());
    return _index2.default.arrayBufferToBase64((e + r).split("")).replace(/=.*$/gi, "").substr(-11);
}

var trailerAdUnitId = exports.trailerAdUnitId = "adunit-b23bbb38374dcc0f";