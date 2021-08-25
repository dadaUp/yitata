module.exports = function(e, t) {
    if (t = t.split(":")[0], !(e = +e)) return !1;
    switch (t) {
      case "http":
      case "ws":
        return 80 !== e;

      case "https":
      case "wss":
        return 443 !== e;

      case "ftp":
        return 21 !== e;

      case "gopher":
        return 70 !== e;

      case "file":
        return !1;
    }
    return 0 !== e;
};