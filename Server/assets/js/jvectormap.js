/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
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

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
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

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
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
  var $default = $native || getMethod(DEFAULT);
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
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
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

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
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

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

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

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
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

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
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

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/ui-huma/js/vendor/jvectormap.js":
/*!******************************************************!*\
  !*** ./node_modules/ui-huma/js/vendor/jvectormap.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

(function ($) {
  // GDP by country
  $.fn.tkVectorWorldMapGDP = function () {
    if (!this.length) return;
    var gdpData = window.jVectorMapGdpData;
    if (gdpData === undefined) return;
    this.vectorMap({
      map: 'world_mill_en',
      zoomOnScroll: false,
      backgroundColor: "#fff",
      series: {
        regions: [{
          values: gdpData,
          scale: [settings.colors.primary[500], settings.colors.success[500]],
          normalizeFunction: 'polynomial'
        }]
      },
      onLabelShow: function onLabelShow(e, el, code) {
        el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
      }
    });
  }; // World map markers


  $.fn.tkVectorWorldMapMarkers = function () {
    if (!this.length) return;
    this.vectorMap({
      map: 'world_mill_en',
      regionStyle: {
        initial: {
          fill: settings.colors.gray[300]
        }
      },
      zoomOnScroll: false,
      normalizeFunction: 'polynomial',
      hoverOpacity: 0.7,
      hoverColor: false,
      markerStyle: {
        initial: {
          fill: settings.colors.primary[500],
          stroke: '#fff'
        }
      },
      backgroundColor: "#fff",
      markers: [{
        latLng: [41.90, 12.45],
        name: 'Vatican City'
      }, {
        latLng: [43.73, 7.41],
        name: 'Monaco'
      }, {
        latLng: [-0.52, 166.93],
        name: 'Nauru'
      }, {
        latLng: [-8.51, 179.21],
        name: 'Tuvalu'
      }, {
        latLng: [43.93, 12.46],
        name: 'San Marino'
      }, {
        latLng: [47.14, 9.52],
        name: 'Liechtenstein'
      }, {
        latLng: [7.11, 171.06],
        name: 'Marshall Islands'
      }, {
        latLng: [17.3, -62.73],
        name: 'Saint Kitts and Nevis'
      }, {
        latLng: [3.2, 73.22],
        name: 'Maldives'
      }, {
        latLng: [35.88, 14.5],
        name: 'Malta'
      }, {
        latLng: [12.05, -61.75],
        name: 'Grenada'
      }, {
        latLng: [13.16, -61.23],
        name: 'Saint Vincent and the Grenadines'
      }, {
        latLng: [13.16, -59.55],
        name: 'Barbados'
      }, {
        latLng: [17.11, -61.85],
        name: 'Antigua and Barbuda'
      }, {
        latLng: [-4.61, 55.45],
        name: 'Seychelles'
      }, {
        latLng: [7.35, 134.46],
        name: 'Palau'
      }, {
        latLng: [42.5, 1.51],
        name: 'Andorra'
      }, {
        latLng: [14.01, -60.98],
        name: 'Saint Lucia'
      }, {
        latLng: [6.91, 158.18],
        name: 'Federated States of Micronesia'
      }, {
        latLng: [1.3, 103.8],
        name: 'Singapore'
      }, {
        latLng: [1.46, 173.03],
        name: 'Kiribati'
      }, {
        latLng: [-21.13, -175.2],
        name: 'Tonga'
      }, {
        latLng: [15.3, -61.38],
        name: 'Dominica'
      }, {
        latLng: [-20.2, 57.5],
        name: 'Mauritius'
      }, {
        latLng: [26.02, 50.55],
        name: 'Bahrain'
      }, {
        latLng: [0.33, 6.73],
        name: 'So Tom and Prncipe'
      }]
    });
  }; // USA unemployment


  $.fn.tkVectorUSAUnemployment = function () {
    if (!this.length) return;
    var container = this;
    $.getJSON('assets/data/vector-maps/data/us-unemployment.json', function (data) {
      var val = 2009,
          statesValues = jvm.values.apply({}, jvm.values(data.states)),
          metroPopValues = Array.prototype.concat.apply([], jvm.values(data.metro.population)),
          metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment));
      container.vectorMap({
        map: 'us_aea_en',
        markers: data.metro.coords,
        backgroundColor: "#fff",
        zoomOnScroll: false,
        series: {
          markers: [{
            attribute: 'fill',
            scale: [settings.colors.primary[300]],
            values: data.metro.unemployment[val],
            min: jvm.min(metroUnemplValues),
            max: jvm.max(metroUnemplValues)
          }, {
            attribute: 'r',
            scale: [5, 20],
            values: data.metro.population[val],
            min: jvm.min(metroPopValues),
            max: jvm.max(metroPopValues)
          }],
          regions: [{
            scale: [settings.colors.primary[500], settings.colors.success[500]],
            attribute: 'fill',
            values: data.states[val],
            min: jvm.min(statesValues),
            max: jvm.max(statesValues)
          }]
        },
        onMarkerLabelShow: function onMarkerLabelShow(event, label, index) {
          label.html('<b>' + data.metro.names[index] + '</b><br/>' + '<b>Population: </b>' + data.metro.population[val][index] + '</br>' + '<b>Unemployment rate: </b>' + data.metro.unemployment[val][index] + '%');
        },
        onRegionLabelShow: function onRegionLabelShow(event, label, code) {
          label.html('<b>' + label.html() + '</b></br>' + '<b>Unemployment rate: </b>' + data.states[val][code] + '%');
        }
      });
    });
  }; // regions selection


  $.fn.tkVectorRegionSelection = function () {
    if (!this.length) return;
    var container = this,
        map = new jvm.Map({
      container: container,
      map: 'de_merc_en',
      regionsSelectable: true,
      markersSelectable: true,
      backgroundColor: "#fff",
      zoomOnScroll: false,
      markers: [{
        latLng: [52.50, 13.39],
        name: 'Berlin'
      }, {
        latLng: [53.56, 10.00],
        name: 'Hamburg'
      }, {
        latLng: [48.13, 11.56],
        name: 'Munich'
      }, {
        latLng: [50.95, 6.96],
        name: 'Cologne'
      }, {
        latLng: [50.11, 8.68],
        name: 'Frankfurt am Main'
      }, {
        latLng: [48.77, 9.17],
        name: 'Stuttgart'
      }, {
        latLng: [51.23, 6.78],
        name: 'Dusseldorf'
      }, {
        latLng: [51.51, 7.46],
        name: 'Dortmund'
      }, {
        latLng: [51.45, 7.01],
        name: 'Essen'
      }, {
        latLng: [53.07, 8.80],
        name: 'Bremen'
      }],
      markerStyle: {
        initial: {
          fill: settings.colors.primary[300]
        },
        selected: {
          fill: settings.colors.success[500]
        }
      },
      regionStyle: {
        initial: {
          fill: settings.colors.primary[500]
        },
        selected: {
          fill: settings.colors.gray[700]
        }
      },
      series: {
        markers: [{
          attribute: 'r',
          scale: [5, 15],
          values: [887.70, 755.16, 310.69, 405.17, 248.31, 207.35, 217.22, 280.71, 210.32, 325.42]
        }]
      },
      onRegionSelected: function onRegionSelected() {
        if (window.localStorage) {
          window.localStorage.setItem('jvectormap-selected-regions', JSON.stringify(map.getSelectedRegions()));
        }
      },
      onMarkerSelected: function onMarkerSelected() {
        if (window.localStorage) {
          window.localStorage.setItem('jvectormap-selected-markers', JSON.stringify(map.getSelectedMarkers()));
        }
      }
    });
    map.setSelectedRegions(JSON.parse(window.localStorage.getItem('jvectormap-selected-regions') || '[]'));
    map.setSelectedMarkers(JSON.parse(window.localStorage.getItem('jvectormap-selected-markers') || '[]'));
  }; // France elections


  $.fn.tkVectorFranceElections = function () {
    if (!this.length) return;
    $.getJSON('assets/data/vector-maps/data/france-elections.json', function (data) {
      new jvm.Map({
        map: 'fr_merc_en',
        backgroundColor: "#fff",
        container: $('#france-2007'),
        zoomOnScroll: false,
        series: {
          regions: [{
            scale: {
              '1': settings.colors.primary[500],
              '2': settings.colors.primary[300]
            },
            attribute: 'fill',
            values: data.year2007.results
          }]
        }
      });
      new jvm.Map({
        map: 'fr_merc_en',
        container: $('#france-2012'),
        backgroundColor: "#fff",
        zoomOnScroll: false,
        series: {
          regions: [{
            scale: {
              '1': settings.colors.primary[500],
              '2': settings.colors.primary[300]
            },
            attribute: 'fill',
            values: data.year2012.results
          }]
        }
      });
    });
  }; // random colors


  var palette = [settings.colors.primary[300], settings.colors.primary[500], settings.colors.success[500], settings.colors.gray[300], settings.colors.success[500], settings.colors.success[600]],
      colorsMap;

  var generateColors = function generateColors() {
    var colors = {},
        key;

    for (key in colorsMap.regions) {
      colors[key] = palette[Math.floor(Math.random() * palette.length)];
    }

    return colors;
  };

  $.fn.tkVectorRandomColors = function () {
    if (!this.length) return;
    colorsMap = new jvm.Map({
      map: 'es_merc_en',
      backgroundColor: "#fff",
      container: this,
      zoomOnScroll: false,
      series: {
        regions: [{
          attribute: 'fill'
        }]
      }
    });
    colorsMap.series.regions[0].setValues(generateColors());
    $('#update-colors-button').click(function (e) {
      e.preventDefault();
      colorsMap.series.regions[0].setValues(generateColors());
    });
  }; // mall map


  $.fn.tkVectorMallMap = function () {
    if (!this.length) return;
    this.vectorMap({
      map: 'mall',
      backgroundColor: "#fff",
      zoomOnScroll: false,
      markers: [{
        coords: [60, 110],
        name: 'Escalator 1',
        style: {
          fill: settings.colors.primary[300],
          stroke: "#fff"
        }
      }, {
        coords: [260, 95],
        name: 'Escalator 2',
        style: {
          fill: settings.colors.primary[300],
          stroke: "#fff"
        }
      }, {
        coords: [434, 95],
        name: 'Escalator 3',
        style: {
          fill: settings.colors.primary[300],
          stroke: "#fff"
        }
      }, {
        coords: [634, 110],
        name: 'Escalator 4',
        style: {
          fill: settings.colors.primary[300],
          stroke: "#fff"
        }
      }],
      series: {
        regions: [{
          values: {
            F102: 'SPORTS & OUTDOOR',
            F103: 'HOME DECOR',
            F105: 'FASHION',
            F106: 'OTHER',
            F108: 'BEAUTY & SPA',
            F109: 'FASHION',
            F110: 'BEAUTY & SPA',
            F111: 'URBAN FAVORITES',
            F114: 'SERVICES',
            F166: 'DINING',
            F167: 'FASHION',
            F169: 'DINING',
            F170: 'ENTERTAINMENT',
            F172: 'DINING',
            F174: 'DINING',
            F115: 'KIDS STUFF',
            F117: 'LIFESTYLE',
            F118: 'URBAN FAVORITES',
            F119: 'FASHION',
            F120: 'FASHION',
            F122: 'KIDS STUFF',
            F124: 'KIDS STUFF',
            F125: 'KIDS STUFF',
            F126: 'KIDS STUFF',
            F128: 'KIDS STUFF',
            F129: 'LIFESTYLE',
            F130: 'HOME DECOR',
            F132: 'DINING',
            F133: 'SPORTS & OUTDOOR',
            F134: 'KIDS STUFF',
            F135: 'LIFESTYLE',
            F136: 'LIFESTYLE',
            F139: 'KIDS STUFF',
            F153: 'DINING',
            F155: 'FASHION',
            F156: 'URBAN FAVORITES',
            F157: 'URBAN FAVORITES',
            F158: 'LINGERIE & UNDERWEAR',
            F159: 'FASHION',
            F160: 'FASHION',
            F162: 'FASHION',
            F164: 'FASHION',
            F165: 'FASHION',
            FR01: 'REST ROOMS',
            FR02: 'REST ROOMS',
            FR03: 'REST ROOMS',
            FR04: 'REST ROOMS',
            FFC: 'DINING'
          },
          scale: {
            "FASHION": "#2761ad",
            "LINGERIE & UNDERWEAR": "#d58aa3",
            "BEAUTY & SPA": settings.colors.success[500],
            "URBAN FAVORITES": settings.colors.primary[900],
            "SPORTS & OUTDOOR": settings.colors.success[500],
            "KIDS STUFF": settings.colors.success[300],
            "ENTERTAINMENT": settings.colors.success[500],
            "HOME DECOR": settings.colors.gray[400],
            "LIFESTYLE": settings.colors.gray[300],
            "DINING": settings.colors.success[500],
            "REST ROOMS": settings.colors.gray[700],
            "SERVICES": settings.colors.gray[300],
            "OTHER": settings.colors.gray[500]
          }
        }]
      },
      onRegionLabelShow: function onRegionLabelShow(e, el, code) {
        if (el.html() === '') {
          e.preventDefault();
        }
      }
    });
  }; // reverse projection map


  $.fn.tkVectorProjectionMap = function () {
    if (!this.length) return;
    var mapProjection,
        markerIndex = 0,
        markersCoords = {};
    mapProjection = new jvm.Map({
      map: 'us_lcc_en',
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: settings.colors.primary[500]
        }
      },
      backgroundColor: "#fff",
      markerStyle: {
        initial: {
          fill: 'red'
        }
      },
      container: this,
      onMarkerLabelShow: function onMarkerLabelShow(e, label, code) {
        mapProjection.label.text(markersCoords[code].lat.toFixed(2) + ', ' + markersCoords[code].lng.toFixed(2));
      },
      onMarkerClick: function onMarkerClick(e, code) {
        mapProjection.removeMarkers([code]);
        mapProjection.label.hide();
      }
    });
    mapProjection.container.click(function (e) {
      var latLng = mapProjection.pointToLatLng(e.offsetX, e.offsetY),
          targetCls = $(e.target).attr('class');

      if (latLng && (!targetCls || targetCls && $(e.target).attr('class').indexOf('jvectormap-marker') === -1)) {
        markersCoords[markerIndex] = latLng;
        mapProjection.addMarker(markerIndex, {
          latLng: [latLng.lat, latLng.lng]
        });
        markerIndex += 1;
      }
    });
  };

  $('[data-toggle="vector-world-map-gdp"]').tkVectorWorldMapGDP();
  $('[data-toggle="vector-world-map-markers"]').tkVectorWorldMapMarkers();
  $('[data-toggle="vector-usa-unemployment"]').tkVectorUSAUnemployment();
  $('[data-toggle="vector-region-selection"]').tkVectorRegionSelection();
  $('[data-toggle="vector-france-elections"]').tkVectorFranceElections();
  $('[data-toggle="vector-random-colors"]').tkVectorRandomColors();
  $('[data-toggle="vector-mall-map"]').tkVectorMallMap();
  $('[data-toggle="vector-projection-map"]').tkVectorProjectionMap();
})(jQuery);

/***/ }),

/***/ "./src/js/vendor/jvectormap.js":
/*!*************************************!*\
  !*** ./src/js/vendor/jvectormap.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_vendor_jvectormap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/vendor/jvectormap */ "./node_modules/ui-huma/js/vendor/jvectormap.js");
/* harmony import */ var ui_huma_js_vendor_jvectormap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_vendor_jvectormap__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 41:
/*!*******************************************!*\
  !*** multi ./src/js/vendor/jvectormap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/vendor/jvectormap.js */"./src/js/vendor/jvectormap.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aS1odW1hL2pzL3ZlbmRvci9qdmVjdG9ybWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92ZW5kb3IvanZlY3Rvcm1hcC5qcyJdLCJuYW1lcyI6WyIkIiwiZm4iLCJ0a1ZlY3RvcldvcmxkTWFwR0RQIiwibGVuZ3RoIiwiZ2RwRGF0YSIsIndpbmRvdyIsImpWZWN0b3JNYXBHZHBEYXRhIiwidW5kZWZpbmVkIiwidmVjdG9yTWFwIiwibWFwIiwiem9vbU9uU2Nyb2xsIiwiYmFja2dyb3VuZENvbG9yIiwic2VyaWVzIiwicmVnaW9ucyIsInZhbHVlcyIsInNjYWxlIiwic2V0dGluZ3MiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic3VjY2VzcyIsIm5vcm1hbGl6ZUZ1bmN0aW9uIiwib25MYWJlbFNob3ciLCJlIiwiZWwiLCJjb2RlIiwiaHRtbCIsInRrVmVjdG9yV29ybGRNYXBNYXJrZXJzIiwicmVnaW9uU3R5bGUiLCJpbml0aWFsIiwiZmlsbCIsImdyYXkiLCJob3Zlck9wYWNpdHkiLCJob3ZlckNvbG9yIiwibWFya2VyU3R5bGUiLCJzdHJva2UiLCJtYXJrZXJzIiwibGF0TG5nIiwibmFtZSIsInRrVmVjdG9yVVNBVW5lbXBsb3ltZW50IiwiY29udGFpbmVyIiwiZ2V0SlNPTiIsImRhdGEiLCJ2YWwiLCJzdGF0ZXNWYWx1ZXMiLCJqdm0iLCJhcHBseSIsInN0YXRlcyIsIm1ldHJvUG9wVmFsdWVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjb25jYXQiLCJtZXRybyIsInBvcHVsYXRpb24iLCJtZXRyb1VuZW1wbFZhbHVlcyIsInVuZW1wbG95bWVudCIsImNvb3JkcyIsImF0dHJpYnV0ZSIsIm1pbiIsIm1heCIsIm9uTWFya2VyTGFiZWxTaG93IiwiZXZlbnQiLCJsYWJlbCIsImluZGV4IiwibmFtZXMiLCJvblJlZ2lvbkxhYmVsU2hvdyIsInRrVmVjdG9yUmVnaW9uU2VsZWN0aW9uIiwiTWFwIiwicmVnaW9uc1NlbGVjdGFibGUiLCJtYXJrZXJzU2VsZWN0YWJsZSIsInNlbGVjdGVkIiwib25SZWdpb25TZWxlY3RlZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2VsZWN0ZWRSZWdpb25zIiwib25NYXJrZXJTZWxlY3RlZCIsImdldFNlbGVjdGVkTWFya2VycyIsInNldFNlbGVjdGVkUmVnaW9ucyIsInBhcnNlIiwiZ2V0SXRlbSIsInNldFNlbGVjdGVkTWFya2VycyIsInRrVmVjdG9yRnJhbmNlRWxlY3Rpb25zIiwieWVhcjIwMDciLCJyZXN1bHRzIiwieWVhcjIwMTIiLCJwYWxldHRlIiwiY29sb3JzTWFwIiwiZ2VuZXJhdGVDb2xvcnMiLCJrZXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0a1ZlY3RvclJhbmRvbUNvbG9ycyIsInNldFZhbHVlcyIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJ0a1ZlY3Rvck1hbGxNYXAiLCJzdHlsZSIsIkYxMDIiLCJGMTAzIiwiRjEwNSIsIkYxMDYiLCJGMTA4IiwiRjEwOSIsIkYxMTAiLCJGMTExIiwiRjExNCIsIkYxNjYiLCJGMTY3IiwiRjE2OSIsIkYxNzAiLCJGMTcyIiwiRjE3NCIsIkYxMTUiLCJGMTE3IiwiRjExOCIsIkYxMTkiLCJGMTIwIiwiRjEyMiIsIkYxMjQiLCJGMTI1IiwiRjEyNiIsIkYxMjgiLCJGMTI5IiwiRjEzMCIsIkYxMzIiLCJGMTMzIiwiRjEzNCIsIkYxMzUiLCJGMTM2IiwiRjEzOSIsIkYxNTMiLCJGMTU1IiwiRjE1NiIsIkYxNTciLCJGMTU4IiwiRjE1OSIsIkYxNjAiLCJGMTYyIiwiRjE2NCIsIkYxNjUiLCJGUjAxIiwiRlIwMiIsIkZSMDMiLCJGUjA0IiwiRkZDIiwidGtWZWN0b3JQcm9qZWN0aW9uTWFwIiwibWFwUHJvamVjdGlvbiIsIm1hcmtlckluZGV4IiwibWFya2Vyc0Nvb3JkcyIsInRleHQiLCJsYXQiLCJ0b0ZpeGVkIiwibG5nIiwib25NYXJrZXJDbGljayIsInJlbW92ZU1hcmtlcnMiLCJoaWRlIiwicG9pbnRUb0xhdExuZyIsIm9mZnNldFgiLCJvZmZzZXRZIiwidGFyZ2V0Q2xzIiwidGFyZ2V0IiwiYXR0ciIsImluZGV4T2YiLCJhZGRNYXJrZXIiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxzREFBUTtBQUNsQztBQUNB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Q0FBWUMsSUFBWixDQUFpQixPQUFqQixFQUEwQkMsT0FBMUIsQ0FBa0MsbUJBQWxDLE1BQTJELENBQUUsQ0FBL0YsQ0FBVixFQUE4RztBQUM1R2QscUJBQWEsQ0FBRUQsV0FBRixDQUFiLEdBQStCakgsTUFBL0I7QUFDQWdILHFCQUFhLENBQUNpQixTQUFkLENBQXdCaEIsV0FBeEIsRUFBcUM7QUFBQ2pILGdCQUFNLEVBQUUsQ0FBRUEsTUFBTSxDQUFDb0gsR0FBVCxFQUFjcEgsTUFBTSxDQUFDc0gsR0FBckI7QUFBVCxTQUFyQztBQUNBTCxtQkFBVyxJQUFJLENBQWY7QUFDRDtBQUNGLEtBVEQ7QUFVRCxHQTFDRDs7QUE0Q0FySixHQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ0UsbUJBQTFDO0FBQ0FGLEdBQUMsQ0FBQywwQ0FBRCxDQUFELENBQThDMEIsdUJBQTlDO0FBQ0ExQixHQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2Q3NDLHVCQUE3QztBQUNBdEMsR0FBQyxDQUFDLHlDQUFELENBQUQsQ0FBNkNpRSx1QkFBN0M7QUFDQWpFLEdBQUMsQ0FBQyx5Q0FBRCxDQUFELENBQTZDa0YsdUJBQTdDO0FBQ0FsRixHQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQzZGLG9CQUExQztBQUNBN0YsR0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNpRyxlQUFyQztBQUNBakcsR0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNtSixxQkFBM0M7QUFFRCxDQWhkRCxFQWdkR21CLE1BaGRILEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvanZlY3Rvcm1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi45JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgJHRvU3RyaW5nID0gcmVxdWlyZSgnLi9fZnVuY3Rpb24tdG8tc3RyaW5nJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciB0ZXN0ID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgLy8gR0RQIGJ5IGNvdW50cnlcbiAgJC5mbi50a1ZlY3RvcldvcmxkTWFwR0RQID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgIHZhciBnZHBEYXRhID0gd2luZG93LmpWZWN0b3JNYXBHZHBEYXRhO1xuXG4gICAgaWYgKGdkcERhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgdGhpcy52ZWN0b3JNYXAoe1xuICAgICAgbWFwOiAnd29ybGRfbWlsbF9lbicsXG4gICAgICB6b29tT25TY3JvbGw6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgIHNlcmllczoge1xuICAgICAgICByZWdpb25zOiBbIHtcbiAgICAgICAgICB2YWx1ZXM6IGdkcERhdGEsXG4gICAgICAgICAgc2NhbGU6IFsgc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTAwXSwgc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbNTAwXSBdLFxuICAgICAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAncG9seW5vbWlhbCdcbiAgICAgICAgfSBdXG4gICAgICB9LFxuICAgICAgb25MYWJlbFNob3c6IGZ1bmN0aW9uIChlLCBlbCwgY29kZSkge1xuICAgICAgICBlbC5odG1sKGVsLmh0bWwoKSArICcgKEdEUCAtICcgKyBnZHBEYXRhWyBjb2RlIF0gKyAnKScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFdvcmxkIG1hcCBtYXJrZXJzXG4gICQuZm4udGtWZWN0b3JXb3JsZE1hcE1hcmtlcnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgdGhpcy52ZWN0b3JNYXAoe1xuICAgICAgbWFwOiAnd29ybGRfbWlsbF9lbicsXG4gICAgICByZWdpb25TdHlsZToge1xuICAgICAgICBpbml0aWFsOiB7XG4gICAgICAgICAgZmlsbDogc2V0dGluZ3MuY29sb3JzLmdyYXlbMzAwXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgem9vbU9uU2Nyb2xsOiBmYWxzZSxcbiAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAncG9seW5vbWlhbCcsXG4gICAgICBob3Zlck9wYWNpdHk6IDAuNyxcbiAgICAgIGhvdmVyQ29sb3I6IGZhbHNlLFxuICAgICAgbWFya2VyU3R5bGU6IHtcbiAgICAgICAgaW5pdGlhbDoge1xuICAgICAgICAgIGZpbGw6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgc3Ryb2tlOiAnI2ZmZidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICBtYXJrZXJzOiBbXG4gICAgICAgIHtsYXRMbmc6IFsgNDEuOTAsIDEyLjQ1IF0sIG5hbWU6ICdWYXRpY2FuIENpdHknfSxcbiAgICAgICAge2xhdExuZzogWyA0My43MywgNy40MSBdLCBuYW1lOiAnTW9uYWNvJ30sXG4gICAgICAgIHtsYXRMbmc6IFsgLSAwLjUyLCAxNjYuOTMgXSwgbmFtZTogJ05hdXJ1J30sXG4gICAgICAgIHtsYXRMbmc6IFsgLSA4LjUxLCAxNzkuMjEgXSwgbmFtZTogJ1R1dmFsdSd9LFxuICAgICAgICB7bGF0TG5nOiBbIDQzLjkzLCAxMi40NiBdLCBuYW1lOiAnU2FuIE1hcmlubyd9LFxuICAgICAgICB7bGF0TG5nOiBbIDQ3LjE0LCA5LjUyIF0sIG5hbWU6ICdMaWVjaHRlbnN0ZWluJ30sXG4gICAgICAgIHtsYXRMbmc6IFsgNy4xMSwgMTcxLjA2IF0sIG5hbWU6ICdNYXJzaGFsbCBJc2xhbmRzJ30sXG4gICAgICAgIHtsYXRMbmc6IFsgMTcuMywgLSA2Mi43MyBdLCBuYW1lOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJ30sXG4gICAgICAgIHtsYXRMbmc6IFsgMy4yLCA3My4yMiBdLCBuYW1lOiAnTWFsZGl2ZXMnfSxcbiAgICAgICAge2xhdExuZzogWyAzNS44OCwgMTQuNSBdLCBuYW1lOiAnTWFsdGEnfSxcbiAgICAgICAge2xhdExuZzogWyAxMi4wNSwgLSA2MS43NSBdLCBuYW1lOiAnR3JlbmFkYSd9LFxuICAgICAgICB7bGF0TG5nOiBbIDEzLjE2LCAtIDYxLjIzIF0sIG5hbWU6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcyd9LFxuICAgICAgICB7bGF0TG5nOiBbIDEzLjE2LCAtIDU5LjU1IF0sIG5hbWU6ICdCYXJiYWRvcyd9LFxuICAgICAgICB7bGF0TG5nOiBbIDE3LjExLCAtIDYxLjg1IF0sIG5hbWU6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJ30sXG4gICAgICAgIHtsYXRMbmc6IFsgLSA0LjYxLCA1NS40NSBdLCBuYW1lOiAnU2V5Y2hlbGxlcyd9LFxuICAgICAgICB7bGF0TG5nOiBbIDcuMzUsIDEzNC40NiBdLCBuYW1lOiAnUGFsYXUnfSxcbiAgICAgICAge2xhdExuZzogWyA0Mi41LCAxLjUxIF0sIG5hbWU6ICdBbmRvcnJhJ30sXG4gICAgICAgIHtsYXRMbmc6IFsgMTQuMDEsIC0gNjAuOTggXSwgbmFtZTogJ1NhaW50IEx1Y2lhJ30sXG4gICAgICAgIHtsYXRMbmc6IFsgNi45MSwgMTU4LjE4IF0sIG5hbWU6ICdGZWRlcmF0ZWQgU3RhdGVzIG9mIE1pY3JvbmVzaWEnfSxcbiAgICAgICAge2xhdExuZzogWyAxLjMsIDEwMy44IF0sIG5hbWU6ICdTaW5nYXBvcmUnfSxcbiAgICAgICAge2xhdExuZzogWyAxLjQ2LCAxNzMuMDMgXSwgbmFtZTogJ0tpcmliYXRpJ30sXG4gICAgICAgIHtsYXRMbmc6IFsgLSAyMS4xMywgLSAxNzUuMiBdLCBuYW1lOiAnVG9uZ2EnfSxcbiAgICAgICAge2xhdExuZzogWyAxNS4zLCAtIDYxLjM4IF0sIG5hbWU6ICdEb21pbmljYSd9LFxuICAgICAgICB7bGF0TG5nOiBbIC0gMjAuMiwgNTcuNSBdLCBuYW1lOiAnTWF1cml0aXVzJ30sXG4gICAgICAgIHtsYXRMbmc6IFsgMjYuMDIsIDUwLjU1IF0sIG5hbWU6ICdCYWhyYWluJ30sXG4gICAgICAgIHtsYXRMbmc6IFsgMC4zMywgNi43MyBdLCBuYW1lOiAnU28gVG9tIGFuZCBQcm5jaXBlJ31cbiAgICAgIF1cbiAgICB9KTtcbiAgfTtcblxuICAvLyBVU0EgdW5lbXBsb3ltZW50XG4gICQuZm4udGtWZWN0b3JVU0FVbmVtcGxveW1lbnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXM7XG5cbiAgICAkLmdldEpTT04oJ2Fzc2V0cy9kYXRhL3ZlY3Rvci1tYXBzL2RhdGEvdXMtdW5lbXBsb3ltZW50Lmpzb24nLCBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICB2YXIgdmFsID0gMjAwOSxcbiAgICAgICAgc3RhdGVzVmFsdWVzID0ganZtLnZhbHVlcy5hcHBseSh7fSwganZtLnZhbHVlcyhkYXRhLnN0YXRlcykpLFxuICAgICAgICBtZXRyb1BvcFZhbHVlcyA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGp2bS52YWx1ZXMoZGF0YS5tZXRyby5wb3B1bGF0aW9uKSksXG4gICAgICAgIG1ldHJvVW5lbXBsVmFsdWVzID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwganZtLnZhbHVlcyhkYXRhLm1ldHJvLnVuZW1wbG95bWVudCkpO1xuXG4gICAgICBjb250YWluZXIudmVjdG9yTWFwKHtcbiAgICAgICAgbWFwOiAndXNfYWVhX2VuJyxcbiAgICAgICAgbWFya2VyczogZGF0YS5tZXRyby5jb29yZHMsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIHpvb21PblNjcm9sbDogZmFsc2UsXG4gICAgICAgIHNlcmllczoge1xuICAgICAgICAgIG1hcmtlcnM6IFsge1xuICAgICAgICAgICAgYXR0cmlidXRlOiAnZmlsbCcsXG4gICAgICAgICAgICBzY2FsZTogWyBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVszMDBdIF0sXG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWV0cm8udW5lbXBsb3ltZW50WyB2YWwgXSxcbiAgICAgICAgICAgIG1pbjoganZtLm1pbihtZXRyb1VuZW1wbFZhbHVlcyksXG4gICAgICAgICAgICBtYXg6IGp2bS5tYXgobWV0cm9VbmVtcGxWYWx1ZXMpXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgYXR0cmlidXRlOiAncicsXG4gICAgICAgICAgICBzY2FsZTogWyA1LCAyMCBdLFxuICAgICAgICAgICAgdmFsdWVzOiBkYXRhLm1ldHJvLnBvcHVsYXRpb25bIHZhbCBdLFxuICAgICAgICAgICAgbWluOiBqdm0ubWluKG1ldHJvUG9wVmFsdWVzKSxcbiAgICAgICAgICAgIG1heDoganZtLm1heChtZXRyb1BvcFZhbHVlcylcbiAgICAgICAgICB9IF0sXG4gICAgICAgICAgcmVnaW9uczogWyB7XG4gICAgICAgICAgICBzY2FsZTogWyBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs1MDBdLCBzZXR0aW5ncy5jb2xvcnMuc3VjY2Vzc1s1MDBdIF0sXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdmaWxsJyxcbiAgICAgICAgICAgIHZhbHVlczogZGF0YS5zdGF0ZXNbIHZhbCBdLFxuICAgICAgICAgICAgbWluOiBqdm0ubWluKHN0YXRlc1ZhbHVlcyksXG4gICAgICAgICAgICBtYXg6IGp2bS5tYXgoc3RhdGVzVmFsdWVzKVxuICAgICAgICAgIH0gXVxuICAgICAgICB9LFxuICAgICAgICBvbk1hcmtlckxhYmVsU2hvdzogZnVuY3Rpb24gKGV2ZW50LCBsYWJlbCwgaW5kZXgpIHtcbiAgICAgICAgICBsYWJlbC5odG1sKFxuICAgICAgICAgICAgJzxiPicgKyBkYXRhLm1ldHJvLm5hbWVzWyBpbmRleCBdICsgJzwvYj48YnIvPicgK1xuICAgICAgICAgICAgJzxiPlBvcHVsYXRpb246IDwvYj4nICsgZGF0YS5tZXRyby5wb3B1bGF0aW9uWyB2YWwgXVsgaW5kZXggXSArICc8L2JyPicgK1xuICAgICAgICAgICAgJzxiPlVuZW1wbG95bWVudCByYXRlOiA8L2I+JyArIGRhdGEubWV0cm8udW5lbXBsb3ltZW50WyB2YWwgXVsgaW5kZXggXSArICclJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVnaW9uTGFiZWxTaG93OiBmdW5jdGlvbiAoZXZlbnQsIGxhYmVsLCBjb2RlKSB7XG4gICAgICAgICAgbGFiZWwuaHRtbChcbiAgICAgICAgICAgICc8Yj4nICsgbGFiZWwuaHRtbCgpICsgJzwvYj48L2JyPicgK1xuICAgICAgICAgICAgJzxiPlVuZW1wbG95bWVudCByYXRlOiA8L2I+JyArIGRhdGEuc3RhdGVzWyB2YWwgXVsgY29kZSBdICsgJyUnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gcmVnaW9ucyBzZWxlY3Rpb25cbiAgJC5mbi50a1ZlY3RvclJlZ2lvblNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhpcyxcbiAgICAgIG1hcCA9IG5ldyBqdm0uTWFwKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIG1hcDogJ2RlX21lcmNfZW4nLFxuICAgICAgICByZWdpb25zU2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgbWFya2Vyc1NlbGVjdGFibGU6IHRydWUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIHpvb21PblNjcm9sbDogZmFsc2UsXG4gICAgICAgIG1hcmtlcnM6IFtcbiAgICAgICAgICB7bGF0TG5nOiBbIDUyLjUwLCAxMy4zOSBdLCBuYW1lOiAnQmVybGluJ30sXG4gICAgICAgICAge2xhdExuZzogWyA1My41NiwgMTAuMDAgXSwgbmFtZTogJ0hhbWJ1cmcnfSxcbiAgICAgICAgICB7bGF0TG5nOiBbIDQ4LjEzLCAxMS41NiBdLCBuYW1lOiAnTXVuaWNoJ30sXG4gICAgICAgICAge2xhdExuZzogWyA1MC45NSwgNi45NiBdLCBuYW1lOiAnQ29sb2duZSd9LFxuICAgICAgICAgIHtsYXRMbmc6IFsgNTAuMTEsIDguNjggXSwgbmFtZTogJ0ZyYW5rZnVydCBhbSBNYWluJ30sXG4gICAgICAgICAge2xhdExuZzogWyA0OC43NywgOS4xNyBdLCBuYW1lOiAnU3R1dHRnYXJ0J30sXG4gICAgICAgICAge2xhdExuZzogWyA1MS4yMywgNi43OCBdLCBuYW1lOiAnRHVzc2VsZG9yZid9LFxuICAgICAgICAgIHtsYXRMbmc6IFsgNTEuNTEsIDcuNDYgXSwgbmFtZTogJ0RvcnRtdW5kJ30sXG4gICAgICAgICAge2xhdExuZzogWyA1MS40NSwgNy4wMSBdLCBuYW1lOiAnRXNzZW4nfSxcbiAgICAgICAgICB7bGF0TG5nOiBbIDUzLjA3LCA4LjgwIF0sIG5hbWU6ICdCcmVtZW4nfVxuICAgICAgICBdLFxuICAgICAgICBtYXJrZXJTdHlsZToge1xuICAgICAgICAgIGluaXRpYWw6IHtcbiAgICAgICAgICAgIGZpbGw6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzMwMF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkOiB7XG4gICAgICAgICAgICBmaWxsOiBzZXR0aW5ncy5jb2xvcnMuc3VjY2Vzc1s1MDBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWdpb25TdHlsZToge1xuICAgICAgICAgIGluaXRpYWw6IHtcbiAgICAgICAgICAgIGZpbGw6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkOiB7XG4gICAgICAgICAgICBmaWxsOiBzZXR0aW5ncy5jb2xvcnMuZ3JheVs3MDBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICBtYXJrZXJzOiBbIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3InLFxuICAgICAgICAgICAgc2NhbGU6IFsgNSwgMTUgXSxcbiAgICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgICA4ODcuNzAsXG4gICAgICAgICAgICAgIDc1NS4xNixcbiAgICAgICAgICAgICAgMzEwLjY5LFxuICAgICAgICAgICAgICA0MDUuMTcsXG4gICAgICAgICAgICAgIDI0OC4zMSxcbiAgICAgICAgICAgICAgMjA3LjM1LFxuICAgICAgICAgICAgICAyMTcuMjIsXG4gICAgICAgICAgICAgIDI4MC43MSxcbiAgICAgICAgICAgICAgMjEwLjMyLFxuICAgICAgICAgICAgICAzMjUuNDJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9IF1cbiAgICAgICAgfSxcbiAgICAgICAgb25SZWdpb25TZWxlY3RlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdqdmVjdG9ybWFwLXNlbGVjdGVkLXJlZ2lvbnMnLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShtYXAuZ2V0U2VsZWN0ZWRSZWdpb25zKCkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25NYXJrZXJTZWxlY3RlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdqdmVjdG9ybWFwLXNlbGVjdGVkLW1hcmtlcnMnLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShtYXAuZ2V0U2VsZWN0ZWRNYXJrZXJzKCkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgbWFwLnNldFNlbGVjdGVkUmVnaW9ucyhKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnanZlY3Rvcm1hcC1zZWxlY3RlZC1yZWdpb25zJykgfHwgJ1tdJykpO1xuICAgIG1hcC5zZXRTZWxlY3RlZE1hcmtlcnMoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p2ZWN0b3JtYXAtc2VsZWN0ZWQtbWFya2VycycpIHx8ICdbXScpKTtcbiAgfTtcblxuICAvLyBGcmFuY2UgZWxlY3Rpb25zXG4gICQuZm4udGtWZWN0b3JGcmFuY2VFbGVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgJC5nZXRKU09OKCdhc3NldHMvZGF0YS92ZWN0b3ItbWFwcy9kYXRhL2ZyYW5jZS1lbGVjdGlvbnMuanNvbicsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBuZXcganZtLk1hcCh7XG4gICAgICAgIG1hcDogJ2ZyX21lcmNfZW4nLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICBjb250YWluZXI6ICQoJyNmcmFuY2UtMjAwNycpLFxuICAgICAgICB6b29tT25TY3JvbGw6IGZhbHNlLFxuICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICByZWdpb25zOiBbIHtcbiAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICcxJzogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICAgICAgJzInOiBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVszMDBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0cmlidXRlOiAnZmlsbCcsXG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGEueWVhcjIwMDcucmVzdWx0c1xuICAgICAgICAgIH0gXVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbmV3IGp2bS5NYXAoe1xuICAgICAgICBtYXA6ICdmcl9tZXJjX2VuJyxcbiAgICAgICAgY29udGFpbmVyOiAkKCcjZnJhbmNlLTIwMTInKSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgem9vbU9uU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgcmVnaW9uczogWyB7XG4gICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAnMSc6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICAgICcyJzogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbMzAwXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2ZpbGwnLFxuICAgICAgICAgICAgdmFsdWVzOiBkYXRhLnllYXIyMDEyLnJlc3VsdHNcbiAgICAgICAgICB9IF1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gcmFuZG9tIGNvbG9yc1xuICB2YXIgcGFsZXR0ZSA9IFsgXG4gICAgc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbMzAwXSwgXG4gICAgc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTAwXSwgXG4gICAgc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbNTAwXSwgXG4gICAgc2V0dGluZ3MuY29sb3JzLmdyYXlbMzAwXSwgXG4gICAgc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbNTAwXSwgXG4gICAgc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbNjAwXSBcbiAgXSwgY29sb3JzTWFwO1xuXG4gIHZhciBnZW5lcmF0ZUNvbG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3JzID0ge30sXG4gICAgICAgIGtleTtcblxuICAgIGZvciAoa2V5IGluIGNvbG9yc01hcC5yZWdpb25zKSB7XG4gICAgICBjb2xvcnNbIGtleSBdID0gcGFsZXR0ZVsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGFsZXR0ZS5sZW5ndGgpIF07XG4gICAgfVxuICAgIHJldHVybiBjb2xvcnM7XG4gIH07XG5cbiAgJC5mbi50a1ZlY3RvclJhbmRvbUNvbG9ycyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb2xvcnNNYXAgPSBuZXcganZtLk1hcCh7XG4gICAgICBtYXA6ICdlc19tZXJjX2VuJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICBjb250YWluZXI6IHRoaXMsXG4gICAgICB6b29tT25TY3JvbGw6IGZhbHNlLFxuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIHJlZ2lvbnM6IFsge1xuICAgICAgICAgIGF0dHJpYnV0ZTogJ2ZpbGwnXG4gICAgICAgIH0gXVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29sb3JzTWFwLnNlcmllcy5yZWdpb25zWyAwIF0uc2V0VmFsdWVzKGdlbmVyYXRlQ29sb3JzKCkpO1xuXG4gICAgJCgnI3VwZGF0ZS1jb2xvcnMtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbG9yc01hcC5zZXJpZXMucmVnaW9uc1sgMCBdLnNldFZhbHVlcyhnZW5lcmF0ZUNvbG9ycygpKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8vIG1hbGwgbWFwXG4gICQuZm4udGtWZWN0b3JNYWxsTWFwID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgIHRoaXMudmVjdG9yTWFwKHtcbiAgICAgIG1hcDogJ21hbGwnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgIHpvb21PblNjcm9sbDogZmFsc2UsXG4gICAgICBtYXJrZXJzOiBbIHtcbiAgICAgICAgY29vcmRzOiBbIDYwLCAxMTAgXSxcbiAgICAgICAgbmFtZTogJ0VzY2FsYXRvciAxJyxcbiAgICAgICAgc3R5bGU6IHtmaWxsOiBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVszMDBdLCBzdHJva2U6IFwiI2ZmZlwifVxuICAgICAgfSwge1xuICAgICAgICBjb29yZHM6IFsgMjYwLCA5NSBdLFxuICAgICAgICBuYW1lOiAnRXNjYWxhdG9yIDInLFxuICAgICAgICBzdHlsZToge2ZpbGw6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzMwMF0sIHN0cm9rZTogXCIjZmZmXCJ9XG4gICAgICB9LCB7XG4gICAgICAgIGNvb3JkczogWyA0MzQsIDk1IF0sXG4gICAgICAgIG5hbWU6ICdFc2NhbGF0b3IgMycsXG4gICAgICAgIHN0eWxlOiB7ZmlsbDogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbMzAwXSwgc3Ryb2tlOiBcIiNmZmZcIn1cbiAgICAgIH0sIHtcbiAgICAgICAgY29vcmRzOiBbIDYzNCwgMTEwIF0sXG4gICAgICAgIG5hbWU6ICdFc2NhbGF0b3IgNCcsXG4gICAgICAgIHN0eWxlOiB7ZmlsbDogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbMzAwXSwgc3Ryb2tlOiBcIiNmZmZcIn1cbiAgICAgIH0gXSxcbiAgICAgIHNlcmllczoge1xuICAgICAgICByZWdpb25zOiBbIHtcbiAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIEYxMDI6ICdTUE9SVFMgJiBPVVRET09SJyxcbiAgICAgICAgICAgIEYxMDM6ICdIT01FIERFQ09SJyxcbiAgICAgICAgICAgIEYxMDU6ICdGQVNISU9OJyxcbiAgICAgICAgICAgIEYxMDY6ICdPVEhFUicsXG4gICAgICAgICAgICBGMTA4OiAnQkVBVVRZICYgU1BBJyxcbiAgICAgICAgICAgIEYxMDk6ICdGQVNISU9OJyxcbiAgICAgICAgICAgIEYxMTA6ICdCRUFVVFkgJiBTUEEnLFxuICAgICAgICAgICAgRjExMTogJ1VSQkFOIEZBVk9SSVRFUycsXG4gICAgICAgICAgICBGMTE0OiAnU0VSVklDRVMnLFxuICAgICAgICAgICAgRjE2NjogJ0RJTklORycsXG4gICAgICAgICAgICBGMTY3OiAnRkFTSElPTicsXG4gICAgICAgICAgICBGMTY5OiAnRElOSU5HJyxcbiAgICAgICAgICAgIEYxNzA6ICdFTlRFUlRBSU5NRU5UJyxcbiAgICAgICAgICAgIEYxNzI6ICdESU5JTkcnLFxuICAgICAgICAgICAgRjE3NDogJ0RJTklORycsXG4gICAgICAgICAgICBGMTE1OiAnS0lEUyBTVFVGRicsXG4gICAgICAgICAgICBGMTE3OiAnTElGRVNUWUxFJyxcbiAgICAgICAgICAgIEYxMTg6ICdVUkJBTiBGQVZPUklURVMnLFxuICAgICAgICAgICAgRjExOTogJ0ZBU0hJT04nLFxuICAgICAgICAgICAgRjEyMDogJ0ZBU0hJT04nLFxuICAgICAgICAgICAgRjEyMjogJ0tJRFMgU1RVRkYnLFxuICAgICAgICAgICAgRjEyNDogJ0tJRFMgU1RVRkYnLFxuICAgICAgICAgICAgRjEyNTogJ0tJRFMgU1RVRkYnLFxuICAgICAgICAgICAgRjEyNjogJ0tJRFMgU1RVRkYnLFxuICAgICAgICAgICAgRjEyODogJ0tJRFMgU1RVRkYnLFxuICAgICAgICAgICAgRjEyOTogJ0xJRkVTVFlMRScsXG4gICAgICAgICAgICBGMTMwOiAnSE9NRSBERUNPUicsXG4gICAgICAgICAgICBGMTMyOiAnRElOSU5HJyxcbiAgICAgICAgICAgIEYxMzM6ICdTUE9SVFMgJiBPVVRET09SJyxcbiAgICAgICAgICAgIEYxMzQ6ICdLSURTIFNUVUZGJyxcbiAgICAgICAgICAgIEYxMzU6ICdMSUZFU1RZTEUnLFxuICAgICAgICAgICAgRjEzNjogJ0xJRkVTVFlMRScsXG4gICAgICAgICAgICBGMTM5OiAnS0lEUyBTVFVGRicsXG4gICAgICAgICAgICBGMTUzOiAnRElOSU5HJyxcbiAgICAgICAgICAgIEYxNTU6ICdGQVNISU9OJyxcbiAgICAgICAgICAgIEYxNTY6ICdVUkJBTiBGQVZPUklURVMnLFxuICAgICAgICAgICAgRjE1NzogJ1VSQkFOIEZBVk9SSVRFUycsXG4gICAgICAgICAgICBGMTU4OiAnTElOR0VSSUUgJiBVTkRFUldFQVInLFxuICAgICAgICAgICAgRjE1OTogJ0ZBU0hJT04nLFxuICAgICAgICAgICAgRjE2MDogJ0ZBU0hJT04nLFxuICAgICAgICAgICAgRjE2MjogJ0ZBU0hJT04nLFxuICAgICAgICAgICAgRjE2NDogJ0ZBU0hJT04nLFxuICAgICAgICAgICAgRjE2NTogJ0ZBU0hJT04nLFxuICAgICAgICAgICAgRlIwMTogJ1JFU1QgUk9PTVMnLFxuICAgICAgICAgICAgRlIwMjogJ1JFU1QgUk9PTVMnLFxuICAgICAgICAgICAgRlIwMzogJ1JFU1QgUk9PTVMnLFxuICAgICAgICAgICAgRlIwNDogJ1JFU1QgUk9PTVMnLFxuICAgICAgICAgICAgRkZDOiAnRElOSU5HJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgIFwiRkFTSElPTlwiOiBcIiMyNzYxYWRcIixcbiAgICAgICAgICAgIFwiTElOR0VSSUUgJiBVTkRFUldFQVJcIjogXCIjZDU4YWEzXCIsXG4gICAgICAgICAgICBcIkJFQVVUWSAmIFNQQVwiOiBzZXR0aW5ncy5jb2xvcnMuc3VjY2Vzc1s1MDBdLFxuICAgICAgICAgICAgXCJVUkJBTiBGQVZPUklURVNcIjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbOTAwXSxcbiAgICAgICAgICAgIFwiU1BPUlRTICYgT1VURE9PUlwiOiBzZXR0aW5ncy5jb2xvcnMuc3VjY2Vzc1s1MDBdLFxuICAgICAgICAgICAgXCJLSURTIFNUVUZGXCI6IHNldHRpbmdzLmNvbG9ycy5zdWNjZXNzWzMwMF0sXG4gICAgICAgICAgICBcIkVOVEVSVEFJTk1FTlRcIjogc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbNTAwXSxcbiAgICAgICAgICAgIFwiSE9NRSBERUNPUlwiOiBzZXR0aW5ncy5jb2xvcnMuZ3JheVs0MDBdLFxuICAgICAgICAgICAgXCJMSUZFU1RZTEVcIjogc2V0dGluZ3MuY29sb3JzLmdyYXlbMzAwXSxcbiAgICAgICAgICAgIFwiRElOSU5HXCI6IHNldHRpbmdzLmNvbG9ycy5zdWNjZXNzWzUwMF0sXG4gICAgICAgICAgICBcIlJFU1QgUk9PTVNcIjogc2V0dGluZ3MuY29sb3JzLmdyYXlbNzAwXSxcbiAgICAgICAgICAgIFwiU0VSVklDRVNcIjogc2V0dGluZ3MuY29sb3JzLmdyYXlbMzAwXSxcbiAgICAgICAgICAgIFwiT1RIRVJcIjogc2V0dGluZ3MuY29sb3JzLmdyYXlbNTAwXVxuICAgICAgICAgIH1cbiAgICAgICAgfSBdXG4gICAgICB9LFxuICAgICAgb25SZWdpb25MYWJlbFNob3c6IGZ1bmN0aW9uIChlLCBlbCwgY29kZSkge1xuICAgICAgICBpZiAoZWwuaHRtbCgpID09PSAnJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIHJldmVyc2UgcHJvamVjdGlvbiBtYXBcbiAgJC5mbi50a1ZlY3RvclByb2plY3Rpb25NYXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgdmFyIG1hcFByb2plY3Rpb24sXG4gICAgICAgIG1hcmtlckluZGV4ID0gMCxcbiAgICAgICAgbWFya2Vyc0Nvb3JkcyA9IHt9O1xuXG4gICAgbWFwUHJvamVjdGlvbiA9IG5ldyBqdm0uTWFwKHtcbiAgICAgIG1hcDogJ3VzX2xjY19lbicsXG4gICAgICB6b29tT25TY3JvbGw6IGZhbHNlLFxuICAgICAgcmVnaW9uU3R5bGU6IHtcbiAgICAgICAgaW5pdGlhbDoge1xuICAgICAgICAgIGZpbGw6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICBtYXJrZXJTdHlsZToge1xuICAgICAgICBpbml0aWFsOiB7XG4gICAgICAgICAgZmlsbDogJ3JlZCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lcjogdGhpcyxcbiAgICAgIG9uTWFya2VyTGFiZWxTaG93OiBmdW5jdGlvbiAoZSwgbGFiZWwsIGNvZGUpIHtcbiAgICAgICAgbWFwUHJvamVjdGlvbi5sYWJlbC50ZXh0KG1hcmtlcnNDb29yZHNbIGNvZGUgXS5sYXQudG9GaXhlZCgyKSArICcsICcgKyBtYXJrZXJzQ29vcmRzWyBjb2RlIF0ubG5nLnRvRml4ZWQoMikpO1xuICAgICAgfSxcbiAgICAgIG9uTWFya2VyQ2xpY2s6IGZ1bmN0aW9uIChlLCBjb2RlKSB7XG4gICAgICAgIG1hcFByb2plY3Rpb24ucmVtb3ZlTWFya2VycyhbIGNvZGUgXSk7XG4gICAgICAgIG1hcFByb2plY3Rpb24ubGFiZWwuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbWFwUHJvamVjdGlvbi5jb250YWluZXIuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBsYXRMbmcgPSBtYXBQcm9qZWN0aW9uLnBvaW50VG9MYXRMbmcoZS5vZmZzZXRYLCBlLm9mZnNldFkpLFxuICAgICAgICAgIHRhcmdldENscyA9ICQoZS50YXJnZXQpLmF0dHIoJ2NsYXNzJyk7XG5cbiAgICAgIGlmIChsYXRMbmcgJiYgKCEgdGFyZ2V0Q2xzIHx8ICh0YXJnZXRDbHMgJiYgJChlLnRhcmdldCkuYXR0cignY2xhc3MnKS5pbmRleE9mKCdqdmVjdG9ybWFwLW1hcmtlcicpID09PSAtIDEpKSkge1xuICAgICAgICBtYXJrZXJzQ29vcmRzWyBtYXJrZXJJbmRleCBdID0gbGF0TG5nO1xuICAgICAgICBtYXBQcm9qZWN0aW9uLmFkZE1hcmtlcihtYXJrZXJJbmRleCwge2xhdExuZzogWyBsYXRMbmcubGF0LCBsYXRMbmcubG5nIF19KTtcbiAgICAgICAgbWFya2VySW5kZXggKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAkKCdbZGF0YS10b2dnbGU9XCJ2ZWN0b3Itd29ybGQtbWFwLWdkcFwiXScpLnRrVmVjdG9yV29ybGRNYXBHRFAoKTtcbiAgJCgnW2RhdGEtdG9nZ2xlPVwidmVjdG9yLXdvcmxkLW1hcC1tYXJrZXJzXCJdJykudGtWZWN0b3JXb3JsZE1hcE1hcmtlcnMoKTtcbiAgJCgnW2RhdGEtdG9nZ2xlPVwidmVjdG9yLXVzYS11bmVtcGxveW1lbnRcIl0nKS50a1ZlY3RvclVTQVVuZW1wbG95bWVudCgpO1xuICAkKCdbZGF0YS10b2dnbGU9XCJ2ZWN0b3ItcmVnaW9uLXNlbGVjdGlvblwiXScpLnRrVmVjdG9yUmVnaW9uU2VsZWN0aW9uKCk7XG4gICQoJ1tkYXRhLXRvZ2dsZT1cInZlY3Rvci1mcmFuY2UtZWxlY3Rpb25zXCJdJykudGtWZWN0b3JGcmFuY2VFbGVjdGlvbnMoKTtcbiAgJCgnW2RhdGEtdG9nZ2xlPVwidmVjdG9yLXJhbmRvbS1jb2xvcnNcIl0nKS50a1ZlY3RvclJhbmRvbUNvbG9ycygpO1xuICAkKCdbZGF0YS10b2dnbGU9XCJ2ZWN0b3ItbWFsbC1tYXBcIl0nKS50a1ZlY3Rvck1hbGxNYXAoKTtcbiAgJCgnW2RhdGEtdG9nZ2xlPVwidmVjdG9yLXByb2plY3Rpb24tbWFwXCJdJykudGtWZWN0b3JQcm9qZWN0aW9uTWFwKCk7XG5cbn0pKGpRdWVyeSk7IiwiaW1wb3J0ICd1aS1odW1hL2pzL3ZlbmRvci9qdmVjdG9ybWFwJyJdLCJzb3VyY2VSb290IjoiIn0=