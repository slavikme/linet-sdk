import fetch from 'node-fetch';
import { Item, ItemCreateResult, ItemOptions } from "../index";
export declare class Linet {
    loginData: {
        login_id: any;
        login_hash: any;
        login_company: any;
    };
    fetchFunction: any;
    constructor(login_id: any, login_hash: any, login_company: any, fetchFunction?: typeof fetch);
    createDocument(documentType: any, customerName: any, options?: any): Promise<any>;
    createAccount(accountType: any, name: any, options?: any): Promise<any>;
    createItem(sku: any, name: any, options?: ItemOptions): Promise<ItemCreateResult>;
    getItemBySKU(sku: string): Promise<Item>;
    getItemById(itemId: number): Promise<Item>;
    getAccountByEmail(email: string, filter?: any): Promise<any>;
    searchAccounts(filter: any): Promise<any>;
    searchItems(filter: ItemOptions): Promise<Item[]>;
}
