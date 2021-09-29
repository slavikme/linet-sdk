import {RequestInfo, RequestInit, Response} from 'node-fetch';
import {
  CURRENCY_ILS,
  CURRENCY_USD,
  CURRENCY_EUR,
  YES,
  NO,
  STOCK_TYPE_NO_STOCK,
  STOCK_TYPE_QUANTITY,
  STOCK_TYPE_INSTANCE,
  INCOME_ACCOUNT_SELL_PRODUCTS_ISRAEL,
  INCOME_ACCOUNT_SELL_SERVICES_ISRAEL,
  INCOME_ACCOUNT_SELL_PRODUCTS_ABROAD,
  INCOME_ACCOUNT_SELL_SERVICES_ABROAD,
  INCOME_ACCOUNT_SELL_ISRAEL_NO_VAT,
  INCOME_ACCOUNT_FROM_DONATION,
  ACTION_CREATE,
  ACTION_UPDATE,
  ACTION_DELETE,
  ACTION_SEARCH,
  ACTION_NEWSEARCH,
  ACTION_LIST,
  ACTION_VIEW,
  COMMAND_COMPANY,
  COMMAND_USER,
  COMMAND_LANGUAGE,
  COMMAND_ACCCOUNTRY,
  COMMAND_BANKBOOK,
  COMMAND_BANKNAME,
  COMMAND_SETTINGS,
  COMMAND_ACCOUNTS,
  COMMAND_ACCTYPE,
  COMMAND_ACCID6111,
  COMMAND_ACCHIST,
  COMMAND_CURRATES,
  COMMAND_DOCS,
  COMMAND_DOCTYPE,
  COMMAND_ITEM,
  COMMAND_ITEMCATEGORY,
  COMMAND_INVENTORYITEM,
  COMMAND_ITEMUNIT,
  COMMAND_ITEMVATCAT,
  COMMAND_USERINCOMEMAP,
  COMMAND_TRANSACTION,
  COMMAND_FILES,
  COMMAND_PAYMENTTYPE
} from './src';

type CurrencyId = typeof CURRENCY_ILS | typeof CURRENCY_USD | typeof CURRENCY_EUR;
type YesNo = typeof YES | typeof NO;
type StockType = typeof STOCK_TYPE_NO_STOCK | typeof STOCK_TYPE_QUANTITY | typeof STOCK_TYPE_INSTANCE;
type IncomeAccount = typeof INCOME_ACCOUNT_SELL_PRODUCTS_ISRAEL | typeof INCOME_ACCOUNT_SELL_SERVICES_ISRAEL |
  typeof INCOME_ACCOUNT_SELL_PRODUCTS_ABROAD | typeof INCOME_ACCOUNT_SELL_SERVICES_ABROAD |
  typeof INCOME_ACCOUNT_SELL_ISRAEL_NO_VAT | typeof INCOME_ACCOUNT_FROM_DONATION;
type Action = typeof ACTION_CREATE | typeof ACTION_UPDATE | typeof ACTION_DELETE | typeof ACTION_SEARCH |
  typeof ACTION_LIST | typeof ACTION_VIEW | typeof ACTION_NEWSEARCH;
type Command = typeof COMMAND_COMPANY | typeof COMMAND_USER | typeof COMMAND_LANGUAGE |
  typeof COMMAND_ACCCOUNTRY | typeof COMMAND_BANKBOOK | typeof COMMAND_BANKNAME | typeof COMMAND_SETTINGS |
  typeof COMMAND_ACCOUNTS | typeof COMMAND_ACCTYPE | typeof COMMAND_ACCID6111 | typeof COMMAND_ACCHIST |
  typeof COMMAND_CURRATES | typeof COMMAND_DOCS | typeof COMMAND_DOCTYPE | typeof COMMAND_ITEM |
  typeof COMMAND_ITEMCATEGORY | typeof COMMAND_INVENTORYITEM | typeof COMMAND_ITEMUNIT |
  typeof COMMAND_ITEMVATCAT | typeof COMMAND_USERINCOMEMAP | typeof COMMAND_TRANSACTION |
  typeof COMMAND_FILES | typeof COMMAND_PAYMENTTYPE;
type LoginData = { login_id: string, login_hash: string, login_company: number };

interface ItemOptions {
  profitUp?: number;
  name?: string;
  itemVatCat_id?: number;
  bundleSize?: number | null;
  unit_id?: number;
  extcatnum?: string | null;
  sku?: string;
  manufacturer?: string | null;
  saleprice?: number | string;
  currency_id?: CurrencyId;
  vatIn?: YesNo;
  ammount?: number | string;
  owner?: number;
  category_id?: number;
  parent_item_id?: number;
  isProduct?: YesNo;
  profit?: number;
  purchaseprice?: number | string;
  purchase_currency_id?: CurrencyId;
  pvatIn?: YesNo;
  pic?: string;
  description?: string;
  stockType?: StockType;
  income_acc?: IncomeAccount;
  active?: YesNo;
  priceLock?: YesNo;
  warranty?: number | null;
  parent_item_uuid?: string | null;
}

interface ItemOptions2 extends ItemOptions {
  [eavField: `eav${number}`]: string;
}

interface Item extends ItemOptions {
  id: number;
  uuid: string;
  saleprice: string;
  ammount: string;
  purchaseprice: string;
  modified: string | null;
  created: string;
  account_uuid: string | null;
  api: YesNo;
  scalable: YesNo;
}

interface PriceListItem {
  pricelist_id: number;
  item_id: number;
  item_uuid: string | null;
  price: `${number}`;
  vatIn: YesNo;
  percentage: number | null;
  currency_id: CurrencyId;
}

interface Item2 extends Item {
  properties: {
    [key: `${number}`]: string
  };
  prices: PriceListItem[];
}

interface ItemCreateResult extends ItemOptions {
  id: number;
  uuid: string;
  saleprice: number;
  ammount?: number;
  purchaseprice: number;
  created: {
    expression: 'NOW()';
    params: []
  };
  account_uuid: string | null;
  api: YesNo;
  scalable: YesNo;
}

interface ItemUpdateResult extends ItemOptions {
  id: number;
  uuid: string;
  saleprice: string;
  ammount: string;
  purchaseprice: string;
  modified: {
    expression: 'NOW()';
    params: []
  };
  created: string;
  account_uuid: string | null;
  api: YesNo;
  scalable: YesNo;
}

type FetchFunction = (url: RequestInfo, init?: RequestInit) => Promise<Response>;

// export class Linet {
//   constructor(login_id: string, login_hash: string, login_company: number, fetchFunction?: FetchFunction);
//   createDocument(documentType: number, customerName: string, options?: {any}): Promise<{any}>;
//   createAccount(accountType: number, name: string, options?: {any}): Promise<{any}>;
//   createItem(sku: string, name: string, options?: ItemOptions): Promise<ItemCreateResult>;
//   getItemBySKU(sku: string): Promise<Item>;
//   getItemById(itemId: number): Promise<Item>;
//   getAccountByEmail(email: string, filter?: {any}): Promise<{any}>;
//   searchAccounts(filter: {any}): Promise<{any}>;
//   searchItems(filter: ItemOptions): Promise<Item[]>;
// }
