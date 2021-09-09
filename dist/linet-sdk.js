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
exports.Linet = void 0;
var node_fetch_1 = require("node-fetch");
var consts_1 = require("./consts");
var dispatcher_1 = require("./dispatcher");
var data_validation_1 = require("./data-validation");
var Linet = (function () {
    function Linet(login_id, login_hash, login_company, fetchFunction) {
        if (fetchFunction === void 0) { fetchFunction = node_fetch_1.default; }
        this.loginData = {
            login_id: null,
            login_hash: null,
            login_company: null,
        };
        this.loginData = { login_id: login_id, login_hash: login_hash, login_company: login_company };
        this.fetchFunction = fetchFunction;
    }
    Linet.prototype.createDocument = function (documentType, customerName, options) {
        if (options === void 0) { options = {}; }
        options = (0, data_validation_1.validateObject)(__assign({ doctype: (0, data_validation_1.validateDocumentType)(documentType, 'Linet.createDocument:documentType'), company: (0, data_validation_1.validateNonEmptyString)(customerName, 'Linet.createDocument:customerName'), status: consts_1.DOCUMENT_STATUS_OPENED, account_id: consts_1.DEFAULT_ACCOUNT_ID, currency_id: consts_1.CURRENCY_ILS }, options));
        options.doctype = (0, data_validation_1.validateDocumentType)(options.doctype, 'Linet.createDocument:options.doctype');
        options.company = (0, data_validation_1.validateNonEmptyString)(options.company, 'Linet.createDocument:options.company');
        options.status = (0, data_validation_1.validateDocumentStatus)(options.status, 'Linet.createDocument:options.status');
        options.account_id = (0, data_validation_1.validateId)(options.account_id, 'Linet.createDocument:options.account_id', consts_1.DEFAULT_ACCOUNT_ID);
        options.currency_id = (0, data_validation_1.validateCurrency)(options.currency_id, 'Linet.createDocument:options.currency_id');
        return (0, dispatcher_1.callAPI)(this.fetchFunction, this.loginData, consts_1.ACTION_CREATE, consts_1.COMMAND_DOCS, options);
    };
    Linet.prototype.createAccount = function (accountType, name, options) {
        if (options === void 0) { options = {}; }
        options = (0, data_validation_1.validateObject)(__assign({ type: (0, data_validation_1.validateAccountType)(accountType, 'Linet.createAccount:accountType'), name: (0, data_validation_1.validateNonEmptyString)(name, 'Linet.createAccount:name') }, options));
        options.type = (0, data_validation_1.validateAccountType)(options.type, 'Linet.createAccount:options.type');
        options.name = (0, data_validation_1.validateNonEmptyString)(options.name, 'Linet.createAccount:options.name');
        return (0, dispatcher_1.callAPI)(this.fetchFunction, this.loginData, consts_1.ACTION_CREATE, consts_1.COMMAND_ACCOUNTS, options);
    };
    Linet.prototype.createItem = function (sku, name, options) {
        if (options === void 0) { options = {}; }
        options = (0, data_validation_1.validateObject)(__assign({ sku: (0, data_validation_1.validateNonEmptyString)(sku, 'Linet.createItem:sku'), name: (0, data_validation_1.validateNonEmptyString)(name, 'Linet.createItem:name'), category_id: consts_1.DEFAULT_CATEGORY_ID, unit_id: consts_1.DEFAULT_ITEM_UNIT_ID, currency_id: consts_1.CURRENCY_ILS, parent_item_id: consts_1.DEFAULT_PARENT_ITEM_ID, isProduct: consts_1.YES, stockType: consts_1.DEFAULT_ITEM_STOCK_TYPE, itemVatCat_id: consts_1.DEFAULT_ITEM_VAT_CATEGORY_ID, saleprice: consts_1.DEFAULT_PRICE, vatIn: consts_1.NO }, options));
        options.sku = (0, data_validation_1.validateNonEmptyString)(options.sku, 'Linet.createItem:options.sku');
        options.category_id = (0, data_validation_1.validateId)(options.category_id, 'Linet.createItem:options.category_id', consts_1.DEFAULT_CATEGORY_ID);
        options.unit_id = (0, data_validation_1.validateId)(options.unit_id, 'Linet.createItem:options.unit_id', consts_1.DEFAULT_ITEM_UNIT_ID);
        options.currency_id = (0, data_validation_1.validateCurrency)(options.currency_id, 'Linet.createItem:options.unit_id');
        options.parent_item_id = (0, data_validation_1.validateId)(options.parent_item_id, 'Linet.createItem:options.parent_item_id', consts_1.DEFAULT_PARENT_ITEM_ID);
        options.isProduct = (0, data_validation_1.validateBoolean)(options.isProduct, 'Linet.createItem:options.isProduct');
        options.stockType = (0, data_validation_1.validateId)(options.stockType, 'Linet.createItem:options.stockType', consts_1.DEFAULT_ITEM_STOCK_TYPE);
        options.itemVatCat_id = (0, data_validation_1.validateId)(options.itemVatCat_id, 'Linet.createItem:options.itemVatCat_id', consts_1.DEFAULT_ITEM_VAT_CATEGORY_ID);
        options.saleprice = (0, data_validation_1.validatePrice)(options.saleprice, 'Linet.createItem:options.saleprice');
        options.vatIn = (0, data_validation_1.validateBoolean)(options.vatIn, 'Linet.createItem:options.vatIn');
        return (0, dispatcher_1.callAPI)(this.fetchFunction, this.loginData, consts_1.ACTION_CREATE, consts_1.COMMAND_ITEM, options);
    };
    Linet.prototype.getItemBySKU = function (sku) {
        (0, data_validation_1.validateSKU)(sku);
        return this.searchItems({ sku: sku }).then(function (items) {
            if (items.length)
                return items[0];
            return undefined;
        });
    };
    Linet.prototype.getItemById = function (itemId) {
        (0, data_validation_1.validateId)(itemId, 'Linet.getItemById:itemId');
        return (0, dispatcher_1.callAPI)(this.fetchFunction, this.loginData, consts_1.ACTION_VIEW, consts_1.COMMAND_ITEM, itemId);
    };
    Linet.prototype.getAccountByEmail = function (email, filter) {
        if (filter === void 0) { filter = {}; }
        (0, data_validation_1.validateEmailAddress)(email);
        return this.searchAccounts(__assign(__assign({}, filter), { email: email })).then(function (items) {
            if (items.length)
                return items[0];
            return undefined;
        });
    };
    Linet.prototype.searchAccounts = function (filter) {
        (0, data_validation_1.validateObject)(filter);
        return (0, dispatcher_1.callAPI)(this.fetchFunction, this.loginData, consts_1.ACTION_SEARCH, consts_1.COMMAND_ACCOUNTS, filter);
    };
    Linet.prototype.searchItems = function (filter) {
        (0, data_validation_1.validateObject)(filter);
        return (0, dispatcher_1.callAPI)(this.fetchFunction, this.loginData, consts_1.ACTION_SEARCH, consts_1.COMMAND_ITEM, filter);
    };
    return Linet;
}());
exports.Linet = Linet;
//# sourceMappingURL=linet-sdk.js.map