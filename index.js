const { AsyncLocalStorage } = require('node:async_hooks');

const storage = new AsyncLocalStorage();

const middleware = {
  localAction(next) {
    return (ctx) => {
      return storage.run(new Map(), async () => {
        return next(ctx);
      });
    };
  }
};

const set = (key, value) => {
  const store = storage.getStore();
  if (!store) {
    return undefined;
  }
  return store.set(key, value);
};

const get = (key) => {
  const store = storage.getStore();
  if (!store) {
    return undefined;
  }
  return store.get(key);
};

module.exports = {
  namespace: storage,
  set,
  get,
  middleware
};

