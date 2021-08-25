var keyMirror = function(r) {
    var e, o = {};
    if (!(r instanceof Object) || Array.isArray(r)) throw new Error("keyMirror(...): Argument must be an object.");
    for (e in r) r.hasOwnProperty(e) && (o[e] = e);
    return o;
};

module.exports = keyMirror;