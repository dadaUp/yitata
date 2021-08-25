Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = configStore;

var _redux = require("B4184B62C9B4369CD27E2365AE5428F4.js"), _index = require("3A703047C9B4369C5C1658402A7428F4.js"), _index2 = _interopRequireDefault(_index), _reduxLogger = require("24D1E162C9B4369C42B789651C6428F4.js"), _index3 = require("144E08C4C9B4369C722860C3340528F4.js"), _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var middlewares = [ _index2.default, (0, _reduxLogger.createLogger)() ];

function configStore() {
    return (0, _redux.createStore)(_index4.default, _redux.applyMiddleware.apply(void 0, middlewares));
}