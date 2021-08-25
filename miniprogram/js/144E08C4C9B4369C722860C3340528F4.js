Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _redux = require("B4184B62C9B4369CD27E2365AE5428F4.js"), _account = require("768D7F51C9B4369C10EB1756D1F428F4.js"), _annual = require("AC151AB1C9B4369CCA7372B6AAF428F4.js"), _user = require("B83B5045C9B4369CDE5D3842F61528F4.js");

exports.default = (0, _redux.combineReducers)({
    annual: _annual.annual,
    accountInfo: _account.accountInfo,
    userInfo: _user.userInfo
});