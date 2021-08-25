Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.unMarkItem = exports.markItem = exports.fetchList = exports.receiveInterest = exports.resetList = exports.receiveList = void 0;

var _annual = require("E7DD85F1C9B4369C81BBEDF622F128F4.js"), _annual2 = _interopRequireDefault(_annual), _frodoApi = require("AC93F8F1C9B4369CCAF590F6273528F4.js"), _subjectApi = require("A97FECB6C9B4369CCF1984B1E36528F4.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var receiveList = exports.receiveList = function(e) {
    return {
        type: _annual2.default.RECEIVE_ANNUAL_LIST,
        data: e
    };
}, resetList = exports.resetList = function() {
    return {
        type: _annual2.default.RESET_LIST
    };
}, receiveInterest = exports.receiveInterest = function(e, t) {
    return {
        type: _annual2.default.RECEIVE_INTEREST,
        data: e,
        id: t
    };
}, fetchList = exports.fetchList = function(e) {
    return function(t) {
        return _frodoApi.frodoApi.collection(e, 0, 10).then(function(e) {
            t(receiveList(e));
        }).catch(function(e) {
            t(receiveList({
                total: 0,
                subject_collection: null,
                subject_collection_items: []
            }));
        });
    };
}, markItem = exports.markItem = function(r) {
    return function(t) {
        return new _subjectApi.SubjectAPI().mark(r, "mark", {}).then(function(e) {
            0 === e.code && t(receiveInterest(e.data, r));
        });
    };
}, unMarkItem = exports.unMarkItem = function(r) {
    return function(t) {
        return new _subjectApi.SubjectAPI().unmark(r).then(function(e) {
            if (0 === e.code) {
                t(receiveInterest(null, r));
            }
        });
    };
};