
export const YES = 1, TRUE = YES;
export const NO = 0, FALSE = NO;

export const ACTION_CREATE = 'create';
export const ACTION_UPDATE = 'update';
export const ACTION_DELETE = 'delete';
export const ACTION_SEARCH = 'search';
export const ACTION_LIST = 'list';
export const ACTION_VIEW = 'view';

export const COMMAND_COMPANY = 'company';
export const COMMAND_USER = 'user';
export const COMMAND_LANGUAGE = 'language';
export const COMMAND_ACCCOUNTRY = 'acccountry';
export const COMMAND_BANKBOOK = 'bankbook';
export const COMMAND_BANKNAME = 'bankname';
export const COMMAND_SETTINGS = 'settings';
export const COMMAND_ACCOUNTS = 'accounts';
export const COMMAND_ACCTYPE = 'acctype';
export const COMMAND_ACCID6111 = 'accid6111';
export const COMMAND_ACCHIST = 'acchist';
export const COMMAND_CURRATES = 'currates';
export const COMMAND_DOCS = 'docs';
export const COMMAND_DOCTYPE = 'doctype';
export const COMMAND_ITEM = 'item';
export const COMMAND_ITEMCATEGORY = 'itemcategory';
export const COMMAND_INVENTORYITEM = 'inventoryitem';
export const COMMAND_ITEMUNIT = 'itemunit';
export const COMMAND_ITEMVATCAT = 'itemvatcat';
export const COMMAND_USERINCOMEMAP = 'userincomemap';
export const COMMAND_TRANSACTION = 'transaction';
export const COMMAND_FILES = 'files';
export const COMMAND_PAYMENTTYPE = 'paymenttype';

export const AVAILABLE_ACTIONS_PER_COMMAND = {
    [COMMAND_COMPANY]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_USER]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_LANGUAGE]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_ACCCOUNTRY]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_BANKBOOK]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_BANKNAME]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_SETTINGS]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_ACCOUNTS]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_ACCTYPE]: [ACTION_CREATE, ACTION_UPDATE, /*ACTION_DELETE,*/ ACTION_SEARCH, ACTION_LIST, ACTION_VIEW], // 'delete' has been disabled for security reasons
    [COMMAND_ACCID6111]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_ACCHIST]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_CURRATES]: [ACTION_CREATE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_DOCS]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_DOCTYPE]: [ACTION_CREATE, ACTION_UPDATE, /*ACTION_DELETE,*/ ACTION_SEARCH, ACTION_LIST, ACTION_VIEW], // 'delete' has been disabled for security reasons
    [COMMAND_ITEM]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_ITEMCATEGORY]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_INVENTORYITEM]: [ACTION_CREATE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_ITEMUNIT]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_ITEMVATCAT]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_USERINCOMEMAP]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_TRANSACTION]: [ACTION_CREATE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_FILES]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
    [COMMAND_PAYMENTTYPE]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_LIST, ACTION_VIEW],
};

export const LINET_ERROR_CODE_NOT_FOUND = 1000;
export const LINET_ERROR_CODE_INVALID = 1001;

export const DEFAULT_ACCOUNT_ID = 113;
export const DEFAULT_CATEGORY_ID = 1;
export const DEFAULT_PARENT_ITEM_ID = 0;
export const DEFAULT_ITEM_STOCK_TYPE = 1;
export const DEFAULT_ITEM_UNIT_ID = 0;
export const DEFAULT_ITEM_VAT_CATEGORY_ID = 1;
export const DEFAULT_PRICE = 0;
export const DEFAULT_ITEM_ID = 1;

export const ACCOUNT_TYPE_CUSTOMER = 0;
export const ACCOUNT_TYPE_SUPPLIER = 1;
export const ACCOUNT_TYPE_EXPENSE = 2;
export const ACCOUNT_TYPE_INCOME = 3;
export const ACCOUNT_TYPE_ASSET_DEBIT = 4;
export const ACCOUNT_TYPE_CAPITAL_SURPLUS = 5;
export const ACCOUNT_TYPE_AUTHORITY = 6;
export const ACCOUNT_TYPE_BANK = 7;
export const ACCOUNT_TYPE_WAREHOUSE = 8;
export const ACCOUNT_TYPE_LEAD = 9;
export const ACCOUNT_TYPE_CONTACT = 10;
export const ACCOUNT_TYPE_WORKER = 11;

export const DOCUMENT_TYPE_INVOICE_RECEIPT = 9;

export const DOCUMENT_STATUS_OPENED = 1;
export const DOCUMENT_STATUS_CLOSED = 2;

export const CURRENCY_ILS = 'ILS';
export const CURRENCY_USD = 'USD';
export const CURRENCY_EUR = 'EUR';

export const PAYMENT_TYPE_CASH = 1;
export const PAYMENT_TYPE_CHECK = 2;
export const PAYMENT_TYPE_CREDIT_CARD = 3;
export const PAYMENT_TYPE_BANK_TRANSFER = 4;
export const PAYMENT_TYPE_MANUAL_CREDIT_CARD = 5;
export const PAYMENT_TYPE_CREDIT_CARD_PAYMENTS = 6;
export const PAYMENT_TYPE_SOURCE_TAX = 7;
export const PAYMENT_TYPE_PAYPAL = 8;

export const DISCOUNT_TYPE_FIXED = 1;
export const DISCOUNT_TYPE_PERCENTAGE = 2;

