import {
    LINET_ERROR_CODE_NOT_FOUND, ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW,
    COMMAND_COMPANY, COMMAND_USER, COMMAND_LANGUAGE, COMMAND_ACCCOUNTRY, COMMAND_BANKBOOK, COMMAND_BANKNAME,
    COMMAND_SETTINGS, COMMAND_ACCOUNTS, COMMAND_ACCTYPE, COMMAND_ACCID6111, COMMAND_ACCHIST, COMMAND_CURRATES,
    COMMAND_DOCS, COMMAND_DOCTYPE, COMMAND_ITEM, COMMAND_ITEMCATEGORY, COMMAND_INVENTORYITEM, COMMAND_ITEMUNIT,
    COMMAND_ITEMVATCAT, COMMAND_USERINCOMEMAP, COMMAND_TRANSACTION, COMMAND_FILES, COMMAND_PAYMENTTYPE
} from './consts';
import {isEmpty, validateActionId, validateCommand, validateCommandAction} from "./data-validation";

const STATUS_CODE_OK = 200;

/**
 * Send an API call with the provided data.
 *
 * @param {function(string,object):Promise} fetch <p style="margin-left:30px">The fetch function to perform the request.<br/>
 *     <i>For more info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch</a></i></p>
 * @param {{login_id:string,login_hash:string,login_company:number}} loginData <p style="margin-left:30px">The authentication data required to execute the API call.</p>
 * @param {ACTION_CREATE|ACTION_UPDATE|ACTION_DELETE|ACTION_SEARCH|ACTION_LIST|ACTION_VIEW} action <p style="margin-left:30px">The action to do. Can be:<ul style="margin-left:50px">
 *      <li><b><code>'search'</code></b> - Search for records</li>
 *      <li><b><code>'list'</code></b> - Get all records</li>
 *      <li><b><code>'view'</code></b> - Get specific record</li>
 *      <li><b><code>'create'</code></b> - Create a new record</li>
 *      <li><b><code>'update'</code></b> - Update an existing record</li>
 *      <li><b><code>'delete'</code></b> - Delete a record</li></ul></p>
 * @param {COMMAND_COMPANY|COMMAND_USER|COMMAND_LANGUAGE|COMMAND_ACCCOUNTRY|COMMAND_BANKBOOK|COMMAND_BANKNAME|COMMAND_SETTINGS|COMMAND_ACCOUNTS|COMMAND_ACCTYPE|COMMAND_ACCID6111|COMMAND_ACCHIST|COMMAND_CURRATES|COMMAND_DOCS|COMMAND_DOCTYPE|COMMAND_ITEM|COMMAND_ITEMCATEGORY|COMMAND_INVENTORYITEM|COMMAND_ITEMUNIT|COMMAND_ITEMVATCAT|COMMAND_USERINCOMEMAP|COMMAND_TRANSACTION|COMMAND_FILES|COMMAND_PAYMENTTYPE} command
 *      <p style="margin-left:30px">The name of the command. Can be:<ul style="margin-left:50px">
 *      <li><b><code>'company'</code></b> - Manage the companies in an instance.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'user'</code></b> - Manage the users in an instance.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'language'</code></b> - Manage the available languages in an instance.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'acccountry'</code></b> - Manage the available account countries in an instance.
 *          This model should not be used as the list is legal obligatory by the israeli tax authorities.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'bankbook'</code></b> - Manage Bank Book.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'bankname'</code></b> - Manage available Banks in a company.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'settings'</code></b> - Manage Company Settings (name,address,phone numbers,email,zip code,tax rate…..)
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'accounts'</code></b> - Manage Accounts.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'acctype'</code></b> - Manage Account Types(customer,supplier,bank…)
 *          USE WITH CAUTION! If account type is deleted some functionality will might get lost.
 *          For example: If account type “customers” is deleted, accounts belonged to this type can not
 *          be displayed anywhere within the application, although data of customer details as well as
 *          customers’ transactions would not be lost, new accounts can not be categorized as customer account etc.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'accid6111'</code></b> - Manage Account 6111, Israeli tax authority definition.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'acchist'</code></b> - Manage Account Connection History.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'currates'</code></b> - Manage Currency rates.
 *          <p><i>Supported actions: <code>create</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'docs'</code></b> - Manage Documents.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'doctype'</code></b> - Manage Document types(Invoice,receipt…).
 *          USE WITH CAUTION! If doctype is deleted, some functionality will might get lost.
 *          For example: If document type: invoices, is deleted, no invoices will be produced by the application anymore.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'item'</code></b> - Manage items (products).
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'itemcategory'</code></b> - Manage Item Categories.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'inventoryitem'</code></b> - Manage inventory item transactions between warehouses,
 *          incoming and outgoing items transactions from /to clients/suppliers.
 *          <p><i>Supported actions: <code>create</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'itemunit'</code></b> - Manage Item Unit Types(cm,kg,mg,gb,mhz…)
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'itemvatcat'</code></b> - Manage VAT category for an item (useful only in countries with differential vat system by categories).
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'userincomemap'</code></b> - Mapping of item vat category to specific income account.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'transaction'</code></b> - Manage transactions in a company.
 *          <p><i>Supported actions: <code>create</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'files'</code></b> - Manage files in company.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 *      <li><b><code>'paymenttype'</code></b> - Manage files in company.
 *          <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></ul></p></p>
 * @param {number|object} [id_or_data] <p style="margin-left:30px">The appropriate data object according to the call.
 *             For example, if 'delete' action is provided, most likely this will be an empty object,
 *             as there is no additional data needed.</p>
 * @param {object} [data] <p style="margin-left:30px">The ID of the record to perform an action on.
 *           If action 'delete', 'update', 'view', 'print' or 'send' is provided, this value is required.</p>
 */
export const callAPI = async (fetch, loginData, action, command, id_or_data = undefined, data = {}) => {
    let id;
    if ( isNaN(Number(id_or_data)) )
        data = id_or_data;
    else id = Number(id_or_data);
    const {url, request} = buildRequestData(loginData, action, command, data, id);
    return fetch(url, request).then(r => r.json()).then(handleResult);
}

/**
 * Build request data for
 * @param loginData
 * @param action
 * @param command
 * @param data
 * @param id
 * @returns {{request: {headers: {"Content-Type": string}, method: string, body: string}, url: string}}
 */
export const buildRequestData = (loginData, action, command, data = {}, id = undefined) => {
    const url = buildURL(
        validateCommand(command),
        validateCommandAction(command, action),
        validateActionId(action, id)
    );
    const request = buildRequest(loginData, data);
    return {url, request};
}

const handleResult = ({status, text, body, errorCode}) => {
    if ( status !== STATUS_CODE_OK )
        throw `Linet API result error: {status: '${status}', text: '${text}', body: '${body}', errorCode: ${errorCode}}`;
    if ( errorCode === LINET_ERROR_CODE_NOT_FOUND ) {
        return [];
    }
    return errorCode ? {error: body, code: errorCode} : body;
}

/**
 * Build Linet API URL.
 */
const buildURL = (command, action, id = undefined) => `https://app.linet.org.il/api/${action}/${command}${id?`/${id}`:''}`;

/**
 * Build fetch request object.
 * @param {{login_id:string,login_hash:string,login_company:number}} loginData The authentication data required to execute the API call.
 * @param {object} additionalData
 */
const buildRequest = (loginData, additionalData= {}) => ({
    method: "POST",
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
        ...loginData,
        ...normalizeData(additionalData),
    })
})

/**
 * Remove any empty values from data object.
 * @param {object} data
 * @returns {object}
 */
const normalizeData = data =>
    Object.keys(data).reduce((obj, key) => (!isEmpty(data[key]) && (obj[key] = data[key]), obj), {});

