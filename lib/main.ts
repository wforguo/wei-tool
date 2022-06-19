    /**
   * 用 call 的方式获取类型
   * @param {*} val 要验证的实例
   * @returns
   * *   '[object Object]',
   * *   '[object Array]',
   * *   '[object Map]',
   * *   '[object Set]',
   * *   '[object Function]',
   * *   '[object AsyncFunction]',
   * *   '[object Promise]',
   * *   '[object Symbol]',
   * *   '[object String]',
   * *   '[object Number]',
   * *   '[object BigInt]',
   * *   '[object RegExp]',
   * *   '[object Date]',
   * *   '[object Math]',
   * *   '[object Null]',
   * *   '[object Undefined]'
   * *   其他
   */
     const toTypeString = (val) => { 
      return Object.prototype.toString.call(val)
    }
    
    /**
     * 获取具体类型
     * @param {*} val 要验证的实例
     * @returns 
     * *   'function',
     * *   'async',
     * *   'object',
     * *   'array',
     * *   'string',
     * *   'number',
     * *   'bigInt',
     * *   'regExp',
     * *   'date',
     * *   'map',
     * *   'set',
     * *   'promise',
     * *   'symbol',
     * *   'math',
     * *   'null',
     * *   'undefined'
     * *   其他
     */
    const typeName = (val) => {
      return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/,'$1').toLowerCase()
    }
  
    const hasOwnProperty = Object.prototype.hasOwnProperty
    const hasOwn = (val, key) => hasOwnProperty.call(val, key)
  
    /**
     *  验证普通函数
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isFunction = (val) => toTypeString(val) === '[object Function]'
  
    /**
     * 验证 async 的函数
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isAsync = (val) => toTypeString(val) === '[object asyncFunction]'
   
    /**
     * 验证 Object，不含 null
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isObject = (val) => val !== null && typeof val === 'object'
   
    /**
     *  验证数组
     * @param {*} val 要验证的对象
     * @returns 
     */
     const isArray = Array.isArray
   
     /**
     * 验证字符串
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isString = (val) => typeof val === 'string'
   
    /**
     * 验证 number
     * @param {*} val 要验证的对象
     * @returns 
     */
   
    const isNumber = (val) => typeof val === 'number'
   
    /**
     * 验证 BigInt
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isBigInt = (val) => typeof val === 'bigint'
   
    /**
     * 验证 boolean
     * @param {*} val 要验证的对象
     * @returns 
     */
     const isBoolean = (val) => typeof val === 'boolean'
   
     /**
     * 验证正则类型
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isRegExp = (val) => toTypeString(val) === '[object RegExp]'
    /**
     * 验证日期
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isDate = (val) => val instanceof Date
  
    /**
     * 验证 map
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isMap = (val) => toTypeString(val) === '[object Map]'
    /**
     * 验证 set
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isSet = (val) => toTypeString(val) === '[object Set]'
    /**
     *  验证 Promise
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isPromise = (val) => toTypeString(val) === '[object Promise]'
    /**
     * 验证 Symbol
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isSymbol = (val) => typeof val === 'symbol'
  
    /**
     * null 或者 undefined 返回 true
     * @param {*} val 要验证的对象
     * @returns 
     */
    const isNullOrUndefined = (val) => {
      if (val === null) return true
      if (typeof val === 'undefined') return true
      return false
    }

  export {
    toTypeString, // Object.prototype.toString.call(val)
    typeName, // 获取可以识别的名称
  
    hasOwnProperty,
    hasOwn,
  
    isFunction, // 验证普通函数
    isAsync, // 验证 async 的函数
    isObject, // 验证 Object
    isArray, // 验证数组
    isString, // 验证字符串
    isNumber, // 验证 number
    isBigInt, // 验证 BigInt
    isBoolean, // 验证 布尔
    isRegExp, // 验证正则类型
    isDate, // 验证日期
    isMap, // 验证 map
    isSet, // 验证 set
    isPromise, // 验证 Promise
    isSymbol, // 验证 Symbol
   
    isNullOrUndefined // null 或者 undefined 返回 true
  }