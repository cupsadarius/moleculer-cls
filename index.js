const context = require("cls-hooked");
const uuid = require("uuid").v4;

const namespace = context.createNamespace(uuid());

const middleware = (handler) => {
  return async (ctx) => {
    return namespace.runPromise(async () => handler(ctx));
  };
};

const set = (key, value) => {
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
  middleware,
};

