import fetch from 'node-fetch'
import {
    DEFAULT_ACCOUNT_ID,
    CURRENCY_ILS,
    DOCUMENT_STATUS_OPENED,
    ACTION_VIEW,
    COMMAND_ITEM,
    ACTION_CREATE,
    COMMAND_ACCOUNTS,
    COMMAND_DOCS,
    ACTION_SEARCH,
    DEFAULT_CATEGORY_ID,
    DEFAULT_ITEM_UNIT_ID,
    DEFAULT_PARENT_ITEM_ID,
    YES,
    DEFAULT_ITEM_STOCK_TYPE,
    DEFAULT_ITEM_VAT_CATEGORY_ID,
    DEFAULT_PRICE, NO
} from './consts';
import { callAPI } from './dispatcher';
import {
    validateCurrency,
    validateDocumentStatus,
    validateDocumentType,
    validateObject,
    validateAccountType,
    validateEmailAddress,
    validateSKU,
    validateBoolean,
    validatePrice, validateNonEmptyString, validateId
} from './data-validation';
import {Item, ItemCreateResult, ItemOptions} from "../index";

export class Linet {
    /**
     * The login information to connect to Linet API.
     * @type {{login_id:string,login_hash:string,login_company:number}}
     */
    loginData = {
        login_id: null,
        login_hash: null,
        login_company: null,
    };

    /**
     * The 'fetch' function to use as a communication dispatcher.
     * @type {function(url: string, opts: object): Promise}
     */
    fetchFunction;

    /**
     * @param {string} login_id
     * @param {string} login_hash
     * @param {number} login_company
     * @param {function(url: string, options: object): Promise} fetchFunction
     */
    constructor(login_id, login_hash, login_company, fetchFunction = fetch) {
        this.loginData = {login_id, login_hash, login_company};
        this.fetchFunction = fetchFunction;
    }

    /**
     * @param {number} documentType
     * @param {string} customerName
     * @param {object} options
     *
     * @returns {Promise<object>}
     */
    createDocument(documentType, customerName, options: any = {}) {
        options = validateObject({
            doctype: validateDocumentType(documentType, 'Linet.createDocument:documentType'),
            company: validateNonEmptyString(customerName, 'Linet.createDocument:customerName'),
            status: DOCUMENT_STATUS_OPENED,
            account_id: DEFAULT_ACCOUNT_ID,
            currency_id: CURRENCY_ILS,
            ...options
        });

        options.doctype = validateDocumentType(options.doctype, 'Linet.createDocument:options.doctype');
        options.company = validateNonEmptyString(options.company, 'Linet.createDocument:options.company');
        options.status = validateDocumentStatus(options.status, 'Linet.createDocument:options.status');
        options.account_id = validateId(options.account_id, 'Linet.createDocument:options.account_id', DEFAULT_ACCOUNT_ID);
        options.currency_id = validateCurrency(options.currency_id, 'Linet.createDocument:options.currency_id');

        return callAPI(this.fetchFunction, this.loginData, ACTION_CREATE, COMMAND_DOCS, options);
    }

    /**
     * @param {number} accountType
     * @param {string} name
     * @param {object} options
     *
     * @returns {Promise}
     */
    createAccount(accountType, name, options: any = {}) {
        options = validateObject({
            type: validateAccountType(accountType, 'Linet.createAccount:accountType'),
            name: validateNonEmptyString(name, 'Linet.createAccount:name'),
            ...options
        });

        options.type = validateAccountType(options.type, 'Linet.createAccount:options.type');
        options.name = validateNonEmptyString(options.name, 'Linet.createAccount:options.name');

        return callAPI(this.fetchFunction, this.loginData, ACTION_CREATE, COMMAND_ACCOUNTS, options);
    }

    /**
     * Add new item.
     *
     * @param {string} sku
     * @param {string} name
     * @param {object} options
     * @returns {Promise<object>}
     */
    createItem(sku, name, options: ItemOptions = {}): Promise<ItemCreateResult> {
        options = validateObject({
            sku: validateNonEmptyString(sku, 'Linet.createItem:sku'),
            name: validateNonEmptyString(name, 'Linet.createItem:name'),
            category_id: DEFAULT_CATEGORY_ID,
            unit_id: DEFAULT_ITEM_UNIT_ID,
            currency_id: CURRENCY_ILS,
            parent_item_id: DEFAULT_PARENT_ITEM_ID,
            isProduct: YES,
            stockType: DEFAULT_ITEM_STOCK_TYPE,
            itemVatCat_id: DEFAULT_ITEM_VAT_CATEGORY_ID,
            saleprice: DEFAULT_PRICE,
            vatIn: NO,
            ...options
        });

        options.sku = validateNonEmptyString(options.sku, 'Linet.createItem:options.sku');
        options.category_id = validateId(options.category_id, 'Linet.createItem:options.category_id', DEFAULT_CATEGORY_ID);
        options.unit_id = validateId(options.unit_id, 'Linet.createItem:options.unit_id', DEFAULT_ITEM_UNIT_ID);
        options.currency_id = validateCurrency(options.currency_id, 'Linet.createItem:options.unit_id');
        options.parent_item_id = validateId(options.parent_item_id, 'Linet.createItem:options.parent_item_id', DEFAULT_PARENT_ITEM_ID);
        options.isProduct = validateBoolean(options.isProduct, 'Linet.createItem:options.isProduct');
        options.stockType = validateId(options.stockType, 'Linet.createItem:options.stockType', DEFAULT_ITEM_STOCK_TYPE);
        options.itemVatCat_id = validateId(options.itemVatCat_id, 'Linet.createItem:options.itemVatCat_id', DEFAULT_ITEM_VAT_CATEGORY_ID);
        options.saleprice = validatePrice(options.saleprice, 'Linet.createItem:options.saleprice');
        options.vatIn = validateBoolean(options.vatIn, 'Linet.createItem:options.vatIn');

        return callAPI(this.fetchFunction, this.loginData, ACTION_CREATE, COMMAND_ITEM, options);
    }

    /**
     * Retireve an item using an SKU.
     *
     * @param {string} sku
     *
     * @returns {Promise}
     */
    getItemBySKU(sku: string): Promise<Item> {
        validateSKU(sku);
        return this.searchItems({sku}).then(items => {
            if (items.length)
                return items[0];
            return undefined;
        });
    }

    /**
     * Retrieve an item using Linet's item ID.
     */
    getItemById(itemId: number): Promise<Item> {
        validateId(itemId, 'Linet.getItemById:itemId');
        return callAPI(this.fetchFunction, this.loginData, ACTION_VIEW, COMMAND_ITEM, itemId);
    }

    /**
     * Retrieve the very first found account with the provided email.
     *
     * @param {string} email
     * @param {object} filter
     *
     * @returns {Promise} If found, the Promise returns account's object. Otherwise, undefined.
     */
    getAccountByEmail(email: string, filter: any = {}) {
        validateEmailAddress(email);
        return this.searchAccounts({...filter, email}).then(items => {
            if (items.length)
                return items[0];
            return undefined;
        });
    }

    /**
     * Search for accounts using the provided filter object.
     *
     * @param filter
     *
     * @returns {Promise<*>}
     */
    searchAccounts(filter) {
        validateObject(filter);
        return callAPI(this.fetchFunction, this.loginData, ACTION_SEARCH, COMMAND_ACCOUNTS, filter);
    }

    /**
     * Search for items using the provided filter object.
     */
    searchItems(filter: ItemOptions): Promise<Item[]> {
        validateObject(filter);
        return callAPI(this.fetchFunction, this.loginData, ACTION_SEARCH, COMMAND_ITEM, filter);
    }
}
