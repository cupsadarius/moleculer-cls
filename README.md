# Async Local Storage for Moleculer

Add support for async local storage in moleculer action handlers.

## Current Version (v2.0.0)

- support [moleculer ^0.14.x](https://github.com/moleculerjs/moleculer)
- accept nodejs: >=18

## Install

`npm install --save moleculer-cls`

## Usage

```js
// moleculer.config.js

const context = require('moleculer-cls');

module.exports = {
  ...
  middlewares: [
    context.middleware
  ]
}
```

```js
// service.js

const context = require('moleculer-cls');
const process = require('processor.js');

module.exports = {
  actions: {
    hello: {
      params: {
        "name": "string"
      },
      handler: async (ctx) => {
        context.set('request_id', ctx.requestID);

        return await process(ctx.params);
      }
    }
  }
}
```

```js
// processor.js

const context = require('moleculer-cls');

module.exports = async ({name}) => {
  console.log(`Processing ${context.get('request_id')}`);

  return Promise.resolve(`Hello ${name}`);
}
```

## License

MIT
