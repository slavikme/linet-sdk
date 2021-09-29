import fetch from 'node-fetch';
import { Item, Item2, ItemCreateResult, ItemOptions, ItemOptions2, LoginData } from "../index";
export declare class Linet {
    loginData: LoginData;
    fetchFunction: any;
    constructor(login_id: any, login_hash: any, login_company: any, fetchFunction?: typeof fetch);
    createDocument(documentType: any, customerName: any, options?: any): Promise<unknown>;
    createAccount(accountType: any, name: any, options?: any): Promise<unknown>;
    createItem(sku: any, name: any, options?: ItemOptions): Promise<ItemCreateResult>;
    getItemBySKU(sku: string): Promise<Item2 | undefined>;
    getItemById(itemId: number): Promise<Item>;
    getAccountByEmail(email: string, filter?: any): Promise<{
        [prop: string]: unknown;
    }>;
    searchAccounts(filter: any): Promise<{
        [prop: string]: unknown;
    }[]>;
    searchItems(filter: ItemOptions2): Promise<Item2[]>;
}
