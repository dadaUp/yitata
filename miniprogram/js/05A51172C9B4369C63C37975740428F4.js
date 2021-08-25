Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

function autobind() {
    return 1 === arguments.length ? boundClass.apply(void 0, arguments) : boundMethod.apply(void 0, arguments);
}

function boundClass(e) {
    var t = void 0;
    return "undefined" != typeof Reflect && "function" == typeof Reflect.ownKeys ? t = Reflect.ownKeys(e.prototype) : (t = Object.getOwnPropertyNames(e.prototype), 
    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(e.prototype)))), 
    t.forEach(function(t) {
        if ("constructor" !== t) {
            var o = Object.getOwnPropertyDescriptor(e.prototype, t);
            "function" == typeof o.value && Object.defineProperty(e.prototype, t, boundMethod(e, t, o));
        }
    }), e;
}

function boundMethod(o, e, t) {
    var n = t.value;
    if ("function" != typeof n) throw new Error("@autobind decorator can only be applied to methods not: " + (void 0 === n ? "undefined" : _typeof(n)));
    var r = !1;
    return {
        configurable: !0,
        get: function() {
            if (r || this === o.prototype || this.hasOwnProperty(e) || "function" != typeof n) return n;
            var t = n.bind(this);
            return r = !0, Object.defineProperty(this, e, {
                configurable: !0,
                get: function() {
                    return t;
                },
                set: function(t) {
                    n = t, delete this[e];
                }
            }), r = !1, t;
        },
        set: function(t) {
            n = t;
        }
    };
}

exports.default = autobind;