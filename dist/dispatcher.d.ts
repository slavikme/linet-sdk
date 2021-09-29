import { ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW, ACTION_NEWSEARCH } from './consts';
import { FetchFunction, Action, Command, LoginData } from "../index";
export declare function callAPI<T>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_LIST, command: Command): Promise<T[]>;
export declare function callAPI<T, R>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_CREATE, command: Command, record: R): Promise<T>;
export declare function callAPI<T, F>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_SEARCH, command: Command, filter: F): Promise<T[]>;
export declare function callAPI<T, F>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_NEWSEARCH, command: Command, filter: {
    query: F;
}): Promise<T[]>;
export declare function callAPI<T>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_VIEW, command: Command, id: number): Promise<T>;
export declare function callAPI(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_DELETE, command: Command, id: number): Promise<boolean>;
export declare function callAPI<T, F>(fetch: FetchFunction, loginData: LoginData, action: typeof ACTION_UPDATE, command: Command, id: number, fields: F): Promise<T>;
export declare const buildRequestData: (loginData: LoginData, action: Action, command: Command, data?: any, id?: number) => {
    url: string;
    request: {
        method: string;
        headers: {
            'Content-Type': string;
        };
        body: string;
    };
};
