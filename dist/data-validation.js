"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCommandAction = exports.validateCommand = exports.validateActionId = exports.isEmpty = exports.validateObject = exports.validatePrice = exports.validateSKU = exports.validateEmailAddress = exports.validateAccountType = exports.validateCurrency = exports.validateDocumentStatus = exports.validateBoolean = exports.validateId = exports.validateNonEmptyString = exports.validateDocumentType = exports.DataValidationError = void 0;
var consts = require("./consts");
var validator_1 = require("validator");
var consts_1 = require("./consts");
var allowedDocumentTypes = [];
var allowedDocumentStatuses = [];
var allowedCurrencyIds = [];
Object.keys(consts).forEach(function (keyName) {
    switch (true) {
        case /^ACCOUNT_TYPE_/.test(keyName):
            allowedDocumentTypes.push(consts[keyName]);
            break;
        case /^DOCUMENT_STATUS_/.test(keyName):
            allowedDocumentStatuses.push(consts[keyName]);
            break;
        case /^CURRENCY_[A-Z]{3}$/.test(keyName):
            allowedCurrencyIds.push(consts[keyName]);
            break;
    }
});
var DataValidationError = (function (_super) {
    __extends(DataValidationError, _super);
    function DataValidationError(dataName, dataValue) {
        var _this = _super.call(this, "Invalid data provided for '" + dataName + "' with value " + dataValue + " (" + typeof dataValue + ")") || this;
        _this.dataName = dataName;
        _this.dataValue = dataValue;
        return _this;
    }
    return DataValidationError;
}(Error));
exports.DataValidationError = DataValidationError;
;
var validateDocumentType = function (documentType, valueName) {
    if (valueName === void 0) { valueName = 'documentType'; }
    documentType = Number(documentType);
    if (!allowedDocumentTypes.includes(documentType))
        throw new DataValidationError(valueName, documentType);
    return documentType;
};
exports.validateDocumentType = validateDocumentType;
var validateNonEmptyString = function (value, valueName) {
    if (valueName === void 0) { valueName = 'value'; }
    if (!value || typeof value !== 'string')
        throw new DataValidationError(valueName, value);
    return value;
};
exports.validateNonEmptyString = validateNonEmptyString;
var validateId = function (id, valueName, startFrom) {
    if (valueName === void 0) { valueName = 'id'; }
    if (startFrom === void 0) { startFrom = 1; }
    id = Number(id);
    if (isNaN(id) || id < startFrom || Math.round(id) !== id)
        throw new DataValidationError(valueName, id);
    return id;
};
exports.validateId = validateId;
var validateBoolean = function (value, valueName) {
    if (valueName === void 0) { valueName = 'value'; }
    value = Number(value);
    if (isNaN(value) || ![0, 1].includes(value))
        throw new DataValidationError(valueName, value);
    return value;
};
exports.validateBoolean = validateBoolean;
var validateDocumentStatus = function (documentStatus, valueName) {
    if (valueName === void 0) { valueName = 'documentStatus'; }
    documentStatus = Number(documentStatus);
    if (!allowedDocumentStatuses.includes(documentStatus))
        throw new DataValidationError(valueName, documentStatus);
    return documentStatus;
};
exports.validateDocumentStatus = validateDocumentStatus;
var validateCurrency = function (currency, valueName) {
    if (valueName === void 0) { valueName = 'currency'; }
    currency = currency.toUpperCase();
    if (!allowedCurrencyIds.includes(currency))
        throw new DataValidationError(valueName, currency);
    return currency;
};
exports.validateCurrency = validateCurrency;
var validateAccountType = function (accountType, valueName) {
    if (valueName === void 0) { valueName = 'accountType'; }
    accountType = Number(accountType);
    if (!allowedDocumentTypes.includes(accountType))
        throw new DataValidationError(valueName, accountType);
    return accountType;
};
exports.validateAccountType = validateAccountType;
var validateEmailAddress = function (emailAddress, valueName) {
    if (valueName === void 0) { valueName = 'emailAddress'; }
    if (!emailAddress || typeof emailAddress !== 'string' || !validator_1.default.isEmail(emailAddress))
        throw new DataValidationError(valueName, emailAddress);
    return emailAddress;
};
exports.validateEmailAddress = validateEmailAddress;
var validateSKU = function (sku, valueName) {
    if (valueName === void 0) { valueName = 'sku'; }
    if (!sku || typeof sku !== 'string')
        throw new DataValidationError(valueName, sku);
    return sku;
};
exports.validateSKU = validateSKU;
var validatePrice = function (price, valueName) {
    if (valueName === void 0) { valueName = 'price'; }
    price = Number(price);
    if (isNaN(price) || price < 0 && price !== consts_1.DEFAULT_PRICE)
        throw new DataValidationError(valueName, price);
    return price;
};
exports.validatePrice = validatePrice;
var validateObject = function (value, valueName) {
    if (valueName === void 0) { valueName = 'object'; }
    if (typeof value !== 'object')
        throw new DataValidationError(valueName, value);
    return value;
};
exports.validateObject = validateObject;
var isEmpty = function (value) { return [void 0, null, ''].includes(value); };
exports.isEmpty = isEmpty;
var validateActionId = function (action, id) {
    if ([consts_1.ACTION_DELETE, consts_1.ACTION_UPDATE, consts_1.ACTION_VIEW].includes(action))
        return (0, exports.validateId)(id, 'validateActionId:id');
};
exports.validateActionId = validateActionId;
var validateCommand = function (command, valueName) {
    if (valueName === void 0) { valueName = 'command'; }
    if (!Object.keys(consts_1.AVAILABLE_ACTIONS_PER_COMMAND).includes(command))
        throw new DataValidationError(valueName, command);
    return command;
};
exports.validateCommand = validateCommand;
var validateCommandAction = function (command, action) {
    command = (0, exports.validateCommand)(command);
    if (!consts_1.AVAILABLE_ACTIONS_PER_COMMAND[command].includes(action))
        throw new Error("The action '" + action + "' is not supported for command '" + command + "'");
    return action;
};
exports.validateCommandAction = validateCommandAction;
//# sourceMappingURL=data-validation.js.map