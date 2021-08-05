# Linet SDK
[Linet](https://www.linet.org.il) SDK for accessing [Linet's API](https://www.linet.org.il/linet-api/) more conveniently.

## Installation
```shell script
npm install linet-sdk
```
#### Note!  
This module has been tested and developed with **node version 15**. If you are experiencing any weird behavior in your project, try to test it with  node version 15+.** 
 
## Configuration
1. Create a Linet account.
2. Go to your profile page. You can access it by clicking on the profile icon on the top corner and click on the "Update User" button, or access it from the User Management page. Then click on the "API Keys" tab and create a new API key. Don't forget to write down the hash key, as it will not be shown again.  
   _**Tip:** Ideally, a better approach is to create a dedicated API user, and create a key under this user. This way, you can limit access and see who created the documents._
3. It is recommended to create an `.env` file, write your secret stuff there and load it in your code using [dotenv](https://www.npmjs.com/package/dotenv) or [any preferred env loader](https://www.npmjs.com/search?q=keywords:.env). E.g.:
   ```.env
   LINET_LOGIN_ID=...
   LINET_LOGIN_HASH=...
   LINET_LOGIN_COMPANY=1
   ```

## Usage
```js
import { Linet } from 'linet-sdk';

const linet = new Linet(LINET_LOGIN_ID, LINET_LOGIN_HASH, LINET_LOGIN_COMPANY);
try {
    const result = await linet.getItemById(1);
    console.log(result);
} catch (e) {
    console.error(e);
}
```
There is fourth argument to the constructor called `fetchFunction`.
This is in case you want to change the dispatcher function to some other [fetch-like](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) function.  
For example:
```js
const linet = new Linet(LINET_LOGIN_ID, LINET_LOGIN_HASH, LINET_LOGIN_COMPANY, );
```

#### Note
If you are experiencing issues with `import` while running your test code. Try to run the with node flag `--experimental-specifier-resolution=node`.
```shell script
node --experimental-specifier-resolution=node test.js
``` 

## Documentation
Currently supported methods:

### `createDocument`
`( documentType: number, customerName: string [, options: object = {}] )`

Create a document of any type.

### `createAccount`
`( accountType: number, name: string, options: object = {} )`

Create an account of any type.

### `createItem`
`( sku: string, name: string, options: object = {} )`

Create a new item.

### `getItemBySKU`
`( sku: string )`

Retrieve an item using only SKU identifier.

### `getItemById`
`( itemId: number )`

Retrieve an item using its internal ID.

### `getAccountByEmail`
`( email: string, filter: object = {} )`

Retrieve an account using only email address. 
In case of multiple accounts with the same email, the first found one will be fetched. 
You can use the filter argument, to filter by other parameters. 

### `searchAccounts`
`( filter: object )`

Search accounts using the provided filter. 

### `searchItems`
`( filter: object )`

Search items using the provided filter.


