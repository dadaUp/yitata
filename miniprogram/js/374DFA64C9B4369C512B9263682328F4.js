Object.defineProperty(exports, "__esModule", {
    value: !0
});

var eventMap = {};

function trigger(e, t) {
    var n = this, a = eventMap[e];
    a && a.forEach(function(e) {
        e.apply(n, [].concat(t));
    });
}

function on(e, t) {
    eventMap[e] ? eventMap[e].indexOf(t) < 0 && eventMap[e].push(t) : eventMap[e] = [ t ];
}

function off(e, t) {
    if (eventMap[e] && !(eventMap[e].indexOf(t) < 0)) {
        var n = eventMap[e].indexOf(t);
        eventMap[e].splice(n, 1);
    }
}

function clear(e) {
    e && eventMap[e] && (eventMap[e] = []);
}

exports.trigger = trigger, exports.on = on, exports.off = off, exports.clear = clear;