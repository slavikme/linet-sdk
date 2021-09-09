import * as consts from './consts';
import validator from "validator";
import {ACTION_DELETE, ACTION_UPDATE, ACTION_VIEW, AVAILABLE_ACTIONS_PER_COMMAND, DEFAULT_PRICE} from "./consts";

const allowedDocumentTypes = [];
const allowedDocumentStatuses = [];
const allowedCurrencyIds = [];

Object.keys(consts).forEach(keyName => {
    switch ( true ) {
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

export class DataValidationError extends Error {
    dataName;
    dataValue;
    constructor(dataName, dataValue) {
        super(`Invalid data provided for '${dataName}' with value ${dataValue} (${typeof dataValue})`);

        this.dataName = dataName;
        this.dataValue = dataValue;
    }
};


/**
 * @param {number} documentType
 * @param {string} valueName The name of the value to display in error messages.
 * @returns {number}
 */
export const validateDocumentType = (documentType, valueName = 'documentType') => {
    documentType = Number(documentType);
    if ( !allowedDocumentTypes.includes(documentType) )
        throw new DataValidationError(valueName, documentType);
    return documentType;
};

/**
 * @param {string} value
 * @param {string} valueName The name of the value to display in error messages.
 * @returns {string}
 */
export const validateNonEmptyString = (value, valueName = 'value') => {
    if ( !value || typeof value !== 'string' )
        throw new DataValidationError(valueName, value);
    return value;
};

/**
 * @param {number} id
 * @param {string} valueName The name of the value to display in error message.
 * @param {number} startFrom The very first or default ID that the sequence starts from.
 * @returns {number}
 */
export const validateId = (id, valueName = 'id', startFrom = 1) => {
    id = Number(id);
    if ( isNaN(id) || id < startFrom || Math.round(id) !== id )
        throw new DataValidationError(valueName, id);
    return id;
};

/**
 * @param {number|boolean|string} value
 * @param {string} valueName The name of the value to display in error message.
 * @returns {number}
 */
export const validateBoolean = (value, valueName = 'value') => {
    value = Number(value);
    if ( isNaN(value) || ![0,1].includes(value) )
        throw new DataValidationError(valueName, value);
    return value;
};

/**
 * @param {number} documentStatus
 * @param {string} valueName The name of the value to display in error message.
 * @returns {number}
 */
export const validateDocumentStatus = (documentStatus, valueName = 'documentStatus') => {
    documentStatus = Number(documentStatus);
    if ( !allowedDocumentStatuses.includes(documentStatus) )
        throw new DataValidationError(valueName, documentStatus);
    return documentStatus;
};

/**
 * @param {CURRENCY_ILS|CURRENCY_USD|CURRENCY_EUR} currency
 * @param {string} valueName The name of the value to display in error messages.
 * @returns {string}
 */
export const validateCurrency = (currency, valueName = 'currency') => {
    currency = currency.toUpperCase();
    if ( !allowedCurrencyIds.includes(currency) )
        throw new DataValidationError(valueName, currency);
    return currency;
};

/**
 * @param {number} accountType
 * @param {string} valueName The name of the value to display in error messages.
 * @returns {number}
 */
export const validateAccountType = (accountType, valueName = 'accountType') => {
    accountType = Number(accountType);
    if ( !allowedDocumentTypes.includes(accountType) )
        throw new DataValidationError(valueName, accountType);
    return accountType;
};

/**
 * @param {string} emailAddress
 * @param {string} valueName The name of the value to display in error messages.
 * @returns {string}
 */
export const validateEmailAddress = (emailAddress, valueName = 'emailAddress') => {
    if ( !emailAddress || typeof emailAddress !== 'string' || !validator.isEmail(emailAddress) )
        throw new DataValidationError(valueName, emailAddress);
    return emailAddress;
};

/**
 * @param {string} sku
 * @param {string} valueName The name of the value to display in error messages.
 * @returns {string}
 */
export const validateSKU = (sku, valueName = 'sku') => {
    if ( !sku || typeof sku !== 'string' )
        throw new DataValidationError(valueName, sku);
    return sku;
};

/**
 * @param {number} price
 * @param {string} valueName The name of the value to display in error message.
 * @returns {number}
 */
export const validatePrice = (price, valueName = 'price') => {
    price = Number(price);
    if ( isNaN(price) || price < 0 && price !== DEFAULT_PRICE )
        throw new DataValidationError(valueName, price);
    return price;
};

/**
 * @param {object} value
 * @param {string} valueName The name of the value to display in error message.
 * @returns {object}
 */
export const validateObject = (value, valueName = 'object') => {
    if ( typeof value !== 'object' )
        throw new DataValidationError(valueName, value);
    return value;
};

/**
 * Check whether the value is empty
 * @param {any} value
 * @returns {boolean}
 */
export const isEmpty = value => [void 0, null, ''].includes(value);

/**
 * Validate an normalize the ID.
 * @param {string} action
 * @param {number} id
 * @returns {number}
 */
export const validateActionId = (action, id) => {
    if ( [ACTION_DELETE, ACTION_UPDATE, ACTION_VIEW].includes(action) )
        return validateId(id, 'validateActionId:id');
};

/**
 * Validate command name.
 * @param {string} command
 * @param {string} valueName
 * @returns {string}
 */
export const validateCommand  = (command, valueName = 'command') => {
    if ( !Object.keys(AVAILABLE_ACTIONS_PER_COMMAND).includes(command) )
        throw new DataValidationError(valueName, command);
    return command;
};

/**
 * Validate action name according to the command.
 * @param {string} command
 * @param {string} action
 * @returns {string}
 */
export const validateCommandAction = (command, action) => {
    command = validateCommand(command);
    if ( !AVAILABLE_ACTIONS_PER_COMMAND[command].includes(action) )
        throw new Error(`The action '${action}' is not supported for command '${command}'`)
    return action;
};
