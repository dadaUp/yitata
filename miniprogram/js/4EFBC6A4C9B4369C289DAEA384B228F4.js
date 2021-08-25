Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _getDataToStorage = require("346E1454C9B4369C52087C53DDB228F4.js"), _getDataToStorage2 = _interopRequireDefault(_getDataToStorage);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function createDefaultConfig() {
    return {
        url: "",
        method: "GET",
        data: null,
        header: {
            "content-type": "application/json"
        },
        dataType: "json"
    };
}

function Request(e) {
    var u = Object.assign({}, createDefaultConfig(), e);
    if (u.header || (u.header = {}), !u.header.Cookie) {
        var t = (0, _getDataToStorage2.default)("bid");
        u.header.Cookie = "bid=" + t;
    }
    if (!u.header.Authorization) {
        var a = (0, _getDataToStorage2.default)("access_token");
        u.header.Authorization = "Bearer " + a;
    }
    return new Promise(function(t, a) {
        var e = u.url;
        for (var r in u.data) {
            var o = new RegExp(":" + r, "gi");
            e = e.replace(o, u.data[r]);
        }
        wx.request({
            url: e,
            method: u.method,
            data: u.data,
            header: u.header,
            success: function(e) {
                return t(e);
            },
            fail: function(e) {
                return a(e);
            }
        });
    });
}

function createRequest(o) {
    return function(e, t, a, r) {
        return new Request({
            url: e,
            data: t,
            method: o,
            header: a,
            dataType: r
        });
    };
}

var Fetch = {
    get: createRequest("GET"),
    post: createRequest("POST")
};

exports.default = Fetch;