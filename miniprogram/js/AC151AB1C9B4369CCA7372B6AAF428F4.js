Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
};

exports.annual = annual;

var _annual = require("E7DD85F1C9B4369C81BBEDF622F128F4.js"), _annual2 = _interopRequireDefault(_annual);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var INITIAL_STATE = {
    total: 0,
    subject_collection: null,
    subject_collection_items: []
};

function annual() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : INITIAL_STATE, t = arguments[1];
    switch (t.type) {
      case _annual2.default.RECEIVE_ANNUAL_LIST:
        return t.data;

      case _annual2.default.RECEIVE_INTEREST:
        var n = _extends({}, e);
        return n.subject_collection_items.forEach(function(e) {
            e.id === t.id && (e.interest = t.data);
        }), JSON.parse(JSON.stringify(n));

      case _annual2.default.RESET_LIST:
        return INITIAL_STATE;

      default:
        return e;
    }
}