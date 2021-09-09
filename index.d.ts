import {RequestInfo, RequestInit, Response} from 'node-fetch';
import {
  CURRENCY_ILS, CURRENCY_USD, CURRENCY_EUR, YES, NO,
  STOCK_TYPE_NO_STOCK, STOCK_TYPE_QUANTITY, STOCK_TYPE_INSTANCE,
  INCOME_ACCOUNT_SELL_PRODUCTS_ISRAEL, INCOME_ACCOUNT_SELL_SERVICES_ISRAEL,
  INCOME_ACCOUNT_SELL_PRODUCTS_ABROAD, INCOME_ACCOUNT_SELL_SERVICES_ABROAD,
  INCOME_ACCOUNT_SELL_ISRAEL_NO_VAT, INCOME_ACCOUNT_FROM_DONATION,
} from './consts';

type CurrencyId = CURRENCY_ILS | CURRENCY_USD | CURRENCY_EUR;
type YesNo = YES | NO;
type StockType = STOCK_TYPE_NO_STOCK | STOCK_TYPE_QUANTITY | STOCK_TYPE_INSTANCE;
type IncomeAccount = INCOME_ACCOUNT_SELL_PRODUCTS_ISRAEL | INCOME_ACCOUNT_SELL_SERVICES_ISRAEL | INCOME_ACCOUNT_SELL_PRODUCTS_ABROAD | INCOME_ACCOUNT_SELL_SERVICES_ABROAD | INCOME_ACCOUNT_SELL_ISRAEL_NO_VAT | INCOME_ACCOUNT_FROM_DONATION;

interface ItemOptions {
  profitUp?: number,
  name?: string,
  itemVatCat_id?: number,
  bundleSize?: number | null,
  unit_id?: number,
  extcatnum?: string | null,
  sku?: string,
  manufacturer?: string | null,
  saleprice?: number | string,
  currency_id?: CurrencyId,
  vatIn?: YesNo,
  ammount?: number | string,
  owner?: number,
  category_id?: number,
  parent_item_id?: number,
  isProduct?: YesNo,
  profit?: number,
  purchaseprice?: number | string,
  purchase_currency_id?: CurrencyId,
  pvatIn?: YesNo,
  pic?: string,
  description?: string,
  stockType?: StockType,
  income_acc?: IncomeAccount,
  active?: YesNo,
  priceLock?: YesNo,
  warranty?: number | null
  parent_item_uuid?: string | null,
}

interface Item extends ItemOptions {
  id: number,
  uuid: string,
  saleprice: string,
  ammount: string,
  purchaseprice: string,
  modified: string | null,
  created: string,
  account_uuid: string | null,
  api: YesNo,
  scalable: YesNo
}

interface ItemCreateResult extends ItemOptions {
  id: number,
  uuid: string,
  saleprice: number,
  ammount?: number,
  purchaseprice: number,
  created: {
    expression: 'NOW()',
    params: []
  },
  account_uuid: string | null,
  api: YesNo,
  scalable: YesNo
}

interface ItemUpdateResult extends ItemOptions {
  id: number,
  uuid: string,
  saleprice: string,
  ammount: string,
  purchaseprice: string,
  modified: {
    expression: 'NOW()',
    params: []
  },
  created: string,
  account_uuid: string | null,
  api: YesNo,
  scalable: YesNo
}

type FetchFunction = (url: RequestInfo, init?: RequestInit) => Promise<Response>;

export class Linet {
  constructor(login_id: string, login_hash: string, login_company: number, fetchFunction?: FetchFunction);
  createDocument(documentType: number, customerName: string, options?: {any}): Promise<{any}>;
  createAccount(accountType: number, name: string, options?: {any}): Promise<{any}>;
  createItem(sku: string, name: string, options?: ItemOptions): Promise<ItemCreateResult>;
  getItemBySKU(sku: string): Promise<Item>;
  getItemById(itemId: number): Promise<Item>;
  getAccountByEmail(email: string, filter?: {any}): Promise<{any}>;
  searchAccounts(filter: {any}): Promise<{any}>;
  searchItems(filter: ItemOptions): Promise<Item[]>;
}
