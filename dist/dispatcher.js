"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRequestData = exports.callAPI = void 0;
var consts_1 = require("./consts");
var data_validation_1 = require("./data-validation");
var STATUS_CODE_OK = 200;
function callAPI(fetch, loginData, action, command, id, data) {
    if (data === void 0) { data = {}; }
    if (isNaN(Number(id))) {
        data = id;
        id = undefined;
    }
    else
        id = Number(id);
    var _a = (0, exports.buildRequestData)(loginData, action, command, data, id), url = _a.url, request = _a.request;
    return fetch(url, request).then(function (r) { return r.json(); }).then(handleResult);
}
exports.callAPI = callAPI;
var buildRequestData = function (loginData, action, command, data, id) {
    if (data === void 0) { data = {}; }
    var url = buildURL((0, data_validation_1.validateCommand)(command), (0, data_validation_1.validateCommandAction)(command, action), (0, data_validation_1.validateActionId)(action, id));
    var request = buildRequest(loginData, data);
    return { url: url, request: request };
};
exports.buildRequestData = buildRequestData;
var handleResult = function (_a) {
    var status = _a.status, text = _a.text, body = _a.body, errorCode = _a.errorCode;
    if (status !== STATUS_CODE_OK)
        throw "Linet API result error: {status: '" + status + "', text: '" + text + "', body: '" + body + "', errorCode: " + errorCode + "}";
    if (errorCode === consts_1.LINET_ERROR_CODE_NOT_FOUND) {
        return [];
    }
    return errorCode ? { error: body, code: errorCode } : body;
};
var buildURL = function (command, action, id) {
    if (id === void 0) { id = undefined; }
    return "https://app.linet.org.il/api/" + action + "/" + command + (id ? "/" + id : '');
};
var buildRequest = function (loginData, additionalData) {
    if (additionalData === void 0) { additionalData = {}; }
    return ({
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(__assign(__assign({}, loginData), normalizeData(additionalData)))
    });
};
var normalizeData = function (data) {
    return Object.keys(data).reduce(function (obj, key) { return (!(0, data_validation_1.isEmpty)(data[key]) && (obj[key] = data[key]), obj); }, {});
};
//# sourceMappingURL=dispatcher.js.map