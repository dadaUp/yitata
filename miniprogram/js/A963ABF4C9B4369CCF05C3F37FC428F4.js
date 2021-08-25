var required = require("E66A3712C9B4369C800C5F15289428F4.js"), qs = require("B338E1D7C9B4369CD55E89D0FB4428F4.js"), protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i, slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, rules = [ [ "#", "hash" ], [ "?", "query" ], function(e) {
    return e.replace("\\", "/");
}, [ "/", "pathname" ], [ "@", "auth", 1 ], [ NaN, "host", void 0, 1, 1 ], [ /:(\d+)$/, "port", void 0, 1 ], [ NaN, "hostname", void 0, 1, 1 ] ], ignore = {
    hash: 1,
    query: 1
};

function lolcation(e) {
    var o, t = ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}).location || {}, r = {}, s = typeof (e = e || t);
    if ("blob:" === e.protocol) r = new Url(unescape(e.pathname), {}); else if ("string" === s) for (o in r = new Url(e, {}), 
    ignore) delete r[o]; else if ("object" === s) {
        for (o in e) o in ignore || (r[o] = e[o]);
        void 0 === r.slashes && (r.slashes = slashes.test(e.href));
    }
    return r;
}

function extractProtocol(e) {
    var o = protocolre.exec(e);
    return {
        protocol: o[1] ? o[1].toLowerCase() : "",
        slashes: !!o[2],
        rest: o[3]
    };
}

function resolve(e, o) {
    for (var t = (o || "/").split("/").slice(0, -1).concat(e.split("/")), r = t.length, s = t[r - 1], a = !1, n = 0; r--; ) "." === t[r] ? t.splice(r, 1) : ".." === t[r] ? (t.splice(r, 1), 
    n++) : n && (0 === r && (a = !0), t.splice(r, 1), n--);
    return a && t.unshift(""), "." !== s && ".." !== s || t.push(""), t.join("/");
}

function Url(e, o, t) {
    if (!(this instanceof Url)) return new Url(e, o, t);
    var r, s, a, n, l, i, c = rules.slice(), h = typeof o, p = this, u = 0;
    for ("object" !== h && "string" !== h && (t = o, o = null), t && "function" != typeof t && (t = qs.parse), 
    o = lolcation(o), r = !(s = extractProtocol(e || "")).protocol && !s.slashes, p.slashes = s.slashes || r && o.slashes, 
    p.protocol = s.protocol || o.protocol || "", e = s.rest, s.slashes || (c[3] = [ /(.*)/, "pathname" ]); u < c.length; u++) "function" != typeof (n = c[u]) ? (a = n[0], 
    i = n[1], a != a ? p[i] = e : "string" == typeof a ? ~(l = e.indexOf(a)) && (e = "number" == typeof n[2] ? (p[i] = e.slice(0, l), 
    e.slice(l + n[2])) : (p[i] = e.slice(l), e.slice(0, l))) : (l = a.exec(e)) && (p[i] = l[1], 
    e = e.slice(0, l.index)), p[i] = p[i] || r && n[3] && o[i] || "", n[4] && (p[i] = p[i].toLowerCase())) : e = n(e);
    t && (p.query = t(p.query)), r && o.slashes && "/" !== p.pathname.charAt(0) && ("" !== p.pathname || "" !== o.pathname) && (p.pathname = resolve(p.pathname, o.pathname)), 
    required(p.port, p.protocol) || (p.host = p.hostname, p.port = ""), p.username = p.password = "", 
    p.auth && (n = p.auth.split(":"), p.username = n[0] || "", p.password = n[1] || ""), 
    p.origin = p.protocol && p.host && "file:" !== p.protocol ? p.protocol + "//" + p.host : "null", 
    p.href = p.toString();
}

function set(e, o, t) {
    var r = this;
    switch (e) {
      case "query":
        "string" == typeof o && o.length && (o = (t || qs.parse)(o)), r[e] = o;
        break;

      case "port":
        r[e] = o, required(o, r.protocol) ? o && (r.host = r.hostname + ":" + o) : (r.host = r.hostname, 
        r[e] = "");
        break;

      case "hostname":
        r[e] = o, r.port && (o += ":" + r.port), r.host = o;
        break;

      case "host":
        r[e] = o, /:\d+$/.test(o) ? (o = o.split(":"), r.port = o.pop(), r.hostname = o.join(":")) : (r.hostname = o, 
        r.port = "");
        break;

      case "protocol":
        r.protocol = o.toLowerCase(), r.slashes = !t;
        break;

      case "pathname":
      case "hash":
        if (o) {
            var s = "pathname" === e ? "/" : "#";
            r[e] = o.charAt(0) !== s ? s + o : o;
        } else r[e] = o;
        break;

      default:
        r[e] = o;
    }
    for (var a = 0; a < rules.length; a++) {
        var n = rules[a];
        n[4] && (r[n[1]] = r[n[1]].toLowerCase());
    }
    return r.origin = r.protocol && r.host && "file:" !== r.protocol ? r.protocol + "//" + r.host : "null", 
    r.href = r.toString(), r;
}

function toString(e) {
    e && "function" == typeof e || (e = qs.stringify);
    var o, t = this, r = t.protocol;
    r && ":" !== r.charAt(r.length - 1) && (r += ":");
    var s = r + (t.slashes ? "//" : "");
    return t.username && (s += t.username, t.password && (s += ":" + t.password), s += "@"), 
    s += t.host + t.pathname, (o = "object" == typeof t.query ? e(t.query) : t.query) && (s += "?" !== o.charAt(0) ? "?" + o : o), 
    t.hash && (s += t.hash), s;
}

Url.prototype = {
    set: set,
    toString: toString
}, Url.extractProtocol = extractProtocol, Url.location = lolcation, Url.qs = qs, 
module.exports = Url;