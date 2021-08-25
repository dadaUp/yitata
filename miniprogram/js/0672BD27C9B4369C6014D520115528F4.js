Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportApi = exports.ReportAPI = void 0;

var _createClass = function() {
    function o(e, r) {
        for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(e, r, t) {
        return r && o(e.prototype, r), t && o(e, t), e;
    };
}(), _tslib = require("BC651C54C9B4369CDA0374538FB428F4.js"), tslib_1 = _interopRequireWildcard(_tslib), _index = require("05A51172C9B4369C63C37975740428F4.js"), _index2 = _interopRequireDefault(_index), _helpers = require("A7F53A42C9B4369CC193524514A528F4.js"), _frodoApi = require("AC93F8F1C9B4369CCAF590F6273528F4.js"), _index3 = require("B3C56234C9B4369CD5A30A33B9E328F4.js"), _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    return r.default = e, r;
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !r || "object" != typeof r && "function" != typeof r ? e : r;
}

function _inherits(e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    e.prototype = Object.create(r && r.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}

var ReportAPI = function(e) {
    function r() {
        return _classCallCheck(this, r), _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
    }
    return _inherits(r, _frodoApi.FrodoAPI), _createClass(r, [ {
        key: "addFormId",
        value: function(e) {
            var r = _index4.default.getStorageSync("douban_user_id"), t = _index4.default.getStorageSync("wxa_sessionid");
            return r ? t ? this.fetch("/user/" + r + "/add_wx_formid", {
                method: "POST",
                data: (0, _helpers.obj2str)({
                    formid: e,
                    sessionid: t
                }),
                toastError: !1
            }) : Promise.reject("no session id") : Promise.reject("no user id");
        }
    } ]), r;
}();

exports.ReportAPI = ReportAPI = tslib_1.__decorate([ _index2.default ], ReportAPI), 
exports.ReportAPI = ReportAPI;

var reportApi = exports.reportApi = new ReportAPI();

exports.default = ReportAPI;