# Hooked Continuation-Local Storage for Moleculer

Add support for continuation local storage in moleculer action handlers.

## Current Version (v1.2.0)

- support [moleculer ^0.14.x](https://github.com/moleculerjs/moleculer)
- using [cls-hooked ^4.2.x](https://github.com/jeff-lewis/cls-hooked)

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
