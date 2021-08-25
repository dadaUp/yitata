var undef, has = Object.prototype.hasOwnProperty;

function decode(e) {
    return decodeURIComponent(e.replace(/\+/g, " "));
}

function querystring(e) {
    for (var n, r = /([^=?&]+)=?([^&]*)/g, t = {}; n = r.exec(e); ) {
        var o = decode(n[1]), i = decode(n[2]);
        o in t || (t[o] = i);
    }
    return t;
}

function querystringify(e, n) {
    n = n || "";
    var r, t, o = [];
    for (t in "string" != typeof n && (n = "?"), e) has.call(e, t) && ((r = e[t]) || null !== r && r !== undef && !isNaN(r) || (r = ""), 
    o.push(encodeURIComponent(t) + "=" + encodeURIComponent(r)));
    return o.length ? n + o.join("&") : "";
}

exports.stringify = querystringify, exports.parse = querystring;