module.exports = function(c) {
    return function(t) {
        for (var n = arguments.length, e = Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r];
        return new Promise(function(n, r) {
            c.apply(void 0, [ Object.assign({}, t, {
                success: n,
                fail: r
            }) ].concat(e));
        });
    };
};