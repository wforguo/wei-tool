const toTypeString = (val) => {
  return Object.prototype.toString.call(val);
};
const typeName = (val) => {
  return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/, "$1").toLowerCase();
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isFunction = (val) => toTypeString(val) === "[object Function]";
const isAsync = (val) => toTypeString(val) === "[object asyncFunction]";
const isObject = (val) => val !== null && typeof val === "object";
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const isNumber = (val) => typeof val === "number";
const isBigInt = (val) => typeof val === "bigint";
const isBoolean = (val) => typeof val === "boolean";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isDate = (val) => val instanceof Date;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isPromise = (val) => toTypeString(val) === "[object Promise]";
const isSymbol = (val) => typeof val === "symbol";
const isNullOrUndefined = (val) => {
  if (val === null)
    return true;
  return typeof val === "undefined";
};
export { hasOwn, hasOwnProperty, isArray, isAsync, isBigInt, isBoolean, isDate, isFunction, isMap, isNullOrUndefined, isNumber, isObject, isPromise, isRegExp, isSet, isString, isSymbol, toTypeString, typeName };
//# sourceMappingURL=wei-tool.es.js.map
