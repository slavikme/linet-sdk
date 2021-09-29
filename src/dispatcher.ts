import {
  LINET_ERROR_CODE_NOT_FOUND, ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST,
  ACTION_VIEW, ACTION_NEWSEARCH
} from './consts';
import {isEmpty, validateActionId, validateCommand, validateCommandAction} from "./data-validation";
import {FetchFunction, Action, Command, LoginData} from "../index";

const STATUS_CODE_OK = 200;

/**
 * Send an API call with the provided data.
 *
 * @param fetch       The fetch function to perform the request.<br/><i>For more info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch</a></i>
 * @param loginData   The authentication data required to execute the API call.
 * @param action      The action to do.
 * @param command     The name of the command.
 */
export function callAPI<T>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_LIST, command: Command): Promise<T[]>;

/**
 * Send an API call with the provided data.
 *
 * @param fetch       The fetch function to perform the request.<br/><i>For more info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch</a></i>
 * @param loginData   The authentication data required to execute the API call.
 * @param action      The action to do.
 * @param command     The name of the command.
 * @param record      The object defines properties of the new record.
 */
export function callAPI<T, R>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_CREATE, command: Command, record: R): Promise<T>;

/**
 * Send an API call with the provided data.
 *
 * @param fetch       The fetch function to perform the request.<br/><i>For more info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch</a></i>
 * @param loginData   The authentication data required to execute the API call.
 * @param action      The action to do.
 * @param command     The name of the command.
 * @param filter      The object defines a filter to apply.
 */
export function callAPI<T, F>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_SEARCH, command: Command, filter: F): Promise<T[]>;
export function callAPI<T, F>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_NEWSEARCH, command: Command, filter: {query: F}): Promise<T[]>;

/**
 * Send an API call with the provided data.
 *
 * @param fetch       The fetch function to perform the request.<br/><i>For more info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch</a></i>
 * @param loginData   The authentication data required to execute the API call.
 * @param action      The action to do.
 * @param command     The name of the command.
 * @param id          The ID of the record to perform an action on.
 */
export function callAPI<T>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_VIEW, command: Command, id: number): Promise<T>;
export function callAPI(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_DELETE, command: Command, id: number): Promise<boolean>;

/**
 * Send an API call with the provided data.
 *
 * @param fetch       The fetch function to perform the request.<br/><i>For more info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch</a></i>
 * @param loginData   The authentication data required to execute the API call.
 * @param action      The action to do.
 * @param command     The name of the command.
 * @param id          The ID of the record to perform an action on.
 * @param fields      The fields to update in the record.
 */
export function callAPI<T, F>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_UPDATE, command: Command, id: number, fields: F): Promise<T>;

export function callAPI(fetch: FetchFunction, loginData: LoginData, action: Action, command: Command, id?: any, data: any = {}) {
  if (isNaN(Number(id))) {
    data = id;
    id = undefined;
  } else id = Number(id);
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
export const buildRequestData = (loginData: LoginData, action: Action, command: Command, data: any = {}, id?: number) => {
  const url = buildURL(
    validateCommand(command),
    validateCommandAction(command, action),
    validateActionId(action, id)
  );
  const request = buildRequest(loginData, data);
  return {url, request};
}

const handleResult = ({status, text, body, errorCode}) => {
  if (status !== STATUS_CODE_OK)
    throw `Linet API result error: {status: '${status}', text: '${text}', body: '${body}', errorCode: ${errorCode}}`;
  if (errorCode === LINET_ERROR_CODE_NOT_FOUND) {
    return [];
  }
  return errorCode ? {error: body, code: errorCode} : body;
}

/**
 * Build Linet API URL.
 */
const buildURL = (command, action, id = undefined) => `https://app.linet.org.il/api/${action}/${command}${id ? `/${id}` : ''}`;

/**
 * Build fetch request object.
 * @param {{login_id:string,login_hash:string,login_company:number}} loginData The authentication data required to execute the API call.
 * @param {object} additionalData
 */
const buildRequest = (loginData, additionalData = {}) => ({
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

