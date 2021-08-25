Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.subjectApi = exports.SubjectAPI = void 0;

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
}, _createClass = function() {
    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
    };
}(), _tslib = require("BC651C54C9B4369CDA0374538FB428F4.js"), tslib_1 = _interopRequireWildcard(_tslib), _index = require("05A51172C9B4369C63C37975740428F4.js"), _index2 = _interopRequireDefault(_index), _helpers = require("A7F53A42C9B4369CC193524514A528F4.js"), _frodoApi = require("AC93F8F1C9B4369CCAF590F6273528F4.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var SubjectAPI = function(e) {
    function r() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "movie";
        _classCallCheck(this, r);
        var t = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
        return t.type = e, t;
    }
    return _inherits(r, _frodoApi.FrodoAPI), _createClass(r, [ {
        key: "subject",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.type;
            return this.fetch("/" + t + "/" + e);
        }
    }, {
        key: "mark",
        value: function(e, t, r) {
            var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : this.type;
            return this.fetch("/" + n + "/" + e + "/" + t, {
                method: "POST",
                data: (0, _helpers.obj2str)(r)
            });
        }
    }, {
        key: "unmark",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.type;
            return this.fetch("/" + t + "/" + e + "/unmark", {
                method: "POST"
            });
        }
    }, {
        key: "interest",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.type;
            return this.fetch("/" + t + "/" + e + "/interest");
        }
    }, {
        key: "rating",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.type;
            return this.fetch("/" + t + "/" + e + "/rating");
        }
    }, {
        key: "interests",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = t.start, n = void 0 === r ? 0 : r, i = t.count, o = void 0 === i ? 20 : i, s = t.type, u = void 0 === s ? this.type : s, a = t.status, c = void 0 === a ? "done" : a, l = "/" + u + "/" + e + "/interests", h = (0, 
            _helpers.obj2str)({
                start: n,
                count: o,
                status: c
            });
            return this.fetch(l + "?" + h);
        }
    }, {
        key: "reviews",
        value: function(e, t) {
            var r = t.start, n = void 0 === r ? 0 : r, i = t.count, o = void 0 === i ? 20 : i, s = t.type, u = void 0 === s ? this.type : s;
            return this.fetch("/" + u + "/" + e + "/reviews?start=" + n + "&count=" + o);
        }
    }, {
        key: "review",
        value: function(e) {
            return this.fetch("/review/" + e);
        }
    }, {
        key: "comments",
        value: function(e, t) {
            var r = t.start, n = void 0 === r ? 0 : r, i = t.count, o = void 0 === i ? 20 : i;
            return this.fetch("/review/" + e + "/comments?start=" + n + "&count=" + o);
        }
    }, {
        key: "photos",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = t.start, n = void 0 === r ? 0 : r, i = t.count, o = void 0 === i ? 18 : i, s = t.type, u = void 0 === s ? this.type : s;
            return this.fetch("/" + u + "/" + e + "/photos?start=" + n + "&count=" + o);
        }
    }, {
        key: "trailers",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.type;
            return this.fetch("/" + t + "/" + e + "/trailers");
        }
    }, {
        key: "trailer",
        value: function(e) {
            return this.fetch("/trailer/" + e);
        }
    }, {
        key: "trailerComments",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = t.start, n = void 0 === r ? 0 : r, i = t.count, o = void 0 === i ? 20 : i;
            return this.fetch("/trailer/" + e + "/comments?start=" + n + "&count=" + o);
        }
    }, {
        key: "recommendations",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.type;
            return this.fetch("/" + t + "/" + e + "/recommendations");
        }
    }, {
        key: "rankList",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.type;
            return this.fetch("/" + e + "/rank_list");
        }
    }, {
        key: "getLabels",
        value: function() {
            var e = {
                name: "电影",
                comment: "影评",
                people: "影人",
                quantifier: "部"
            };
            switch (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.type) {
              case "book":
                e = _extends({}, e, {
                    name: "书",
                    comment: "书评",
                    quantifier: "本"
                });
                break;

              case "music":
                e = _extends({}, e, {
                    name: "唱片",
                    comment: "乐评",
                    quantifier: "张"
                });
                break;

              case "game":
                e = _extends({}, e, {
                    name: "游戏",
                    comment: "游戏评论",
                    quantifier: "部"
                });

              case "tv":
                e = _extends({}, e, {
                    name: "电视"
                });
            }
            return e;
        }
    } ]), r;
}();

exports.SubjectAPI = SubjectAPI = tslib_1.__decorate([ _index2.default ], SubjectAPI), 
exports.SubjectAPI = SubjectAPI;

var subjectApi = exports.subjectApi = new SubjectAPI();

exports.default = subjectApi;