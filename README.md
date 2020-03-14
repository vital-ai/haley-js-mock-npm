# haley-js-mock-npm


## develop

### domain requirement:
domain files should put in the directory: **vitalservice/domains**. vitalservice is the directory that at the same level of node_modules.

### mock handler requirement. 
handlers should live in file **haley-service-mock/index.js** as an array. The array should be export. examples of code of index.js

```javascript

const MockApiForHomePageEntriesHandler = require('../handlers/homePageEntries_Handler').mockAPI;
const MockApiSearchHandler = require('../handlers/search_Handler').mockAPI;

const handlers = [
    {id: 'mock home page entries', handler: MockApiForHomePageEntriesHandler},
    {id: 'mock search page', handler: MockApiSearchHandler},
]

module.exports = handlers;

```
