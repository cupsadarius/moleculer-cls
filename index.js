const context = require('cls-hooked');
const uuid = require('uuid').v4;

const  namespace = context.createNamespace(uuid());

const middleware = (handler) => {
  return async (ctx) => {
    await new Promise((resolve) => namespace.runPromise(resolve));
    return await handler(ctx);
  };
};

const set = (key,  value) => {
  if (namespace && namespace.active) {
    namespace.set(key, value);
  }
};

const get = (key) => {
  if (namespace && namespace.active) {
    return namespace.get(key);
  }
};

module.exports = {
  namespace,
  set,
  get,
  middleware
};