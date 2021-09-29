export declare const YES = 1, TRUE = 1;
export declare const NO = 0, FALSE = 0;
export declare const ACTION_CREATE = "create";
export declare const ACTION_UPDATE = "update";
export declare const ACTION_DELETE = "delete";
export declare const ACTION_SEARCH = "search";
export declare const ACTION_NEWSEARCH = "newsearch";
export declare const ACTION_LIST = "list";
export declare const ACTION_VIEW = "view";
export declare const COMMAND_COMPANY = "company";
export declare const COMMAND_USER = "user";
export declare const COMMAND_LANGUAGE = "language";
export declare const COMMAND_ACCCOUNTRY = "acccountry";
export declare const COMMAND_BANKBOOK = "bankbook";
export declare const COMMAND_BANKNAME = "bankname";
export declare const COMMAND_SETTINGS = "settings";
export declare const COMMAND_ACCOUNTS = "accounts";
export declare const COMMAND_ACCTYPE = "acctype";
export declare const COMMAND_ACCID6111 = "accid6111";
export declare const COMMAND_ACCHIST = "acchist";
export declare const COMMAND_CURRATES = "currates";
export declare const COMMAND_DOCS = "docs";
export declare const COMMAND_DOCTYPE = "doctype";
export declare const COMMAND_ITEM = "item";
export declare const COMMAND_ITEMCATEGORY = "itemcategory";
export declare const COMMAND_INVENTORYITEM = "inventoryitem";
export declare const COMMAND_ITEMUNIT = "itemunit";
export declare const COMMAND_ITEMVATCAT = "itemvatcat";
export declare const COMMAND_USERINCOMEMAP = "userincomemap";
export declare const COMMAND_TRANSACTION = "transaction";
export declare const COMMAND_FILES = "files";
export declare const COMMAND_PAYMENTTYPE = "paymenttype";
export declare const AVAILABLE_ACTIONS_PER_COMMAND: {
    company: string[];
    user: string[];
    language: string[];
    acccountry: string[];
    bankbook: string[];
    bankname: string[];
    settings: string[];
    accounts: string[];
    acctype: string[];
    accid6111: string[];
    acchist: string[];
    currates: string[];
    docs: string[];
    doctype: string[];
    item: string[];
    itemcategory: string[];
    inventoryitem: string[];
    itemunit: string[];
    itemvatcat: string[];
    userincomemap: string[];
    transaction: string[];
    files: string[];
    paymenttype: string[];
};
export declare const LINET_ERROR_CODE_NOT_FOUND = 1000;
export declare const LINET_ERROR_CODE_INVALID = 1001;
export declare const DEFAULT_ACCOUNT_ID = 113;
export declare const DEFAULT_CATEGORY_ID = 1;
export declare const DEFAULT_PARENT_ITEM_ID = 0;
export declare const DEFAULT_ITEM_STOCK_TYPE = 1;
export declare const DEFAULT_ITEM_UNIT_ID = 0;
export declare const DEFAULT_ITEM_VAT_CATEGORY_ID = 1;
export declare const DEFAULT_PRICE = 0;
export declare const DEFAULT_ITEM_ID = 1;
export declare const ACCOUNT_TYPE_CUSTOMER = 0;
export declare const ACCOUNT_TYPE_SUPPLIER = 1;
export declare const ACCOUNT_TYPE_EXPENSE = 2;
export declare const ACCOUNT_TYPE_INCOME = 3;
export declare const ACCOUNT_TYPE_ASSET_DEBIT = 4;
export declare const ACCOUNT_TYPE_CAPITAL_SURPLUS = 5;
export declare const ACCOUNT_TYPE_AUTHORITY = 6;
export declare const ACCOUNT_TYPE_BANK = 7;
export declare const ACCOUNT_TYPE_WAREHOUSE = 8;
export declare const ACCOUNT_TYPE_LEAD = 9;
export declare const ACCOUNT_TYPE_CONTACT = 10;
export declare const ACCOUNT_TYPE_WORKER = 11;
export declare const DOCUMENT_TYPE_INVOICE_RECEIPT = 9;
export declare const DOCUMENT_STATUS_OPENED = 1;
export declare const DOCUMENT_STATUS_CLOSED = 2;
export declare const CURRENCY_ILS = "ILS";
export declare const CURRENCY_USD = "USD";
export declare const CURRENCY_EUR = "EUR";
export declare const PAYMENT_TYPE_CASH = 1;
export declare const PAYMENT_TYPE_CHECK = 2;
export declare const PAYMENT_TYPE_CREDIT_CARD = 3;
export declare const PAYMENT_TYPE_BANK_TRANSFER = 4;
export declare const PAYMENT_TYPE_MANUAL_CREDIT_CARD = 5;
export declare const PAYMENT_TYPE_CREDIT_CARD_PAYMENTS = 6;
export declare const PAYMENT_TYPE_SOURCE_TAX = 7;
export declare const PAYMENT_TYPE_PAYPAL = 8;
export declare const DISCOUNT_TYPE_FIXED = 1;
export declare const DISCOUNT_TYPE_PERCENTAGE = 2;
export declare const STOCK_TYPE_NO_STOCK = 0;
export declare const STOCK_TYPE_QUANTITY = 1;
export declare const STOCK_TYPE_INSTANCE = 2;
export declare const INCOME_ACCOUNT_SELL_PRODUCTS_ISRAEL = 100;
export declare const INCOME_ACCOUNT_SELL_SERVICES_ISRAEL = 101;
export declare const INCOME_ACCOUNT_SELL_PRODUCTS_ABROAD = 102;
export declare const INCOME_ACCOUNT_SELL_SERVICES_ABROAD = 103;
export declare const INCOME_ACCOUNT_SELL_ISRAEL_NO_VAT = 104;
export declare const INCOME_ACCOUNT_FROM_DONATION = 105;
