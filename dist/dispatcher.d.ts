export declare const callAPI: (fetch: any, loginData: any, action: any, command: any, id_or_data?: any, data?: {}) => Promise<any>;
export declare const buildRequestData: (loginData: any, action: any, command: any, data?: {}, id?: any) => {
    url: string;
    request: {
        method: string;
        headers: {
            'Content-Type': string;
        };
        body: string;
    };
};
