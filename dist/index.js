(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ez-uploader"] = factory();
	else
		root["ez-uploader"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(37);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(38);
var toPrimitive = __webpack_require__(22);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(34);
var defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(20)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(21);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(20)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(71);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(82);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(76);
var enumBugKeys = __webpack_require__(21);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(39)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(77).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(2);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(25);
var wksExt = __webpack_require__(29);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getStringValue;
/* harmony export (immutable) */ __webpack_exports__["a"] = getEncodedString;
/* unused harmony export getCharacterArray */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function getStringValue(value) {
    return value.map((charCode) => String.fromCharCode(charCode)).join('');
}

function getEncodedString(value) {
    if (value.length >= 8) {
        const encoding = getStringValue(value.slice(0, 8));

        if (encoding === 'ASCII\x00\x00\x00') {
            return getStringValue(value.slice(8));
        } else if (encoding === 'JIS\x00\x00\x00\x00\x00') {
            return '[JIS encoded text]';
        } else if (encoding === 'UNICODE\x00') {
            return '[Unicode encoded text]';
        } else if (encoding === '\x00\x00\x00\x00\x00\x00\x00\x00') {
            return '[Undefined encoding]';
        }
    }

    return 'Undefined';
}

function getCharacterArray(string) {
    return string.split('').map((character) => character.charCodeAt(0));
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(2);
var toIObject = __webpack_require__(6);
var arrayIndexOf = __webpack_require__(56)(false);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var fails = __webpack_require__(9);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(59);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(39)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(2);
var toObject = __webpack_require__(13);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(67);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(46);
var hide = __webpack_require__(7);
var has = __webpack_require__(2);
var Iterators = __webpack_require__(26);
var $iterCreate = __webpack_require__(75);
var setToStringTag = __webpack_require__(28);
var getPrototypeOf = __webpack_require__(42);
var ITERATOR = __webpack_require__(10)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(33);
var hiddenKeys = __webpack_require__(21).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(16);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(22);
var has = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(38);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getStringFromDataView;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function getStringFromDataView(dataView, offset, length) {
    const chars = [];
    for (let i = 0; i < length && offset + i < dataView.byteLength; i++) {
        chars.push(dataView.getUint8(offset + i, false));
    }
    return getAsciiValue(chars).join('');
}

function getAsciiValue(charArray) {
    return charArray.map((charCode) => String.fromCharCode(charCode));
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const LITTLE_ENDIAN = 0x4949;
const BIG_ENDIAN = 0x4d4d;

/* harmony default export */ __webpack_exports__["a"] = ({
    BIG_ENDIAN,
    LITTLE_ENDIAN,
    getByteOrder
});

function getByteOrder(dataView, tiffHeaderOffset) {
    if (dataView.getUint16(tiffHeaderOffset) === LITTLE_ENDIAN)
        return LITTLE_ENDIAN;
    else if (dataView.getUint16(tiffHeaderOffset) === BIG_ENDIAN) {
        return BIG_ENDIAN;
    }
    throw new Error('Illegal byte order value. Faulty image.');
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(52);

var _main2 = _interopRequireDefault(_main);

var _EzUploader = __webpack_require__(53);

var _EzUploader2 = _interopRequireDefault(_EzUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.EzUploader = _EzUploader2.default;

exports.default = _EzUploader2.default;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(32);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(40);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(41);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(64);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(43);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(44);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(70);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(92);

var _inherits3 = _interopRequireDefault(_inherits2);

var _resumablejs = __webpack_require__(100);

var _resumablejs2 = _interopRequireDefault(_resumablejs);

var _exifreader = __webpack_require__(101);

var _exifreader2 = _interopRequireDefault(_exifreader);

var _VDOM = __webpack_require__(114);

var _VDOM2 = _interopRequireDefault(_VDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function h(type, props) {
    var _ref;

    if (props) {

        if (typeof props['ez-show'] !== 'undefined' || typeof props['ez-show-flex'] !== 'undefined') {

            var prop = typeof props['ez-show'] !== 'undefined' ? 'ez-show' : 'ez-show-flex';
            var _type = prop === 'ez-show-flex' ? 'flex' : 'block';
            var display = !!props[prop] ? _type : 'none';
            var style = 'display:' + display + ';';

            props.style = props.style ? style + ';' + props.style : style;

            delete props[prop];
        }
    }

    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    return {
        type: type,
        props: props,
        children: children.length ? (_ref = []).concat.apply(_ref, children) : []
    };
}

var EzUploader = function (_EzVDOM) {
    (0, _inherits3.default)(EzUploader, _EzVDOM);

    function EzUploader() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            upload = _ref2.upload,
            ui = _ref2.ui,
            throttle = _ref2.throttle;

        (0, _classCallCheck3.default)(this, EzUploader);

        var _this = (0, _possibleConstructorReturn3.default)(this, (EzUploader.__proto__ || (0, _getPrototypeOf2.default)(EzUploader)).call(this));

        _this.settings = {
            upload: (0, _assign2.default)({}, {
                target: null,
                headers: {},
                maxFilesErrorCallback: _this.maxFilesErrorCallback.bind(_this),
                maxFileSizeErrorCallback: _this.maxFileSizeErrorCallback.bind(_this),
                minFileSizeErrorCallback: _this.minFileSizeErrorCallback.bind(_this),
                fileType: [],
                fileTypeErrorCallback: _this.fileTypeErrorCallback.bind(_this)
            }, upload),
            ui: (0, _assign2.default)({}, {
                thumbnail: false,
                loadingFiles: false
            }, ui),
            throttle: (0, _assign2.default)({}, {
                rate: 1,
                per: 0.1,
                lastCheck: Date.now(),
                allowance: 50,
                debug: false
            }, throttle)
        };

        _this.uploading = false;
        _this.uploader = null;
        _this.error = null;
        _this.fileErrors = {};
        _this.mappedFiles = {};
        _this.stats = {
            start: 0,
            iterations: 0,
            iterationsPerSecond: 0
        };

        _this.addUploaderToDOM();
        _this.addResumable();
        _this.addKeypressEventListeners();
        _this.addFileTypeRegex(_this.settings.upload.fileTypes);

        if (_this.settings.throttle.debug) {
            window.update = _this.updateDOM.bind(_this);
            window.updateThrottle = _this.updateDOMWithThrottle.bind(_this);
        }

        return _this;
    }

    (0, _createClass3.default)(EzUploader, [{
        key: 'addResumable',
        value: function addResumable() {

            var settings = this.settings.upload;
            var file = document.querySelectorAll("[ez-uploader-browse]");
            var directory = document.querySelectorAll("[ez-uploader-browse-directory]");
            var drop = document.querySelectorAll("[ez-uploader-drop]")[0];

            this.addInputEventListeners();

            this.uploader = new _resumablejs2.default(settings);

            this.uploader.assignBrowse(file);
            this.uploader.assignBrowse(directory, true);
            this.uploader.assignDrop(drop);
            this.addResumableEventListeners();
        }
    }, {
        key: 'addFileTypeRegex',
        value: function addFileTypeRegex(types) {

            var regex = void 0;

            if (types && types.length) {

                var typeString = types.reduce(function (carry, type) {
                    return carry += '.' + type + '|';
                }, '(').slice(0, -1).concat(')$');

                regex = new RegExp(typeString, 'i');
            } else {

                regex = new RegExp('.');
            }

            this.fileTypeRegex = regex;
        }
    }, {
        key: 'clearError',
        value: function clearError() {

            this.error = null;
        }
    }, {
        key: 'clearFileErrors',
        value: function clearFileErrors() {

            this.fileErrors = {};
        }
    }, {
        key: 'maxFilesErrorCallback',
        value: function maxFilesErrorCallback(files, errorCount) {

            this.error = 'You can only upload ' + this.settings.upload.maxFiles + ' ' + (this.settings.upload.maxFiles > 1 ? 'images' : 'image');
            //console.log('update dom from error callback', files, errorCount);
            this.updateDOM();
        }
    }, {
        key: 'maxFileSizeErrorCallback',
        value: function maxFileSizeErrorCallback(file, errorCount) {

            this.error = file.name + ' is too large, the maximum file size allowed is ' + this.convertBytesToMB(this.settings.upload.maxFileSize) + 'MB';
            //console.log('update dom from error callback', file);
            this.updateDOM();
        }
    }, {
        key: 'minFileSizeErrorCallback',
        value: function minFileSizeErrorCallback(file, errorCount) {

            this.error = file.name + ' is too small, the minimum file size allowed is ' + this.convertBytesToMB(this.settings.upload.minFileSize) + 'MB';
            //console.log('update dom from error callback', file);
            this.updateDOM();
        }
    }, {
        key: 'fileTypeErrorCallback',
        value: function fileTypeErrorCallback(file, errorCount) {

            var allowedTypes = this.settings.upload.fileTypes || [];
            var allowedTypesString = allowedTypes.reduce(function (result, type, index) {

                if (index === allowedTypes.length - 2) {
                    result += type + ' or ';
                } else if (index === allowedTypes.length - 1) {
                    result += '' + type;
                } else {
                    result += type + ', ';
                }

                return result;
            }, '');

            this.error = file.name + ' isn\'t an allowed file type, please upload files of type ' + allowedTypesString;
            //console.log('update dom from error callback', file);
            this.updateDOM();
        }
    }, {
        key: 'browseFiles',
        value: function browseFiles(e) {

            var browseButton = document.querySelectorAll("[ez-uploader-browse]")[0];

            browseButton.click();
            /*
            const event = document.createEvent("HTMLEvents");
              event.initEvent('click', true, true);
              browseButton.dispatchEvent(event);
            */
        }
    }, {
        key: 'browseDirectory',
        value: function browseDirectory() {

            //console.log('browse files boi');

            var browseButton = document.querySelectorAll("[ez-uploader-browse-directory]")[0];

            browseButton.click();
            /*
            const event = document.createEvent("HTMLEvents");
              event.initEvent('click', true, true);
              browseButton.dispatchEvent(event);
            */
        }
    }, {
        key: 'addKeypressEventListeners',
        value: function addKeypressEventListeners() {
            var _this2 = this;

            window.addEventListener('keyup', function (e) {

                if (e.keyCode === 27 && 1 < 1) {

                    _this2.close();
                }
            });
        }
    }, {
        key: 'addInputEventListeners',
        value: function addInputEventListeners() {

            var file = document.querySelectorAll("[ez-uploader-browse]")[0];
            var directory = document.querySelectorAll("[ez-uploader-browse-directory]")[0];
            var drop = document.querySelectorAll("[ez-uploader-drop]")[0];

            [file, directory, drop].forEach(function (node) {
                node.addEventListener('change', function (e) {
                    //console.log('change event', e);
                    //this.settings.ui.loadingFiles = true;
                });
            });
        }
    }, {
        key: 'addResumableEventListeners',
        value: function addResumableEventListeners() {

            this.uploader.on('filesAdded', this.onFilesAdded.bind(this));
            this.uploader.on('fileSuccess', this.onFileSuccess.bind(this));
            this.uploader.on('fileProgress', this.onFileProgress.bind(this));
            this.uploader.on('fileRetry', this.onFileRetry.bind(this));
            this.uploader.on('fileError', this.onFileError.bind(this));
            this.uploader.on('uploadStart', this.onUploadStart.bind(this));
            this.uploader.on('complete', this.onComplete.bind(this));
            this.uploader.on('progress', this.onProgress.bind(this));
            this.uploader.on('error', this.onError.bind(this));
            this.uploader.on('pause', this.onPause.bind(this));
            this.uploader.on('cancel', this.onCancel.bind(this));
        }
    }, {
        key: 'onFilesAdded',
        value: function onFilesAdded(files, event) {
            var _this3 = this;

            var error = false;

            files.forEach(function (file, index) {

                // If the file isn't allowed
                if (!_this3.fileTypeRegex.test(file.fileName)) {

                    _this3.uploader.removeFile(file);

                    // Only show one error at a time
                    if (!error) {

                        _this3.fileTypeErrorCallback(file.file);

                        error = true;
                    }
                } else if (1 < 2) {

                    // If exif is required and the image doesn't have it

                    var tags = _exifreader2.default.load(file);

                    console.log('tags', tags);
                }
            });

            if (!error) {

                this.clearError();
            }

            this.settings.ui.loadingFiles = false;

            if (this.settings.ui.thumbnail) {

                files.forEach(function (file) {

                    _this3.mappedFiles[file.uniqueIdentifier] = {};

                    var fileReader = new FileReader();

                    fileReader.readAsDataURL(file.file);
                    fileReader.onload = function (event) {

                        _this3.mappedFiles[file.uniqueIdentifier].src = event.target.result;
                        //console.log('update dom from on load');
                        _this3.updateDOM();
                    };
                });
            }

            //console.log('update dom onFilesAdded');
            this.updateDOM();
        }
    }, {
        key: 'onFileSuccess',
        value: function onFileSuccess(file, event) {
            delete this.fileErrors[file.uniqueIdentifier];
            //console.log("update dom from onFileSuccess");
            this.updateDOM();
        }
    }, {
        key: 'onFileProgress',
        value: function onFileProgress(file, event) {
            //console.log("onFileProgress", file, event);
            //this.updateDOM();
        }
    }, {
        key: 'onFileRetry',
        value: function onFileRetry(file, event) {
            //console.log("update dom from onFileRetry");
            this.updateDOMWithThrottle();
        }
    }, {
        key: 'onFileError',
        value: function onFileError(file, error) {

            //console.log('on error', error);
            var message = '';

            try {

                //console.log('setting error message try', JSON.parse(JSON.stringify(error)), JSON.parse(JSON.stringify(error)).message);
                message = JSON.parse((0, _stringify2.default)(error)).message || 'An error occured';
            } catch (e) {

                //console.log('setting error message catch');
                message = 'An error occurred';
            }

            //console.log('final error message', message);

            this.fileErrors[file.uniqueIdentifier] = {
                file: file,
                error: message
            };

            //console.log('update dom from onFileError');
            this.updateDOM();
        }
    }, {
        key: 'onUploadStart',
        value: function onUploadStart(file, event) {
            //console.log("update dom from onUploadStart");
            this.updateDOM();
        }
    }, {
        key: 'onComplete',
        value: function onComplete(file, event) {
            //console.log("update dom from onComplete");
            this.uploading = false;
            this.updateDOM();
        }
    }, {
        key: 'onProgress',
        value: function onProgress(file, event) {
            //console.log("update dom from onProgress");
            this.updateDOMWithThrottle();
        }
    }, {
        key: 'onError',
        value: function onError(file, event) {
            //console.log("update dom from onError");
            this.updateDOM();
        }
    }, {
        key: 'onPause',
        value: function onPause(file, event) {
            //console.log("update dom from onPause");
            this.updateDOM();
        }
    }, {
        key: 'onCancel',
        value: function onCancel(file, event) {
            //console.log("update dom from onCancel");
            this.updateDOM();
        }
    }, {
        key: 'open',
        value: function open() {

            //console.log('modal toggle', this.modal);

            if (this.modal) {

                this.modal.style.display = 'flex';
            }
        }
    }, {
        key: 'close',
        value: function close() {

            //console.log('modal toggle', this, this.modal);

            if (this.modal) {

                this.modal.style.display = 'none';
            }
        }
    }, {
        key: 'resetModal',
        value: function resetModal() {

            this.close();
            this.removeAllFiles();
        }
    }, {
        key: 'startUploading',
        value: function startUploading() {

            this.stats.start = Date.now();
            this.uploading = true;
            this.clearError();
            this.uploader.upload();
            //console.log('update dom from start uploading');
            this.updateDOM();
        }
    }, {
        key: 'pauseUploading',
        value: function pauseUploading() {

            this.uploading = false;
            this.uploader.pause();
        }
    }, {
        key: 'removeFile',
        value: function removeFile(file) {
            var updateDom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


            this.clearError();
            delete this.fileErrors[file.uniqueIdentifier];
            this.uploader.removeFile(file);

            if (updateDom) {

                //console.log('update dom from remove file');

                this.updateDOM();
            }
        }
    }, {
        key: 'pauseFile',
        value: function pauseFile(file) {

            file.pause();
            //console.log('update dom from pause file');
            this.updateDOM();
        }
    }, {
        key: 'retryFile',
        value: function retryFile(file) {

            this.uploading = true;
            delete this.fileErrors[file.uniqueIdentifier];
            file.retry();
            //console.log('update dom from retry');
            this.updateDOM();
        }
    }, {
        key: 'retryAllFiles',
        value: function retryAllFiles() {
            var _this4 = this;

            var files = (0, _keys2.default)(this.fileErrors);

            files.forEach(function (fileId) {

                var file = _this4.fileErrors[fileId].file;

                _this4.retryFile(file);
            });
        }
    }, {
        key: 'removeAllFiles',
        value: function removeAllFiles() {
            var _this5 = this;

            //console.log('remove all files');
            this.clearError();
            this.clearFileErrors();
            //this.uploader.cancel();
            //console.log('files after remove all', this.uploader.files);

            //console.log('all files', this.files);

            var fileIds = this.files.map(function (file) {

                return file.uniqueIdentifier;
            });

            //console.log('file ids', fileIds);

            fileIds.forEach(function (id, index) {

                var file = _this5.uploader.getFromUniqueIdentifier(id);
                _this5.removeFile(file, false);
            });

            //console.log('update dom from remove all');
            this.updateDOM();
        }
    }, {
        key: 'getUploadedBytes',
        value: function getUploadedBytes() {

            var progress = this.uploader.progress() * 100;
            var progressInMb = this.getTotalBytes() / 100 * progress;

            return parseFloat(progressInMb.toFixed(2));
        }
    }, {
        key: 'getTotalBytes',
        value: function getTotalBytes() {
            var _this6 = this;

            var mb = this.files.reduce(function (sum, file) {
                return sum += _this6.convertBytesToMB(file.size);
            }, 0);

            return parseFloat(mb.toFixed(2));
        }
    }, {
        key: 'convertBytesToMB',
        value: function convertBytesToMB(bytes) {

            var mb = !isNaN(bytes) ? bytes / 1024 / 1024 : 0;

            return parseFloat(mb.toFixed(2));
        }

        // VDOM/DOM methods

    }, {
        key: 'addUploaderToDOM',
        value: function addUploaderToDOM() {

            this.cachedVDOM = this.getVDOM();
            this.modal = this.createElement(this.cachedVDOM);

            //console.log('cached', this.cachedVDOM);
            //console.log('modal', this.modal);

            document.body.appendChild(this.modal);
        }
    }, {
        key: 'getTitleVDOM',
        value: function getTitleVDOM() {

            //console.log('-- getting title dom', this.uploading);

            if (!this.files.length) {

                return h(
                    'p',
                    null,
                    'Select some files to get started'
                );
            } else if (this.uploading) {

                var progress = (this.uploader.progress() * 100).toFixed(2);

                return h('p', null);

                /*
                return (
                    <p>
                        Uploading {this.files.length} {this.files.length > 1 ? 'files' : 'file'}
                        &nbsp;
                        <span className="ez-uploader__progress-text">{this.getUploadedBytes()} MB / {this.getTotalBytes()} MB</span>
                        &nbsp;
                        <span className="ez-uploader__progress-text">({progress}%)</span>
                    </p>
                )
                */
            } else if (this.uploader.progress() >= 1) {

                return h(
                    'p',
                    null,
                    'The upload has completed'
                );
            } else {

                return h(
                    'p',
                    null,
                    'You\'ve chosen ',
                    this.files.length,
                    ' ',
                    this.files.length > 1 ? 'files' : 'file',
                    ' ',
                    h(
                        'span',
                        { className: 'ez-uploader__progress-text' },
                        this.getTotalBytes(),
                        ' MB'
                    )
                );
            }
        }
    }, {
        key: 'getErrorVDOM',
        value: function getErrorVDOM() {

            if (this.error) {

                return h(
                    'div',
                    { className: 'ez-uploader__modal-header-error' },
                    this.error
                );
            }

            return '';
        }
    }, {
        key: 'getFileImageVDOM',
        value: function getFileImageVDOM(file) {

            if (this.settings.ui.thumbnail) {

                if (this.mappedFiles[file.uniqueIdentifier] && this.mappedFiles[file.uniqueIdentifier].src) {

                    var src = this.mappedFiles[file.uniqueIdentifier].src;

                    return h(
                        'div',
                        { className: 'ez-uploader__modal-file-image' },
                        h('img', { src: src })
                    );
                } else {

                    return h('div', { className: 'ez-uploader__modal-file-image' });
                }
            } else {

                return '';
            }
        }
    }, {
        key: 'getFileOptionsVDOM',
        value: function getFileOptionsVDOM(file) {

            var options = [];

            if (this.uploader && !this.fileErrors[file.uniqueIdentifier] && (this.uploading || file.progress() === 1)) {

                if (this.files.length >= 500 && 1 < 1) {

                    if (file.progress() === 1) {

                        options.push(h(
                            'div',
                            { className: 'ez-uploader__modal-badge ez-uploader__modal-badge-green' },
                            'uploaded'
                        ));
                    } else if (file.progress()) {

                        options.push(h(
                            'div',
                            { className: 'ez-uploader__modal-badge ez-uploader__modal-badge-blue' },
                            'uploading...'
                        ));
                    }
                } else {

                    var progress = file.progress() * 100;
                    var style = 'width:' + progress + '%';

                    options.push(h(
                        'div',
                        { className: 'ez-uploader__modal-file-progress' },
                        h('div', { className: 'ez-uploader__modal-file-progress-inner', style: style })
                    ));
                }
            } else if (!this.uploading && file.progress() !== 1) {

                options.push(h(
                    'div',
                    { 'ez-on-click': this.removeFile.bind(this, file), className: 'ez-uploader__modal-button--small ez-uploader__modal-button-red' },
                    'remove'
                ));
            } else if (this.fileErrors[file.uniqueIdentifier]) {

                options.push(h(
                    'div',
                    { 'ez-on-click': this.retryFile.bind(this, file), className: 'ez-uploader__modal-button--small ez-uploader__modal-button-blue' },
                    'retry'
                ));
            }

            return options;
        }
    }, {
        key: 'getBodyVDOM',
        value: function getBodyVDOM() {

            var options = [];

            if (this.uploading) {

                var errorCount = (0, _keys2.default)(this.fileErrors).length;
                var progress = (this.uploader.progress() * 100).toFixed(2);
                var buttons = [];

                if (errorCount) {

                    buttons.push(h(
                        'div',
                        { 'ez-on-click': this.retryAllFiles.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-blue', style: 'margin-right:5px' },
                        'retry failed files'
                    ));
                }

                buttons.push(h(
                    'div',
                    { 'ez-on-click': this.pauseUploading.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-orange' },
                    'Pause uploading'
                ));

                options.push(h(
                    'div',
                    { className: 'ez-uploader__modal-placeholder', style: 'border: none' },
                    h(
                        'h2',
                        null,
                        'Uploading ',
                        this.files.length,
                        ' ',
                        this.files.length > 1 ? 'files' : 'file'
                    ),
                    h(
                        'p',
                        { style: 'opacity: 0.8;' },
                        h(
                            'span',
                            null,
                            this.getUploadedBytes(),
                            ' MB / ',
                            this.getTotalBytes(),
                            ' MB'
                        ),
                        '\xA0',
                        h(
                            'span',
                            null,
                            '(',
                            progress,
                            '%)'
                        )
                    ),
                    !!errorCount && h(
                        'p',
                        { className: 'ez-uploader__modal-file--error', style: 'margin-top:0' },
                        errorCount,
                        ' ',
                        errorCount > 1 ? 'files' : 'file',
                        ' failed'
                    ),
                    h(
                        'div',
                        null,
                        buttons
                    )
                ));
            } else {

                if (this.uploader && this.uploader.files.length) {

                    options = options.concat(this.files.map(this.getFileVDOM.bind(this)));
                }

                options.push(h(
                    'div',
                    { forceUpdate: true, 'ez-show-flex': !this.files.length, className: 'ez-uploader__modal-placeholder' },
                    h(
                        'h2',
                        null,
                        'Drag and drop files'
                    ),
                    h(
                        'p',
                        null,
                        'or'
                    ),
                    h(
                        'div',
                        null,
                        h(
                            'div',
                            { 'ez-on-click': this.browseDirectory.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt', style: 'margin-right:5px' },
                            'Add directory'
                        ),
                        h(
                            'div',
                            { 'ez-on-click': this.browseFiles.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt' },
                            'Add files'
                        )
                    )
                ));
            }

            if (this.settings.ui.loadingFiles) {

                /*options.push(
                    <div ez- className="ez-uploader__modal-file-loader">
                        Loading files...
                    </div>
                );*/

            }

            return options;
        }
    }, {
        key: 'getFileVDOM',
        value: function getFileVDOM(file) {

            var stateClass = '';

            if (this.fileErrors[file.uniqueIdentifier]) {

                stateClass = 'ez-uploader__modal-file--error';
            } else if (file.progress() === 1) {

                stateClass = 'ez-uploader__modal-file--success';
            }

            return h(
                'div',
                { className: 'ez-uploader__modal-file ' + stateClass },
                this.getFileImageVDOM(file),
                h(
                    'div',
                    { className: 'ez-uploader__modal-file-text' },
                    h(
                        'div',
                        { className: 'ez-uploader__modal-file-name' },
                        file.fileName,
                        h(
                            'span',
                            { className: 'ez-uploader__modal-file-size' },
                            this.convertBytesToMB(file.size),
                            ' MB'
                        )
                    ),
                    h(
                        'div',
                        { className: 'ez-uploader__modal-file-error' },
                        this.fileErrors[file.uniqueIdentifier] ? this.fileErrors[file.uniqueIdentifier].error : ''
                    )
                ),
                h(
                    'div',
                    { className: 'ez-uploader__modal-file-options' },
                    this.getFileOptionsVDOM(file)
                )
            );
        }
    }, {
        key: 'getUploaderLeftOptionsVDOM',
        value: function getUploaderLeftOptionsVDOM() {

            var options = [];

            if (this.uploader && !this.uploading && this.files.length) {

                if (this.uploader.progress() < 1) {

                    options.push(h(
                        'div',
                        { 'ez-on-click': this.removeAllFiles.bind(this), className: 'ez-uploader__modal-button' },
                        'Clear'
                    ));
                }

                options.push(h(
                    'div',
                    { 'ez-on-click': this.browseDirectory.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt' },
                    'Add directory'
                ));

                options.push(h(
                    'div',
                    { 'ez-on-click': this.browseFiles.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt' },
                    'Add files'
                ));
            }

            return options;
        }
    }, {
        key: 'getUploaderRightOptionsVDOM',
        value: function getUploaderRightOptionsVDOM() {

            var options = [];
            var errorCount = (0, _keys2.default)(this.fileErrors).length;

            if (this.uploader) {

                if (this.uploader.progress() >= 1) {

                    if (!errorCount) {

                        options.push(h(
                            'span',
                            { className: 'ez-uploader__modal-footer-info' },
                            'All of your images has now been uploaded'
                        ));
                    } else if (errorCount < this.files.length) {

                        options.push(h(
                            'span',
                            { className: 'ez-uploader__modal-footer-info' },
                            errorCount,
                            ' out of ',
                            this.files.length,
                            ' ',
                            this.files.length > 1 ? 'files' : 'file',
                            ' failed to upload'
                        ));
                    } else if (errorCount === this.files.length) {

                        options.push(h(
                            'span',
                            { className: 'ez-uploader__modal-footer-info' },
                            'All of your files failed to upload'
                        ));
                    }

                    if (errorCount) {

                        options.push(h(
                            'div',
                            { 'ez-on-click': this.retryAllFiles.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-blue' },
                            'retry failed files'
                        ));
                    }

                    options.push(h(
                        'div',
                        { 'ez-on-click': this.resetModal.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-green' },
                        'Done'
                    ));
                } else if (this.uploading) {

                    if (errorCount) {

                        options.push(h(
                            'div',
                            { 'ez-on-click': this.retryAllFiles.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-blue' },
                            'retry failed files'
                        ));
                    }

                    options.push(h(
                        'div',
                        { 'ez-on-click': this.pauseUploading.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-orange' },
                        'Pause uploading'
                    ));
                } else {

                    if (this.uploader.progress()) {

                        if (errorCount) {

                            options.push(h(
                                'div',
                                { 'ez-on-click': this.retryAllFiles.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-blue' },
                                'retry failed files'
                            ));
                        }

                        options.push(h(
                            'div',
                            { 'ez-on-click': this.startUploading.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-blue' },
                            'Resume uploading'
                        ));
                    } else if (this.files.length) {

                        options.push(h(
                            'div',
                            { 'ez-on-click': this.startUploading.bind(this), className: 'ez-uploader__modal-button ez-uploader__modal-button-blue' },
                            'Start uploading'
                        ));
                    }
                }
            }

            return options;
        }
    }, {
        key: 'getProgressVDOM',
        value: function getProgressVDOM() {

            var progress = this.uploader && this.uploader.progress() * 100 || 0;
            var background = progress === 100 ? 'background:#27ae60' : '';
            var width = 'width:' + progress + '%';
            var style = width + ';' + background;

            return h('div', { className: 'ez-uploader__total-progress-inner', style: style });
        }
    }, {
        key: 'getVDOM',
        value: function getVDOM() {

            return h(
                'div',
                { className: 'ez-uploader__backdrop' },
                h(
                    'div',
                    { className: 'ez-uploader__modal' },
                    h(
                        'div',
                        { className: 'ez-uploader__modal-header' },
                        h(
                            'div',
                            { 'ez-display-block': !this.uploading, className: 'ez-uploader__modal-title' },
                            this.getTitleVDOM()
                        ),
                        h(
                            'div',
                            { 'ez-on-click': this.close.bind(this), className: 'ez-uploader__modal-cross' },
                            h('span', { className: 'ez-uploader__modal-cross-line' }),
                            h('span', { className: 'ez-uploader__modal-cross-line' })
                        ),
                        this.getErrorVDOM()
                    ),
                    h(
                        'div',
                        { className: 'ez-uploader__total-progress' },
                        this.getProgressVDOM()
                    ),
                    h(
                        'div',
                        { 'ez-uploader-drop': true, className: 'ez-uploader__modal-body' },
                        h('input', { type: 'file', 'ez-uploader-browse': true, style: 'display:none' }),
                        h('input', { type: 'file', 'ez-uploader-browse-directory': true, style: 'display:none' }),
                        this.getBodyVDOM()
                    ),
                    h(
                        'div',
                        { 'ez-show-flex': this.files.length && !this.uploading, className: 'ez-uploader__modal-footer' },
                        h(
                            'div',
                            { className: 'ez-uploader__modal-footer-left' },
                            this.getUploaderLeftOptionsVDOM()
                        ),
                        h(
                            'div',
                            { className: 'ez-uploader__modal-footer-right' },
                            this.getUploaderRightOptionsVDOM()
                        )
                    )
                )
            );
        }
    }, {
        key: 'updateDOMWithThrottle',
        value: function updateDOMWithThrottle() {

            var filesCount = this.files.length;
            var rate = filesCount / 1000;

            this.settings.throttle.per = rate > 1 ? 1 : rate < 0.1 ? 0.1 : rate;

            var current = Date.now();
            var timePassed = (current - this.settings.throttle.lastCheck) / 1000;
            var newAllowance = this.settings.throttle.allowance + timePassed * (this.settings.throttle.rate / this.settings.throttle.per);

            this.settings.throttle.lastCheck = current;

            if (newAllowance >= this.settings.throttle.rate) {

                this.settings.throttle.allowance = this.settings.throttle.rate;
            } else {

                this.settings.throttle.allowance = newAllowance;
            }

            if (this.settings.throttle.allowance >= 1) {

                this.updateDOM();
                this.settings.throttle.allowance -= 1;
            }
        }
    }, {
        key: 'updateDOM',
        value: function updateDOM() {

            /*this.stats = {
                start: 0,
                iterations: 0,
                iterationsPerSecond: 0
            };*/

            if (this.settings.throttle.debug) {

                if (this.stats.start) {
                    this.stats.iterations++;
                    this.stats.iterationsPerSecond = (Date.now() - this.stats.start) / 1000 / this.stats.iterations;
                }

                window.stats = this.stats;
            }

            this.settings.throttle.debug && console.time('update dom');

            var VDOM = this.getVDOM();
            //console.log('-- update vdom', VDOM);

            /*
            console.log('---- UPDATE DOM YO -----');
            console.log('old', this.cachedVDOM);
            console.log('to', VDOM);
            console.log('files', this.uploader.files);
            */
            this.updateElement(this.modal, VDOM.children[0], this.cachedVDOM.children[0]);
            this.cachedVDOM = VDOM;

            this.settings.throttle.debug && console.timeEnd('update dom');

            /*
            console.log('// DONE UPDATING DOM //', this.cachedVDOM);
            */
        }
    }, {
        key: 'files',
        get: function get() {

            return this.uploader && this.uploader.files || [];
        }
    }]);
    return EzUploader;
}(_VDOM2.default);

exports.default = EzUploader;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(13);
var $keys = __webpack_require__(11);

__webpack_require__(36)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6);
var toLength = __webpack_require__(57);
var toAbsoluteIndex = __webpack_require__(58);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(18);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(63) });


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(11);
var gOPS = __webpack_require__(23);
var pIE = __webpack_require__(16);
var toObject = __webpack_require__(13);
var IObject = __webpack_require__(34);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(13);
var $getPrototypeOf = __webpack_require__(42);

__webpack_require__(36)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(24);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
__webpack_require__(78);
module.exports = __webpack_require__(29).f('iterator');


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(74)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(45)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);
var defined = __webpack_require__(17);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(27);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(28);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(11);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(26);
var TO_STRING_TAG = __webpack_require__(10)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(80);
var step = __webpack_require__(81);
var Iterators = __webpack_require__(26);
var toIObject = __webpack_require__(6);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(45)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
__webpack_require__(89);
__webpack_require__(90);
__webpack_require__(91);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(46);
var META = __webpack_require__(85).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(20);
var setToStringTag = __webpack_require__(28);
var uid = __webpack_require__(14);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(29);
var wksDefine = __webpack_require__(30);
var enumKeys = __webpack_require__(86);
var isArray = __webpack_require__(87);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(22);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(27);
var gOPNExt = __webpack_require__(88);
var $GOPD = __webpack_require__(48);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(11);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(47).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(16).f = $propertyIsEnumerable;
  __webpack_require__(23).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(25)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(2);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11);
var gOPS = __webpack_require__(23);
var pIE = __webpack_require__(16);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(35);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(6);
var gOPN = __webpack_require__(47).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 89 */
/***/ (function(module, exports) {



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('asyncIterator');


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('observable');


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(93);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(97);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(24);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(96).set });


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(37)(Function.call, __webpack_require__(48).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(27) });


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

/*
* MIT Licensed
* http://www.23developer.com/opensource
* http://github.com/23/resumable.js
* Steffen Tiedemann Christensen, steffen@23company.com
*/

(function(){
"use strict";

  var Resumable = function(opts){
    if ( !(this instanceof Resumable) ) {
      return new Resumable(opts);
    }
    this.version = 1.0;
    // SUPPORTED BY BROWSER?
    // Check if these features are support by the browser:
    // - File object type
    // - Blob object type
    // - FileList object type
    // - slicing files
    this.support = (
                   (typeof(File)!=='undefined')
                   &&
                   (typeof(Blob)!=='undefined')
                   &&
                   (typeof(FileList)!=='undefined')
                   &&
                   (!!Blob.prototype.webkitSlice||!!Blob.prototype.mozSlice||!!Blob.prototype.slice||false)
                   );
    if(!this.support) return(false);


    // PROPERTIES
    var $ = this;
    $.files = [];
    $.defaults = {
      chunkSize:1*1024*1024,
      forceChunkSize:false,
      simultaneousUploads:3,
      fileParameterName:'file',
      chunkNumberParameterName: 'resumableChunkNumber',
      chunkSizeParameterName: 'resumableChunkSize',
      currentChunkSizeParameterName: 'resumableCurrentChunkSize',
      totalSizeParameterName: 'resumableTotalSize',
      typeParameterName: 'resumableType',
      identifierParameterName: 'resumableIdentifier',
      fileNameParameterName: 'resumableFilename',
      relativePathParameterName: 'resumableRelativePath',
      totalChunksParameterName: 'resumableTotalChunks',
      throttleProgressCallbacks: 0.5,
      query:{},
      headers:{},
      preprocess:null,
      method:'multipart',
      uploadMethod: 'POST',
      testMethod: 'GET',
      prioritizeFirstAndLastChunk:false,
      target:'/',
      testTarget: null,
      parameterNamespace:'',
      testChunks:true,
      generateUniqueIdentifier:null,
      getTarget:null,
      maxChunkRetries:100,
      chunkRetryInterval:undefined,
      permanentErrors:[400, 404, 415, 500, 501],
      maxFiles:undefined,
      withCredentials:false,
      xhrTimeout:0,
      clearInput:true,
      chunkFormat:'blob',
      setChunkTypeFromFile:false,
      maxFilesErrorCallback:function (files, errorCount) {
        var maxFiles = $.getOpt('maxFiles');
        alert('Please upload no more than ' + maxFiles + ' file' + (maxFiles === 1 ? '' : 's') + ' at a time.');
      },
      minFileSize:1,
      minFileSizeErrorCallback:function(file, errorCount) {
        alert(file.fileName||file.name +' is too small, please upload files larger than ' + $h.formatSize($.getOpt('minFileSize')) + '.');
      },
      maxFileSize:undefined,
      maxFileSizeErrorCallback:function(file, errorCount) {
        alert(file.fileName||file.name +' is too large, please upload files less than ' + $h.formatSize($.getOpt('maxFileSize')) + '.');
      },
      fileType: [],
      fileTypeErrorCallback: function(file, errorCount) {
        alert(file.fileName||file.name +' has type not allowed, please upload files of type ' + $.getOpt('fileType') + '.');
      }
    };
    $.opts = opts||{};
    $.getOpt = function(o) {
      var $opt = this;
      // Get multiple option if passed an array
      if(o instanceof Array) {
        var options = {};
        $h.each(o, function(option){
          options[option] = $opt.getOpt(option);
        });
        return options;
      }
      // Otherwise, just return a simple option
      if ($opt instanceof ResumableChunk) {
        if (typeof $opt.opts[o] !== 'undefined') { return $opt.opts[o]; }
        else { $opt = $opt.fileObj; }
      }
      if ($opt instanceof ResumableFile) {
        if (typeof $opt.opts[o] !== 'undefined') { return $opt.opts[o]; }
        else { $opt = $opt.resumableObj; }
      }
      if ($opt instanceof Resumable) {
        if (typeof $opt.opts[o] !== 'undefined') { return $opt.opts[o]; }
        else { return $opt.defaults[o]; }
      }
    };

    // EVENTS
    // catchAll(event, ...)
    // fileSuccess(file), fileProgress(file), fileAdded(file, event), filesAdded(files, filesSkipped), fileRetry(file),
    // fileError(file, message), complete(), progress(), error(message, file), pause()
    $.events = [];
    $.on = function(event,callback){
      $.events.push(event.toLowerCase(), callback);
    };
    $.fire = function(){
      // `arguments` is an object, not array, in FF, so:
      var args = [];
      for (var i=0; i<arguments.length; i++) args.push(arguments[i]);
      // Find event listeners, and support pseudo-event `catchAll`
      var event = args[0].toLowerCase();
      for (var i=0; i<=$.events.length; i+=2) {
        if($.events[i]==event) $.events[i+1].apply($,args.slice(1));
        if($.events[i]=='catchall') $.events[i+1].apply(null,args);
      }
      if(event=='fileerror') $.fire('error', args[2], args[1]);
      if(event=='fileprogress') $.fire('progress');
    };


    // INTERNAL HELPER METHODS (handy, but ultimately not part of uploading)
    var $h = {
      stopEvent: function(e){
        e.stopPropagation();
        e.preventDefault();
      },
      each: function(o,callback){
        if(typeof(o.length)!=='undefined') {
          for (var i=0; i<o.length; i++) {
            // Array or FileList
            if(callback(o[i])===false) return;
          }
        } else {
          for (i in o) {
            // Object
            if(callback(i,o[i])===false) return;
          }
        }
      },
      generateUniqueIdentifier:function(file, event){
        var custom = $.getOpt('generateUniqueIdentifier');
        if(typeof custom === 'function') {
          return custom(file, event);
        }
        var relativePath = file.webkitRelativePath||file.fileName||file.name; // Some confusion in different versions of Firefox
        var size = file.size;
        return(size + '-' + relativePath.replace(/[^0-9a-zA-Z_-]/img, ''));
      },
      contains:function(array,test) {
        var result = false;

        $h.each(array, function(value) {
          if (value == test) {
            result = true;
            return false;
          }
          return true;
        });

        return result;
      },
      formatSize:function(size){
        if(size<1024) {
          return size + ' bytes';
        } else if(size<1024*1024) {
          return (size/1024.0).toFixed(0) + ' KB';
        } else if(size<1024*1024*1024) {
          return (size/1024.0/1024.0).toFixed(1) + ' MB';
        } else {
          return (size/1024.0/1024.0/1024.0).toFixed(1) + ' GB';
        }
      },
      getTarget:function(request, params){
        var target = $.getOpt('target');

        if (request === 'test' && $.getOpt('testTarget')) {
          target = $.getOpt('testTarget') === '/' ? $.getOpt('target') : $.getOpt('testTarget');
        }

        if (typeof target === 'function') {
          return target(params);
        }

        var separator = target.indexOf('?') < 0 ? '?' : '&';
        var joinedParams = params.join('&');

        return target + separator + joinedParams;
      }
    };

    var onDrop = function(event){
      $h.stopEvent(event);

      //handle dropped things as items if we can (this lets us deal with folders nicer in some cases)
      if (event.dataTransfer && event.dataTransfer.items) {
        loadFiles(event.dataTransfer.items, event);
      }
      //else handle them as files
      else if (event.dataTransfer && event.dataTransfer.files) {
        loadFiles(event.dataTransfer.files, event);
      }
    };
    var preventDefault = function(e) {
      e.preventDefault();
    };

    /**
     * processes a single upload item (file or directory)
     * @param {Object} item item to upload, may be file or directory entry
     * @param {string} path current file path
     * @param {File[]} items list of files to append new items to
     * @param {Function} cb callback invoked when item is processed
     */
    function processItem(item, path, items, cb) {
      var entry;
      if(item.isFile){
        // file provided
        return item.file(function(file){
          file.relativePath = path + file.name;
          items.push(file);
          cb();
        });
      }else if(item.isDirectory){
        // item is already a directory entry, just assign
        entry = item;
      }else if(item instanceof File) {
        items.push(item);
      }
      if('function' === typeof item.webkitGetAsEntry){
        // get entry from file object
        entry = item.webkitGetAsEntry();
      }
      if(entry && entry.isDirectory){
        // directory provided, process it
        return processDirectory(entry, path + entry.name + '/', items, cb);
      }
      if('function' === typeof item.getAsFile){
        // item represents a File object, convert it
        item = item.getAsFile();
        if(item instanceof File) {
          item.relativePath = path + item.name;
          items.push(item);
        }
      }
      cb(); // indicate processing is done
    }


    /**
     * cps-style list iteration.
     * invokes all functions in list and waits for their callback to be
     * triggered.
     * @param  {Function[]}   items list of functions expecting callback parameter
     * @param  {Function} cb    callback to trigger after the last callback has been invoked
     */
    function processCallbacks(items, cb){
      if(!items || items.length === 0){
        // empty or no list, invoke callback
        return cb();
      }
      // invoke current function, pass the next part as continuation
      items[0](function(){
        processCallbacks(items.slice(1), cb);
      });
    }

    /**
     * recursively traverse directory and collect files to upload
     * @param  {Object}   directory directory to process
     * @param  {string}   path      current path
     * @param  {File[]}   items     target list of items
     * @param  {Function} cb        callback invoked after traversing directory
     */
    function processDirectory (directory, path, items, cb) {
      var dirReader = directory.createReader();
      dirReader.readEntries(function(entries){
        if(!entries.length){
          // empty directory, skip
          return cb();
        }
        // process all conversion callbacks, finally invoke own one
        processCallbacks(
          entries.map(function(entry){
            // bind all properties except for callback
            return processItem.bind(null, entry, path, items);
          }),
          cb
        );
      });
    }

    /**
     * process items to extract files to be uploaded
     * @param  {File[]} items items to process
     * @param  {Event} event event that led to upload
     */
    function loadFiles(items, event) {
      if(!items.length){
        return; // nothing to do
      }
      $.fire('beforeAdd');
      var files = [];
      processCallbacks(
          Array.prototype.map.call(items, function(item){
            // bind all properties except for callback
            return processItem.bind(null, item, "", files);
          }),
          function(){
            if(files.length){
              // at least one file found
              appendFilesFromFileList(files, event);
            }
          }
      );
    };

    var appendFilesFromFileList = function(fileList, event){
      // check for uploading too many files
      var errorCount = 0;
      var o = $.getOpt(['maxFiles', 'minFileSize', 'maxFileSize', 'maxFilesErrorCallback', 'minFileSizeErrorCallback', 'maxFileSizeErrorCallback', 'fileType', 'fileTypeErrorCallback']);
      if (typeof(o.maxFiles)!=='undefined' && o.maxFiles<(fileList.length+$.files.length)) {
        // if single-file upload, file is already added, and trying to add 1 new file, simply replace the already-added file
        if (o.maxFiles===1 && $.files.length===1 && fileList.length===1) {
          $.removeFile($.files[0]);
        } else {
          o.maxFilesErrorCallback(fileList, errorCount++);
          return false;
        }
      }
      var files = [], filesSkipped = [], remaining = fileList.length;
      var decreaseReamining = function(){
        if(!--remaining){
          // all files processed, trigger event
          if(!files.length && !filesSkipped.length){
            // no succeeded files, just skip
            return;
          }
          window.setTimeout(function(){
            $.fire('filesAdded', files, filesSkipped);
          },0);
        }
      };
      $h.each(fileList, function(file){
        var fileName = file.name;
        if(o.fileType.length > 0){
          var fileTypeFound = false;
          for(var index in o.fileType){
            var extension = '.' + o.fileType[index];
			if(fileName.toLowerCase().indexOf(extension.toLowerCase(), fileName.length - extension.length) !== -1){
              fileTypeFound = true;
              break;
            }
          }
          if (!fileTypeFound) {
            o.fileTypeErrorCallback(file, errorCount++);
            return false;
          }
        }

        if (typeof(o.minFileSize)!=='undefined' && file.size<o.minFileSize) {
          o.minFileSizeErrorCallback(file, errorCount++);
          return false;
        }
        if (typeof(o.maxFileSize)!=='undefined' && file.size>o.maxFileSize) {
          o.maxFileSizeErrorCallback(file, errorCount++);
          return false;
        }

        function addFile(uniqueIdentifier){
          if (!$.getFromUniqueIdentifier(uniqueIdentifier)) {(function(){
            file.uniqueIdentifier = uniqueIdentifier;
            var f = new ResumableFile($, file, uniqueIdentifier);
            $.files.push(f);
            files.push(f);
            f.container = (typeof event != 'undefined' ? event.srcElement : null);
            window.setTimeout(function(){
              $.fire('fileAdded', f, event)
            },0);
          })()} else {
            filesSkipped.push(file);
          };
          decreaseReamining();
        }
        // directories have size == 0
        var uniqueIdentifier = $h.generateUniqueIdentifier(file, event);
        if(uniqueIdentifier && typeof uniqueIdentifier.then === 'function'){
          // Promise or Promise-like object provided as unique identifier
          uniqueIdentifier
          .then(
            function(uniqueIdentifier){
              // unique identifier generation succeeded
              addFile(uniqueIdentifier);
            },
           function(){
              // unique identifier generation failed
              // skip further processing, only decrease file count
              decreaseReamining();
            }
          );
        }else{
          // non-Promise provided as unique identifier, process synchronously
          addFile(uniqueIdentifier);
        }
      });
    };

    // INTERNAL OBJECT TYPES
    function ResumableFile(resumableObj, file, uniqueIdentifier){
      var $ = this;
      $.opts = {};
      $.getOpt = resumableObj.getOpt;
      $._prevProgress = 0;
      $.resumableObj = resumableObj;
      $.file = file;
      $.fileName = file.fileName||file.name; // Some confusion in different versions of Firefox
      $.size = file.size;
      $.relativePath = file.relativePath || file.webkitRelativePath || $.fileName;
      $.uniqueIdentifier = uniqueIdentifier;
      $._pause = false;
      $.container = '';
      var _error = uniqueIdentifier !== undefined;

      // Callback when something happens within the chunk
      var chunkEvent = function(event, message){
        // event can be 'progress', 'success', 'error' or 'retry'
        switch(event){
        case 'progress':
          $.resumableObj.fire('fileProgress', $, message);
          break;
        case 'error':
          $.abort();
          _error = true;
          $.chunks = [];
          $.resumableObj.fire('fileError', $, message);
          break;
        case 'success':
          if(_error) return;
          $.resumableObj.fire('fileProgress', $); // it's at least progress
          if($.isComplete()) {
            $.resumableObj.fire('fileSuccess', $, message);
          }
          break;
        case 'retry':
          $.resumableObj.fire('fileRetry', $);
          break;
        }
      };

      // Main code to set up a file object with chunks,
      // packaged to be able to handle retries if needed.
      $.chunks = [];
      $.abort = function(){
        // Stop current uploads
        var abortCount = 0;
        $h.each($.chunks, function(c){
          if(c.status()=='uploading') {
            c.abort();
            abortCount++;
          }
        });
        if(abortCount>0) $.resumableObj.fire('fileProgress', $);
      };
      $.cancel = function(){
        // Reset this file to be void
        var _chunks = $.chunks;
        $.chunks = [];
        // Stop current uploads
        $h.each(_chunks, function(c){
          if(c.status()=='uploading')  {
            c.abort();
            $.resumableObj.uploadNextChunk();
          }
        });
        $.resumableObj.removeFile($);
        $.resumableObj.fire('fileProgress', $);
      };
      $.retry = function(){
        $.bootstrap();
        var firedRetry = false;
        $.resumableObj.on('chunkingComplete', function(){
          if(!firedRetry) $.resumableObj.upload();
          firedRetry = true;
        });
      };
      $.bootstrap = function(){
        $.abort();
        _error = false;
        // Rebuild stack of chunks from file
        $.chunks = [];
        $._prevProgress = 0;
        var round = $.getOpt('forceChunkSize') ? Math.ceil : Math.floor;
        var maxOffset = Math.max(round($.file.size/$.getOpt('chunkSize')),1);
        for (var offset=0; offset<maxOffset; offset++) {(function(offset){
            window.setTimeout(function(){
                $.chunks.push(new ResumableChunk($.resumableObj, $, offset, chunkEvent));
                $.resumableObj.fire('chunkingProgress',$,offset/maxOffset);
            },0);
        })(offset)}
        window.setTimeout(function(){
            $.resumableObj.fire('chunkingComplete',$);
        },0);
      };
      $.progress = function(){
        if(_error) return(1);
        // Sum up progress across everything
        var ret = 0;
        var error = false;
        $h.each($.chunks, function(c){
          if(c.status()=='error') error = true;
          ret += c.progress(true); // get chunk progress relative to entire file
        });
        ret = (error ? 1 : (ret>0.99999 ? 1 : ret));
        ret = Math.max($._prevProgress, ret); // We don't want to lose percentages when an upload is paused
        $._prevProgress = ret;
        return(ret);
      };
      $.isUploading = function(){
        var uploading = false;
        $h.each($.chunks, function(chunk){
          if(chunk.status()=='uploading') {
            uploading = true;
            return(false);
          }
        });
        return(uploading);
      };
      $.isComplete = function(){
        var outstanding = false;
        $h.each($.chunks, function(chunk){
          var status = chunk.status();
          if(status=='pending' || status=='uploading' || chunk.preprocessState === 1) {
            outstanding = true;
            return(false);
          }
        });
        return(!outstanding);
      };
      $.pause = function(pause){
          if(typeof(pause)==='undefined'){
              $._pause = ($._pause ? false : true);
          }else{
              $._pause = pause;
          }
      };
      $.isPaused = function() {
        return $._pause;
      };


      // Bootstrap and return
      $.resumableObj.fire('chunkingStart', $);
      $.bootstrap();
      return(this);
    }


    function ResumableChunk(resumableObj, fileObj, offset, callback){
      var $ = this;
      $.opts = {};
      $.getOpt = resumableObj.getOpt;
      $.resumableObj = resumableObj;
      $.fileObj = fileObj;
      $.fileObjSize = fileObj.size;
      $.fileObjType = fileObj.file.type;
      $.offset = offset;
      $.callback = callback;
      $.lastProgressCallback = (new Date);
      $.tested = false;
      $.retries = 0;
      $.pendingRetry = false;
      $.preprocessState = 0; // 0 = unprocessed, 1 = processing, 2 = finished

      // Computed properties
      var chunkSize = $.getOpt('chunkSize');
      $.loaded = 0;
      $.startByte = $.offset*chunkSize;
      $.endByte = Math.min($.fileObjSize, ($.offset+1)*chunkSize);
      if ($.fileObjSize-$.endByte < chunkSize && !$.getOpt('forceChunkSize')) {
        // The last chunk will be bigger than the chunk size, but less than 2*chunkSize
        $.endByte = $.fileObjSize;
      }
      $.xhr = null;

      // test() makes a GET request without any data to see if the chunk has already been uploaded in a previous session
      $.test = function(){
        // Set up request and listen for event
        $.xhr = new XMLHttpRequest();

        var testHandler = function(e){
          $.tested = true;
          var status = $.status();
          if(status=='success') {
            $.callback(status, $.message());
            $.resumableObj.uploadNextChunk();
          } else {
            $.send();
          }
        };
        $.xhr.addEventListener('load', testHandler, false);
        $.xhr.addEventListener('error', testHandler, false);
        $.xhr.addEventListener('timeout', testHandler, false);

        // Add data from the query options
        var params = [];
        var parameterNamespace = $.getOpt('parameterNamespace');
        var customQuery = $.getOpt('query');
        if(typeof customQuery == 'function') customQuery = customQuery($.fileObj, $);
        $h.each(customQuery, function(k,v){
          params.push([encodeURIComponent(parameterNamespace+k), encodeURIComponent(v)].join('='));
        });
        // Add extra data to identify chunk
        params = params.concat(
          [
            // define key/value pairs for additional parameters
            ['chunkNumberParameterName', $.offset + 1],
            ['chunkSizeParameterName', $.getOpt('chunkSize')],
            ['currentChunkSizeParameterName', $.endByte - $.startByte],
            ['totalSizeParameterName', $.fileObjSize],
            ['typeParameterName', $.fileObjType],
            ['identifierParameterName', $.fileObj.uniqueIdentifier],
            ['fileNameParameterName', $.fileObj.fileName],
            ['relativePathParameterName', $.fileObj.relativePath],
            ['totalChunksParameterName', $.fileObj.chunks.length]
          ].filter(function(pair){
            // include items that resolve to truthy values
            // i.e. exclude false, null, undefined and empty strings
            return $.getOpt(pair[0]);
          })
          .map(function(pair){
            // map each key/value pair to its final form
            return [
              parameterNamespace + $.getOpt(pair[0]),
              encodeURIComponent(pair[1])
            ].join('=');
          })
        );
        // Append the relevant chunk and send it
        $.xhr.open($.getOpt('testMethod'), $h.getTarget('test', params));
        $.xhr.timeout = $.getOpt('xhrTimeout');
        $.xhr.withCredentials = $.getOpt('withCredentials');
        // Add data from header options
        var customHeaders = $.getOpt('headers');
        if(typeof customHeaders === 'function') {
          customHeaders = customHeaders($.fileObj, $);
        }
        $h.each(customHeaders, function(k,v) {
          $.xhr.setRequestHeader(k, v);
        });
        $.xhr.send(null);
      };

      $.preprocessFinished = function(){
        $.preprocessState = 2;
        $.send();
      };

      // send() uploads the actual data in a POST call
      $.send = function(){
        var preprocess = $.getOpt('preprocess');
        if(typeof preprocess === 'function') {
          switch($.preprocessState) {
          case 0: $.preprocessState = 1; preprocess($); return;
          case 1: return;
          case 2: break;
          }
        }
        if($.getOpt('testChunks') && !$.tested) {
          $.test();
          return;
        }

        // Set up request and listen for event
        $.xhr = new XMLHttpRequest();

        // Progress
        $.xhr.upload.addEventListener('progress', function(e){
          if( (new Date) - $.lastProgressCallback > $.getOpt('throttleProgressCallbacks') * 1000 ) {
            $.callback('progress');
            $.lastProgressCallback = (new Date);
          }
          $.loaded=e.loaded||0;
        }, false);
        $.loaded = 0;
        $.pendingRetry = false;
        $.callback('progress');

        // Done (either done, failed or retry)
        var doneHandler = function(e){
          var status = $.status();
          if(status=='success'||status=='error') {
            $.callback(status, $.message());
            $.resumableObj.uploadNextChunk();
          } else {
            $.callback('retry', $.message());
            $.abort();
            $.retries++;
            var retryInterval = $.getOpt('chunkRetryInterval');
            if(retryInterval !== undefined) {
              $.pendingRetry = true;
              setTimeout($.send, retryInterval);
            } else {
              $.send();
            }
          }
        };
        $.xhr.addEventListener('load', doneHandler, false);
        $.xhr.addEventListener('error', doneHandler, false);
        $.xhr.addEventListener('timeout', doneHandler, false);

        // Set up the basic query data from Resumable
        var query = [
          ['chunkNumberParameterName', $.offset + 1],
          ['chunkSizeParameterName', $.getOpt('chunkSize')],
          ['currentChunkSizeParameterName', $.endByte - $.startByte],
          ['totalSizeParameterName', $.fileObjSize],
          ['typeParameterName', $.fileObjType],
          ['identifierParameterName', $.fileObj.uniqueIdentifier],
          ['fileNameParameterName', $.fileObj.fileName],
          ['relativePathParameterName', $.fileObj.relativePath],
          ['totalChunksParameterName', $.fileObj.chunks.length],
        ].filter(function(pair){
          // include items that resolve to truthy values
          // i.e. exclude false, null, undefined and empty strings
          return $.getOpt(pair[0]);
        })
        .reduce(function(query, pair){
          // assign query key/value
          query[$.getOpt(pair[0])] = pair[1];
          return query;
        }, {});
        // Mix in custom data
        var customQuery = $.getOpt('query');
        if(typeof customQuery == 'function') customQuery = customQuery($.fileObj, $);
        $h.each(customQuery, function(k,v){
          query[k] = v;
        });

        var func = ($.fileObj.file.slice ? 'slice' : ($.fileObj.file.mozSlice ? 'mozSlice' : ($.fileObj.file.webkitSlice ? 'webkitSlice' : 'slice')));
        var bytes = $.fileObj.file[func]($.startByte, $.endByte, $.getOpt('setChunkTypeFromFile') ? $.fileObj.file.type : "");
        var data = null;
        var params = [];

        var parameterNamespace = $.getOpt('parameterNamespace');
                if ($.getOpt('method') === 'octet') {
                    // Add data from the query options
                    data = bytes;
                    $h.each(query, function (k, v) {
                        params.push([encodeURIComponent(parameterNamespace + k), encodeURIComponent(v)].join('='));
                    });
                } else {
                    // Add data from the query options
                    data = new FormData();
                    $h.each(query, function (k, v) {
                        data.append(parameterNamespace + k, v);
                        params.push([encodeURIComponent(parameterNamespace + k), encodeURIComponent(v)].join('='));
                    });
                    if ($.getOpt('chunkFormat') == 'blob') {
                        data.append(parameterNamespace + $.getOpt('fileParameterName'), bytes, $.fileObj.fileName);
                    }
                    else if ($.getOpt('chunkFormat') == 'base64') {
                        var fr = new FileReader();
                        fr.onload = function (e) {
                            data.append(parameterNamespace + $.getOpt('fileParameterName'), fr.result);
                            $.xhr.send(data);
                        }
                        fr.readAsDataURL(bytes);
                    }
                }

        var target = $h.getTarget('upload', params);
        var method = $.getOpt('uploadMethod');

        $.xhr.open(method, target);
        if ($.getOpt('method') === 'octet') {
          $.xhr.setRequestHeader('Content-Type', 'application/octet-stream');
        }
        $.xhr.timeout = $.getOpt('xhrTimeout');
        $.xhr.withCredentials = $.getOpt('withCredentials');
        // Add data from header options
        var customHeaders = $.getOpt('headers');
        if(typeof customHeaders === 'function') {
          customHeaders = customHeaders($.fileObj, $);
        }

        $h.each(customHeaders, function(k,v) {
          $.xhr.setRequestHeader(k, v);
        });

                if ($.getOpt('chunkFormat') == 'blob') {
                    $.xhr.send(data);
                }
      };
      $.abort = function(){
        // Abort and reset
        if($.xhr) $.xhr.abort();
        $.xhr = null;
      };
      $.status = function(){
        // Returns: 'pending', 'uploading', 'success', 'error'
        if($.pendingRetry) {
          // if pending retry then that's effectively the same as actively uploading,
          // there might just be a slight delay before the retry starts
          return('uploading');
        } else if(!$.xhr) {
          return('pending');
        } else if($.xhr.readyState<4) {
          // Status is really 'OPENED', 'HEADERS_RECEIVED' or 'LOADING' - meaning that stuff is happening
          return('uploading');
        } else {
          if($.xhr.status == 200 || $.xhr.status == 201) {
            // HTTP 200, 201 (created)
            return('success');
          } else if($h.contains($.getOpt('permanentErrors'), $.xhr.status) || $.retries >= $.getOpt('maxChunkRetries')) {
            // HTTP 415/500/501, permanent error
            return('error');
          } else {
            // this should never happen, but we'll reset and queue a retry
            // a likely case for this would be 503 service unavailable
            $.abort();
            return('pending');
          }
        }
      };
      $.message = function(){
        return($.xhr ? $.xhr.responseText : '');
      };
      $.progress = function(relative){
        if(typeof(relative)==='undefined') relative = false;
        var factor = (relative ? ($.endByte-$.startByte)/$.fileObjSize : 1);
        if($.pendingRetry) return(0);
        if(!$.xhr || !$.xhr.status) factor*=.95;
        var s = $.status();
        switch(s){
        case 'success':
        case 'error':
          return(1*factor);
        case 'pending':
          return(0*factor);
        default:
          return($.loaded/($.endByte-$.startByte)*factor);
        }
      };
      return(this);
    }

    // QUEUE
    $.uploadNextChunk = function(){
      var found = false;

      // In some cases (such as videos) it's really handy to upload the first
      // and last chunk of a file quickly; this let's the server check the file's
      // metadata and determine if there's even a point in continuing.
      if ($.getOpt('prioritizeFirstAndLastChunk')) {
        $h.each($.files, function(file){
          if(file.chunks.length && file.chunks[0].status()=='pending' && file.chunks[0].preprocessState === 0) {
            file.chunks[0].send();
            found = true;
            return(false);
          }
          if(file.chunks.length>1 && file.chunks[file.chunks.length-1].status()=='pending' && file.chunks[file.chunks.length-1].preprocessState === 0) {
            file.chunks[file.chunks.length-1].send();
            found = true;
            return(false);
          }
        });
        if(found) return(true);
      }

      // Now, simply look for the next, best thing to upload
      $h.each($.files, function(file){
        if(file.isPaused()===false){
         $h.each(file.chunks, function(chunk){
           if(chunk.status()=='pending' && chunk.preprocessState === 0) {
             chunk.send();
             found = true;
             return(false);
           }
          });
        }
        if(found) return(false);
      });
      if(found) return(true);

      // The are no more outstanding chunks to upload, check is everything is done
      var outstanding = false;
      $h.each($.files, function(file){
        if(!file.isComplete()) {
          outstanding = true;
          return(false);
        }
      });
      if(!outstanding) {
        // All chunks have been uploaded, complete
        $.fire('complete');
      }
      return(false);
    };


    // PUBLIC METHODS FOR RESUMABLE.JS
    $.assignBrowse = function(domNodes, isDirectory){
      if(typeof(domNodes.length)=='undefined') domNodes = [domNodes];

      $h.each(domNodes, function(domNode) {
        var input;
        if(domNode.tagName==='INPUT' && domNode.type==='file'){
          input = domNode;
        } else {
          input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.style.display = 'none';
          domNode.addEventListener('click', function(){
            input.style.opacity = 0;
            input.style.display='block';
            input.focus();
            input.click();
            input.style.display='none';
          }, false);
          domNode.appendChild(input);
        }
        var maxFiles = $.getOpt('maxFiles');
        if (typeof(maxFiles)==='undefined'||maxFiles!=1){
          input.setAttribute('multiple', 'multiple');
        } else {
          input.removeAttribute('multiple');
        }
        if(isDirectory){
          input.setAttribute('webkitdirectory', 'webkitdirectory');
        } else {
          input.removeAttribute('webkitdirectory');
        }
        var fileTypes = $.getOpt('fileType');
        if (typeof (fileTypes) !== 'undefined' && fileTypes.length >= 1) {
          input.setAttribute('accept', fileTypes.map(function (e) { return '.' + e }).join(','));
        }
        else {
          input.removeAttribute('accept');
        }
        // When new files are added, simply append them to the overall list
        input.addEventListener('change', function(e){
          appendFilesFromFileList(e.target.files,e);
          var clearInput = $.getOpt('clearInput');
          if (clearInput) {
            e.target.value = '';
          }
        }, false);
      });
    };
    $.assignDrop = function(domNodes){
      if(typeof(domNodes.length)=='undefined') domNodes = [domNodes];

      $h.each(domNodes, function(domNode) {
        domNode.addEventListener('dragover', preventDefault, false);
        domNode.addEventListener('dragenter', preventDefault, false);
        domNode.addEventListener('drop', onDrop, false);
      });
    };
    $.unAssignDrop = function(domNodes) {
      if (typeof(domNodes.length) == 'undefined') domNodes = [domNodes];

      $h.each(domNodes, function(domNode) {
        domNode.removeEventListener('dragover', preventDefault);
        domNode.removeEventListener('dragenter', preventDefault);
        domNode.removeEventListener('drop', onDrop);
      });
    };
    $.isUploading = function(){
      var uploading = false;
      $h.each($.files, function(file){
        if (file.isUploading()) {
          uploading = true;
          return(false);
        }
      });
      return(uploading);
    };
    $.upload = function(){
      // Make sure we don't start too many uploads at once
      if($.isUploading()) return;
      // Kick off the queue
      $.fire('uploadStart');
      for (var num=1; num<=$.getOpt('simultaneousUploads'); num++) {
        $.uploadNextChunk();
      }
    };
    $.pause = function(){
      // Resume all chunks currently being uploaded
      $h.each($.files, function(file){
        file.abort();
      });
      $.fire('pause');
    };
    $.cancel = function(){
      $.fire('beforeCancel');
      for(var i = $.files.length - 1; i >= 0; i--) {
        $.files[i].cancel();
      }
      $.fire('cancel');
    };
    $.progress = function(){
      var totalDone = 0;
      var totalSize = 0;
      // Resume all chunks currently being uploaded
      $h.each($.files, function(file){
        totalDone += file.progress()*file.size;
        totalSize += file.size;
      });
      return(totalSize>0 ? totalDone/totalSize : 0);
    };
    $.addFile = function(file, event){
      appendFilesFromFileList([file], event);
    };
    $.addFiles = function(files, event){
      appendFilesFromFileList(files, event);
    };
    $.removeFile = function(file){
      for(var i = $.files.length - 1; i >= 0; i--) {
        if($.files[i] === file) {
          $.files.splice(i, 1);
        }
      }
    };
    $.getFromUniqueIdentifier = function(uniqueIdentifier){
      var ret = false;
      $h.each($.files, function(f){
        if(f.uniqueIdentifier==uniqueIdentifier) ret = f;
      });
      return(ret);
    };
    $.getSize = function(){
      var totalSize = 0;
      $h.each($.files, function(file){
        totalSize += file.size;
      });
      return(totalSize);
    };
    $.handleDropEvent = function (e) {
      onDrop(e);
    };
    $.handleChangeEvent = function (e) {
      appendFilesFromFileList(e.target.files, e);
      e.target.value = '';
    };
    $.updateQuery = function(query){
        $.opts.query = query;
    };

    return(this);
  };


  // Node.js-style export for Node and Component
  if (true) {
    module.exports = Resumable;
  } else if (typeof define === "function" && define.amd) {
    // AMD/requirejs: Define the module
    define(function(){
      return Resumable;
    });
  } else {
    // Browser: Expose to window
    window.Resumable = Resumable;
  }

})();


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["load"] = load;
/* harmony export (immutable) */ __webpack_exports__["loadView"] = loadView;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_header__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tags__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iptc_tags__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xmp_tags__ = __webpack_require__(112);
/**
 * ExifReader
 * http://github.com/mattiasw/exifreader
 * Copyright (C) 2011-2018  Mattias Wallander <mattias@wallander.eu>
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */






/* harmony default export */ __webpack_exports__["default"] = ({load, loadView});

function load(data, options = {expanded: false}) {
    let dataView;

    try {
        dataView = new DataView(data);
    } catch (error) {
        console.warn('Warning: A full DataView implementation is not available. If you\'re using Node.js you probably want to do this:\n  1. Install a DataView polyfill, e.g. jdataview: npm install --save jdataview\n  2. Require that at the top of your script: global.DataView = require(\'jdataview\');\nSee an example of this in the ExifReader example directory.');  // eslint-disable-line no-console
        return {};
    }

    return loadView(dataView, options);
}

function loadView(dataView, options = {expanded: false}) {
    let foundMetaData = false;
    let tags = {};

    __WEBPACK_IMPORTED_MODULE_0__image_header__["a" /* default */].check(dataView);
    const {tiffHeaderOffset, iptcDataOffset, xmpDataOffset, xmpFieldLength} = __WEBPACK_IMPORTED_MODULE_0__image_header__["a" /* default */].parseAppMarkers(dataView);

    if (hasExifData(tiffHeaderOffset)) {
        foundMetaData = true;
        const readTags = __WEBPACK_IMPORTED_MODULE_1__tags__["a" /* default */].read(dataView, tiffHeaderOffset);
        if (options.expanded) {
            tags.exif = readTags;
        } else {
            tags = Object.assign({}, tags, readTags);
        }
    }
    if (hasIptcData(iptcDataOffset)) {
        foundMetaData = true;
        const readTags = __WEBPACK_IMPORTED_MODULE_2__iptc_tags__["a" /* default */].read(dataView, iptcDataOffset);
        if (options.expanded) {
            tags.iptc = readTags;
        } else {
            tags = Object.assign({}, tags, readTags);
        }
    }
    if (hasXmpData(xmpDataOffset)) {
        foundMetaData = true;
        const readTags = __WEBPACK_IMPORTED_MODULE_3__xmp_tags__["a" /* default */].read(dataView, xmpDataOffset, xmpFieldLength);
        if (options.expanded) {
            tags.xmp = readTags;
        } else {
            tags = Object.assign({}, tags, readTags);
        }
    }
    if (!foundMetaData) {
        throw new Error('No Exif data');
    }

    return tags;
}

function hasExifData(tiffHeaderOffset) {
    return tiffHeaderOffset !== undefined;
}

function hasIptcData(iptcDataOffset) {
    return iptcDataOffset !== undefined;
}

function hasXmpData(xmpDataOffset) {
    return xmpDataOffset !== undefined;
}


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(49);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const MIN_DATA_BUFFER_LENGTH = 2;
const JPEG_ID = 0xffd8;
const JPEG_ID_SIZE = 2;
const APP_ID_OFFSET = 4;
const APP_MARKER_SIZE = 2;
const TIFF_HEADER_OFFSET = 10;  // From start of APP1 marker.
const IPTC_DATA_OFFSET = 18;  // From start of APP13 marker.
const XMP_DATA_OFFSET = 33;  // From start of APP1 marker.
const APP0_MARKER = 0xffe0;
const APP1_MARKER = 0xffe1;
const APP13_MARKER = 0xffed;
const APP15_MARKER = 0xffef;
const COMMENT_MARKER = 0xfffe;
const APP1_EXIF_IDENTIFIER = 'Exif';
const APP1_XMP_IDENTIFIER = 'http://ns.adobe.com/xap/1.0/';
const APP13_IPTC_IDENTIFIER = 'Photoshop 3.0';

/* harmony default export */ __webpack_exports__["a"] = ({
    check,
    parseAppMarkers
});

function check(dataView) {
    if ((dataView.byteLength < MIN_DATA_BUFFER_LENGTH) || (dataView.getUint16(0, false) !== JPEG_ID)) {
        throw new Error('Invalid image format');
    }
}

function parseAppMarkers(dataView) {
    let appMarkerPosition = JPEG_ID_SIZE;
    let fieldLength;
    let tiffHeaderOffset;
    let iptcDataOffset;
    let xmpDataOffset;
    let xmpFieldLength;

    while (appMarkerPosition + APP_ID_OFFSET + 5 <= dataView.byteLength) {
        if (isApp1ExifMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
            tiffHeaderOffset = appMarkerPosition + TIFF_HEADER_OFFSET;
        } else if (isApp1XMPMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
            xmpDataOffset = appMarkerPosition + XMP_DATA_OFFSET;
            xmpFieldLength = fieldLength - (XMP_DATA_OFFSET - APP_MARKER_SIZE);
        } else if (isApp13PhotoshopMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
            iptcDataOffset = appMarkerPosition + IPTC_DATA_OFFSET;
        } else if (isAppMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
        } else {
            break;
        }
        appMarkerPosition += APP_MARKER_SIZE + fieldLength;
    }

    return {
        hasAppMarkers: appMarkerPosition > JPEG_ID_SIZE,
        tiffHeaderOffset,
        iptcDataOffset,
        xmpDataOffset,
        xmpFieldLength
    };
}

function isApp1ExifMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP1_EXIF_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition, false) === APP1_MARKER)
        && (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getStringFromDataView */])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_EXIF_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength, false) === 0x00);
}

function isApp1XMPMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP1_XMP_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition, false) === APP1_MARKER)
        && (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getStringFromDataView */])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength, false) === 0x00);
}

function isApp13PhotoshopMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP13_IPTC_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition, false) === APP13_MARKER)
        && (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getStringFromDataView */])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP13_IPTC_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength, false) === 0x00);
}

function isAppMarker(dataView, appMarkerPosition) {
    const appMarker = dataView.getUint16(appMarkerPosition, false);
    return ((appMarker >= APP0_MARKER) && (appMarker <= APP15_MARKER))
        || (appMarker === COMMENT_MARKER);
}


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byte_order__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tag_names__ = __webpack_require__(105);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */





const EXIF_IFD_POINTER_KEY = 'Exif IFD Pointer';
const GPS_INFO_IFD_POINTER_KEY = 'GPS Info IFD Pointer';
const INTEROPERABILITY_IFD_POINTER_KEY = 'Interoperability IFD Pointer';

const getTagValueAt = {
    1: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getByteAt,
    2: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getAsciiAt,
    3: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getShortAt,
    4: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getLongAt,
    5: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getRationalAt,
    7: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getUndefinedAt,
    9: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getSlongAt,
    10: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getSrationalAt
};

/* harmony default export */ __webpack_exports__["a"] = ({
    read
});

function read(dataView, tiffHeaderOffset) {
    const byteOrder = __WEBPACK_IMPORTED_MODULE_0__byte_order__["a" /* default */].getByteOrder(dataView, tiffHeaderOffset);
    let tags = read0thIfd(dataView, tiffHeaderOffset, byteOrder);
    tags = readExifIfd(tags, dataView, tiffHeaderOffset, byteOrder);
    tags = readGpsIfd(tags, dataView, tiffHeaderOffset, byteOrder);
    tags = readInteroperabilityIfd(tags, dataView, tiffHeaderOffset, byteOrder);

    return tags;
}

function read0thIfd(dataView, tiffHeaderOffset, byteOrder) {
    return readIfd(dataView, '0th', tiffHeaderOffset, get0thIfdOffset(dataView, tiffHeaderOffset, byteOrder), byteOrder);
}

function get0thIfdOffset(dataView, tiffHeaderOffset, byteOrder) {
    return tiffHeaderOffset + __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getLongAt(dataView, tiffHeaderOffset + 4, byteOrder);
}

function readExifIfd(tags, dataView, tiffHeaderOffset, byteOrder) {
    if (tags[EXIF_IFD_POINTER_KEY] !== undefined) {
        return Object.assign(tags, readIfd(dataView, 'exif', tiffHeaderOffset, tiffHeaderOffset + tags[EXIF_IFD_POINTER_KEY].value, byteOrder));
    }

    return tags;
}

function readGpsIfd(tags, dataView, tiffHeaderOffset, byteOrder) {
    if (tags[GPS_INFO_IFD_POINTER_KEY] !== undefined) {
        return Object.assign(tags, readIfd(dataView, 'gps', tiffHeaderOffset, tiffHeaderOffset + tags[GPS_INFO_IFD_POINTER_KEY].value, byteOrder));
    }

    return tags;
}

function readInteroperabilityIfd(tags, dataView, tiffHeaderOffset, byteOrder) {
    if (tags[INTEROPERABILITY_IFD_POINTER_KEY] !== undefined) {
        return Object.assign(tags, readIfd(dataView, 'interoperability', tiffHeaderOffset, tiffHeaderOffset + tags[INTEROPERABILITY_IFD_POINTER_KEY].value, byteOrder));
    }

    return tags;
}

function readIfd(dataView, ifdType, tiffHeaderOffset, offset, byteOrder) {
    const FIELD_COUNT_SIZE = __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getTypeSize('SHORT');
    const FIELD_SIZE = 12;

    const tags = {};
    const numberOfFields = __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getShortAt(dataView, offset, byteOrder);

    offset += FIELD_COUNT_SIZE;
    for (let fieldIndex = 0; fieldIndex < numberOfFields; fieldIndex++) {
        const tag = readTag(dataView, ifdType, tiffHeaderOffset, offset, byteOrder);
        if (tag !== undefined) {
            tags[tag.name] = {'value': tag.value, 'description': tag.description};
        }
        offset += FIELD_SIZE;
    }

    return tags;
}

function readTag(dataView, ifdType, tiffHeaderOffset, offset, byteOrder) {
    const TAG_TYPE_OFFSET = __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getTypeSize('SHORT');
    const TAG_COUNT_OFFSET = TAG_TYPE_OFFSET + __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getTypeSize('SHORT');
    const TAG_VALUE_OFFSET = TAG_COUNT_OFFSET + __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getTypeSize('LONG');

    const tagCode = __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getShortAt(dataView, offset, byteOrder);
    const tagType = __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getShortAt(dataView, offset + TAG_TYPE_OFFSET, byteOrder);
    const tagCount = __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getLongAt(dataView, offset + TAG_COUNT_OFFSET, byteOrder);
    let tagValue;

    if (__WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].typeSizes[tagType] === undefined) {
        return undefined;
    }

    if (tagValueFitsInOffsetSlot(tagType, tagCount)) {
        tagValue = getTagValue(dataView, offset + TAG_VALUE_OFFSET, tagType, tagCount, byteOrder);
    } else {
        const tagValueOffset = __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getLongAt(dataView, offset + TAG_VALUE_OFFSET, byteOrder);
        if (tagValueFitsInDataView(dataView, tiffHeaderOffset, tagValueOffset, tagType, tagCount)) {
            tagValue = getTagValue(dataView, tiffHeaderOffset + tagValueOffset, tagType, tagCount, byteOrder);
        } else {
            tagValue = '<faulty value>';
        }
    }

    if (tagType === __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].tagTypes['ASCII']) {
        tagValue = splitNullSeparatedAsciiString(tagValue);
        tagValue = decodeAsciiValue(tagValue);
    }

    if (__WEBPACK_IMPORTED_MODULE_2__tag_names__["a" /* default */][ifdType][tagCode] !== undefined) {
        let tagName, tagDescription;

        if ((__WEBPACK_IMPORTED_MODULE_2__tag_names__["a" /* default */][ifdType][tagCode]['name'] !== undefined) && (__WEBPACK_IMPORTED_MODULE_2__tag_names__["a" /* default */][ifdType][tagCode]['description'] !== undefined)) {
            tagName = __WEBPACK_IMPORTED_MODULE_2__tag_names__["a" /* default */][ifdType][tagCode]['name'];
            tagDescription = __WEBPACK_IMPORTED_MODULE_2__tag_names__["a" /* default */][ifdType][tagCode]['description'](tagValue);
        } else {
            tagName = __WEBPACK_IMPORTED_MODULE_2__tag_names__["a" /* default */][ifdType][tagCode];
            if (tagValue instanceof Array) {
                tagDescription = tagValue.join(', ');
            } else {
                tagDescription = tagValue;
            }
        }
        return {
            name: tagName,
            value: tagValue,
            description: tagDescription
        };
    }

    return {
        name: `undefined-${tagCode}`,
        value: tagValue,
        description: tagValue
    };
}

function tagValueFitsInOffsetSlot(tagType, tagCount) {
    return __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].typeSizes[tagType] * tagCount <= __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getTypeSize('LONG');
}

function getTagValue(dataView, offset, type, count, byteOrder) {
    let value = [];

    for (let valueIndex = 0; valueIndex < count; valueIndex++) {
        value.push(getTagValueAt[type](dataView, offset, byteOrder));
        offset += __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].typeSizes[type];
    }

    if (type === __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].tagTypes['ASCII']) {
        value = __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].getAsciiValue(value);
    } else if (value.length === 1) {
        value = value[0];
    }

    return value;
}

function tagValueFitsInDataView(dataView, tiffHeaderOffset, tagValueOffset, tagType, tagCount) {
    return tiffHeaderOffset + tagValueOffset + __WEBPACK_IMPORTED_MODULE_1__types__["a" /* default */].typeSizes[tagType] * tagCount <= dataView.byteLength;
}

function splitNullSeparatedAsciiString(string) {
    const tagValue = [];
    let i = 0;

    for (const character of string) {
        if (character === '\x00') {
            i++;
            continue;
        }
        if (tagValue[i] === undefined) {
            tagValue[i] = '';
        }
        tagValue[i] += character;
    }

    return tagValue;
}

function decodeAsciiValue(asciiValue) {
    try {
        return asciiValue.map((value) => decodeURIComponent(escape(value)));
    } catch (error) {
        return asciiValue;
    }
}


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byte_order__ = __webpack_require__(50);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const typeSizes = {
    1: 1,  // BYTE
    2: 1,  // ASCII
    3: 2,  // SHORT
    4: 4,  // LONG
    5: 8,  // RATIONAL
    7: 1,  // UNDEFINED
    9: 4,  // SLONG
    10: 8  // SRATIONAL
};

const tagTypes = {
    'BYTE': 1,
    'ASCII': 2,
    'SHORT': 3,
    'LONG': 4,
    'RATIONAL': 5,
    'UNDEFINED': 7,
    'SLONG': 9,
    'SRATIONAL': 10
};

/* harmony default export */ __webpack_exports__["a"] = ({
    getAsciiValue,
    getByteAt,
    getAsciiAt,
    getShortAt,
    getLongAt,
    getRationalAt,
    getUndefinedAt,
    getSlongAt,
    getSrationalAt,
    typeSizes,
    tagTypes,
    getTypeSize
});

function getAsciiValue(charArray) {
    return charArray.map((charCode) => String.fromCharCode(charCode));
}

function getByteAt(dataView, offset) {
    return dataView.getUint8(offset);
}

function getAsciiAt(dataView, offset) {
    return dataView.getUint8(offset);
}

function getShortAt(dataView, offset, byteOrder) {
    return dataView.getUint16(offset, byteOrder === __WEBPACK_IMPORTED_MODULE_0__byte_order__["a" /* default */].LITTLE_ENDIAN);
}

function getLongAt(dataView, offset, byteOrder) {
    return dataView.getUint32(offset, byteOrder === __WEBPACK_IMPORTED_MODULE_0__byte_order__["a" /* default */].LITTLE_ENDIAN);
}

function getRationalAt(dataView, offset, byteOrder) {
    return getLongAt(dataView, offset, byteOrder) / getLongAt(dataView, offset + 4, byteOrder);
}

function getUndefinedAt(dataView, offset) {
    return getByteAt(dataView, offset);
}

function getSlongAt(dataView, offset, byteOrder) {
    return dataView.getInt32(offset, byteOrder === __WEBPACK_IMPORTED_MODULE_0__byte_order__["a" /* default */].LITTLE_ENDIAN);
}

function getSrationalAt(dataView, offset, byteOrder) {
    return getSlongAt(dataView, offset, byteOrder) / getSlongAt(dataView, offset + 4, byteOrder);
}

function getTypeSize(typeName) {
    if (tagTypes[typeName] === undefined) {
        throw new Error('No such type found.');
    }

    return typeSizes[tagTypes[typeName]];
}


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_names_0th_ifd__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag_names_exif_ifd__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tag_names_gps_ifd__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag_names_interoperability_ifd__ = __webpack_require__(109);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */






/* harmony default export */ __webpack_exports__["a"] = ({
    '0th': __WEBPACK_IMPORTED_MODULE_0__tag_names_0th_ifd__["a" /* default */],
    'exif': __WEBPACK_IMPORTED_MODULE_1__tag_names_exif_ifd__["a" /* default */],
    'gps': __WEBPACK_IMPORTED_MODULE_2__tag_names_gps_ifd__["a" /* default */],
    'interoperability': __WEBPACK_IMPORTED_MODULE_3__tag_names_interoperability_ifd__["a" /* default */]
});


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["a"] = ({
    0x0100: 'ImageWidth',
    0x0101: 'ImageLength',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x010e: 'ImageDescription',
    0x010f: 'Make',
    0x0110: 'Model',
    0x0111: 'StripOffsets',
    0x0112: {
        name: 'Orientation',
        description: (value) => {
            if (value === 1) {
                return 'top-left';
            }
            if (value === 2) {
                return 'top-right';
            }
            if (value === 3) {
                return 'bottom-right';
            }
            if (value === 4) {
                return 'bottom-left';
            }
            if (value === 5) {
                return 'left-top';
            }
            if (value === 6) {
                return 'right-top';
            }
            if (value === 7) {
                return 'right-bottom';
            }
            if (value === 8) {
                return 'left-bottom';
            }
            return 'Undefined';
        }
    },
    0x0115: 'SamplesPerPixel',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x011a: 'XResolution',
    0x011b: 'YResolution',
    0x011c: 'PlanarConfiguration',
    0x0128: {
        name: 'ResolutionUnit',
        description: (value) => {
            if (value === 2) {
                return 'inches';
            }
            if (value === 3) {
                return 'centimeters';
            }
            return 'Unknown';
        }
    },
    0x012d: 'TransferFunction',
    0x0131: 'Software',
    0x0132: 'DateTime',
    0x013b: 'Artist',
    0x013e: 'WhitePoint',
    0x013f: 'PrimaryChromaticities',
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x0211: 'YCbCrCoefficients',
    0x0212: 'YCbCrSubSampling',
    0x0213: {
        name: 'YCbCrPositioning',
        description: (value) => {
            if (value === 1) {
                return 'centered';
            }
            if (value === 2) {
                return 'co-sited';
            }
            return 'undefined ' + value;
        }
    },
    0x0214: 'ReferenceBlackWhite',
    0x8298: {
        name: 'Copyright',
        description: (value) => value.join('; ')
    },
    0x8769: 'Exif IFD Pointer',
    0x8825: 'GPS Info IFD Pointer'
});


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_names_utils__ = __webpack_require__(31);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["a"] = ({
    0x829a: 'ExposureTime',
    0x829d: 'FNumber',
    0x8822: {
        'name': 'ExposureProgram',
        'description': (value) => {
            if (value === 0) {
                return 'Undefined';
            } else if (value === 1) {
                return 'Manual';
            } else if (value === 2) {
                return 'Normal program';
            } else if (value === 3) {
                return 'Aperture priority';
            } else if (value === 4) {
                return 'Shutter priority';
            } else if (value === 5) {
                return 'Creative program';
            } else if (value === 6) {
                return 'Action program';
            } else if (value === 7) {
                return 'Portrait mode';
            } else if (value === 8) {
                return 'Landscape mode';
            }
            return 'Unknown';
        }
    },
    0x8824: 'SpectralSensitivity',
    0x8827: 'ISOSpeedRatings',
    0x8828: {
        'name': 'OECF',
        'description': () => '[Raw OECF table data]'
    },
    0x9000: {
        'name': 'ExifVersion',
        'description': (value) => Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value)
    },
    0x9003: 'DateTimeOriginal',
    0x9004: 'DateTimeDigitized',
    0x9101: {
        'name': 'ComponentsConfiguration',
        'description': (value) => {
            return value.map((character) => {
                if (character === 0x31) {
                    return 'Y';
                } else if (character === 0x32) {
                    return 'Cb';
                } else if (character === 0x33) {
                    return 'Cr';
                } else if (character === 0x34) {
                    return 'R';
                } else if (character === 0x35) {
                    return 'G';
                } else if (character === 0x36) {
                    return 'B';
                }
            }).join('');
        }
    },
    0x9102: 'CompressedBitsPerPixel',
    0x9201: 'ShutterSpeedValue',
    0x9202: 'ApertureValue',
    0x9203: 'BrightnessValue',
    0x9204: 'ExposureBiasValue',
    0x9205: 'MaxApertureValue',
    0x9206: 'SubjectDistance',
    0x9207: {
        'name': 'MeteringMode',
        'description': (value) => {
            if (value === 1) {
                return 'Average';
            } else if (value === 2) {
                return 'CenterWeightedAverage';
            } else if (value === 3) {
                return 'Spot';
            } else if (value === 4) {
                return 'MultiSpot';
            } else if (value === 5) {
                return 'Pattern';
            } else if (value === 6) {
                return 'Partial';
            } else if (value === 255) {
                return 'Other';
            }
            return 'Unknown';
        }
    },
    0x9208: {
        'name': 'LightSource',
        'description': (value) => {
            if (value === 1) {
                return 'Daylight';
            } else if (value === 2) {
                return 'Fluorescent';
            } else if (value === 3) {
                return 'Tungsten (incandescent light)';
            } else if (value === 4) {
                return 'Flash';
            } else if (value === 9) {
                return 'Fine weather';
            } else if (value === 10) {
                return 'Cloudy weather';
            } else if (value === 11) {
                return 'Shade';
            } else if (value === 12) {
                return 'Daylight fluorescent (D 5700 – 7100K)';
            } else if (value === 13) {
                return 'Day white fluorescent (N 4600 – 5400K)';
            } else if (value === 14) {
                return 'Cool white fluorescent (W 3900 – 4500K)';
            } else if (value === 15) {
                return 'White fluorescent (WW 3200 – 3700K)';
            } else if (value === 17) {
                return 'Standard light A';
            } else if (value === 18) {
                return 'Standard light B';
            } else if (value === 19) {
                return 'Standard light C';
            } else if (value === 20) {
                return 'D55';
            } else if (value === 21) {
                return 'D65';
            } else if (value === 22) {
                return 'D75';
            } else if (value === 23) {
                return 'D50';
            } else if (value === 24) {
                return 'ISO studio tungsten';
            } else if (value === 255) {
                return 'Other light source';
            }
            return 'Unknown';
        }
    },
    0x9209: {
        'name': 'Flash',
        'description': (value) => {
            if (value === 0x00) {
                return 'Flash did not fire';
            } else if (value === 0x01) {
                return 'Flash fired';
            } else if (value === 0x05) {
                return 'Strobe return light not detected';
            } else if (value === 0x07) {
                return 'Strobe return light detected';
            } else if (value === 0x09) {
                return 'Flash fired, compulsory flash mode';
            } else if (value === 0x0d) {
                return 'Flash fired, compulsory flash mode, return light not detected';
            } else if (value === 0x0f) {
                return 'Flash fired, compulsory flash mode, return light detected';
            } else if (value === 0x10) {
                return 'Flash did not fire, compulsory flash mode';
            } else if (value === 0x18) {
                return 'Flash did not fire, auto mode';
            } else if (value === 0x19) {
                return 'Flash fired, auto mode';
            } else if (value === 0x1d) {
                return 'Flash fired, auto mode, return light not detected';
            } else if (value === 0x1f) {
                return 'Flash fired, auto mode, return light detected';
            } else if (value === 0x20) {
                return 'No flash function';
            } else if (value === 0x41) {
                return 'Flash fired, red-eye reduction mode';
            } else if (value === 0x45) {
                return 'Flash fired, red-eye reduction mode, return light not detected';
            } else if (value === 0x47) {
                return 'Flash fired, red-eye reduction mode, return light detected';
            } else if (value === 0x49) {
                return 'Flash fired, compulsory flash mode, red-eye reduction mode';
            } else if (value === 0x4d) {
                return 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected';
            } else if (value === 0x4f) {
                return 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected';
            } else if (value === 0x59) {
                return 'Flash fired, auto mode, red-eye reduction mode';
            } else if (value === 0x5d) {
                return 'Flash fired, auto mode, return light not detected, red-eye reduction mode';
            } else if (value === 0x5f) {
                return 'Flash fired, auto mode, return light detected, red-eye reduction mode';
            }
            return 'Unknown';
        }
    },
    0x920a: 'FocalLength',
    0x9214: {
        'name': 'SubjectArea',
        'description': (value) => {
            if (value.length === 2) {
                return `Location; X: ${value[0]}, Y: ${value[1]}`;
            } else if (value.length === 3) {
                return `Circle; X: ${value[0]}, Y: ${value[1]}, diameter: ${value[2]}`;
            } else if (value.length === 4) {
                return `Rectangle; X: ${value[0]}, Y: ${value[1]}, width: ${value[2]}, height: ${value[3]}`;
            }
            return 'Unknown';
        }
    },
    0x927c: {
        'name': 'MakerNote',
        'description': () => '[Raw maker note data]'
    },
    0x9286: {
        'name': 'UserComment',
        'description': __WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["a" /* getEncodedString */]
    },
    0x9290: 'SubSecTime',
    0x9291: 'SubSecTimeOriginal',
    0x9292: 'SubSecTimeDigitized',
    0xa000: {
        'name': 'FlashpixVersion',
        'description': (value) => value.map((charCode) => String.fromCharCode(charCode)).join('')
    },
    0xa001: {
        'name': 'ColorSpace',
        'description': (value) => {
            if (value === 1) {
                return 'sRGB';
            } else if (value === 0xffff) {
                return 'Uncalibrated';
            }
            return 'Unknown';
        }
    },
    0xa002: 'PixelXDimension',
    0xa003: 'PixelYDimension',
    0xa004: 'RelatedSoundFile',
    0xa005: 'Interoperability IFD Pointer',
    0xa20b: 'FlashEnergy',
    0xa20c: {
        'name': 'SpatialFrequencyResponse',
        'description': () => '[Raw SFR table data]'
    },
    0xa20e: 'FocalPlaneXResolution',
    0xa20f: 'FocalPlaneYResolution',
    0xa210: {
        'name': 'FocalPlaneResolutionUnit',
        'description': (value) => {
            if (value === 2) {
                return 'inches';
            } else if (value === 3) {
                return 'centimeters';
            }
            return 'Unknown';
        }
    },
    0xa214: {
        'name': 'SubjectLocation',
        'description': ([x, y]) => `X: ${x}, Y: ${y}`
    },
    0xa215: 'ExposureIndex',
    0xa217: {
        'name': 'SensingMethod',
        'description': (value) => {
            if (value === 1) {
                return 'Undefined';
            } else if (value === 2) {
                return 'One-chip color area sensor';
            } else if (value === 3) {
                return 'Two-chip color area sensor';
            } else if (value === 4) {
                return 'Three-chip color area sensor';
            } else if (value === 5) {
                return 'Color sequential area sensor';
            } else if (value === 7) {
                return 'Trilinear sensor';
            } else if (value === 8) {
                return 'Color sequential linear sensor';
            }
            return 'Unknown';
        }
    },
    0xa300: {
        'name': 'FileSource',
        'description': (value) => {
            if (value === 3) {
                return 'DSC';
            }
            return 'Unknown';
        }
    },
    0xa301: {
        'name': 'SceneType',
        'description': (value) => {
            if (value === 1) {
                return 'A directly photographed image';
            }
            return 'Unknown';
        }
    },
    0xa302: {
        'name': 'CFAPattern',
        'description': () => '[Raw CFA pattern table data]'
    },
    0xa401: {
        'name': 'CustomRendered',
        'description': (value) => {
            if (value === 0) {
                return 'Normal process';
            } else if (value === 1) {
                return 'Custom process';
            }
            return 'Unknown';
        }
    },
    0xa402: {
        'name': 'ExposureMode',
        'description': (value) => {
            if (value === 0) {
                return 'Auto exposure';
            } else if (value === 1) {
                return 'Manual exposure';
            } else if (value === 2) {
                return 'Auto bracket';
            }
            return 'Unknown';
        }
    },
    0xa403: {
        'name': 'WhiteBalance',
        'description': (value) => {
            if (value === 0) {
                return 'Auto white balance';
            } else if (value === 1) {
                return 'Manual white balance';
            }
            return 'Unknown';
        }
    },
    0xa404: {
        'name': 'DigitalZoomRatio',
        'description': (value) => {
            if (value === 0) {
                return 'Digital zoom was not used';
            }
            return value;
        }
    },
    0xa405: {
        'name': 'FocalLengthIn35mmFilm',
        'description': (value) => {
            if (value === 0) {
                return 'Unknown';
            }
            return value;
        }
    },
    0xa406: {
        'name': 'SceneCaptureType',
        'description': (value) => {
            if (value === 0) {
                return 'Standard';
            } else if (value === 1) {
                return 'Landscape';
            } else if (value === 2) {
                return 'Portrait';
            } else if (value === 3) {
                return 'Night scene';
            }
            return 'Unknown';
        }
    },
    0xa407: {
        'name': 'GainControl',
        'description': (value) => {
            if (value === 0) {
                return 'None';
            } else if (value === 1) {
                return 'Low gain up';
            } else if (value === 2) {
                return 'High gain up';
            } else if (value === 3) {
                return 'Low gain down';
            } else if (value === 4) {
                return 'High gain down';
            }
            return 'Unknown';
        }
    },
    0xa408: {
        'name': 'Contrast',
        'description': (value) => {
            if (value === 0) {
                return 'Normal';
            } else if (value === 1) {
                return 'Soft';
            } else if (value === 2) {
                return 'Hard';
            }
            return 'Unknown';
        }
    },
    0xa409: {
        'name': 'Saturation',
        'description': (value) => {
            if (value === 0) {
                return 'Normal';
            } else if (value === 1) {
                return 'Low saturation';
            } else if (value === 2) {
                return 'High saturation';
            }
            return 'Unknown';
        }
    },
    0xa40a: {
        'name': 'Sharpness',
        'description': (value) => {
            if (value === 0) {
                return 'Normal';
            } else if (value === 1) {
                return 'Soft';
            } else if (value === 2) {
                return 'Hard';
            }
            return 'Unknown';
        }
    },
    0xa40b: {
        'name': 'DeviceSettingDescription',
        'description': () => '[Raw device settings table data]'
    },
    0xa40c: {
        'name': 'SubjectDistanceRange',
        'description': (value) => {
            if (value === 1) {
                return 'Macro';
            } else if (value === 2) {
                return 'Close view';
            } else if (value === 3) {
                return 'Distant view';
            }
            return 'Unknown';
        }
    },
    0xa420: 'ImageUniqueID'
});


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_names_utils__ = __webpack_require__(31);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["a"] = ({
    0x0000: {
        'name': 'GPSVersionID',
        'description': (value) => {
            if (value[0] === 2 && value[1] === 2 && value[2] === 0 && value[3] === 0) {
                return 'Version 2.2';
            }
            return 'Unknown';
        }
    },
    0x0001: {
        'name': 'GPSLatitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'N') {
                return 'North latitude';
            } else if (ref === 'S') {
                return 'South latitude';
            }
            return 'Unknown';
        }
    },
    0x0002: {
        'name': 'GPSLatitude',
        'description': (value) => {
            return value[0] + value[1] / 60 + value[2] / 3600;
        }
    },
    0x0003: {
        'name': 'GPSLongitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'E') {
                return 'East longitude';
            } else if (ref === 'W') {
                return 'West longitude';
            }
            return 'Unknown';
        }
    },
    0x0004: {
        'name': 'GPSLongitude',
        'description': (value) => {
            return value[0] + value[1] / 60 + value[2] / 3600;
        }
    },
    0x0005: {
        'name': 'GPSAltitudeRef',
        'description': (value) => {
            if (value === 0) {
                return 'Sea level';
            } else if (value === 1) {
                return 'Sea level reference (negative value)';
            }
            return 'Unknown';
        }
    },
    0x0006: {
        'name': 'GPSAltitude',
        'description': (value) => {
            return value + ' m';
        }
    },
    0x0007: {
        'name': 'GPSTimeStamp',
        'description': (value) => {
            return value.map((num) => {
                if (`${num}`.length === 1) {
                    return `0${num}`;
                }
                return num;
            }).join(':');
        }
    },
    0x0008: 'GPSSatellites',
    0x0009: {
        'name': 'GPSStatus',
        'description': (value) => {
            const status = value.join('');
            if (status === 'A') {
                return 'Measurement in progress';
            } else if (status === 'V') {
                return 'Measurement Interoperability';
            }
            return 'Unknown';
        }
    },
    0x000a: {
        'name': 'GPSMeasureMode',
        'description': (value) => {
            const mode = value.join('');
            if (mode === '2') {
                return '2-dimensional measurement';
            } else if (mode === '3') {
                return '3-dimensional measurement';
            }
            return 'Unknown';
        }
    },
    0x000b: 'GPSDOP',
    0x000c: {
        'name': 'GPSSpeedRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'K') {
                return 'Kilometers per hour';
            } else if (ref === 'M') {
                return 'Miles per hour';
            } else if (ref === 'N') {
                return 'Knots';
            }
            return 'Unknown';
        }
    },
    0x000d: 'GPSSpeed',
    0x000e: {
        'name': 'GPSTrackRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'T') {
                return 'True direction';
            } else if (ref === 'M') {
                return 'Magnetic direction';
            }
            return 'Unknown';
        }
    },
    0x000f: 'GPSTrack',
    0x0010: {
        'name': 'GPSImgDirectionRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'T') {
                return 'True direction';
            } else if (ref === 'M') {
                return 'Magnetic direction';
            }
            return 'Unknown';
        }
    },
    0x0011: 'GPSImgDirection',
    0x0012: 'GPSMapDatum',
    0x0013: {
        'name': 'GPSDestLatitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'N') {
                return 'North latitude';
            } else if (ref === 'S') {
                return 'South latitude';
            }
            return 'Unknown';
        }
    },
    0x0014: {
        'name': 'GPSDestLatitude',
        'description': (value) => {
            return value[0] + value[1] / 60 + value[2] / 3600;
        }
    },
    0x0015: {
        'name': 'GPSDestLongitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'E') {
                return 'East longitude';
            } else if (ref === 'W') {
                return 'West longitude';
            }
            return 'Unknown';
        }
    },
    0x0016: {
        'name': 'GPSDestLongitude',
        'description': (value) => {
            return value[0] + value[1] / 60 + value[2] / 3600;
        }
    },
    0x0017: {
        'name': 'GPSDestBearingRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'T') {
                return 'True direction';
            } else if (ref === 'M') {
                return 'Magnetic direction';
            }
            return 'Unknown';
        }
    },
    0x0018: 'GPSDestBearing',
    0x0019: {
        'name': 'GPSDestDistanceRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'K') {
                return 'Kilometers';
            } else if (ref === 'M') {
                return 'Miles';
            } else if (ref === 'N') {
                return 'Knots';
            }
            return 'Unknown';
        }
    },
    0x001a: 'GPSDestDistance',
    0x001b: {
        'name': 'GPSProcessingMethod',
        'description': __WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["a" /* getEncodedString */]
    },
    0x001c: {
        'name': 'GPSAreaInformation',
        'description': __WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["a" /* getEncodedString */]
    },
    0x001d: 'GPSDateStamp',
    0x001e: {
        'name': 'GPSDifferential',
        'description': (value) => {
            if (value === 0) {
                return 'Measurement without differential correction';
            } else if (value === 1) {
                return 'Differential correction applied';
            }
            return 'Unknown';
        }
    }
});


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["a"] = ({
    0x0001: 'InteroperabilityIndex'
});


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iptc_tag_names__ = __webpack_require__(111);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const BYTES_8BIM = 0x3842494d;
const BYTES_8BIM_SIZE = 4;
const RESOURCE_BLOCK_HEADER_SIZE = BYTES_8BIM_SIZE + 8;
const NAA_RESOURCE_BLOCK_TYPE = 0x0404;
const TAG_HEADER_SIZE = 5;

/* harmony default export */ __webpack_exports__["a"] = ({
    read
});

function read(dataView, dataOffset) {
    try {
        const {naaBlock, dataOffset: newDataOffset} = getNaaResourceBlock(dataView, dataOffset);
        return parseTags(dataView, naaBlock, newDataOffset);
    } catch (error) {
        return {};
    }
}

function getNaaResourceBlock(dataView, dataOffset) {
    while (dataOffset + RESOURCE_BLOCK_HEADER_SIZE <= dataView.byteLength) {
        const resourceBlock = getResourceBlock(dataView, dataOffset);
        if (isNaaResourceBlock(resourceBlock)) {
            return {naaBlock: resourceBlock, dataOffset};
        }
        dataOffset += RESOURCE_BLOCK_HEADER_SIZE + resourceBlock.size + getBlockPadding(resourceBlock.size);
    }
    throw new Error('No IPTC NAA resource block.');
}

function getResourceBlock(dataView, dataOffset) {
    const RESOURCE_BLOCK_SIZE_OFFSET = 10;

    if (dataView.getUint32(dataOffset, false) !== BYTES_8BIM) {
        throw new Error('Not an IPTC resource block.');
    }

    return {
        type: dataView.getUint16(dataOffset + BYTES_8BIM_SIZE, false),
        size: dataView.getUint16(dataOffset + RESOURCE_BLOCK_SIZE_OFFSET, false)
    };
}

function isNaaResourceBlock(resourceBlock) {
    return resourceBlock.type === NAA_RESOURCE_BLOCK_TYPE;
}

function getBlockPadding(blockSize) {
    if (blockSize % 2 !== 0) {
        return 1;
    }
    return 0;
}

function parseTags(dataView, naaBlock, dataOffset) {
    const tags = {};

    dataOffset += RESOURCE_BLOCK_HEADER_SIZE;
    const endOfBlockOffset = dataOffset + naaBlock['size'];

    while ((dataOffset < endOfBlockOffset) && (dataOffset < dataView.byteLength)) {
        const {tag, tagSize} = readTag(dataView, dataOffset, tags);

        if ((tags[tag.name] === undefined) || (tag['repeatable'] === undefined)) {
            tags[tag.name] = {
                value: tag.value,
                description: tag.description
            };
        } else {
            if (!(tags[tag.name] instanceof Array)) {
                tags[tag.name] = [{
                    value: tags[tag.name].value,
                    description: tags[tag.name].description
                }];
            }
            tags[tag.name].push({
                value: tag.value,
                description: tag.description
            });
        }

        dataOffset += TAG_HEADER_SIZE + tagSize;
    }

    return tags;
}

function readTag(dataView, dataOffset, tags) {
    const TAG_CODE_OFFSET = 1;
    const TAG_SIZE_OFFSET = 3;

    const tagCode = dataView.getUint16(dataOffset + TAG_CODE_OFFSET, false);
    const tagSize = dataView.getUint16(dataOffset + TAG_SIZE_OFFSET, false);
    const tagValue = getTagValue(dataView, dataOffset + TAG_HEADER_SIZE, tagSize);
    let tag;

    if (__WEBPACK_IMPORTED_MODULE_0__iptc_tag_names__["a" /* default */]['iptc'][tagCode] !== undefined) {
        let tagName, tagDescription;

        if ((__WEBPACK_IMPORTED_MODULE_0__iptc_tag_names__["a" /* default */]['iptc'][tagCode]['name'] !== undefined)
            && (__WEBPACK_IMPORTED_MODULE_0__iptc_tag_names__["a" /* default */]['iptc'][tagCode]['description'] !== undefined)) {
            tagName = __WEBPACK_IMPORTED_MODULE_0__iptc_tag_names__["a" /* default */]['iptc'][tagCode]['name'];
            tagDescription = __WEBPACK_IMPORTED_MODULE_0__iptc_tag_names__["a" /* default */]['iptc'][tagCode]['description'](tagValue, tags);
        } else {
            if (__WEBPACK_IMPORTED_MODULE_0__iptc_tag_names__["a" /* default */]['iptc'][tagCode]['name'] !== undefined) {
                tagName = __WEBPACK_IMPORTED_MODULE_0__iptc_tag_names__["a" /* default */]['iptc'][tagCode]['name'];
            } else {
                tagName = __WEBPACK_IMPORTED_MODULE_0__iptc_tag_names__["a" /* default */]['iptc'][tagCode];
            }
            if (tagValue instanceof Array) {
                tagDescription = tagValue.map((charCode) => String.fromCharCode(charCode)).join('');
                tagDescription = decodeAsciiValue(tagDescription);
            } else {
                tagDescription = tagValue;
            }
        }
        tag = {
            name: tagName,
            value: tagValue,
            description: tagDescription
        };
        if (__WEBPACK_IMPORTED_MODULE_0__iptc_tag_names__["a" /* default */]['iptc'][tagCode]['repeatable'] !== undefined) {
            tag['repeatable'] = true;
        }
    } else {
        tag = {
            name: `undefined-${tagCode}`,
            value: tagValue,
            description: tagValue
        };
    }

    return {tag, tagSize};
}

function getTagValue(dataView, offset, size) {
    const value = [];

    for (let valueIndex = 0; valueIndex < size; valueIndex++) {
        value.push(dataView.getUint8(offset + valueIndex));
    }

    return value;
}

function decodeAsciiValue(asciiValue) {
    try {
        return decodeURIComponent(escape(asciiValue));
    } catch (error) {
        return asciiValue;
    }
}


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_names_utils__ = __webpack_require__(31);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["a"] = ({
    'iptc': {
        0x015a: {
            'name': 'Coded Character Set',
            'description': (value) => {
                const string = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value);
                if (string === '\x1b%G') {
                    return 'UTF-8';
                } else if (string === '\x1b%/G') {
                    return 'UTF-8 Level 1';
                } else if (string === '\x1b%/H') {
                    return 'UTF-8 Level 2';
                } else if (string === '\x1b%/I') {
                    return 'UTF-8 Level 3';
                }
                return 'Unknown';
            }
        },
        0x0200: {
            'name': 'Record Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0203: 'Object Type Reference',
        0x0204: 'Object Attribute Reference',
        0x0205: 'Object Name',
        0x0207: 'Edit Status',
        0x0208: {
            'name': 'Editorial Update',
            'description': (value) => {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value) === '01') {
                    return 'Additional Language';
                }
                return 'Unknown';
            }
        },
        0x020a: 'Urgency',
        0x020c: {
            'name': 'Subject Reference',
            'repeatable': true,
            'description': (value) => {
                const parts = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value).split(':');
                return parts[2] + (parts[3] ? '/' + parts[3] : '') + (parts[4] ? '/' + parts[4] : '');
            }
        },
        0x020f: 'Category',
        0x0214: {
            'name': 'Supplemental Category',
            'repeatable': true
        },
        0x0216: 'Fixture Identifier',
        0x0219: {
            'name': 'Keywords',
            'repeatable': true
        },
        0x021a: {
            'name': 'Content Location Code',
            'repeatable': true
        },
        0x021b: {
            'name': 'Content Location Name',
            'repeatable': true
        },
        0x021e: 'Release Date',
        0x0223: 'Release Time',
        0x0225: 'Expiration Date',
        0x0226: 'Expiration Time',
        0x0228: 'Special Instructions',
        0x022a: {
            'name': 'Action Advised',
            'description': (value) => {
                const string = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value);
                if (string === '01') {
                    return 'Object Kill';
                } else if (string === '02') {
                    return 'Object Replace';
                } else if (string === '03') {
                    return 'Object Append';
                } else if (string === '04') {
                    return 'Object Reference';
                }
                return 'Unknown';
            }
        },
        0x022d: {
            'name': 'Reference Service',
            'repeatable': true
        },
        0x022f: {
            'name': 'Reference Date',
            'repeatable': true
        },
        0x0232: {
            'name': 'Reference Number',
            'repeatable': true
        },
        0x0237: {
            'name': 'Date Created',
            'description': getCreationDate
        },
        0x023c: {
            'name': 'Time Created',
            'description': getCreationTime
        },
        0x023e: {
            'name': 'Digital Creation Date',
            'description': getCreationDate
        },
        0x023f: {
            'name': 'Digital Creation Time',
            'description': getCreationTime
        },
        0x0241: 'Originating Program',
        0x0246: 'Program Version',
        0x024b: {
            'name': 'Object Cycle',
            'description': (value) => {
                const string = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value);
                if (string === 'a') {
                    return 'morning';
                } else if (string === 'p') {
                    return 'evening';
                } else if (string === 'b') {
                    return 'both';
                }
                return 'Unknown';
            }
        },
        0x0250: {
            'name': 'By-line',
            'repeatable': true
        },
        0x0255: {
            'name': 'By-line Title',
            'repeatable': true
        },
        0x025a: 'City',
        0x025c: 'Sub-location',
        0x025f: 'Province/State',
        0x0264: 'Country/Primary Location Code',
        0x0265: 'Country/Primary Location Name',
        0x0267: 'Original Transmission Reference',
        0x0269: 'Headline',
        0x026e: 'Credit',
        0x0273: 'Source',
        0x0274: 'Copyright Notice',
        0x0276: {
            'name': 'Contact',
            'repeatable': true
        },
        0x0278: 'Caption/Abstract',
        0x027a: {
            'name': 'Writer/Editor',
            'repeatable': true
        },
        0x027d: {
            'name': 'Rasterized Caption',
            'description': (value) => value
        },
        0x0282: 'Image Type',
        0x0283: {
            'name': 'Image Orientation',
            'description': (value) => {
                const string = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value);
                if (string === 'P') {
                    return 'Portrait';
                } else if (string === 'L') {
                    return 'Landscape';
                } else if (string === 'S') {
                    return 'Square';
                }
                return 'Unknown';
            }
        },
        0x0287: 'Language Identifier',
        0x0296: {
            'name': 'Audio Type',
            'description': (value) => {
                const stringValue = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value);
                const character0 = stringValue.charAt(0);
                const character1 = stringValue.charAt(1);
                let description = '';

                if (character0 === '1') {
                    description += 'Mono';
                } else if (character0 === '2') {
                    description += 'Stereo';
                }

                if (character1 === 'A') {
                    description += ', actuality';
                } else if (character1 === 'C') {
                    description += ', question and answer session';
                } else if (character1 === 'M') {
                    description += ', music, transmitted by itself';
                } else if (character1 === 'Q') {
                    description += ', response to a question';
                } else if (character1 === 'R') {
                    description += ', raw sound';
                } else if (character1 === 'S') {
                    description += ', scener';
                } else if (character1 === 'V') {
                    description += ', voicer';
                } else if (character1 === 'W') {
                    description += ', wrap';
                }

                if (description !== '') {
                    return description;
                }
                return stringValue;
            }
        },
        0x0297: {
            'name': 'Audio Sampling Rate',
            'description': (value) => parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value), 10) + ' Hz'
        },
        0x0298: {
            'name': 'Audio Sampling Resolution',
            'description': (value) => {
                const bits = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value), 10);
                return bits + (bits === 1 ? ' bit' : ' bits');
            }
        },
        0x0299: {
            'name': 'Audio Duration',
            'description': (value) => {
                const duration = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value);
                if (duration.length >= 6) {
                    return duration.substr(0, 2) + ':' + duration.substr(2, 2) + ':' + duration.substr(4, 2);
                }
                return duration;
            }
        },
        0x029a: 'Audio Outcue',
        0x02c8: {
            'name': 'ObjectData Preview File Format',
            'description': (value) => {
                const stringValue = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value);
                if (stringValue === '00') {
                    return 'No ObjectData';
                } else if (stringValue === '01') {
                    return 'IPTC-NAA Digital Newsphoto Parameter Record';
                } else if (stringValue === '02') {
                    return 'IPTC7901 Recommended Message Format';
                } else if (stringValue === '03') {
                    return 'Tagged Image File Format (Adobe/Aldus Image data)';
                } else if (stringValue === '04') {
                    return 'Illustrator (Adobe Graphics data)';
                } else if (stringValue === '05') {
                    return 'AppleSingle (Apple Computer Inc)';
                } else if (stringValue === '06') {
                    return 'NAA 89-3 (ANPA 1312)';
                } else if (stringValue === '07') {
                    return 'MacBinary II';
                } else if (stringValue === '08') {
                    return 'IPTC Unstructured Character Oriented File Format (UCOFF)';
                } else if (stringValue === '09') {
                    return 'United Press International ANPA 1312 variant';
                } else if (stringValue === '10') {
                    return 'United Press International Down-Load Message';
                } else if (stringValue === '11') {
                    return 'JPEG File Interchange (JFIF)';
                } else if (stringValue === '12') {
                    return 'Photo-CD Image-Pac (Eastman Kodak)';
                } else if (stringValue === '13') {
                    return 'Microsoft Bit Mapped Graphics File [*.BMP]';
                } else if (stringValue === '14') {
                    return 'Digital Audio File [*.WAV] (Microsoft & Creative Labs)';
                } else if (stringValue === '15') {
                    return 'Audio plus Moving Video [*.AVI] (Microsoft)';
                } else if (stringValue === '16') {
                    return 'PC DOS/Windows Executable Files [*.COM][*.EXE]';
                } else if (stringValue === '17') {
                    return 'Compressed Binary File [*.ZIP] (PKWare Inc)';
                } else if (stringValue === '18') {
                    return 'Audio Interchange File Format AIFF (Apple Computer Inc)';
                } else if (stringValue === '19') {
                    return 'RIFF Wave (Microsoft Corporation)';
                } else if (stringValue === '20') {
                    return 'Freehand (Macromedia/Aldus)';
                } else if (stringValue === '21') {
                    return 'Hypertext Markup Language "HTML" (The Internet Society)';
                } else if (stringValue === '22') {
                    return 'MPEG 2 Audio Layer 2 (Musicom), ISO/IEC';
                } else if (stringValue === '23') {
                    return 'MPEG 2 Audio Layer 3, ISO/IEC';
                } else if (stringValue === '24') {
                    return 'Portable Document File (*.PDF) Adobe';
                } else if (stringValue === '25') {
                    return 'News Industry Text Format (NITF)';
                } else if (stringValue === '26') {
                    return 'Tape Archive (*.TAR)';
                } else if (stringValue === '27') {
                    return 'Tidningarnas Telegrambyrå NITF version (TTNITF DTD)';
                } else if (stringValue === '28') {
                    return 'Ritzaus Bureau NITF version (RBNITF DTD)';
                } else if (stringValue === '29') {
                    return 'Corel Draw [*.CDR]';
                }
                return 'Unknown format ' + stringValue;
            }
        },
        0x02c9: {
            'name': 'ObjectData Preview File Format Version',
            'description': (value, tags) => {
                // Format ID, Version ID, Version Description
                const formatVersions = {
                    '00': {'00': '1'},
                    '01': {'01': '1', '02': '2', '03': '3', '04': '4'},
                    '02': {'04': '4'},
                    '03': {'01': '5.0', '02': '6.0'},
                    '04': {'01': '1.40'},
                    '05': {'01': '2'},
                    '06': {'01': '1'},
                    '11': {'01': '1.02'},
                    '20': {'01': '3.1', '02': '4.0', '03': '5.0', '04': '5.5'},
                    '21': {'02': '2.0'}
                };
                const stringValue = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value);

                if (tags['ObjectData Preview File Format']) {
                    const objectDataPreviewFileFormat = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(tags['ObjectData Preview File Format'].value);
                    if (formatVersions[objectDataPreviewFileFormat]
                        && formatVersions[objectDataPreviewFileFormat][stringValue]) {
                        return formatVersions[objectDataPreviewFileFormat][stringValue];
                    }
                }

                return stringValue;
            }
        },
        0x02ca: 'ObjectData Preview Data'
    }
});

function getCreationDate(value) {
    const date = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value);

    if (date.length >= 8) {
        return date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6, 2);
    }

    return date;
}

function getCreationTime(value) {
    const time = Object(__WEBPACK_IMPORTED_MODULE_0__tag_names_utils__["b" /* getStringValue */])(value);
    let parsedTime = time;

    if (time.length >= 6) {
        parsedTime = time.substr(0, 2) + ':' + time.substr(2, 2) + ':' + time.substr(4, 2);
        if (time.length === 11) {
            parsedTime += time.substr(6, 1) + time.substr(7, 2) + ':' + time.substr(9, 2);
        }
    }

    return parsedTime;
}


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xmp_tag_names__ = __webpack_require__(113);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["a"] = ({
    read
});

function read(dataView, dataOffset, metadataSize) {
    try {
        const doc = getDocument(dataView, dataOffset, metadataSize);
        const rdf = getRDF(doc);

        return parseXMPObject(convertToObject(rdf, true));
    } catch (error) {
        return {};
    }
}

function getDocument(dataView, dataOffset, metadataSize) {
    if (typeof DOMParser === 'undefined') {
        console.warn('Warning: DOMParser is not available. If you\'re using Node.js you probably want to do this:\n  1. Install a DOM parser, e.g. xmldom: npm install --save xmldom\n  2. Require that at the top of your script: global.DOMParser = require(\'xmldom\').DOMParser;\nSee an example of this in the ExifReader example directory.');  // eslint-disable-line no-console
        throw new Error();
    }

    const domParser = new DOMParser();
    const xmlSource = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getStringFromDataView */])(dataView, dataOffset, metadataSize);
    const doc = domParser.parseFromString(xmlSource, 'application/xml');

    if (doc.documentElement.nodeName === 'parsererror') {
        throw new Error();
    }

    return doc;
}

function getRDF(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].tagName === 'x:xmpmeta') {
            return getRDF(node.childNodes[i]);
        }
        if (node.childNodes[i].tagName === 'rdf:RDF') {
            return node.childNodes[i];
        }
    }

    throw new Error();
}

function convertToObject(node, isTopNode = false) {
    const childNodes = getChildNodes(node);

    if (hasTextOnlyContent(childNodes)) {
        if (isTopNode) {
            return {};
        }
        return getTextValue(childNodes[0]);
    }

    return getElementsFromNodes(childNodes);
}

function getChildNodes(node) {
    const elements = [];

    for (let i = 0; i < node.childNodes.length; i++) {
        elements.push(node.childNodes[i]);
    }

    return elements;
}

function hasTextOnlyContent(nodes) {
    return (nodes.length === 1) && (nodes[0].nodeName === '#text');
}

function getTextValue(node) {
    return node.nodeValue;
}

function getElementsFromNodes(nodes) {
    const elements = {};

    nodes.forEach((node) => {
        if (isElement(node)) {
            const nodeElement = getElementFromNode(node);

            if (elements[node.nodeName] !== undefined) {
                if (!Array.isArray(elements[node.nodeName])) {
                    elements[node.nodeName] = [elements[node.nodeName]];
                }
                elements[node.nodeName].push(nodeElement);
            } else {
                elements[node.nodeName] = nodeElement;
            }
        }
    });

    return elements;
}

function isElement(node) {
    return (node.nodeName) && (node.nodeName !== '#text');
}

function getElementFromNode(node) {
    return {
        attributes: getAttributes(node),
        value: convertToObject(node)
    };
}

function getAttributes(element) {
    const attributes = {};

    for (let i = 0; i < element.attributes.length; i++) {
        attributes[element.attributes[i].nodeName] = element.attributes[i].value;
    }

    return attributes;
}

function parseXMPObject(xmpObject) {
    const tags = {};

    if (typeof xmpObject === 'string') {
        return xmpObject;
    }

    for (const nodeName in xmpObject) {
        let nodes = xmpObject[nodeName];

        if (!Array.isArray(nodes)) {
            nodes = [nodes];
        }

        nodes.forEach((node) => {
            Object.assign(tags, parseNodeAttributesAsTags(node.attributes));
            if (typeof node.value === 'object') {
                Object.assign(tags, parseNodeChildrenAsTags(node.value));
            }
        });
    }

    return tags;
}

function parseNodeAttributesAsTags(attributes) {
    const tags = {};

    for (const name in attributes) {
        if (isTagAttribute(name)) {
            tags[getLocalName(name)] = {
                value: attributes[name],
                attributes: {},
                description: getDescription(attributes[name], name)
            };
        }
    }

    return tags;
}

function isTagAttribute(name) {
    return (name !== 'rdf:parseType') && (!isNamespaceDefinition(name));
}

function isNamespaceDefinition(name) {
    return name.split(':')[0] === 'xmlns';
}

function getLocalName(name) {
    return name.split(':')[1];
}

function getDescription(value, name = undefined) {
    if (Array.isArray(value)) {
        return getDescriptionOfArray(value);
    }
    if (typeof value === 'object') {
        return getDescriptionOfObject(value);
    }

    try {
        if ((name) && (typeof __WEBPACK_IMPORTED_MODULE_1__xmp_tag_names__["a" /* default */][name] === 'function')) {
            return __WEBPACK_IMPORTED_MODULE_1__xmp_tag_names__["a" /* default */][name](value);
        }
        return decodeURIComponent(escape(value));
    } catch (error) {
        return value;
    }
}

function getDescriptionOfArray(value) {
    return value.map((item) => {
        if (item.value !== undefined) {
            return getDescription(item.value);
        }
        return getDescription(item);
    }).join(', ');
}

function getDescriptionOfObject(value) {
    const descriptions = [];

    for (const key in value) {
        descriptions.push(`${getClearTextKey(key)}: ${value[key].value}`);
    }

    return descriptions.join('; ');
}

function getClearTextKey(key) {
    if (key === 'CiAdrCity') {
        return 'CreatorCity';
    }
    if (key === 'CiAdrCtry') {
        return 'CreatorCountry';
    }
    if (key === 'CiAdrExtadr') {
        return 'CreatorAddress';
    }
    if (key === 'CiAdrPcode') {
        return 'CreatorPostalCode';
    }
    if (key === 'CiAdrRegion') {
        return 'CreatorRegion';
    }
    if (key === 'CiEmailWork') {
        return 'CreatorWorkEmail';
    }
    if (key === 'CiTelWork') {
        return 'CreatorWorkPhone';
    }
    if (key === 'CiUrlWork') {
        return 'CreatorWorkUrl';
    }
    return key;
}

function parseNodeChildrenAsTags(children) {
    const tags = {};

    for (const name in children) {
        if (!isNamespaceDefinition(name)) {
            tags[getLocalName(name)] = parseNodeAsTag(children[name], name);
        }
    }

    return tags;
}

function parseNodeAsTag(node, name) {
    if (hasNestedSimpleRdfDescription(node)) {
        return parseNodeAsSimpleRdfDescription(node, name);
    } else if (hasNestedStructureRdfDescription(node)) {
        return parseNodeAsStructureRdfDescription(node, name);
    } else if (isCompactStructure(node)) {
        return parseNodeAsCompactStructure(node, name);
    } else if (isArray(node)) {
        return parseNodeAsArray(node, name);
    }
    return parseNodeAsSimpleValue(node, name);
}

function hasNestedSimpleRdfDescription(node) {
    return ((node.attributes['rdf:parseType'] === 'Resource') && (node.value['rdf:value'] !== undefined))
        || ((node.value['rdf:Description'] !== undefined) && (node.value['rdf:Description'].value['rdf:value'] !== undefined));
}

function parseNodeAsSimpleRdfDescription(node, name) {
    const attributes = parseNodeAttributes(node);

    if (node.value['rdf:Description'] !== undefined) {
        node = node.value['rdf:Description'];
    }

    Object.assign(attributes, parseNodeAttributes(node), parseNodeChildrenAsAttributes(node));

    const value = parseRdfValue(node);

    return {
        value,
        attributes,
        description: getDescription(value, name)
    };
}

function parseNodeAttributes(node) {
    const attributes = {};

    for (const name in node.attributes) {
        if ((name !== 'rdf:parseType') && (name !== 'rdf:resource') && (!isNamespaceDefinition(name))) {
            attributes[getLocalName(name)] = node.attributes[name];
        }
    }

    return attributes;
}

function parseNodeChildrenAsAttributes(node) {
    const attributes = {};

    for (const name in node.value) {
        if ((name !== 'rdf:value') && (!isNamespaceDefinition(name))) {
            attributes[getLocalName(name)] = node.value[name].value;
        }
    }

    return attributes;
}

function parseRdfValue(node) {
    return getURIValue(node.value['rdf:value']) || node.value['rdf:value'].value;
}

function hasNestedStructureRdfDescription(node) {
    return (node.attributes['rdf:parseType'] === 'Resource')
        || ((node.value['rdf:Description'] !== undefined) && (node.value['rdf:Description'].value['rdf:value'] === undefined));
}

function parseNodeAsStructureRdfDescription(node, name) {
    const tag = {
        value: {},
        attributes: {}
    };

    if (node.value['rdf:Description'] !== undefined) {
        Object.assign(tag.value, parseNodeAttributesAsTags(node.value['rdf:Description'].attributes));
        Object.assign(tag.attributes, parseNodeAttributes(node));
        node = node.value['rdf:Description'];
    }

    Object.assign(tag.value, parseNodeChildrenAsTags(node.value));

    tag.description = getDescription(tag.value, name);

    return tag;
}

function isCompactStructure(node) {
    return (Object.keys(node.value).length === 0)
        && (node.attributes['rdf:resource'] === undefined);
}

function parseNodeAsCompactStructure(node, name) {
    const value = parseNodeAttributesAsTags(node.attributes);

    return {
        value,
        attributes: {},
        description: getDescription(value, name)
    };
}

function isArray(node) {
    return getArrayChild(node.value) !== undefined;
}

function getArrayChild(value) {
    return value['rdf:Bag'] || value['rdf:Seq'] || value['rdf:Alt'];
}

function parseNodeAsArray(node, name) {
    let items = getArrayChild(node.value).value['rdf:li'];
    const attributes = parseNodeAttributes(node);
    const value = [];

    if (!Array.isArray(items)) {
        items = [items];
    }

    items.forEach((item) => {
        value.push(parseArrayValue(item));
    });

    return {
        value,
        attributes,
        description: getDescription(value, name)
    };
}

function parseArrayValue(item) {
    if (hasNestedSimpleRdfDescription(item)) {
        return parseNodeAsSimpleRdfDescription(item);
    }

    if (hasNestedArrayValue(item)) {
        return parseNodeChildrenAsTags(item.value);
    }

    return {
        value: item.value,
        attributes: parseNodeAttributes(item),
        description: getDescription(item.value)
    };
}

function hasNestedArrayValue(node) {
    return node.attributes['rdf:parseType'] === 'Resource';
}

function parseNodeAsSimpleValue(node, name) {
    const value = getURIValue(node) || parseXMPObject(node.value);

    return {
        value,
        attributes: parseNodeAttributes(node),
        description: getDescription(value, name)
    };
}

function getURIValue(node) {
    return node.attributes && node.attributes['rdf:resource'];
}


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["a"] = ({
    'tiff:Orientation'(value) {
        if (value === '1') {
            return 'Horizontal (normal)';
        }
        if (value === '2') {
            return 'Mirror horizontal';
        }
        if (value === '3') {
            return 'Rotate 180';
        }
        if (value === '4') {
            return 'Mirror vertical';
        }
        if (value === '5') {
            return 'Mirror horizontal and rotate 270 CW';
        }
        if (value === '6') {
            return 'Rotate 90 CW';
        }
        if (value === '7') {
            return 'Mirror horizontal and rotate 90 CW';
        }
        if (value === '8') {
            return 'Rotate 270 CW';
        }
        return value;
    },
    'exif:GPSLatitude': calculateGPSValue,
    'exif:GPSLongitude': calculateGPSValue
});

function calculateGPSValue(value) {
    const [degreesString, minutesString] = value.split(',');
    if ((degreesString !== undefined) && (minutesString !== undefined)) {
        const degrees = parseFloat(degreesString);
        const minutes = parseFloat(minutesString);
        const ref = minutesString.charAt(minutesString.length - 1);
        if ((!Number.isNaN(degrees)) && (!Number.isNaN(minutes))) {
            return '' + (degrees + minutes / 60) + ref;
        }
    }
    return value;
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _typeof2 = __webpack_require__(24);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(41);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(40);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(32);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(43);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(44);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */

var EzVDOM = function () {
        function EzVDOM() {
                (0, _classCallCheck3.default)(this, EzVDOM);


                this.cachedVDOM = null;
        }

        (0, _createClass3.default)(EzVDOM, [{
                key: 'setElementProps',
                value: function setElementProps($el, props) {
                        var _this = this;

                        if (props) {

                                var properties = (0, _keys2.default)(props);

                                properties.forEach(function (name) {

                                        var value = props[name];

                                        _this.setElementProp($el, name, value);
                                });
                        }
                }
        }, {
                key: 'setElementProp',
                value: function setElementProp($el, name, value) {

                        if (this.isCustomProp(name)) {

                                return;
                        } else if ($el.setAttribute) {

                                if (name === 'className') {

                                        $el.setAttribute('class', value);
                                } else if (typeof value === 'boolean') {

                                        this.setBooleanProp($el, name, value);
                                } else {

                                        $el.setAttribute(name, value);
                                }
                        }
                }
        }, {
                key: 'setBooleanProp',
                value: function setBooleanProp($el, name, value) {

                        if (value) {

                                $el.setAttribute(name, value);
                                $el[name] = true;
                        } else {

                                $el[name] = false;
                        }
                }
        }, {
                key: 'removeBooleanProp',
                value: function removeBooleanProp($el, name) {

                        $el.removeAttribute(name);
                        $el[name] = false;
                }
        }, {
                key: 'removeProp',
                value: function removeProp($el, name, value) {

                        if ($el.removeAttribute) {

                                if (name === 'className') {

                                        $el.removeAttribute('class');
                                } else if (typeof value === 'boolean') {

                                        this.removeBooleanProp($el, name);
                                } else {

                                        $el.removeAttribute(name);
                                }
                        }
                }
        }, {
                key: 'updateProp',
                value: function updateProp($el, name, newVal, oldVal) {

                        if (this.isConditionalProp(name)) {

                                this.setElementProp($el, name, newVal);
                        } else if (!newVal) {

                                this.removeProp($el, name, oldVal);
                        } else if (!oldVal || (0, _stringify2.default)(newVal) !== (0, _stringify2.default)(oldVal)) {

                                this.setElementProp($el, name, newVal);
                        }
                }
        }, {
                key: 'updateProps',
                value: function updateProps($el) {
                        var _this2 = this;

                        var newProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


                        var props = (0, _assign2.default)({}, newProps, oldProps);

                        (0, _keys2.default)(props).forEach(function (name) {

                                var newProp = newProps && !_this2.isNil(newProps[name]) && newProps[name] || null;
                                var oldProp = oldProps && !_this2.isNil(oldProps[name]) && oldProps[name] || null;

                                if (newProp != oldProp) {

                                        _this2.updateProp($el, name, newProp, oldProp);
                                }
                        });
                }
        }, {
                key: 'isConditionalProp',
                value: function isConditionalProp(name) {

                        return (/^ez-show/.test(name)
                        );
                }
        }, {
                key: 'isEventProp',
                value: function isEventProp(name) {

                        return (/^ez-on-/.test(name)
                        );
                }
        }, {
                key: 'isCustomProp',
                value: function isCustomProp(name) {

                        return name === 'forceUpdate' || this.isEventProp(name);
                }
        }, {
                key: 'isNil',
                value: function isNil(value) {

                        return value === null || typeof value === 'undefined';
                }
        }, {
                key: 'extractEventName',
                value: function extractEventName(name) {

                        return name.replace(/^ez-on-/, '').toLowerCase();
                }
        }, {
                key: 'extractConditionalDisplayType',
                value: function extractConditionalDisplayType(name) {

                        if (name === 'ez-show') {

                                return name.replace(/^ez-show/, '').toLowerCase();
                        } else {

                                return name.replace(/^ez-show-/, '').toLowerCase();
                        }
                }
        }, {
                key: 'updateEventListenerFromProp',
                value: function updateEventListenerFromProp($el, event, newMethod, oldMethod) {

                        if ($el && $el.addEventListener) {

                                if (oldMethod) {

                                        $el.removeEventListener(event, oldMethod);
                                }

                                if (newMethod) {

                                        this.addEventListenerFromProp($el, event, newMethod);
                                }
                        }
                }
        }, {
                key: 'updateEventListenersFromProp',
                value: function updateEventListenersFromProp($el, newProps, oldProps) {
                        var _this3 = this;

                        var allProps = (0, _assign2.default)({}, oldProps, newProps);
                        var properties = (0, _keys2.default)(allProps);

                        properties.forEach(function (name) {

                                if (_this3.isEventProp(name)) {

                                        var event = _this3.extractEventName(name);

                                        var newMethod = newProps[name];
                                        var oldMethod = oldProps[name];

                                        _this3.updateEventListenerFromProp($el, event, newMethod, oldMethod);
                                }
                        });
                }
        }, {
                key: 'addEventListenerFromProp',
                value: function addEventListenerFromProp($el, name, method) {

                        var event = this.extractEventName(name);

                        if (typeof method === 'string' && this[method]) {

                                method = this[method].bind(this);
                        }

                        $el.addEventListener(event, method);
                }
        }, {
                key: 'addEventListenersFromProps',
                value: function addEventListenersFromProps($el, props) {
                        var _this4 = this;

                        if (props) {

                                var properties = (0, _keys2.default)(props);

                                properties.forEach(function (name) {

                                        if (_this4.isEventProp(name)) {

                                                var method = props[name];

                                                _this4.addEventListenerFromProp($el, name, method);
                                        }
                                });
                        }
                }
        }, {
                key: 'addChildrenToElement',
                value: function addChildrenToElement($el, children) {
                        var _this5 = this;

                        if (children) {

                                children.forEach(function (child) {
                                        return $el.appendChild.bind($el)(_this5.createElement(child));
                                });
                        }
                }
        }, {
                key: 'createElement',
                value: function createElement(node) {

                        if (typeof node === 'undefined' || node === null) {
                                return document.createTextNode('');
                        }

                        if (typeof node === 'string' || typeof node === 'number' || typeof node === 'undefined' || node === null) {
                                return document.createTextNode(node);
                        }

                        var $el = document.createElement(node.type);

                        this.setElementProps($el, node.props);
                        this.addEventListenersFromProps($el, node.props);
                        this.addChildrenToElement($el, node.children);

                        return $el;
                }
        }, {
                key: 'changed',
                value: function changed(node1, node2) {

                        return (typeof node1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(node1)) !== (typeof node2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(node2)) || (typeof node1 === 'string' || typeof node1 === 'number') && node1 !== node2 || node1.type !== node2.type || node1.props && node1.props.forceUpdate && (!node1.props.style || node1.props.style && !node1.props.style.includes('display:none'));
                }
        }, {
                key: 'isInView',
                value: function isInView($parent, $el) {

                        if ($el && (!$el.getBoundingClientRect || $el.style.display == 'none')) {
                                return true;
                        }

                        var childRect = $el.getBoundingClientRect();
                        var parentRect = $parent.getBoundingClientRect();

                        return childRect.top >= parentRect.top - childRect.height && childRect.bottom <= parentRect.bottom + childRect.height;
                }
        }, {
                key: 'updateElement',
                value: function updateElement($parent, newNode, oldNode) {
                        var $el = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : $parent.childNodes[0];


                        /*
                        console.log(1, 'update element', newNode);
                        console.log($parent);
                        console.log(newNode);
                        console.log(oldNode);
                        console.log($el);
                        console.log('//--');
                        */

                        if (this.isNil(oldNode)) {

                                $parent.appendChild(this.createElement(newNode));
                        } else if (this.isNil(newNode)) {

                                $parent.removeChild($el);

                                return -1; // suggests that an element has been removed
                        } else if (this.changed(newNode, oldNode)) {

                                $parent.replaceChild(this.createElement(newNode), $el);
                        } else if (newNode.type) {

                                this.updateProps($el, newNode.props, oldNode.props);
                                this.updateEventListenersFromProp($el, newNode.props, oldNode.props);

                                var max = Math.max(newNode.children.length, oldNode.children.length);

                                var adjustment = 0;

                                for (var i = 0; i < max; i++) {

                                        adjustment += this.updateElement($el, newNode.children[i], oldNode.children[i], $el.childNodes[i + adjustment]);
                                }
                        }

                        return 0; // suggest that an element has not been removed
                }
        }]);
        return EzVDOM;
}();

exports.default = EzVDOM;

/***/ })
/******/ ]);
});