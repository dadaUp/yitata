Object.defineProperty(exports, "__esModule", {
    value: !0
});

var HELPERS = {
    required: function(t) {
        return t && t.trim();
    },
    name: function(t) {
        return t.trim && (/[0-9]{1,14}/gi.test(t) || /^[_\.0-9a-zA-Z+-]+@([0-9a-zA-Z]+[0-9a-zA-Z-]*\.)+[a-zA-Z]{2,4}$/gi.test(t));
    },
    num: function(t) {
        return t && t.trim() && /^\d+$/gi.test(t);
    },
    phone: function(t) {
        return t && t.trim && /[0-9]{1,14}/gi.test(t);
    }
};

function validate(t, r) {
    var e = !0, i = "", n = "";
    for (var a in r) {
        var u = r[a];
        if (u) {
            var o = t[a], s = u.validator;
            if (!("string" == typeof s ? HELPERS[s] : s)(o)) return [ e = !1, n = a, i = u.message ];
        }
    }
    return [ e, n, i ];
}

exports.default = validate;