import { Action } from "../index";
export declare class DataValidationError extends Error {
    dataName: any;
    dataValue: any;
    constructor(dataName: any, dataValue: any);
}
export declare const validateDocumentType: (documentType: any, valueName?: string) => any;
export declare const validateNonEmptyString: (value: any, valueName?: string) => string;
export declare const validateId: (id: any, valueName?: string, startFrom?: number) => any;
export declare const validateBoolean: (value: any, valueName?: string) => any;
export declare const validateDocumentStatus: (documentStatus: any, valueName?: string) => any;
export declare const validateCurrency: (currency: any, valueName?: string) => any;
export declare const validateAccountType: (accountType: any, valueName?: string) => any;
export declare const validateEmailAddress: (emailAddress: any, valueName?: string) => string;
export declare const validateSKU: (sku: any, valueName?: string) => string;
export declare const validatePrice: (price: any, valueName?: string) => any;
export declare const validateObject: (value: any, valueName?: string) => any;
export declare const isEmpty: (value: any) => boolean;
export declare const validateActionId: (action: Action, id?: number) => any;
export declare const validateCommand: (command: any, valueName?: string) => any;
export declare const validateCommandAction: (command: any, action: any) => any;
