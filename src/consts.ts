export const YES = 1, TRUE = YES;
export const NO = 0, FALSE = NO;

/**
 * Create a new record.
 */
export const ACTION_CREATE = 'create';
/**
 * Update an existing record.
 */
export const ACTION_UPDATE = 'update';
/**
 * Delete a record.
 */
export const ACTION_DELETE = 'delete';
/**
 * Search for records.
 */
export const ACTION_SEARCH = 'search';
/**
 * Search for records (new format).
 */
export const ACTION_NEWSEARCH = 'newsearch';
/**
 * Get all records.
 */
export const ACTION_LIST = 'list';
/**
 * Get specific record.
 */
export const ACTION_VIEW = 'view';

/**
 * Manage the companies in an instance.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_COMPANY = 'company';
/**
 * Manage the users in an instance.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_USER = 'user';
/**
 * Manage the available languages in an instance.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_LANGUAGE = 'language';
/**
 * Manage the available account countries in an instance.
 * <p>This model should not be used as the list is legal obligatory by the israeli tax authorities.</p>
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_ACCCOUNTRY = 'acccountry';
/**
 * Manage Bank Book.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_BANKBOOK = 'bankbook';
/**
 * Manage available Banks in a company.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_BANKNAME = 'bankname';
/**
 * Manage Company Settings (name,address,phone numbers,email,zip code,tax rate…..)
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_SETTINGS = 'settings';
/**
 * Manage Accounts.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_ACCOUNTS = 'accounts';
/**
 * Manage Account Types(customer,supplier,bank…)
 * <p><b>USE WITH CAUTION!</b> If account type is deleted some functionality will might get lost.</p>
 * <p>For example: If account type “customers” is deleted, accounts belonged to this type can not
 * be displayed anywhere within the application, although data of customer details as well as
 * customers’ transactions would not be lost, new accounts can not be categorized as customer account etc.</p>
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_ACCTYPE = 'acctype';
/**
 * Manage Account 6111, Israeli tax authority definition.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_ACCID6111 = 'accid6111';
/**
 * Manage Account Connection History.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_ACCHIST = 'acchist';
/**
 * Manage Currency rates.
 * <p><i>Supported actions: <code>create</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_CURRATES = 'currates';
/**
 * Manage Documents.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_DOCS = 'docs';
/**
 * Manage Document types (Invoice, receipt, etc.).
 * <p><b>USE WITH CAUTION!</b> If doctype is deleted, some functionality will might get lost.</p>
 * <p>For example: If document type: invoices, is deleted, no invoices will be produced by the application anymore.</p>
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_DOCTYPE = 'doctype';
/**
 * Manage items (products).
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_ITEM = 'item';
/**
 * Manage Item Categories.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_ITEMCATEGORY = 'itemcategory';
/**
 * Manage inventory item transactions between warehouses, incoming and outgoing items transactions from/to clients/suppliers.
 * <p><i>Supported actions: <code>create</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_INVENTORYITEM = 'inventoryitem';
/**
 * Manage Item Unit Types (cm, kg, mg, gb, mhz…)
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_ITEMUNIT = 'itemunit';
/**
 * Manage VAT category for an item (useful only in countries with differential vat system by categories).
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_ITEMVATCAT = 'itemvatcat';
/**
 * Mapping of item vat category to specific income account.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_USERINCOMEMAP = 'userincomemap';
/**
 * Manage transactions in a company.
 * <p><i>Supported actions: <code>create</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_TRANSACTION = 'transaction';
/**
 * Manage files in company.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></p>
 */
export const COMMAND_FILES = 'files';
/**
 * Manage payment types.
 * <p><i>Supported actions: <code>create</code>, <code>update</code>, <code>delete</code>, <code>search</code>, <code>list</code>, <code>view</code></i></ul></p></p>
 */
export const COMMAND_PAYMENTTYPE = 'paymenttype';

export const AVAILABLE_ACTIONS_PER_COMMAND = {
  [COMMAND_COMPANY]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_USER]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_LANGUAGE]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_ACCCOUNTRY]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_BANKBOOK]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_BANKNAME]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_SETTINGS]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_ACCOUNTS]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_ACCTYPE]: [ACTION_CREATE, ACTION_UPDATE, /*ACTION_DELETE,*/ ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW], // 'delete' has been disabled for security reasons
  [COMMAND_ACCID6111]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_ACCHIST]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_CURRATES]: [ACTION_CREATE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_DOCS]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_DOCTYPE]: [ACTION_CREATE, ACTION_UPDATE, /*ACTION_DELETE,*/ ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW], // 'delete' has been disabled for security reasons
  [COMMAND_ITEM]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_ITEMCATEGORY]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_INVENTORYITEM]: [ACTION_CREATE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_ITEMUNIT]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_ITEMVATCAT]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_USERINCOMEMAP]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_TRANSACTION]: [ACTION_CREATE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_FILES]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
  [COMMAND_PAYMENTTYPE]: [ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_SEARCH, ACTION_NEWSEARCH, ACTION_LIST, ACTION_VIEW],
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

export const STOCK_TYPE_NO_STOCK = 0;
export const STOCK_TYPE_QUANTITY = 1;
export const STOCK_TYPE_INSTANCE = 2;

export const INCOME_ACCOUNT_SELL_PRODUCTS_ISRAEL = 100;
export const INCOME_ACCOUNT_SELL_SERVICES_ISRAEL = 101;
export const INCOME_ACCOUNT_SELL_PRODUCTS_ABROAD = 102;
export const INCOME_ACCOUNT_SELL_SERVICES_ABROAD = 103;
export const INCOME_ACCOUNT_SELL_ISRAEL_NO_VAT = 104;
export const INCOME_ACCOUNT_FROM_DONATION = 105;

