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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
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

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
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

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


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

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/ui-huma/js/app.js":
/*!****************************************!*\
  !*** ./node_modules/ui-huma/js/app.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./node_modules/ui-huma/js/main.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfect-scrollbar */ "./node_modules/ui-huma/js/perfect-scrollbar.js");
/* harmony import */ var _perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preloader */ "./node_modules/ui-huma/js/preloader.js");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_preloader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./node_modules/ui-huma/js/sidebar.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sidebar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dropdown_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-tooltip */ "./node_modules/ui-huma/js/dropdown-tooltip.js");
/* harmony import */ var _dropdown_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dropdown_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover */ "./node_modules/ui-huma/js/popover.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_popover__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlay */ "./node_modules/ui-huma/js/overlay.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_overlay__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mdk_carousel_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mdk-carousel-control */ "./node_modules/ui-huma/js/mdk-carousel-control.js");
/* harmony import */ var _mdk_carousel_control__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mdk_carousel_control__WEBPACK_IMPORTED_MODULE_7__);







 // import './read-more'

(function () {
  'use strict';

  $('[data-toggle="tab"]').on('hide.bs.tab', function (e) {
    $(e.target).removeClass('active');
  }); ///////////////////////////////////
  // Custom JavaScript can go here //
  ///////////////////////////////////
})();

/***/ }),

/***/ "./node_modules/ui-huma/js/dropdown-tooltip.js":
/*!*****************************************************!*\
  !*** ./node_modules/ui-huma/js/dropdown-tooltip.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  $('.dropdown[data-toggle="tooltip"]').on('shown.bs.dropdown', function (e) {
    $(e.target).tooltip('hide').tooltip('disable');
  }).on('hide.bs.dropdown', function (e) {
    $(e.target).tooltip('enable');
  });
})();

/***/ }),

/***/ "./node_modules/ui-huma/js/main.js":
/*!*****************************************!*\
  !*** ./node_modules/ui-huma/js/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict'; // Self Initialize DOM Factory Components

  domFactory.handler.autoInit(); // ENABLE TOOLTIPS

  $('[data-toggle="tooltip"]').tooltip();
})();

/***/ }),

/***/ "./node_modules/ui-huma/js/mdk-carousel-control.js":
/*!*********************************************************!*\
  !*** ./node_modules/ui-huma/js/mdk-carousel-control.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mdkCarouselControl = function mdkCarouselControl() {
  return {
    properties: {
      slide: {
        reflectToAttribute: true,
        value: 'next'
      }
    },
    listeners: ['_onClick(click)'],
    _onClick: function _onClick(e) {
      e.preventDefault();
      var target = document.querySelector(this.element.getAttribute('href'));

      if (target) {
        target.mdkCarousel[this.slide]();
      }
    }
  };
};

domFactory.handler.register('mdk-carousel-control', mdkCarouselControl);

/***/ }),

/***/ "./node_modules/ui-huma/js/overlay.js":
/*!********************************************!*\
  !*** ./node_modules/ui-huma/js/overlay.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var isTouch = function isTouch() {
  return 'ontouchstart' in window;
};

var overlayComponent = function overlayComponent() {
  return {
    /**
     * Public properties.
     * @type {Object}
     */
    properties: {
      /**
       * Show on load.
       * @type {Object}
       */
      overlayOnloadShow: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * Toggle reveal on click/mouseenter/mouseleave or touchstart/touchend.
       * click|hover
       * @type {Object}
       */
      trigger: {
        value: 'hover',
        reflectToAttribute: true
      }
    },

    /**
     * Property change observers.
     * @type {Array}
     */
    observers: ['_onChange(shown)'],

    /**
     * Event listeners.
     * @type {Array}
     */
    listeners: ['_onEnter(mouseenter, touchstart)', '_onLeave(mouseleave, touchend)', '_onClick(click)'],

    /**
     * Show the overlay.
     */
    show: function show() {
      this.shown = true;
    },

    /**
     * Hide the overlay.
     */
    hide: function hide() {
      this.shown = false;
    },

    /**
     * Toggle the shown state.
     */
    toggle: function toggle() {
      this.shown = !this.shown;
    },
    _onChange: function _onChange() {
      if (this.shown) {
        return this.element.classList.add('overlay--show');
      }

      this.element.classList.remove('overlay--show');
    },

    /**
     * Handle `mouseenter` and `touchstart` events.
     * @param  {MouseEvent|TouchEvent} event
     */
    _onEnter: function _onEnter() {
      if (this.trigger === 'hover') {
        this.show();
      }
    },

    /**
     * Handle `mouseleave` and `touchend` events.
     * @param  {MouseEvent|TouchEvent} event
     */
    _onLeave: function _onLeave() {
      if (this.trigger === 'hover') {
        this.hide();
      }
    },

    /**
     * Handle `click` event.
     * @param  {MouseEvent|TouchEvent} event
     */
    _onClick: function _onClick() {
      if (this.trigger === 'click') {
        this.toggle();
      }
    },
    init: function init() {
      if (isTouch()) {
        this.element.classList.add('overlay--duserselect');
      }
    },
    _reset: function _reset() {
      if (this.overlayOnloadShow && !this.shown) {
        this.show();
      }
    }
  };
};

domFactory.handler.register('overlay', overlayComponent);

/***/ }),

/***/ "./node_modules/ui-huma/js/perfect-scrollbar.js":
/*!******************************************************!*\
  !*** ./node_modules/ui-huma/js/perfect-scrollbar.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  $('[data-perfect-scrollbar]').each(function () {
    var $element = $(this);
    var element = this;
    var ps = new PerfectScrollbar(element, {
      wheelPropagation: void 0 !== $element.data('perfect-scrollbar-wheel-propagation') ? $element.data('perfect-scrollbar-wheel-propagation') : false,
      suppressScrollY: void 0 !== $element.data('perfect-scrollbar-suppress-scroll-y') ? $element.data('perfect-scrollbar-suppress-scroll-y') : false,
      swipeEasing: false
    });
    Object.defineProperty(element, 'PerfectScrollbar', {
      configurable: true,
      writable: false,
      value: ps
    });
  });
})();

/***/ }),

/***/ "./node_modules/ui-huma/js/popover.js":
/*!********************************************!*\
  !*** ./node_modules/ui-huma/js/popover.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict'; // popover manual + click trigger issue temporary fix
  // see https://github.com/twbs/bootstrap/issues/16732

  $('body').on('shown.bs.popover', function (e) {
    $(e.target).data('bs.popover')._activeTrigger.click = true;
  });
  $('body').on('hidden.bs.popover', function (e) {
    $(e.target).data('bs.popover')._activeTrigger.click = false;
  });
  var isDrawerLayout = !!document.querySelector('.mdk-drawer-layout__content');
  var isHeaderLayout = !!document.querySelector('.mdk-header-layout__content');
  var isSubLayout = !!document.querySelector('.mdk-drawer-layout__content .mdk-drawer-layout__content');
  var container = 'body';
  container = isDrawerLayout ? '.mdk-drawer-layout__content' : container;
  container = isHeaderLayout ? '.mdk-header-layout__content' : container;
  container = isSubLayout ? '.mdk-drawer-layout__content .mdk-drawer-layout__content' : container;
  var popoverOptions = {
    trigger: 'click',
    html: true,
    container: container,
    content: function content() {
      return $(this).next('.popoverContainer').html();
    },
    template: '<div class="popover popover-lg" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  };
  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  function closePopover() {
    if (this.mdkReveal) {
      this.mdkReveal.close();
    }

    if (this.overlay) {
      this.overlay.hide();
    }
  }

  function clearPopovers(event) {
    if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
      return;
    }

    $('[data-toggle="popover"][data-trigger="click"]').popover('hide').each(closePopover);
  }

  var DATA_KEY = 'bs.popover';
  var DATA_API_KEY = '.data-api';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var Event = {
    CLICK: "click".concat(EVENT_KEY),
    CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY),
    KEYUP_DATA_API: "keyup".concat(EVENT_KEY).concat(DATA_API_KEY)
  };
  $(document).on("".concat(Event.CLICK_DATA_API, " ").concat(Event.KEYUP_DATA_API), clearPopovers);
  $('[data-toggle="popover"][data-trigger="click"]').popover(popoverOptions).click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('[data-toggle="popover"]').not(this).popover('hide').each(closePopover);
  });
  $('[data-toggle="popover"][data-trigger="hover"]').popover(popoverOptions).on('mouseenter', function () {
    var _this = this;

    $(this).popover('show');
    $('.popover').on('mouseleave', function () {
      $(_this).popover('hide');
    });
  }).on('mouseleave', function () {
    var _this = this;

    setTimeout(function () {
      if (!$('.popover:hover').length) {
        $(_this).popover('hide');
      }
    }, 300);
  });
  var popover = $('[data-toggle="popover"][data-popover-onload-show]');
  popover.popover('show');
  window.addEventListener('load', function () {
    popover.popover('update');
  });
})();

/***/ }),

/***/ "./node_modules/ui-huma/js/preloader.js":
/*!**********************************************!*\
  !*** ./node_modules/ui-huma/js/preloader.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict'; // PRELOADER

  window.addEventListener('load', function () {
    $('.preloader').fadeOut();
    domFactory.handler.upgradeAll();
  });
})();

/***/ }),

/***/ "./node_modules/ui-huma/js/sidebar.js":
/*!********************************************!*\
  !*** ./node_modules/ui-huma/js/sidebar.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");

(function () {
  'use strict'; // Connect button(s) to drawer(s)

  var sidebarToggle = document.querySelectorAll('[data-toggle="sidebar"]');
  sidebarToggle = Array.prototype.slice.call(sidebarToggle);
  sidebarToggle.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      var selector = e.currentTarget.getAttribute('data-target') || '#default-drawer';
      var drawer = document.querySelector(selector);

      if (drawer) {
        drawer.mdkDrawer.toggle();
      }
    });
  });
  var drawers = document.querySelectorAll('.mdk-drawer');
  drawers = Array.prototype.slice.call(drawers);
  drawers.forEach(function (drawer) {
    drawer.addEventListener('mdk-drawer-change', function (e) {
      if (!e.target.mdkDrawer) {
        return;
      }

      document.querySelector('body').classList[e.target.mdkDrawer.opened ? 'add' : 'remove']('has-drawer-opened');
      var button = document.querySelector('[data-target="#' + e.target.id + '"]');

      if (button) {
        button.classList[e.target.mdkDrawer.opened ? 'add' : 'remove']('active');
      }
    });
  }); // SIDEBAR COLLAPSE MENUS

  $('.sidebar .collapse').on('show.bs.collapse', function (e) {
    e.stopPropagation();
    var parent = $(this).parent().closest('ul');
    parent.find('.open').find('.collapse').not(this).collapse('hide');
    $(this).closest('li').addClass('open');
  });
  $('.sidebar .collapse').on('hidden.bs.collapse', function (e) {
    e.stopPropagation();
    $(this).closest('li').removeClass('open');
  });
})();

/***/ }),

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var accordionComponent = function accordionComponent() {
  return {
    _onShow: function _onShow(e) {
      if ($(e.target).hasClass('accordion__menu')) {
        $(e.target).closest('.accordion__item').addClass('open');
      }
    },
    _onHide: function _onHide(e) {
      if ($(e.target).hasClass('accordion__menu')) {
        $(e.target).closest('.accordion__item').removeClass('open');
      }
    },
    init: function init() {
      $(this.element).on('show.bs.collapse', this._onShow);
      $(this.element).on('hide.bs.collapse', this._onHide);
    },
    destroy: function destroy() {
      $(this.element).off('show.bs.collapse', this._onShow);
      $(this.element).off('hide.bs.collapse', this._onHide);
    }
  };
};

domFactory.handler.register('accordion', accordionComponent);

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/app */ "./node_modules/ui-huma/js/app.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./src/js/image.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "./src/js/accordion.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_3__);





(function () {
  'use strict'; // Custom
})();

/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var imageComponent = function imageComponent() {
  return {
    /**
     * Public properties.
     * @type {Object}
     */
    properties: {
      /**
       * Background position.
       * @type {Object}
       */
      position: {
        reflectToAttribute: true,
        value: 'center'
      },

      /**
       * Image height.
       * @type {Object}
       */
      height: {
        reflectToAttribute: true,
        value: 'auto'
      }
    },

    /**
     * Mask element.
     * @return {HTMLElement}
     */
    get image() {
      return this.element.querySelector('img');
    },

    _reset: function _reset() {
      if (!this.image) {
        return;
      }

      this.element.style.display = 'block';
      this.element.style.position = 'relative';
      this.element.style.overflow = 'hidden';
      this.element.style.backgroundImage = "url(".concat(this.image.src, ")");
      this.element.style.backgroundSize = 'cover';
      this.element.style.backgroundPosition = this.position;
      this.element.style.height = "".concat(this.height === 'auto' ? this.image.offsetHeight : this.height, "px");
      this.element.removeChild(this.image);
    }
  };
};

domFactory.handler.register('image', imageComponent);

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var playerComponent = function playerComponent() {
  return {
    listeners: ['button.play(click)'],

    get button() {
      return this.element.querySelector('.player__content');
    },

    play: function play(e) {
      e.preventDefault();
      this.element.querySelector('.player__embed').classList.remove('d-none');
      this.element.querySelector('.player__embed iframe').src += "&autoplay=1";
    }
  };
};

domFactory.handler.register('player', playerComponent);

/***/ }),

/***/ 2:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aS1odW1hL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9qcy9kcm9wZG93bi10b29sdGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aS1odW1hL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvbWRrLWNhcm91c2VsLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9qcy9wZXJmZWN0LXNjcm9sbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9qcy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aS1odW1hL2pzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9qcy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsYXllci5qcyJdLCJuYW1lcyI6WyIkIiwib24iLCJlIiwidGFyZ2V0IiwicmVtb3ZlQ2xhc3MiLCJ0b29sdGlwIiwiZG9tRmFjdG9yeSIsImhhbmRsZXIiLCJhdXRvSW5pdCIsIm1ka0Nhcm91c2VsQ29udHJvbCIsInByb3BlcnRpZXMiLCJzbGlkZSIsInJlZmxlY3RUb0F0dHJpYnV0ZSIsInZhbHVlIiwibGlzdGVuZXJzIiwiX29uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJtZGtDYXJvdXNlbCIsInJlZ2lzdGVyIiwiaXNUb3VjaCIsIndpbmRvdyIsIm92ZXJsYXlDb21wb25lbnQiLCJvdmVybGF5T25sb2FkU2hvdyIsInR5cGUiLCJCb29sZWFuIiwidHJpZ2dlciIsIm9ic2VydmVycyIsInNob3ciLCJzaG93biIsImhpZGUiLCJ0b2dnbGUiLCJfb25DaGFuZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJfb25FbnRlciIsIl9vbkxlYXZlIiwiaW5pdCIsIl9yZXNldCIsImVhY2giLCIkZWxlbWVudCIsInBzIiwiUGVyZmVjdFNjcm9sbGJhciIsIndoZWVsUHJvcGFnYXRpb24iLCJkYXRhIiwic3VwcHJlc3NTY3JvbGxZIiwic3dpcGVFYXNpbmciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2FjdGl2ZVRyaWdnZXIiLCJjbGljayIsImlzRHJhd2VyTGF5b3V0IiwiaXNIZWFkZXJMYXlvdXQiLCJpc1N1YkxheW91dCIsImNvbnRhaW5lciIsInBvcG92ZXJPcHRpb25zIiwiaHRtbCIsImNvbnRlbnQiLCJuZXh0IiwidGVtcGxhdGUiLCJUQUJfS0VZQ09ERSIsIlJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCIsImNsb3NlUG9wb3ZlciIsIm1ka1JldmVhbCIsImNsb3NlIiwib3ZlcmxheSIsImNsZWFyUG9wb3ZlcnMiLCJldmVudCIsIndoaWNoIiwicG9wb3ZlciIsIkRBVEFfS0VZIiwiREFUQV9BUElfS0VZIiwiRVZFTlRfS0VZIiwiRXZlbnQiLCJDTElDSyIsIkNMSUNLX0RBVEFfQVBJIiwiS0VZVVBfREFUQV9BUEkiLCJzdG9wUHJvcGFnYXRpb24iLCJub3QiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZmFkZU91dCIsInVwZ3JhZGVBbGwiLCJzaWRlYmFyVG9nZ2xlIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZm9yRWFjaCIsInNlbGVjdG9yIiwiY3VycmVudFRhcmdldCIsImRyYXdlciIsIm1ka0RyYXdlciIsImRyYXdlcnMiLCJvcGVuZWQiLCJidXR0b24iLCJpZCIsInBhcmVudCIsImNsb3Nlc3QiLCJmaW5kIiwiY29sbGFwc2UiLCJhZGRDbGFzcyIsImFjY29yZGlvbkNvbXBvbmVudCIsIl9vblNob3ciLCJfb25IaWRlIiwiZGVzdHJveSIsImltYWdlQ29tcG9uZW50IiwicG9zaXRpb24iLCJoZWlnaHQiLCJwbGF5ZXJDb21wb25lbnQiLCJwbGF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxz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QUFBQSxTQUFPO0FBRTVCOzs7O0FBSUF6RyxjQUFVLEVBQUU7QUFFVjs7OztBQUlBMEcsY0FBUSxFQUFFO0FBQ1J4RywwQkFBa0IsRUFEVjtBQUVSQyxhQUFLLEVBQUU7QUFGQyxPQU5BOztBQVdWOzs7O0FBSUF3RyxZQUFNLEVBQUU7QUFDTnpHLDBCQUFrQixFQURaO0FBRU5DLGFBQUssRUFBRTtBQUZEO0FBZkUsS0FOZ0I7O0FBMkI1Qjs7OztBQUlBLGdCQUFhO0FBQ1gsYUFBTywyQkFBUCxLQUFPLENBQVA7QUFoQzBCOztBQW1DNUI2QixVQW5DNEIsb0JBbUNsQjtBQUNSLFVBQUksQ0FBQyxLQUFMLE9BQWlCO0FBQ2Y7QUFDRDs7QUFDRDtBQUNBO0FBQ0E7QUFDQSx5REFBNkMsV0FBN0M7QUFDQTtBQUNBLDhDQUF3QyxLQUF4QztBQUNBLDRDQUFnQyx5QkFBeUIsV0FBekIsZUFBbUQsS0FBbkY7QUFDQSwrQkFBeUIsS0FBekI7QUFDRDtBQS9DMkIsR0FBUDtBQUF2Qjs7QUFrREFwQyxVQUFVLENBQVZBLDBDOzs7Ozs7Ozs7OztBQ2xEQSxJQUFNZ0gsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU87QUFDN0J4RyxhQUFTLEVBQUUsQ0FEa0Isb0JBQ2xCLENBRGtCOztBQUs3QixpQkFBYztBQUNaLGFBQU8sMkJBQVAsa0JBQU8sQ0FBUDtBQU4yQjs7QUFTN0J5RyxRQVQ2QixtQkFTcEI7QUFDUHJILE9BQUMsQ0FBREE7QUFDQTtBQUNBO0FBQ0Q7QUFiNEIsR0FBUDtBQUF4Qjs7QUFnQkFJLFVBQVUsQ0FBVkEsNEMiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjknIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuL19mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KTtcbnZhciBLRVkgPSAnZmluZCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcbiIsImltcG9ydCAnLi9tYWluJ1xuaW1wb3J0ICcuL3BlcmZlY3Qtc2Nyb2xsYmFyJ1xuaW1wb3J0ICcuL3ByZWxvYWRlcidcbmltcG9ydCAnLi9zaWRlYmFyJ1xuaW1wb3J0ICcuL2Ryb3Bkb3duLXRvb2x0aXAnXG5pbXBvcnQgJy4vcG9wb3ZlcidcbmltcG9ydCAnLi9vdmVybGF5J1xuaW1wb3J0ICcuL21kay1jYXJvdXNlbC1jb250cm9sJ1xuLy8gaW1wb3J0ICcuL3JlYWQtbW9yZSdcblxuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgJCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykub24oJ2hpZGUuYnMudGFiJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgfSlcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBDdXN0b20gSmF2YVNjcmlwdCBjYW4gZ28gaGVyZSAvL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG59KSgpXG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAkKCcuZHJvcGRvd25bZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJylcbiAgICAub24oJ3Nob3duLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoZS50YXJnZXQpXG4gICAgICAgIC50b29sdGlwKCdoaWRlJylcbiAgICAgICAgLnRvb2x0aXAoJ2Rpc2FibGUnKVxuICAgIH0pXG4gICAgLm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoZS50YXJnZXQpLnRvb2x0aXAoJ2VuYWJsZScpXG4gICAgfSlcblxufSkoKSIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBcbiAgLy8gU2VsZiBJbml0aWFsaXplIERPTSBGYWN0b3J5IENvbXBvbmVudHNcbiAgZG9tRmFjdG9yeS5oYW5kbGVyLmF1dG9Jbml0KClcblxuICAvLyBFTkFCTEUgVE9PTFRJUFNcbiAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKVxuXG59KSgpIiwiY29uc3QgbWRrQ2Fyb3VzZWxDb250cm9sID0gKCkgPT4gKHtcbiAgcHJvcGVydGllczoge1xuICAgIHNsaWRlOiB7XG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB2YWx1ZTogJ25leHQnXG4gICAgfVxuICB9LFxuICBsaXN0ZW5lcnM6IFtcbiAgICAnX29uQ2xpY2soY2xpY2spJ1xuICBdLFxuICBfb25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpKVxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5tZGtDYXJvdXNlbFt0aGlzLnNsaWRlXSgpXG4gICAgfVxuICB9XG59KVxuXG5kb21GYWN0b3J5LmhhbmRsZXIucmVnaXN0ZXIoJ21kay1jYXJvdXNlbC1jb250cm9sJywgbWRrQ2Fyb3VzZWxDb250cm9sKSIsImNvbnN0IGlzVG91Y2ggPSAoKSA9PiB7XG4gIHJldHVybiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KVxufVxuXG5jb25zdCBvdmVybGF5Q29tcG9uZW50ID0gKCkgPT4gKHtcblxuICAvKipcbiAgICogUHVibGljIHByb3BlcnRpZXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBTaG93IG9uIGxvYWQuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBvdmVybGF5T25sb2FkU2hvdzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgcmV2ZWFsIG9uIGNsaWNrL21vdXNlZW50ZXIvbW91c2VsZWF2ZSBvciB0b3VjaHN0YXJ0L3RvdWNoZW5kLlxuICAgICAqIGNsaWNrfGhvdmVyXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0cmlnZ2VyOiB7XG4gICAgICB2YWx1ZTogJ2hvdmVyJyxcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgIH0sXG4gIH0sXG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IGNoYW5nZSBvYnNlcnZlcnMuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIG9ic2VydmVyczogW1xuICAgICdfb25DaGFuZ2Uoc2hvd24pJ1xuICBdLFxuXG4gIC8qKlxuICAgKiBFdmVudCBsaXN0ZW5lcnMuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIGxpc3RlbmVyczogW1xuICAgICdfb25FbnRlcihtb3VzZWVudGVyLCB0b3VjaHN0YXJ0KScsXG4gICAgJ19vbkxlYXZlKG1vdXNlbGVhdmUsIHRvdWNoZW5kKScsXG4gICAgJ19vbkNsaWNrKGNsaWNrKSdcbiAgXSxcblxuICAvKipcbiAgICogU2hvdyB0aGUgb3ZlcmxheS5cbiAgICovXG4gIHNob3cgKCkge1xuICAgIHRoaXMuc2hvd24gPSB0cnVlXG4gIH0sXG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIG92ZXJsYXkuXG4gICAqL1xuICBoaWRlICgpIHtcbiAgICB0aGlzLnNob3duID0gZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBzaG93biBzdGF0ZS5cbiAgICovXG4gIHRvZ2dsZSAoKSB7XG4gICAgdGhpcy5zaG93biA9ICF0aGlzLnNob3duXG4gIH0sXG5cbiAgX29uQ2hhbmdlICgpIHtcbiAgICBpZiAodGhpcy5zaG93bikge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LS1zaG93JylcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktLXNob3cnKVxuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYG1vdXNlZW50ZXJgIGFuZCBgdG91Y2hzdGFydGAgZXZlbnRzLlxuICAgKiBAcGFyYW0gIHtNb3VzZUV2ZW50fFRvdWNoRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfb25FbnRlciAoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZSBgbW91c2VsZWF2ZWAgYW5kIGB0b3VjaGVuZGAgZXZlbnRzLlxuICAgKiBAcGFyYW0gIHtNb3VzZUV2ZW50fFRvdWNoRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfb25MZWF2ZSAoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZSBgY2xpY2tgIGV2ZW50LlxuICAgKiBAcGFyYW0gIHtNb3VzZUV2ZW50fFRvdWNoRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfb25DbGljayAoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfSxcblxuICBpbml0ICgpIHtcbiAgICBpZiAoaXNUb3VjaCgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS0tZHVzZXJzZWxlY3QnKVxuICAgIH1cbiAgfSxcblxuICBfcmVzZXQgKCkge1xuICAgIGlmICh0aGlzLm92ZXJsYXlPbmxvYWRTaG93ICYmICF0aGlzLnNob3duKSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxufSlcblxuZG9tRmFjdG9yeS5oYW5kbGVyLnJlZ2lzdGVyKCdvdmVybGF5Jywgb3ZlcmxheUNvbXBvbmVudCkiLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgXG4gICQoJ1tkYXRhLXBlcmZlY3Qtc2Nyb2xsYmFyXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXNcbiAgICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGVsZW1lbnQsIHtcbiAgICAgIHdoZWVsUHJvcGFnYXRpb246IHZvaWQgMCAhPT0gJGVsZW1lbnQuZGF0YSgncGVyZmVjdC1zY3JvbGxiYXItd2hlZWwtcHJvcGFnYXRpb24nKVxuICAgICAgICA/ICRlbGVtZW50LmRhdGEoJ3BlcmZlY3Qtc2Nyb2xsYmFyLXdoZWVsLXByb3BhZ2F0aW9uJylcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN1cHByZXNzU2Nyb2xsWTogdm9pZCAwICE9PSAkZWxlbWVudC5kYXRhKCdwZXJmZWN0LXNjcm9sbGJhci1zdXBwcmVzcy1zY3JvbGwteScpXG4gICAgICAgID8gJGVsZW1lbnQuZGF0YSgncGVyZmVjdC1zY3JvbGxiYXItc3VwcHJlc3Mtc2Nyb2xsLXknKVxuICAgICAgICA6IGZhbHNlLFxuICAgICAgc3dpcGVFYXNpbmc6IGZhbHNlXG4gICAgfSlcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ1BlcmZlY3RTY3JvbGxiYXInLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogcHNcbiAgICB9KVxuICB9KVxuXG59KSgpXG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBwb3BvdmVyIG1hbnVhbCArIGNsaWNrIHRyaWdnZXIgaXNzdWUgdGVtcG9yYXJ5IGZpeFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xNjczMlxuICBcbiAgJCgnYm9keScpLm9uKCdzaG93bi5icy5wb3BvdmVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5kYXRhKCdicy5wb3BvdmVyJykuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSB0cnVlXG4gIH0pXG5cbiAgJCgnYm9keScpLm9uKCdoaWRkZW4uYnMucG9wb3ZlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkuZGF0YSgnYnMucG9wb3ZlcicpLl9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gZmFsc2VcbiAgfSlcblxuICBjb25zdCBpc0RyYXdlckxheW91dCA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kay1kcmF3ZXItbGF5b3V0X19jb250ZW50JylcbiAgY29uc3QgaXNIZWFkZXJMYXlvdXQgPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGstaGVhZGVyLWxheW91dF9fY29udGVudCcpXG4gIGNvbnN0IGlzU3ViTGF5b3V0ID0gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRrLWRyYXdlci1sYXlvdXRfX2NvbnRlbnQgLm1kay1kcmF3ZXItbGF5b3V0X19jb250ZW50JylcblxuICBsZXQgY29udGFpbmVyID0gJ2JvZHknXG4gIGNvbnRhaW5lciA9IGlzRHJhd2VyTGF5b3V0ID8gJy5tZGstZHJhd2VyLWxheW91dF9fY29udGVudCcgOiBjb250YWluZXJcbiAgY29udGFpbmVyID0gaXNIZWFkZXJMYXlvdXQgPyAnLm1kay1oZWFkZXItbGF5b3V0X19jb250ZW50JyA6IGNvbnRhaW5lclxuICBjb250YWluZXIgPSBpc1N1YkxheW91dCA/ICcubWRrLWRyYXdlci1sYXlvdXRfX2NvbnRlbnQgLm1kay1kcmF3ZXItbGF5b3V0X19jb250ZW50JyA6IGNvbnRhaW5lclxuXG4gIHZhciBwb3BvdmVyT3B0aW9ucyA9IHtcbiAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgIGh0bWw6IHRydWUsXG4gICAgY29udGFpbmVyLFxuICAgIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAkKHRoaXMpLm5leHQoJy5wb3BvdmVyQ29udGFpbmVyJykuaHRtbCgpXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyIHBvcG92ZXItbGdcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+PC9kaXY+J1xuICB9XG5cbiAgY29uc3QgVEFCX0tFWUNPREUgICAgICAgICAgICAgID0gOSAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB0YWIga2V5XG4gIGNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDMgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5cbiAgZnVuY3Rpb24gY2xvc2VQb3BvdmVyKCkge1xuICAgIGlmICh0aGlzLm1ka1JldmVhbCkge1xuICAgICAgdGhpcy5tZGtSZXZlYWwuY2xvc2UoKVxuICAgIH1cbiAgICBpZiAodGhpcy5vdmVybGF5KSB7XG4gICAgICB0aGlzLm92ZXJsYXkuaGlkZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJQb3BvdmVycyhldmVudCkge1xuICAgIGlmIChldmVudCAmJiAoZXZlbnQud2hpY2ggPT09IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCB8fFxuICAgICAgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC53aGljaCAhPT0gVEFCX0tFWUNPREUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdW2RhdGEtdHJpZ2dlcj1cImNsaWNrXCJdJylcbiAgICAgIC5wb3BvdmVyKCdoaWRlJylcbiAgICAgIC5lYWNoKGNsb3NlUG9wb3ZlcilcbiAgfVxuXG4gIGNvbnN0IERBVEFfS0VZICA9ICdicy5wb3BvdmVyJ1xuICBjb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIENMSUNLICAgICAgICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICAgIEtFWVVQX0RBVEFfQVBJICAgOiBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICAkKGRvY3VtZW50KVxuICAgIC5vbihgJHtFdmVudC5DTElDS19EQVRBX0FQSX0gJHtFdmVudC5LRVlVUF9EQVRBX0FQSX1gLCBjbGVhclBvcG92ZXJzKVxuXG4gICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl1bZGF0YS10cmlnZ2VyPVwiY2xpY2tcIl0nKVxuICAgIC5wb3BvdmVyKHBvcG92ZXJPcHRpb25zKVxuICAgIC5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLm5vdCh0aGlzKVxuICAgICAgICAucG9wb3ZlcignaGlkZScpXG4gICAgICAgIC5lYWNoKGNsb3NlUG9wb3ZlcilcbiAgICB9KVxuXG4gICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl1bZGF0YS10cmlnZ2VyPVwiaG92ZXJcIl0nKVxuICAgIC5wb3BvdmVyKHBvcG92ZXJPcHRpb25zKVxuICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXNcbiAgICAgICQodGhpcykucG9wb3Zlcignc2hvdycpXG4gICAgICAkKCcucG9wb3ZlcicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKF90aGlzKS5wb3BvdmVyKCdoaWRlJylcbiAgICAgIH0pXG4gICAgfSlcbiAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkKCcucG9wb3Zlcjpob3ZlcicpLmxlbmd0aCkge1xuICAgICAgICAgICQoX3RoaXMpLnBvcG92ZXIoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgICAgfSwgMzAwKVxuICAgIH0pXG5cbiAgdmFyIHBvcG92ZXIgPSAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdW2RhdGEtcG9wb3Zlci1vbmxvYWQtc2hvd10nKVxuICBwb3BvdmVyLnBvcG92ZXIoJ3Nob3cnKVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHBvcG92ZXIucG9wb3ZlcigndXBkYXRlJylcbiAgfSlcblxufSkoKSIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFBSRUxPQURFUlxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5wcmVsb2FkZXInKS5mYWRlT3V0KClcbiAgICBkb21GYWN0b3J5LmhhbmRsZXIudXBncmFkZUFsbCgpXG4gIH0pXG5cbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgXG4gIC8vIENvbm5lY3QgYnV0dG9uKHMpIHRvIGRyYXdlcihzKVxuICB2YXIgc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXJcIl0nKVxuICBzaWRlYmFyVG9nZ2xlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2lkZWJhclRvZ2dsZSlcblxuICBzaWRlYmFyVG9nZ2xlLmZvckVhY2goZnVuY3Rpb24gKHRvZ2dsZSkge1xuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpIHx8ICcjZGVmYXVsdC1kcmF3ZXInXG4gICAgICB2YXIgZHJhd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgIGlmIChkcmF3ZXIpIHtcbiAgICAgICAgZHJhd2VyLm1ka0RyYXdlci50b2dnbGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgbGV0IGRyYXdlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWRrLWRyYXdlcicpXG4gIGRyYXdlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmF3ZXJzKVxuICBkcmF3ZXJzLmZvckVhY2goKGRyYXdlcikgPT4ge1xuICAgIGRyYXdlci5hZGRFdmVudExpc3RlbmVyKCdtZGstZHJhd2VyLWNoYW5nZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUudGFyZ2V0Lm1ka0RyYXdlcikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3RbZS50YXJnZXQubWRrRHJhd2VyLm9wZW5lZCA/ICdhZGQnIDogJ3JlbW92ZSddKCdoYXMtZHJhd2VyLW9wZW5lZCcpXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFyZ2V0PVwiIycgKyBlLnRhcmdldC5pZCArICdcIl0nKVxuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0W2UudGFyZ2V0Lm1ka0RyYXdlci5vcGVuZWQgPyAnYWRkJyA6ICdyZW1vdmUnXSgnYWN0aXZlJylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIC8vIFNJREVCQVIgQ09MTEFQU0UgTUVOVVNcbiAgXG4gICQoJy5zaWRlYmFyIC5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgbGV0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCkuY2xvc2VzdCgndWwnKVxuICAgIHBhcmVudC5maW5kKCcub3BlbicpLmZpbmQoJy5jb2xsYXBzZScpLm5vdCh0aGlzKS5jb2xsYXBzZSgnaGlkZScpXG4gICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdvcGVuJylcbiAgfSk7XG5cbiAgJCgnLnNpZGViYXIgLmNvbGxhcHNlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICQodGhpcykuY2xvc2VzdCgnbGknKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICB9KTtcblxufSkoKSIsImNvbnN0IGFjY29yZGlvbkNvbXBvbmVudCA9ICgpID0+ICh7XG4gIF9vblNob3cgKGUpIHtcbiAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2FjY29yZGlvbl9fbWVudScpKSB7XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuYWNjb3JkaW9uX19pdGVtJykuYWRkQ2xhc3MoJ29wZW4nKVxuICAgIH1cbiAgfSxcbiAgX29uSGlkZSAoZSkge1xuICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnYWNjb3JkaW9uX19tZW51JykpIHtcbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5hY2NvcmRpb25fX2l0ZW0nKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgfVxuICB9LFxuICBpbml0ICgpIHtcbiAgICAkKHRoaXMuZWxlbWVudCkub24oJ3Nob3cuYnMuY29sbGFwc2UnLCB0aGlzLl9vblNob3cpXG4gICAgJCh0aGlzLmVsZW1lbnQpLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgdGhpcy5fb25IaWRlKVxuICB9LFxuICBkZXN0cm95ICgpIHtcbiAgICAkKHRoaXMuZWxlbWVudCkub2ZmKCdzaG93LmJzLmNvbGxhcHNlJywgdGhpcy5fb25TaG93KVxuICAgICQodGhpcy5lbGVtZW50KS5vZmYoJ2hpZGUuYnMuY29sbGFwc2UnLCB0aGlzLl9vbkhpZGUpXG4gIH1cbn0pXG5cbmRvbUZhY3RvcnkuaGFuZGxlci5yZWdpc3RlcignYWNjb3JkaW9uJywgYWNjb3JkaW9uQ29tcG9uZW50KSIsImltcG9ydCAndWktaHVtYS9qcy9hcHAnXG5pbXBvcnQgJy4vaW1hZ2UnXG5pbXBvcnQgJy4vYWNjb3JkaW9uJ1xuaW1wb3J0ICcuL3BsYXllcidcblxuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQ3VzdG9tXG5cbn0pKClcbiIsImNvbnN0IGltYWdlQ29tcG9uZW50ID0gKCkgPT4gKHtcblxuICAvKipcbiAgICogUHVibGljIHByb3BlcnRpZXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBCYWNrZ3JvdW5kIHBvc2l0aW9uLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbWFnZSBoZWlnaHQuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBoZWlnaHQ6IHtcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiAnYXV0bydcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiBNYXNrIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IGltYWdlICgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gIH0sXG5cbiAgX3Jlc2V0ICgpIHtcbiAgICBpZiAoIXRoaXMuaW1hZ2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyB0aGlzLmltYWdlLnNyYyB9KWBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb25cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7IHRoaXMuaGVpZ2h0ID09PSAnYXV0bycgPyB0aGlzLmltYWdlLm9mZnNldEhlaWdodCA6IHRoaXMuaGVpZ2h0IH1weGBcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5pbWFnZSlcbiAgfVxufSlcblxuZG9tRmFjdG9yeS5oYW5kbGVyLnJlZ2lzdGVyKCdpbWFnZScsIGltYWdlQ29tcG9uZW50KSIsImNvbnN0IHBsYXllckNvbXBvbmVudCA9ICgpID0+ICh7XG4gIGxpc3RlbmVyczogW1xuICAgICdidXR0b24ucGxheShjbGljayknXG4gIF0sXG5cbiAgZ2V0IGJ1dHRvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyX19jb250ZW50JylcbiAgfSxcblxuICBwbGF5IChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJfX2VtYmVkJykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcl9fZW1iZWQgaWZyYW1lJykuc3JjICs9IFwiJmF1dG9wbGF5PTFcIlxuICB9XG59KVxuXG5kb21GYWN0b3J5LmhhbmRsZXIucmVnaXN0ZXIoJ3BsYXllcicsIHBsYXllckNvbXBvbmVudCkiXSwic291cmNlUm9vdCI6IiJ9