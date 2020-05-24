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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
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

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
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

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


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

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
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

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
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

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


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

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
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

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
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

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
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

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


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

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


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

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/ui-huma/js/messages.js":
/*!*********************************************!*\
  !*** ./node_modules/ui-huma/js/messages.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  'use strict';

  var jsrender = __webpack_require__(/*! jsrender */ "./node_modules/ui-huma/node_modules/jsrender/jsrender.js");

  var scroll = function scroll() {
    var element = document.querySelector('.app-messages__container [data-perfect-scrollbar]');
    element.scrollTop = element.scrollHeight - element.offsetHeight - 16;
  };

  ['DOMContentLoaded', 'load'].forEach(function (e) {
    window.addEventListener(e, scroll);
  });

  var addMessage = function addMessage(message) {
    var messages = document.querySelector('#messages');
    var template = jsrender.templates('#template-message');
    var messageNodeText = template.render({
      name: 'Laza Bogdan',
      avatar: 'assets/images/people/110/guy-6.jpg',
      date: 'just now',
      message: message
    });
    var messageNode = document.createRange().createContextualFragment(messageNodeText);
    messages.appendChild(messageNode);
  };

  document.querySelector('#message-reply').addEventListener('submit', function (e) {
    e.preventDefault();
    var field = this.querySelector('input');
    addMessage(field.value);
    field.value = '';
    scroll();
  });
})();

/***/ }),

/***/ "./node_modules/ui-huma/node_modules/@babel/runtime/helpers/typeof.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ui-huma/node_modules/@babel/runtime/helpers/typeof.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/ui-huma/node_modules/jsrender/jsrender.js":
/*!****************************************************************!*\
  !*** ./node_modules/ui-huma/node_modules/jsrender/jsrender.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");

__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/ui-huma/node_modules/@babel/runtime/helpers/typeof.js");

/*! JsRender v1.0.6: http://jsviews.com/#jsrender */

/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */

/*
 * Best-of-breed templating in browser or on Node.js.
 * Does not require jQuery, or HTML DOM
 * Integrates with JsViews (http://jsviews.com/#jsviews)
 *
 * Copyright 2020, Boris Moore
 * Released under the MIT License.
 */
//jshint -W018, -W041, -W120
(function (factory, global) {
  // global var is the this object, which is window when running in the usual browser environment
  var $ = global.jQuery;

  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS e.g. Browserify
    module.exports = $ ? factory(global, $) : function ($) {
      // If no global jQuery, take optional jQuery passed as parameter: require('jsrender')(jQuery)
      if ($ && !$.fn) {
        throw "Provide jQuery or null";
      }

      return factory(global, $);
    };
  } else if (true) {
    // AMD script loader, e.g. RequireJS
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return factory(global);
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})( // factory (for jsrender.js)
function (global, $) {
  "use strict"; //========================== Top-level vars ==========================
  // global var is the this object, which is window when running in the usual browser environment

  var setGlobals = $ === false; // Only set globals if script block in browser (not AMD and not CommonJS)

  $ = $ && $.fn ? $ : global.jQuery; // $ is jQuery passed in by CommonJS loader (Browserify), or global jQuery.

  var versionNumber = "v1.0.6",
      jsvStoreName,
      rTag,
      rTmplString,
      topView,
      $views,
      $expando,
      _ocp = "_ocp",
      // Observable contextual parameter
  //TODO	tmplFnsCache = {},
  $isFunction,
      $isArray,
      $templates,
      $converters,
      $helpers,
      $tags,
      $sub,
      $subSettings,
      $subSettingsAdvanced,
      $viewsSettings,
      delimOpenChar0,
      delimOpenChar1,
      delimCloseChar0,
      delimCloseChar1,
      linkChar,
      setting,
      baseOnError,
      isRenderCall,
      rNewLine = /[ \t]*(\r\n|\n|\r)/g,
      rUnescapeQuotes = /\\(['"])/g,
      rEscapeQuotes = /['"\\]/g,
      // Escape quotes and \ character
  rBuildHash = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
      rTestElseIf = /^if\s/,
      rFirstElem = /<(\w+)[>\s]/,
      rAttrEncode = /[\x00`><"'&=]/g,
      // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
  rIsHtml = /[\x00`><\"'&=]/,
      rHasHandlers = /^on[A-Z]|^convert(Back)?$/,
      rWrappedInViewMarker = /^\#\d+_`[\s\S]*\/\d+_`$/,
      rHtmlEncode = rAttrEncode,
      rDataEncode = /[&<>]/g,
      rDataUnencode = /&(amp|gt|lt);/g,
      rBracketQuote = /\[['"]?|['"]?\]/g,
      viewId = 0,
      charEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\x00": "&#0;",
    "'": "&#39;",
    '"': "&#34;",
    "`": "&#96;",
    "=": "&#61;"
  },
      charsFromEntities = {
    amp: "&",
    gt: ">",
    lt: "<"
  },
      HTML = "html",
      OBJECT = "object",
      tmplAttr = "data-jsv-tmpl",
      jsvTmpl = "jsvTmpl",
      indexStr = "For #index in nested block use #getIndex().",
      $render = {},
      jsr = global.jsrender,
      jsrToJq = jsr && $ && !$.render,
      // JsRender already loaded, without jQuery. but we will re-load it now to attach to jQuery
  jsvStores = {
    template: {
      compile: compileTmpl
    },
    tag: {
      compile: compileTag
    },
    viewModel: {
      compile: compileViewModel
    },
    helper: {},
    converter: {}
  }; // views object ($.views if jQuery is loaded, jsrender.views if no jQuery, e.g. in Node.js)

  $views = {
    jsviews: versionNumber,
    sub: {
      // subscription, e.g. JsViews integration
      rPath: /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
      //        not                               object     helper    view  viewProperty pathTokens      leafToken
      rPrm: /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
      //   lftPrn0           lftPrn         bound     path               operator     err                                          eq      path2 late            prn      comma  lftPrn2   apos quot        rtPrn  rtPrnDot                  prn2     space
      View: View,
      Err: JsViewsError,
      tmplFn: tmplFn,
      parse: parseParams,
      extend: $extend,
      extendCtx: extendCtx,
      syntaxErr: syntaxError,
      onStore: {
        template: function template(name, item) {
          if (item === null) {
            delete $render[name];
          } else if (name) {
            $render[name] = item;
          }
        }
      },
      addSetting: addSetting,
      settings: {
        allowCode: false
      },
      advSet: noop,
      // Update advanced settings
      _thp: tagHandlersFromProps,
      _gm: getMethod,
      _tg: function _tg() {},
      // Constructor for tagDef
      _cnvt: convertVal,
      _tag: renderTag,
      _er: error,
      _err: onRenderError,
      _cp: retVal,
      // Get observable contextual parameters (or properties) ~foo=expr. In JsRender, simply returns val.
      _sq: function _sq(token) {
        if (token === "constructor") {
          syntaxError("");
        }

        return token;
      }
    },
    settings: {
      delimiters: $viewsDelimiters,
      advanced: function advanced(value) {
        return value ? ($extend($subSettingsAdvanced, value), $sub.advSet(), $viewsSettings) : $subSettingsAdvanced;
      }
    },
    map: dataMap // If jsObservable loaded first, use that definition of dataMap

  };

  function getDerivedMethod(baseMethod, method) {
    return function () {
      var ret,
          tag = this,
          prevBase = tag.base;
      tag.base = baseMethod; // Within method call, calling this.base will call the base method

      ret = method.apply(tag, arguments); // Call the method

      tag.base = prevBase; // Replace this.base to be the base method of the previous call, for chained calls

      return ret;
    };
  }

  function getMethod(baseMethod, method) {
    // For derived methods (or handlers declared declaratively as in {{:foo onChange=~fooChanged}} replace by a derived method, to allow using this.base(...)
    // or this.baseApply(arguments) to call the base implementation. (Equivalent to this._super(...) and this._superApply(arguments) in jQuery UI)
    if ($isFunction(method)) {
      method = getDerivedMethod(!baseMethod ? noop // no base method implementation, so use noop as base method
      : baseMethod._d ? baseMethod // baseMethod is a derived method, so use it
      : getDerivedMethod(noop, baseMethod), // baseMethod is not derived so make its base method be the noop method
      method);
      method._d = (baseMethod && baseMethod._d || 0) + 1; // Add flag for derived method (incremented for derived of derived...)
    }

    return method;
  }

  function tagHandlersFromProps(tag, tagCtx) {
    var prop,
        props = tagCtx.props;

    for (prop in props) {
      if (rHasHandlers.test(prop) && !(tag[prop] && tag[prop].fix)) {
        // Don't override handlers with fix expando (used in datepicker and spinner)
        tag[prop] = prop !== "convert" ? getMethod(tag.constructor.prototype[prop], props[prop]) : props[prop]; // Copy over the onFoo props, convert and convertBack from tagCtx.props to tag (overrides values in tagDef).
        // Note: unsupported scenario: if handlers are dynamically added ^onFoo=expression this will work, but dynamically removing will not work.
      }
    }
  }

  function retVal(val) {
    return val;
  }

  function noop() {
    return "";
  }

  function dbgBreak(val) {
    // Usage examples: {{dbg:...}}, {{:~dbg(...)}}, {{dbg .../}}, {^{for ... onAfterLink=~dbg}} etc.
    try {
      console.log("JsRender dbg breakpoint: " + val);
      throw "dbg breakpoint"; // To break here, stop on caught exceptions.
    } catch (e) {}

    return this.base ? this.baseApply(arguments) : val;
  }

  function JsViewsError(message) {
    // Error exception type for JsViews/JsRender
    // Override of $.views.sub.Error is possible
    this.name = ($.link ? "JsViews" : "JsRender") + " Error";
    this.message = message || this.name;
  }

  function $extend(target, source) {
    if (target) {
      for (var name in source) {
        target[name] = source[name];
      }

      return target;
    }
  }

  (JsViewsError.prototype = new Error()).constructor = JsViewsError; //========================== Top-level functions ==========================
  //===================
  // views.delimiters
  //===================

  /**
  * Set the tag opening and closing delimiters and 'link' character. Default is "{{", "}}" and "^"
  * openChars, closeChars: opening and closing strings, each with two characters
  * $.views.settings.delimiters(...)
  *
  * @param {string}   openChars
  * @param {string}   [closeChars]
  * @param {string}   [link]
  * @returns {Settings}
  *
  * Get delimiters
  * delimsArray = $.views.settings.delimiters()
  *
  * @returns {string[]}
  */

  function $viewsDelimiters(openChars, closeChars, link) {
    if (!openChars) {
      return $subSettings.delimiters;
    }

    if ($isArray(openChars)) {
      return $viewsDelimiters.apply($views, openChars);
    }

    linkChar = link ? link[0] : linkChar;

    if (!/^(\W|_){5}$/.test(openChars + closeChars + linkChar)) {
      error("Invalid delimiters"); // Must be non-word characters, and openChars and closeChars must each be length 2
    }

    delimOpenChar0 = openChars[0];
    delimOpenChar1 = openChars[1];
    delimCloseChar0 = closeChars[0];
    delimCloseChar1 = closeChars[1];
    $subSettings.delimiters = [delimOpenChar0 + delimOpenChar1, delimCloseChar0 + delimCloseChar1, linkChar]; // Escape the characters - since they could be regex special characters

    openChars = "\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1; // Default is "{^{"

    closeChars = "\\" + delimCloseChar0 + "\\" + delimCloseChar1; // Default is "}}"
    // Build regex with new delimiters
    //          [tag    (followed by / space or })  or cvtr+colon or html or code] followed by space+params then convertBack?

    rTag = "(?:(\\w+(?=[\\/\\s\\" + delimCloseChar0 + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\" + delimCloseChar0 + "]|\\" + delimCloseChar0 + "(?!\\" + delimCloseChar1 + "))*?)"; // Make rTag available to JsViews (or other components) for parsing binding expressions

    $sub.rTag = "(?:" + rTag + ")"; //                        { ^? {   tag+params slash?  or closingTag                                                   or comment

    rTag = new RegExp("(?:" + openChars + rTag + "(\\/)?|\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1 + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + closeChars, "g"); // Default:  bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
    //      /(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}

    $sub.rTmpl = new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|" + openChars + ".*" + closeChars); // $sub.rTmpl looks for initial or final white space, html tags or { or } char not preceded by \\, or JsRender tags {{xxx}}.
    // Each of these strings are considered NOT to be jQuery selectors

    return $viewsSettings;
  } //=========
  // View.get
  //=========


  function getView(inner, type) {
    //view.get(inner, type)
    if (!type && inner !== true) {
      // view.get(type)
      type = inner;
      inner = undefined;
    }

    var views,
        i,
        l,
        found,
        view = this,
        root = type === "root"; // view.get("root") returns view.root, view.get() returns view.parent, view.get(true) returns view.views[0].

    if (inner) {
      // Go through views - this one, and all nested ones, depth-first - and return first one with given type.
      // If type is undefined, i.e. view.get(true), return first child view.
      found = type && view.type === type && view;

      if (!found) {
        views = view.views;

        if (view._.useKey) {
          for (i in views) {
            if (found = type ? views[i].get(inner, type) : views[i]) {
              break;
            }
          }
        } else {
          for (i = 0, l = views.length; !found && i < l; i++) {
            found = type ? views[i].get(inner, type) : views[i];
          }
        }
      }
    } else if (root) {
      // Find root view. (view whose parent is top view)
      found = view.root;
    } else if (type) {
      while (view && !found) {
        // Go through views - this one, and all parent ones - and return first one with given type.
        found = view.type === type ? view : undefined;
        view = view.parent;
      }
    } else {
      found = view.parent;
    }

    return found || undefined;
  }

  function getNestedIndex() {
    var view = this.get("item");
    return view ? view.index : undefined;
  }

  getNestedIndex.depends = function () {
    return [this.get("item"), "index"];
  };

  function getIndex() {
    return this.index;
  }

  getIndex.depends = "index"; //==================
  // View.ctxPrm, etc.
  //==================

  /* Internal private: view._getOb() */

  function getPathObject(ob, path, ltOb, fn) {
    // Iterate through path to late paths: @a.b.c paths
    // Return "" (or noop if leaf is a function @a.b.c(...) ) if intermediate object not yet available
    var prevOb,
        tokens,
        l,
        i = 0;

    if (ltOb === 1) {
      fn = 1;
      ltOb = undefined;
    } // Paths like ^a^b^c or ~^a^b^c will not throw if an object in path is undefined.


    if (path) {
      tokens = path.split(".");
      l = tokens.length;

      for (; ob && i < l; i++) {
        prevOb = ob;
        ob = tokens[i] ? ob[tokens[i]] : ob;
      }
    }

    if (ltOb) {
      ltOb.lt = ltOb.lt || i < l; // If i < l there was an object in the path not yet available
    }

    return ob === undefined ? fn ? noop : "" : fn ? function () {
      return ob.apply(prevOb, arguments);
    } : ob;
  }

  function contextParameter(key, value, get) {
    // Helper method called as view.ctxPrm(key) for helpers or template parameters ~foo - from compiled template or from context callback
    var wrapped,
        deps,
        res,
        obsCtxPrm,
        tagElse,
        callView,
        newRes,
        storeView = this,
        isUpdate = !isRenderCall && arguments.length > 1,
        store = storeView.ctx;

    if (key) {
      if (!storeView._) {
        // tagCtx.ctxPrm() call
        tagElse = storeView.index;
        storeView = storeView.tag;
      }

      callView = storeView;

      if (store && store.hasOwnProperty(key) || (store = $helpers).hasOwnProperty(key)) {
        res = store[key];

        if (key === "tag" || key === "tagCtx" || key === "root" || key === "parentTags") {
          return res;
        }
      } else {
        store = undefined;
      }

      if (!isRenderCall && storeView.tagCtx || storeView.linked) {
        // Data-linked view, or tag instance
        if (!res || !res._cxp) {
          // Not a contextual parameter
          // Set storeView to tag (if this is a tag.ctxPrm() call) or to root view ("data" view of linked template)
          storeView = storeView.tagCtx || $isFunction(res) ? storeView // Is a tag, not a view, or is a computed contextual parameter, so scope to the callView, no the 'scope view'
          : (storeView = storeView.scope || storeView, !storeView.isTop && storeView.ctx.tag // If this view is in a tag, set storeView to the tag
          || storeView);

          if (res !== undefined && storeView.tagCtx) {
            // If storeView is a tag, but the contextual parameter has been set at at higher level (e.g. helpers)...
            storeView = storeView.tagCtx.view.scope; //  then move storeView to the outer level (scope of tag container view)
          }

          store = storeView._ocps;
          res = store && store.hasOwnProperty(key) && store[key] || res;

          if (!(res && res._cxp) && (get || isUpdate)) {
            // Create observable contextual parameter
            (store || (storeView._ocps = storeView._ocps || {}))[key] = res = [{
              _ocp: res,
              // The observable contextual parameter value
              _vw: callView,
              _key: key
            }];
            res._cxp = {
              path: _ocp,
              ind: 0,
              updateValue: function updateValue(val, path) {
                $.observable(res[0]).setProperty(_ocp, val); // Set the value (res[0]._ocp)

                return this;
              }
            };
          }
        }

        if (obsCtxPrm = res && res._cxp) {
          // If this helper resource is an observable contextual parameter
          if (arguments.length > 2) {
            deps = res[1] ? $sub._ceo(res[1].deps) : [_ocp]; // fn deps (with any exprObs cloned using $sub._ceo)

            deps.unshift(res[0]); // view

            deps._cxp = obsCtxPrm; // In a context callback for a contextual param, we set get = true, to get ctxPrm  [view, dependencies...] array - needed for observe call

            return deps;
          }

          tagElse = obsCtxPrm.tagElse;
          newRes = res[1] // linkFn for compiled expression
          ? obsCtxPrm.tag && obsCtxPrm.tag.cvtArgs ? obsCtxPrm.tag.cvtArgs(tagElse, 1)[obsCtxPrm.ind] // = tag.bndArgs() - for tag contextual parameter
          : res[1](res[0].data, res[0], $sub) // = fn(data, view, $sub) for compiled binding expression
          : res[0]._ocp; // Observable contextual parameter (uninitialized, or initialized as static expression, so no path dependencies)

          if (isUpdate) {
            $sub._ucp(key, value, storeView, obsCtxPrm); // Update observable contextual parameter


            return storeView;
          }

          res = newRes;
        }
      }

      if (res && $isFunction(res)) {
        // If a helper is of type function we will wrap it, so if called with no this pointer it will be called with the
        // view as 'this' context. If the helper ~foo() was in a data-link expression, the view will have a 'temporary' linkCtx property too.
        // Note that helper functions on deeper paths will have specific this pointers, from the preceding path.
        // For example, ~util.foo() will have the ~util object as 'this' pointer
        wrapped = function wrapped() {
          return res.apply(!this || this === global ? callView : this, arguments);
        };

        $extend(wrapped, res); // Attach same expandos (if any) to the wrapped function
      }

      return wrapped || res;
    }
  }
  /* Internal private: view._getTmpl() */


  function getTemplate(tmpl) {
    return tmpl && (tmpl.fn ? tmpl : this.getRsc("templates", tmpl) || $templates(tmpl)); // not yet compiled
  } //==============
  // views._cnvt
  //==============


  function convertVal(converter, view, tagCtx, onError) {
    // Called from compiled template code for {{:}}
    // self is template object or linkCtx object
    var tag,
        linkCtx,
        value,
        argsLen,
        bindTo,
        // If tagCtx is an integer, then it is the key for the compiled function to return the boundTag tagCtx
    boundTag = typeof tagCtx === "number" && view.tmpl.bnds[tagCtx - 1];

    if (onError === undefined && boundTag && boundTag._lr) {
      // lateRender
      onError = "";
    }

    if (onError !== undefined) {
      tagCtx = onError = {
        props: {},
        args: [onError]
      };
    } else if (boundTag) {
      tagCtx = boundTag(view.data, view, $sub);
    }

    boundTag = boundTag._bd && boundTag;

    if (converter || boundTag) {
      linkCtx = view._lc; // For data-link="{cvt:...}"... See onDataLinkedTagChange

      tag = linkCtx && linkCtx.tag;
      tagCtx.view = view;

      if (!tag) {
        tag = $extend(new $sub._tg(), {
          _: {
            bnd: boundTag,
            unlinked: true,
            lt: tagCtx.lt // If a late path @some.path has not returned @some object, mark tag as late

          },
          inline: !linkCtx,
          tagName: ":",
          convert: converter,
          onArrayChange: true,
          flow: true,
          tagCtx: tagCtx,
          tagCtxs: [tagCtx],
          _is: "tag"
        });
        argsLen = tagCtx.args.length;

        if (argsLen > 1) {
          bindTo = tag.bindTo = [];

          while (argsLen--) {
            bindTo.unshift(argsLen); // Bind to all the arguments - generate bindTo array: [0,1,2...]
          }
        }

        if (linkCtx) {
          linkCtx.tag = tag;
          tag.linkCtx = linkCtx;
        }

        tagCtx.ctx = extendCtx(tagCtx.ctx, (linkCtx ? linkCtx.view : view).ctx);
        tagHandlersFromProps(tag, tagCtx);
      }

      tag._er = onError && value;
      tag.ctx = tagCtx.ctx || tag.ctx || {};
      tagCtx.ctx = undefined;
      value = tag.cvtArgs()[0]; // If there is a convertBack but no convert, converter will be "true"

      tag._er = onError && value;
    } else {
      value = tagCtx.args[0];
    } // Call onRender (used by JsViews if present, to add binding annotations around rendered content)


    value = boundTag && view._.onRender ? view._.onRender(value, view, tag) : value;
    return value != undefined ? value : "";
  }

  function convertArgs(tagElse, bound) {
    // tag.cvtArgs() or tag.cvtArgs(tagElse?, true?)
    var l,
        key,
        boundArgs,
        args,
        bindFrom,
        tag,
        converter,
        tagCtx = this;

    if (tagCtx.tagName) {
      tag = tagCtx;
      tagCtx = (tag.tagCtxs || [tagCtx])[tagElse || 0];

      if (!tagCtx) {
        return;
      }
    } else {
      tag = tagCtx.tag;
    }

    bindFrom = tag.bindFrom;
    args = tagCtx.args;

    if ((converter = tag.convert) && "" + converter === converter) {
      converter = converter === "true" ? undefined : tagCtx.view.getRsc("converters", converter) || error("Unknown converter: '" + converter + "'");
    }

    if (converter && !bound) {
      // If there is a converter, use a copy of the tagCtx.args array for rendering, and replace the args[0] in
      args = args.slice(); // the copied array with the converted value. But we do not modify the value of tag.tagCtx.args[0] (the original args array)
    }

    if (bindFrom) {
      // Get the values of the boundArgs
      boundArgs = [];
      l = bindFrom.length;

      while (l--) {
        key = bindFrom[l];
        boundArgs.unshift(argOrProp(tagCtx, key));
      }

      if (bound) {
        args = boundArgs; // Call to bndArgs() - returns the boundArgs
      }
    }

    if (converter) {
      converter = converter.apply(tag, boundArgs || args);

      if (converter === undefined) {
        return args; // Returning undefined from a converter is equivalent to not having a converter.
      }

      bindFrom = bindFrom || [0];
      l = bindFrom.length;

      if (!$isArray(converter) || converter.length !== l) {
        converter = [converter];
        bindFrom = [0];
        l = 1;
      }

      if (bound) {
        // Call to bndArgs() - so apply converter to all boundArgs
        args = converter; // The array of values returned from the converter
      } else {
        // Call to cvtArgs()
        while (l--) {
          key = bindFrom[l];

          if (+key === key) {
            args[key] = converter[l];
          }
        }
      }
    }

    return args;
  }

  function argOrProp(context, key) {
    context = context[+key === key ? "args" : "props"];
    return context && context[key];
  }

  function convertBoundArgs(tagElse) {
    // tag.bndArgs()
    return this.cvtArgs(tagElse, 1);
  } //=============
  // views.tag
  //=============

  /* view.getRsc() */


  function getResource(resourceType, itemName) {
    var res,
        store,
        view = this;

    if ("" + itemName === itemName) {
      while (res === undefined && view) {
        store = view.tmpl && view.tmpl[resourceType];
        res = store && store[itemName];
        view = view.parent;
      }

      return res || $views[resourceType][itemName];
    }
  }

  function renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError) {
    function bindToOrBindFrom(type) {
      var bindArray = tag[type];

      if (bindArray !== undefined) {
        bindArray = $isArray(bindArray) ? bindArray : [bindArray];
        m = bindArray.length;

        while (m--) {
          key = bindArray[m];

          if (!isNaN(parseInt(key))) {
            bindArray[m] = parseInt(key); // Convert "0" to 0,  etc.
          }
        }
      }

      return bindArray || [0];
    }

    parentView = parentView || topView;
    var tag,
        tagDef,
        template,
        tags,
        attr,
        parentTag,
        l,
        m,
        n,
        itemRet,
        tagCtx,
        tagCtxCtx,
        ctxPrm,
        bindTo,
        bindFrom,
        initVal,
        content,
        callInit,
        mapDef,
        thisMap,
        args,
        bdArgs,
        props,
        tagDataMap,
        contentCtx,
        key,
        bindFromLength,
        bindToLength,
        linkedElement,
        defaultCtx,
        i = 0,
        ret = "",
        linkCtx = parentView._lc || false,
        // For data-link="{myTag...}"... See onDataLinkedTagChange
    ctx = parentView.ctx,
        parentTmpl = tmpl || parentView.tmpl,
        // If tagCtxs is an integer, then it is the key for the compiled function to return the boundTag tagCtxs
    boundTag = typeof tagCtxs === "number" && parentView.tmpl.bnds[tagCtxs - 1];

    if (tagName._is === "tag") {
      tag = tagName;
      tagName = tag.tagName;
      tagCtxs = tag.tagCtxs;
      template = tag.template;
    } else {
      tagDef = parentView.getRsc("tags", tagName) || error("Unknown tag: {{" + tagName + "}} ");
      template = tagDef.template;
    }

    if (onError === undefined && boundTag && (boundTag._lr = tagDef.lateRender && boundTag._lr !== false || boundTag._lr)) {
      onError = ""; // If lateRender, set temporary onError, to skip initial rendering (and render just "")
    }

    if (onError !== undefined) {
      ret += onError;
      tagCtxs = onError = [{
        props: {},
        args: [],
        params: {
          props: {}
        }
      }];
    } else if (boundTag) {
      tagCtxs = boundTag(parentView.data, parentView, $sub);
    }

    l = tagCtxs.length;

    for (; i < l; i++) {
      tagCtx = tagCtxs[i];
      content = tagCtx.tmpl;

      if (!linkCtx || !linkCtx.tag || i && !linkCtx.tag.inline || tag._er || content && +content === content) {
        // Initialize tagCtx
        // For block tags, tagCtx.tmpl is an integer > 0
        if (content && parentTmpl.tmpls) {
          tagCtx.tmpl = tagCtx.content = parentTmpl.tmpls[content - 1]; // Set the tmpl property to the content of the block tag
        }

        tagCtx.index = i;
        tagCtx.ctxPrm = contextParameter;
        tagCtx.render = renderContent;
        tagCtx.cvtArgs = convertArgs;
        tagCtx.bndArgs = convertBoundArgs;
        tagCtx.view = parentView;
        tagCtx.ctx = extendCtx(extendCtx(tagCtx.ctx, tagDef && tagDef.ctx), ctx); // Clone and extend parentView.ctx
      }

      if (tmpl = tagCtx.props.tmpl) {
        // If the tmpl property is overridden, set the value (when initializing, or, in case of binding: ^tmpl=..., when updating)
        tagCtx.tmpl = parentView._getTmpl(tmpl);
        tagCtx.content = tagCtx.content || tagCtx.tmpl;
      }

      if (!tag) {
        // This will only be hit for initial tagCtx (not for {{else}}) - if the tag instance does not exist yet
        // If the tag has not already been instantiated, we will create a new instance.
        // ~tag will access the tag, even within the rendering of the template content of this tag.
        // From child/descendant tags, can access using ~tag.parent, or ~parentTags.tagName
        tag = new tagDef._ctr();
        callInit = !!tag.init;
        tag.parent = parentTag = ctx && ctx.tag;
        tag.tagCtxs = tagCtxs;

        if (linkCtx) {
          tag.inline = false;
          linkCtx.tag = tag;
        }

        tag.linkCtx = linkCtx;

        if (tag._.bnd = boundTag || linkCtx.fn) {
          // Bound if {^{tag...}} or data-link="{tag...}"
          tag._.ths = tagCtx.params.props.this; // Tag has a this=expr binding, to get javascript reference to tag instance

          tag._.lt = tagCtxs.lt; // If a late path @some.path has not returned @some object, mark tag as late

          tag._.arrVws = {};
        } else if (tag.dataBoundOnly) {
          error(tagName + " must be data-bound:\n{^{" + tagName + "}}");
        } //TODO better perf for childTags() - keep child tag.tags array, (and remove child, when disposed)
        // tag.tags = [];

      } else if (linkCtx && linkCtx.fn._lr) {
        callInit = !!tag.init;
      }

      tagDataMap = tag.dataMap;
      tagCtx.tag = tag;

      if (tagDataMap && tagCtxs) {
        tagCtx.map = tagCtxs[i].map; // Copy over the compiled map instance from the previous tagCtxs to the refreshed ones
      }

      if (!tag.flow) {
        tagCtxCtx = tagCtx.ctx = tagCtx.ctx || {}; // tags hash: tag.ctx.tags, merged with parentView.ctx.tags,

        tags = tag.parents = tagCtxCtx.parentTags = ctx && extendCtx(tagCtxCtx.parentTags, ctx.parentTags) || {};

        if (parentTag) {
          tags[parentTag.tagName] = parentTag; //TODO better perf for childTags: parentTag.tags.push(tag);
        }

        tags[tag.tagName] = tagCtxCtx.tag = tag;
        tagCtxCtx.tagCtx = tagCtx;
      }
    }

    if (!(tag._er = onError)) {
      tagHandlersFromProps(tag, tagCtxs[0]);
      tag.rendering = {
        rndr: tag.rendering
      }; // Provide object for state during render calls to tag and elses. (Used by {{if}} and {{for}}...)

      for (i = 0; i < l; i++) {
        // Iterate tagCtx for each {{else}} block
        tagCtx = tag.tagCtx = tagCtxs[i];
        props = tagCtx.props;
        tag.ctx = tagCtx.ctx;

        if (!i) {
          if (callInit) {
            tag.init(tagCtx, linkCtx, tag.ctx);
            callInit = undefined;
          }

          if (!tagCtx.args.length && tagCtx.argDefault !== false && tag.argDefault !== false) {
            tagCtx.args = args = [tagCtx.view.data]; // Missing first arg defaults to the current data context

            tagCtx.params.args = ["#data"];
          }

          bindTo = bindToOrBindFrom("bindTo");

          if (tag.bindTo !== undefined) {
            tag.bindTo = bindTo;
          }

          if (tag.bindFrom !== undefined) {
            tag.bindFrom = bindToOrBindFrom("bindFrom");
          } else if (tag.bindTo) {
            tag.bindFrom = tag.bindTo = bindTo;
          }

          bindFrom = tag.bindFrom || bindTo;
          bindToLength = bindTo.length;
          bindFromLength = bindFrom.length;

          if (tag._.bnd && (linkedElement = tag.linkedElement)) {
            tag.linkedElement = linkedElement = $isArray(linkedElement) ? linkedElement : [linkedElement];

            if (bindToLength !== linkedElement.length) {
              error("linkedElement not same length as bindTo");
            }
          }

          if (linkedElement = tag.linkedCtxParam) {
            tag.linkedCtxParam = linkedElement = $isArray(linkedElement) ? linkedElement : [linkedElement];

            if (bindFromLength !== linkedElement.length) {
              error("linkedCtxParam not same length as bindFrom/bindTo");
            }
          }

          if (bindFrom) {
            tag._.fromIndex = {}; // Hash of bindFrom index which has same path value as bindTo index. fromIndex = tag._.fromIndex[toIndex]

            tag._.toIndex = {}; // Hash of bindFrom index which has same path value as bindTo index. fromIndex = tag._.fromIndex[toIndex]

            n = bindFromLength;

            while (n--) {
              key = bindFrom[n];
              m = bindToLength;

              while (m--) {
                if (key === bindTo[m]) {
                  tag._.fromIndex[m] = n;
                  tag._.toIndex[n] = m;
                }
              }
            }
          }

          if (linkCtx) {
            // Set attr on linkCtx to ensure outputting to the correct target attribute.
            // Setting either linkCtx.attr or this.attr in the init() allows per-instance choice of target attrib.
            linkCtx.attr = tag.attr = linkCtx.attr || tag.attr || linkCtx._dfAt;
          }

          attr = tag.attr;
          tag._.noVws = attr && attr !== HTML;
        }

        args = tag.cvtArgs(i);

        if (tag.linkedCtxParam) {
          bdArgs = tag.cvtArgs(i, 1);
          m = bindFromLength;
          defaultCtx = tag.constructor.prototype.ctx;

          while (m--) {
            if (ctxPrm = tag.linkedCtxParam[m]) {
              key = bindFrom[m];
              initVal = bdArgs[m]; // Create tag contextual parameter

              tagCtx.ctx[ctxPrm] = $sub._cp(defaultCtx && initVal === undefined ? defaultCtx[ctxPrm] : initVal, initVal !== undefined && argOrProp(tagCtx.params, key), tagCtx.view, tag._.bnd && {
                tag: tag,
                cvt: tag.convert,
                ind: m,
                tagElse: i
              });
            }
          }
        }

        if ((mapDef = props.dataMap || tagDataMap) && (args.length || props.dataMap)) {
          thisMap = tagCtx.map;

          if (!thisMap || thisMap.src !== args[0] || isUpdate) {
            if (thisMap && thisMap.src) {
              thisMap.unmap(); // only called if observable map - not when only used in JsRender, e.g. by {{props}}
            }

            mapDef.map(args[0], tagCtx, thisMap, !tag._.bnd);
            thisMap = tagCtx.map;
          }

          args = [thisMap.tgt];
        }

        itemRet = undefined;

        if (tag.render) {
          itemRet = tag.render.apply(tag, args);

          if (parentView.linked && itemRet && !rWrappedInViewMarker.test(itemRet)) {
            // When a tag renders content from the render method, with data linking then we need to wrap with view markers, if absent,
            // to provide a contentView for the tag, which will correctly dispose bindings if deleted. The 'tmpl' for this view will
            // be a dumbed-down template which will always return the  itemRet string (no matter what the data is). The itemRet string
            // is not compiled as template markup, so can include "{{" or "}}" without triggering syntax errors
            tmpl = {
              // 'Dumbed-down' template which always renders 'static' itemRet string
              links: []
            };

            tmpl.render = tmpl.fn = function () {
              return itemRet;
            };

            itemRet = renderWithViews(tmpl, parentView.data, undefined, true, parentView, undefined, undefined, tag);
          }
        }

        if (!args.length) {
          args = [parentView]; // no arguments - (e.g. {{else}}) get data context from view.
        }

        if (itemRet === undefined) {
          contentCtx = args[0]; // Default data context for wrapped block content is the first argument

          if (tag.contentCtx) {
            // Set tag.contentCtx to true, to inherit parent context, or to a function to provide alternate context.
            contentCtx = tag.contentCtx === true ? parentView : tag.contentCtx(contentCtx);
          }

          itemRet = tagCtx.render(contentCtx, true) || (isUpdate ? undefined : "");
        }

        ret = ret ? ret + (itemRet || "") : itemRet !== undefined ? "" + itemRet : undefined; // If no return value from render, and no template/content tagCtx.render(...), return undefined
      }

      tag.rendering = tag.rendering.rndr; // Remove tag.rendering object (if this is outermost render call. (In case of nested calls)
    }

    tag.tagCtx = tagCtxs[0];
    tag.ctx = tag.tagCtx.ctx;

    if (tag._.noVws && tag.inline) {
      // inline tag with attr set to "text" will insert HTML-encoded content - as if it was element-based innerText
      ret = attr === "text" ? $converters.html(ret) : "";
    }

    return boundTag && parentView._.onRender // Call onRender (used by JsViews if present, to add binding annotations around rendered content)
    ? parentView._.onRender(ret, parentView, tag) : ret;
  } //=================
  // View constructor
  //=================


  function View(context, type, parentView, data, template, key, onRender, contentTmpl) {
    // Constructor for view object in view hierarchy. (Augmented by JsViews if JsViews is loaded)
    var views,
        parentView_,
        tag,
        self_,
        self = this,
        isArray = type === "array"; // If the data is an array, this is an 'array view' with a views array for each child 'item view'
    // If the data is not an array, this is an 'item view' with a views 'hash' object for any child nested views

    self.content = contentTmpl;
    self.views = isArray ? [] : {};
    self.data = data;
    self.tmpl = template;
    self_ = self._ = {
      key: 0,
      // ._.useKey is non zero if is not an 'array view' (owning a data array). Use this as next key for adding to child views hash
      useKey: isArray ? 0 : 1,
      id: "" + viewId++,
      onRender: onRender,
      bnds: {}
    };
    self.linked = !!onRender;
    self.type = type || "top";

    if (!parentView || parentView.type === "top") {
      (self.ctx = context || {}).root = self.data;
    }

    if (self.parent = parentView) {
      self.root = parentView.root || self; // view whose parent is top view

      views = parentView.views;
      parentView_ = parentView._;
      self.isTop = parentView_.scp; // Is top content view of a link("#container", ...) call

      self.scope = (!context.tag || context.tag === parentView.ctx.tag) && !self.isTop && parentView.scope || self; // Scope for contextParams - closest non flow tag ancestor or root view

      if (parentView_.useKey) {
        // Parent is not an 'array view'. Add this view to its views object
        // self._key = is the key in the parent view hash
        views[self_.key = "_" + parentView_.useKey++] = self;
        self.index = indexStr;
        self.getIndex = getNestedIndex;
      } else if (views.length === (self_.key = self.index = key)) {
        // Parent is an 'array view'. Add this view to its views array
        views.push(self); // Adding to end of views array. (Using push when possible - better perf than splice)
      } else {
        views.splice(key, 0, self); // Inserting in views array
      } // If no context was passed in, use parent context
      // If context was passed in, it should have been merged already with parent context


      self.ctx = context || parentView.ctx;
    } else if (type) {
      self.root = self; // view whose parent is top view
    }
  }

  View.prototype = {
    get: getView,
    getIndex: getIndex,
    ctxPrm: contextParameter,
    getRsc: getResource,
    _getTmpl: getTemplate,
    _getOb: getPathObject,
    _is: "view"
  }; //====================================================
  // Registration
  //====================================================

  function compileChildResources(parentTmpl) {
    var storeName, storeNames, resources;

    for (storeName in jsvStores) {
      storeNames = storeName + "s";

      if (parentTmpl[storeNames]) {
        resources = parentTmpl[storeNames]; // Resources not yet compiled

        parentTmpl[storeNames] = {}; // Remove uncompiled resources

        $views[storeNames](resources, parentTmpl); // Add back in the compiled resources
      }
    }
  } //===============
  // compileTag
  //===============


  function compileTag(name, tagDef, parentTmpl) {
    var tmpl,
        baseTag,
        prop,
        compiledDef = new $sub._tg();

    function Tag() {
      var tag = this;
      tag._ = {
        unlinked: true
      };
      tag.inline = true;
      tag.tagName = name;
    }

    if ($isFunction(tagDef)) {
      // Simple tag declared as function. No presenter instantation.
      tagDef = {
        depends: tagDef.depends,
        render: tagDef
      };
    } else if ("" + tagDef === tagDef) {
      tagDef = {
        template: tagDef
      };
    }

    if (baseTag = tagDef.baseTag) {
      tagDef.flow = !!tagDef.flow; // Set flow property, so defaults to false even if baseTag has flow=true

      baseTag = "" + baseTag === baseTag ? parentTmpl && parentTmpl.tags[baseTag] || $tags[baseTag] : baseTag;

      if (!baseTag) {
        error('baseTag: "' + tagDef.baseTag + '" not found');
      }

      compiledDef = $extend(compiledDef, baseTag);

      for (prop in tagDef) {
        compiledDef[prop] = getMethod(baseTag[prop], tagDef[prop]);
      }
    } else {
      compiledDef = $extend(compiledDef, tagDef);
    } // Tag declared as object, used as the prototype for tag instantiation (control/presenter)


    if ((tmpl = compiledDef.template) !== undefined) {
      compiledDef.template = "" + tmpl === tmpl ? $templates[tmpl] || $templates(tmpl) : tmpl;
    }

    (Tag.prototype = compiledDef).constructor = compiledDef._ctr = Tag;

    if (parentTmpl) {
      compiledDef._parentTmpl = parentTmpl;
    }

    return compiledDef;
  }

  function baseApply(args) {
    // In derived method (or handler declared declaratively as in {{:foo onChange=~fooChanged}} can call base method,
    // using this.baseApply(arguments) (Equivalent to this._superApply(arguments) in jQuery UI)
    return this.base.apply(this, args);
  } //===============
  // compileTmpl
  //===============


  function compileTmpl(name, tmpl, parentTmpl, options) {
    // tmpl is either a template object, a selector for a template script block, the name of a compiled template, or a template object
    //==== nested functions ====
    function lookupTemplate(value) {
      // If value is of type string - treat as selector, or name of compiled template
      // Return the template object, if already compiled, or the markup string
      var currentName, tmpl;

      if ("" + value === value || value.nodeType > 0 && (elem = value)) {
        if (!elem) {
          if (/^\.\/[^\\:*?"<>]*$/.test(value)) {
            // tmpl="./some/file.html"
            // If the template is not named, use "./some/file.html" as name.
            if (tmpl = $templates[name = name || value]) {
              value = tmpl;
            } else {
              // BROWSER-SPECIFIC CODE (not on Node.js):
              // Look for server-generated script block with id "./some/file.html"
              elem = document.getElementById(value);
            }
          } else if ($.fn && !$sub.rTmpl.test(value)) {
            try {
              elem = $(value, document)[0]; // if jQuery is loaded, test for selector returning elements, and get first element
            } catch (e) {}
          } // END BROWSER-SPECIFIC CODE

        } //BROWSER-SPECIFIC CODE


        if (elem) {
          if (elem.tagName !== "SCRIPT") {
            error(value + ": Use script block, not " + elem.tagName);
          }

          if (options) {
            // We will compile a new template using the markup in the script element
            value = elem.innerHTML;
          } else {
            // We will cache a single copy of the compiled template, and associate it with the name
            // (renaming from a previous name if there was one).
            currentName = elem.getAttribute(tmplAttr);

            if (currentName) {
              if (currentName !== jsvTmpl) {
                value = $templates[currentName];
                delete $templates[currentName];
              } else if ($.fn) {
                value = $.data(elem)[jsvTmpl]; // Get cached compiled template
              }
            }

            if (!currentName || !value) {
              // Not yet compiled, or cached version lost
              name = name || ($.fn ? jsvTmpl : value);
              value = compileTmpl(name, elem.innerHTML, parentTmpl, options);
            }

            value.tmplName = name = name || currentName;

            if (name !== jsvTmpl) {
              $templates[name] = value;
            }

            elem.setAttribute(tmplAttr, name);

            if ($.fn) {
              $.data(elem, jsvTmpl, value);
            }
          }
        } // END BROWSER-SPECIFIC CODE


        elem = undefined;
      } else if (!value.fn) {
        value = undefined; // If value is not a string. HTML element, or compiled template, return undefined
      }

      return value;
    }

    var elem,
        compiledTmpl,
        tmplOrMarkup = tmpl = tmpl || "";
    $sub._html = $converters.html; //==== Compile the template ====

    if (options === 0) {
      options = undefined;
      tmplOrMarkup = lookupTemplate(tmplOrMarkup); // Top-level compile so do a template lookup
    } // If options, then this was already compiled from a (script) element template declaration.
    // If not, then if tmpl is a template object, use it for options


    options = options || (tmpl.markup ? tmpl.bnds ? $extend({}, tmpl) : tmpl : {});
    options.tmplName = options.tmplName || name || "unnamed";

    if (parentTmpl) {
      options._parentTmpl = parentTmpl;
    } // If tmpl is not a markup string or a selector string, then it must be a template object
    // In that case, get it from the markup property of the object


    if (!tmplOrMarkup && tmpl.markup && (tmplOrMarkup = lookupTemplate(tmpl.markup)) && tmplOrMarkup.fn) {
      // If the string references a compiled template object, need to recompile to merge any modified options
      tmplOrMarkup = tmplOrMarkup.markup;
    }

    if (tmplOrMarkup !== undefined) {
      if (tmplOrMarkup.render || tmpl.render) {
        // tmpl is already compiled, so use it
        if (tmplOrMarkup.tmpls) {
          compiledTmpl = tmplOrMarkup;
        }
      } else {
        // tmplOrMarkup is a markup string, not a compiled template
        // Create template object
        tmpl = tmplObject(tmplOrMarkup, options); // Compile to AST and then to compiled function

        tmplFn(tmplOrMarkup.replace(rEscapeQuotes, "\\$&"), tmpl);
      }

      if (!compiledTmpl) {
        compiledTmpl = $extend(function () {
          return compiledTmpl.render.apply(compiledTmpl, arguments);
        }, tmpl);
        compileChildResources(compiledTmpl);
      }

      return compiledTmpl;
    }
  } //==== /end of function compileTmpl ====
  //=================
  // compileViewModel
  //=================


  function getDefaultVal(defaultVal, data) {
    return $isFunction(defaultVal) ? defaultVal.call(data) : defaultVal;
  }

  function addParentRef(ob, ref, parent) {
    Object.defineProperty(ob, ref, {
      value: parent,
      configurable: true
    });
  }

  function compileViewModel(name, type) {
    var i,
        constructor,
        parent,
        viewModels = this,
        getters = type.getters,
        extend = type.extend,
        id = type.id,
        proto = $.extend({
      _is: name || "unnamed",
      unmap: unmap,
      merge: merge
    }, extend),
        args = "",
        cnstr = "",
        getterCount = getters ? getters.length : 0,
        $observable = $.observable,
        getterNames = {};

    function JsvVm(args) {
      constructor.apply(this, args);
    }

    function vm() {
      return new JsvVm(arguments);
    }

    function iterate(data, action) {
      var getterType,
          defaultVal,
          prop,
          ob,
          parentRef,
          j = 0;

      for (; j < getterCount; j++) {
        prop = getters[j];
        getterType = undefined;

        if (prop + "" !== prop) {
          getterType = prop;
          prop = getterType.getter;
          parentRef = getterType.parentRef;
        }

        if ((ob = data[prop]) === undefined && getterType && (defaultVal = getterType.defaultVal) !== undefined) {
          ob = getDefaultVal(defaultVal, data);
        }

        action(ob, getterType && viewModels[getterType.type], prop, parentRef);
      }
    }

    function map(data) {
      data = data + "" === data ? JSON.parse(data) // Accept JSON string
      : data; // or object/array

      var l,
          prop,
          childOb,
          parentRef,
          j = 0,
          ob = data,
          arr = [];

      if ($isArray(data)) {
        data = data || [];
        l = data.length;

        for (; j < l; j++) {
          arr.push(this.map(data[j]));
        }

        arr._is = name;
        arr.unmap = unmap;
        arr.merge = merge;
        return arr;
      }

      if (data) {
        iterate(data, function (ob, viewModel) {
          if (viewModel) {
            // Iterate to build getters arg array (value, or mapped value)
            ob = viewModel.map(ob);
          }

          arr.push(ob);
        });
        ob = this.apply(this, arr); // Instantiate this View Model, passing getters args array to constructor

        j = getterCount;

        while (j--) {
          childOb = arr[j];
          parentRef = getters[j].parentRef;

          if (parentRef && childOb && childOb.unmap) {
            if ($isArray(childOb)) {
              l = childOb.length;

              while (l--) {
                addParentRef(childOb[l], parentRef, ob);
              }
            } else {
              addParentRef(childOb, parentRef, ob);
            }
          }
        }

        for (prop in data) {
          // Copy over any other properties. that are not get/set properties
          if (prop !== $expando && !getterNames[prop]) {
            ob[prop] = data[prop];
          }
        }
      }

      return ob;
    }

    function merge(data, parent, parentRef) {
      data = data + "" === data ? JSON.parse(data) // Accept JSON string
      : data; // or object/array

      var j,
          l,
          m,
          prop,
          mod,
          found,
          assigned,
          ob,
          newModArr,
          childOb,
          k = 0,
          model = this;

      if ($isArray(model)) {
        assigned = {};
        newModArr = [];
        l = data.length;
        m = model.length;

        for (; k < l; k++) {
          ob = data[k];
          found = false;

          for (j = 0; j < m && !found; j++) {
            if (assigned[j]) {
              continue;
            }

            mod = model[j];

            if (id) {
              assigned[j] = found = id + "" === id ? ob[id] && (getterNames[id] ? mod[id]() : mod[id]) === ob[id] : id(mod, ob);
            }
          }

          if (found) {
            mod.merge(ob);
            newModArr.push(mod);
          } else {
            newModArr.push(childOb = vm.map(ob));

            if (parentRef) {
              addParentRef(childOb, parentRef, parent);
            }
          }
        }

        if ($observable) {
          $observable(model).refresh(newModArr, true);
        } else {
          model.splice.apply(model, [0, model.length].concat(newModArr));
        }

        return;
      }

      iterate(data, function (ob, viewModel, getter, parentRef) {
        if (viewModel) {
          model[getter]().merge(ob, model, parentRef); // Update typed property
        } else if (model[getter]() !== ob) {
          model[getter](ob); // Update non-typed property
        }
      });

      for (prop in data) {
        if (prop !== $expando && !getterNames[prop]) {
          model[prop] = data[prop];
        }
      }
    }

    function unmap() {
      var ob,
          prop,
          getterType,
          arr,
          value,
          k = 0,
          model = this;

      function unmapArray(modelArr) {
        var arr = [],
            i = 0,
            l = modelArr.length;

        for (; i < l; i++) {
          arr.push(modelArr[i].unmap());
        }

        return arr;
      }

      if ($isArray(model)) {
        return unmapArray(model);
      }

      ob = {};

      for (; k < getterCount; k++) {
        prop = getters[k];
        getterType = undefined;

        if (prop + "" !== prop) {
          getterType = prop;
          prop = getterType.getter;
        }

        value = model[prop]();
        ob[prop] = getterType && value && viewModels[getterType.type] ? $isArray(value) ? unmapArray(value) : value.unmap() : value;
      }

      for (prop in model) {
        if (model.hasOwnProperty(prop) && (prop.charAt(0) !== "_" || !getterNames[prop.slice(1)]) && prop !== $expando && !$isFunction(model[prop])) {
          ob[prop] = model[prop];
        }
      }

      return ob;
    }

    JsvVm.prototype = proto;

    for (i = 0; i < getterCount; i++) {
      (function (getter) {
        getter = getter.getter || getter;
        getterNames[getter] = i + 1;
        var privField = "_" + getter;
        args += (args ? "," : "") + getter;
        cnstr += "this." + privField + " = " + getter + ";\n";

        proto[getter] = proto[getter] || function (val) {
          if (!arguments.length) {
            return this[privField]; // If there is no argument, use as a getter
          }

          if ($observable) {
            $observable(this).setProperty(getter, val);
          } else {
            this[privField] = val;
          }
        };

        if ($observable) {
          proto[getter].set = proto[getter].set || function (val) {
            this[privField] = val; // Setter called by observable property change
          };
        }
      })(getters[i]);
    } // Constructor for new viewModel instance.


    cnstr = new Function(args, cnstr);

    constructor = function constructor() {
      cnstr.apply(this, arguments); // Pass additional parentRef str and parent obj to have a parentRef pointer on instance

      if (parent = arguments[getterCount + 1]) {
        addParentRef(this, arguments[getterCount], parent);
      }
    };

    constructor.prototype = proto;
    proto.constructor = constructor;
    vm.map = map;
    vm.getters = getters;
    vm.extend = extend;
    vm.id = id;
    return vm;
  }

  function tmplObject(markup, options) {
    // Template object constructor
    var htmlTag,
        wrapMap = $subSettingsAdvanced._wm || {},
        // Only used in JsViews. Otherwise empty: {}
    tmpl = {
      tmpls: [],
      links: {},
      // Compiled functions for link expressions
      bnds: [],
      _is: "template",
      render: renderContent
    };

    if (options) {
      tmpl = $extend(tmpl, options);
    }

    tmpl.markup = markup;

    if (!tmpl.htmlTag) {
      // Set tmpl.tag to the top-level HTML tag used in the template, if any...
      htmlTag = rFirstElem.exec(markup);
      tmpl.htmlTag = htmlTag ? htmlTag[1].toLowerCase() : "";
    }

    htmlTag = wrapMap[tmpl.htmlTag];

    if (htmlTag && htmlTag !== wrapMap.div) {
      // When using JsViews, we trim templates which are inserted into HTML contexts where text nodes are not rendered (i.e. not 'Phrasing Content').
      // Currently not trimmed for <li> tag. (Not worth adding perf cost)
      tmpl.markup = $.trim(tmpl.markup);
    }

    return tmpl;
  } //==============
  // registerStore
  //==============

  /**
  * Internal. Register a store type (used for template, tags, helpers, converters)
  */


  function registerStore(storeName, storeSettings) {
    /**
    * Generic store() function to register item, named item, or hash of items
    * Also used as hash to store the registered items
    * Used as implementation of $.templates(), $.views.templates(), $.views.tags(), $.views.helpers() and $.views.converters()
    *
    * @param {string|hash} name         name - or selector, in case of $.templates(). Or hash of items
    * @param {any}         [item]       (e.g. markup for named template)
    * @param {template}    [parentTmpl] For item being registered as private resource of template
    * @returns {any|$.views} item, e.g. compiled template - or $.views in case of registering hash of items
    */
    function theStore(name, item, parentTmpl) {
      // The store is also the function used to add items to the store. e.g. $.templates, or $.views.tags
      // For store of name 'thing', Call as:
      //    $.views.things(items[, parentTmpl]),
      // or $.views.things(name[, item, parentTmpl])
      var compile,
          itemName,
          thisStore,
          cnt,
          onStore = $sub.onStore[storeName];

      if (name && _typeof(name) === OBJECT && !name.nodeType && !name.markup && !name.getTgt && !(storeName === "viewModel" && name.getters || name.extend)) {
        // Call to $.views.things(items[, parentTmpl]),
        // Adding items to the store
        // If name is a hash, then item is parentTmpl. Iterate over hash and call store for key.
        for (itemName in name) {
          theStore(itemName, name[itemName], item);
        }

        return item || $views;
      } // Adding a single unnamed item to the store


      if (name && "" + name !== name) {
        // name must be a string
        parentTmpl = item;
        item = name;
        name = undefined;
      }

      thisStore = parentTmpl ? storeName === "viewModel" ? parentTmpl : parentTmpl[storeNames] = parentTmpl[storeNames] || {} : theStore;
      compile = storeSettings.compile;

      if (item === undefined) {
        item = compile ? name : thisStore[name];
        name = undefined;
      }

      if (item === null) {
        // If item is null, delete this entry
        if (name) {
          delete thisStore[name];
        }
      } else {
        if (compile) {
          item = compile.call(thisStore, name, item, parentTmpl, 0) || {};
          item._is = storeName; // Only do this for compiled objects (tags, templates...)
        }

        if (name) {
          thisStore[name] = item;
        }
      }

      if (onStore) {
        // e.g. JsViews integration
        onStore(name, item, parentTmpl, compile);
      }

      return item;
    }

    var storeNames = storeName + "s";
    $views[storeNames] = theStore;
  }
  /**
  * Add settings such as:
  * $.views.settings.allowCode(true)
  * @param {boolean}  value
  * @returns {Settings}
  *
  * allowCode = $.views.settings.allowCode()
  * @returns {boolean}
  */


  function addSetting(st) {
    $viewsSettings[st] = $viewsSettings[st] || function (value) {
      return arguments.length ? ($subSettings[st] = value, $viewsSettings) : $subSettings[st];
    };
  } //========================
  // dataMap for render only
  //========================


  function dataMap(mapDef) {
    function Map(source, options) {
      this.tgt = mapDef.getTgt(source, options);
      options.map = this;
    }

    if ($isFunction(mapDef)) {
      // Simple map declared as function
      mapDef = {
        getTgt: mapDef
      };
    }

    if (mapDef.baseMap) {
      mapDef = $extend($extend({}, mapDef.baseMap), mapDef);
    }

    mapDef.map = function (source, options) {
      return new Map(source, options);
    };

    return mapDef;
  } //==============
  // renderContent
  //==============

  /** Render the template as a string, using the specified data and helpers/context
  * $("#tmpl").render(), tmpl.render(), tagCtx.render(), $.render.namedTmpl()
  *
  * @param {any}        data
  * @param {hash}       [context]           helpers or context
  * @param {boolean}    [noIteration]
  * @param {View}       [parentView]        internal
  * @param {string}     [key]               internal
  * @param {function}   [onRender]          internal
  * @returns {string}   rendered template   internal
  */


  function renderContent(data, context, noIteration, parentView, key, onRender) {
    var i,
        l,
        tag,
        tmpl,
        tagCtx,
        isTopRenderCall,
        prevData,
        prevIndex,
        view = parentView,
        result = "";

    if (context === true) {
      noIteration = context; // passing boolean as second param - noIteration

      context = undefined;
    } else if (_typeof(context) !== OBJECT) {
      context = undefined; // context must be a boolean (noIteration) or a plain object
    }

    if (tag = this.tag) {
      // This is a call from renderTag or tagCtx.render(...)
      tagCtx = this;
      view = view || tagCtx.view;
      tmpl = view._getTmpl(tag.template || tagCtx.tmpl);

      if (!arguments.length) {
        data = tag.contentCtx && $isFunction(tag.contentCtx) ? data = tag.contentCtx(data) : view; // Default data context for wrapped block content is the first argument
      }
    } else {
      // This is a template.render(...) call
      tmpl = this;
    }

    if (tmpl) {
      if (!parentView && data && data._is === "view") {
        view = data; // When passing in a view to render or link (and not passing in a parent view) use the passed-in view as parentView
      }

      if (view && data === view) {
        // Inherit the data from the parent view.
        data = view.data;
      }

      isTopRenderCall = !view;
      isRenderCall = isRenderCall || isTopRenderCall;

      if (!view) {
        (context = context || {}).root = data; // Provide ~root as shortcut to top-level data.
      }

      if (!isRenderCall || $subSettingsAdvanced.useViews || tmpl.useViews || view && view !== topView) {
        result = renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag);
      } else {
        if (view) {
          // In a block
          prevData = view.data;
          prevIndex = view.index;
          view.index = indexStr;
        } else {
          view = topView;
          prevData = view.data;
          view.data = data;
          view.ctx = context;
        }

        if ($isArray(data) && !noIteration) {
          // Create a view for the array, whose child views correspond to each data item. (Note: if key and parentView are passed in
          // along with parent view, treat as insert -e.g. from view.addViews - so parentView is already the view item for array)
          for (i = 0, l = data.length; i < l; i++) {
            view.index = i;
            view.data = data[i];
            result += tmpl.fn(data[i], view, $sub);
          }
        } else {
          view.data = data;
          result += tmpl.fn(data, view, $sub);
        }

        view.data = prevData;
        view.index = prevIndex;
      }

      if (isTopRenderCall) {
        isRenderCall = undefined;
      }
    }

    return result;
  }

  function renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag) {
    // Render template against data as a tree of subviews (nested rendered template instances), or as a string (top-level template).
    // If the data is the parent view, treat as noIteration, re-render with the same data context.
    // tmpl can be a string (e.g. rendered by a tag.render() method), or a compiled template.
    var i,
        l,
        newView,
        childView,
        itemResult,
        swapContent,
        contentTmpl,
        outerOnRender,
        tmplName,
        itemVar,
        newCtx,
        tagCtx,
        noLinking,
        result = "";

    if (tag) {
      // This is a call from renderTag or tagCtx.render(...)
      tmplName = tag.tagName;
      tagCtx = tag.tagCtx;
      context = context ? extendCtx(context, tag.ctx) : tag.ctx;

      if (tmpl === view.content) {
        // {{xxx tmpl=#content}}
        contentTmpl = tmpl !== view.ctx._wrp // We are rendering the #content
        ? view.ctx._wrp // #content was the tagCtx.props.tmpl wrapper of the block content - so within this view, #content will now be the view.ctx._wrp block content
        : undefined; // #content was the view.ctx._wrp block content - so within this view, there is no longer any #content to wrap.
      } else if (tmpl !== tagCtx.content) {
        if (tmpl === tag.template) {
          // Rendering {{tag}} tag.template, replacing block content.
          contentTmpl = tagCtx.tmpl; // Set #content to block content (or wrapped block content if tagCtx.props.tmpl is set)

          context._wrp = tagCtx.content; // Pass wrapped block content to nested views
        } else {
          // Rendering tagCtx.props.tmpl wrapper
          contentTmpl = tagCtx.content || view.content; // Set #content to wrapped block content
        }
      } else {
        contentTmpl = view.content; // Nested views inherit same wrapped #content property
      }

      if (tagCtx.props.link === false) {
        // link=false setting on block tag
        // We will override inherited value of link by the explicit setting link=false taken from props
        // The child views of an unlinked view are also unlinked. So setting child back to true will not have any effect.
        context = context || {};
        context.link = false;
      }
    }

    if (view) {
      onRender = onRender || view._.onRender;
      noLinking = context && context.link === false;

      if (noLinking && view._.nl) {
        onRender = undefined;
      }

      context = extendCtx(context, view.ctx);
      tagCtx = !tag && view.tag ? view.tag.tagCtxs[view.tagElse] : tagCtx;
    }

    if (itemVar = tagCtx && tagCtx.props.itemVar) {
      if (itemVar[0] !== "~") {
        syntaxError("Use itemVar='~myItem'");
      }

      itemVar = itemVar.slice(1);
    }

    if (key === true) {
      swapContent = true;
      key = 0;
    } // If link===false, do not call onRender, so no data-linking marker nodes


    if (onRender && tag && tag._.noVws) {
      onRender = undefined;
    }

    outerOnRender = onRender;

    if (onRender === true) {
      // Used by view.refresh(). Don't create a new wrapper view.
      outerOnRender = undefined;
      onRender = view._.onRender;
    } // Set additional context on views created here, (as modified context inherited from the parent, and to be inherited by child views)


    context = tmpl.helpers ? extendCtx(tmpl.helpers, context) : context;
    newCtx = context;

    if ($isArray(data) && !noIteration) {
      // Create a view for the array, whose child views correspond to each data item. (Note: if key and view are passed in
      // along with parent view, treat as insert -e.g. from view.addViews - so view is already the view item for array)
      newView = swapContent ? view : key !== undefined && view || new View(context, "array", view, data, tmpl, key, onRender, contentTmpl);
      newView._.nl = noLinking;

      if (view && view._.useKey) {
        // Parent is not an 'array view'
        newView._.bnd = !tag || tag._.bnd && tag; // For array views that are data bound for collection change events, set the
        // view._.bnd property to true for top-level link() or data-link="{for}", or to the tag instance for a data-bound tag, e.g. {^{for ...}}

        newView.tag = tag;
      }

      for (i = 0, l = data.length; i < l; i++) {
        // Create a view for each data item.
        childView = new View(newCtx, "item", newView, data[i], tmpl, (key || 0) + i, onRender, newView.content);

        if (itemVar) {
          (childView.ctx = $extend({}, newCtx))[itemVar] = $sub._cp(data[i], "#data", childView);
        }

        itemResult = tmpl.fn(data[i], childView, $sub);
        result += newView._.onRender ? newView._.onRender(itemResult, childView) : itemResult;
      }
    } else {
      // Create a view for singleton data object. The type of the view will be the tag name, e.g. "if" or "mytag" except for
      // "item", "array" and "data" views. A "data" view is from programmatic render(object) against a 'singleton'.
      newView = swapContent ? view : new View(newCtx, tmplName || "data", view, data, tmpl, key, onRender, contentTmpl);

      if (itemVar) {
        (newView.ctx = $extend({}, newCtx))[itemVar] = $sub._cp(data, "#data", newView);
      }

      newView.tag = tag;
      newView._.nl = noLinking;
      result += tmpl.fn(data, newView, $sub);
    }

    if (tag) {
      newView.tagElse = tagCtx.index;
      tagCtx.contentView = newView;
    }

    return outerOnRender ? outerOnRender(result, newView) : result;
  } //===========================
  // Build and compile template
  //===========================
  // Generate a reusable function that will serve to render a template against data
  // (Compile AST then build template function)


  function onRenderError(e, view, fallback) {
    var message = fallback !== undefined ? $isFunction(fallback) ? fallback.call(view.data, e, view) : fallback || "" : "{Error: " + (e.message || e) + "}";

    if ($subSettings.onError && (fallback = $subSettings.onError.call(view.data, e, fallback && message, view)) !== undefined) {
      message = fallback; // There is a settings.debugMode(handler) onError override. Call it, and use return value (if any) to replace message
    }

    return view && !view._lc ? $converters.html(message) : message; // For data-link=\"{... onError=...}"... See onDataLinkedTagChange
  }

  function error(message) {
    throw new $sub.Err(message);
  }

  function syntaxError(message) {
    error("Syntax error\n" + message);
  }

  function tmplFn(markup, tmpl, isLinkExpr, convertBack, hasElse) {
    // Compile markup to AST (abtract syntax tree) then build the template function code from the AST nodes
    // Used for compiling templates, and also by JsViews to build functions for data link expressions
    //==== nested functions ====
    function pushprecedingContent(shift) {
      shift -= loc;

      if (shift) {
        content.push(markup.substr(loc, shift).replace(rNewLine, "\\n"));
      }
    }

    function blockTagCheck(tagName, block) {
      if (tagName) {
        tagName += '}}'; //			'{{include}} block has {{/for}} with no open {{for}}'

        syntaxError((block ? '{{' + block + '}} block has {{/' + tagName + ' without {{' + tagName : 'Unmatched or missing {{/' + tagName) + ', in template:\n' + markup);
      }
    }

    function parseTag(all, bind, tagName, converter, colon, html, codeTag, params, slash, bind2, closeBlock, index) {
      /*
      
           bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
      /(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}/g
      
      (?:
        {(\^)?{            bind
        (?:
          (\w+             tagName
            (?=[\/\s}])
          )
          |
          (\w+)?(:)        converter colon
          |
          (>)              html
          |
          (\*)             codeTag
        )
        \s*
        (                  params
          (?:[^}]|}(?!}))*?
        )
        (\/)?              slash
        |
        {(\^)?{            bind2
        (?:
          (?:\/(\w+))\s*   closeBlock
          |
          !--[\s\S]*?--    comment
        )
      )
      }}/g
      
      */
      if (codeTag && bind || slash && !tagName || params && params.slice(-1) === ":" || bind2) {
        syntaxError(all);
      } // Build abstract syntax tree (AST): [tagName, converter, params, content, hash, bindings, contentMarkup]


      if (html) {
        colon = ":";
        converter = HTML;
      }

      slash = slash || isLinkExpr && !hasElse;
      var late,
          openTagName,
          isLateOb,
          pathBindings = (bind || isLinkExpr) && [[]],
          // pathBindings is an array of arrays for arg bindings and a hash of arrays for prop bindings
      props = "",
          args = "",
          ctxProps = "",
          paramsArgs = "",
          paramsProps = "",
          paramsCtxProps = "",
          onError = "",
          useTrigger = "",
          // Block tag if not self-closing and not {{:}} or {{>}} (special case) and not a data-link expression
      block = !slash && !colon; //==== nested helper function ====

      tagName = tagName || (params = params || "#data", colon); // {{:}} is equivalent to {{:#data}}

      pushprecedingContent(index);
      loc = index + all.length; // location marker - parsed up to here

      if (codeTag) {
        if (allowCode) {
          content.push(["*", "\n" + params.replace(/^:/, "ret+= ").replace(rUnescapeQuotes, "$1") + ";\n"]);
        }
      } else if (tagName) {
        if (tagName === "else") {
          if (rTestElseIf.test(params)) {
            syntaxError('For "{{else if expr}}" use "{{else expr}}"');
          }

          pathBindings = current[9] && [[]];
          current[10] = markup.substring(current[10], index); // contentMarkup for block tag

          openTagName = current[11] || current[0] || syntaxError("Mismatched: " + all); // current[0] is tagName, but for {{else}} nodes, current[11] is tagName of preceding open tag

          current = stack.pop();
          content = current[2];
          block = true;
        }

        if (params) {
          // remove newlines from the params string, to avoid compiled code errors for unterminated strings
          parseParams(params.replace(rNewLine, " "), pathBindings, tmpl, isLinkExpr).replace(rBuildHash, function (all, onerror, isCtxPrm, key, keyToken, keyValue, arg, param) {
            if (key === "this:") {
              keyValue = "undefined"; // this=some.path is always a to parameter (one-way), so don't need to compile/evaluate some.path initialization
            }

            if (param) {
              isLateOb = isLateOb || param[0] === "@";
            }

            key = "'" + keyToken + "':";

            if (arg) {
              args += isCtxPrm + keyValue + ",";
              paramsArgs += "'" + param + "',";
            } else if (isCtxPrm) {
              // Contextual parameter, ~foo=expr
              ctxProps += key + 'j._cp(' + keyValue + ',"' + param + '",view),'; // Compiled code for evaluating tagCtx on a tag will have: ctx:{'foo':j._cp(compiledExpr, "expr", view)}

              paramsCtxProps += key + "'" + param + "',";
            } else if (onerror) {
              onError += keyValue;
            } else {
              if (keyToken === "trigger") {
                useTrigger += keyValue;
              }

              if (keyToken === "lateRender") {
                late = param !== "false"; // Render after first pass
              }

              props += key + keyValue + ",";
              paramsProps += key + "'" + param + "',";
              hasHandlers = hasHandlers || rHasHandlers.test(keyToken);
            }

            return "";
          }).slice(0, -1);
        }

        if (pathBindings && pathBindings[0]) {
          pathBindings.pop(); // Remove the binding that was prepared for next arg. (There is always an extra one ready).
        }

        newNode = [tagName, converter || !!convertBack || hasHandlers || "", block && [], parsedParam(paramsArgs || (tagName === ":" ? "'#data'," : ""), paramsProps, paramsCtxProps), // {{:}} equivalent to {{:#data}}
        parsedParam(args || (tagName === ":" ? "data," : ""), props, ctxProps), onError, useTrigger, late, isLateOb, pathBindings || 0];
        content.push(newNode);

        if (block) {
          stack.push(current);
          current = newNode;
          current[10] = loc; // Store current location of open tag, to be able to add contentMarkup when we reach closing tag

          current[11] = openTagName; // Used for checking syntax (matching close tag)
        }
      } else if (closeBlock) {
        blockTagCheck(closeBlock !== current[0] && closeBlock !== current[11] && closeBlock, current[0]); // Check matching close tag name

        current[10] = markup.substring(current[10], index); // contentMarkup for block tag

        current = stack.pop();
      }

      blockTagCheck(!current && closeBlock);
      content = current[2];
    } //==== /end of nested functions ====


    var i,
        result,
        newNode,
        hasHandlers,
        bindings,
        allowCode = $subSettings.allowCode || tmpl && tmpl.allowCode || $viewsSettings.allowCode === true,
        // include direct setting of settings.allowCode true for backward compat only
    astTop = [],
        loc = 0,
        stack = [],
        content = astTop,
        current = [,, astTop];

    if (allowCode && tmpl._is) {
      tmpl.allowCode = allowCode;
    } //TODO	result = tmplFnsCache[markup]; // Only cache if template is not named and markup length < ...,
    //and there are no bindings or subtemplates?? Consider standard optimization for data-link="a.b.c"
    //		if (result) {
    //			tmpl.fn = result;
    //		} else {
    //		result = markup;


    if (isLinkExpr) {
      if (convertBack !== undefined) {
        markup = markup.slice(0, -convertBack.length - 2) + delimCloseChar0;
      }

      markup = delimOpenChar0 + markup + delimCloseChar1;
    }

    blockTagCheck(stack[0] && stack[0][2].pop()[0]); // Build the AST (abstract syntax tree) under astTop

    markup.replace(rTag, parseTag);
    pushprecedingContent(markup.length);

    if (loc = astTop[astTop.length - 1]) {
      blockTagCheck("" + loc !== loc && +loc[10] === loc[10] && loc[0]);
    } //			result = tmplFnsCache[markup] = buildCode(astTop, tmpl);
    //		}


    if (isLinkExpr) {
      result = buildCode(astTop, markup, isLinkExpr);
      bindings = [];
      i = astTop.length;

      while (i--) {
        bindings.unshift(astTop[i][9]); // With data-link expressions, pathBindings array for tagCtx[i] is astTop[i][9]
      }

      setPaths(result, bindings);
    } else {
      result = buildCode(astTop, tmpl);
    }

    return result;
  }

  function setPaths(fn, pathsArr) {
    var key,
        paths,
        i = 0,
        l = pathsArr.length;
    fn.deps = [];
    fn.paths = []; // The array of path binding (array/dictionary)s for each tag/else block's args and props

    for (; i < l; i++) {
      fn.paths.push(paths = pathsArr[i]);

      for (key in paths) {
        if (key !== "_jsvto" && paths.hasOwnProperty(key) && paths[key].length && !paths[key].skp) {
          fn.deps = fn.deps.concat(paths[key]); // deps is the concatenation of the paths arrays for the different bindings
        }
      }
    }
  }

  function parsedParam(args, props, ctx) {
    return [args.slice(0, -1), props.slice(0, -1), ctx.slice(0, -1)];
  }

  function paramStructure(parts, type) {
    return '\n\t' + (type ? type + ':{' : '') + 'args:[' + parts[0] + '],\n\tprops:{' + parts[1] + '}' + (parts[2] ? ',\n\tctx:{' + parts[2] + '}' : "");
  }

  function parseParams(params, pathBindings, tmpl, isLinkExpr) {
    function parseTokens(all, lftPrn0, lftPrn, bound, path, operator, err, eq, path2, late, prn, comma, lftPrn2, apos, quot, rtPrn, rtPrnDot, prn2, space, index, full) {
      // /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
      //lftPrn0           lftPrn         bound     path               operator     err                                          eq      path2 late            prn      comma  lftPrn2   apos quot        rtPrn  rtPrnDot                  prn2     space
      // (left paren? followed by (path? followed by operator) or (path followed by paren?)) or comma or apos or quot or right paren or space
      function parsePath(allPath, not, object, helper, view, viewProperty, pathTokens, leafToken) {
        // /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
        //    not                               object     helper    view  viewProperty pathTokens      leafToken
        var subPath = object === ".";

        if (object) {
          path = path.slice(not.length);

          if (/^\.?constructor$/.test(leafToken || path)) {
            syntaxError(allPath);
          }

          if (!subPath) {
            allPath = (late // late path @a.b.c: not throw on 'property of undefined' if a undefined, and will use _getOb() after linking to resolve late.
            ? (isLinkExpr ? '' : '(ltOb.lt=ltOb.lt||') + '(ob=' : "") + (helper ? 'view.ctxPrm("' + helper + '")' : view ? "view" : "data") + (late ? ')===undefined' + (isLinkExpr ? '' : ')') + '?"":view._getOb(ob,"' : "") + (leafToken ? (viewProperty ? "." + viewProperty : helper ? "" : view ? "" : "." + object) + (pathTokens || "") : (leafToken = helper ? "" : view ? viewProperty || "" : object, ""));
            allPath = allPath + (leafToken ? "." + leafToken : "");
            allPath = not + (allPath.slice(0, 9) === "view.data" ? allPath.slice(5) // convert #view.data... to data...
            : allPath) + (late ? (isLinkExpr ? '"' : '",ltOb') + (prn ? ',1)' : ')') : "");
          }

          if (bindings) {
            binds = named === "_linkTo" ? bindto = pathBindings._jsvto = pathBindings._jsvto || [] : bndCtx.bd;

            if (theOb = subPath && binds[binds.length - 1]) {
              if (theOb._cpfn) {
                // Computed property exprOb
                while (theOb.sb) {
                  theOb = theOb.sb;
                }

                if (theOb.bnd) {
                  path = "^" + path.slice(1);
                }

                theOb.sb = path;
                theOb.bnd = theOb.bnd || path[0] === "^";
              }
            } else {
              binds.push(path);
            }

            pathStart[parenDepth] = index + (subPath ? 1 : 0);
          }
        }

        return allPath;
      } //bound = bindings && bound;


      if (bound && !eq) {
        path = bound + path; // e.g. some.fn(...)^some.path - so here path is "^some.path"
      }

      operator = operator || "";
      lftPrn = lftPrn || lftPrn0 || lftPrn2;
      path = path || path2;

      if (late && (late = !/\)|]/.test(full[index - 1]))) {
        path = path.slice(1).split(".").join("^"); // Late path @z.b.c. Use "^" rather than "." to ensure that deep binding will be used
      } // Could do this - but not worth perf cost?? :-
      // if (!path.lastIndexOf("#data.", 0)) { path = path.slice(6); } // If path starts with "#data.", remove that.


      prn = prn || prn2 || "";
      var expr,
          exprFn,
          binds,
          theOb,
          newOb,
          rtSq = ")";

      if (prn === "[") {
        prn = "[j._sq(";
        rtSq = ")]";
      }

      if (err && !aposed && !quoted) {
        syntaxError(params);
      } else {
        if (bindings && rtPrnDot && !aposed && !quoted) {
          // This is a binding to a path in which an object is returned by a helper/data function/expression, e.g. foo()^x.y or (a?b:c)^x.y
          // We create a compiled function to get the object instance (which will be called when the dependent data of the subexpression changes, to return the new object, and trigger re-binding of the subsequent path)
          if (parenDepth) {
            expr = pathStart[parenDepth - 1];

            if (full.length - 1 > index - (expr || 0)) {
              // We need to compile a subexpression
              expr = full.slice(expr, index + all.length);

              if (exprFn !== true) {
                // If not reentrant call during compilation
                binds = bindto || bndStack[parenDepth - 1].bd; // Insert exprOb object, to be used during binding to return the computed object

                theOb = binds[binds.length - 1];

                if (theOb && theOb.prm) {
                  while (theOb.sb && theOb.sb.prm) {
                    theOb = theOb.sb;
                  }

                  newOb = theOb.sb = {
                    path: theOb.sb,
                    bnd: theOb.bnd
                  };
                } else {
                  binds.push(newOb = {
                    path: binds.pop()
                  }); // Insert exprOb object, to be used during binding to return the computed object
                } // (e.g. "some.object()" in "some.object().a.b" - to be used as context for binding the following tokens "a.b")

              }

              rtPrnDot = delimOpenChar1 + ":" + expr // The parameter or function subexpression
              + " onerror=''" // set onerror='' in order to wrap generated code with a try catch - returning '' as object instance if there is an error/missing parent
              + delimCloseChar0;
              exprFn = tmplLinks[rtPrnDot];

              if (!exprFn) {
                tmplLinks[rtPrnDot] = true; // Flag that this exprFn (for rtPrnDot) is being compiled

                tmplLinks[rtPrnDot] = exprFn = tmplFn(rtPrnDot, tmpl, true); // Compile the expression (or use cached copy already in tmpl.links)
              }

              if (exprFn !== true && newOb) {
                // If not reentrant call during compilation
                newOb._cpfn = exprFn;
                newOb.prm = bndCtx.bd;
                newOb.bnd = newOb.bnd || newOb.path && newOb.path.indexOf("^") >= 0;
              }
            }
          }
        }

        return aposed // within single-quoted string
        ? (aposed = !apos, aposed ? all : lftPrn2 + '"') : quoted // within double-quoted string
        ? (quoted = !quot, quoted ? all : lftPrn2 + '"') : (lftPrn ? (pathStart[parenDepth] = index++, bndCtx = bndStack[++parenDepth] = {
          bd: []
        }, lftPrn) : "") + (space ? parenDepth ? "" // New arg or prop - so insert backspace \b (\x08) as separator for named params, used subsequently by rBuildHash, and prepare new bindings array
        : (paramIndex = full.slice(paramIndex, index), named ? (named = boundName = bindto = false, "\b") : "\b,") + paramIndex + (paramIndex = index + all.length, bindings && pathBindings.push(bndCtx.bd = []), "\b") : eq // named param. Remove bindings for arg and create instead bindings array for prop
        ? (parenDepth && syntaxError(params), bindings && pathBindings.pop(), named = "_" + path, boundName = bound, paramIndex = index + all.length, bindings && (bindings = bndCtx.bd = pathBindings[named] = [], bindings.skp = !bound), path + ':') : path // path
        ? path.split("^").join(".").replace($sub.rPath, parsePath) + (prn // some.fncall(
        ? (bndCtx = bndStack[++parenDepth] = {
          bd: []
        }, fnCall[parenDepth] = rtSq, prn) : operator) : operator // operator
        ? operator : rtPrn // function
        ? (rtPrn = fnCall[parenDepth] || rtPrn, fnCall[parenDepth] = false, bndCtx = bndStack[--parenDepth], rtPrn) + (prn // rtPrn and prn, e.g )( in (a)() or a()(), or )[ in a()[]
        ? (bndCtx = bndStack[++parenDepth], fnCall[parenDepth] = rtSq, prn) : "") : comma ? (fnCall[parenDepth] || syntaxError(params), "," // We don't allow top-level literal arrays or objects
        ) : lftPrn0 ? "" : (aposed = apos, quoted = quot, '"'));
      }
    }

    var named,
        bindto,
        boundName,
        quoted,
        // boolean for string content in double quotes
    aposed,
        // or in single quotes
    bindings = pathBindings && pathBindings[0],
        // bindings array for the first arg
    bndCtx = {
      bd: bindings
    },
        bndStack = {
      0: bndCtx
    },
        paramIndex = 0,
        // list,
    tmplLinks = (tmpl ? tmpl.links : bindings && (bindings.links = bindings.links || {})) || topView.tmpl.links,
        // The following are used for tracking path parsing including nested paths, such as "a.b(c^d + (e))^f", and chained computed paths such as
    // "a.b().c^d().e.f().g" - which has four chained paths, "a.b()", "^c.d()", ".e.f()" and ".g"
    parenDepth = 0,
        fnCall = {},
        // We are in a function call
    pathStart = {},
        // tracks the start of the current path such as c^d() in the above example
    result;

    if (params[0] === "@") {
      params = params.replace(rBracketQuote, ".");
    }

    result = (params + (tmpl ? " " : "")).replace($sub.rPrm, parseTokens);
    return !parenDepth && result || syntaxError(params); // Syntax error if unbalanced parens in params expression
  }

  function buildCode(ast, tmpl, isLinkExpr) {
    // Build the template function code from the AST nodes, and set as property on the passed-in template object
    // Used for compiling templates, and also by JsViews to build functions for data link expressions
    var i,
        node,
        tagName,
        converter,
        tagCtx,
        hasTag,
        hasEncoder,
        getsVal,
        hasCnvt,
        useCnvt,
        tmplBindings,
        pathBindings,
        params,
        boundOnErrStart,
        boundOnErrEnd,
        tagRender,
        nestedTmpls,
        tmplName,
        nestedTmpl,
        tagAndElses,
        content,
        markup,
        nextIsElse,
        oldCode,
        isElse,
        isGetVal,
        tagCtxFn,
        onError,
        tagStart,
        trigger,
        lateRender,
        retStrOpen,
        retStrClose,
        tmplBindingKey = 0,
        useViews = $subSettingsAdvanced.useViews || tmpl.useViews || tmpl.tags || tmpl.templates || tmpl.helpers || tmpl.converters,
        code = "",
        tmplOptions = {},
        l = ast.length;

    if ("" + tmpl === tmpl) {
      tmplName = isLinkExpr ? 'data-link="' + tmpl.replace(rNewLine, " ").slice(1, -1) + '"' : tmpl;
      tmpl = 0;
    } else {
      tmplName = tmpl.tmplName || "unnamed";

      if (tmpl.allowCode) {
        tmplOptions.allowCode = true;
      }

      if (tmpl.debug) {
        tmplOptions.debug = true;
      }

      tmplBindings = tmpl.bnds;
      nestedTmpls = tmpl.tmpls;
    }

    for (i = 0; i < l; i++) {
      // AST nodes: [0: tagName, 1: converter, 2: content, 3: params, 4: code, 5: onError, 6: trigger, 7:pathBindings, 8: contentMarkup]
      node = ast[i]; // Add newline for each callout to t() c() etc. and each markup string

      if ("" + node === node) {
        // a markup string to be inserted
        code += '\n+"' + node + '"';
      } else {
        // a compiled tag expression to be inserted
        tagName = node[0];

        if (tagName === "*") {
          // Code tag: {{* }}
          code += ";\n" + node[1] + "\nret=ret";
        } else {
          converter = node[1];
          content = !isLinkExpr && node[2];
          tagCtx = paramStructure(node[3], 'params') + '},' + paramStructure(params = node[4]);
          trigger = node[6];
          lateRender = node[7];

          if (node[8]) {
            // latePath @a.b.c or @~a.b.c
            retStrOpen = "\nvar ob,ltOb={},ctxs=";
            retStrClose = ";\nctxs.lt=ltOb.lt;\nreturn ctxs;";
          } else {
            retStrOpen = "\nreturn ";
            retStrClose = "";
          }

          markup = node[10] && node[10].replace(rUnescapeQuotes, "$1");

          if (isElse = tagName === "else") {
            if (pathBindings) {
              pathBindings.push(node[9]);
            }
          } else {
            onError = node[5] || $subSettings.debugMode !== false && "undefined"; // If debugMode not false, set default onError handler on tag to "undefined" (see onRenderError)

            if (tmplBindings && (pathBindings = node[9])) {
              // Array of paths, or false if not data-bound
              pathBindings = [pathBindings];
              tmplBindingKey = tmplBindings.push(1); // Add placeholder in tmplBindings for compiled function
            }
          }

          useViews = useViews || params[1] || params[2] || pathBindings || /view.(?!index)/.test(params[0]); // useViews is for perf optimization. For render() we only use views if necessary - for the more advanced scenarios.
          // We use views if there are props, contextual properties or args with #... (other than #index) - but you can force
          // using the full view infrastructure, (and pay a perf price) by opting in: Set useViews: true on the template, manually...

          if (isGetVal = tagName === ":") {
            if (converter) {
              tagName = converter === HTML ? ">" : converter + tagName;
            }
          } else {
            if (content) {
              // TODO optimize - if content.length === 0 or if there is a tmpl="..." specified - set content to null / don't run this compilation code - since content won't get used!!
              // Create template object for nested template
              nestedTmpl = tmplObject(markup, tmplOptions);
              nestedTmpl.tmplName = tmplName + "/" + tagName; // Compile to AST and then to compiled function

              nestedTmpl.useViews = nestedTmpl.useViews || useViews;
              buildCode(content, nestedTmpl);
              useViews = nestedTmpl.useViews;
              nestedTmpls.push(nestedTmpl);
            }

            if (!isElse) {
              // This is not an else tag.
              tagAndElses = tagName;
              useViews = useViews || tagName && (!$tags[tagName] || !$tags[tagName].flow); // Switch to a new code string for this bound tag (and its elses, if it has any) - for returning the tagCtxs array

              oldCode = code;
              code = "";
            }

            nextIsElse = ast[i + 1];
            nextIsElse = nextIsElse && nextIsElse[0] === "else";
          }

          tagStart = onError ? ";\ntry{\nret+=" : "\n+";
          boundOnErrStart = "";
          boundOnErrEnd = "";

          if (isGetVal && (pathBindings || trigger || converter && converter !== HTML || lateRender)) {
            // For convertVal we need a compiled function to return the new tagCtx(s)
            tagCtxFn = new Function("data,view,j,u", "// " + tmplName + " " + ++tmplBindingKey + " " + tagName + retStrOpen + "{" + tagCtx + "};" + retStrClose);
            tagCtxFn._er = onError;
            tagCtxFn._tag = tagName;
            tagCtxFn._bd = !!pathBindings; // data-linked tag {^{.../}}

            tagCtxFn._lr = lateRender;

            if (isLinkExpr) {
              return tagCtxFn;
            }

            setPaths(tagCtxFn, pathBindings);
            tagRender = 'c("' + converter + '",view,';
            useCnvt = true;
            boundOnErrStart = tagRender + tmplBindingKey + ",";
            boundOnErrEnd = ")";
          }

          code += isGetVal ? (isLinkExpr ? (onError ? "try{\n" : "") + "return " : tagStart) + (useCnvt // Call _cnvt if there is a converter: {{cnvt: ... }} or {^{cnvt: ... }}
          ? (useCnvt = undefined, useViews = hasCnvt = true, tagRender + (tagCtxFn ? (tmplBindings[tmplBindingKey - 1] = tagCtxFn, tmplBindingKey // Store the compiled tagCtxFn in tmpl.bnds, and pass the key to convertVal()
          ) : "{" + tagCtx + "}") + ")") : tagName === ">" ? (hasEncoder = true, "h(" + params[0] + ")") : (getsVal = true, "((v=" + params[0] + ')!=null?v:' + (isLinkExpr ? 'null)' : '"")')) // Non strict equality so data-link="title{:expr}" with expr=null/undefined removes title attribute
          ) : (hasTag = true, "\n{view:view,content:false,tmpl:" // Add this tagCtx to the compiled code for the tagCtxs to be passed to renderTag()
          + (content ? nestedTmpls.length : "false") + "," // For block tags, pass in the key (nestedTmpls.length) to the nested content template
          + tagCtx + "},");

          if (tagAndElses && !nextIsElse) {
            // This is a data-link expression or an inline tag without any elses, or the last {{else}} of an inline tag
            // We complete the code for returning the tagCtxs array
            code = "[" + code.slice(0, -1) + "]";
            tagRender = 't("' + tagAndElses + '",view,this,';

            if (isLinkExpr || pathBindings) {
              // This is a bound tag (data-link expression or inline bound tag {^{tag ...}}) so we store a compiled tagCtxs function in tmp.bnds
              code = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagAndElses + retStrOpen + code + retStrClose);
              code._er = onError;
              code._tag = tagAndElses;

              if (pathBindings) {
                setPaths(tmplBindings[tmplBindingKey - 1] = code, pathBindings);
              }

              code._lr = lateRender;

              if (isLinkExpr) {
                return code; // For a data-link expression we return the compiled tagCtxs function
              }

              boundOnErrStart = tagRender + tmplBindingKey + ",undefined,";
              boundOnErrEnd = ")";
            } // This is the last {{else}} for an inline tag.
            // For a bound tag, pass the tagCtxs fn lookup key to renderTag.
            // For an unbound tag, include the code directly for evaluating tagCtxs array


            code = oldCode + tagStart + tagRender + (pathBindings && tmplBindingKey || code) + ")";
            pathBindings = 0;
            tagAndElses = 0;
          }

          if (onError && !nextIsElse) {
            useViews = true;
            code += ';\n}catch(e){ret' + (isLinkExpr ? "urn " : "+=") + boundOnErrStart + 'j._err(e,view,' + onError + ')' + boundOnErrEnd + ';}' + (isLinkExpr ? "" : 'ret=ret');
          }
        }
      }
    } // Include only the var references that are needed in the code


    code = "// " + tmplName + (tmplOptions.debug ? "\ndebugger;" : "") + "\nvar v" + (hasTag ? ",t=j._tag" : "") // has tag
    + (hasCnvt ? ",c=j._cnvt" : "") // converter
    + (hasEncoder ? ",h=j._html" : "") // html converter
    + (isLinkExpr ? (node[8] // late @... path?
    ? ", ob" : "") + ";\n" : ',ret=""') + code + (isLinkExpr ? "\n" : ";\nreturn ret;");

    try {
      code = new Function("data,view,j,u", code);
    } catch (e) {
      syntaxError("Compiled template code:\n\n" + code + '\n: "' + (e.message || e) + '"');
    }

    if (tmpl) {
      tmpl.fn = code;
      tmpl.useViews = !!useViews;
    }

    return code;
  } //==========
  // Utilities
  //==========
  // Merge objects, in particular contexts which inherit from parent contexts


  function extendCtx(context, parentContext) {
    // Return copy of parentContext, unless context is defined and is different, in which case return a new merged context
    // If neither context nor parentContext are defined, return undefined
    return context && context !== parentContext ? parentContext ? $extend($extend({}, parentContext), context) : context : parentContext && $extend({}, parentContext);
  }

  function getTargetProps(source, tagCtx) {
    // this pointer is theMap - which has tagCtx.props too
    // arguments: tagCtx.args.
    var key,
        prop,
        map = tagCtx.map,
        propsArr = map && map.propsArr;

    if (!propsArr) {
      // map.propsArr is the full array of {key:..., prop:...} objects
      propsArr = [];

      if (_typeof(source) === OBJECT || $isFunction(source)) {
        for (key in source) {
          prop = source[key];

          if (key !== $expando && source.hasOwnProperty(key) && (!tagCtx.props.noFunctions || !$.isFunction(prop))) {
            propsArr.push({
              key: key,
              prop: prop
            });
          }
        }
      }

      if (map) {
        map.propsArr = map.options && propsArr; // If bound {^{props}} and not isRenderCall, store propsArr on map (map.options is defined only for bound, && !isRenderCall)
      }
    }

    return getTargetSorted(propsArr, tagCtx); // Obtains map.tgt, by filtering, sorting and splicing the full propsArr
  }

  function getTargetSorted(value, tagCtx) {
    // getTgt
    var mapped,
        start,
        end,
        tag = tagCtx.tag,
        props = tagCtx.props,
        propParams = tagCtx.params.props,
        filter = props.filter,
        sort = props.sort,
        directSort = sort === true,
        step = parseInt(props.step),
        reverse = props.reverse ? -1 : 1;

    if (!$isArray(value)) {
      return value;
    }

    if (directSort || sort && "" + sort === sort) {
      // Temporary mapped array holds objects with index and sort-value
      mapped = value.map(function (item, i) {
        item = directSort ? item : getPathObject(item, sort);
        return {
          i: i,
          v: "" + item === item ? item.toLowerCase() : item
        };
      }); // Sort mapped array

      mapped.sort(function (a, b) {
        return a.v > b.v ? reverse : a.v < b.v ? -reverse : 0;
      }); // Map to new array with resulting order

      value = mapped.map(function (item) {
        return value[item.i];
      });
    } else if ((sort || reverse < 0) && !tag.dataMap) {
      value = value.slice(); // Clone array first if not already a new array
    }

    if ($isFunction(sort)) {
      value = value.sort(function () {
        // Wrap the sort function to provide tagCtx as 'this' pointer
        return sort.apply(tagCtx, arguments);
      });
    }

    if (reverse < 0 && (!sort || $isFunction(sort))) {
      // Reverse result if not already reversed in sort
      value = value.reverse();
    }

    if (value.filter && filter) {
      // IE8 does not support filter
      value = value.filter(filter, tagCtx);

      if (tagCtx.tag.onFilter) {
        tagCtx.tag.onFilter(tagCtx);
      }
    }

    if (propParams.sorted) {
      mapped = sort || reverse < 0 ? value : value.slice();

      if (tag.sorted) {
        $.observable(tag.sorted).refresh(mapped); // Note that this might cause the start and end props to be modified - e.g. by pager tag control
      } else {
        tagCtx.map.sorted = mapped;
      }
    }

    start = props.start; // Get current value - after possible  changes triggered by tag.sorted refresh() above

    end = props.end;

    if (propParams.start && start === undefined || propParams.end && end === undefined) {
      start = end = 0;
    }

    if (!isNaN(start) || !isNaN(end)) {
      // start or end specified, but not the auto-create Number array scenario of {{for start=xxx end=yyy}}
      start = +start || 0;
      end = end === undefined || end > value.length ? value.length : +end;
      value = value.slice(start, end);
    }

    if (step > 1) {
      start = 0;
      end = value.length;
      mapped = [];

      for (; start < end; start += step) {
        mapped.push(value[start]);
      }

      value = mapped;
    }

    if (propParams.paged && tag.paged) {
      $observable(tag.paged).refresh(value);
    }

    return value;
  }
  /** Render the template as a string, using the specified data and helpers/context
  * $("#tmpl").render()
  *
  * @param {any}        data
  * @param {hash}       [helpersOrContext]
  * @param {boolean}    [noIteration]
  * @returns {string}   rendered template
  */


  function $fnRender(data, context, noIteration) {
    var tmplElem = this.jquery && (this[0] || error('Unknown template')),
        // Targeted element not found for jQuery template selector such as "#myTmpl"
    tmpl = tmplElem.getAttribute(tmplAttr);
    return renderContent.call(tmpl && $.data(tmplElem)[jsvTmpl] || $templates(tmplElem), data, context, noIteration);
  } //========================== Register converters ==========================


  function getCharEntity(ch) {
    // Get character entity for HTML, Attribute and optional data encoding
    return charEntities[ch] || (charEntities[ch] = "&#" + ch.charCodeAt(0) + ";");
  }

  function getCharFromEntity(match, token) {
    // Get character from HTML entity, for optional data unencoding
    return charsFromEntities[token] || "";
  }

  function htmlEncode(text) {
    // HTML encode: Replace < > & ' " ` etc. by corresponding entities.
    return text != undefined ? rIsHtml.test(text) && ("" + text).replace(rHtmlEncode, getCharEntity) || text : "";
  }

  function dataEncode(text) {
    // Encode just < > and & - intended for 'safe data' along with {{:}} rather than {{>}}
    return "" + text === text ? text.replace(rDataEncode, getCharEntity) : text;
  }

  function dataUnencode(text) {
    // Unencode just < > and & - intended for 'safe data' along with {{:}} rather than {{>}}
    return "" + text === text ? text.replace(rDataUnencode, getCharFromEntity) : text;
  } //========================== Initialize ==========================


  $sub = $views.sub;
  $viewsSettings = $views.settings;

  if (!(jsr || $ && $.render)) {
    // JsRender not already loaded, or loaded without jQuery, and we are now moving from jsrender namespace to jQuery namepace
    for (jsvStoreName in jsvStores) {
      registerStore(jsvStoreName, jsvStores[jsvStoreName]);
    }

    $converters = $views.converters;
    $helpers = $views.helpers;
    $tags = $views.tags;
    $sub._tg.prototype = {
      baseApply: baseApply,
      cvtArgs: convertArgs,
      bndArgs: convertBoundArgs,
      ctxPrm: contextParameter
    };
    topView = $sub.topView = new View(); //BROWSER-SPECIFIC CODE

    if ($) {
      ////////////////////////////////////////////////////////////////////////////////////////////////
      // jQuery (= $) is loaded
      $.fn.render = $fnRender;
      $expando = $.expando;

      if ($.observable) {
        if (versionNumber !== (versionNumber = $.views.jsviews)) {
          // Different version of jsRender was loaded
          throw "JsObservable requires JsRender " + versionNumber;
        }

        $extend($sub, $.views.sub); // jquery.observable.js was loaded before jsrender.js

        $views.map = $.views.map;
      }
    } else {
      ////////////////////////////////////////////////////////////////////////////////////////////////
      // jQuery is not loaded.
      $ = {};

      if (setGlobals) {
        global.jsrender = $; // We are loading jsrender.js from a script element, not AMD or CommonJS, so set global
      } // Error warning if jsrender.js is used as template engine on Node.js (e.g. Express or Hapi...)
      // Use jsrender-node.js instead...


      $.renderFile = $.__express = $.compile = function () {
        throw "Node.js: use npm jsrender, or jsrender-node.js";
      }; //END BROWSER-SPECIFIC CODE


      $.isFunction = function (ob) {
        return typeof ob === "function";
      };

      $.isArray = Array.isArray || function (obj) {
        return {}.toString.call(obj) === "[object Array]";
      };

      $sub._jq = function (jq) {
        // private method to move from JsRender APIs from jsrender namespace to jQuery namespace
        if (jq !== $) {
          $extend(jq, $); // map over from jsrender namespace to jQuery namespace

          $ = jq;
          $.fn.render = $fnRender;
          delete $.jsrender;
          $expando = $.expando;
        }
      };

      $.jsrender = versionNumber;
    }

    $subSettings = $sub.settings;
    $subSettings.allowCode = false;
    $isFunction = $.isFunction;
    $.render = $render;
    $.views = $views;
    $.templates = $templates = $views.templates;

    for (setting in $subSettings) {
      addSetting(setting);
    }
    /**
    * $.views.settings.debugMode(true)
    * @param {boolean}  debugMode
    * @returns {Settings}
    *
    * debugMode = $.views.settings.debugMode()
    * @returns {boolean}
    */


    ($viewsSettings.debugMode = function (debugMode) {
      return debugMode === undefined ? $subSettings.debugMode : ($subSettings.debugMode = debugMode, $subSettings.onError = debugMode + "" === debugMode ? function () {
        return debugMode;
      } : $isFunction(debugMode) ? debugMode : undefined, $viewsSettings);
    })(false); // jshint ignore:line

    $subSettingsAdvanced = $subSettings.advanced = {
      useViews: false,
      _jsv: false // For global access to JsViews store

    }; //========================== Register tags ==========================

    $tags({
      "if": {
        render: function render(val) {
          // This function is called once for {{if}} and once for each {{else}}.
          // We will use the tag.rendering object for carrying rendering state across the calls.
          // If not done (a previous block has not been rendered), look at expression for this block and render the block if expression is truthy
          // Otherwise return ""
          var self = this,
              tagCtx = self.tagCtx,
              ret = self.rendering.done || !val && (tagCtx.args.length || !tagCtx.index) ? "" : (self.rendering.done = true, self.selected = tagCtx.index, undefined); // Test is satisfied, so render content on current context

          return ret;
        },
        contentCtx: true,
        // Inherit parent view data context
        flow: true
      },
      "for": {
        sortDataMap: dataMap(getTargetSorted),
        init: function init(val, cloned) {
          this.setDataMap(this.tagCtxs);
        },
        render: function render(val) {
          // This function is called once for {{for}} and once for each {{else}}.
          // We will use the tag.rendering object for carrying rendering state across the calls.
          var value,
              filter,
              srtField,
              isArray,
              i,
              sorted,
              end,
              step,
              self = this,
              tagCtx = self.tagCtx,
              range = tagCtx.argDefault === false,
              props = tagCtx.props,
              iterate = range || tagCtx.args.length,
              // Not final else and not auto-create range
          result = "",
              done = 0;

          if (!self.rendering.done) {
            value = iterate ? val : tagCtx.view.data; // For the final else, defaults to current data without iteration.

            if (range) {
              range = props.reverse ? "unshift" : "push";
              end = +props.end;
              step = +props.step || 1;
              value = []; // auto-create integer array scenario of {{for start=xxx end=yyy}}

              for (i = +props.start || 0; (end - i) * step > 0; i += step) {
                value[range](i);
              }
            }

            if (value !== undefined) {
              isArray = $isArray(value);
              result += tagCtx.render(value, !iterate || props.noIteration); // Iterates if data is an array, except on final else - or if noIteration property
              // set to true. (Use {{include}} to compose templates without array iteration)

              done += isArray ? value.length : 1;
            }

            if (self.rendering.done = done) {
              self.selected = tagCtx.index;
            } // If nothing was rendered we will look at the next {{else}}. Otherwise, we are done.

          }

          return result;
        },
        setDataMap: function setDataMap(tagCtxs) {
          var tagCtx,
              props,
              paramsProps,
              self = this,
              l = tagCtxs.length;

          while (l--) {
            tagCtx = tagCtxs[l];
            props = tagCtx.props;
            paramsProps = tagCtx.params.props;
            tagCtx.argDefault = props.end === undefined || tagCtx.args.length > 0; // Default to #data except for auto-create range scenario {{for start=xxx end=yyy step=zzz}}

            props.dataMap = tagCtx.argDefault !== false && $isArray(tagCtx.args[0]) && (paramsProps.sort || paramsProps.start || paramsProps.end || paramsProps.step || paramsProps.filter || paramsProps.reverse || props.sort || props.start || props.end || props.step || props.filter || props.reverse) && self.sortDataMap;
          }
        },
        flow: true
      },
      props: {
        baseTag: "for",
        dataMap: dataMap(getTargetProps),
        init: noop,
        // Don't execute the base init() of the "for" tag
        flow: true
      },
      include: {
        flow: true
      },
      "*": {
        // {{* code... }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
        render: retVal,
        flow: true
      },
      ":*": {
        // {{:* returnedExpression }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
        render: retVal,
        flow: true
      },
      dbg: $helpers.dbg = $converters.dbg = dbgBreak // Register {{dbg/}}, {{dbg:...}} and ~dbg() to throw and catch, as breakpoints for debugging.

    });
    $converters({
      html: htmlEncode,
      attr: htmlEncode,
      // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
      encode: dataEncode,
      unencode: dataUnencode,
      // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
      url: function url(text) {
        // URL encoding helper.
        return text != undefined ? encodeURI("" + text) : text === null ? text : ""; // null returns null, e.g. to remove attribute. undefined returns ""
      }
    });
  } //========================== Define default delimiters ==========================


  $subSettings = $sub.settings;
  $isArray = ($ || jsr).isArray;
  $viewsSettings.delimiters("{{", "}}", "^");

  if (jsrToJq) {
    // Moving from jsrender namespace to jQuery namepace - copy over the stored items (templates, converters, helpers...)
    jsr.views.sub._jq($);
  }

  return $ || jsr;
}, window);

/***/ }),

/***/ "./src/js/messages.js":
/*!****************************!*\
  !*** ./src/js/messages.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/messages */ "./node_modules/ui-huma/js/messages.js");
/* harmony import */ var ui_huma_js_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_messages__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 9:
/*!**********************************!*\
  !*** multi ./src/js/messages.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/messages.js */"./src/js/messages.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aS1odW1hL25vZGVfbW9kdWxlcy9qc3JlbmRlci9qc3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVzc2FnZXMuanMiXSwibmFtZXMiOlsianNyZW5kZXIiLCJyZXF1aXJlIiwic2Nyb2xsIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImZvckVhY2giLCJlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZE1lc3NhZ2UiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlcyIsIm1lc3NhZ2VOb2RlVGV4dCIsInJlbmRlciIsIm5hbWUiLCJhdmF0YXIiLCJkYXRlIiwibWVzc2FnZU5vZGUiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImFwcGVuZENoaWxkIiwicHJldmVudERlZmF1bHQiLCJmaWVsZCIsInZhbHVlIiwiZmFjdG9yeSIsImdsb2JhbCIsIiQiLCJqUXVlcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZm4iLCJkZWZpbmUiLCJzZXRHbG9iYWxzIiwidmVyc2lvbk51bWJlciIsImpzdlN0b3JlTmFtZSIsInJUYWciLCJyVG1wbFN0cmluZyIsInRvcFZpZXciLCIkdmlld3MiLCIkZXhwYW5kbyIsIl9vY3AiLCIkaXNGdW5jdGlvbiIsIiRpc0FycmF5IiwiJHRlbXBsYXRlcyIsIiRjb252ZXJ0ZXJzIiwiJGhlbHBlcnMiLCIkdGFncyIsIiRzdWIiLCIkc3ViU2V0dGluZ3MiLCIkc3ViU2V0dGluZ3NBZHZhbmNlZCIsIiR2aWV3c1NldHRpbmdzIiwiZGVsaW1PcGVuQ2hhcjAiLCJkZWxpbU9wZW5DaGFyMSIsImRlbGltQ2xvc2VDaGFyMCIsImRlbGltQ2xvc2VDaGFyMSIsImxpbmtDaGFyIiwic2V0dGluZyIsImJhc2VPbkVycm9yIiwiaXNSZW5kZXJDYWxsIiwick5ld0xpbmUiLCJyVW5lc2NhcGVRdW90ZXMiLCJyRXNjYXBlUXVvdGVzIiwickJ1aWxkSGFzaCIsInJUZXN0RWxzZUlmIiwickZpcnN0RWxlbSIsInJBdHRyRW5jb2RlIiwicklzSHRtbCIsInJIYXNIYW5kbGVycyIsInJXcmFwcGVkSW5WaWV3TWFya2VyIiwickh0bWxFbmNvZGUiLCJyRGF0YUVuY29kZSIsInJEYXRhVW5lbmNvZGUiLCJyQnJhY2tldFF1b3RlIiwidmlld0lkIiwiY2hhckVudGl0aWVzIiwiY2hhcnNGcm9tRW50aXRpZXMiLCJhbXAiLCJndCIsImx0IiwiSFRNTCIsIk9CSkVDVCIsInRtcGxBdHRyIiwianN2VG1wbCIsImluZGV4U3RyIiwiJHJlbmRlciIsImpzciIsImpzclRvSnEiLCJqc3ZTdG9yZXMiLCJjb21waWxlIiwiY29tcGlsZVRtcGwiLCJ0YWciLCJjb21waWxlVGFnIiwidmlld01vZGVsIiwiY29tcGlsZVZpZXdNb2RlbCIsImhlbHBlciIsImNvbnZlcnRlciIsImpzdmlld3MiLCJzdWIiLCJyUGF0aCIsInJQcm0iLCJWaWV3IiwiRXJyIiwiSnNWaWV3c0Vycm9yIiwidG1wbEZuIiwicGFyc2UiLCJwYXJzZVBhcmFtcyIsImV4dGVuZCIsIiRleHRlbmQiLCJleHRlbmRDdHgiLCJzeW50YXhFcnIiLCJzeW50YXhFcnJvciIsIm9uU3RvcmUiLCJpdGVtIiwiYWRkU2V0dGluZyIsInNldHRpbmdzIiwiYWxsb3dDb2RlIiwiYWR2U2V0Iiwibm9vcCIsIl90aHAiLCJ0YWdIYW5kbGVyc0Zyb21Qcm9wcyIsIl9nbSIsImdldE1ldGhvZCIsIl90ZyIsIl9jbnZ0IiwiY29udmVydFZhbCIsIl90YWciLCJyZW5kZXJUYWciLCJfZXIiLCJlcnJvciIsIl9lcnIiLCJvblJlbmRlckVycm9yIiwiX2NwIiwicmV0VmFsIiwiX3NxIiwidG9rZW4iLCJkZWxpbWl0ZXJzIiwiJHZpZXdzRGVsaW1pdGVycyIsImFkdmFuY2VkIiwibWFwIiwiZGF0YU1hcCIsImdldERlcml2ZWRNZXRob2QiLCJiYXNlTWV0aG9kIiwibWV0aG9kIiwicmV0IiwicHJldkJhc2UiLCJiYXNlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfZCIsInRhZ0N0eCIsInByb3AiLCJwcm9wcyIsInRlc3QiLCJmaXgiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsInZhbCIsImRiZ0JyZWFrIiwiY29uc29sZSIsImxvZyIsImJhc2VBcHBseSIsImxpbmsiLCJ0YXJnZXQiLCJzb3VyY2UiLCJFcnJvciIsIm9wZW5DaGFycyIsImNsb3NlQ2hhcnMiLCJSZWdFeHAiLCJyVG1wbCIsImdldFZpZXciLCJpbm5lciIsInR5cGUiLCJ1bmRlZmluZWQiLCJ2aWV3cyIsImkiLCJsIiwiZm91bmQiLCJ2aWV3Iiwicm9vdCIsIl8iLCJ1c2VLZXkiLCJnZXQiLCJsZW5ndGgiLCJwYXJlbnQiLCJnZXROZXN0ZWRJbmRleCIsImluZGV4IiwiZGVwZW5kcyIsImdldEluZGV4IiwiZ2V0UGF0aE9iamVjdCIsIm9iIiwicGF0aCIsImx0T2IiLCJwcmV2T2IiLCJ0b2tlbnMiLCJzcGxpdCIsImNvbnRleHRQYXJhbWV0ZXIiLCJrZXkiLCJ3cmFwcGVkIiwiZGVwcyIsInJlcyIsIm9ic0N0eFBybSIsInRhZ0Vsc2UiLCJjYWxsVmlldyIsIm5ld1JlcyIsInN0b3JlVmlldyIsImlzVXBkYXRlIiwic3RvcmUiLCJjdHgiLCJoYXNPd25Qcm9wZXJ0eSIsImxpbmtlZCIsIl9jeHAiLCJzY29wZSIsImlzVG9wIiwiX29jcHMiLCJfdnciLCJfa2V5IiwiaW5kIiwidXBkYXRlVmFsdWUiLCJvYnNlcnZhYmxlIiwic2V0UHJvcGVydHkiLCJfY2VvIiwidW5zaGlmdCIsImN2dEFyZ3MiLCJkYXRhIiwiX3VjcCIsImdldFRlbXBsYXRlIiwidG1wbCIsImdldFJzYyIsIm9uRXJyb3IiLCJsaW5rQ3R4IiwiYXJnc0xlbiIsImJpbmRUbyIsImJvdW5kVGFnIiwiYm5kcyIsIl9sciIsImFyZ3MiLCJfYmQiLCJfbGMiLCJibmQiLCJ1bmxpbmtlZCIsImlubGluZSIsInRhZ05hbWUiLCJjb252ZXJ0Iiwib25BcnJheUNoYW5nZSIsImZsb3ciLCJ0YWdDdHhzIiwiX2lzIiwib25SZW5kZXIiLCJjb252ZXJ0QXJncyIsImJvdW5kIiwiYm91bmRBcmdzIiwiYmluZEZyb20iLCJzbGljZSIsImFyZ09yUHJvcCIsImNvbnRleHQiLCJjb252ZXJ0Qm91bmRBcmdzIiwiZ2V0UmVzb3VyY2UiLCJyZXNvdXJjZVR5cGUiLCJpdGVtTmFtZSIsInBhcmVudFZpZXciLCJiaW5kVG9PckJpbmRGcm9tIiwiYmluZEFycmF5IiwibSIsImlzTmFOIiwicGFyc2VJbnQiLCJ0YWdEZWYiLCJ0YWdzIiwiYXR0ciIsInBhcmVudFRhZyIsIm4iLCJpdGVtUmV0IiwidGFnQ3R4Q3R4IiwiY3R4UHJtIiwiaW5pdFZhbCIsImNvbnRlbnQiLCJjYWxsSW5pdCIsIm1hcERlZiIsInRoaXNNYXAiLCJiZEFyZ3MiLCJ0YWdEYXRhTWFwIiwiY29udGVudEN0eCIsImJpbmRGcm9tTGVuZ3RoIiwiYmluZFRvTGVuZ3RoIiwibGlua2VkRWxlbWVudCIsImRlZmF1bHRDdHgiLCJwYXJlbnRUbXBsIiwibGF0ZVJlbmRlciIsInBhcmFtcyIsInRtcGxzIiwicmVuZGVyQ29udGVudCIsImJuZEFyZ3MiLCJfZ2V0VG1wbCIsIl9jdHIiLCJpbml0IiwidGhzIiwidGhpcyIsImFyclZ3cyIsImRhdGFCb3VuZE9ubHkiLCJwYXJlbnRzIiwicGFyZW50VGFncyIsInJlbmRlcmluZyIsInJuZHIiLCJhcmdEZWZhdWx0IiwibGlua2VkQ3R4UGFyYW0iLCJmcm9tSW5kZXgiLCJ0b0luZGV4IiwiX2RmQXQiLCJub1Z3cyIsImN2dCIsInNyYyIsInVubWFwIiwidGd0IiwibGlua3MiLCJyZW5kZXJXaXRoVmlld3MiLCJodG1sIiwiY29udGVudFRtcGwiLCJwYXJlbnRWaWV3XyIsInNlbGZfIiwic2VsZiIsImlzQXJyYXkiLCJpZCIsInNjcCIsInB1c2giLCJzcGxpY2UiLCJfZ2V0T2IiLCJjb21waWxlQ2hpbGRSZXNvdXJjZXMiLCJzdG9yZU5hbWUiLCJzdG9yZU5hbWVzIiwicmVzb3VyY2VzIiwiYmFzZVRhZyIsImNvbXBpbGVkRGVmIiwiVGFnIiwiX3BhcmVudFRtcGwiLCJvcHRpb25zIiwibG9va3VwVGVtcGxhdGUiLCJjdXJyZW50TmFtZSIsIm5vZGVUeXBlIiwiZWxlbSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZ2V0QXR0cmlidXRlIiwidG1wbE5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJjb21waWxlZFRtcGwiLCJ0bXBsT3JNYXJrdXAiLCJfaHRtbCIsIm1hcmt1cCIsInRtcGxPYmplY3QiLCJyZXBsYWNlIiwiZ2V0RGVmYXVsdFZhbCIsImRlZmF1bHRWYWwiLCJjYWxsIiwiYWRkUGFyZW50UmVmIiwicmVmIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJ2aWV3TW9kZWxzIiwiZ2V0dGVycyIsInByb3RvIiwibWVyZ2UiLCJjbnN0ciIsImdldHRlckNvdW50IiwiJG9ic2VydmFibGUiLCJnZXR0ZXJOYW1lcyIsIkpzdlZtIiwidm0iLCJpdGVyYXRlIiwiYWN0aW9uIiwiZ2V0dGVyVHlwZSIsInBhcmVudFJlZiIsImoiLCJnZXR0ZXIiLCJKU09OIiwiY2hpbGRPYiIsImFyciIsIm1vZCIsImFzc2lnbmVkIiwibmV3TW9kQXJyIiwiayIsIm1vZGVsIiwicmVmcmVzaCIsImNvbmNhdCIsInVubWFwQXJyYXkiLCJtb2RlbEFyciIsImNoYXJBdCIsInByaXZGaWVsZCIsInNldCIsIkZ1bmN0aW9uIiwiaHRtbFRhZyIsIndyYXBNYXAiLCJfd20iLCJleGVjIiwidG9Mb3dlckNhc2UiLCJkaXYiLCJ0cmltIiwicmVnaXN0ZXJTdG9yZSIsInN0b3JlU2V0dGluZ3MiLCJ0aGVTdG9yZSIsInRoaXNTdG9yZSIsImNudCIsImdldFRndCIsInN0IiwiTWFwIiwiYmFzZU1hcCIsIm5vSXRlcmF0aW9uIiwiaXNUb3BSZW5kZXJDYWxsIiwicHJldkRhdGEiLCJwcmV2SW5kZXgiLCJyZXN1bHQiLCJ1c2VWaWV3cyIsIm5ld1ZpZXciLCJjaGlsZFZpZXciLCJpdGVtUmVzdWx0Iiwic3dhcENvbnRlbnQiLCJvdXRlck9uUmVuZGVyIiwiaXRlbVZhciIsIm5ld0N0eCIsIm5vTGlua2luZyIsIl93cnAiLCJubCIsImhlbHBlcnMiLCJjb250ZW50VmlldyIsImZhbGxiYWNrIiwiaXNMaW5rRXhwciIsImNvbnZlcnRCYWNrIiwiaGFzRWxzZSIsInB1c2hwcmVjZWRpbmdDb250ZW50Iiwic2hpZnQiLCJsb2MiLCJzdWJzdHIiLCJibG9ja1RhZ0NoZWNrIiwiYmxvY2siLCJwYXJzZVRhZyIsImFsbCIsImJpbmQiLCJjb2xvbiIsImNvZGVUYWciLCJzbGFzaCIsImJpbmQyIiwiY2xvc2VCbG9jayIsImxhdGUiLCJvcGVuVGFnTmFtZSIsImlzTGF0ZU9iIiwicGF0aEJpbmRpbmdzIiwiY3R4UHJvcHMiLCJwYXJhbXNBcmdzIiwicGFyYW1zUHJvcHMiLCJwYXJhbXNDdHhQcm9wcyIsInVzZVRyaWdnZXIiLCJjdXJyZW50Iiwic3Vic3RyaW5nIiwic3RhY2siLCJwb3AiLCJvbmVycm9yIiwiaXNDdHhQcm0iLCJrZXlUb2tlbiIsImtleVZhbHVlIiwiYXJnIiwicGFyYW0iLCJoYXNIYW5kbGVycyIsIm5ld05vZGUiLCJwYXJzZWRQYXJhbSIsImJpbmRpbmdzIiwiYXN0VG9wIiwiYnVpbGRDb2RlIiwic2V0UGF0aHMiLCJwYXRoc0FyciIsInBhdGhzIiwic2twIiwicGFyYW1TdHJ1Y3R1cmUiLCJwYXJ0cyIsInBhcnNlVG9rZW5zIiwibGZ0UHJuMCIsImxmdFBybiIsIm9wZXJhdG9yIiwiZXJyIiwiZXEiLCJwYXRoMiIsInBybiIsImNvbW1hIiwibGZ0UHJuMiIsImFwb3MiLCJxdW90IiwicnRQcm4iLCJydFBybkRvdCIsInBybjIiLCJzcGFjZSIsImZ1bGwiLCJwYXJzZVBhdGgiLCJhbGxQYXRoIiwibm90Iiwib2JqZWN0Iiwidmlld1Byb3BlcnR5IiwicGF0aFRva2VucyIsImxlYWZUb2tlbiIsInN1YlBhdGgiLCJiaW5kcyIsIm5hbWVkIiwiYmluZHRvIiwiX2pzdnRvIiwiYm5kQ3R4IiwiYmQiLCJ0aGVPYiIsIl9jcGZuIiwic2IiLCJwYXRoU3RhcnQiLCJwYXJlbkRlcHRoIiwiam9pbiIsImV4cHIiLCJleHByRm4iLCJuZXdPYiIsInJ0U3EiLCJhcG9zZWQiLCJxdW90ZWQiLCJibmRTdGFjayIsInBybSIsInRtcGxMaW5rcyIsImluZGV4T2YiLCJwYXJhbUluZGV4IiwiYm91bmROYW1lIiwiZm5DYWxsIiwiYXN0Iiwibm9kZSIsImhhc1RhZyIsImhhc0VuY29kZXIiLCJnZXRzVmFsIiwiaGFzQ252dCIsInVzZUNudnQiLCJ0bXBsQmluZGluZ3MiLCJib3VuZE9uRXJyU3RhcnQiLCJib3VuZE9uRXJyRW5kIiwidGFnUmVuZGVyIiwibmVzdGVkVG1wbHMiLCJuZXN0ZWRUbXBsIiwidGFnQW5kRWxzZXMiLCJuZXh0SXNFbHNlIiwib2xkQ29kZSIsImlzRWxzZSIsImlzR2V0VmFsIiwidGFnQ3R4Rm4iLCJ0YWdTdGFydCIsInRyaWdnZXIiLCJyZXRTdHJPcGVuIiwicmV0U3RyQ2xvc2UiLCJ0bXBsQmluZGluZ0tleSIsImNvbnZlcnRlcnMiLCJjb2RlIiwidG1wbE9wdGlvbnMiLCJkZWJ1ZyIsImRlYnVnTW9kZSIsInBhcmVudENvbnRleHQiLCJnZXRUYXJnZXRQcm9wcyIsInByb3BzQXJyIiwibm9GdW5jdGlvbnMiLCJpc0Z1bmN0aW9uIiwiZ2V0VGFyZ2V0U29ydGVkIiwibWFwcGVkIiwic3RhcnQiLCJlbmQiLCJwcm9wUGFyYW1zIiwiZmlsdGVyIiwic29ydCIsImRpcmVjdFNvcnQiLCJzdGVwIiwicmV2ZXJzZSIsInYiLCJhIiwiYiIsIm9uRmlsdGVyIiwic29ydGVkIiwicGFnZWQiLCIkZm5SZW5kZXIiLCJ0bXBsRWxlbSIsImpxdWVyeSIsImdldENoYXJFbnRpdHkiLCJjaCIsImNoYXJDb2RlQXQiLCJnZXRDaGFyRnJvbUVudGl0eSIsIm1hdGNoIiwiaHRtbEVuY29kZSIsInRleHQiLCJkYXRhRW5jb2RlIiwiZGF0YVVuZW5jb2RlIiwiZXhwYW5kbyIsInJlbmRlckZpbGUiLCJfX2V4cHJlc3MiLCJBcnJheSIsIm9iaiIsInRvU3RyaW5nIiwiX2pxIiwianEiLCJfanN2IiwiZG9uZSIsInNlbGVjdGVkIiwic29ydERhdGFNYXAiLCJjbG9uZWQiLCJzZXREYXRhTWFwIiwic3J0RmllbGQiLCJyYW5nZSIsImluY2x1ZGUiLCJkYmciLCJlbmNvZGUiLCJ1bmVuY29kZSIsInVybCIsImVuY29kZVVSSSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FD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QUFwQjtBQUNBeEUsVUFBUSxHQUFHLENBQUNoQixDQUFDLElBQUUyRCxHQUFKLEVBQVMwTyxPQUFwQjtBQUNBN1EsZ0JBQWMsQ0FBQ3FGLFVBQWYsQ0FBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0MsR0FBdEM7O0FBRUEsTUFBSWpELE9BQUosRUFBYTtBQUFFO0FBQ2RELE9BQUcsQ0FBQ3dGLEtBQUosQ0FBVTVFLEdBQVYsQ0FBYzZlLEdBQWQsQ0FBa0JwakIsQ0FBbEI7QUFDQTs7QUFDRCxTQUFPQSxDQUFDLElBQUkyRCxHQUFaO0FBQ0MsQ0F0MkZBLEVBczJGRWhGLE1BdDJGRixDQUFELEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvbWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbiAvLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBhdChTLCBpbmRleCkubGVuZ3RoIDogMSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjknIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5cbnZhciBTUEVDSUVTID0gd2tzKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICB9XG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KSA6IHVuZGVmaW5lZDtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgZGVmaW5lZCxcbiAgICAgIFNZTUJPTCxcbiAgICAgICcnW0tFWV0sXG4gICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgfVxuICAgICk7XG4gICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgdGFyZ2V0LCBDKSB7XG4gIHZhciBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICB2YXIgUDtcbiAgaWYgKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2YpIHtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciBxdW90ID0gL1wiL2c7XG4vLyBCLjIuMy4yLjEgQ3JlYXRlSFRNTChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSlcbnZhciBjcmVhdGVIVE1MID0gZnVuY3Rpb24gKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gIHZhciBTID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSk7XG4gIHZhciBwMSA9ICc8JyArIHRhZztcbiAgaWYgKGF0dHJpYnV0ZSAhPT0gJycpIHAxICs9ICcgJyArIGF0dHJpYnV0ZSArICc9XCInICsgU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG4gIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xufTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIGV4ZWMpIHtcbiAgdmFyIE8gPSB7fTtcbiAgT1tOQU1FXSA9IGV4ZWMoY3JlYXRlSFRNTCk7XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gJydbTkFNRV0oJ1wiJyk7XG4gICAgcmV0dXJuIHRlc3QgIT09IHRlc3QudG9Mb3dlckNhc2UoKSB8fCB0ZXN0LnNwbGl0KCdcIicpLmxlbmd0aCA+IDM7XG4gIH0pLCAnU3RyaW5nJywgTyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgJGZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcbnZhciAkUmVnRXhwID0gZ2xvYmFsLlJlZ0V4cDtcbnZhciBCYXNlID0gJFJlZ0V4cDtcbnZhciBwcm90byA9ICRSZWdFeHAucHJvdG90eXBlO1xudmFyIHJlMSA9IC9hL2c7XG52YXIgcmUyID0gL2EvZztcbi8vIFwibmV3XCIgY3JlYXRlcyBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnZ3kgaGVyZVxudmFyIENPUlJFQ1RfTkVXID0gbmV3ICRSZWdFeHAocmUxKSAhPT0gcmUxO1xuXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAoIUNPUlJFQ1RfTkVXIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZTJbcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyldID0gZmFsc2U7XG4gIC8vIFJlZ0V4cCBjb25zdHJ1Y3RvciBjYW4gYWx0ZXIgZmxhZ3MgYW5kIElzUmVnRXhwIHdvcmtzIGNvcnJlY3Qgd2l0aCBAQG1hdGNoXG4gIHJldHVybiAkUmVnRXhwKHJlMSkgIT0gcmUxIHx8ICRSZWdFeHAocmUyKSA9PSByZTIgfHwgJFJlZ0V4cChyZTEsICdpJykgIT0gJy9hL2knO1xufSkpKSB7XG4gICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZikge1xuICAgIHZhciB0aVJFID0gdGhpcyBpbnN0YW5jZW9mICRSZWdFeHA7XG4gICAgdmFyIHBpUkUgPSBpc1JlZ0V4cChwKTtcbiAgICB2YXIgZmlVID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhdGlSRSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcFxuICAgICAgOiBpbmhlcml0SWZSZXF1aXJlZChDT1JSRUNUX05FV1xuICAgICAgICA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZilcbiAgICAgICAgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZilcbiAgICAgICwgdGlSRSA/IHRoaXMgOiBwcm90bywgJFJlZ0V4cCk7XG4gIH07XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBrZXkgaW4gJFJlZ0V4cCB8fCBkUCgkUmVnRXhwLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQmFzZVtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoaXQpIHsgQmFzZVtrZXldID0gaXQ7IH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IGdPUE4oQmFzZSksIGkgPSAwOyBrZXlzLmxlbmd0aCA+IGk7KSBwcm94eShrZXlzW2krK10pO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG4gICRSZWdFeHAucHJvdG90eXBlID0gcHJvdG87XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCAnUmVnRXhwJywgJFJlZ0V4cCk7XG59XG5cbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoJ1JlZ0V4cCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xucmVxdWlyZSgnLi9fZXhwb3J0Jykoe1xuICB0YXJnZXQ6ICdSZWdFeHAnLFxuICBwcm90bzogdHJ1ZSxcbiAgZm9yY2VkOiByZWdleHBFeGVjICE9PSAvLi8uZXhlY1xufSwge1xuICBleGVjOiByZWdleHBFeGVjXG59KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCZgJ118XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCZgJ118XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZm4uY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRyZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICB9XG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICAgIHZhciBtYXRjaGVkID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IG1heChtaW4odG9JbnRlZ2VyKHJlc3VsdC5pbmRleCksIFMubGVuZ3RoKSwgMCk7XG4gICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgLy8gICBjYXB0dXJlcyA9IHJlc3VsdC5zbGljZSgxKS5tYXAobWF5YmVUb1N0cmluZylcbiAgICAgICAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiBgbmF0aXZlU2xpY2UuY2FsbChyZXN1bHQsIDEsIHJlc3VsdC5sZW5ndGgpYCAoY2FsbGVkIGluXG4gICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgLy8gY2F1c2VzIGEgY3Jhc2ggKGh0dHBzOi8vcGFzdGViaW4uY29tL04yMVF6ZVFBKSB3aGVuIHRyeWluZyB0byBkZWJ1ZyBpdC5cbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIGNhcHR1cmVzLnB1c2gobWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICBpZiAoZnVuY3Rpb25hbFJlcGxhY2UpIHtcbiAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gW21hdGNoZWRdLmNvbmNhdChjYXB0dXJlcywgcG9zaXRpb24sIFMpO1xuICAgICAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHJlcGxhY2VyQXJncy5wdXNoKG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFN0cmluZyhyZXBsYWNlVmFsdWUuYXBwbHkodW5kZWZpbmVkLCByZXBsYWNlckFyZ3MpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICBuZXh0U291cmNlUG9zaXRpb24gPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW11bGF0ZWRSZXN1bHQgKyBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbik7XG4gICAgfVxuICBdO1xuXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gICAgfVxuICAgIHJldHVybiAkcmVwbGFjZS5jYWxsKHJlcGxhY2VtZW50LCBzeW1ib2xzLCBmdW5jdGlvbiAobWF0Y2gsIGNoKSB7XG4gICAgICB2YXIgY2FwdHVyZTtcbiAgICAgIHN3aXRjaCAoY2guY2hhckF0KDApKSB7XG4gICAgICAgIGNhc2UgJyQnOiByZXR1cm4gJyQnO1xuICAgICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICAgIGNhc2UgJ2AnOiByZXR1cm4gc3RyLnNsaWNlKDAsIHBvc2l0aW9uKTtcbiAgICAgICAgY2FzZSBcIidcIjogcmV0dXJuIHN0ci5zbGljZSh0YWlsUG9zKTtcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbY2guc2xpY2UoMSwgLTEpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICAgIHZhciBuID0gK2NoO1xuICAgICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICB2YXIgZiA9IGZsb29yKG4gLyAxMCk7XG4gICAgICAgICAgICBpZiAoZiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcHR1cmUgPT09IHVuZGVmaW5lZCA/ICcnIDogY2FwdHVyZTtcbiAgICB9KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjYWxsUmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRtaW4gPSBNYXRoLm1pbjtcbnZhciAkcHVzaCA9IFtdLnB1c2g7XG52YXIgJFNQTElUID0gJ3NwbGl0JztcbnZhciBMRU5HVEggPSAnbGVuZ3RoJztcbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG52YXIgTUFYX1VJTlQzMiA9IDB4ZmZmZmZmZmY7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IFJlZ0V4cChNQVhfVUlOVDMyLCAneScpOyB9KTtcblxuLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQ7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSByZXR1cm4gJHNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXhwRXhlYy5jYWxsKHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogJHNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gJHNwbGl0O1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09ICRzcGxpdCk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgdmFyIHAgPSAwO1xuICAgICAgdmFyIHEgPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAoZSA9ICRtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBBLnB1c2goeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRmbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbnZhciBkZWZpbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbn07XG5cbi8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbmlmIChyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KSkge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG59IGVsc2UgaWYgKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORykge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjEwIFN0cmluZy5wcm90b3R5cGUubGluayh1cmwpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdsaW5rJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGxpbmsodXJsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnaHJlZicsIHVybCk7XG4gIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjEzIFN0cmluZy5wcm90b3R5cGUuc3ViKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ3N1YicsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzdWIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N1YicsICcnLCAnJyk7XG4gIH07XG59KTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnN0IGpzcmVuZGVyID0gcmVxdWlyZSgnanNyZW5kZXInKVxuXG4gIGNvbnN0IHNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1tZXNzYWdlc19fY29udGFpbmVyIFtkYXRhLXBlcmZlY3Qtc2Nyb2xsYmFyXScpXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gMTZcbiAgfVxuXG4gIDtbJ0RPTUNvbnRlbnRMb2FkZWQnLCAnbG9hZCddLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihlLCBzY3JvbGwpXG4gIH0pXG5cbiAgY29uc3QgYWRkTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZXMnKVxuICAgIGNvbnN0IHRlbXBsYXRlID0ganNyZW5kZXIudGVtcGxhdGVzKCcjdGVtcGxhdGUtbWVzc2FnZScpXG4gICAgY29uc3QgbWVzc2FnZU5vZGVUZXh0ID0gdGVtcGxhdGUucmVuZGVyKHtcbiAgICAgIG5hbWU6ICdMYXphIEJvZ2RhbicsXG4gICAgICBhdmF0YXI6ICdhc3NldHMvaW1hZ2VzL3Blb3BsZS8xMTAvZ3V5LTYuanBnJyxcbiAgICAgIGRhdGU6ICdqdXN0IG5vdycsXG4gICAgICBtZXNzYWdlXG4gICAgfSlcblxuICAgIGxldCBtZXNzYWdlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KG1lc3NhZ2VOb2RlVGV4dClcbiAgICBtZXNzYWdlcy5hcHBlbmRDaGlsZChtZXNzYWdlTm9kZSlcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlLXJlcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG5cbiAgICBhZGRNZXNzYWdlKGZpZWxkLnZhbHVlKVxuICAgIGZpZWxkLnZhbHVlID0gJydcblxuICAgIHNjcm9sbCgpXG4gIH0pXG5cbn0pKCkiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyohIEpzUmVuZGVyIHYxLjAuNjogaHR0cDovL2pzdmlld3MuY29tLyNqc3JlbmRlciAqL1xuLyohICoqVkVSU0lPTiBGT1IgV0VCKiogKEZvciBOT0RFLkpTIHNlZSBodHRwOi8vanN2aWV3cy5jb20vZG93bmxvYWQvanNyZW5kZXItbm9kZS5qcykgKi9cbi8qXG4gKiBCZXN0LW9mLWJyZWVkIHRlbXBsYXRpbmcgaW4gYnJvd3NlciBvciBvbiBOb2RlLmpzLlxuICogRG9lcyBub3QgcmVxdWlyZSBqUXVlcnksIG9yIEhUTUwgRE9NXG4gKiBJbnRlZ3JhdGVzIHdpdGggSnNWaWV3cyAoaHR0cDovL2pzdmlld3MuY29tLyNqc3ZpZXdzKVxuICpcbiAqIENvcHlyaWdodCAyMDIwLCBCb3JpcyBNb29yZVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8vanNoaW50IC1XMDE4LCAtVzA0MSwgLVcxMjBcblxuKGZ1bmN0aW9uKGZhY3RvcnksIGdsb2JhbCkge1xuXHQvLyBnbG9iYWwgdmFyIGlzIHRoZSB0aGlzIG9iamVjdCwgd2hpY2ggaXMgd2luZG93IHdoZW4gcnVubmluZyBpbiB0aGUgdXN1YWwgYnJvd3NlciBlbnZpcm9ubWVudFxuXHR2YXIgJCA9IGdsb2JhbC5qUXVlcnk7XG5cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7IC8vIENvbW1vbkpTIGUuZy4gQnJvd3NlcmlmeVxuXHRcdG1vZHVsZS5leHBvcnRzID0gJFxuXHRcdFx0PyBmYWN0b3J5KGdsb2JhbCwgJClcblx0XHRcdDogZnVuY3Rpb24oJCkgeyAvLyBJZiBubyBnbG9iYWwgalF1ZXJ5LCB0YWtlIG9wdGlvbmFsIGpRdWVyeSBwYXNzZWQgYXMgcGFyYW1ldGVyOiByZXF1aXJlKCdqc3JlbmRlcicpKGpRdWVyeSlcblx0XHRcdFx0aWYgKCQgJiYgISQuZm4pIHtcblx0XHRcdFx0XHR0aHJvdyBcIlByb3ZpZGUgalF1ZXJ5IG9yIG51bGxcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFjdG9yeShnbG9iYWwsICQpO1xuXHRcdFx0fTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgeyAvLyBBTUQgc2NyaXB0IGxvYWRlciwgZS5nLiBSZXF1aXJlSlNcblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZmFjdG9yeShnbG9iYWwpO1xuXHRcdH0pO1xuXHR9IGVsc2UgeyAvLyBCcm93c2VyIHVzaW5nIHBsYWluIDxzY3JpcHQ+IHRhZ1xuXHRcdGZhY3RvcnkoZ2xvYmFsLCBmYWxzZSk7XG5cdH1cbn0gKFxuXG4vLyBmYWN0b3J5IChmb3IganNyZW5kZXIuanMpXG5mdW5jdGlvbihnbG9iYWwsICQpIHtcblwidXNlIHN0cmljdFwiO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09IFRvcC1sZXZlbCB2YXJzID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIGdsb2JhbCB2YXIgaXMgdGhlIHRoaXMgb2JqZWN0LCB3aGljaCBpcyB3aW5kb3cgd2hlbiBydW5uaW5nIGluIHRoZSB1c3VhbCBicm93c2VyIGVudmlyb25tZW50XG52YXIgc2V0R2xvYmFscyA9ICQgPT09IGZhbHNlOyAvLyBPbmx5IHNldCBnbG9iYWxzIGlmIHNjcmlwdCBibG9jayBpbiBicm93c2VyIChub3QgQU1EIGFuZCBub3QgQ29tbW9uSlMpXG5cbiQgPSAkICYmICQuZm4gPyAkIDogZ2xvYmFsLmpRdWVyeTsgLy8gJCBpcyBqUXVlcnkgcGFzc2VkIGluIGJ5IENvbW1vbkpTIGxvYWRlciAoQnJvd3NlcmlmeSksIG9yIGdsb2JhbCBqUXVlcnkuXG5cbnZhciB2ZXJzaW9uTnVtYmVyID0gXCJ2MS4wLjZcIixcblx0anN2U3RvcmVOYW1lLCByVGFnLCByVG1wbFN0cmluZywgdG9wVmlldywgJHZpZXdzLCAkZXhwYW5kbyxcblx0X29jcCA9IFwiX29jcFwiLCAvLyBPYnNlcnZhYmxlIGNvbnRleHR1YWwgcGFyYW1ldGVyXG5cbi8vVE9ET1x0dG1wbEZuc0NhY2hlID0ge30sXG5cdCRpc0Z1bmN0aW9uLCAkaXNBcnJheSwgJHRlbXBsYXRlcywgJGNvbnZlcnRlcnMsICRoZWxwZXJzLCAkdGFncywgJHN1YiwgJHN1YlNldHRpbmdzLCAkc3ViU2V0dGluZ3NBZHZhbmNlZCwgJHZpZXdzU2V0dGluZ3MsXG5cdGRlbGltT3BlbkNoYXIwLCBkZWxpbU9wZW5DaGFyMSwgZGVsaW1DbG9zZUNoYXIwLCBkZWxpbUNsb3NlQ2hhcjEsIGxpbmtDaGFyLCBzZXR0aW5nLCBiYXNlT25FcnJvcixcblxuXHRpc1JlbmRlckNhbGwsXG5cdHJOZXdMaW5lID0gL1sgXFx0XSooXFxyXFxufFxcbnxcXHIpL2csXG5cdHJVbmVzY2FwZVF1b3RlcyA9IC9cXFxcKFsnXCJdKS9nLFxuXHRyRXNjYXBlUXVvdGVzID0gL1snXCJcXFxcXS9nLCAvLyBFc2NhcGUgcXVvdGVzIGFuZCBcXCBjaGFyYWN0ZXJcblx0ckJ1aWxkSGFzaCA9IC8oPzpcXHgwOHxeKShvbmVycm9yOik/KD86KH4/KSgoW1xcdyQuXSspOik/KFteXFx4MDhdKykpXFx4MDgoLCk/KFteXFx4MDhdKykvZ2ksXG5cdHJUZXN0RWxzZUlmID0gL15pZlxccy8sXG5cdHJGaXJzdEVsZW0gPSAvPChcXHcrKVs+XFxzXS8sXG5cdHJBdHRyRW5jb2RlID0gL1tcXHgwMGA+PFwiJyY9XS9nLCAvLyBJbmNsdWRlcyA+IGVuY29kaW5nIHNpbmNlIHJDb252ZXJ0TWFya2VycyBpbiBKc1ZpZXdzIGRvZXMgbm90IHNraXAgPiBjaGFyYWN0ZXJzIGluIGF0dHJpYnV0ZSBzdHJpbmdzXG5cdHJJc0h0bWwgPSAvW1xceDAwYD48XFxcIicmPV0vLFxuXHRySGFzSGFuZGxlcnMgPSAvXm9uW0EtWl18XmNvbnZlcnQoQmFjayk/JC8sXG5cdHJXcmFwcGVkSW5WaWV3TWFya2VyID0gL15cXCNcXGQrX2BbXFxzXFxTXSpcXC9cXGQrX2AkLyxcblx0ckh0bWxFbmNvZGUgPSByQXR0ckVuY29kZSxcblx0ckRhdGFFbmNvZGUgPSAvWyY8Pl0vZyxcblx0ckRhdGFVbmVuY29kZSA9IC8mKGFtcHxndHxsdCk7L2csXG5cdHJCcmFja2V0UXVvdGUgPSAvXFxbWydcIl0/fFsnXCJdP1xcXS9nLFxuXHR2aWV3SWQgPSAwLFxuXHRjaGFyRW50aXRpZXMgPSB7XG5cdFx0XCImXCI6IFwiJmFtcDtcIixcblx0XHRcIjxcIjogXCImbHQ7XCIsXG5cdFx0XCI+XCI6IFwiJmd0O1wiLFxuXHRcdFwiXFx4MDBcIjogXCImIzA7XCIsXG5cdFx0XCInXCI6IFwiJiMzOTtcIixcblx0XHQnXCInOiBcIiYjMzQ7XCIsXG5cdFx0XCJgXCI6IFwiJiM5NjtcIixcblx0XHRcIj1cIjogXCImIzYxO1wiXG5cdH0sXG5cdGNoYXJzRnJvbUVudGl0aWVzICA9IHtcblx0XHRhbXA6IFwiJlwiLFxuXHRcdGd0OiBcIj5cIixcblx0XHRsdDogXCI8XCJcblx0fSxcblx0SFRNTCA9IFwiaHRtbFwiLFxuXHRPQkpFQ1QgPSBcIm9iamVjdFwiLFxuXHR0bXBsQXR0ciA9IFwiZGF0YS1qc3YtdG1wbFwiLFxuXHRqc3ZUbXBsID0gXCJqc3ZUbXBsXCIsXG5cdGluZGV4U3RyID0gXCJGb3IgI2luZGV4IGluIG5lc3RlZCBibG9jayB1c2UgI2dldEluZGV4KCkuXCIsXG5cdCRyZW5kZXIgPSB7fSxcblxuXHRqc3IgPSBnbG9iYWwuanNyZW5kZXIsXG5cdGpzclRvSnEgPSBqc3IgJiYgJCAmJiAhJC5yZW5kZXIsIC8vIEpzUmVuZGVyIGFscmVhZHkgbG9hZGVkLCB3aXRob3V0IGpRdWVyeS4gYnV0IHdlIHdpbGwgcmUtbG9hZCBpdCBub3cgdG8gYXR0YWNoIHRvIGpRdWVyeVxuXG5cdGpzdlN0b3JlcyA9IHtcblx0XHR0ZW1wbGF0ZToge1xuXHRcdFx0Y29tcGlsZTogY29tcGlsZVRtcGxcblx0XHR9LFxuXHRcdHRhZzoge1xuXHRcdFx0Y29tcGlsZTogY29tcGlsZVRhZ1xuXHRcdH0sXG5cdFx0dmlld01vZGVsOiB7XG5cdFx0XHRjb21waWxlOiBjb21waWxlVmlld01vZGVsXG5cdFx0fSxcblx0XHRoZWxwZXI6IHt9LFxuXHRcdGNvbnZlcnRlcjoge31cblx0fTtcblxuXHQvLyB2aWV3cyBvYmplY3QgKCQudmlld3MgaWYgalF1ZXJ5IGlzIGxvYWRlZCwganNyZW5kZXIudmlld3MgaWYgbm8galF1ZXJ5LCBlLmcuIGluIE5vZGUuanMpXG5cdCR2aWV3cyA9IHtcblx0XHRqc3ZpZXdzOiB2ZXJzaW9uTnVtYmVyLFxuXHRcdHN1Yjoge1xuXHRcdFx0Ly8gc3Vic2NyaXB0aW9uLCBlLmcuIEpzVmlld3MgaW50ZWdyYXRpb25cblx0XHRcdHJQYXRoOiAvXighKj8pKD86bnVsbHx0cnVlfGZhbHNlfFxcZFtcXGQuXSp8KFtcXHckXSt8XFwufH4oW1xcdyRdKyl8Iyh2aWV3fChbXFx3JF0rKSk/KShbXFx3JC5eXSo/KSg/OlsuW15dKFtcXHckXSspXFxdPyk/KSQvZyxcblx0XHRcdC8vICAgICAgICBub3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0ICAgICBoZWxwZXIgICAgdmlldyAgdmlld1Byb3BlcnR5IHBhdGhUb2tlbnMgICAgICBsZWFmVG9rZW5cblxuXHRcdFx0clBybTogLyhcXCgpKD89XFxzKlxcKCl8KD86KFsoW10pXFxzKik/KD86KFxcXj8pKH4/W1xcdyQuXl0rKT9cXHMqKChcXCtcXCt8LS0pfFxcK3wtfH4oPyFbXFx3JF0pfCYmfFxcfFxcfHw9PT18IT09fD09fCE9fDw9fD49fFs8PiUqOj9cXC9dfCg9KSlcXHMqfCghKj8oQCk/WyN+XT9bXFx3JC5eXSspKFsoW10pPyl8KCxcXHMqKXwoXFwoPylcXFxcPyg/OignKXwoXCIpKXwoPzpcXHMqKChbKVxcXV0pKD89Wy5eXXxcXHMqJHxbXihbXSl8WylcXF1dKShbKFtdPykpfChcXHMrKS9nLFxuXHRcdFx0Ly8gICBsZnRQcm4wICAgICAgICAgICBsZnRQcm4gICAgICAgICBib3VuZCAgICAgcGF0aCAgICAgICAgICAgICAgIG9wZXJhdG9yICAgICBlcnIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcSAgICAgIHBhdGgyIGxhdGUgICAgICAgICAgICBwcm4gICAgICBjb21tYSAgbGZ0UHJuMiAgIGFwb3MgcXVvdCAgICAgICAgcnRQcm4gIHJ0UHJuRG90ICAgICAgICAgICAgICAgICAgcHJuMiAgICAgc3BhY2VcblxuXHRcdFx0VmlldzogVmlldyxcblx0XHRcdEVycjogSnNWaWV3c0Vycm9yLFxuXHRcdFx0dG1wbEZuOiB0bXBsRm4sXG5cdFx0XHRwYXJzZTogcGFyc2VQYXJhbXMsXG5cdFx0XHRleHRlbmQ6ICRleHRlbmQsXG5cdFx0XHRleHRlbmRDdHg6IGV4dGVuZEN0eCxcblx0XHRcdHN5bnRheEVycjogc3ludGF4RXJyb3IsXG5cdFx0XHRvblN0b3JlOiB7XG5cdFx0XHRcdHRlbXBsYXRlOiBmdW5jdGlvbihuYW1lLCBpdGVtKSB7XG5cdFx0XHRcdFx0aWYgKGl0ZW0gPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSAkcmVuZGVyW25hbWVdO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAobmFtZSkge1xuXHRcdFx0XHRcdFx0JHJlbmRlcltuYW1lXSA9IGl0ZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YWRkU2V0dGluZzogYWRkU2V0dGluZyxcblx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdGFsbG93Q29kZTogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRhZHZTZXQ6IG5vb3AsIC8vIFVwZGF0ZSBhZHZhbmNlZCBzZXR0aW5nc1xuXHRcdFx0X3RocDogdGFnSGFuZGxlcnNGcm9tUHJvcHMsXG5cdFx0XHRfZ206IGdldE1ldGhvZCxcblx0XHRcdF90ZzogZnVuY3Rpb24oKSB7fSwgLy8gQ29uc3RydWN0b3IgZm9yIHRhZ0RlZlxuXHRcdFx0X2NudnQ6IGNvbnZlcnRWYWwsXG5cdFx0XHRfdGFnOiByZW5kZXJUYWcsXG5cdFx0XHRfZXI6IGVycm9yLFxuXHRcdFx0X2Vycjogb25SZW5kZXJFcnJvcixcblx0XHRcdF9jcDogcmV0VmFsLCAvLyBHZXQgb2JzZXJ2YWJsZSBjb250ZXh0dWFsIHBhcmFtZXRlcnMgKG9yIHByb3BlcnRpZXMpIH5mb289ZXhwci4gSW4gSnNSZW5kZXIsIHNpbXBseSByZXR1cm5zIHZhbC5cblx0XHRcdF9zcTogZnVuY3Rpb24odG9rZW4pIHtcblx0XHRcdFx0aWYgKHRva2VuID09PSBcImNvbnN0cnVjdG9yXCIpIHtcblx0XHRcdFx0XHRzeW50YXhFcnJvcihcIlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdG9rZW47XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzZXR0aW5nczoge1xuXHRcdFx0ZGVsaW1pdGVyczogJHZpZXdzRGVsaW1pdGVycyxcblx0XHRcdGFkdmFuY2VkOiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0XHQ/IChcblx0XHRcdFx0XHRcdFx0JGV4dGVuZCgkc3ViU2V0dGluZ3NBZHZhbmNlZCwgdmFsdWUpLFxuXHRcdFx0XHRcdFx0XHQkc3ViLmFkdlNldCgpLFxuXHRcdFx0XHRcdFx0XHQkdmlld3NTZXR0aW5nc1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0OiAkc3ViU2V0dGluZ3NBZHZhbmNlZDtcblx0XHRcdFx0fVxuXHRcdH0sXG5cdFx0bWFwOiBkYXRhTWFwICAgIC8vIElmIGpzT2JzZXJ2YWJsZSBsb2FkZWQgZmlyc3QsIHVzZSB0aGF0IGRlZmluaXRpb24gb2YgZGF0YU1hcFxuXHR9O1xuXG5mdW5jdGlvbiBnZXREZXJpdmVkTWV0aG9kKGJhc2VNZXRob2QsIG1ldGhvZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHJldCxcblx0XHRcdHRhZyA9IHRoaXMsXG5cdFx0XHRwcmV2QmFzZSA9IHRhZy5iYXNlO1xuXG5cdFx0dGFnLmJhc2UgPSBiYXNlTWV0aG9kOyAvLyBXaXRoaW4gbWV0aG9kIGNhbGwsIGNhbGxpbmcgdGhpcy5iYXNlIHdpbGwgY2FsbCB0aGUgYmFzZSBtZXRob2Rcblx0XHRyZXQgPSBtZXRob2QuYXBwbHkodGFnLCBhcmd1bWVudHMpOyAvLyBDYWxsIHRoZSBtZXRob2Rcblx0XHR0YWcuYmFzZSA9IHByZXZCYXNlOyAvLyBSZXBsYWNlIHRoaXMuYmFzZSB0byBiZSB0aGUgYmFzZSBtZXRob2Qgb2YgdGhlIHByZXZpb3VzIGNhbGwsIGZvciBjaGFpbmVkIGNhbGxzXG5cdFx0cmV0dXJuIHJldDtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0TWV0aG9kKGJhc2VNZXRob2QsIG1ldGhvZCkge1xuXHQvLyBGb3IgZGVyaXZlZCBtZXRob2RzIChvciBoYW5kbGVycyBkZWNsYXJlZCBkZWNsYXJhdGl2ZWx5IGFzIGluIHt7OmZvbyBvbkNoYW5nZT1+Zm9vQ2hhbmdlZH19IHJlcGxhY2UgYnkgYSBkZXJpdmVkIG1ldGhvZCwgdG8gYWxsb3cgdXNpbmcgdGhpcy5iYXNlKC4uLilcblx0Ly8gb3IgdGhpcy5iYXNlQXBwbHkoYXJndW1lbnRzKSB0byBjYWxsIHRoZSBiYXNlIGltcGxlbWVudGF0aW9uLiAoRXF1aXZhbGVudCB0byB0aGlzLl9zdXBlciguLi4pIGFuZCB0aGlzLl9zdXBlckFwcGx5KGFyZ3VtZW50cykgaW4galF1ZXJ5IFVJKVxuXHRpZiAoJGlzRnVuY3Rpb24obWV0aG9kKSkge1xuXHRcdG1ldGhvZCA9IGdldERlcml2ZWRNZXRob2QoXG5cdFx0XHRcdCFiYXNlTWV0aG9kXG5cdFx0XHRcdFx0PyBub29wIC8vIG5vIGJhc2UgbWV0aG9kIGltcGxlbWVudGF0aW9uLCBzbyB1c2Ugbm9vcCBhcyBiYXNlIG1ldGhvZFxuXHRcdFx0XHRcdDogYmFzZU1ldGhvZC5fZFxuXHRcdFx0XHRcdFx0PyBiYXNlTWV0aG9kIC8vIGJhc2VNZXRob2QgaXMgYSBkZXJpdmVkIG1ldGhvZCwgc28gdXNlIGl0XG5cdFx0XHRcdFx0XHQ6IGdldERlcml2ZWRNZXRob2Qobm9vcCwgYmFzZU1ldGhvZCksIC8vIGJhc2VNZXRob2QgaXMgbm90IGRlcml2ZWQgc28gbWFrZSBpdHMgYmFzZSBtZXRob2QgYmUgdGhlIG5vb3AgbWV0aG9kXG5cdFx0XHRcdG1ldGhvZFxuXHRcdFx0KTtcblx0XHRtZXRob2QuX2QgPSAoYmFzZU1ldGhvZCAmJiBiYXNlTWV0aG9kLl9kIHx8IDApICsgMTsgLy8gQWRkIGZsYWcgZm9yIGRlcml2ZWQgbWV0aG9kIChpbmNyZW1lbnRlZCBmb3IgZGVyaXZlZCBvZiBkZXJpdmVkLi4uKVxuXHR9XG5cdHJldHVybiBtZXRob2Q7XG59XG5cbmZ1bmN0aW9uIHRhZ0hhbmRsZXJzRnJvbVByb3BzKHRhZywgdGFnQ3R4KSB7XG5cdHZhciBwcm9wLFxuXHRcdHByb3BzID0gdGFnQ3R4LnByb3BzO1xuXHRmb3IgKHByb3AgaW4gcHJvcHMpIHtcblx0XHRpZiAockhhc0hhbmRsZXJzLnRlc3QocHJvcCkgJiYgISh0YWdbcHJvcF0gJiYgdGFnW3Byb3BdLmZpeCkpIHsgLy8gRG9uJ3Qgb3ZlcnJpZGUgaGFuZGxlcnMgd2l0aCBmaXggZXhwYW5kbyAodXNlZCBpbiBkYXRlcGlja2VyIGFuZCBzcGlubmVyKVxuXHRcdFx0dGFnW3Byb3BdID0gcHJvcCAhPT0gXCJjb252ZXJ0XCIgPyBnZXRNZXRob2QodGFnLmNvbnN0cnVjdG9yLnByb3RvdHlwZVtwcm9wXSwgcHJvcHNbcHJvcF0pIDogcHJvcHNbcHJvcF07XG5cdFx0XHQvLyBDb3B5IG92ZXIgdGhlIG9uRm9vIHByb3BzLCBjb252ZXJ0IGFuZCBjb252ZXJ0QmFjayBmcm9tIHRhZ0N0eC5wcm9wcyB0byB0YWcgKG92ZXJyaWRlcyB2YWx1ZXMgaW4gdGFnRGVmKS5cblx0XHRcdC8vIE5vdGU6IHVuc3VwcG9ydGVkIHNjZW5hcmlvOiBpZiBoYW5kbGVycyBhcmUgZHluYW1pY2FsbHkgYWRkZWQgXm9uRm9vPWV4cHJlc3Npb24gdGhpcyB3aWxsIHdvcmssIGJ1dCBkeW5hbWljYWxseSByZW1vdmluZyB3aWxsIG5vdCB3b3JrLlxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiByZXRWYWwodmFsKSB7XG5cdHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7XG5cdHJldHVybiBcIlwiO1xufVxuXG5mdW5jdGlvbiBkYmdCcmVhayh2YWwpIHtcblx0Ly8gVXNhZ2UgZXhhbXBsZXM6IHt7ZGJnOi4uLn19LCB7ezp+ZGJnKC4uLil9fSwge3tkYmcgLi4uL319LCB7Xntmb3IgLi4uIG9uQWZ0ZXJMaW5rPX5kYmd9fSBldGMuXG5cdHRyeSB7XG5cdFx0Y29uc29sZS5sb2coXCJKc1JlbmRlciBkYmcgYnJlYWtwb2ludDogXCIgKyB2YWwpO1xuXHRcdHRocm93IFwiZGJnIGJyZWFrcG9pbnRcIjsgLy8gVG8gYnJlYWsgaGVyZSwgc3RvcCBvbiBjYXVnaHQgZXhjZXB0aW9ucy5cblx0fVxuXHRjYXRjaCAoZSkge31cblx0cmV0dXJuIHRoaXMuYmFzZSA/IHRoaXMuYmFzZUFwcGx5KGFyZ3VtZW50cykgOiB2YWw7XG59XG5cbmZ1bmN0aW9uIEpzVmlld3NFcnJvcihtZXNzYWdlKSB7XG5cdC8vIEVycm9yIGV4Y2VwdGlvbiB0eXBlIGZvciBKc1ZpZXdzL0pzUmVuZGVyXG5cdC8vIE92ZXJyaWRlIG9mICQudmlld3Muc3ViLkVycm9yIGlzIHBvc3NpYmxlXG5cdHRoaXMubmFtZSA9ICgkLmxpbmsgPyBcIkpzVmlld3NcIiA6IFwiSnNSZW5kZXJcIikgKyBcIiBFcnJvclwiO1xuXHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8IHRoaXMubmFtZTtcbn1cblxuZnVuY3Rpb24gJGV4dGVuZCh0YXJnZXQsIHNvdXJjZSkge1xuXHRpZiAodGFyZ2V0KSB7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBzb3VyY2UpIHtcblx0XHRcdHRhcmdldFtuYW1lXSA9IHNvdXJjZVtuYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxufVxuXG4oSnNWaWV3c0Vycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpKS5jb25zdHJ1Y3RvciA9IEpzVmlld3NFcnJvcjtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PSBUb3AtbGV2ZWwgZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PVxuLy8gdmlld3MuZGVsaW1pdGVyc1xuLy89PT09PT09PT09PT09PT09PT09XG5cblx0LyoqXG5cdCogU2V0IHRoZSB0YWcgb3BlbmluZyBhbmQgY2xvc2luZyBkZWxpbWl0ZXJzIGFuZCAnbGluaycgY2hhcmFjdGVyLiBEZWZhdWx0IGlzIFwie3tcIiwgXCJ9fVwiIGFuZCBcIl5cIlxuXHQqIG9wZW5DaGFycywgY2xvc2VDaGFyczogb3BlbmluZyBhbmQgY2xvc2luZyBzdHJpbmdzLCBlYWNoIHdpdGggdHdvIGNoYXJhY3RlcnNcblx0KiAkLnZpZXdzLnNldHRpbmdzLmRlbGltaXRlcnMoLi4uKVxuXHQqXG5cdCogQHBhcmFtIHtzdHJpbmd9ICAgb3BlbkNoYXJzXG5cdCogQHBhcmFtIHtzdHJpbmd9ICAgW2Nsb3NlQ2hhcnNdXG5cdCogQHBhcmFtIHtzdHJpbmd9ICAgW2xpbmtdXG5cdCogQHJldHVybnMge1NldHRpbmdzfVxuXHQqXG5cdCogR2V0IGRlbGltaXRlcnNcblx0KiBkZWxpbXNBcnJheSA9ICQudmlld3Muc2V0dGluZ3MuZGVsaW1pdGVycygpXG5cdCpcblx0KiBAcmV0dXJucyB7c3RyaW5nW119XG5cdCovXG5mdW5jdGlvbiAkdmlld3NEZWxpbWl0ZXJzKG9wZW5DaGFycywgY2xvc2VDaGFycywgbGluaykge1xuXHRpZiAoIW9wZW5DaGFycykge1xuXHRcdHJldHVybiAkc3ViU2V0dGluZ3MuZGVsaW1pdGVycztcblx0fVxuXHRpZiAoJGlzQXJyYXkob3BlbkNoYXJzKSkge1xuXHRcdHJldHVybiAkdmlld3NEZWxpbWl0ZXJzLmFwcGx5KCR2aWV3cywgb3BlbkNoYXJzKTtcblx0fVxuXHRsaW5rQ2hhciA9IGxpbmsgPyBsaW5rWzBdIDogbGlua0NoYXI7XG5cdGlmICghL14oXFxXfF8pezV9JC8udGVzdChvcGVuQ2hhcnMgKyBjbG9zZUNoYXJzICsgbGlua0NoYXIpKSB7XG5cdFx0ZXJyb3IoXCJJbnZhbGlkIGRlbGltaXRlcnNcIik7IC8vIE11c3QgYmUgbm9uLXdvcmQgY2hhcmFjdGVycywgYW5kIG9wZW5DaGFycyBhbmQgY2xvc2VDaGFycyBtdXN0IGVhY2ggYmUgbGVuZ3RoIDJcblx0fVxuXHRkZWxpbU9wZW5DaGFyMCA9IG9wZW5DaGFyc1swXTtcblx0ZGVsaW1PcGVuQ2hhcjEgPSBvcGVuQ2hhcnNbMV07XG5cdGRlbGltQ2xvc2VDaGFyMCA9IGNsb3NlQ2hhcnNbMF07XG5cdGRlbGltQ2xvc2VDaGFyMSA9IGNsb3NlQ2hhcnNbMV07XG5cblx0JHN1YlNldHRpbmdzLmRlbGltaXRlcnMgPSBbZGVsaW1PcGVuQ2hhcjAgKyBkZWxpbU9wZW5DaGFyMSwgZGVsaW1DbG9zZUNoYXIwICsgZGVsaW1DbG9zZUNoYXIxLCBsaW5rQ2hhcl07XG5cblx0Ly8gRXNjYXBlIHRoZSBjaGFyYWN0ZXJzIC0gc2luY2UgdGhleSBjb3VsZCBiZSByZWdleCBzcGVjaWFsIGNoYXJhY3RlcnNcblx0b3BlbkNoYXJzID0gXCJcXFxcXCIgKyBkZWxpbU9wZW5DaGFyMCArIFwiKFxcXFxcIiArIGxpbmtDaGFyICsgXCIpP1xcXFxcIiArIGRlbGltT3BlbkNoYXIxOyAvLyBEZWZhdWx0IGlzIFwie157XCJcblx0Y2xvc2VDaGFycyA9IFwiXFxcXFwiICsgZGVsaW1DbG9zZUNoYXIwICsgXCJcXFxcXCIgKyBkZWxpbUNsb3NlQ2hhcjE7ICAgICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgaXMgXCJ9fVwiXG5cdC8vIEJ1aWxkIHJlZ2V4IHdpdGggbmV3IGRlbGltaXRlcnNcblx0Ly8gICAgICAgICAgW3RhZyAgICAoZm9sbG93ZWQgYnkgLyBzcGFjZSBvciB9KSAgb3IgY3Z0citjb2xvbiBvciBodG1sIG9yIGNvZGVdIGZvbGxvd2VkIGJ5IHNwYWNlK3BhcmFtcyB0aGVuIGNvbnZlcnRCYWNrP1xuXHRyVGFnID0gXCIoPzooXFxcXHcrKD89W1xcXFwvXFxcXHNcXFxcXCIgKyBkZWxpbUNsb3NlQ2hhcjAgKyBcIl0pKXwoXFxcXHcrKT8oOil8KD4pfChcXFxcKikpXFxcXHMqKCg/OlteXFxcXFwiXG5cdFx0KyBkZWxpbUNsb3NlQ2hhcjAgKyBcIl18XFxcXFwiICsgZGVsaW1DbG9zZUNoYXIwICsgXCIoPyFcXFxcXCIgKyBkZWxpbUNsb3NlQ2hhcjEgKyBcIikpKj8pXCI7XG5cblx0Ly8gTWFrZSByVGFnIGF2YWlsYWJsZSB0byBKc1ZpZXdzIChvciBvdGhlciBjb21wb25lbnRzKSBmb3IgcGFyc2luZyBiaW5kaW5nIGV4cHJlc3Npb25zXG5cdCRzdWIuclRhZyA9IFwiKD86XCIgKyByVGFnICsgXCIpXCI7XG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgeyBePyB7ICAgdGFnK3BhcmFtcyBzbGFzaD8gIG9yIGNsb3NpbmdUYWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBjb21tZW50XG5cdHJUYWcgPSBuZXcgUmVnRXhwKFwiKD86XCIgKyBvcGVuQ2hhcnMgKyByVGFnICsgXCIoXFxcXC8pP3xcXFxcXCIgKyBkZWxpbU9wZW5DaGFyMCArIFwiKFxcXFxcIiArIGxpbmtDaGFyICsgXCIpP1xcXFxcIiArIGRlbGltT3BlbkNoYXIxICsgXCIoPzooPzpcXFxcLyhcXFxcdyspKVxcXFxzKnwhLS1bXFxcXHNcXFxcU10qPy0tKSlcIiArIGNsb3NlQ2hhcnMsIFwiZ1wiKTtcblxuXHQvLyBEZWZhdWx0OiAgYmluZCAgICAgdGFnTmFtZSAgICAgICAgIGN2dCAgIGNsbiBodG1sIGNvZGUgICAgcGFyYW1zICAgICAgICAgICAgc2xhc2ggICBiaW5kMiAgICAgICAgIGNsb3NlQmxrICBjb21tZW50XG5cdC8vICAgICAgLyg/OnsoXFxeKT97KD86KFxcdysoPz1bXFwvXFxzfV0pKXwoXFx3Kyk/KDopfCg+KXwoXFwqKSlcXHMqKCg/OltefV18fSg/IX0pKSo/KShcXC8pP3x7KFxcXik/eyg/Oig/OlxcLyhcXHcrKSlcXHMqfCEtLVtcXHNcXFNdKj8tLSkpfX1cblxuXHQkc3ViLnJUbXBsID0gbmV3IFJlZ0V4cChcIl5cXFxcc3xcXFxccyR8PC4qPnwoW15cXFxcXFxcXF18Xilbe31dfFwiICsgb3BlbkNoYXJzICsgXCIuKlwiICsgY2xvc2VDaGFycyk7XG5cdC8vICRzdWIuclRtcGwgbG9va3MgZm9yIGluaXRpYWwgb3IgZmluYWwgd2hpdGUgc3BhY2UsIGh0bWwgdGFncyBvciB7IG9yIH0gY2hhciBub3QgcHJlY2VkZWQgYnkgXFxcXCwgb3IgSnNSZW5kZXIgdGFncyB7e3h4eH19LlxuXHQvLyBFYWNoIG9mIHRoZXNlIHN0cmluZ3MgYXJlIGNvbnNpZGVyZWQgTk9UIHRvIGJlIGpRdWVyeSBzZWxlY3RvcnNcblx0cmV0dXJuICR2aWV3c1NldHRpbmdzO1xufVxuXG4vLz09PT09PT09PVxuLy8gVmlldy5nZXRcbi8vPT09PT09PT09XG5cbmZ1bmN0aW9uIGdldFZpZXcoaW5uZXIsIHR5cGUpIHsgLy92aWV3LmdldChpbm5lciwgdHlwZSlcblx0aWYgKCF0eXBlICYmIGlubmVyICE9PSB0cnVlKSB7XG5cdFx0Ly8gdmlldy5nZXQodHlwZSlcblx0XHR0eXBlID0gaW5uZXI7XG5cdFx0aW5uZXIgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHR2YXIgdmlld3MsIGksIGwsIGZvdW5kLFxuXHRcdHZpZXcgPSB0aGlzLFxuXHRcdHJvb3QgPSB0eXBlID09PSBcInJvb3RcIjtcblx0XHQvLyB2aWV3LmdldChcInJvb3RcIikgcmV0dXJucyB2aWV3LnJvb3QsIHZpZXcuZ2V0KCkgcmV0dXJucyB2aWV3LnBhcmVudCwgdmlldy5nZXQodHJ1ZSkgcmV0dXJucyB2aWV3LnZpZXdzWzBdLlxuXG5cdGlmIChpbm5lcikge1xuXHRcdC8vIEdvIHRocm91Z2ggdmlld3MgLSB0aGlzIG9uZSwgYW5kIGFsbCBuZXN0ZWQgb25lcywgZGVwdGgtZmlyc3QgLSBhbmQgcmV0dXJuIGZpcnN0IG9uZSB3aXRoIGdpdmVuIHR5cGUuXG5cdFx0Ly8gSWYgdHlwZSBpcyB1bmRlZmluZWQsIGkuZS4gdmlldy5nZXQodHJ1ZSksIHJldHVybiBmaXJzdCBjaGlsZCB2aWV3LlxuXHRcdGZvdW5kID0gdHlwZSAmJiB2aWV3LnR5cGUgPT09IHR5cGUgJiYgdmlldztcblx0XHRpZiAoIWZvdW5kKSB7XG5cdFx0XHR2aWV3cyA9IHZpZXcudmlld3M7XG5cdFx0XHRpZiAodmlldy5fLnVzZUtleSkge1xuXHRcdFx0XHRmb3IgKGkgaW4gdmlld3MpIHtcblx0XHRcdFx0XHRpZiAoZm91bmQgPSB0eXBlID8gdmlld3NbaV0uZ2V0KGlubmVyLCB0eXBlKSA6IHZpZXdzW2ldKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoaSA9IDAsIGwgPSB2aWV3cy5sZW5ndGg7ICFmb3VuZCAmJiBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0Zm91bmQgPSB0eXBlID8gdmlld3NbaV0uZ2V0KGlubmVyLCB0eXBlKSA6IHZpZXdzW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHJvb3QpIHtcblx0XHQvLyBGaW5kIHJvb3Qgdmlldy4gKHZpZXcgd2hvc2UgcGFyZW50IGlzIHRvcCB2aWV3KVxuXHRcdGZvdW5kID0gdmlldy5yb290O1xuXHR9IGVsc2UgaWYgKHR5cGUpIHtcblx0XHR3aGlsZSAodmlldyAmJiAhZm91bmQpIHtcblx0XHRcdC8vIEdvIHRocm91Z2ggdmlld3MgLSB0aGlzIG9uZSwgYW5kIGFsbCBwYXJlbnQgb25lcyAtIGFuZCByZXR1cm4gZmlyc3Qgb25lIHdpdGggZ2l2ZW4gdHlwZS5cblx0XHRcdGZvdW5kID0gdmlldy50eXBlID09PSB0eXBlID8gdmlldyA6IHVuZGVmaW5lZDtcblx0XHRcdHZpZXcgPSB2aWV3LnBhcmVudDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm91bmQgPSB2aWV3LnBhcmVudDtcblx0fVxuXHRyZXR1cm4gZm91bmQgfHwgdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBnZXROZXN0ZWRJbmRleCgpIHtcblx0dmFyIHZpZXcgPSB0aGlzLmdldChcIml0ZW1cIik7XG5cdHJldHVybiB2aWV3ID8gdmlldy5pbmRleCA6IHVuZGVmaW5lZDtcbn1cblxuZ2V0TmVzdGVkSW5kZXguZGVwZW5kcyA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gW3RoaXMuZ2V0KFwiaXRlbVwiKSwgXCJpbmRleFwiXTtcbn07XG5cbmZ1bmN0aW9uIGdldEluZGV4KCkge1xuXHRyZXR1cm4gdGhpcy5pbmRleDtcbn1cblxuZ2V0SW5kZXguZGVwZW5kcyA9IFwiaW5kZXhcIjtcblxuLy89PT09PT09PT09PT09PT09PT1cbi8vIFZpZXcuY3R4UHJtLCBldGMuXG4vLz09PT09PT09PT09PT09PT09PVxuXG4vKiBJbnRlcm5hbCBwcml2YXRlOiB2aWV3Ll9nZXRPYigpICovXG5mdW5jdGlvbiBnZXRQYXRoT2JqZWN0KG9iLCBwYXRoLCBsdE9iLCBmbikge1xuXHQvLyBJdGVyYXRlIHRocm91Z2ggcGF0aCB0byBsYXRlIHBhdGhzOiBAYS5iLmMgcGF0aHNcblx0Ly8gUmV0dXJuIFwiXCIgKG9yIG5vb3AgaWYgbGVhZiBpcyBhIGZ1bmN0aW9uIEBhLmIuYyguLi4pICkgaWYgaW50ZXJtZWRpYXRlIG9iamVjdCBub3QgeWV0IGF2YWlsYWJsZVxuXHR2YXIgcHJldk9iLCB0b2tlbnMsIGwsXG5cdFx0aSA9IDA7XG5cdGlmIChsdE9iID09PSAxKSB7XG5cdFx0Zm4gPSAxO1xuXHRcdGx0T2IgPSB1bmRlZmluZWQ7XG5cdH1cblx0Ly8gUGF0aHMgbGlrZSBeYV5iXmMgb3Igfl5hXmJeYyB3aWxsIG5vdCB0aHJvdyBpZiBhbiBvYmplY3QgaW4gcGF0aCBpcyB1bmRlZmluZWQuXG5cdGlmIChwYXRoKSB7XG5cdFx0dG9rZW5zID0gcGF0aC5zcGxpdChcIi5cIik7XG5cdFx0bCA9IHRva2Vucy5sZW5ndGg7XG5cblx0XHRmb3IgKDsgb2IgJiYgaSA8IGw7IGkrKykge1xuXHRcdFx0cHJldk9iID0gb2I7XG5cdFx0XHRvYiA9IHRva2Vuc1tpXSA/IG9iW3Rva2Vuc1tpXV0gOiBvYjtcblx0XHR9XG5cdH1cblx0aWYgKGx0T2IpIHtcblx0XHRsdE9iLmx0ID0gbHRPYi5sdCB8fCBpPGw7IC8vIElmIGkgPCBsIHRoZXJlIHdhcyBhbiBvYmplY3QgaW4gdGhlIHBhdGggbm90IHlldCBhdmFpbGFibGVcblx0fVxuXHRyZXR1cm4gb2IgPT09IHVuZGVmaW5lZFxuXHRcdD8gZm4gPyBub29wIDogXCJcIlxuXHRcdDogZm4gPyBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBvYi5hcHBseShwcmV2T2IsIGFyZ3VtZW50cyk7XG5cdFx0fSA6IG9iO1xufVxuXG5mdW5jdGlvbiBjb250ZXh0UGFyYW1ldGVyKGtleSwgdmFsdWUsIGdldCkge1xuXHQvLyBIZWxwZXIgbWV0aG9kIGNhbGxlZCBhcyB2aWV3LmN0eFBybShrZXkpIGZvciBoZWxwZXJzIG9yIHRlbXBsYXRlIHBhcmFtZXRlcnMgfmZvbyAtIGZyb20gY29tcGlsZWQgdGVtcGxhdGUgb3IgZnJvbSBjb250ZXh0IGNhbGxiYWNrXG5cdHZhciB3cmFwcGVkLCBkZXBzLCByZXMsIG9ic0N0eFBybSwgdGFnRWxzZSwgY2FsbFZpZXcsIG5ld1Jlcyxcblx0XHRzdG9yZVZpZXcgPSB0aGlzLFxuXHRcdGlzVXBkYXRlID0gIWlzUmVuZGVyQ2FsbCAmJiBhcmd1bWVudHMubGVuZ3RoID4gMSxcblx0XHRzdG9yZSA9IHN0b3JlVmlldy5jdHg7XG5cdGlmIChrZXkpIHtcblx0XHRpZiAoIXN0b3JlVmlldy5fKSB7IC8vIHRhZ0N0eC5jdHhQcm0oKSBjYWxsXG5cdFx0XHR0YWdFbHNlID0gc3RvcmVWaWV3LmluZGV4O1xuXHRcdFx0c3RvcmVWaWV3ID0gc3RvcmVWaWV3LnRhZztcblx0XHR9XG5cdFx0Y2FsbFZpZXcgPSBzdG9yZVZpZXc7XG5cdFx0aWYgKHN0b3JlICYmIHN0b3JlLmhhc093blByb3BlcnR5KGtleSkgfHwgKHN0b3JlID0gJGhlbHBlcnMpLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHJlcyA9IHN0b3JlW2tleV07XG5cdFx0XHRpZiAoa2V5ID09PSBcInRhZ1wiIHx8IGtleSA9PT0gXCJ0YWdDdHhcIiB8fCBrZXkgPT09IFwicm9vdFwiIHx8IGtleSA9PT0gXCJwYXJlbnRUYWdzXCIpIHtcblx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RvcmUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmICghaXNSZW5kZXJDYWxsICYmIHN0b3JlVmlldy50YWdDdHggfHwgc3RvcmVWaWV3LmxpbmtlZCkgeyAvLyBEYXRhLWxpbmtlZCB2aWV3LCBvciB0YWcgaW5zdGFuY2Vcblx0XHRcdGlmICghcmVzIHx8ICFyZXMuX2N4cCkge1xuXHRcdFx0XHQvLyBOb3QgYSBjb250ZXh0dWFsIHBhcmFtZXRlclxuXHRcdFx0XHQvLyBTZXQgc3RvcmVWaWV3IHRvIHRhZyAoaWYgdGhpcyBpcyBhIHRhZy5jdHhQcm0oKSBjYWxsKSBvciB0byByb290IHZpZXcgKFwiZGF0YVwiIHZpZXcgb2YgbGlua2VkIHRlbXBsYXRlKVxuXHRcdFx0XHRzdG9yZVZpZXcgPSBzdG9yZVZpZXcudGFnQ3R4IHx8ICRpc0Z1bmN0aW9uKHJlcylcblx0XHRcdFx0XHQ/IHN0b3JlVmlldyAvLyBJcyBhIHRhZywgbm90IGEgdmlldywgb3IgaXMgYSBjb21wdXRlZCBjb250ZXh0dWFsIHBhcmFtZXRlciwgc28gc2NvcGUgdG8gdGhlIGNhbGxWaWV3LCBubyB0aGUgJ3Njb3BlIHZpZXcnXG5cdFx0XHRcdFx0OiAoc3RvcmVWaWV3ID0gc3RvcmVWaWV3LnNjb3BlIHx8IHN0b3JlVmlldyxcblx0XHRcdFx0XHRcdCFzdG9yZVZpZXcuaXNUb3AgJiYgc3RvcmVWaWV3LmN0eC50YWcgLy8gSWYgdGhpcyB2aWV3IGlzIGluIGEgdGFnLCBzZXQgc3RvcmVWaWV3IHRvIHRoZSB0YWdcblx0XHRcdFx0XHRcdFx0fHwgc3RvcmVWaWV3KTtcblx0XHRcdFx0aWYgKHJlcyAhPT0gdW5kZWZpbmVkICYmIHN0b3JlVmlldy50YWdDdHgpIHtcblx0XHRcdFx0XHQvLyBJZiBzdG9yZVZpZXcgaXMgYSB0YWcsIGJ1dCB0aGUgY29udGV4dHVhbCBwYXJhbWV0ZXIgaGFzIGJlZW4gc2V0IGF0IGF0IGhpZ2hlciBsZXZlbCAoZS5nLiBoZWxwZXJzKS4uLlxuXHRcdFx0XHRcdHN0b3JlVmlldyA9IHN0b3JlVmlldy50YWdDdHgudmlldy5zY29wZTsgLy8gIHRoZW4gbW92ZSBzdG9yZVZpZXcgdG8gdGhlIG91dGVyIGxldmVsIChzY29wZSBvZiB0YWcgY29udGFpbmVyIHZpZXcpXG5cdFx0XHRcdH1cblx0XHRcdFx0c3RvcmUgPSBzdG9yZVZpZXcuX29jcHM7XG5cdFx0XHRcdHJlcyA9IHN0b3JlICYmIHN0b3JlLmhhc093blByb3BlcnR5KGtleSkgJiYgc3RvcmVba2V5XSB8fCByZXM7XG5cdFx0XHRcdGlmICghKHJlcyAmJiByZXMuX2N4cCkgJiYgKGdldCB8fCBpc1VwZGF0ZSkpIHtcblx0XHRcdFx0XHQvLyBDcmVhdGUgb2JzZXJ2YWJsZSBjb250ZXh0dWFsIHBhcmFtZXRlclxuXHRcdFx0XHRcdChzdG9yZSB8fCAoc3RvcmVWaWV3Ll9vY3BzID0gc3RvcmVWaWV3Ll9vY3BzIHx8IHt9KSlba2V5XVxuXHRcdFx0XHRcdFx0PSByZXNcblx0XHRcdFx0XHRcdD0gW3tcblx0XHRcdFx0XHRcdFx0X29jcDogcmVzLCAvLyBUaGUgb2JzZXJ2YWJsZSBjb250ZXh0dWFsIHBhcmFtZXRlciB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRfdnc6IGNhbGxWaWV3LFxuXHRcdFx0XHRcdFx0XHRfa2V5OiBrZXlcblx0XHRcdFx0XHRcdH1dO1xuXHRcdFx0XHRcdHJlcy5fY3hwID0ge1xuXHRcdFx0XHRcdFx0cGF0aDogX29jcCxcblx0XHRcdFx0XHRcdGluZDogMCxcblx0XHRcdFx0XHRcdHVwZGF0ZVZhbHVlOiBmdW5jdGlvbih2YWwsIHBhdGgpIHtcblx0XHRcdFx0XHRcdFx0JC5vYnNlcnZhYmxlKHJlc1swXSkuc2V0UHJvcGVydHkoX29jcCwgdmFsKTsgLy8gU2V0IHRoZSB2YWx1ZSAocmVzWzBdLl9vY3ApXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChvYnNDdHhQcm0gPSByZXMgJiYgcmVzLl9jeHApIHtcblx0XHRcdFx0Ly8gSWYgdGhpcyBoZWxwZXIgcmVzb3VyY2UgaXMgYW4gb2JzZXJ2YWJsZSBjb250ZXh0dWFsIHBhcmFtZXRlclxuXHRcdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRcdFx0XHRkZXBzID0gcmVzWzFdID8gJHN1Yi5fY2VvKHJlc1sxXS5kZXBzKSA6IFtfb2NwXTsgLy8gZm4gZGVwcyAod2l0aCBhbnkgZXhwck9icyBjbG9uZWQgdXNpbmcgJHN1Yi5fY2VvKVxuXHRcdFx0XHRcdGRlcHMudW5zaGlmdChyZXNbMF0pOyAvLyB2aWV3XG5cdFx0XHRcdFx0ZGVwcy5fY3hwID0gb2JzQ3R4UHJtO1xuXHRcdFx0XHRcdC8vIEluIGEgY29udGV4dCBjYWxsYmFjayBmb3IgYSBjb250ZXh0dWFsIHBhcmFtLCB3ZSBzZXQgZ2V0ID0gdHJ1ZSwgdG8gZ2V0IGN0eFBybSAgW3ZpZXcsIGRlcGVuZGVuY2llcy4uLl0gYXJyYXkgLSBuZWVkZWQgZm9yIG9ic2VydmUgY2FsbFxuXHRcdFx0XHRcdHJldHVybiBkZXBzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRhZ0Vsc2UgPSBvYnNDdHhQcm0udGFnRWxzZTtcblx0XHRcdFx0bmV3UmVzID0gcmVzWzFdIC8vIGxpbmtGbiBmb3IgY29tcGlsZWQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdD8gb2JzQ3R4UHJtLnRhZyAmJiBvYnNDdHhQcm0udGFnLmN2dEFyZ3Ncblx0XHRcdFx0XHRcdD8gb2JzQ3R4UHJtLnRhZy5jdnRBcmdzKHRhZ0Vsc2UsIDEpW29ic0N0eFBybS5pbmRdIC8vID0gdGFnLmJuZEFyZ3MoKSAtIGZvciB0YWcgY29udGV4dHVhbCBwYXJhbWV0ZXJcblx0XHRcdFx0XHRcdDogcmVzWzFdKHJlc1swXS5kYXRhLCByZXNbMF0sICRzdWIpICAgIC8vID0gZm4oZGF0YSwgdmlldywgJHN1YikgZm9yIGNvbXBpbGVkIGJpbmRpbmcgZXhwcmVzc2lvblxuXHRcdFx0XHRcdDogcmVzWzBdLl9vY3A7IC8vIE9ic2VydmFibGUgY29udGV4dHVhbCBwYXJhbWV0ZXIgKHVuaW5pdGlhbGl6ZWQsIG9yIGluaXRpYWxpemVkIGFzIHN0YXRpYyBleHByZXNzaW9uLCBzbyBubyBwYXRoIGRlcGVuZGVuY2llcylcblx0XHRcdFx0aWYgKGlzVXBkYXRlKSB7XG5cdFx0XHRcdFx0JHN1Yi5fdWNwKGtleSwgdmFsdWUsIHN0b3JlVmlldywgb2JzQ3R4UHJtKTsgLy8gVXBkYXRlIG9ic2VydmFibGUgY29udGV4dHVhbCBwYXJhbWV0ZXJcblx0XHRcdFx0XHRyZXR1cm4gc3RvcmVWaWV3O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlcyA9IG5ld1Jlcztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHJlcyAmJiAkaXNGdW5jdGlvbihyZXMpKSB7XG5cdFx0XHQvLyBJZiBhIGhlbHBlciBpcyBvZiB0eXBlIGZ1bmN0aW9uIHdlIHdpbGwgd3JhcCBpdCwgc28gaWYgY2FsbGVkIHdpdGggbm8gdGhpcyBwb2ludGVyIGl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG5cdFx0XHQvLyB2aWV3IGFzICd0aGlzJyBjb250ZXh0LiBJZiB0aGUgaGVscGVyIH5mb28oKSB3YXMgaW4gYSBkYXRhLWxpbmsgZXhwcmVzc2lvbiwgdGhlIHZpZXcgd2lsbCBoYXZlIGEgJ3RlbXBvcmFyeScgbGlua0N0eCBwcm9wZXJ0eSB0b28uXG5cdFx0XHQvLyBOb3RlIHRoYXQgaGVscGVyIGZ1bmN0aW9ucyBvbiBkZWVwZXIgcGF0aHMgd2lsbCBoYXZlIHNwZWNpZmljIHRoaXMgcG9pbnRlcnMsIGZyb20gdGhlIHByZWNlZGluZyBwYXRoLlxuXHRcdFx0Ly8gRm9yIGV4YW1wbGUsIH51dGlsLmZvbygpIHdpbGwgaGF2ZSB0aGUgfnV0aWwgb2JqZWN0IGFzICd0aGlzJyBwb2ludGVyXG5cdFx0XHR3cmFwcGVkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiByZXMuYXBwbHkoKCF0aGlzIHx8IHRoaXMgPT09IGdsb2JhbCkgPyBjYWxsVmlldyA6IHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR9O1xuXHRcdFx0JGV4dGVuZCh3cmFwcGVkLCByZXMpOyAvLyBBdHRhY2ggc2FtZSBleHBhbmRvcyAoaWYgYW55KSB0byB0aGUgd3JhcHBlZCBmdW5jdGlvblxuXHRcdH1cblx0XHRyZXR1cm4gd3JhcHBlZCB8fCByZXM7XG5cdH1cbn1cblxuLyogSW50ZXJuYWwgcHJpdmF0ZTogdmlldy5fZ2V0VG1wbCgpICovXG5mdW5jdGlvbiBnZXRUZW1wbGF0ZSh0bXBsKSB7XG5cdHJldHVybiB0bXBsICYmICh0bXBsLmZuXG5cdFx0PyB0bXBsXG5cdFx0OiB0aGlzLmdldFJzYyhcInRlbXBsYXRlc1wiLCB0bXBsKSB8fCAkdGVtcGxhdGVzKHRtcGwpKTsgLy8gbm90IHlldCBjb21waWxlZFxufVxuXG4vLz09PT09PT09PT09PT09XG4vLyB2aWV3cy5fY252dFxuLy89PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBjb252ZXJ0VmFsKGNvbnZlcnRlciwgdmlldywgdGFnQ3R4LCBvbkVycm9yKSB7XG5cdC8vIENhbGxlZCBmcm9tIGNvbXBpbGVkIHRlbXBsYXRlIGNvZGUgZm9yIHt7On19XG5cdC8vIHNlbGYgaXMgdGVtcGxhdGUgb2JqZWN0IG9yIGxpbmtDdHggb2JqZWN0XG5cdHZhciB0YWcsIGxpbmtDdHgsIHZhbHVlLCBhcmdzTGVuLCBiaW5kVG8sXG5cdFx0Ly8gSWYgdGFnQ3R4IGlzIGFuIGludGVnZXIsIHRoZW4gaXQgaXMgdGhlIGtleSBmb3IgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgYm91bmRUYWcgdGFnQ3R4XG5cdFx0Ym91bmRUYWcgPSB0eXBlb2YgdGFnQ3R4ID09PSBcIm51bWJlclwiICYmIHZpZXcudG1wbC5ibmRzW3RhZ0N0eC0xXTtcblxuXHRpZiAob25FcnJvciA9PT0gdW5kZWZpbmVkICYmIGJvdW5kVGFnICYmIGJvdW5kVGFnLl9scikgeyAvLyBsYXRlUmVuZGVyXG5cdFx0b25FcnJvciA9IFwiXCI7XG5cdH1cblx0aWYgKG9uRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdHRhZ0N0eCA9IG9uRXJyb3IgPSB7cHJvcHM6IHt9LCBhcmdzOiBbb25FcnJvcl19O1xuXHR9IGVsc2UgaWYgKGJvdW5kVGFnKSB7XG5cdFx0dGFnQ3R4ID0gYm91bmRUYWcodmlldy5kYXRhLCB2aWV3LCAkc3ViKTtcblx0fVxuXHRib3VuZFRhZyA9IGJvdW5kVGFnLl9iZCAmJiBib3VuZFRhZztcblx0aWYgKGNvbnZlcnRlciB8fCBib3VuZFRhZykge1xuXHRcdGxpbmtDdHggPSB2aWV3Ll9sYzsgLy8gRm9yIGRhdGEtbGluaz1cIntjdnQ6Li4ufVwiLi4uIFNlZSBvbkRhdGFMaW5rZWRUYWdDaGFuZ2Vcblx0XHR0YWcgPSBsaW5rQ3R4ICYmIGxpbmtDdHgudGFnO1xuXHRcdHRhZ0N0eC52aWV3ID0gdmlldztcblx0XHRpZiAoIXRhZykge1xuXHRcdFx0dGFnID0gJGV4dGVuZChuZXcgJHN1Yi5fdGcoKSwge1xuXHRcdFx0XHRfOiB7XG5cdFx0XHRcdFx0Ym5kOiBib3VuZFRhZyxcblx0XHRcdFx0XHR1bmxpbmtlZDogdHJ1ZSxcblx0XHRcdFx0XHRsdDogdGFnQ3R4Lmx0IC8vIElmIGEgbGF0ZSBwYXRoIEBzb21lLnBhdGggaGFzIG5vdCByZXR1cm5lZCBAc29tZSBvYmplY3QsIG1hcmsgdGFnIGFzIGxhdGVcblx0XHRcdFx0fSxcblx0XHRcdFx0aW5saW5lOiAhbGlua0N0eCxcblx0XHRcdFx0dGFnTmFtZTogXCI6XCIsXG5cdFx0XHRcdGNvbnZlcnQ6IGNvbnZlcnRlcixcblx0XHRcdFx0b25BcnJheUNoYW5nZTogdHJ1ZSxcblx0XHRcdFx0ZmxvdzogdHJ1ZSxcblx0XHRcdFx0dGFnQ3R4OiB0YWdDdHgsXG5cdFx0XHRcdHRhZ0N0eHM6IFt0YWdDdHhdLFxuXHRcdFx0XHRfaXM6IFwidGFnXCJcblx0XHRcdH0pO1xuXHRcdFx0YXJnc0xlbiA9IHRhZ0N0eC5hcmdzLmxlbmd0aDtcblx0XHRcdGlmIChhcmdzTGVuPjEpIHtcblx0XHRcdFx0YmluZFRvID0gdGFnLmJpbmRUbyA9IFtdO1xuXHRcdFx0XHR3aGlsZSAoYXJnc0xlbi0tKSB7XG5cdFx0XHRcdFx0YmluZFRvLnVuc2hpZnQoYXJnc0xlbik7IC8vIEJpbmQgdG8gYWxsIHRoZSBhcmd1bWVudHMgLSBnZW5lcmF0ZSBiaW5kVG8gYXJyYXk6IFswLDEsMi4uLl1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGxpbmtDdHgpIHtcblx0XHRcdFx0bGlua0N0eC50YWcgPSB0YWc7XG5cdFx0XHRcdHRhZy5saW5rQ3R4ID0gbGlua0N0eDtcblx0XHRcdH1cblx0XHRcdHRhZ0N0eC5jdHggPSBleHRlbmRDdHgodGFnQ3R4LmN0eCwgKGxpbmtDdHggPyBsaW5rQ3R4LnZpZXcgOiB2aWV3KS5jdHgpO1xuXHRcdFx0dGFnSGFuZGxlcnNGcm9tUHJvcHModGFnLCB0YWdDdHgpO1xuXHRcdH1cblx0XHR0YWcuX2VyID0gb25FcnJvciAmJiB2YWx1ZTtcblx0XHR0YWcuY3R4ID0gdGFnQ3R4LmN0eCB8fCB0YWcuY3R4IHx8IHt9O1xuXHRcdHRhZ0N0eC5jdHggPSB1bmRlZmluZWQ7XG5cdFx0dmFsdWUgPSB0YWcuY3Z0QXJncygpWzBdOyAvLyBJZiB0aGVyZSBpcyBhIGNvbnZlcnRCYWNrIGJ1dCBubyBjb252ZXJ0LCBjb252ZXJ0ZXIgd2lsbCBiZSBcInRydWVcIlxuXHRcdHRhZy5fZXIgPSBvbkVycm9yICYmIHZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdHZhbHVlID0gdGFnQ3R4LmFyZ3NbMF07XG5cdH1cblxuXHQvLyBDYWxsIG9uUmVuZGVyICh1c2VkIGJ5IEpzVmlld3MgaWYgcHJlc2VudCwgdG8gYWRkIGJpbmRpbmcgYW5ub3RhdGlvbnMgYXJvdW5kIHJlbmRlcmVkIGNvbnRlbnQpXG5cdHZhbHVlID0gYm91bmRUYWcgJiYgdmlldy5fLm9uUmVuZGVyXG5cdFx0PyB2aWV3Ll8ub25SZW5kZXIodmFsdWUsIHZpZXcsIHRhZylcblx0XHQ6IHZhbHVlO1xuXHRyZXR1cm4gdmFsdWUgIT0gdW5kZWZpbmVkID8gdmFsdWUgOiBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0QXJncyh0YWdFbHNlLCBib3VuZCkgeyAvLyB0YWcuY3Z0QXJncygpIG9yIHRhZy5jdnRBcmdzKHRhZ0Vsc2U/LCB0cnVlPylcblx0dmFyIGwsIGtleSwgYm91bmRBcmdzLCBhcmdzLCBiaW5kRnJvbSwgdGFnLCBjb252ZXJ0ZXIsXG5cdFx0dGFnQ3R4ID0gdGhpcztcblxuXHRpZiAodGFnQ3R4LnRhZ05hbWUpIHtcblx0XHR0YWcgPSB0YWdDdHg7XG5cdFx0dGFnQ3R4ID0gKHRhZy50YWdDdHhzIHx8IFt0YWdDdHhdKVt0YWdFbHNlfHwwXTtcblx0XHRpZiAoIXRhZ0N0eCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHR0YWcgPSB0YWdDdHgudGFnO1xuXHR9XG5cblx0YmluZEZyb20gPSB0YWcuYmluZEZyb207XG5cdGFyZ3MgPSB0YWdDdHguYXJncztcblxuXHRpZiAoKGNvbnZlcnRlciA9IHRhZy5jb252ZXJ0KSAmJiBcIlwiICsgY29udmVydGVyID09PSBjb252ZXJ0ZXIpIHtcblx0XHRjb252ZXJ0ZXIgPSBjb252ZXJ0ZXIgPT09IFwidHJ1ZVwiXG5cdFx0XHQ/IHVuZGVmaW5lZFxuXHRcdFx0OiAodGFnQ3R4LnZpZXcuZ2V0UnNjKFwiY29udmVydGVyc1wiLCBjb252ZXJ0ZXIpIHx8IGVycm9yKFwiVW5rbm93biBjb252ZXJ0ZXI6ICdcIiArIGNvbnZlcnRlciArIFwiJ1wiKSk7XG5cdH1cblxuXHRpZiAoY29udmVydGVyICYmICFib3VuZCkgeyAvLyBJZiB0aGVyZSBpcyBhIGNvbnZlcnRlciwgdXNlIGEgY29weSBvZiB0aGUgdGFnQ3R4LmFyZ3MgYXJyYXkgZm9yIHJlbmRlcmluZywgYW5kIHJlcGxhY2UgdGhlIGFyZ3NbMF0gaW5cblx0XHRhcmdzID0gYXJncy5zbGljZSgpOyAvLyB0aGUgY29waWVkIGFycmF5IHdpdGggdGhlIGNvbnZlcnRlZCB2YWx1ZS4gQnV0IHdlIGRvIG5vdCBtb2RpZnkgdGhlIHZhbHVlIG9mIHRhZy50YWdDdHguYXJnc1swXSAodGhlIG9yaWdpbmFsIGFyZ3MgYXJyYXkpXG5cdH1cblx0aWYgKGJpbmRGcm9tKSB7IC8vIEdldCB0aGUgdmFsdWVzIG9mIHRoZSBib3VuZEFyZ3Ncblx0XHRib3VuZEFyZ3MgPSBbXTtcblx0XHRsID0gYmluZEZyb20ubGVuZ3RoO1xuXHRcdHdoaWxlIChsLS0pIHtcblx0XHRcdGtleSA9IGJpbmRGcm9tW2xdO1xuXHRcdFx0Ym91bmRBcmdzLnVuc2hpZnQoYXJnT3JQcm9wKHRhZ0N0eCwga2V5KSk7XG5cdFx0fVxuXHRcdGlmIChib3VuZCkge1xuXHRcdFx0YXJncyA9IGJvdW5kQXJnczsgLy8gQ2FsbCB0byBibmRBcmdzKCkgLSByZXR1cm5zIHRoZSBib3VuZEFyZ3Ncblx0XHR9XG5cdH1cblx0aWYgKGNvbnZlcnRlcikge1xuXHRcdGNvbnZlcnRlciA9IGNvbnZlcnRlci5hcHBseSh0YWcsIGJvdW5kQXJncyB8fCBhcmdzKTtcblx0XHRpZiAoY29udmVydGVyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBhcmdzOyAvLyBSZXR1cm5pbmcgdW5kZWZpbmVkIGZyb20gYSBjb252ZXJ0ZXIgaXMgZXF1aXZhbGVudCB0byBub3QgaGF2aW5nIGEgY29udmVydGVyLlxuXHRcdH1cblx0XHRiaW5kRnJvbSA9IGJpbmRGcm9tIHx8IFswXTtcblx0XHRsID0gYmluZEZyb20ubGVuZ3RoO1xuXHRcdGlmICghJGlzQXJyYXkoY29udmVydGVyKSB8fCBjb252ZXJ0ZXIubGVuZ3RoICE9PSBsKSB7XG5cdFx0XHRjb252ZXJ0ZXIgPSBbY29udmVydGVyXTtcblx0XHRcdGJpbmRGcm9tID0gWzBdO1xuXHRcdFx0bCA9IDE7XG5cdFx0fVxuXHRcdGlmIChib3VuZCkgeyAgICAgICAgLy8gQ2FsbCB0byBibmRBcmdzKCkgLSBzbyBhcHBseSBjb252ZXJ0ZXIgdG8gYWxsIGJvdW5kQXJnc1xuXHRcdFx0YXJncyA9IGNvbnZlcnRlcjsgLy8gVGhlIGFycmF5IG9mIHZhbHVlcyByZXR1cm5lZCBmcm9tIHRoZSBjb252ZXJ0ZXJcblx0XHR9IGVsc2UgeyAgICAgICAgICAgIC8vIENhbGwgdG8gY3Z0QXJncygpXG5cdFx0XHR3aGlsZSAobC0tKSB7XG5cdFx0XHRcdGtleSA9IGJpbmRGcm9tW2xdO1xuXHRcdFx0XHRpZiAoK2tleSA9PT0ga2V5KSB7XG5cdFx0XHRcdFx0YXJnc1trZXldID0gY29udmVydGVyW2xdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhcmdzO1xufVxuXG5mdW5jdGlvbiBhcmdPclByb3AoY29udGV4dCwga2V5KSB7XG5cdGNvbnRleHQgPSBjb250ZXh0WytrZXkgPT09IGtleSA/IFwiYXJnc1wiIDogXCJwcm9wc1wiXTtcblx0cmV0dXJuIGNvbnRleHQgJiYgY29udGV4dFtrZXldO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0Qm91bmRBcmdzKHRhZ0Vsc2UpIHsgLy8gdGFnLmJuZEFyZ3MoKVxuXHRyZXR1cm4gdGhpcy5jdnRBcmdzKHRhZ0Vsc2UsIDEpO1xufVxuXG4vLz09PT09PT09PT09PT1cbi8vIHZpZXdzLnRhZ1xuLy89PT09PT09PT09PT09XG5cbi8qIHZpZXcuZ2V0UnNjKCkgKi9cbmZ1bmN0aW9uIGdldFJlc291cmNlKHJlc291cmNlVHlwZSwgaXRlbU5hbWUpIHtcblx0dmFyIHJlcywgc3RvcmUsXG5cdFx0dmlldyA9IHRoaXM7XG5cdGlmIChcIlwiICsgaXRlbU5hbWUgPT09IGl0ZW1OYW1lKSB7XG5cdFx0d2hpbGUgKChyZXMgPT09IHVuZGVmaW5lZCkgJiYgdmlldykge1xuXHRcdFx0c3RvcmUgPSB2aWV3LnRtcGwgJiYgdmlldy50bXBsW3Jlc291cmNlVHlwZV07XG5cdFx0XHRyZXMgPSBzdG9yZSAmJiBzdG9yZVtpdGVtTmFtZV07XG5cdFx0XHR2aWV3ID0gdmlldy5wYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiByZXMgfHwgJHZpZXdzW3Jlc291cmNlVHlwZV1baXRlbU5hbWVdO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhZyh0YWdOYW1lLCBwYXJlbnRWaWV3LCB0bXBsLCB0YWdDdHhzLCBpc1VwZGF0ZSwgb25FcnJvcikge1xuXHRmdW5jdGlvbiBiaW5kVG9PckJpbmRGcm9tKHR5cGUpIHtcblx0XHR2YXIgYmluZEFycmF5ID0gdGFnW3R5cGVdO1xuXG5cdFx0aWYgKGJpbmRBcnJheSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRiaW5kQXJyYXkgPSAkaXNBcnJheShiaW5kQXJyYXkpID8gYmluZEFycmF5IDogW2JpbmRBcnJheV07XG5cdFx0XHRtID0gYmluZEFycmF5Lmxlbmd0aDtcblx0XHRcdHdoaWxlIChtLS0pIHtcblx0XHRcdFx0a2V5ID0gYmluZEFycmF5W21dO1xuXHRcdFx0XHRpZiAoIWlzTmFOKHBhcnNlSW50KGtleSkpKSB7XG5cdFx0XHRcdFx0YmluZEFycmF5W21dID0gcGFyc2VJbnQoa2V5KTsgLy8gQ29udmVydCBcIjBcIiB0byAwLCAgZXRjLlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJpbmRBcnJheSB8fCBbMF07XG5cdH1cblxuXHRwYXJlbnRWaWV3ID0gcGFyZW50VmlldyB8fCB0b3BWaWV3O1xuXHR2YXIgdGFnLCB0YWdEZWYsIHRlbXBsYXRlLCB0YWdzLCBhdHRyLCBwYXJlbnRUYWcsIGwsIG0sIG4sIGl0ZW1SZXQsIHRhZ0N0eCwgdGFnQ3R4Q3R4LCBjdHhQcm0sIGJpbmRUbywgYmluZEZyb20sIGluaXRWYWwsXG5cdFx0Y29udGVudCwgY2FsbEluaXQsIG1hcERlZiwgdGhpc01hcCwgYXJncywgYmRBcmdzLCBwcm9wcywgdGFnRGF0YU1hcCwgY29udGVudEN0eCwga2V5LCBiaW5kRnJvbUxlbmd0aCwgYmluZFRvTGVuZ3RoLCBsaW5rZWRFbGVtZW50LCBkZWZhdWx0Q3R4LFxuXHRcdGkgPSAwLFxuXHRcdHJldCA9IFwiXCIsXG5cdFx0bGlua0N0eCA9IHBhcmVudFZpZXcuX2xjIHx8IGZhbHNlLCAvLyBGb3IgZGF0YS1saW5rPVwie215VGFnLi4ufVwiLi4uIFNlZSBvbkRhdGFMaW5rZWRUYWdDaGFuZ2Vcblx0XHRjdHggPSBwYXJlbnRWaWV3LmN0eCxcblx0XHRwYXJlbnRUbXBsID0gdG1wbCB8fCBwYXJlbnRWaWV3LnRtcGwsXG5cdFx0Ly8gSWYgdGFnQ3R4cyBpcyBhbiBpbnRlZ2VyLCB0aGVuIGl0IGlzIHRoZSBrZXkgZm9yIHRoZSBjb21waWxlZCBmdW5jdGlvbiB0byByZXR1cm4gdGhlIGJvdW5kVGFnIHRhZ0N0eHNcblx0XHRib3VuZFRhZyA9IHR5cGVvZiB0YWdDdHhzID09PSBcIm51bWJlclwiICYmIHBhcmVudFZpZXcudG1wbC5ibmRzW3RhZ0N0eHMtMV07XG5cblx0aWYgKHRhZ05hbWUuX2lzID09PSBcInRhZ1wiKSB7XG5cdFx0dGFnID0gdGFnTmFtZTtcblx0XHR0YWdOYW1lID0gdGFnLnRhZ05hbWU7XG5cdFx0dGFnQ3R4cyA9IHRhZy50YWdDdHhzO1xuXHRcdHRlbXBsYXRlID0gdGFnLnRlbXBsYXRlO1xuXHR9IGVsc2Uge1xuXHRcdHRhZ0RlZiA9IHBhcmVudFZpZXcuZ2V0UnNjKFwidGFnc1wiLCB0YWdOYW1lKSB8fCBlcnJvcihcIlVua25vd24gdGFnOiB7e1wiICsgdGFnTmFtZSArIFwifX0gXCIpO1xuXHRcdHRlbXBsYXRlID0gdGFnRGVmLnRlbXBsYXRlO1xuXHR9XG5cdGlmIChvbkVycm9yID09PSB1bmRlZmluZWQgJiYgYm91bmRUYWcgJiYgKGJvdW5kVGFnLl9sciA9ICh0YWdEZWYubGF0ZVJlbmRlciAmJiBib3VuZFRhZy5fbHIhPT0gZmFsc2UgfHwgYm91bmRUYWcuX2xyKSkpIHtcblx0XHRvbkVycm9yID0gXCJcIjsgLy8gSWYgbGF0ZVJlbmRlciwgc2V0IHRlbXBvcmFyeSBvbkVycm9yLCB0byBza2lwIGluaXRpYWwgcmVuZGVyaW5nIChhbmQgcmVuZGVyIGp1c3QgXCJcIilcblx0fVxuXHRpZiAob25FcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0ICs9IG9uRXJyb3I7XG5cdFx0dGFnQ3R4cyA9IG9uRXJyb3IgPSBbe3Byb3BzOiB7fSwgYXJnczogW10sIHBhcmFtczoge3Byb3BzOnt9fX1dO1xuXHR9IGVsc2UgaWYgKGJvdW5kVGFnKSB7XG5cdFx0dGFnQ3R4cyA9IGJvdW5kVGFnKHBhcmVudFZpZXcuZGF0YSwgcGFyZW50VmlldywgJHN1Yik7XG5cdH1cblxuXHRsID0gdGFnQ3R4cy5sZW5ndGg7XG5cdGZvciAoOyBpIDwgbDsgaSsrKSB7XG5cdFx0dGFnQ3R4ID0gdGFnQ3R4c1tpXTtcblx0XHRjb250ZW50ID0gdGFnQ3R4LnRtcGw7XG5cdFx0aWYgKCFsaW5rQ3R4IHx8ICFsaW5rQ3R4LnRhZyB8fCBpICYmICFsaW5rQ3R4LnRhZy5pbmxpbmUgfHwgdGFnLl9lciB8fCBjb250ZW50ICYmICtjb250ZW50PT09Y29udGVudCkge1xuXHRcdFx0Ly8gSW5pdGlhbGl6ZSB0YWdDdHhcblx0XHRcdC8vIEZvciBibG9jayB0YWdzLCB0YWdDdHgudG1wbCBpcyBhbiBpbnRlZ2VyID4gMFxuXHRcdFx0aWYgKGNvbnRlbnQgJiYgcGFyZW50VG1wbC50bXBscykge1xuXHRcdFx0XHR0YWdDdHgudG1wbCA9IHRhZ0N0eC5jb250ZW50ID0gcGFyZW50VG1wbC50bXBsc1tjb250ZW50IC0gMV07IC8vIFNldCB0aGUgdG1wbCBwcm9wZXJ0eSB0byB0aGUgY29udGVudCBvZiB0aGUgYmxvY2sgdGFnXG5cdFx0XHR9XG5cdFx0XHR0YWdDdHguaW5kZXggPSBpO1xuXHRcdFx0dGFnQ3R4LmN0eFBybSA9IGNvbnRleHRQYXJhbWV0ZXI7XG5cdFx0XHR0YWdDdHgucmVuZGVyID0gcmVuZGVyQ29udGVudDtcblx0XHRcdHRhZ0N0eC5jdnRBcmdzID0gY29udmVydEFyZ3M7XG5cdFx0XHR0YWdDdHguYm5kQXJncyA9IGNvbnZlcnRCb3VuZEFyZ3M7XG5cdFx0XHR0YWdDdHgudmlldyA9IHBhcmVudFZpZXc7XG5cdFx0XHR0YWdDdHguY3R4ID0gZXh0ZW5kQ3R4KGV4dGVuZEN0eCh0YWdDdHguY3R4LCB0YWdEZWYgJiYgdGFnRGVmLmN0eCksIGN0eCk7IC8vIENsb25lIGFuZCBleHRlbmQgcGFyZW50Vmlldy5jdHhcblx0XHR9XG5cdFx0aWYgKHRtcGwgPSB0YWdDdHgucHJvcHMudG1wbCkge1xuXHRcdFx0Ly8gSWYgdGhlIHRtcGwgcHJvcGVydHkgaXMgb3ZlcnJpZGRlbiwgc2V0IHRoZSB2YWx1ZSAod2hlbiBpbml0aWFsaXppbmcsIG9yLCBpbiBjYXNlIG9mIGJpbmRpbmc6IF50bXBsPS4uLiwgd2hlbiB1cGRhdGluZylcblx0XHRcdHRhZ0N0eC50bXBsID0gcGFyZW50Vmlldy5fZ2V0VG1wbCh0bXBsKTtcblx0XHRcdHRhZ0N0eC5jb250ZW50ID0gdGFnQ3R4LmNvbnRlbnQgfHwgdGFnQ3R4LnRtcGw7XG5cdFx0fVxuXG5cdFx0aWYgKCF0YWcpIHtcblx0XHRcdC8vIFRoaXMgd2lsbCBvbmx5IGJlIGhpdCBmb3IgaW5pdGlhbCB0YWdDdHggKG5vdCBmb3Ige3tlbHNlfX0pIC0gaWYgdGhlIHRhZyBpbnN0YW5jZSBkb2VzIG5vdCBleGlzdCB5ZXRcblx0XHRcdC8vIElmIHRoZSB0YWcgaGFzIG5vdCBhbHJlYWR5IGJlZW4gaW5zdGFudGlhdGVkLCB3ZSB3aWxsIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZS5cblx0XHRcdC8vIH50YWcgd2lsbCBhY2Nlc3MgdGhlIHRhZywgZXZlbiB3aXRoaW4gdGhlIHJlbmRlcmluZyBvZiB0aGUgdGVtcGxhdGUgY29udGVudCBvZiB0aGlzIHRhZy5cblx0XHRcdC8vIEZyb20gY2hpbGQvZGVzY2VuZGFudCB0YWdzLCBjYW4gYWNjZXNzIHVzaW5nIH50YWcucGFyZW50LCBvciB+cGFyZW50VGFncy50YWdOYW1lXG5cdFx0XHR0YWcgPSBuZXcgdGFnRGVmLl9jdHIoKTtcblx0XHRcdGNhbGxJbml0ID0gISF0YWcuaW5pdDtcblxuXHRcdFx0dGFnLnBhcmVudCA9IHBhcmVudFRhZyA9IGN0eCAmJiBjdHgudGFnO1xuXHRcdFx0dGFnLnRhZ0N0eHMgPSB0YWdDdHhzO1xuXG5cdFx0XHRpZiAobGlua0N0eCkge1xuXHRcdFx0XHR0YWcuaW5saW5lID0gZmFsc2U7XG5cdFx0XHRcdGxpbmtDdHgudGFnID0gdGFnO1xuXHRcdFx0fVxuXHRcdFx0dGFnLmxpbmtDdHggPSBsaW5rQ3R4O1xuXHRcdFx0aWYgKHRhZy5fLmJuZCA9IGJvdW5kVGFnIHx8IGxpbmtDdHguZm4pIHtcblx0XHRcdFx0Ly8gQm91bmQgaWYge157dGFnLi4ufX0gb3IgZGF0YS1saW5rPVwie3RhZy4uLn1cIlxuXHRcdFx0XHR0YWcuXy50aHMgPSB0YWdDdHgucGFyYW1zLnByb3BzLnRoaXM7IC8vIFRhZyBoYXMgYSB0aGlzPWV4cHIgYmluZGluZywgdG8gZ2V0IGphdmFzY3JpcHQgcmVmZXJlbmNlIHRvIHRhZyBpbnN0YW5jZVxuXHRcdFx0XHR0YWcuXy5sdCA9IHRhZ0N0eHMubHQ7IC8vIElmIGEgbGF0ZSBwYXRoIEBzb21lLnBhdGggaGFzIG5vdCByZXR1cm5lZCBAc29tZSBvYmplY3QsIG1hcmsgdGFnIGFzIGxhdGVcblx0XHRcdFx0dGFnLl8uYXJyVndzID0ge307XG5cdFx0XHR9IGVsc2UgaWYgKHRhZy5kYXRhQm91bmRPbmx5KSB7XG5cdFx0XHRcdGVycm9yKHRhZ05hbWUgKyBcIiBtdXN0IGJlIGRhdGEtYm91bmQ6XFxue157XCIgKyB0YWdOYW1lICsgXCJ9fVwiKTtcblx0XHRcdH1cblx0XHRcdC8vVE9ETyBiZXR0ZXIgcGVyZiBmb3IgY2hpbGRUYWdzKCkgLSBrZWVwIGNoaWxkIHRhZy50YWdzIGFycmF5LCAoYW5kIHJlbW92ZSBjaGlsZCwgd2hlbiBkaXNwb3NlZClcblx0XHRcdC8vIHRhZy50YWdzID0gW107XG5cdFx0fSBlbHNlIGlmIChsaW5rQ3R4ICYmIGxpbmtDdHguZm4uX2xyKSB7XG5cdFx0XHRjYWxsSW5pdCA9ICEhdGFnLmluaXQ7XG5cdFx0fVxuXHRcdHRhZ0RhdGFNYXAgPSB0YWcuZGF0YU1hcDtcblxuXHRcdHRhZ0N0eC50YWcgPSB0YWc7XG5cdFx0aWYgKHRhZ0RhdGFNYXAgJiYgdGFnQ3R4cykge1xuXHRcdFx0dGFnQ3R4Lm1hcCA9IHRhZ0N0eHNbaV0ubWFwOyAvLyBDb3B5IG92ZXIgdGhlIGNvbXBpbGVkIG1hcCBpbnN0YW5jZSBmcm9tIHRoZSBwcmV2aW91cyB0YWdDdHhzIHRvIHRoZSByZWZyZXNoZWQgb25lc1xuXHRcdH1cblx0XHRpZiAoIXRhZy5mbG93KSB7XG5cdFx0XHR0YWdDdHhDdHggPSB0YWdDdHguY3R4ID0gdGFnQ3R4LmN0eCB8fCB7fTtcblxuXHRcdFx0Ly8gdGFncyBoYXNoOiB0YWcuY3R4LnRhZ3MsIG1lcmdlZCB3aXRoIHBhcmVudFZpZXcuY3R4LnRhZ3MsXG5cdFx0XHR0YWdzID0gdGFnLnBhcmVudHMgPSB0YWdDdHhDdHgucGFyZW50VGFncyA9IGN0eCAmJiBleHRlbmRDdHgodGFnQ3R4Q3R4LnBhcmVudFRhZ3MsIGN0eC5wYXJlbnRUYWdzKSB8fCB7fTtcblx0XHRcdGlmIChwYXJlbnRUYWcpIHtcblx0XHRcdFx0dGFnc1twYXJlbnRUYWcudGFnTmFtZV0gPSBwYXJlbnRUYWc7XG5cdFx0XHRcdC8vVE9ETyBiZXR0ZXIgcGVyZiBmb3IgY2hpbGRUYWdzOiBwYXJlbnRUYWcudGFncy5wdXNoKHRhZyk7XG5cdFx0XHR9XG5cdFx0XHR0YWdzW3RhZy50YWdOYW1lXSA9IHRhZ0N0eEN0eC50YWcgPSB0YWc7XG5cdFx0XHR0YWdDdHhDdHgudGFnQ3R4ID0gdGFnQ3R4O1xuXHRcdH1cblx0fVxuXHRpZiAoISh0YWcuX2VyID0gb25FcnJvcikpIHtcblx0XHR0YWdIYW5kbGVyc0Zyb21Qcm9wcyh0YWcsIHRhZ0N0eHNbMF0pO1xuXHRcdHRhZy5yZW5kZXJpbmcgPSB7cm5kcjogdGFnLnJlbmRlcmluZ307IC8vIFByb3ZpZGUgb2JqZWN0IGZvciBzdGF0ZSBkdXJpbmcgcmVuZGVyIGNhbGxzIHRvIHRhZyBhbmQgZWxzZXMuIChVc2VkIGJ5IHt7aWZ9fSBhbmQge3tmb3J9fS4uLilcblx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7IC8vIEl0ZXJhdGUgdGFnQ3R4IGZvciBlYWNoIHt7ZWxzZX19IGJsb2NrXG5cdFx0XHR0YWdDdHggPSB0YWcudGFnQ3R4ID0gdGFnQ3R4c1tpXTtcblx0XHRcdHByb3BzID0gdGFnQ3R4LnByb3BzO1xuXHRcdFx0dGFnLmN0eCA9IHRhZ0N0eC5jdHg7XG5cblx0XHRcdGlmICghaSkge1xuXHRcdFx0XHRpZiAoY2FsbEluaXQpIHtcblx0XHRcdFx0XHR0YWcuaW5pdCh0YWdDdHgsIGxpbmtDdHgsIHRhZy5jdHgpO1xuXHRcdFx0XHRcdGNhbGxJbml0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghdGFnQ3R4LmFyZ3MubGVuZ3RoICYmIHRhZ0N0eC5hcmdEZWZhdWx0ICE9PSBmYWxzZSAmJiB0YWcuYXJnRGVmYXVsdCAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0YWdDdHguYXJncyA9IGFyZ3MgPSBbdGFnQ3R4LnZpZXcuZGF0YV07IC8vIE1pc3NpbmcgZmlyc3QgYXJnIGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50IGRhdGEgY29udGV4dFxuXHRcdFx0XHRcdHRhZ0N0eC5wYXJhbXMuYXJncyA9IFtcIiNkYXRhXCJdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YmluZFRvID0gYmluZFRvT3JCaW5kRnJvbShcImJpbmRUb1wiKTtcblxuXHRcdFx0XHRpZiAodGFnLmJpbmRUbyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGFnLmJpbmRUbyA9IGJpbmRUbztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0YWcuYmluZEZyb20gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRhZy5iaW5kRnJvbSA9IGJpbmRUb09yQmluZEZyb20oXCJiaW5kRnJvbVwiKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0YWcuYmluZFRvKSB7XG5cdFx0XHRcdFx0dGFnLmJpbmRGcm9tID0gdGFnLmJpbmRUbyA9IGJpbmRUbztcblx0XHRcdFx0fVxuXHRcdFx0XHRiaW5kRnJvbSA9IHRhZy5iaW5kRnJvbSB8fCBiaW5kVG87XG5cblx0XHRcdFx0YmluZFRvTGVuZ3RoID0gYmluZFRvLmxlbmd0aDtcblx0XHRcdFx0YmluZEZyb21MZW5ndGggPSBiaW5kRnJvbS5sZW5ndGg7XG5cblx0XHRcdFx0aWYgKHRhZy5fLmJuZCAmJiAobGlua2VkRWxlbWVudCA9IHRhZy5saW5rZWRFbGVtZW50KSkge1xuXHRcdFx0XHRcdHRhZy5saW5rZWRFbGVtZW50ID0gbGlua2VkRWxlbWVudCA9ICRpc0FycmF5KGxpbmtlZEVsZW1lbnQpID8gbGlua2VkRWxlbWVudDogW2xpbmtlZEVsZW1lbnRdO1xuXG5cdFx0XHRcdFx0aWYgKGJpbmRUb0xlbmd0aCAhPT0gbGlua2VkRWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGVycm9yKFwibGlua2VkRWxlbWVudCBub3Qgc2FtZSBsZW5ndGggYXMgYmluZFRvXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobGlua2VkRWxlbWVudCA9IHRhZy5saW5rZWRDdHhQYXJhbSkge1xuXHRcdFx0XHRcdHRhZy5saW5rZWRDdHhQYXJhbSA9IGxpbmtlZEVsZW1lbnQgPSAkaXNBcnJheShsaW5rZWRFbGVtZW50KSA/IGxpbmtlZEVsZW1lbnQ6IFtsaW5rZWRFbGVtZW50XTtcblxuXHRcdFx0XHRcdGlmIChiaW5kRnJvbUxlbmd0aCAhPT0gbGlua2VkRWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGVycm9yKFwibGlua2VkQ3R4UGFyYW0gbm90IHNhbWUgbGVuZ3RoIGFzIGJpbmRGcm9tL2JpbmRUb1wiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYmluZEZyb20pIHtcblx0XHRcdFx0XHR0YWcuXy5mcm9tSW5kZXggPSB7fTsgLy8gSGFzaCBvZiBiaW5kRnJvbSBpbmRleCB3aGljaCBoYXMgc2FtZSBwYXRoIHZhbHVlIGFzIGJpbmRUbyBpbmRleC4gZnJvbUluZGV4ID0gdGFnLl8uZnJvbUluZGV4W3RvSW5kZXhdXG5cdFx0XHRcdFx0dGFnLl8udG9JbmRleCA9IHt9OyAvLyBIYXNoIG9mIGJpbmRGcm9tIGluZGV4IHdoaWNoIGhhcyBzYW1lIHBhdGggdmFsdWUgYXMgYmluZFRvIGluZGV4LiBmcm9tSW5kZXggPSB0YWcuXy5mcm9tSW5kZXhbdG9JbmRleF1cblx0XHRcdFx0XHRuID0gYmluZEZyb21MZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKG4tLSkge1xuXHRcdFx0XHRcdFx0a2V5ID0gYmluZEZyb21bbl07XG5cdFx0XHRcdFx0XHRtID0gYmluZFRvTGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKG0tLSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBiaW5kVG9bbV0pIHtcblx0XHRcdFx0XHRcdFx0XHR0YWcuXy5mcm9tSW5kZXhbbV0gPSBuO1xuXHRcdFx0XHRcdFx0XHRcdHRhZy5fLnRvSW5kZXhbbl0gPSBtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGxpbmtDdHgpIHtcblx0XHRcdFx0XHQvLyBTZXQgYXR0ciBvbiBsaW5rQ3R4IHRvIGVuc3VyZSBvdXRwdXR0aW5nIHRvIHRoZSBjb3JyZWN0IHRhcmdldCBhdHRyaWJ1dGUuXG5cdFx0XHRcdFx0Ly8gU2V0dGluZyBlaXRoZXIgbGlua0N0eC5hdHRyIG9yIHRoaXMuYXR0ciBpbiB0aGUgaW5pdCgpIGFsbG93cyBwZXItaW5zdGFuY2UgY2hvaWNlIG9mIHRhcmdldCBhdHRyaWIuXG5cdFx0XHRcdFx0bGlua0N0eC5hdHRyID0gdGFnLmF0dHIgPSBsaW5rQ3R4LmF0dHIgfHwgdGFnLmF0dHIgfHwgbGlua0N0eC5fZGZBdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRhdHRyID0gdGFnLmF0dHI7XG5cdFx0XHRcdHRhZy5fLm5vVndzID0gYXR0ciAmJiBhdHRyICE9PSBIVE1MO1xuXHRcdFx0fVxuXHRcdFx0YXJncyA9IHRhZy5jdnRBcmdzKGkpO1xuXHRcdFx0aWYgKHRhZy5saW5rZWRDdHhQYXJhbSkge1xuXHRcdFx0XHRiZEFyZ3MgPSB0YWcuY3Z0QXJncyhpLCAxKTtcblx0XHRcdFx0bSA9IGJpbmRGcm9tTGVuZ3RoO1xuXHRcdFx0XHRkZWZhdWx0Q3R4ID0gdGFnLmNvbnN0cnVjdG9yLnByb3RvdHlwZS5jdHg7XG5cdFx0XHRcdHdoaWxlIChtLS0pIHtcblx0XHRcdFx0XHRpZiAoY3R4UHJtID0gdGFnLmxpbmtlZEN0eFBhcmFtW21dKSB7XG5cdFx0XHRcdFx0XHRrZXkgPSBiaW5kRnJvbVttXTtcblx0XHRcdFx0XHRcdGluaXRWYWwgPSBiZEFyZ3NbbV07XG5cdFx0XHRcdFx0XHQvLyBDcmVhdGUgdGFnIGNvbnRleHR1YWwgcGFyYW1ldGVyXG5cdFx0XHRcdFx0XHR0YWdDdHguY3R4W2N0eFBybV0gPSAkc3ViLl9jcChcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdEN0eCAmJiBpbml0VmFsID09PSB1bmRlZmluZWQgPyBkZWZhdWx0Q3R4W2N0eFBybV06IGluaXRWYWwsXG5cdFx0XHRcdFx0XHRcdGluaXRWYWwgIT09IHVuZGVmaW5lZCAmJiBhcmdPclByb3AodGFnQ3R4LnBhcmFtcywga2V5KSxcblx0XHRcdFx0XHRcdFx0dGFnQ3R4LnZpZXcsXG5cdFx0XHRcdFx0XHRcdHRhZy5fLmJuZCAmJiB7dGFnOiB0YWcsIGN2dDogdGFnLmNvbnZlcnQsIGluZDogbSwgdGFnRWxzZTogaX1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG1hcERlZiA9IHByb3BzLmRhdGFNYXAgfHwgdGFnRGF0YU1hcCkgJiYgKGFyZ3MubGVuZ3RoIHx8IHByb3BzLmRhdGFNYXApKSB7XG5cdFx0XHRcdHRoaXNNYXAgPSB0YWdDdHgubWFwO1xuXHRcdFx0XHRpZiAoIXRoaXNNYXAgfHwgdGhpc01hcC5zcmMgIT09IGFyZ3NbMF0gfHwgaXNVcGRhdGUpIHtcblx0XHRcdFx0XHRpZiAodGhpc01hcCAmJiB0aGlzTWFwLnNyYykge1xuXHRcdFx0XHRcdFx0dGhpc01hcC51bm1hcCgpOyAvLyBvbmx5IGNhbGxlZCBpZiBvYnNlcnZhYmxlIG1hcCAtIG5vdCB3aGVuIG9ubHkgdXNlZCBpbiBKc1JlbmRlciwgZS5nLiBieSB7e3Byb3BzfX1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bWFwRGVmLm1hcChhcmdzWzBdLCB0YWdDdHgsIHRoaXNNYXAsICF0YWcuXy5ibmQpO1xuXHRcdFx0XHRcdHRoaXNNYXAgPSB0YWdDdHgubWFwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFyZ3MgPSBbdGhpc01hcC50Z3RdO1xuXHRcdFx0fVxuXG5cdFx0XHRpdGVtUmV0ID0gdW5kZWZpbmVkO1xuXHRcdFx0aWYgKHRhZy5yZW5kZXIpIHtcblx0XHRcdFx0aXRlbVJldCA9IHRhZy5yZW5kZXIuYXBwbHkodGFnLCBhcmdzKTtcblx0XHRcdFx0aWYgKHBhcmVudFZpZXcubGlua2VkICYmIGl0ZW1SZXQgJiYgIXJXcmFwcGVkSW5WaWV3TWFya2VyLnRlc3QoaXRlbVJldCkpIHtcblx0XHRcdFx0XHQvLyBXaGVuIGEgdGFnIHJlbmRlcnMgY29udGVudCBmcm9tIHRoZSByZW5kZXIgbWV0aG9kLCB3aXRoIGRhdGEgbGlua2luZyB0aGVuIHdlIG5lZWQgdG8gd3JhcCB3aXRoIHZpZXcgbWFya2VycywgaWYgYWJzZW50LFxuXHRcdFx0XHRcdC8vIHRvIHByb3ZpZGUgYSBjb250ZW50VmlldyBmb3IgdGhlIHRhZywgd2hpY2ggd2lsbCBjb3JyZWN0bHkgZGlzcG9zZSBiaW5kaW5ncyBpZiBkZWxldGVkLiBUaGUgJ3RtcGwnIGZvciB0aGlzIHZpZXcgd2lsbFxuXHRcdFx0XHRcdC8vIGJlIGEgZHVtYmVkLWRvd24gdGVtcGxhdGUgd2hpY2ggd2lsbCBhbHdheXMgcmV0dXJuIHRoZSAgaXRlbVJldCBzdHJpbmcgKG5vIG1hdHRlciB3aGF0IHRoZSBkYXRhIGlzKS4gVGhlIGl0ZW1SZXQgc3RyaW5nXG5cdFx0XHRcdFx0Ly8gaXMgbm90IGNvbXBpbGVkIGFzIHRlbXBsYXRlIG1hcmt1cCwgc28gY2FuIGluY2x1ZGUgXCJ7e1wiIG9yIFwifX1cIiB3aXRob3V0IHRyaWdnZXJpbmcgc3ludGF4IGVycm9yc1xuXHRcdFx0XHRcdHRtcGwgPSB7IC8vICdEdW1iZWQtZG93bicgdGVtcGxhdGUgd2hpY2ggYWx3YXlzIHJlbmRlcnMgJ3N0YXRpYycgaXRlbVJldCBzdHJpbmdcblx0XHRcdFx0XHRcdGxpbmtzOiBbXVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dG1wbC5yZW5kZXIgPSB0bXBsLmZuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbVJldDtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGl0ZW1SZXQgPSByZW5kZXJXaXRoVmlld3ModG1wbCwgcGFyZW50Vmlldy5kYXRhLCB1bmRlZmluZWQsIHRydWUsIHBhcmVudFZpZXcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0YWcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWFyZ3MubGVuZ3RoKSB7XG5cdFx0XHRcdGFyZ3MgPSBbcGFyZW50Vmlld107IC8vIG5vIGFyZ3VtZW50cyAtIChlLmcuIHt7ZWxzZX19KSBnZXQgZGF0YSBjb250ZXh0IGZyb20gdmlldy5cblx0XHRcdH1cblx0XHRcdGlmIChpdGVtUmV0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29udGVudEN0eCA9IGFyZ3NbMF07IC8vIERlZmF1bHQgZGF0YSBjb250ZXh0IGZvciB3cmFwcGVkIGJsb2NrIGNvbnRlbnQgaXMgdGhlIGZpcnN0IGFyZ3VtZW50XG5cdFx0XHRcdGlmICh0YWcuY29udGVudEN0eCkgeyAvLyBTZXQgdGFnLmNvbnRlbnRDdHggdG8gdHJ1ZSwgdG8gaW5oZXJpdCBwYXJlbnQgY29udGV4dCwgb3IgdG8gYSBmdW5jdGlvbiB0byBwcm92aWRlIGFsdGVybmF0ZSBjb250ZXh0LlxuXHRcdFx0XHRcdGNvbnRlbnRDdHggPSB0YWcuY29udGVudEN0eCA9PT0gdHJ1ZSA/IHBhcmVudFZpZXcgOiB0YWcuY29udGVudEN0eChjb250ZW50Q3R4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtUmV0ID0gdGFnQ3R4LnJlbmRlcihjb250ZW50Q3R4LCB0cnVlKSB8fCAoaXNVcGRhdGUgPyB1bmRlZmluZWQgOiBcIlwiKTtcblx0XHRcdH1cblx0XHRcdHJldCA9IHJldFxuXHRcdFx0XHQ/IHJldCArIChpdGVtUmV0IHx8IFwiXCIpXG5cdFx0XHRcdDogaXRlbVJldCAhPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBcIlwiICsgaXRlbVJldFxuXHRcdFx0XHRcdDogdW5kZWZpbmVkOyAvLyBJZiBubyByZXR1cm4gdmFsdWUgZnJvbSByZW5kZXIsIGFuZCBubyB0ZW1wbGF0ZS9jb250ZW50IHRhZ0N0eC5yZW5kZXIoLi4uKSwgcmV0dXJuIHVuZGVmaW5lZFxuXHRcdH1cblx0XHR0YWcucmVuZGVyaW5nID0gdGFnLnJlbmRlcmluZy5ybmRyOyAvLyBSZW1vdmUgdGFnLnJlbmRlcmluZyBvYmplY3QgKGlmIHRoaXMgaXMgb3V0ZXJtb3N0IHJlbmRlciBjYWxsLiAoSW4gY2FzZSBvZiBuZXN0ZWQgY2FsbHMpXG5cdH1cblx0dGFnLnRhZ0N0eCA9IHRhZ0N0eHNbMF07XG5cdHRhZy5jdHggPSB0YWcudGFnQ3R4LmN0eDtcblxuXHRpZiAodGFnLl8ubm9Wd3MgJiYgdGFnLmlubGluZSkge1xuXHRcdC8vIGlubGluZSB0YWcgd2l0aCBhdHRyIHNldCB0byBcInRleHRcIiB3aWxsIGluc2VydCBIVE1MLWVuY29kZWQgY29udGVudCAtIGFzIGlmIGl0IHdhcyBlbGVtZW50LWJhc2VkIGlubmVyVGV4dFxuXHRcdHJldCA9IGF0dHIgPT09IFwidGV4dFwiXG5cdFx0XHQ/ICRjb252ZXJ0ZXJzLmh0bWwocmV0KVxuXHRcdFx0OiBcIlwiO1xuXHR9XG5cdHJldHVybiBib3VuZFRhZyAmJiBwYXJlbnRWaWV3Ll8ub25SZW5kZXJcblx0XHQvLyBDYWxsIG9uUmVuZGVyICh1c2VkIGJ5IEpzVmlld3MgaWYgcHJlc2VudCwgdG8gYWRkIGJpbmRpbmcgYW5ub3RhdGlvbnMgYXJvdW5kIHJlbmRlcmVkIGNvbnRlbnQpXG5cdFx0PyBwYXJlbnRWaWV3Ll8ub25SZW5kZXIocmV0LCBwYXJlbnRWaWV3LCB0YWcpXG5cdFx0OiByZXQ7XG59XG5cbi8vPT09PT09PT09PT09PT09PT1cbi8vIFZpZXcgY29uc3RydWN0b3Jcbi8vPT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gVmlldyhjb250ZXh0LCB0eXBlLCBwYXJlbnRWaWV3LCBkYXRhLCB0ZW1wbGF0ZSwga2V5LCBvblJlbmRlciwgY29udGVudFRtcGwpIHtcblx0Ly8gQ29uc3RydWN0b3IgZm9yIHZpZXcgb2JqZWN0IGluIHZpZXcgaGllcmFyY2h5LiAoQXVnbWVudGVkIGJ5IEpzVmlld3MgaWYgSnNWaWV3cyBpcyBsb2FkZWQpXG5cdHZhciB2aWV3cywgcGFyZW50Vmlld18sIHRhZywgc2VsZl8sXG5cdFx0c2VsZiA9IHRoaXMsXG5cdFx0aXNBcnJheSA9IHR5cGUgPT09IFwiYXJyYXlcIjtcblx0XHQvLyBJZiB0aGUgZGF0YSBpcyBhbiBhcnJheSwgdGhpcyBpcyBhbiAnYXJyYXkgdmlldycgd2l0aCBhIHZpZXdzIGFycmF5IGZvciBlYWNoIGNoaWxkICdpdGVtIHZpZXcnXG5cdFx0Ly8gSWYgdGhlIGRhdGEgaXMgbm90IGFuIGFycmF5LCB0aGlzIGlzIGFuICdpdGVtIHZpZXcnIHdpdGggYSB2aWV3cyAnaGFzaCcgb2JqZWN0IGZvciBhbnkgY2hpbGQgbmVzdGVkIHZpZXdzXG5cblx0c2VsZi5jb250ZW50ID0gY29udGVudFRtcGw7XG5cdHNlbGYudmlld3MgPSBpc0FycmF5ID8gW10gOiB7fTtcblx0c2VsZi5kYXRhID0gZGF0YTtcblx0c2VsZi50bXBsID0gdGVtcGxhdGU7XG5cdHNlbGZfID0gc2VsZi5fID0ge1xuXHRcdGtleTogMCxcblx0XHQvLyAuXy51c2VLZXkgaXMgbm9uIHplcm8gaWYgaXMgbm90IGFuICdhcnJheSB2aWV3JyAob3duaW5nIGEgZGF0YSBhcnJheSkuIFVzZSB0aGlzIGFzIG5leHQga2V5IGZvciBhZGRpbmcgdG8gY2hpbGQgdmlld3MgaGFzaFxuXHRcdHVzZUtleTogaXNBcnJheSA/IDAgOiAxLFxuXHRcdGlkOiBcIlwiICsgdmlld0lkKyssXG5cdFx0b25SZW5kZXI6IG9uUmVuZGVyLFxuXHRcdGJuZHM6IHt9XG5cdH07XG5cdHNlbGYubGlua2VkID0gISFvblJlbmRlcjtcblx0c2VsZi50eXBlID0gdHlwZSB8fCBcInRvcFwiO1xuXG5cdGlmICghcGFyZW50VmlldyB8fCBwYXJlbnRWaWV3LnR5cGUgPT09IFwidG9wXCIpIHtcblx0XHQoc2VsZi5jdHggPSBjb250ZXh0IHx8IHt9KS5yb290ID0gc2VsZi5kYXRhO1xuXHR9XG5cblx0aWYgKHNlbGYucGFyZW50ID0gcGFyZW50Vmlldykge1xuXHRcdHNlbGYucm9vdCA9IHBhcmVudFZpZXcucm9vdCB8fCBzZWxmOyAvLyB2aWV3IHdob3NlIHBhcmVudCBpcyB0b3Agdmlld1xuXHRcdHZpZXdzID0gcGFyZW50Vmlldy52aWV3cztcblx0XHRwYXJlbnRWaWV3XyA9IHBhcmVudFZpZXcuXztcblx0XHRzZWxmLmlzVG9wID0gcGFyZW50Vmlld18uc2NwOyAvLyBJcyB0b3AgY29udGVudCB2aWV3IG9mIGEgbGluayhcIiNjb250YWluZXJcIiwgLi4uKSBjYWxsXG5cdFx0c2VsZi5zY29wZSA9ICghY29udGV4dC50YWcgfHwgY29udGV4dC50YWcgPT09IHBhcmVudFZpZXcuY3R4LnRhZykgJiYgIXNlbGYuaXNUb3AgJiYgcGFyZW50Vmlldy5zY29wZSB8fCBzZWxmO1xuXHRcdC8vIFNjb3BlIGZvciBjb250ZXh0UGFyYW1zIC0gY2xvc2VzdCBub24gZmxvdyB0YWcgYW5jZXN0b3Igb3Igcm9vdCB2aWV3XG5cdFx0aWYgKHBhcmVudFZpZXdfLnVzZUtleSkge1xuXHRcdFx0Ly8gUGFyZW50IGlzIG5vdCBhbiAnYXJyYXkgdmlldycuIEFkZCB0aGlzIHZpZXcgdG8gaXRzIHZpZXdzIG9iamVjdFxuXHRcdFx0Ly8gc2VsZi5fa2V5ID0gaXMgdGhlIGtleSBpbiB0aGUgcGFyZW50IHZpZXcgaGFzaFxuXHRcdFx0dmlld3Nbc2VsZl8ua2V5ID0gXCJfXCIgKyBwYXJlbnRWaWV3Xy51c2VLZXkrK10gPSBzZWxmO1xuXHRcdFx0c2VsZi5pbmRleCA9IGluZGV4U3RyO1xuXHRcdFx0c2VsZi5nZXRJbmRleCA9IGdldE5lc3RlZEluZGV4O1xuXHRcdH0gZWxzZSBpZiAodmlld3MubGVuZ3RoID09PSAoc2VsZl8ua2V5ID0gc2VsZi5pbmRleCA9IGtleSkpIHsgLy8gUGFyZW50IGlzIGFuICdhcnJheSB2aWV3Jy4gQWRkIHRoaXMgdmlldyB0byBpdHMgdmlld3MgYXJyYXlcblx0XHRcdHZpZXdzLnB1c2goc2VsZik7IC8vIEFkZGluZyB0byBlbmQgb2Ygdmlld3MgYXJyYXkuIChVc2luZyBwdXNoIHdoZW4gcG9zc2libGUgLSBiZXR0ZXIgcGVyZiB0aGFuIHNwbGljZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmlld3Muc3BsaWNlKGtleSwgMCwgc2VsZik7IC8vIEluc2VydGluZyBpbiB2aWV3cyBhcnJheVxuXHRcdH1cblx0XHQvLyBJZiBubyBjb250ZXh0IHdhcyBwYXNzZWQgaW4sIHVzZSBwYXJlbnQgY29udGV4dFxuXHRcdC8vIElmIGNvbnRleHQgd2FzIHBhc3NlZCBpbiwgaXQgc2hvdWxkIGhhdmUgYmVlbiBtZXJnZWQgYWxyZWFkeSB3aXRoIHBhcmVudCBjb250ZXh0XG5cdFx0c2VsZi5jdHggPSBjb250ZXh0IHx8IHBhcmVudFZpZXcuY3R4O1xuXHR9IGVsc2UgaWYgKHR5cGUpIHtcblx0XHRzZWxmLnJvb3QgPSBzZWxmOyAvLyB2aWV3IHdob3NlIHBhcmVudCBpcyB0b3Agdmlld1xuXHR9XG59XG5cblZpZXcucHJvdG90eXBlID0ge1xuXHRnZXQ6IGdldFZpZXcsXG5cdGdldEluZGV4OiBnZXRJbmRleCxcblx0Y3R4UHJtOiBjb250ZXh0UGFyYW1ldGVyLFxuXHRnZXRSc2M6IGdldFJlc291cmNlLFxuXHRfZ2V0VG1wbDogZ2V0VGVtcGxhdGUsXG5cdF9nZXRPYjogZ2V0UGF0aE9iamVjdCxcblx0X2lzOiBcInZpZXdcIlxufTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZWdpc3RyYXRpb25cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBjb21waWxlQ2hpbGRSZXNvdXJjZXMocGFyZW50VG1wbCkge1xuXHR2YXIgc3RvcmVOYW1lLCBzdG9yZU5hbWVzLCByZXNvdXJjZXM7XG5cdGZvciAoc3RvcmVOYW1lIGluIGpzdlN0b3Jlcykge1xuXHRcdHN0b3JlTmFtZXMgPSBzdG9yZU5hbWUgKyBcInNcIjtcblx0XHRpZiAocGFyZW50VG1wbFtzdG9yZU5hbWVzXSkge1xuXHRcdFx0cmVzb3VyY2VzID0gcGFyZW50VG1wbFtzdG9yZU5hbWVzXTsgICAgLy8gUmVzb3VyY2VzIG5vdCB5ZXQgY29tcGlsZWRcblx0XHRcdHBhcmVudFRtcGxbc3RvcmVOYW1lc10gPSB7fTsgICAgICAgICAgICAgICAvLyBSZW1vdmUgdW5jb21waWxlZCByZXNvdXJjZXNcblx0XHRcdCR2aWV3c1tzdG9yZU5hbWVzXShyZXNvdXJjZXMsIHBhcmVudFRtcGwpOyAvLyBBZGQgYmFjayBpbiB0aGUgY29tcGlsZWQgcmVzb3VyY2VzXG5cdFx0fVxuXHR9XG59XG5cbi8vPT09PT09PT09PT09PT09XG4vLyBjb21waWxlVGFnXG4vLz09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBjb21waWxlVGFnKG5hbWUsIHRhZ0RlZiwgcGFyZW50VG1wbCkge1xuXHR2YXIgdG1wbCwgYmFzZVRhZywgcHJvcCxcblx0XHRjb21waWxlZERlZiA9IG5ldyAkc3ViLl90ZygpO1xuXG5cdGZ1bmN0aW9uIFRhZygpIHtcblx0XHR2YXIgdGFnID0gdGhpcztcblx0XHR0YWcuXyA9IHtcblx0XHRcdHVubGlua2VkOiB0cnVlXG5cdFx0fTtcblx0XHR0YWcuaW5saW5lID0gdHJ1ZTtcblx0XHR0YWcudGFnTmFtZSA9IG5hbWU7XG5cdH1cblxuXHRpZiAoJGlzRnVuY3Rpb24odGFnRGVmKSkge1xuXHRcdC8vIFNpbXBsZSB0YWcgZGVjbGFyZWQgYXMgZnVuY3Rpb24uIE5vIHByZXNlbnRlciBpbnN0YW50YXRpb24uXG5cdFx0dGFnRGVmID0ge1xuXHRcdFx0ZGVwZW5kczogdGFnRGVmLmRlcGVuZHMsXG5cdFx0XHRyZW5kZXI6IHRhZ0RlZlxuXHRcdH07XG5cdH0gZWxzZSBpZiAoXCJcIiArIHRhZ0RlZiA9PT0gdGFnRGVmKSB7XG5cdFx0dGFnRGVmID0ge3RlbXBsYXRlOiB0YWdEZWZ9O1xuXHR9XG5cblx0aWYgKGJhc2VUYWcgPSB0YWdEZWYuYmFzZVRhZykge1xuXHRcdHRhZ0RlZi5mbG93ID0gISF0YWdEZWYuZmxvdzsgLy8gU2V0IGZsb3cgcHJvcGVydHksIHNvIGRlZmF1bHRzIHRvIGZhbHNlIGV2ZW4gaWYgYmFzZVRhZyBoYXMgZmxvdz10cnVlXG5cdFx0YmFzZVRhZyA9IFwiXCIgKyBiYXNlVGFnID09PSBiYXNlVGFnXG5cdFx0XHQ/IChwYXJlbnRUbXBsICYmIHBhcmVudFRtcGwudGFnc1tiYXNlVGFnXSB8fCAkdGFnc1tiYXNlVGFnXSlcblx0XHRcdDogYmFzZVRhZztcblx0XHRpZiAoIWJhc2VUYWcpIHtcblx0XHRcdGVycm9yKCdiYXNlVGFnOiBcIicgKyB0YWdEZWYuYmFzZVRhZyArICdcIiBub3QgZm91bmQnKTtcblx0XHR9XG5cdFx0Y29tcGlsZWREZWYgPSAkZXh0ZW5kKGNvbXBpbGVkRGVmLCBiYXNlVGFnKTtcblxuXHRcdGZvciAocHJvcCBpbiB0YWdEZWYpIHtcblx0XHRcdGNvbXBpbGVkRGVmW3Byb3BdID0gZ2V0TWV0aG9kKGJhc2VUYWdbcHJvcF0sIHRhZ0RlZltwcm9wXSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbXBpbGVkRGVmID0gJGV4dGVuZChjb21waWxlZERlZiwgdGFnRGVmKTtcblx0fVxuXG5cdC8vIFRhZyBkZWNsYXJlZCBhcyBvYmplY3QsIHVzZWQgYXMgdGhlIHByb3RvdHlwZSBmb3IgdGFnIGluc3RhbnRpYXRpb24gKGNvbnRyb2wvcHJlc2VudGVyKVxuXHRpZiAoKHRtcGwgPSBjb21waWxlZERlZi50ZW1wbGF0ZSkgIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbXBpbGVkRGVmLnRlbXBsYXRlID0gXCJcIiArIHRtcGwgPT09IHRtcGwgPyAoJHRlbXBsYXRlc1t0bXBsXSB8fCAkdGVtcGxhdGVzKHRtcGwpKSA6IHRtcGw7XG5cdH1cblx0KFRhZy5wcm90b3R5cGUgPSBjb21waWxlZERlZikuY29uc3RydWN0b3IgPSBjb21waWxlZERlZi5fY3RyID0gVGFnO1xuXG5cdGlmIChwYXJlbnRUbXBsKSB7XG5cdFx0Y29tcGlsZWREZWYuX3BhcmVudFRtcGwgPSBwYXJlbnRUbXBsO1xuXHR9XG5cdHJldHVybiBjb21waWxlZERlZjtcbn1cblxuZnVuY3Rpb24gYmFzZUFwcGx5KGFyZ3MpIHtcblx0Ly8gSW4gZGVyaXZlZCBtZXRob2QgKG9yIGhhbmRsZXIgZGVjbGFyZWQgZGVjbGFyYXRpdmVseSBhcyBpbiB7ezpmb28gb25DaGFuZ2U9fmZvb0NoYW5nZWR9fSBjYW4gY2FsbCBiYXNlIG1ldGhvZCxcblx0Ly8gdXNpbmcgdGhpcy5iYXNlQXBwbHkoYXJndW1lbnRzKSAoRXF1aXZhbGVudCB0byB0aGlzLl9zdXBlckFwcGx5KGFyZ3VtZW50cykgaW4galF1ZXJ5IFVJKVxuXHRyZXR1cm4gdGhpcy5iYXNlLmFwcGx5KHRoaXMsIGFyZ3MpO1xufVxuXG4vLz09PT09PT09PT09PT09PVxuLy8gY29tcGlsZVRtcGxcbi8vPT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNvbXBpbGVUbXBsKG5hbWUsIHRtcGwsIHBhcmVudFRtcGwsIG9wdGlvbnMpIHtcblx0Ly8gdG1wbCBpcyBlaXRoZXIgYSB0ZW1wbGF0ZSBvYmplY3QsIGEgc2VsZWN0b3IgZm9yIGEgdGVtcGxhdGUgc2NyaXB0IGJsb2NrLCB0aGUgbmFtZSBvZiBhIGNvbXBpbGVkIHRlbXBsYXRlLCBvciBhIHRlbXBsYXRlIG9iamVjdFxuXG5cdC8vPT09PSBuZXN0ZWQgZnVuY3Rpb25zID09PT1cblx0ZnVuY3Rpb24gbG9va3VwVGVtcGxhdGUodmFsdWUpIHtcblx0XHQvLyBJZiB2YWx1ZSBpcyBvZiB0eXBlIHN0cmluZyAtIHRyZWF0IGFzIHNlbGVjdG9yLCBvciBuYW1lIG9mIGNvbXBpbGVkIHRlbXBsYXRlXG5cdFx0Ly8gUmV0dXJuIHRoZSB0ZW1wbGF0ZSBvYmplY3QsIGlmIGFscmVhZHkgY29tcGlsZWQsIG9yIHRoZSBtYXJrdXAgc3RyaW5nXG5cdFx0dmFyIGN1cnJlbnROYW1lLCB0bXBsO1xuXHRcdGlmICgoXCJcIiArIHZhbHVlID09PSB2YWx1ZSkgfHwgdmFsdWUubm9kZVR5cGUgPiAwICYmIChlbGVtID0gdmFsdWUpKSB7XG5cdFx0XHRpZiAoIWVsZW0pIHtcblx0XHRcdFx0aWYgKC9eXFwuXFwvW15cXFxcOio/XCI8Pl0qJC8udGVzdCh2YWx1ZSkpIHtcblx0XHRcdFx0XHQvLyB0bXBsPVwiLi9zb21lL2ZpbGUuaHRtbFwiXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHRlbXBsYXRlIGlzIG5vdCBuYW1lZCwgdXNlIFwiLi9zb21lL2ZpbGUuaHRtbFwiIGFzIG5hbWUuXG5cdFx0XHRcdFx0aWYgKHRtcGwgPSAkdGVtcGxhdGVzW25hbWUgPSBuYW1lIHx8IHZhbHVlXSkge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSB0bXBsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBCUk9XU0VSLVNQRUNJRklDIENPREUgKG5vdCBvbiBOb2RlLmpzKTpcblx0XHRcdFx0XHRcdC8vIExvb2sgZm9yIHNlcnZlci1nZW5lcmF0ZWQgc2NyaXB0IGJsb2NrIHdpdGggaWQgXCIuL3NvbWUvZmlsZS5odG1sXCJcblx0XHRcdFx0XHRcdGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKCQuZm4gJiYgISRzdWIuclRtcGwudGVzdCh2YWx1ZSkpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0ZWxlbSA9ICQgKHZhbHVlLCBkb2N1bWVudClbMF07IC8vIGlmIGpRdWVyeSBpcyBsb2FkZWQsIHRlc3QgZm9yIHNlbGVjdG9yIHJldHVybmluZyBlbGVtZW50cywgYW5kIGdldCBmaXJzdCBlbGVtZW50XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdFx0fS8vIEVORCBCUk9XU0VSLVNQRUNJRklDIENPREVcblx0XHRcdH0gLy9CUk9XU0VSLVNQRUNJRklDIENPREVcblx0XHRcdGlmIChlbGVtKSB7XG5cdFx0XHRcdGlmIChlbGVtLnRhZ05hbWUgIT09IFwiU0NSSVBUXCIpIHtcblx0XHRcdFx0XHRlcnJvcih2YWx1ZSArIFwiOiBVc2Ugc2NyaXB0IGJsb2NrLCBub3QgXCIgKyBlbGVtLnRhZ05hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRcdFx0Ly8gV2Ugd2lsbCBjb21waWxlIGEgbmV3IHRlbXBsYXRlIHVzaW5nIHRoZSBtYXJrdXAgaW4gdGhlIHNjcmlwdCBlbGVtZW50XG5cdFx0XHRcdFx0dmFsdWUgPSBlbGVtLmlubmVySFRNTDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBXZSB3aWxsIGNhY2hlIGEgc2luZ2xlIGNvcHkgb2YgdGhlIGNvbXBpbGVkIHRlbXBsYXRlLCBhbmQgYXNzb2NpYXRlIGl0IHdpdGggdGhlIG5hbWVcblx0XHRcdFx0XHQvLyAocmVuYW1pbmcgZnJvbSBhIHByZXZpb3VzIG5hbWUgaWYgdGhlcmUgd2FzIG9uZSkuXG5cdFx0XHRcdFx0Y3VycmVudE5hbWUgPSBlbGVtLmdldEF0dHJpYnV0ZSh0bXBsQXR0cik7XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnROYW1lKSB7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudE5hbWUgIT09IGpzdlRtcGwpIHtcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSAkdGVtcGxhdGVzW2N1cnJlbnROYW1lXTtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlICR0ZW1wbGF0ZXNbY3VycmVudE5hbWVdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkLmZuKSB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gJC5kYXRhKGVsZW0pW2pzdlRtcGxdOyAvLyBHZXQgY2FjaGVkIGNvbXBpbGVkIHRlbXBsYXRlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghY3VycmVudE5hbWUgfHwgIXZhbHVlKSB7IC8vIE5vdCB5ZXQgY29tcGlsZWQsIG9yIGNhY2hlZCB2ZXJzaW9uIGxvc3Rcblx0XHRcdFx0XHRcdG5hbWUgPSBuYW1lIHx8ICgkLmZuID8ganN2VG1wbCA6IHZhbHVlKTtcblx0XHRcdFx0XHRcdHZhbHVlID0gY29tcGlsZVRtcGwobmFtZSwgZWxlbS5pbm5lckhUTUwsIHBhcmVudFRtcGwsIG9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YWx1ZS50bXBsTmFtZSA9IG5hbWUgPSBuYW1lIHx8IGN1cnJlbnROYW1lO1xuXHRcdFx0XHRcdGlmIChuYW1lICE9PSBqc3ZUbXBsKSB7XG5cdFx0XHRcdFx0XHQkdGVtcGxhdGVzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKHRtcGxBdHRyLCBuYW1lKTtcblx0XHRcdFx0XHRpZiAoJC5mbikge1xuXHRcdFx0XHRcdFx0JC5kYXRhKGVsZW0sIGpzdlRtcGwsIHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gLy8gRU5EIEJST1dTRVItU1BFQ0lGSUMgQ09ERVxuXHRcdFx0ZWxlbSA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2UgaWYgKCF2YWx1ZS5mbikge1xuXHRcdFx0dmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHQvLyBJZiB2YWx1ZSBpcyBub3QgYSBzdHJpbmcuIEhUTUwgZWxlbWVudCwgb3IgY29tcGlsZWQgdGVtcGxhdGUsIHJldHVybiB1bmRlZmluZWRcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0dmFyIGVsZW0sIGNvbXBpbGVkVG1wbCxcblx0XHR0bXBsT3JNYXJrdXAgPSB0bXBsID0gdG1wbCB8fCBcIlwiO1xuXHQkc3ViLl9odG1sID0gJGNvbnZlcnRlcnMuaHRtbDtcblxuXHQvLz09PT0gQ29tcGlsZSB0aGUgdGVtcGxhdGUgPT09PVxuXHRpZiAob3B0aW9ucyA9PT0gMCkge1xuXHRcdG9wdGlvbnMgPSB1bmRlZmluZWQ7XG5cdFx0dG1wbE9yTWFya3VwID0gbG9va3VwVGVtcGxhdGUodG1wbE9yTWFya3VwKTsgLy8gVG9wLWxldmVsIGNvbXBpbGUgc28gZG8gYSB0ZW1wbGF0ZSBsb29rdXBcblx0fVxuXG5cdC8vIElmIG9wdGlvbnMsIHRoZW4gdGhpcyB3YXMgYWxyZWFkeSBjb21waWxlZCBmcm9tIGEgKHNjcmlwdCkgZWxlbWVudCB0ZW1wbGF0ZSBkZWNsYXJhdGlvbi5cblx0Ly8gSWYgbm90LCB0aGVuIGlmIHRtcGwgaXMgYSB0ZW1wbGF0ZSBvYmplY3QsIHVzZSBpdCBmb3Igb3B0aW9uc1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCAodG1wbC5tYXJrdXBcblx0XHQ/IHRtcGwuYm5kc1xuXHRcdFx0PyAkZXh0ZW5kKHt9LCB0bXBsKVxuXHRcdFx0OiB0bXBsXG5cdFx0OiB7fVxuXHQpO1xuXG5cdG9wdGlvbnMudG1wbE5hbWUgPSBvcHRpb25zLnRtcGxOYW1lIHx8IG5hbWUgfHwgXCJ1bm5hbWVkXCI7XG5cdGlmIChwYXJlbnRUbXBsKSB7XG5cdFx0b3B0aW9ucy5fcGFyZW50VG1wbCA9IHBhcmVudFRtcGw7XG5cdH1cblx0Ly8gSWYgdG1wbCBpcyBub3QgYSBtYXJrdXAgc3RyaW5nIG9yIGEgc2VsZWN0b3Igc3RyaW5nLCB0aGVuIGl0IG11c3QgYmUgYSB0ZW1wbGF0ZSBvYmplY3Rcblx0Ly8gSW4gdGhhdCBjYXNlLCBnZXQgaXQgZnJvbSB0aGUgbWFya3VwIHByb3BlcnR5IG9mIHRoZSBvYmplY3Rcblx0aWYgKCF0bXBsT3JNYXJrdXAgJiYgdG1wbC5tYXJrdXAgJiYgKHRtcGxPck1hcmt1cCA9IGxvb2t1cFRlbXBsYXRlKHRtcGwubWFya3VwKSkgJiYgdG1wbE9yTWFya3VwLmZuKSB7XG5cdFx0Ly8gSWYgdGhlIHN0cmluZyByZWZlcmVuY2VzIGEgY29tcGlsZWQgdGVtcGxhdGUgb2JqZWN0LCBuZWVkIHRvIHJlY29tcGlsZSB0byBtZXJnZSBhbnkgbW9kaWZpZWQgb3B0aW9uc1xuXHRcdHRtcGxPck1hcmt1cCA9IHRtcGxPck1hcmt1cC5tYXJrdXA7XG5cdH1cblx0aWYgKHRtcGxPck1hcmt1cCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKHRtcGxPck1hcmt1cC5yZW5kZXIgfHwgdG1wbC5yZW5kZXIpIHtcblx0XHRcdC8vIHRtcGwgaXMgYWxyZWFkeSBjb21waWxlZCwgc28gdXNlIGl0XG5cdFx0XHRpZiAodG1wbE9yTWFya3VwLnRtcGxzKSB7XG5cdFx0XHRcdGNvbXBpbGVkVG1wbCA9IHRtcGxPck1hcmt1cDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdG1wbE9yTWFya3VwIGlzIGEgbWFya3VwIHN0cmluZywgbm90IGEgY29tcGlsZWQgdGVtcGxhdGVcblx0XHRcdC8vIENyZWF0ZSB0ZW1wbGF0ZSBvYmplY3Rcblx0XHRcdHRtcGwgPSB0bXBsT2JqZWN0KHRtcGxPck1hcmt1cCwgb3B0aW9ucyk7XG5cdFx0XHQvLyBDb21waWxlIHRvIEFTVCBhbmQgdGhlbiB0byBjb21waWxlZCBmdW5jdGlvblxuXHRcdFx0dG1wbEZuKHRtcGxPck1hcmt1cC5yZXBsYWNlKHJFc2NhcGVRdW90ZXMsIFwiXFxcXCQmXCIpLCB0bXBsKTtcblx0XHR9XG5cdFx0aWYgKCFjb21waWxlZFRtcGwpIHtcblx0XHRcdGNvbXBpbGVkVG1wbCA9ICRleHRlbmQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBjb21waWxlZFRtcGwucmVuZGVyLmFwcGx5KGNvbXBpbGVkVG1wbCwgYXJndW1lbnRzKTtcblx0XHRcdH0sIHRtcGwpO1xuXG5cdFx0XHRjb21waWxlQ2hpbGRSZXNvdXJjZXMoY29tcGlsZWRUbXBsKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbXBpbGVkVG1wbDtcblx0fVxufVxuXG4vLz09PT0gL2VuZCBvZiBmdW5jdGlvbiBjb21waWxlVG1wbCA9PT09XG5cbi8vPT09PT09PT09PT09PT09PT1cbi8vIGNvbXBpbGVWaWV3TW9kZWxcbi8vPT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbChkZWZhdWx0VmFsLCBkYXRhKSB7XG5cdHJldHVybiAkaXNGdW5jdGlvbihkZWZhdWx0VmFsKVxuXHRcdD8gZGVmYXVsdFZhbC5jYWxsKGRhdGEpXG5cdFx0OiBkZWZhdWx0VmFsO1xufVxuXG5mdW5jdGlvbiBhZGRQYXJlbnRSZWYob2IsIHJlZiwgcGFyZW50KSB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYiwgcmVmLCB7XG5cdFx0dmFsdWU6IHBhcmVudCxcblx0XHRjb25maWd1cmFibGU6IHRydWVcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVWaWV3TW9kZWwobmFtZSwgdHlwZSkge1xuXHR2YXIgaSwgY29uc3RydWN0b3IsIHBhcmVudCxcblx0XHR2aWV3TW9kZWxzID0gdGhpcyxcblx0XHRnZXR0ZXJzID0gdHlwZS5nZXR0ZXJzLFxuXHRcdGV4dGVuZCA9IHR5cGUuZXh0ZW5kLFxuXHRcdGlkID0gdHlwZS5pZCxcblx0XHRwcm90byA9ICQuZXh0ZW5kKHtcblx0XHRcdF9pczogbmFtZSB8fCBcInVubmFtZWRcIixcblx0XHRcdHVubWFwOiB1bm1hcCxcblx0XHRcdG1lcmdlOiBtZXJnZVxuXHRcdH0sIGV4dGVuZCksXG5cdFx0YXJncyA9IFwiXCIsXG5cdFx0Y25zdHIgPSBcIlwiLFxuXHRcdGdldHRlckNvdW50ID0gZ2V0dGVycyA/IGdldHRlcnMubGVuZ3RoIDogMCxcblx0XHQkb2JzZXJ2YWJsZSA9ICQub2JzZXJ2YWJsZSxcblx0XHRnZXR0ZXJOYW1lcyA9IHt9O1xuXG5cdGZ1bmN0aW9uIEpzdlZtKGFyZ3MpIHtcblx0XHRjb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmdzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHZtKCkge1xuXHRcdHJldHVybiBuZXcgSnN2Vm0oYXJndW1lbnRzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGl0ZXJhdGUoZGF0YSwgYWN0aW9uKSB7XG5cdFx0dmFyIGdldHRlclR5cGUsIGRlZmF1bHRWYWwsIHByb3AsIG9iLCBwYXJlbnRSZWYsXG5cdFx0XHRqID0gMDtcblx0XHRmb3IgKDsgaiA8IGdldHRlckNvdW50OyBqKyspIHtcblx0XHRcdHByb3AgPSBnZXR0ZXJzW2pdO1xuXHRcdFx0Z2V0dGVyVHlwZSA9IHVuZGVmaW5lZDtcblx0XHRcdGlmIChwcm9wICsgXCJcIiAhPT0gcHJvcCkge1xuXHRcdFx0XHRnZXR0ZXJUeXBlID0gcHJvcDtcblx0XHRcdFx0cHJvcCA9IGdldHRlclR5cGUuZ2V0dGVyO1xuXHRcdFx0XHRwYXJlbnRSZWYgPSBnZXR0ZXJUeXBlLnBhcmVudFJlZjtcblx0XHRcdH1cblx0XHRcdGlmICgob2IgPSBkYXRhW3Byb3BdKSA9PT0gdW5kZWZpbmVkICYmIGdldHRlclR5cGUgJiYgKGRlZmF1bHRWYWwgPSBnZXR0ZXJUeXBlLmRlZmF1bHRWYWwpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0b2IgPSBnZXREZWZhdWx0VmFsKGRlZmF1bHRWYWwsIGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0YWN0aW9uKG9iLCBnZXR0ZXJUeXBlICYmIHZpZXdNb2RlbHNbZ2V0dGVyVHlwZS50eXBlXSwgcHJvcCwgcGFyZW50UmVmKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBtYXAoZGF0YSkge1xuXHRcdGRhdGEgPSBkYXRhICsgXCJcIiA9PT0gZGF0YVxuXHRcdFx0PyBKU09OLnBhcnNlKGRhdGEpIC8vIEFjY2VwdCBKU09OIHN0cmluZ1xuXHRcdFx0OiBkYXRhOyAgICAgICAgICAgIC8vIG9yIG9iamVjdC9hcnJheVxuXHRcdHZhciBsLCBwcm9wLCBjaGlsZE9iLCBwYXJlbnRSZWYsXG5cdFx0XHRqID0gMCxcblx0XHRcdG9iID0gZGF0YSxcblx0XHRcdGFyciA9IFtdO1xuXG5cdFx0aWYgKCRpc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRkYXRhID0gZGF0YSB8fCBbXTtcblx0XHRcdGwgPSBkYXRhLmxlbmd0aDtcblx0XHRcdGZvciAoOyBqPGw7IGorKykge1xuXHRcdFx0XHRhcnIucHVzaCh0aGlzLm1hcChkYXRhW2pdKSk7XG5cdFx0XHR9XG5cdFx0XHRhcnIuX2lzID0gbmFtZTtcblx0XHRcdGFyci51bm1hcCA9IHVubWFwO1xuXHRcdFx0YXJyLm1lcmdlID0gbWVyZ2U7XG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH1cblxuXHRcdGlmIChkYXRhKSB7XG5cdFx0XHRpdGVyYXRlKGRhdGEsIGZ1bmN0aW9uKG9iLCB2aWV3TW9kZWwpIHtcblx0XHRcdFx0aWYgKHZpZXdNb2RlbCkgeyAvLyBJdGVyYXRlIHRvIGJ1aWxkIGdldHRlcnMgYXJnIGFycmF5ICh2YWx1ZSwgb3IgbWFwcGVkIHZhbHVlKVxuXHRcdFx0XHRcdG9iID0gdmlld01vZGVsLm1hcChvYik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXJyLnB1c2gob2IpO1xuXHRcdFx0fSk7XG5cdFx0XHRvYiA9IHRoaXMuYXBwbHkodGhpcywgYXJyKTsgLy8gSW5zdGFudGlhdGUgdGhpcyBWaWV3IE1vZGVsLCBwYXNzaW5nIGdldHRlcnMgYXJncyBhcnJheSB0byBjb25zdHJ1Y3RvclxuXHRcdFx0aiA9IGdldHRlckNvdW50O1xuXHRcdFx0d2hpbGUgKGotLSkge1xuXHRcdFx0XHRjaGlsZE9iID0gYXJyW2pdO1xuXHRcdFx0XHRwYXJlbnRSZWYgPSBnZXR0ZXJzW2pdLnBhcmVudFJlZjtcblx0XHRcdFx0aWYgKHBhcmVudFJlZiAmJiBjaGlsZE9iICYmIGNoaWxkT2IudW5tYXApIHtcblx0XHRcdFx0XHRpZiAoJGlzQXJyYXkoY2hpbGRPYikpIHtcblx0XHRcdFx0XHRcdGwgPSBjaGlsZE9iLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlIChsLS0pIHtcblx0XHRcdFx0XHRcdFx0YWRkUGFyZW50UmVmKGNoaWxkT2JbbF0sIHBhcmVudFJlZiwgb2IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhZGRQYXJlbnRSZWYoY2hpbGRPYiwgcGFyZW50UmVmLCBvYik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHByb3AgaW4gZGF0YSkgeyAvLyBDb3B5IG92ZXIgYW55IG90aGVyIHByb3BlcnRpZXMuIHRoYXQgYXJlIG5vdCBnZXQvc2V0IHByb3BlcnRpZXNcblx0XHRcdFx0aWYgKHByb3AgIT09ICRleHBhbmRvICYmICFnZXR0ZXJOYW1lc1twcm9wXSkge1xuXHRcdFx0XHRcdG9iW3Byb3BdID0gZGF0YVtwcm9wXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb2I7XG5cdH1cblxuXHRmdW5jdGlvbiBtZXJnZShkYXRhLCBwYXJlbnQsIHBhcmVudFJlZikge1xuXHRcdGRhdGEgPSBkYXRhICsgXCJcIiA9PT0gZGF0YVxuXHRcdFx0PyBKU09OLnBhcnNlKGRhdGEpIC8vIEFjY2VwdCBKU09OIHN0cmluZ1xuXHRcdFx0OiBkYXRhOyAgICAgICAgICAgIC8vIG9yIG9iamVjdC9hcnJheVxuXG5cdFx0dmFyIGosIGwsIG0sIHByb3AsIG1vZCwgZm91bmQsIGFzc2lnbmVkLCBvYiwgbmV3TW9kQXJyLCBjaGlsZE9iLFxuXHRcdFx0ayA9IDAsXG5cdFx0XHRtb2RlbCA9IHRoaXM7XG5cblx0XHRpZiAoJGlzQXJyYXkobW9kZWwpKSB7XG5cdFx0XHRhc3NpZ25lZCA9IHt9O1xuXHRcdFx0bmV3TW9kQXJyID0gW107XG5cdFx0XHRsID0gZGF0YS5sZW5ndGg7XG5cdFx0XHRtID0gbW9kZWwubGVuZ3RoO1xuXHRcdFx0Zm9yICg7IGs8bDsgaysrKSB7XG5cdFx0XHRcdG9iID0gZGF0YVtrXTtcblx0XHRcdFx0Zm91bmQgPSBmYWxzZTtcblx0XHRcdFx0Zm9yIChqPTA7IGo8bSAmJiAhZm91bmQ7IGorKykge1xuXHRcdFx0XHRcdGlmIChhc3NpZ25lZFtqXSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1vZCA9IG1vZGVsW2pdO1xuXG5cdFx0XHRcdFx0aWYgKGlkKSB7XG5cdFx0XHRcdFx0XHRhc3NpZ25lZFtqXSA9IGZvdW5kID0gaWQgKyBcIlwiID09PSBpZFxuXHRcdFx0XHRcdFx0PyAob2JbaWRdICYmIChnZXR0ZXJOYW1lc1tpZF0gPyBtb2RbaWRdKCkgOiBtb2RbaWRdKSA9PT0gb2JbaWRdKVxuXHRcdFx0XHRcdFx0OiBpZChtb2QsIG9iKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGZvdW5kKSB7XG5cdFx0XHRcdFx0bW9kLm1lcmdlKG9iKTtcblx0XHRcdFx0XHRuZXdNb2RBcnIucHVzaChtb2QpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5ld01vZEFyci5wdXNoKGNoaWxkT2IgPSB2bS5tYXAob2IpKTtcblx0XHRcdFx0XHRpZiAocGFyZW50UmVmKSB7XG5cdFx0XHRcdFx0XHRhZGRQYXJlbnRSZWYoY2hpbGRPYiwgcGFyZW50UmVmLCBwYXJlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCRvYnNlcnZhYmxlKSB7XG5cdFx0XHRcdCRvYnNlcnZhYmxlKG1vZGVsKS5yZWZyZXNoKG5ld01vZEFyciwgdHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtb2RlbC5zcGxpY2UuYXBwbHkobW9kZWwsIFswLCBtb2RlbC5sZW5ndGhdLmNvbmNhdChuZXdNb2RBcnIpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aXRlcmF0ZShkYXRhLCBmdW5jdGlvbihvYiwgdmlld01vZGVsLCBnZXR0ZXIsIHBhcmVudFJlZikge1xuXHRcdFx0aWYgKHZpZXdNb2RlbCkge1xuXHRcdFx0XHRtb2RlbFtnZXR0ZXJdKCkubWVyZ2Uob2IsIG1vZGVsLCBwYXJlbnRSZWYpOyAvLyBVcGRhdGUgdHlwZWQgcHJvcGVydHlcblx0XHRcdH0gZWxzZSBpZiAobW9kZWxbZ2V0dGVyXSgpICE9PSBvYikge1xuXHRcdFx0XHRtb2RlbFtnZXR0ZXJdKG9iKTsgLy8gVXBkYXRlIG5vbi10eXBlZCBwcm9wZXJ0eVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGZvciAocHJvcCBpbiBkYXRhKSB7XG5cdFx0XHRpZiAocHJvcCAhPT0gJGV4cGFuZG8gJiYgIWdldHRlck5hbWVzW3Byb3BdKSB7XG5cdFx0XHRcdG1vZGVsW3Byb3BdID0gZGF0YVtwcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB1bm1hcCgpIHtcblx0XHR2YXIgb2IsIHByb3AsIGdldHRlclR5cGUsIGFyciwgdmFsdWUsXG5cdFx0XHRrID0gMCxcblx0XHRcdG1vZGVsID0gdGhpcztcblxuXHRcdGZ1bmN0aW9uIHVubWFwQXJyYXkobW9kZWxBcnIpIHtcblx0XHRcdHZhciBhcnIgPSBbXSxcblx0XHRcdFx0aSA9IDAsXG5cdFx0XHRcdGwgPSBtb2RlbEFyci5sZW5ndGg7XG5cdFx0XHRmb3IgKDsgaTxsOyBpKyspIHtcblx0XHRcdFx0YXJyLnB1c2gobW9kZWxBcnJbaV0udW5tYXAoKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH1cblxuXHRcdGlmICgkaXNBcnJheShtb2RlbCkpIHtcblx0XHRcdHJldHVybiB1bm1hcEFycmF5KG1vZGVsKTtcblx0XHR9XG5cdFx0b2IgPSB7fTtcblx0XHRmb3IgKDsgayA8IGdldHRlckNvdW50OyBrKyspIHtcblx0XHRcdHByb3AgPSBnZXR0ZXJzW2tdO1xuXHRcdFx0Z2V0dGVyVHlwZSA9IHVuZGVmaW5lZDtcblx0XHRcdGlmIChwcm9wICsgXCJcIiAhPT0gcHJvcCkge1xuXHRcdFx0XHRnZXR0ZXJUeXBlID0gcHJvcDtcblx0XHRcdFx0cHJvcCA9IGdldHRlclR5cGUuZ2V0dGVyO1xuXHRcdFx0fVxuXHRcdFx0dmFsdWUgPSBtb2RlbFtwcm9wXSgpO1xuXHRcdFx0b2JbcHJvcF0gPSBnZXR0ZXJUeXBlICYmIHZhbHVlICYmIHZpZXdNb2RlbHNbZ2V0dGVyVHlwZS50eXBlXVxuXHRcdFx0XHQ/ICRpc0FycmF5KHZhbHVlKVxuXHRcdFx0XHRcdD8gdW5tYXBBcnJheSh2YWx1ZSlcblx0XHRcdFx0XHQ6IHZhbHVlLnVubWFwKClcblx0XHRcdFx0OiB2YWx1ZTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wIGluIG1vZGVsKSB7XG5cdFx0XHRpZiAobW9kZWwuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgKHByb3AuY2hhckF0KDApICE9PSBcIl9cIiB8fCAhZ2V0dGVyTmFtZXNbcHJvcC5zbGljZSgxKV0pICYmIHByb3AgIT09ICRleHBhbmRvICAmJiAhJGlzRnVuY3Rpb24obW9kZWxbcHJvcF0pKSB7XG5cdFx0XHRcdG9iW3Byb3BdID0gbW9kZWxbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvYjtcblx0fVxuXG5cdEpzdlZtLnByb3RvdHlwZSA9IHByb3RvO1xuXG5cdGZvciAoaT0wOyBpIDwgZ2V0dGVyQ291bnQ7IGkrKykge1xuXHRcdChmdW5jdGlvbihnZXR0ZXIpIHtcblx0XHRcdGdldHRlciA9IGdldHRlci5nZXR0ZXIgfHwgZ2V0dGVyO1xuXHRcdFx0Z2V0dGVyTmFtZXNbZ2V0dGVyXSA9IGkrMTtcblx0XHRcdHZhciBwcml2RmllbGQgPSBcIl9cIiArIGdldHRlcjtcblxuXHRcdFx0YXJncyArPSAoYXJncyA/IFwiLFwiIDogXCJcIikgKyBnZXR0ZXI7XG5cdFx0XHRjbnN0ciArPSBcInRoaXMuXCIgKyBwcml2RmllbGQgKyBcIiA9IFwiICsgZ2V0dGVyICsgXCI7XFxuXCI7XG5cdFx0XHRwcm90b1tnZXR0ZXJdID0gcHJvdG9bZ2V0dGVyXSB8fCBmdW5jdGlvbih2YWwpIHtcblx0XHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXNbcHJpdkZpZWxkXTsgLy8gSWYgdGhlcmUgaXMgbm8gYXJndW1lbnQsIHVzZSBhcyBhIGdldHRlclxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgkb2JzZXJ2YWJsZSkge1xuXHRcdFx0XHRcdCRvYnNlcnZhYmxlKHRoaXMpLnNldFByb3BlcnR5KGdldHRlciwgdmFsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzW3ByaXZGaWVsZF0gPSB2YWw7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGlmICgkb2JzZXJ2YWJsZSkge1xuXHRcdFx0XHRwcm90b1tnZXR0ZXJdLnNldCA9IHByb3RvW2dldHRlcl0uc2V0IHx8IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0XHRcdHRoaXNbcHJpdkZpZWxkXSA9IHZhbDsgLy8gU2V0dGVyIGNhbGxlZCBieSBvYnNlcnZhYmxlIHByb3BlcnR5IGNoYW5nZVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH0pKGdldHRlcnNbaV0pO1xuXHR9XG5cblx0Ly8gQ29uc3RydWN0b3IgZm9yIG5ldyB2aWV3TW9kZWwgaW5zdGFuY2UuXG5cdGNuc3RyID0gbmV3IEZ1bmN0aW9uKGFyZ3MsIGNuc3RyKTtcblxuXHRjb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuXHRcdGNuc3RyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0Ly8gUGFzcyBhZGRpdGlvbmFsIHBhcmVudFJlZiBzdHIgYW5kIHBhcmVudCBvYmogdG8gaGF2ZSBhIHBhcmVudFJlZiBwb2ludGVyIG9uIGluc3RhbmNlXG5cdFx0aWYgKHBhcmVudCA9IGFyZ3VtZW50c1tnZXR0ZXJDb3VudCArIDFdKSB7XG5cdFx0XHRhZGRQYXJlbnRSZWYodGhpcywgYXJndW1lbnRzW2dldHRlckNvdW50XSwgcGFyZW50KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3RydWN0b3IucHJvdG90eXBlID0gcHJvdG87XG5cdHByb3RvLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG5cblx0dm0ubWFwID0gbWFwO1xuXHR2bS5nZXR0ZXJzID0gZ2V0dGVycztcblx0dm0uZXh0ZW5kID0gZXh0ZW5kO1xuXHR2bS5pZCA9IGlkO1xuXHRyZXR1cm4gdm07XG59XG5cbmZ1bmN0aW9uIHRtcGxPYmplY3QobWFya3VwLCBvcHRpb25zKSB7XG5cdC8vIFRlbXBsYXRlIG9iamVjdCBjb25zdHJ1Y3RvclxuXHR2YXIgaHRtbFRhZyxcblx0XHR3cmFwTWFwID0gJHN1YlNldHRpbmdzQWR2YW5jZWQuX3dtIHx8IHt9LCAvLyBPbmx5IHVzZWQgaW4gSnNWaWV3cy4gT3RoZXJ3aXNlIGVtcHR5OiB7fVxuXHRcdHRtcGwgPSB7XG5cdFx0XHR0bXBsczogW10sXG5cdFx0XHRsaW5rczoge30sIC8vIENvbXBpbGVkIGZ1bmN0aW9ucyBmb3IgbGluayBleHByZXNzaW9uc1xuXHRcdFx0Ym5kczogW10sXG5cdFx0XHRfaXM6IFwidGVtcGxhdGVcIixcblx0XHRcdHJlbmRlcjogcmVuZGVyQ29udGVudFxuXHRcdH07XG5cblx0aWYgKG9wdGlvbnMpIHtcblx0XHR0bXBsID0gJGV4dGVuZCh0bXBsLCBvcHRpb25zKTtcblx0fVxuXG5cdHRtcGwubWFya3VwID0gbWFya3VwO1xuXHRpZiAoIXRtcGwuaHRtbFRhZykge1xuXHRcdC8vIFNldCB0bXBsLnRhZyB0byB0aGUgdG9wLWxldmVsIEhUTUwgdGFnIHVzZWQgaW4gdGhlIHRlbXBsYXRlLCBpZiBhbnkuLi5cblx0XHRodG1sVGFnID0gckZpcnN0RWxlbS5leGVjKG1hcmt1cCk7XG5cdFx0dG1wbC5odG1sVGFnID0gaHRtbFRhZyA/IGh0bWxUYWdbMV0udG9Mb3dlckNhc2UoKSA6IFwiXCI7XG5cdH1cblx0aHRtbFRhZyA9IHdyYXBNYXBbdG1wbC5odG1sVGFnXTtcblx0aWYgKGh0bWxUYWcgJiYgaHRtbFRhZyAhPT0gd3JhcE1hcC5kaXYpIHtcblx0XHQvLyBXaGVuIHVzaW5nIEpzVmlld3MsIHdlIHRyaW0gdGVtcGxhdGVzIHdoaWNoIGFyZSBpbnNlcnRlZCBpbnRvIEhUTUwgY29udGV4dHMgd2hlcmUgdGV4dCBub2RlcyBhcmUgbm90IHJlbmRlcmVkIChpLmUuIG5vdCAnUGhyYXNpbmcgQ29udGVudCcpLlxuXHRcdC8vIEN1cnJlbnRseSBub3QgdHJpbW1lZCBmb3IgPGxpPiB0YWcuIChOb3Qgd29ydGggYWRkaW5nIHBlcmYgY29zdClcblx0XHR0bXBsLm1hcmt1cCA9ICQudHJpbSh0bXBsLm1hcmt1cCk7XG5cdH1cblxuXHRyZXR1cm4gdG1wbDtcbn1cblxuLy89PT09PT09PT09PT09PVxuLy8gcmVnaXN0ZXJTdG9yZVxuLy89PT09PT09PT09PT09PVxuXG4vKipcbiogSW50ZXJuYWwuIFJlZ2lzdGVyIGEgc3RvcmUgdHlwZSAodXNlZCBmb3IgdGVtcGxhdGUsIHRhZ3MsIGhlbHBlcnMsIGNvbnZlcnRlcnMpXG4qL1xuZnVuY3Rpb24gcmVnaXN0ZXJTdG9yZShzdG9yZU5hbWUsIHN0b3JlU2V0dGluZ3MpIHtcblxuLyoqXG4qIEdlbmVyaWMgc3RvcmUoKSBmdW5jdGlvbiB0byByZWdpc3RlciBpdGVtLCBuYW1lZCBpdGVtLCBvciBoYXNoIG9mIGl0ZW1zXG4qIEFsc28gdXNlZCBhcyBoYXNoIHRvIHN0b3JlIHRoZSByZWdpc3RlcmVkIGl0ZW1zXG4qIFVzZWQgYXMgaW1wbGVtZW50YXRpb24gb2YgJC50ZW1wbGF0ZXMoKSwgJC52aWV3cy50ZW1wbGF0ZXMoKSwgJC52aWV3cy50YWdzKCksICQudmlld3MuaGVscGVycygpIGFuZCAkLnZpZXdzLmNvbnZlcnRlcnMoKVxuKlxuKiBAcGFyYW0ge3N0cmluZ3xoYXNofSBuYW1lICAgICAgICAgbmFtZSAtIG9yIHNlbGVjdG9yLCBpbiBjYXNlIG9mICQudGVtcGxhdGVzKCkuIE9yIGhhc2ggb2YgaXRlbXNcbiogQHBhcmFtIHthbnl9ICAgICAgICAgW2l0ZW1dICAgICAgIChlLmcuIG1hcmt1cCBmb3IgbmFtZWQgdGVtcGxhdGUpXG4qIEBwYXJhbSB7dGVtcGxhdGV9ICAgIFtwYXJlbnRUbXBsXSBGb3IgaXRlbSBiZWluZyByZWdpc3RlcmVkIGFzIHByaXZhdGUgcmVzb3VyY2Ugb2YgdGVtcGxhdGVcbiogQHJldHVybnMge2FueXwkLnZpZXdzfSBpdGVtLCBlLmcuIGNvbXBpbGVkIHRlbXBsYXRlIC0gb3IgJC52aWV3cyBpbiBjYXNlIG9mIHJlZ2lzdGVyaW5nIGhhc2ggb2YgaXRlbXNcbiovXG5cdGZ1bmN0aW9uIHRoZVN0b3JlKG5hbWUsIGl0ZW0sIHBhcmVudFRtcGwpIHtcblx0XHQvLyBUaGUgc3RvcmUgaXMgYWxzbyB0aGUgZnVuY3Rpb24gdXNlZCB0byBhZGQgaXRlbXMgdG8gdGhlIHN0b3JlLiBlLmcuICQudGVtcGxhdGVzLCBvciAkLnZpZXdzLnRhZ3NcblxuXHRcdC8vIEZvciBzdG9yZSBvZiBuYW1lICd0aGluZycsIENhbGwgYXM6XG5cdFx0Ly8gICAgJC52aWV3cy50aGluZ3MoaXRlbXNbLCBwYXJlbnRUbXBsXSksXG5cdFx0Ly8gb3IgJC52aWV3cy50aGluZ3MobmFtZVssIGl0ZW0sIHBhcmVudFRtcGxdKVxuXG5cdFx0dmFyIGNvbXBpbGUsIGl0ZW1OYW1lLCB0aGlzU3RvcmUsIGNudCxcblx0XHRcdG9uU3RvcmUgPSAkc3ViLm9uU3RvcmVbc3RvcmVOYW1lXTtcblxuXHRcdGlmIChuYW1lICYmIHR5cGVvZiBuYW1lID09PSBPQkpFQ1QgJiYgIW5hbWUubm9kZVR5cGUgJiYgIW5hbWUubWFya3VwICYmICFuYW1lLmdldFRndCAmJiAhKHN0b3JlTmFtZSA9PT0gXCJ2aWV3TW9kZWxcIiAmJiBuYW1lLmdldHRlcnMgfHwgbmFtZS5leHRlbmQpKSB7XG5cdFx0XHQvLyBDYWxsIHRvICQudmlld3MudGhpbmdzKGl0ZW1zWywgcGFyZW50VG1wbF0pLFxuXG5cdFx0XHQvLyBBZGRpbmcgaXRlbXMgdG8gdGhlIHN0b3JlXG5cdFx0XHQvLyBJZiBuYW1lIGlzIGEgaGFzaCwgdGhlbiBpdGVtIGlzIHBhcmVudFRtcGwuIEl0ZXJhdGUgb3ZlciBoYXNoIGFuZCBjYWxsIHN0b3JlIGZvciBrZXkuXG5cdFx0XHRmb3IgKGl0ZW1OYW1lIGluIG5hbWUpIHtcblx0XHRcdFx0dGhlU3RvcmUoaXRlbU5hbWUsIG5hbWVbaXRlbU5hbWVdLCBpdGVtKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtIHx8ICR2aWV3cztcblx0XHR9XG5cdFx0Ly8gQWRkaW5nIGEgc2luZ2xlIHVubmFtZWQgaXRlbSB0byB0aGUgc3RvcmVcblx0XHRpZiAobmFtZSAmJiBcIlwiICsgbmFtZSAhPT0gbmFtZSkgeyAvLyBuYW1lIG11c3QgYmUgYSBzdHJpbmdcblx0XHRcdHBhcmVudFRtcGwgPSBpdGVtO1xuXHRcdFx0aXRlbSA9IG5hbWU7XG5cdFx0XHRuYW1lID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHR0aGlzU3RvcmUgPSBwYXJlbnRUbXBsXG5cdFx0XHQ/IHN0b3JlTmFtZSA9PT0gXCJ2aWV3TW9kZWxcIlxuXHRcdFx0XHQ/IHBhcmVudFRtcGxcblx0XHRcdFx0OiAocGFyZW50VG1wbFtzdG9yZU5hbWVzXSA9IHBhcmVudFRtcGxbc3RvcmVOYW1lc10gfHwge30pXG5cdFx0XHQ6IHRoZVN0b3JlO1xuXHRcdGNvbXBpbGUgPSBzdG9yZVNldHRpbmdzLmNvbXBpbGU7XG5cblx0XHRpZiAoaXRlbSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpdGVtID0gY29tcGlsZSA/IG5hbWUgOiB0aGlzU3RvcmVbbmFtZV07XG5cdFx0XHRuYW1lID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRpZiAoaXRlbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gSWYgaXRlbSBpcyBudWxsLCBkZWxldGUgdGhpcyBlbnRyeVxuXHRcdFx0aWYgKG5hbWUpIHtcblx0XHRcdFx0ZGVsZXRlIHRoaXNTdG9yZVtuYW1lXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGNvbXBpbGUpIHtcblx0XHRcdFx0aXRlbSA9IGNvbXBpbGUuY2FsbCh0aGlzU3RvcmUsIG5hbWUsIGl0ZW0sIHBhcmVudFRtcGwsIDApIHx8IHt9O1xuXHRcdFx0XHRpdGVtLl9pcyA9IHN0b3JlTmFtZTsgLy8gT25seSBkbyB0aGlzIGZvciBjb21waWxlZCBvYmplY3RzICh0YWdzLCB0ZW1wbGF0ZXMuLi4pXG5cdFx0XHR9XG5cdFx0XHRpZiAobmFtZSkge1xuXHRcdFx0XHR0aGlzU3RvcmVbbmFtZV0gPSBpdGVtO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAob25TdG9yZSkge1xuXHRcdFx0Ly8gZS5nLiBKc1ZpZXdzIGludGVncmF0aW9uXG5cdFx0XHRvblN0b3JlKG5hbWUsIGl0ZW0sIHBhcmVudFRtcGwsIGNvbXBpbGUpO1xuXHRcdH1cblx0XHRyZXR1cm4gaXRlbTtcblx0fVxuXG5cdHZhciBzdG9yZU5hbWVzID0gc3RvcmVOYW1lICsgXCJzXCI7XG5cdCR2aWV3c1tzdG9yZU5hbWVzXSA9IHRoZVN0b3JlO1xufVxuXG4vKipcbiogQWRkIHNldHRpbmdzIHN1Y2ggYXM6XG4qICQudmlld3Muc2V0dGluZ3MuYWxsb3dDb2RlKHRydWUpXG4qIEBwYXJhbSB7Ym9vbGVhbn0gIHZhbHVlXG4qIEByZXR1cm5zIHtTZXR0aW5nc31cbipcbiogYWxsb3dDb2RlID0gJC52aWV3cy5zZXR0aW5ncy5hbGxvd0NvZGUoKVxuKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiovXG5mdW5jdGlvbiBhZGRTZXR0aW5nKHN0KSB7XG5cdCR2aWV3c1NldHRpbmdzW3N0XSA9ICR2aWV3c1NldHRpbmdzW3N0XSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG5cdFx0XHQ/ICgkc3ViU2V0dGluZ3Nbc3RdID0gdmFsdWUsICR2aWV3c1NldHRpbmdzKVxuXHRcdFx0OiAkc3ViU2V0dGluZ3Nbc3RdO1xuXHR9O1xufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gZGF0YU1hcCBmb3IgcmVuZGVyIG9ubHlcbi8vPT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGRhdGFNYXAobWFwRGVmKSB7XG5cdGZ1bmN0aW9uIE1hcChzb3VyY2UsIG9wdGlvbnMpIHtcblx0XHR0aGlzLnRndCA9IG1hcERlZi5nZXRUZ3Qoc291cmNlLCBvcHRpb25zKTtcblx0XHRvcHRpb25zLm1hcCA9IHRoaXM7XG5cdH1cblxuXHRpZiAoJGlzRnVuY3Rpb24obWFwRGVmKSkge1xuXHRcdC8vIFNpbXBsZSBtYXAgZGVjbGFyZWQgYXMgZnVuY3Rpb25cblx0XHRtYXBEZWYgPSB7XG5cdFx0XHRnZXRUZ3Q6IG1hcERlZlxuXHRcdH07XG5cdH1cblxuXHRpZiAobWFwRGVmLmJhc2VNYXApIHtcblx0XHRtYXBEZWYgPSAkZXh0ZW5kKCRleHRlbmQoe30sIG1hcERlZi5iYXNlTWFwKSwgbWFwRGVmKTtcblx0fVxuXG5cdG1hcERlZi5tYXAgPSBmdW5jdGlvbihzb3VyY2UsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gbmV3IE1hcChzb3VyY2UsIG9wdGlvbnMpO1xuXHR9O1xuXHRyZXR1cm4gbWFwRGVmO1xufVxuXG4vLz09PT09PT09PT09PT09XG4vLyByZW5kZXJDb250ZW50XG4vLz09PT09PT09PT09PT09XG5cbi8qKiBSZW5kZXIgdGhlIHRlbXBsYXRlIGFzIGEgc3RyaW5nLCB1c2luZyB0aGUgc3BlY2lmaWVkIGRhdGEgYW5kIGhlbHBlcnMvY29udGV4dFxuKiAkKFwiI3RtcGxcIikucmVuZGVyKCksIHRtcGwucmVuZGVyKCksIHRhZ0N0eC5yZW5kZXIoKSwgJC5yZW5kZXIubmFtZWRUbXBsKClcbipcbiogQHBhcmFtIHthbnl9ICAgICAgICBkYXRhXG4qIEBwYXJhbSB7aGFzaH0gICAgICAgW2NvbnRleHRdICAgICAgICAgICBoZWxwZXJzIG9yIGNvbnRleHRcbiogQHBhcmFtIHtib29sZWFufSAgICBbbm9JdGVyYXRpb25dXG4qIEBwYXJhbSB7Vmlld30gICAgICAgW3BhcmVudFZpZXddICAgICAgICBpbnRlcm5hbFxuKiBAcGFyYW0ge3N0cmluZ30gICAgIFtrZXldICAgICAgICAgICAgICAgaW50ZXJuYWxcbiogQHBhcmFtIHtmdW5jdGlvbn0gICBbb25SZW5kZXJdICAgICAgICAgIGludGVybmFsXG4qIEByZXR1cm5zIHtzdHJpbmd9ICAgcmVuZGVyZWQgdGVtcGxhdGUgICBpbnRlcm5hbFxuKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoZGF0YSwgY29udGV4dCwgbm9JdGVyYXRpb24sIHBhcmVudFZpZXcsIGtleSwgb25SZW5kZXIpIHtcblx0dmFyIGksIGwsIHRhZywgdG1wbCwgdGFnQ3R4LCBpc1RvcFJlbmRlckNhbGwsIHByZXZEYXRhLCBwcmV2SW5kZXgsXG5cdFx0dmlldyA9IHBhcmVudFZpZXcsXG5cdFx0cmVzdWx0ID0gXCJcIjtcblxuXHRpZiAoY29udGV4dCA9PT0gdHJ1ZSkge1xuXHRcdG5vSXRlcmF0aW9uID0gY29udGV4dDsgLy8gcGFzc2luZyBib29sZWFuIGFzIHNlY29uZCBwYXJhbSAtIG5vSXRlcmF0aW9uXG5cdFx0Y29udGV4dCA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICh0eXBlb2YgY29udGV4dCAhPT0gT0JKRUNUKSB7XG5cdFx0Y29udGV4dCA9IHVuZGVmaW5lZDsgLy8gY29udGV4dCBtdXN0IGJlIGEgYm9vbGVhbiAobm9JdGVyYXRpb24pIG9yIGEgcGxhaW4gb2JqZWN0XG5cdH1cblxuXHRpZiAodGFnID0gdGhpcy50YWcpIHtcblx0XHQvLyBUaGlzIGlzIGEgY2FsbCBmcm9tIHJlbmRlclRhZyBvciB0YWdDdHgucmVuZGVyKC4uLilcblx0XHR0YWdDdHggPSB0aGlzO1xuXHRcdHZpZXcgPSB2aWV3IHx8IHRhZ0N0eC52aWV3O1xuXHRcdHRtcGwgPSB2aWV3Ll9nZXRUbXBsKHRhZy50ZW1wbGF0ZSB8fCB0YWdDdHgudG1wbCk7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRkYXRhID0gdGFnLmNvbnRlbnRDdHggJiYgJGlzRnVuY3Rpb24odGFnLmNvbnRlbnRDdHgpXG5cdFx0XHRcdD8gZGF0YSA9IHRhZy5jb250ZW50Q3R4KGRhdGEpXG5cdFx0XHRcdDogdmlldzsgLy8gRGVmYXVsdCBkYXRhIGNvbnRleHQgZm9yIHdyYXBwZWQgYmxvY2sgY29udGVudCBpcyB0aGUgZmlyc3QgYXJndW1lbnRcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gVGhpcyBpcyBhIHRlbXBsYXRlLnJlbmRlciguLi4pIGNhbGxcblx0XHR0bXBsID0gdGhpcztcblx0fVxuXG5cdGlmICh0bXBsKSB7XG5cdFx0aWYgKCFwYXJlbnRWaWV3ICYmIGRhdGEgJiYgZGF0YS5faXMgPT09IFwidmlld1wiKSB7XG5cdFx0XHR2aWV3ID0gZGF0YTsgLy8gV2hlbiBwYXNzaW5nIGluIGEgdmlldyB0byByZW5kZXIgb3IgbGluayAoYW5kIG5vdCBwYXNzaW5nIGluIGEgcGFyZW50IHZpZXcpIHVzZSB0aGUgcGFzc2VkLWluIHZpZXcgYXMgcGFyZW50Vmlld1xuXHRcdH1cblxuXHRcdGlmICh2aWV3ICYmIGRhdGEgPT09IHZpZXcpIHtcblx0XHRcdC8vIEluaGVyaXQgdGhlIGRhdGEgZnJvbSB0aGUgcGFyZW50IHZpZXcuXG5cdFx0XHRkYXRhID0gdmlldy5kYXRhO1xuXHRcdH1cblxuXHRcdGlzVG9wUmVuZGVyQ2FsbCA9ICF2aWV3O1xuXHRcdGlzUmVuZGVyQ2FsbCA9IGlzUmVuZGVyQ2FsbCB8fCBpc1RvcFJlbmRlckNhbGw7XG5cdFx0aWYgKCF2aWV3KSB7XG5cdFx0XHQoY29udGV4dCA9IGNvbnRleHQgfHwge30pLnJvb3QgPSBkYXRhOyAvLyBQcm92aWRlIH5yb290IGFzIHNob3J0Y3V0IHRvIHRvcC1sZXZlbCBkYXRhLlxuXHRcdH1cblx0XHRpZiAoIWlzUmVuZGVyQ2FsbCB8fCAkc3ViU2V0dGluZ3NBZHZhbmNlZC51c2VWaWV3cyB8fCB0bXBsLnVzZVZpZXdzIHx8IHZpZXcgJiYgdmlldyAhPT0gdG9wVmlldykge1xuXHRcdFx0cmVzdWx0ID0gcmVuZGVyV2l0aFZpZXdzKHRtcGwsIGRhdGEsIGNvbnRleHQsIG5vSXRlcmF0aW9uLCB2aWV3LCBrZXksIG9uUmVuZGVyLCB0YWcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodmlldykgeyAvLyBJbiBhIGJsb2NrXG5cdFx0XHRcdHByZXZEYXRhID0gdmlldy5kYXRhO1xuXHRcdFx0XHRwcmV2SW5kZXggPSB2aWV3LmluZGV4O1xuXHRcdFx0XHR2aWV3LmluZGV4ID0gaW5kZXhTdHI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2aWV3ID0gdG9wVmlldztcblx0XHRcdFx0cHJldkRhdGEgPSB2aWV3LmRhdGE7XG5cdFx0XHRcdHZpZXcuZGF0YSA9IGRhdGE7XG5cdFx0XHRcdHZpZXcuY3R4ID0gY29udGV4dDtcblx0XHRcdH1cblx0XHRcdGlmICgkaXNBcnJheShkYXRhKSAmJiAhbm9JdGVyYXRpb24pIHtcblx0XHRcdFx0Ly8gQ3JlYXRlIGEgdmlldyBmb3IgdGhlIGFycmF5LCB3aG9zZSBjaGlsZCB2aWV3cyBjb3JyZXNwb25kIHRvIGVhY2ggZGF0YSBpdGVtLiAoTm90ZTogaWYga2V5IGFuZCBwYXJlbnRWaWV3IGFyZSBwYXNzZWQgaW5cblx0XHRcdFx0Ly8gYWxvbmcgd2l0aCBwYXJlbnQgdmlldywgdHJlYXQgYXMgaW5zZXJ0IC1lLmcuIGZyb20gdmlldy5hZGRWaWV3cyAtIHNvIHBhcmVudFZpZXcgaXMgYWxyZWFkeSB0aGUgdmlldyBpdGVtIGZvciBhcnJheSlcblx0XHRcdFx0Zm9yIChpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0dmlldy5pbmRleCA9IGk7XG5cdFx0XHRcdFx0dmlldy5kYXRhID0gZGF0YVtpXTtcblx0XHRcdFx0XHRyZXN1bHQgKz0gdG1wbC5mbihkYXRhW2ldLCB2aWV3LCAkc3ViKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmlldy5kYXRhID0gZGF0YTtcblx0XHRcdFx0cmVzdWx0ICs9IHRtcGwuZm4oZGF0YSwgdmlldywgJHN1Yik7XG5cdFx0XHR9XG5cdFx0XHR2aWV3LmRhdGEgPSBwcmV2RGF0YTtcblx0XHRcdHZpZXcuaW5kZXggPSBwcmV2SW5kZXg7XG5cdFx0fVxuXHRcdGlmIChpc1RvcFJlbmRlckNhbGwpIHtcblx0XHRcdGlzUmVuZGVyQ2FsbCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyV2l0aFZpZXdzKHRtcGwsIGRhdGEsIGNvbnRleHQsIG5vSXRlcmF0aW9uLCB2aWV3LCBrZXksIG9uUmVuZGVyLCB0YWcpIHtcblx0Ly8gUmVuZGVyIHRlbXBsYXRlIGFnYWluc3QgZGF0YSBhcyBhIHRyZWUgb2Ygc3Vidmlld3MgKG5lc3RlZCByZW5kZXJlZCB0ZW1wbGF0ZSBpbnN0YW5jZXMpLCBvciBhcyBhIHN0cmluZyAodG9wLWxldmVsIHRlbXBsYXRlKS5cblx0Ly8gSWYgdGhlIGRhdGEgaXMgdGhlIHBhcmVudCB2aWV3LCB0cmVhdCBhcyBub0l0ZXJhdGlvbiwgcmUtcmVuZGVyIHdpdGggdGhlIHNhbWUgZGF0YSBjb250ZXh0LlxuXHQvLyB0bXBsIGNhbiBiZSBhIHN0cmluZyAoZS5nLiByZW5kZXJlZCBieSBhIHRhZy5yZW5kZXIoKSBtZXRob2QpLCBvciBhIGNvbXBpbGVkIHRlbXBsYXRlLlxuXHR2YXIgaSwgbCwgbmV3VmlldywgY2hpbGRWaWV3LCBpdGVtUmVzdWx0LCBzd2FwQ29udGVudCwgY29udGVudFRtcGwsIG91dGVyT25SZW5kZXIsIHRtcGxOYW1lLCBpdGVtVmFyLCBuZXdDdHgsIHRhZ0N0eCwgbm9MaW5raW5nLFxuXHRcdHJlc3VsdCA9IFwiXCI7XG5cblx0aWYgKHRhZykge1xuXHRcdC8vIFRoaXMgaXMgYSBjYWxsIGZyb20gcmVuZGVyVGFnIG9yIHRhZ0N0eC5yZW5kZXIoLi4uKVxuXHRcdHRtcGxOYW1lID0gdGFnLnRhZ05hbWU7XG5cdFx0dGFnQ3R4ID0gdGFnLnRhZ0N0eDtcblx0XHRjb250ZXh0ID0gY29udGV4dCA/IGV4dGVuZEN0eChjb250ZXh0LCB0YWcuY3R4KSA6IHRhZy5jdHg7XG5cblx0XHRpZiAodG1wbCA9PT0gdmlldy5jb250ZW50KSB7IC8vIHt7eHh4IHRtcGw9I2NvbnRlbnR9fVxuXHRcdFx0Y29udGVudFRtcGwgPSB0bXBsICE9PSB2aWV3LmN0eC5fd3JwIC8vIFdlIGFyZSByZW5kZXJpbmcgdGhlICNjb250ZW50XG5cdFx0XHRcdD8gdmlldy5jdHguX3dycCAvLyAjY29udGVudCB3YXMgdGhlIHRhZ0N0eC5wcm9wcy50bXBsIHdyYXBwZXIgb2YgdGhlIGJsb2NrIGNvbnRlbnQgLSBzbyB3aXRoaW4gdGhpcyB2aWV3LCAjY29udGVudCB3aWxsIG5vdyBiZSB0aGUgdmlldy5jdHguX3dycCBibG9jayBjb250ZW50XG5cdFx0XHRcdDogdW5kZWZpbmVkOyAvLyAjY29udGVudCB3YXMgdGhlIHZpZXcuY3R4Ll93cnAgYmxvY2sgY29udGVudCAtIHNvIHdpdGhpbiB0aGlzIHZpZXcsIHRoZXJlIGlzIG5vIGxvbmdlciBhbnkgI2NvbnRlbnQgdG8gd3JhcC5cblx0XHR9IGVsc2UgaWYgKHRtcGwgIT09IHRhZ0N0eC5jb250ZW50KSB7XG5cdFx0XHRpZiAodG1wbCA9PT0gdGFnLnRlbXBsYXRlKSB7IC8vIFJlbmRlcmluZyB7e3RhZ319IHRhZy50ZW1wbGF0ZSwgcmVwbGFjaW5nIGJsb2NrIGNvbnRlbnQuXG5cdFx0XHRcdGNvbnRlbnRUbXBsID0gdGFnQ3R4LnRtcGw7IC8vIFNldCAjY29udGVudCB0byBibG9jayBjb250ZW50IChvciB3cmFwcGVkIGJsb2NrIGNvbnRlbnQgaWYgdGFnQ3R4LnByb3BzLnRtcGwgaXMgc2V0KVxuXHRcdFx0XHRjb250ZXh0Ll93cnAgPSB0YWdDdHguY29udGVudDsgLy8gUGFzcyB3cmFwcGVkIGJsb2NrIGNvbnRlbnQgdG8gbmVzdGVkIHZpZXdzXG5cdFx0XHR9IGVsc2UgeyAvLyBSZW5kZXJpbmcgdGFnQ3R4LnByb3BzLnRtcGwgd3JhcHBlclxuXHRcdFx0XHRjb250ZW50VG1wbCA9IHRhZ0N0eC5jb250ZW50IHx8IHZpZXcuY29udGVudDsgLy8gU2V0ICNjb250ZW50IHRvIHdyYXBwZWQgYmxvY2sgY29udGVudFxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250ZW50VG1wbCA9IHZpZXcuY29udGVudDsgLy8gTmVzdGVkIHZpZXdzIGluaGVyaXQgc2FtZSB3cmFwcGVkICNjb250ZW50IHByb3BlcnR5XG5cdFx0fVxuXG5cdFx0aWYgKHRhZ0N0eC5wcm9wcy5saW5rID09PSBmYWxzZSkge1xuXHRcdFx0Ly8gbGluaz1mYWxzZSBzZXR0aW5nIG9uIGJsb2NrIHRhZ1xuXHRcdFx0Ly8gV2Ugd2lsbCBvdmVycmlkZSBpbmhlcml0ZWQgdmFsdWUgb2YgbGluayBieSB0aGUgZXhwbGljaXQgc2V0dGluZyBsaW5rPWZhbHNlIHRha2VuIGZyb20gcHJvcHNcblx0XHRcdC8vIFRoZSBjaGlsZCB2aWV3cyBvZiBhbiB1bmxpbmtlZCB2aWV3IGFyZSBhbHNvIHVubGlua2VkLiBTbyBzZXR0aW5nIGNoaWxkIGJhY2sgdG8gdHJ1ZSB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3QuXG5cdFx0XHRjb250ZXh0ID0gY29udGV4dCB8fCB7fTtcblx0XHRcdGNvbnRleHQubGluayA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlmICh2aWV3KSB7XG5cdFx0b25SZW5kZXIgPSBvblJlbmRlciB8fCB2aWV3Ll8ub25SZW5kZXI7XG5cdFx0bm9MaW5raW5nID0gY29udGV4dCAmJiBjb250ZXh0LmxpbmsgPT09IGZhbHNlO1xuXG5cdFx0aWYgKG5vTGlua2luZyAmJiB2aWV3Ll8ubmwpIHtcblx0XHRcdG9uUmVuZGVyID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGNvbnRleHQgPSBleHRlbmRDdHgoY29udGV4dCwgdmlldy5jdHgpO1xuXHRcdHRhZ0N0eCA9ICF0YWcgJiYgdmlldy50YWdcblx0XHRcdD8gdmlldy50YWcudGFnQ3R4c1t2aWV3LnRhZ0Vsc2VdXG5cdFx0XHQ6IHRhZ0N0eDtcblx0fVxuXG5cdGlmIChpdGVtVmFyID0gdGFnQ3R4ICYmIHRhZ0N0eC5wcm9wcy5pdGVtVmFyKSB7XG5cdFx0aWYgKGl0ZW1WYXJbMF0gIT09IFwiflwiKSB7XG5cdFx0XHRzeW50YXhFcnJvcihcIlVzZSBpdGVtVmFyPSd+bXlJdGVtJ1wiKTtcblx0XHR9XG5cdFx0aXRlbVZhciA9IGl0ZW1WYXIuc2xpY2UoMSk7XG5cdH1cblxuXHRpZiAoa2V5ID09PSB0cnVlKSB7XG5cdFx0c3dhcENvbnRlbnQgPSB0cnVlO1xuXHRcdGtleSA9IDA7XG5cdH1cblxuXHQvLyBJZiBsaW5rPT09ZmFsc2UsIGRvIG5vdCBjYWxsIG9uUmVuZGVyLCBzbyBubyBkYXRhLWxpbmtpbmcgbWFya2VyIG5vZGVzXG5cdGlmIChvblJlbmRlciAmJiB0YWcgJiYgdGFnLl8ubm9Wd3MpIHtcblx0XHRvblJlbmRlciA9IHVuZGVmaW5lZDtcblx0fVxuXHRvdXRlck9uUmVuZGVyID0gb25SZW5kZXI7XG5cdGlmIChvblJlbmRlciA9PT0gdHJ1ZSkge1xuXHRcdC8vIFVzZWQgYnkgdmlldy5yZWZyZXNoKCkuIERvbid0IGNyZWF0ZSBhIG5ldyB3cmFwcGVyIHZpZXcuXG5cdFx0b3V0ZXJPblJlbmRlciA9IHVuZGVmaW5lZDtcblx0XHRvblJlbmRlciA9IHZpZXcuXy5vblJlbmRlcjtcblx0fVxuXHQvLyBTZXQgYWRkaXRpb25hbCBjb250ZXh0IG9uIHZpZXdzIGNyZWF0ZWQgaGVyZSwgKGFzIG1vZGlmaWVkIGNvbnRleHQgaW5oZXJpdGVkIGZyb20gdGhlIHBhcmVudCwgYW5kIHRvIGJlIGluaGVyaXRlZCBieSBjaGlsZCB2aWV3cylcblx0Y29udGV4dCA9IHRtcGwuaGVscGVyc1xuXHRcdD8gZXh0ZW5kQ3R4KHRtcGwuaGVscGVycywgY29udGV4dClcblx0XHQ6IGNvbnRleHQ7XG5cblx0bmV3Q3R4ID0gY29udGV4dDtcblx0aWYgKCRpc0FycmF5KGRhdGEpICYmICFub0l0ZXJhdGlvbikge1xuXHRcdC8vIENyZWF0ZSBhIHZpZXcgZm9yIHRoZSBhcnJheSwgd2hvc2UgY2hpbGQgdmlld3MgY29ycmVzcG9uZCB0byBlYWNoIGRhdGEgaXRlbS4gKE5vdGU6IGlmIGtleSBhbmQgdmlldyBhcmUgcGFzc2VkIGluXG5cdFx0Ly8gYWxvbmcgd2l0aCBwYXJlbnQgdmlldywgdHJlYXQgYXMgaW5zZXJ0IC1lLmcuIGZyb20gdmlldy5hZGRWaWV3cyAtIHNvIHZpZXcgaXMgYWxyZWFkeSB0aGUgdmlldyBpdGVtIGZvciBhcnJheSlcblx0XHRuZXdWaWV3ID0gc3dhcENvbnRlbnRcblx0XHRcdD8gdmlld1xuXHRcdFx0OiAoa2V5ICE9PSB1bmRlZmluZWQgJiYgdmlldylcblx0XHRcdFx0fHwgbmV3IFZpZXcoY29udGV4dCwgXCJhcnJheVwiLCB2aWV3LCBkYXRhLCB0bXBsLCBrZXksIG9uUmVuZGVyLCBjb250ZW50VG1wbCk7XG5cdFx0bmV3Vmlldy5fLm5sPSBub0xpbmtpbmc7XG5cdFx0aWYgKHZpZXcgJiYgdmlldy5fLnVzZUtleSkge1xuXHRcdFx0Ly8gUGFyZW50IGlzIG5vdCBhbiAnYXJyYXkgdmlldydcblx0XHRcdG5ld1ZpZXcuXy5ibmQgPSAhdGFnIHx8IHRhZy5fLmJuZCAmJiB0YWc7IC8vIEZvciBhcnJheSB2aWV3cyB0aGF0IGFyZSBkYXRhIGJvdW5kIGZvciBjb2xsZWN0aW9uIGNoYW5nZSBldmVudHMsIHNldCB0aGVcblx0XHRcdC8vIHZpZXcuXy5ibmQgcHJvcGVydHkgdG8gdHJ1ZSBmb3IgdG9wLWxldmVsIGxpbmsoKSBvciBkYXRhLWxpbms9XCJ7Zm9yfVwiLCBvciB0byB0aGUgdGFnIGluc3RhbmNlIGZvciBhIGRhdGEtYm91bmQgdGFnLCBlLmcuIHtee2ZvciAuLi59fVxuXHRcdFx0bmV3Vmlldy50YWcgPSB0YWc7XG5cdFx0fVxuXHRcdGZvciAoaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdFx0Ly8gQ3JlYXRlIGEgdmlldyBmb3IgZWFjaCBkYXRhIGl0ZW0uXG5cdFx0XHRjaGlsZFZpZXcgPSBuZXcgVmlldyhuZXdDdHgsIFwiaXRlbVwiLCBuZXdWaWV3LCBkYXRhW2ldLCB0bXBsLCAoa2V5IHx8IDApICsgaSwgb25SZW5kZXIsIG5ld1ZpZXcuY29udGVudCk7XG5cdFx0XHRpZiAoaXRlbVZhcikge1xuXHRcdFx0XHQoY2hpbGRWaWV3LmN0eCA9ICRleHRlbmQoe30sIG5ld0N0eCkpW2l0ZW1WYXJdID0gJHN1Yi5fY3AoZGF0YVtpXSwgXCIjZGF0YVwiLCBjaGlsZFZpZXcpO1xuXHRcdFx0fVxuXHRcdFx0aXRlbVJlc3VsdCA9IHRtcGwuZm4oZGF0YVtpXSwgY2hpbGRWaWV3LCAkc3ViKTtcblx0XHRcdHJlc3VsdCArPSBuZXdWaWV3Ll8ub25SZW5kZXIgPyBuZXdWaWV3Ll8ub25SZW5kZXIoaXRlbVJlc3VsdCwgY2hpbGRWaWV3KSA6IGl0ZW1SZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIENyZWF0ZSBhIHZpZXcgZm9yIHNpbmdsZXRvbiBkYXRhIG9iamVjdC4gVGhlIHR5cGUgb2YgdGhlIHZpZXcgd2lsbCBiZSB0aGUgdGFnIG5hbWUsIGUuZy4gXCJpZlwiIG9yIFwibXl0YWdcIiBleGNlcHQgZm9yXG5cdFx0Ly8gXCJpdGVtXCIsIFwiYXJyYXlcIiBhbmQgXCJkYXRhXCIgdmlld3MuIEEgXCJkYXRhXCIgdmlldyBpcyBmcm9tIHByb2dyYW1tYXRpYyByZW5kZXIob2JqZWN0KSBhZ2FpbnN0IGEgJ3NpbmdsZXRvbicuXG5cdFx0bmV3VmlldyA9IHN3YXBDb250ZW50ID8gdmlldyA6IG5ldyBWaWV3KG5ld0N0eCwgdG1wbE5hbWUgfHwgXCJkYXRhXCIsIHZpZXcsIGRhdGEsIHRtcGwsIGtleSwgb25SZW5kZXIsIGNvbnRlbnRUbXBsKTtcblxuXHRcdGlmIChpdGVtVmFyKSB7XG5cdFx0XHQobmV3Vmlldy5jdHggPSAkZXh0ZW5kKHt9LCBuZXdDdHgpKVtpdGVtVmFyXSA9ICRzdWIuX2NwKGRhdGEsIFwiI2RhdGFcIiwgbmV3Vmlldyk7XG5cdFx0fVxuXG5cdFx0bmV3Vmlldy50YWcgPSB0YWc7XG5cdFx0bmV3Vmlldy5fLm5sID0gbm9MaW5raW5nO1xuXHRcdHJlc3VsdCArPSB0bXBsLmZuKGRhdGEsIG5ld1ZpZXcsICRzdWIpO1xuXHR9XG5cdGlmICh0YWcpIHtcblx0XHRuZXdWaWV3LnRhZ0Vsc2UgPSB0YWdDdHguaW5kZXg7XG5cdFx0dGFnQ3R4LmNvbnRlbnRWaWV3ID0gbmV3Vmlldztcblx0fVxuXHRyZXR1cm4gb3V0ZXJPblJlbmRlciA/IG91dGVyT25SZW5kZXIocmVzdWx0LCBuZXdWaWV3KSA6IHJlc3VsdDtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJ1aWxkIGFuZCBjb21waWxlIHRlbXBsYXRlXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBHZW5lcmF0ZSBhIHJldXNhYmxlIGZ1bmN0aW9uIHRoYXQgd2lsbCBzZXJ2ZSB0byByZW5kZXIgYSB0ZW1wbGF0ZSBhZ2FpbnN0IGRhdGFcbi8vIChDb21waWxlIEFTVCB0aGVuIGJ1aWxkIHRlbXBsYXRlIGZ1bmN0aW9uKVxuXG5mdW5jdGlvbiBvblJlbmRlckVycm9yKGUsIHZpZXcsIGZhbGxiYWNrKSB7XG5cdHZhciBtZXNzYWdlID0gZmFsbGJhY2sgIT09IHVuZGVmaW5lZFxuXHRcdD8gJGlzRnVuY3Rpb24oZmFsbGJhY2spXG5cdFx0XHQ/IGZhbGxiYWNrLmNhbGwodmlldy5kYXRhLCBlLCB2aWV3KVxuXHRcdFx0OiBmYWxsYmFjayB8fCBcIlwiXG5cdFx0OiBcIntFcnJvcjogXCIgKyAoZS5tZXNzYWdlfHxlKSArIFwifVwiO1xuXG5cdGlmICgkc3ViU2V0dGluZ3Mub25FcnJvciAmJiAoZmFsbGJhY2sgPSAkc3ViU2V0dGluZ3Mub25FcnJvci5jYWxsKHZpZXcuZGF0YSwgZSwgZmFsbGJhY2sgJiYgbWVzc2FnZSwgdmlldykpICE9PSB1bmRlZmluZWQpIHtcblx0XHRtZXNzYWdlID0gZmFsbGJhY2s7IC8vIFRoZXJlIGlzIGEgc2V0dGluZ3MuZGVidWdNb2RlKGhhbmRsZXIpIG9uRXJyb3Igb3ZlcnJpZGUuIENhbGwgaXQsIGFuZCB1c2UgcmV0dXJuIHZhbHVlIChpZiBhbnkpIHRvIHJlcGxhY2UgbWVzc2FnZVxuXHR9XG5cdHJldHVybiB2aWV3ICYmICF2aWV3Ll9sYyA/ICRjb252ZXJ0ZXJzLmh0bWwobWVzc2FnZSkgOiBtZXNzYWdlOyAvLyBGb3IgZGF0YS1saW5rPVxcXCJ7Li4uIG9uRXJyb3I9Li4ufVwiLi4uIFNlZSBvbkRhdGFMaW5rZWRUYWdDaGFuZ2Vcbn1cblxuZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuXHR0aHJvdyBuZXcgJHN1Yi5FcnIobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHN5bnRheEVycm9yKG1lc3NhZ2UpIHtcblx0ZXJyb3IoXCJTeW50YXggZXJyb3JcXG5cIiArIG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiB0bXBsRm4obWFya3VwLCB0bXBsLCBpc0xpbmtFeHByLCBjb252ZXJ0QmFjaywgaGFzRWxzZSkge1xuXHQvLyBDb21waWxlIG1hcmt1cCB0byBBU1QgKGFidHJhY3Qgc3ludGF4IHRyZWUpIHRoZW4gYnVpbGQgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIGNvZGUgZnJvbSB0aGUgQVNUIG5vZGVzXG5cdC8vIFVzZWQgZm9yIGNvbXBpbGluZyB0ZW1wbGF0ZXMsIGFuZCBhbHNvIGJ5IEpzVmlld3MgdG8gYnVpbGQgZnVuY3Rpb25zIGZvciBkYXRhIGxpbmsgZXhwcmVzc2lvbnNcblxuXHQvLz09PT0gbmVzdGVkIGZ1bmN0aW9ucyA9PT09XG5cdGZ1bmN0aW9uIHB1c2hwcmVjZWRpbmdDb250ZW50KHNoaWZ0KSB7XG5cdFx0c2hpZnQgLT0gbG9jO1xuXHRcdGlmIChzaGlmdCkge1xuXHRcdFx0Y29udGVudC5wdXNoKG1hcmt1cC5zdWJzdHIobG9jLCBzaGlmdCkucmVwbGFjZShyTmV3TGluZSwgXCJcXFxcblwiKSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYmxvY2tUYWdDaGVjayh0YWdOYW1lLCBibG9jaykge1xuXHRcdGlmICh0YWdOYW1lKSB7XG5cdFx0XHR0YWdOYW1lICs9ICd9fSc7XG5cdFx0XHQvL1x0XHRcdCd7e2luY2x1ZGV9fSBibG9jayBoYXMge3svZm9yfX0gd2l0aCBubyBvcGVuIHt7Zm9yfX0nXG5cdFx0XHRzeW50YXhFcnJvcigoXG5cdFx0XHRcdGJsb2NrXG5cdFx0XHRcdFx0PyAne3snICsgYmxvY2sgKyAnfX0gYmxvY2sgaGFzIHt7LycgKyB0YWdOYW1lICsgJyB3aXRob3V0IHt7JyArIHRhZ05hbWVcblx0XHRcdFx0XHQ6ICdVbm1hdGNoZWQgb3IgbWlzc2luZyB7ey8nICsgdGFnTmFtZSkgKyAnLCBpbiB0ZW1wbGF0ZTpcXG4nICsgbWFya3VwKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBwYXJzZVRhZyhhbGwsIGJpbmQsIHRhZ05hbWUsIGNvbnZlcnRlciwgY29sb24sIGh0bWwsIGNvZGVUYWcsIHBhcmFtcywgc2xhc2gsIGJpbmQyLCBjbG9zZUJsb2NrLCBpbmRleCkge1xuLypcblxuICAgICBiaW5kICAgICB0YWdOYW1lICAgICAgICAgY3Z0ICAgY2xuIGh0bWwgY29kZSAgICBwYXJhbXMgICAgICAgICAgICBzbGFzaCAgIGJpbmQyICAgICAgICAgY2xvc2VCbGsgIGNvbW1lbnRcbi8oPzp7KFxcXik/eyg/OihcXHcrKD89W1xcL1xcc31dKSl8KFxcdyspPyg6KXwoPil8KFxcKikpXFxzKigoPzpbXn1dfH0oPyF9KSkqPykoXFwvKT98eyhcXF4pP3soPzooPzpcXC8oXFx3KykpXFxzKnwhLS1bXFxzXFxTXSo/LS0pKX19L2dcblxuKD86XG4gIHsoXFxeKT97ICAgICAgICAgICAgYmluZFxuICAoPzpcbiAgICAoXFx3KyAgICAgICAgICAgICB0YWdOYW1lXG4gICAgICAoPz1bXFwvXFxzfV0pXG4gICAgKVxuICAgIHxcbiAgICAoXFx3Kyk/KDopICAgICAgICBjb252ZXJ0ZXIgY29sb25cbiAgICB8XG4gICAgKD4pICAgICAgICAgICAgICBodG1sXG4gICAgfFxuICAgIChcXCopICAgICAgICAgICAgIGNvZGVUYWdcbiAgKVxuICBcXHMqXG4gICggICAgICAgICAgICAgICAgICBwYXJhbXNcbiAgICAoPzpbXn1dfH0oPyF9KSkqP1xuICApXG4gIChcXC8pPyAgICAgICAgICAgICAgc2xhc2hcbiAgfFxuICB7KFxcXik/eyAgICAgICAgICAgIGJpbmQyXG4gICg/OlxuICAgICg/OlxcLyhcXHcrKSlcXHMqICAgY2xvc2VCbG9ja1xuICAgIHxcbiAgICAhLS1bXFxzXFxTXSo/LS0gICAgY29tbWVudFxuICApXG4pXG59fS9nXG5cbiovXG5cdFx0aWYgKGNvZGVUYWcgJiYgYmluZCB8fCBzbGFzaCAmJiAhdGFnTmFtZSB8fCBwYXJhbXMgJiYgcGFyYW1zLnNsaWNlKC0xKSA9PT0gXCI6XCIgfHwgYmluZDIpIHtcblx0XHRcdHN5bnRheEVycm9yKGFsbCk7XG5cdFx0fVxuXG5cdFx0Ly8gQnVpbGQgYWJzdHJhY3Qgc3ludGF4IHRyZWUgKEFTVCk6IFt0YWdOYW1lLCBjb252ZXJ0ZXIsIHBhcmFtcywgY29udGVudCwgaGFzaCwgYmluZGluZ3MsIGNvbnRlbnRNYXJrdXBdXG5cdFx0aWYgKGh0bWwpIHtcblx0XHRcdGNvbG9uID0gXCI6XCI7XG5cdFx0XHRjb252ZXJ0ZXIgPSBIVE1MO1xuXHRcdH1cblx0XHRzbGFzaCA9IHNsYXNoIHx8IGlzTGlua0V4cHIgJiYgIWhhc0Vsc2U7XG5cblx0XHR2YXIgbGF0ZSwgb3BlblRhZ05hbWUsIGlzTGF0ZU9iLFxuXHRcdFx0cGF0aEJpbmRpbmdzID0gKGJpbmQgfHwgaXNMaW5rRXhwcikgJiYgW1tdXSwgLy8gcGF0aEJpbmRpbmdzIGlzIGFuIGFycmF5IG9mIGFycmF5cyBmb3IgYXJnIGJpbmRpbmdzIGFuZCBhIGhhc2ggb2YgYXJyYXlzIGZvciBwcm9wIGJpbmRpbmdzXG5cdFx0XHRwcm9wcyA9IFwiXCIsXG5cdFx0XHRhcmdzID0gXCJcIixcblx0XHRcdGN0eFByb3BzID0gXCJcIixcblx0XHRcdHBhcmFtc0FyZ3MgPSBcIlwiLFxuXHRcdFx0cGFyYW1zUHJvcHMgPSBcIlwiLFxuXHRcdFx0cGFyYW1zQ3R4UHJvcHMgPSBcIlwiLFxuXHRcdFx0b25FcnJvciA9IFwiXCIsXG5cdFx0XHR1c2VUcmlnZ2VyID0gXCJcIixcblx0XHRcdC8vIEJsb2NrIHRhZyBpZiBub3Qgc2VsZi1jbG9zaW5nIGFuZCBub3Qge3s6fX0gb3Ige3s+fX0gKHNwZWNpYWwgY2FzZSkgYW5kIG5vdCBhIGRhdGEtbGluayBleHByZXNzaW9uXG5cdFx0XHRibG9jayA9ICFzbGFzaCAmJiAhY29sb247XG5cblx0XHQvLz09PT0gbmVzdGVkIGhlbHBlciBmdW5jdGlvbiA9PT09XG5cdFx0dGFnTmFtZSA9IHRhZ05hbWUgfHwgKHBhcmFtcyA9IHBhcmFtcyB8fCBcIiNkYXRhXCIsIGNvbG9uKTsgLy8ge3s6fX0gaXMgZXF1aXZhbGVudCB0byB7ezojZGF0YX19XG5cdFx0cHVzaHByZWNlZGluZ0NvbnRlbnQoaW5kZXgpO1xuXHRcdGxvYyA9IGluZGV4ICsgYWxsLmxlbmd0aDsgLy8gbG9jYXRpb24gbWFya2VyIC0gcGFyc2VkIHVwIHRvIGhlcmVcblx0XHRpZiAoY29kZVRhZykge1xuXHRcdFx0aWYgKGFsbG93Q29kZSkge1xuXHRcdFx0XHRjb250ZW50LnB1c2goW1wiKlwiLCBcIlxcblwiICsgcGFyYW1zLnJlcGxhY2UoL146LywgXCJyZXQrPSBcIikucmVwbGFjZShyVW5lc2NhcGVRdW90ZXMsIFwiJDFcIikgKyBcIjtcXG5cIl0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGFnTmFtZSkge1xuXHRcdFx0aWYgKHRhZ05hbWUgPT09IFwiZWxzZVwiKSB7XG5cdFx0XHRcdGlmIChyVGVzdEVsc2VJZi50ZXN0KHBhcmFtcykpIHtcblx0XHRcdFx0XHRzeW50YXhFcnJvcignRm9yIFwie3tlbHNlIGlmIGV4cHJ9fVwiIHVzZSBcInt7ZWxzZSBleHByfX1cIicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhdGhCaW5kaW5ncyA9IGN1cnJlbnRbOV0gJiYgW1tdXTtcblx0XHRcdFx0Y3VycmVudFsxMF0gPSBtYXJrdXAuc3Vic3RyaW5nKGN1cnJlbnRbMTBdLCBpbmRleCk7IC8vIGNvbnRlbnRNYXJrdXAgZm9yIGJsb2NrIHRhZ1xuXHRcdFx0XHRvcGVuVGFnTmFtZSA9IGN1cnJlbnRbMTFdIHx8IGN1cnJlbnRbMF0gfHwgc3ludGF4RXJyb3IoXCJNaXNtYXRjaGVkOiBcIiArIGFsbCk7XG5cdFx0XHRcdC8vIGN1cnJlbnRbMF0gaXMgdGFnTmFtZSwgYnV0IGZvciB7e2Vsc2V9fSBub2RlcywgY3VycmVudFsxMV0gaXMgdGFnTmFtZSBvZiBwcmVjZWRpbmcgb3BlbiB0YWdcblx0XHRcdFx0Y3VycmVudCA9IHN0YWNrLnBvcCgpO1xuXHRcdFx0XHRjb250ZW50ID0gY3VycmVudFsyXTtcblx0XHRcdFx0YmxvY2sgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhcmFtcykge1xuXHRcdFx0XHQvLyByZW1vdmUgbmV3bGluZXMgZnJvbSB0aGUgcGFyYW1zIHN0cmluZywgdG8gYXZvaWQgY29tcGlsZWQgY29kZSBlcnJvcnMgZm9yIHVudGVybWluYXRlZCBzdHJpbmdzXG5cdFx0XHRcdHBhcnNlUGFyYW1zKHBhcmFtcy5yZXBsYWNlKHJOZXdMaW5lLCBcIiBcIiksIHBhdGhCaW5kaW5ncywgdG1wbCwgaXNMaW5rRXhwcilcblx0XHRcdFx0XHQucmVwbGFjZShyQnVpbGRIYXNoLCBmdW5jdGlvbihhbGwsIG9uZXJyb3IsIGlzQ3R4UHJtLCBrZXksIGtleVRva2VuLCBrZXlWYWx1ZSwgYXJnLCBwYXJhbSkge1xuXHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gXCJ0aGlzOlwiKSB7XG5cdFx0XHRcdFx0XHRcdGtleVZhbHVlID0gXCJ1bmRlZmluZWRcIjsgLy8gdGhpcz1zb21lLnBhdGggaXMgYWx3YXlzIGEgdG8gcGFyYW1ldGVyIChvbmUtd2F5KSwgc28gZG9uJ3QgbmVlZCB0byBjb21waWxlL2V2YWx1YXRlIHNvbWUucGF0aCBpbml0aWFsaXphdGlvblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhcmFtKSB7XG5cdFx0XHRcdFx0XHRcdGlzTGF0ZU9iID0gaXNMYXRlT2IgfHwgcGFyYW1bMF0gPT09IFwiQFwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0a2V5ID0gXCInXCIgKyBrZXlUb2tlbiArIFwiJzpcIjtcblx0XHRcdFx0XHRcdGlmIChhcmcpIHtcblx0XHRcdFx0XHRcdFx0YXJncyArPSBpc0N0eFBybSArIGtleVZhbHVlICsgXCIsXCI7XG5cdFx0XHRcdFx0XHRcdHBhcmFtc0FyZ3MgKz0gXCInXCIgKyBwYXJhbSArIFwiJyxcIjtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoaXNDdHhQcm0pIHsgLy8gQ29udGV4dHVhbCBwYXJhbWV0ZXIsIH5mb289ZXhwclxuXHRcdFx0XHRcdFx0XHRjdHhQcm9wcyArPSBrZXkgKyAnai5fY3AoJyArIGtleVZhbHVlICsgJyxcIicgKyBwYXJhbSArICdcIix2aWV3KSwnO1xuXHRcdFx0XHRcdFx0XHQvLyBDb21waWxlZCBjb2RlIGZvciBldmFsdWF0aW5nIHRhZ0N0eCBvbiBhIHRhZyB3aWxsIGhhdmU6IGN0eDp7J2Zvbyc6ai5fY3AoY29tcGlsZWRFeHByLCBcImV4cHJcIiwgdmlldyl9XG5cdFx0XHRcdFx0XHRcdHBhcmFtc0N0eFByb3BzICs9IGtleSArIFwiJ1wiICsgcGFyYW0gKyBcIicsXCI7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG9uZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0b25FcnJvciArPSBrZXlWYWx1ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmIChrZXlUb2tlbiA9PT0gXCJ0cmlnZ2VyXCIpIHtcblx0XHRcdFx0XHRcdFx0XHR1c2VUcmlnZ2VyICs9IGtleVZhbHVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChrZXlUb2tlbiA9PT0gXCJsYXRlUmVuZGVyXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRsYXRlID0gcGFyYW0gIT09IFwiZmFsc2VcIjsgLy8gUmVuZGVyIGFmdGVyIGZpcnN0IHBhc3Ncblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRwcm9wcyArPSBrZXkgKyBrZXlWYWx1ZSArIFwiLFwiO1xuXHRcdFx0XHRcdFx0XHRwYXJhbXNQcm9wcyArPSBrZXkgKyBcIidcIiArIHBhcmFtICsgXCInLFwiO1xuXHRcdFx0XHRcdFx0XHRoYXNIYW5kbGVycyA9IGhhc0hhbmRsZXJzIHx8IHJIYXNIYW5kbGVycy50ZXN0KGtleVRva2VuKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBcIlwiO1xuXHRcdFx0XHRcdH0pLnNsaWNlKDAsIC0xKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhdGhCaW5kaW5ncyAmJiBwYXRoQmluZGluZ3NbMF0pIHtcblx0XHRcdFx0cGF0aEJpbmRpbmdzLnBvcCgpOyAvLyBSZW1vdmUgdGhlIGJpbmRpbmcgdGhhdCB3YXMgcHJlcGFyZWQgZm9yIG5leHQgYXJnLiAoVGhlcmUgaXMgYWx3YXlzIGFuIGV4dHJhIG9uZSByZWFkeSkuXG5cdFx0XHR9XG5cblx0XHRcdG5ld05vZGUgPSBbXG5cdFx0XHRcdFx0dGFnTmFtZSxcblx0XHRcdFx0XHRjb252ZXJ0ZXIgfHwgISFjb252ZXJ0QmFjayB8fCBoYXNIYW5kbGVycyB8fCBcIlwiLFxuXHRcdFx0XHRcdGJsb2NrICYmIFtdLFxuXHRcdFx0XHRcdHBhcnNlZFBhcmFtKHBhcmFtc0FyZ3MgfHwgKHRhZ05hbWUgPT09IFwiOlwiID8gXCInI2RhdGEnLFwiIDogXCJcIiksIHBhcmFtc1Byb3BzLCBwYXJhbXNDdHhQcm9wcyksIC8vIHt7On19IGVxdWl2YWxlbnQgdG8ge3s6I2RhdGF9fVxuXHRcdFx0XHRcdHBhcnNlZFBhcmFtKGFyZ3MgfHwgKHRhZ05hbWUgPT09IFwiOlwiID8gXCJkYXRhLFwiIDogXCJcIiksIHByb3BzLCBjdHhQcm9wcyksXG5cdFx0XHRcdFx0b25FcnJvcixcblx0XHRcdFx0XHR1c2VUcmlnZ2VyLFxuXHRcdFx0XHRcdGxhdGUsXG5cdFx0XHRcdFx0aXNMYXRlT2IsXG5cdFx0XHRcdFx0cGF0aEJpbmRpbmdzIHx8IDBcblx0XHRcdFx0XTtcblx0XHRcdGNvbnRlbnQucHVzaChuZXdOb2RlKTtcblx0XHRcdGlmIChibG9jaykge1xuXHRcdFx0XHRzdGFjay5wdXNoKGN1cnJlbnQpO1xuXHRcdFx0XHRjdXJyZW50ID0gbmV3Tm9kZTtcblx0XHRcdFx0Y3VycmVudFsxMF0gPSBsb2M7IC8vIFN0b3JlIGN1cnJlbnQgbG9jYXRpb24gb2Ygb3BlbiB0YWcsIHRvIGJlIGFibGUgdG8gYWRkIGNvbnRlbnRNYXJrdXAgd2hlbiB3ZSByZWFjaCBjbG9zaW5nIHRhZ1xuXHRcdFx0XHRjdXJyZW50WzExXSA9IG9wZW5UYWdOYW1lOyAvLyBVc2VkIGZvciBjaGVja2luZyBzeW50YXggKG1hdGNoaW5nIGNsb3NlIHRhZylcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGNsb3NlQmxvY2spIHtcblx0XHRcdGJsb2NrVGFnQ2hlY2soY2xvc2VCbG9jayAhPT0gY3VycmVudFswXSAmJiBjbG9zZUJsb2NrICE9PSBjdXJyZW50WzExXSAmJiBjbG9zZUJsb2NrLCBjdXJyZW50WzBdKTsgLy8gQ2hlY2sgbWF0Y2hpbmcgY2xvc2UgdGFnIG5hbWVcblx0XHRcdGN1cnJlbnRbMTBdID0gbWFya3VwLnN1YnN0cmluZyhjdXJyZW50WzEwXSwgaW5kZXgpOyAvLyBjb250ZW50TWFya3VwIGZvciBibG9jayB0YWdcblx0XHRcdGN1cnJlbnQgPSBzdGFjay5wb3AoKTtcblx0XHR9XG5cdFx0YmxvY2tUYWdDaGVjayghY3VycmVudCAmJiBjbG9zZUJsb2NrKTtcblx0XHRjb250ZW50ID0gY3VycmVudFsyXTtcblx0fVxuXHQvLz09PT0gL2VuZCBvZiBuZXN0ZWQgZnVuY3Rpb25zID09PT1cblxuXHR2YXIgaSwgcmVzdWx0LCBuZXdOb2RlLCBoYXNIYW5kbGVycywgYmluZGluZ3MsXG5cdFx0YWxsb3dDb2RlID0gJHN1YlNldHRpbmdzLmFsbG93Q29kZSB8fCB0bXBsICYmIHRtcGwuYWxsb3dDb2RlXG5cdFx0XHR8fCAkdmlld3NTZXR0aW5ncy5hbGxvd0NvZGUgPT09IHRydWUsIC8vIGluY2x1ZGUgZGlyZWN0IHNldHRpbmcgb2Ygc2V0dGluZ3MuYWxsb3dDb2RlIHRydWUgZm9yIGJhY2t3YXJkIGNvbXBhdCBvbmx5XG5cdFx0YXN0VG9wID0gW10sXG5cdFx0bG9jID0gMCxcblx0XHRzdGFjayA9IFtdLFxuXHRcdGNvbnRlbnQgPSBhc3RUb3AsXG5cdFx0Y3VycmVudCA9IFssLGFzdFRvcF07XG5cblx0aWYgKGFsbG93Q29kZSAmJiB0bXBsLl9pcykge1xuXHRcdHRtcGwuYWxsb3dDb2RlID0gYWxsb3dDb2RlO1xuXHR9XG5cbi8vVE9ET1x0cmVzdWx0ID0gdG1wbEZuc0NhY2hlW21hcmt1cF07IC8vIE9ubHkgY2FjaGUgaWYgdGVtcGxhdGUgaXMgbm90IG5hbWVkIGFuZCBtYXJrdXAgbGVuZ3RoIDwgLi4uLFxuLy9hbmQgdGhlcmUgYXJlIG5vIGJpbmRpbmdzIG9yIHN1YnRlbXBsYXRlcz8/IENvbnNpZGVyIHN0YW5kYXJkIG9wdGltaXphdGlvbiBmb3IgZGF0YS1saW5rPVwiYS5iLmNcIlxuLy9cdFx0aWYgKHJlc3VsdCkge1xuLy9cdFx0XHR0bXBsLmZuID0gcmVzdWx0O1xuLy9cdFx0fSBlbHNlIHtcblxuLy9cdFx0cmVzdWx0ID0gbWFya3VwO1xuXHRpZiAoaXNMaW5rRXhwcikge1xuXHRcdGlmIChjb252ZXJ0QmFjayAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRtYXJrdXAgPSBtYXJrdXAuc2xpY2UoMCwgLWNvbnZlcnRCYWNrLmxlbmd0aCAtIDIpICsgZGVsaW1DbG9zZUNoYXIwO1xuXHRcdH1cblx0XHRtYXJrdXAgPSBkZWxpbU9wZW5DaGFyMCArIG1hcmt1cCArIGRlbGltQ2xvc2VDaGFyMTtcblx0fVxuXG5cdGJsb2NrVGFnQ2hlY2soc3RhY2tbMF0gJiYgc3RhY2tbMF1bMl0ucG9wKClbMF0pO1xuXHQvLyBCdWlsZCB0aGUgQVNUIChhYnN0cmFjdCBzeW50YXggdHJlZSkgdW5kZXIgYXN0VG9wXG5cdG1hcmt1cC5yZXBsYWNlKHJUYWcsIHBhcnNlVGFnKTtcblxuXHRwdXNocHJlY2VkaW5nQ29udGVudChtYXJrdXAubGVuZ3RoKTtcblxuXHRpZiAobG9jID0gYXN0VG9wW2FzdFRvcC5sZW5ndGggLSAxXSkge1xuXHRcdGJsb2NrVGFnQ2hlY2soXCJcIiArIGxvYyAhPT0gbG9jICYmICgrbG9jWzEwXSA9PT0gbG9jWzEwXSkgJiYgbG9jWzBdKTtcblx0fVxuLy9cdFx0XHRyZXN1bHQgPSB0bXBsRm5zQ2FjaGVbbWFya3VwXSA9IGJ1aWxkQ29kZShhc3RUb3AsIHRtcGwpO1xuLy9cdFx0fVxuXG5cdGlmIChpc0xpbmtFeHByKSB7XG5cdFx0cmVzdWx0ID0gYnVpbGRDb2RlKGFzdFRvcCwgbWFya3VwLCBpc0xpbmtFeHByKTtcblx0XHRiaW5kaW5ncyA9IFtdO1xuXHRcdGkgPSBhc3RUb3AubGVuZ3RoO1xuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdGJpbmRpbmdzLnVuc2hpZnQoYXN0VG9wW2ldWzldKTsgLy8gV2l0aCBkYXRhLWxpbmsgZXhwcmVzc2lvbnMsIHBhdGhCaW5kaW5ncyBhcnJheSBmb3IgdGFnQ3R4W2ldIGlzIGFzdFRvcFtpXVs5XVxuXHRcdH1cblx0XHRzZXRQYXRocyhyZXN1bHQsIGJpbmRpbmdzKTtcblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSBidWlsZENvZGUoYXN0VG9wLCB0bXBsKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzZXRQYXRocyhmbiwgcGF0aHNBcnIpIHtcblx0dmFyIGtleSwgcGF0aHMsXG5cdFx0aSA9IDAsXG5cdFx0bCA9IHBhdGhzQXJyLmxlbmd0aDtcblx0Zm4uZGVwcyA9IFtdO1xuXHRmbi5wYXRocyA9IFtdOyAvLyBUaGUgYXJyYXkgb2YgcGF0aCBiaW5kaW5nIChhcnJheS9kaWN0aW9uYXJ5KXMgZm9yIGVhY2ggdGFnL2Vsc2UgYmxvY2sncyBhcmdzIGFuZCBwcm9wc1xuXHRmb3IgKDsgaSA8IGw7IGkrKykge1xuXHRcdGZuLnBhdGhzLnB1c2gocGF0aHMgPSBwYXRoc0FycltpXSk7XG5cdFx0Zm9yIChrZXkgaW4gcGF0aHMpIHtcblx0XHRcdGlmIChrZXkgIT09IFwiX2pzdnRvXCIgJiYgcGF0aHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwYXRoc1trZXldLmxlbmd0aCAmJiAhcGF0aHNba2V5XS5za3ApIHtcblx0XHRcdFx0Zm4uZGVwcyA9IGZuLmRlcHMuY29uY2F0KHBhdGhzW2tleV0pOyAvLyBkZXBzIGlzIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBwYXRocyBhcnJheXMgZm9yIHRoZSBkaWZmZXJlbnQgYmluZGluZ3Ncblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VkUGFyYW0oYXJncywgcHJvcHMsIGN0eCkge1xuXHRyZXR1cm4gW2FyZ3Muc2xpY2UoMCwgLTEpLCBwcm9wcy5zbGljZSgwLCAtMSksIGN0eC5zbGljZSgwLCAtMSldO1xufVxuXG5mdW5jdGlvbiBwYXJhbVN0cnVjdHVyZShwYXJ0cywgdHlwZSkge1xuXHRyZXR1cm4gJ1xcblxcdCdcblx0XHQrICh0eXBlXG5cdFx0XHQ/IHR5cGUgKyAnOnsnXG5cdFx0XHQ6ICcnKVxuXHRcdCsgJ2FyZ3M6WycgKyBwYXJ0c1swXSArICddLFxcblxcdHByb3BzOnsnICsgcGFydHNbMV0gKyAnfSdcblx0XHQrIChwYXJ0c1syXSA/ICcsXFxuXFx0Y3R4OnsnICsgcGFydHNbMl0gKyAnfScgOiBcIlwiKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbXMocGFyYW1zLCBwYXRoQmluZGluZ3MsIHRtcGwsIGlzTGlua0V4cHIpIHtcblxuXHRmdW5jdGlvbiBwYXJzZVRva2VucyhhbGwsIGxmdFBybjAsIGxmdFBybiwgYm91bmQsIHBhdGgsIG9wZXJhdG9yLCBlcnIsIGVxLCBwYXRoMiwgbGF0ZSwgcHJuLCBjb21tYSwgbGZ0UHJuMiwgYXBvcywgcXVvdCwgcnRQcm4sIHJ0UHJuRG90LCBwcm4yLCBzcGFjZSwgaW5kZXgsIGZ1bGwpIHtcblx0Ly8gLyhcXCgpKD89XFxzKlxcKCl8KD86KFsoW10pXFxzKik/KD86KFxcXj8pKH4/W1xcdyQuXl0rKT9cXHMqKChcXCtcXCt8LS0pfFxcK3wtfH4oPyFbXFx3JF0pfCYmfFxcfFxcfHw9PT18IT09fD09fCE9fDw9fD49fFs8PiUqOj9cXC9dfCg9KSlcXHMqfCghKj8oQCk/WyN+XT9bXFx3JC5eXSspKFsoW10pPyl8KCxcXHMqKXwoXFwoPylcXFxcPyg/OignKXwoXCIpKXwoPzpcXHMqKChbKVxcXV0pKD89Wy5eXXxcXHMqJHxbXihbXSl8WylcXF1dKShbKFtdPykpfChcXHMrKS9nLFxuXHQvL2xmdFBybjAgICAgICAgICAgIGxmdFBybiAgICAgICAgIGJvdW5kICAgICBwYXRoICAgICAgICAgICAgICAgb3BlcmF0b3IgICAgIGVyciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxICAgICAgcGF0aDIgbGF0ZSAgICAgICAgICAgIHBybiAgICAgIGNvbW1hICBsZnRQcm4yICAgYXBvcyBxdW90ICAgICAgICBydFBybiAgcnRQcm5Eb3QgICAgICAgICAgICAgICAgICBwcm4yICAgICBzcGFjZVxuXHQvLyAobGVmdCBwYXJlbj8gZm9sbG93ZWQgYnkgKHBhdGg/IGZvbGxvd2VkIGJ5IG9wZXJhdG9yKSBvciAocGF0aCBmb2xsb3dlZCBieSBwYXJlbj8pKSBvciBjb21tYSBvciBhcG9zIG9yIHF1b3Qgb3IgcmlnaHQgcGFyZW4gb3Igc3BhY2VcblxuXHRcdGZ1bmN0aW9uIHBhcnNlUGF0aChhbGxQYXRoLCBub3QsIG9iamVjdCwgaGVscGVyLCB2aWV3LCB2aWV3UHJvcGVydHksIHBhdGhUb2tlbnMsIGxlYWZUb2tlbikge1xuXHRcdFx0Ly8gL14oISo/KSg/Om51bGx8dHJ1ZXxmYWxzZXxcXGRbXFxkLl0qfChbXFx3JF0rfFxcLnx+KFtcXHckXSspfCModmlld3woW1xcdyRdKykpPykoW1xcdyQuXl0qPykoPzpbLlteXShbXFx3JF0rKVxcXT8pPykkL2csXG5cdFx0XHQvLyAgICBub3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0ICAgICBoZWxwZXIgICAgdmlldyAgdmlld1Byb3BlcnR5IHBhdGhUb2tlbnMgICAgICBsZWFmVG9rZW5cblx0XHRcdHZhciBzdWJQYXRoID0gb2JqZWN0ID09PSBcIi5cIjtcblx0XHRcdGlmIChvYmplY3QpIHtcblx0XHRcdFx0cGF0aCA9IHBhdGguc2xpY2Uobm90Lmxlbmd0aCk7XG5cdFx0XHRcdGlmICgvXlxcLj9jb25zdHJ1Y3RvciQvLnRlc3QobGVhZlRva2VufHxwYXRoKSkge1xuXHRcdFx0XHRcdHN5bnRheEVycm9yKGFsbFBhdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghc3ViUGF0aCkge1xuXHRcdFx0XHRcdGFsbFBhdGggPSAobGF0ZSAvLyBsYXRlIHBhdGggQGEuYi5jOiBub3QgdGhyb3cgb24gJ3Byb3BlcnR5IG9mIHVuZGVmaW5lZCcgaWYgYSB1bmRlZmluZWQsIGFuZCB3aWxsIHVzZSBfZ2V0T2IoKSBhZnRlciBsaW5raW5nIHRvIHJlc29sdmUgbGF0ZS5cblx0XHRcdFx0XHRcdFx0PyAoaXNMaW5rRXhwciA/ICcnIDogJyhsdE9iLmx0PWx0T2IubHR8fCcpICsgJyhvYj0nXG5cdFx0XHRcdFx0XHRcdDogXCJcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KyAoaGVscGVyXG5cdFx0XHRcdFx0XHRcdD8gJ3ZpZXcuY3R4UHJtKFwiJyArIGhlbHBlciArICdcIiknXG5cdFx0XHRcdFx0XHRcdDogdmlld1xuXHRcdFx0XHRcdFx0XHRcdD8gXCJ2aWV3XCJcblx0XHRcdFx0XHRcdFx0XHQ6IFwiZGF0YVwiKVxuXHRcdFx0XHRcdFx0KyAobGF0ZVxuXHRcdFx0XHRcdFx0XHQ/ICcpPT09dW5kZWZpbmVkJyArIChpc0xpbmtFeHByID8gJycgOiAnKScpICsgJz9cIlwiOnZpZXcuX2dldE9iKG9iLFwiJ1xuXHRcdFx0XHRcdFx0XHQ6IFwiXCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCsgKGxlYWZUb2tlblxuXHRcdFx0XHRcdFx0XHQ/ICh2aWV3UHJvcGVydHlcblx0XHRcdFx0XHRcdFx0XHQ/IFwiLlwiICsgdmlld1Byb3BlcnR5XG5cdFx0XHRcdFx0XHRcdFx0OiBoZWxwZXJcblx0XHRcdFx0XHRcdFx0XHRcdD8gXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAodmlldyA/IFwiXCIgOiBcIi5cIiArIG9iamVjdClcblx0XHRcdFx0XHRcdFx0XHQpICsgKHBhdGhUb2tlbnMgfHwgXCJcIilcblx0XHRcdFx0XHRcdFx0OiAobGVhZlRva2VuID0gaGVscGVyID8gXCJcIiA6IHZpZXcgPyB2aWV3UHJvcGVydHkgfHwgXCJcIiA6IG9iamVjdCwgXCJcIikpO1xuXHRcdFx0XHRcdGFsbFBhdGggPSBhbGxQYXRoICsgKGxlYWZUb2tlbiA/IFwiLlwiICsgbGVhZlRva2VuIDogXCJcIik7XG5cblx0XHRcdFx0XHRhbGxQYXRoID0gbm90ICsgKGFsbFBhdGguc2xpY2UoMCwgOSkgPT09IFwidmlldy5kYXRhXCJcblx0XHRcdFx0XHRcdD8gYWxsUGF0aC5zbGljZSg1KSAvLyBjb252ZXJ0ICN2aWV3LmRhdGEuLi4gdG8gZGF0YS4uLlxuXHRcdFx0XHRcdFx0OiBhbGxQYXRoKVxuXHRcdFx0XHRcdCsgKGxhdGVcblx0XHRcdFx0XHRcdFx0PyAoaXNMaW5rRXhwciA/ICdcIic6ICdcIixsdE9iJykgKyAocHJuID8gJywxKSc6JyknKVxuXHRcdFx0XHRcdFx0XHQ6IFwiXCJcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGJpbmRpbmdzKSB7XG5cdFx0XHRcdFx0YmluZHMgPSBuYW1lZCA9PT0gXCJfbGlua1RvXCIgPyAoYmluZHRvID0gcGF0aEJpbmRpbmdzLl9qc3Z0byA9IHBhdGhCaW5kaW5ncy5fanN2dG8gfHwgW10pIDogYm5kQ3R4LmJkO1xuXHRcdFx0XHRcdGlmICh0aGVPYiA9IHN1YlBhdGggJiYgYmluZHNbYmluZHMubGVuZ3RoLTFdKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhlT2IuX2NwZm4pIHsgLy8gQ29tcHV0ZWQgcHJvcGVydHkgZXhwck9iXG5cdFx0XHRcdFx0XHRcdHdoaWxlICh0aGVPYi5zYikge1xuXHRcdFx0XHRcdFx0XHRcdHRoZU9iID0gdGhlT2Iuc2I7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKHRoZU9iLmJuZCkge1xuXHRcdFx0XHRcdFx0XHRcdHBhdGggPSBcIl5cIiArIHBhdGguc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGhlT2Iuc2IgPSBwYXRoO1xuXHRcdFx0XHRcdFx0XHR0aGVPYi5ibmQgPSB0aGVPYi5ibmQgfHwgcGF0aFswXSA9PT0gXCJeXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJpbmRzLnB1c2gocGF0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhdGhTdGFydFtwYXJlbkRlcHRoXSA9IGluZGV4ICsgKHN1YlBhdGggPyAxIDogMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBhbGxQYXRoO1xuXHRcdH1cblxuXHRcdC8vYm91bmQgPSBiaW5kaW5ncyAmJiBib3VuZDtcblx0XHRpZiAoYm91bmQgJiYgIWVxKSB7XG5cdFx0XHRwYXRoID0gYm91bmQgKyBwYXRoOyAvLyBlLmcuIHNvbWUuZm4oLi4uKV5zb21lLnBhdGggLSBzbyBoZXJlIHBhdGggaXMgXCJec29tZS5wYXRoXCJcblx0XHR9XG5cdFx0b3BlcmF0b3IgPSBvcGVyYXRvciB8fCBcIlwiO1xuXHRcdGxmdFBybiA9IGxmdFBybiB8fCBsZnRQcm4wIHx8IGxmdFBybjI7XG5cdFx0cGF0aCA9IHBhdGggfHwgcGF0aDI7XG5cblx0XHRpZiAobGF0ZSAmJiAobGF0ZSA9ICEvXFwpfF0vLnRlc3QoZnVsbFtpbmRleC0xXSkpKSB7XG5cdFx0XHRwYXRoID0gcGF0aC5zbGljZSgxKS5zcGxpdChcIi5cIikuam9pbihcIl5cIik7IC8vIExhdGUgcGF0aCBAei5iLmMuIFVzZSBcIl5cIiByYXRoZXIgdGhhbiBcIi5cIiB0byBlbnN1cmUgdGhhdCBkZWVwIGJpbmRpbmcgd2lsbCBiZSB1c2VkXG5cdFx0fVxuXHRcdC8vIENvdWxkIGRvIHRoaXMgLSBidXQgbm90IHdvcnRoIHBlcmYgY29zdD8/IDotXG5cdFx0Ly8gaWYgKCFwYXRoLmxhc3RJbmRleE9mKFwiI2RhdGEuXCIsIDApKSB7IHBhdGggPSBwYXRoLnNsaWNlKDYpOyB9IC8vIElmIHBhdGggc3RhcnRzIHdpdGggXCIjZGF0YS5cIiwgcmVtb3ZlIHRoYXQuXG5cdFx0cHJuID0gcHJuIHx8IHBybjIgfHwgXCJcIjtcblxuXHRcdHZhciBleHByLCBleHByRm4sIGJpbmRzLCB0aGVPYiwgbmV3T2IsXG5cdFx0XHRydFNxID0gXCIpXCI7XG5cblx0XHRpZiAocHJuID09PSBcIltcIikge1xuXHRcdFx0cHJuID0gXCJbai5fc3EoXCI7XG5cdFx0XHRydFNxID0gXCIpXVwiO1xuXHRcdH1cblxuXHRcdGlmIChlcnIgJiYgIWFwb3NlZCAmJiAhcXVvdGVkKSB7XG5cdFx0XHRzeW50YXhFcnJvcihwYXJhbXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoYmluZGluZ3MgJiYgcnRQcm5Eb3QgJiYgIWFwb3NlZCAmJiAhcXVvdGVkKSB7XG5cdFx0XHRcdC8vIFRoaXMgaXMgYSBiaW5kaW5nIHRvIGEgcGF0aCBpbiB3aGljaCBhbiBvYmplY3QgaXMgcmV0dXJuZWQgYnkgYSBoZWxwZXIvZGF0YSBmdW5jdGlvbi9leHByZXNzaW9uLCBlLmcuIGZvbygpXngueSBvciAoYT9iOmMpXngueVxuXHRcdFx0XHQvLyBXZSBjcmVhdGUgYSBjb21waWxlZCBmdW5jdGlvbiB0byBnZXQgdGhlIG9iamVjdCBpbnN0YW5jZSAod2hpY2ggd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZGVwZW5kZW50IGRhdGEgb2YgdGhlIHN1YmV4cHJlc3Npb24gY2hhbmdlcywgdG8gcmV0dXJuIHRoZSBuZXcgb2JqZWN0LCBhbmQgdHJpZ2dlciByZS1iaW5kaW5nIG9mIHRoZSBzdWJzZXF1ZW50IHBhdGgpXG5cdFx0XHRcdGlmIChwYXJlbkRlcHRoKSB7XG5cdFx0XHRcdFx0ZXhwciA9IHBhdGhTdGFydFtwYXJlbkRlcHRoIC0gMV07XG5cdFx0XHRcdFx0aWYgKGZ1bGwubGVuZ3RoIC0gMSA+IGluZGV4IC0gKGV4cHIgfHwgMCkpIHsgLy8gV2UgbmVlZCB0byBjb21waWxlIGEgc3ViZXhwcmVzc2lvblxuXHRcdFx0XHRcdFx0ZXhwciA9IGZ1bGwuc2xpY2UoZXhwciwgaW5kZXggKyBhbGwubGVuZ3RoKTtcblx0XHRcdFx0XHRcdGlmIChleHByRm4gIT09IHRydWUpIHsgLy8gSWYgbm90IHJlZW50cmFudCBjYWxsIGR1cmluZyBjb21waWxhdGlvblxuXHRcdFx0XHRcdFx0XHRiaW5kcyA9IGJpbmR0byB8fCBibmRTdGFja1twYXJlbkRlcHRoLTFdLmJkO1xuXHRcdFx0XHRcdFx0XHQvLyBJbnNlcnQgZXhwck9iIG9iamVjdCwgdG8gYmUgdXNlZCBkdXJpbmcgYmluZGluZyB0byByZXR1cm4gdGhlIGNvbXB1dGVkIG9iamVjdFxuXHRcdFx0XHRcdFx0XHR0aGVPYiA9IGJpbmRzW2JpbmRzLmxlbmd0aC0xXTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoZU9iICYmIHRoZU9iLnBybSkge1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICh0aGVPYi5zYiAmJiB0aGVPYi5zYi5wcm0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoZU9iID0gdGhlT2Iuc2I7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdG5ld09iID0gdGhlT2Iuc2IgPSB7cGF0aDogdGhlT2Iuc2IsIGJuZDogdGhlT2IuYm5kfTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRiaW5kcy5wdXNoKG5ld09iID0ge3BhdGg6IGJpbmRzLnBvcCgpfSk7IC8vIEluc2VydCBleHByT2Igb2JqZWN0LCB0byBiZSB1c2VkIGR1cmluZyBiaW5kaW5nIHRvIHJldHVybiB0aGUgY29tcHV0ZWQgb2JqZWN0XG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC8vIChlLmcuIFwic29tZS5vYmplY3QoKVwiIGluIFwic29tZS5vYmplY3QoKS5hLmJcIiAtIHRvIGJlIHVzZWQgYXMgY29udGV4dCBmb3IgYmluZGluZyB0aGUgZm9sbG93aW5nIHRva2VucyBcImEuYlwiKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cnRQcm5Eb3QgPSBkZWxpbU9wZW5DaGFyMSArIFwiOlwiICsgZXhwciAvLyBUaGUgcGFyYW1ldGVyIG9yIGZ1bmN0aW9uIHN1YmV4cHJlc3Npb25cblx0XHRcdFx0XHRcdFx0KyBcIiBvbmVycm9yPScnXCIgLy8gc2V0IG9uZXJyb3I9JycgaW4gb3JkZXIgdG8gd3JhcCBnZW5lcmF0ZWQgY29kZSB3aXRoIGEgdHJ5IGNhdGNoIC0gcmV0dXJuaW5nICcnIGFzIG9iamVjdCBpbnN0YW5jZSBpZiB0aGVyZSBpcyBhbiBlcnJvci9taXNzaW5nIHBhcmVudFxuXHRcdFx0XHRcdFx0XHQrIGRlbGltQ2xvc2VDaGFyMDtcblx0XHRcdFx0XHRcdGV4cHJGbiA9IHRtcGxMaW5rc1tydFBybkRvdF07XG5cdFx0XHRcdFx0XHRpZiAoIWV4cHJGbikge1xuXHRcdFx0XHRcdFx0XHR0bXBsTGlua3NbcnRQcm5Eb3RdID0gdHJ1ZTsgLy8gRmxhZyB0aGF0IHRoaXMgZXhwckZuIChmb3IgcnRQcm5Eb3QpIGlzIGJlaW5nIGNvbXBpbGVkXG5cdFx0XHRcdFx0XHRcdHRtcGxMaW5rc1tydFBybkRvdF0gPSBleHByRm4gPSB0bXBsRm4ocnRQcm5Eb3QsIHRtcGwsIHRydWUpOyAvLyBDb21waWxlIHRoZSBleHByZXNzaW9uIChvciB1c2UgY2FjaGVkIGNvcHkgYWxyZWFkeSBpbiB0bXBsLmxpbmtzKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGV4cHJGbiAhPT0gdHJ1ZSAmJiBuZXdPYikge1xuXHRcdFx0XHRcdFx0XHQvLyBJZiBub3QgcmVlbnRyYW50IGNhbGwgZHVyaW5nIGNvbXBpbGF0aW9uXG5cdFx0XHRcdFx0XHRcdG5ld09iLl9jcGZuID0gZXhwckZuO1xuXHRcdFx0XHRcdFx0XHRuZXdPYi5wcm0gPSBibmRDdHguYmQ7XG5cdFx0XHRcdFx0XHRcdG5ld09iLmJuZCA9IG5ld09iLmJuZCB8fCBuZXdPYi5wYXRoICYmIG5ld09iLnBhdGguaW5kZXhPZihcIl5cIikgPj0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiAoYXBvc2VkXG5cdFx0XHRcdC8vIHdpdGhpbiBzaW5nbGUtcXVvdGVkIHN0cmluZ1xuXHRcdFx0XHQ/IChhcG9zZWQgPSAhYXBvcywgKGFwb3NlZCA/IGFsbCA6IGxmdFBybjIgKyAnXCInKSlcblx0XHRcdFx0OiBxdW90ZWRcblx0XHRcdFx0Ly8gd2l0aGluIGRvdWJsZS1xdW90ZWQgc3RyaW5nXG5cdFx0XHRcdFx0PyAocXVvdGVkID0gIXF1b3QsIChxdW90ZWQgPyBhbGwgOiBsZnRQcm4yICsgJ1wiJykpXG5cdFx0XHRcdFx0OlxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0KGxmdFByblxuXHRcdFx0XHRcdFx0PyAocGF0aFN0YXJ0W3BhcmVuRGVwdGhdID0gaW5kZXgrKywgYm5kQ3R4ID0gYm5kU3RhY2tbKytwYXJlbkRlcHRoXSA9IHtiZDogW119LCBsZnRQcm4pXG5cdFx0XHRcdFx0XHQ6IFwiXCIpXG5cdFx0XHRcdFx0KyAoc3BhY2Vcblx0XHRcdFx0XHRcdD8gKHBhcmVuRGVwdGhcblx0XHRcdFx0XHRcdFx0PyBcIlwiXG5cdFx0XHRcdC8vIE5ldyBhcmcgb3IgcHJvcCAtIHNvIGluc2VydCBiYWNrc3BhY2UgXFxiIChcXHgwOCkgYXMgc2VwYXJhdG9yIGZvciBuYW1lZCBwYXJhbXMsIHVzZWQgc3Vic2VxdWVudGx5IGJ5IHJCdWlsZEhhc2gsIGFuZCBwcmVwYXJlIG5ldyBiaW5kaW5ncyBhcnJheVxuXHRcdFx0XHRcdFx0XHQ6IChwYXJhbUluZGV4ID0gZnVsbC5zbGljZShwYXJhbUluZGV4LCBpbmRleCksIG5hbWVkXG5cdFx0XHRcdFx0XHRcdFx0PyAobmFtZWQgPSBib3VuZE5hbWUgPSBiaW5kdG8gPSBmYWxzZSwgXCJcXGJcIilcblx0XHRcdFx0XHRcdFx0XHQ6IFwiXFxiLFwiKSArIHBhcmFtSW5kZXggKyAocGFyYW1JbmRleCA9IGluZGV4ICsgYWxsLmxlbmd0aCwgYmluZGluZ3MgJiYgcGF0aEJpbmRpbmdzLnB1c2goYm5kQ3R4LmJkID0gW10pLCBcIlxcYlwiKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0OiBlcVxuXHRcdFx0XHQvLyBuYW1lZCBwYXJhbS4gUmVtb3ZlIGJpbmRpbmdzIGZvciBhcmcgYW5kIGNyZWF0ZSBpbnN0ZWFkIGJpbmRpbmdzIGFycmF5IGZvciBwcm9wXG5cdFx0XHRcdFx0XHRcdD8gKHBhcmVuRGVwdGggJiYgc3ludGF4RXJyb3IocGFyYW1zKSwgYmluZGluZ3MgJiYgcGF0aEJpbmRpbmdzLnBvcCgpLCBuYW1lZCA9IFwiX1wiICsgcGF0aCwgYm91bmROYW1lID0gYm91bmQsIHBhcmFtSW5kZXggPSBpbmRleCArIGFsbC5sZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRiaW5kaW5ncyAmJiAoKGJpbmRpbmdzID0gYm5kQ3R4LmJkID0gcGF0aEJpbmRpbmdzW25hbWVkXSA9IFtdKSwgYmluZGluZ3Muc2twID0gIWJvdW5kKSwgcGF0aCArICc6Jylcblx0XHRcdFx0XHRcdFx0OiBwYXRoXG5cdFx0XHRcdC8vIHBhdGhcblx0XHRcdFx0XHRcdFx0XHQ/IChwYXRoLnNwbGl0KFwiXlwiKS5qb2luKFwiLlwiKS5yZXBsYWNlKCRzdWIuclBhdGgsIHBhcnNlUGF0aClcblx0XHRcdFx0XHRcdFx0XHRcdCsgKHByblxuXHRcdFx0XHQvLyBzb21lLmZuY2FsbChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyAoYm5kQ3R4ID0gYm5kU3RhY2tbKytwYXJlbkRlcHRoXSA9IHtiZDogW119LCBmbkNhbGxbcGFyZW5EZXB0aF0gPSBydFNxLCBwcm4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogb3BlcmF0b3IpXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdDogb3BlcmF0b3Jcblx0XHRcdFx0Ly8gb3BlcmF0b3Jcblx0XHRcdFx0XHRcdFx0XHRcdD8gb3BlcmF0b3Jcblx0XHRcdFx0XHRcdFx0XHRcdDogcnRQcm5cblx0XHRcdFx0Ly8gZnVuY3Rpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0PyAoKHJ0UHJuID0gZm5DYWxsW3BhcmVuRGVwdGhdIHx8IHJ0UHJuLCBmbkNhbGxbcGFyZW5EZXB0aF0gPSBmYWxzZSwgYm5kQ3R4ID0gYm5kU3RhY2tbLS1wYXJlbkRlcHRoXSwgcnRQcm4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAocHJuIC8vIHJ0UHJuIGFuZCBwcm4sIGUuZyApKCBpbiAoYSkoKSBvciBhKCkoKSwgb3IgKVsgaW4gYSgpW11cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gKGJuZEN0eCA9IGJuZFN0YWNrWysrcGFyZW5EZXB0aF0sIGZuQ2FsbFtwYXJlbkRlcHRoXSA9IHJ0U3EsIHBybilcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogXCJcIilcblx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IGNvbW1hXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAoZm5DYWxsW3BhcmVuRGVwdGhdIHx8IHN5bnRheEVycm9yKHBhcmFtcyksIFwiLFwiKSAvLyBXZSBkb24ndCBhbGxvdyB0b3AtbGV2ZWwgbGl0ZXJhbCBhcnJheXMgb3Igb2JqZWN0c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogbGZ0UHJuMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IChhcG9zZWQgPSBhcG9zLCBxdW90ZWQgPSBxdW90LCAnXCInKVxuXHRcdFx0XHQpKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbmFtZWQsIGJpbmR0bywgYm91bmROYW1lLFxuXHRcdHF1b3RlZCwgLy8gYm9vbGVhbiBmb3Igc3RyaW5nIGNvbnRlbnQgaW4gZG91YmxlIHF1b3Rlc1xuXHRcdGFwb3NlZCwgLy8gb3IgaW4gc2luZ2xlIHF1b3Rlc1xuXHRcdGJpbmRpbmdzID0gcGF0aEJpbmRpbmdzICYmIHBhdGhCaW5kaW5nc1swXSwgLy8gYmluZGluZ3MgYXJyYXkgZm9yIHRoZSBmaXJzdCBhcmdcblx0XHRibmRDdHggPSB7YmQ6IGJpbmRpbmdzfSxcblx0XHRibmRTdGFjayA9IHswOiBibmRDdHh9LFxuXHRcdHBhcmFtSW5kZXggPSAwLCAvLyBsaXN0LFxuXHRcdHRtcGxMaW5rcyA9ICh0bXBsID8gdG1wbC5saW5rcyA6IGJpbmRpbmdzICYmIChiaW5kaW5ncy5saW5rcyA9IGJpbmRpbmdzLmxpbmtzIHx8IHt9KSkgfHwgdG9wVmlldy50bXBsLmxpbmtzLFxuXHRcdC8vIFRoZSBmb2xsb3dpbmcgYXJlIHVzZWQgZm9yIHRyYWNraW5nIHBhdGggcGFyc2luZyBpbmNsdWRpbmcgbmVzdGVkIHBhdGhzLCBzdWNoIGFzIFwiYS5iKGNeZCArIChlKSleZlwiLCBhbmQgY2hhaW5lZCBjb21wdXRlZCBwYXRocyBzdWNoIGFzXG5cdFx0Ly8gXCJhLmIoKS5jXmQoKS5lLmYoKS5nXCIgLSB3aGljaCBoYXMgZm91ciBjaGFpbmVkIHBhdGhzLCBcImEuYigpXCIsIFwiXmMuZCgpXCIsIFwiLmUuZigpXCIgYW5kIFwiLmdcIlxuXHRcdHBhcmVuRGVwdGggPSAwLFxuXHRcdGZuQ2FsbCA9IHt9LCAvLyBXZSBhcmUgaW4gYSBmdW5jdGlvbiBjYWxsXG5cdFx0cGF0aFN0YXJ0ID0ge30sIC8vIHRyYWNrcyB0aGUgc3RhcnQgb2YgdGhlIGN1cnJlbnQgcGF0aCBzdWNoIGFzIGNeZCgpIGluIHRoZSBhYm92ZSBleGFtcGxlXG5cdFx0cmVzdWx0O1xuXG5cdGlmIChwYXJhbXNbMF0gPT09IFwiQFwiKSB7XG5cdFx0cGFyYW1zID0gcGFyYW1zLnJlcGxhY2UockJyYWNrZXRRdW90ZSwgXCIuXCIpO1xuXHR9XG5cdHJlc3VsdCA9IChwYXJhbXMgKyAodG1wbCA/IFwiIFwiIDogXCJcIikpLnJlcGxhY2UoJHN1Yi5yUHJtLCBwYXJzZVRva2Vucyk7XG5cblx0cmV0dXJuICFwYXJlbkRlcHRoICYmIHJlc3VsdCB8fCBzeW50YXhFcnJvcihwYXJhbXMpOyAvLyBTeW50YXggZXJyb3IgaWYgdW5iYWxhbmNlZCBwYXJlbnMgaW4gcGFyYW1zIGV4cHJlc3Npb25cbn1cblxuZnVuY3Rpb24gYnVpbGRDb2RlKGFzdCwgdG1wbCwgaXNMaW5rRXhwcikge1xuXHQvLyBCdWlsZCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gY29kZSBmcm9tIHRoZSBBU1Qgbm9kZXMsIGFuZCBzZXQgYXMgcHJvcGVydHkgb24gdGhlIHBhc3NlZC1pbiB0ZW1wbGF0ZSBvYmplY3Rcblx0Ly8gVXNlZCBmb3IgY29tcGlsaW5nIHRlbXBsYXRlcywgYW5kIGFsc28gYnkgSnNWaWV3cyB0byBidWlsZCBmdW5jdGlvbnMgZm9yIGRhdGEgbGluayBleHByZXNzaW9uc1xuXHR2YXIgaSwgbm9kZSwgdGFnTmFtZSwgY29udmVydGVyLCB0YWdDdHgsIGhhc1RhZywgaGFzRW5jb2RlciwgZ2V0c1ZhbCwgaGFzQ252dCwgdXNlQ252dCwgdG1wbEJpbmRpbmdzLCBwYXRoQmluZGluZ3MsIHBhcmFtcywgYm91bmRPbkVyclN0YXJ0LFxuXHRcdGJvdW5kT25FcnJFbmQsIHRhZ1JlbmRlciwgbmVzdGVkVG1wbHMsIHRtcGxOYW1lLCBuZXN0ZWRUbXBsLCB0YWdBbmRFbHNlcywgY29udGVudCwgbWFya3VwLCBuZXh0SXNFbHNlLCBvbGRDb2RlLCBpc0Vsc2UsIGlzR2V0VmFsLCB0YWdDdHhGbixcblx0XHRvbkVycm9yLCB0YWdTdGFydCwgdHJpZ2dlciwgbGF0ZVJlbmRlciwgcmV0U3RyT3BlbiwgcmV0U3RyQ2xvc2UsXG5cdFx0dG1wbEJpbmRpbmdLZXkgPSAwLFxuXHRcdHVzZVZpZXdzID0gJHN1YlNldHRpbmdzQWR2YW5jZWQudXNlVmlld3MgfHwgdG1wbC51c2VWaWV3cyB8fCB0bXBsLnRhZ3MgfHwgdG1wbC50ZW1wbGF0ZXMgfHwgdG1wbC5oZWxwZXJzIHx8IHRtcGwuY29udmVydGVycyxcblx0XHRjb2RlID0gXCJcIixcblx0XHR0bXBsT3B0aW9ucyA9IHt9LFxuXHRcdGwgPSBhc3QubGVuZ3RoO1xuXG5cdGlmIChcIlwiICsgdG1wbCA9PT0gdG1wbCkge1xuXHRcdHRtcGxOYW1lID0gaXNMaW5rRXhwciA/ICdkYXRhLWxpbms9XCInICsgdG1wbC5yZXBsYWNlKHJOZXdMaW5lLCBcIiBcIikuc2xpY2UoMSwgLTEpICsgJ1wiJyA6IHRtcGw7XG5cdFx0dG1wbCA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0dG1wbE5hbWUgPSB0bXBsLnRtcGxOYW1lIHx8IFwidW5uYW1lZFwiO1xuXHRcdGlmICh0bXBsLmFsbG93Q29kZSkge1xuXHRcdFx0dG1wbE9wdGlvbnMuYWxsb3dDb2RlID0gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHRtcGwuZGVidWcpIHtcblx0XHRcdHRtcGxPcHRpb25zLmRlYnVnID0gdHJ1ZTtcblx0XHR9XG5cdFx0dG1wbEJpbmRpbmdzID0gdG1wbC5ibmRzO1xuXHRcdG5lc3RlZFRtcGxzID0gdG1wbC50bXBscztcblx0fVxuXHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0Ly8gQVNUIG5vZGVzOiBbMDogdGFnTmFtZSwgMTogY29udmVydGVyLCAyOiBjb250ZW50LCAzOiBwYXJhbXMsIDQ6IGNvZGUsIDU6IG9uRXJyb3IsIDY6IHRyaWdnZXIsIDc6cGF0aEJpbmRpbmdzLCA4OiBjb250ZW50TWFya3VwXVxuXHRcdG5vZGUgPSBhc3RbaV07XG5cblx0XHQvLyBBZGQgbmV3bGluZSBmb3IgZWFjaCBjYWxsb3V0IHRvIHQoKSBjKCkgZXRjLiBhbmQgZWFjaCBtYXJrdXAgc3RyaW5nXG5cdFx0aWYgKFwiXCIgKyBub2RlID09PSBub2RlKSB7XG5cdFx0XHQvLyBhIG1hcmt1cCBzdHJpbmcgdG8gYmUgaW5zZXJ0ZWRcblx0XHRcdGNvZGUgKz0gJ1xcbitcIicgKyBub2RlICsgJ1wiJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gYSBjb21waWxlZCB0YWcgZXhwcmVzc2lvbiB0byBiZSBpbnNlcnRlZFxuXHRcdFx0dGFnTmFtZSA9IG5vZGVbMF07XG5cdFx0XHRpZiAodGFnTmFtZSA9PT0gXCIqXCIpIHtcblx0XHRcdFx0Ly8gQ29kZSB0YWc6IHt7KiB9fVxuXHRcdFx0XHRjb2RlICs9IFwiO1xcblwiICsgbm9kZVsxXSArIFwiXFxucmV0PXJldFwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udmVydGVyID0gbm9kZVsxXTtcblx0XHRcdFx0Y29udGVudCA9ICFpc0xpbmtFeHByICYmIG5vZGVbMl07XG5cdFx0XHRcdHRhZ0N0eCA9IHBhcmFtU3RydWN0dXJlKG5vZGVbM10sICdwYXJhbXMnKSArICd9LCcgKyBwYXJhbVN0cnVjdHVyZShwYXJhbXMgPSBub2RlWzRdKTtcblx0XHRcdFx0dHJpZ2dlciA9IG5vZGVbNl07XG5cdFx0XHRcdGxhdGVSZW5kZXIgPSBub2RlWzddO1xuXHRcdFx0XHRpZiAobm9kZVs4XSkgeyAvLyBsYXRlUGF0aCBAYS5iLmMgb3IgQH5hLmIuY1xuXHRcdFx0XHRcdHJldFN0ck9wZW4gPSBcIlxcbnZhciBvYixsdE9iPXt9LGN0eHM9XCI7XG5cdFx0XHRcdFx0cmV0U3RyQ2xvc2UgPSBcIjtcXG5jdHhzLmx0PWx0T2IubHQ7XFxucmV0dXJuIGN0eHM7XCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0U3RyT3BlbiA9IFwiXFxucmV0dXJuIFwiO1xuXHRcdFx0XHRcdHJldFN0ckNsb3NlID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRtYXJrdXAgPSBub2RlWzEwXSAmJiBub2RlWzEwXS5yZXBsYWNlKHJVbmVzY2FwZVF1b3RlcywgXCIkMVwiKTtcblx0XHRcdFx0aWYgKGlzRWxzZSA9IHRhZ05hbWUgPT09IFwiZWxzZVwiKSB7XG5cdFx0XHRcdFx0aWYgKHBhdGhCaW5kaW5ncykge1xuXHRcdFx0XHRcdFx0cGF0aEJpbmRpbmdzLnB1c2gobm9kZVs5XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG9uRXJyb3IgPSBub2RlWzVdIHx8ICRzdWJTZXR0aW5ncy5kZWJ1Z01vZGUgIT09IGZhbHNlICYmIFwidW5kZWZpbmVkXCI7IC8vIElmIGRlYnVnTW9kZSBub3QgZmFsc2UsIHNldCBkZWZhdWx0IG9uRXJyb3IgaGFuZGxlciBvbiB0YWcgdG8gXCJ1bmRlZmluZWRcIiAoc2VlIG9uUmVuZGVyRXJyb3IpXG5cdFx0XHRcdFx0aWYgKHRtcGxCaW5kaW5ncyAmJiAocGF0aEJpbmRpbmdzID0gbm9kZVs5XSkpIHsgLy8gQXJyYXkgb2YgcGF0aHMsIG9yIGZhbHNlIGlmIG5vdCBkYXRhLWJvdW5kXG5cdFx0XHRcdFx0XHRwYXRoQmluZGluZ3MgPSBbcGF0aEJpbmRpbmdzXTtcblx0XHRcdFx0XHRcdHRtcGxCaW5kaW5nS2V5ID0gdG1wbEJpbmRpbmdzLnB1c2goMSk7IC8vIEFkZCBwbGFjZWhvbGRlciBpbiB0bXBsQmluZGluZ3MgZm9yIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHVzZVZpZXdzID0gdXNlVmlld3MgfHwgcGFyYW1zWzFdIHx8IHBhcmFtc1syXSB8fCBwYXRoQmluZGluZ3MgfHwgL3ZpZXcuKD8haW5kZXgpLy50ZXN0KHBhcmFtc1swXSk7XG5cdFx0XHRcdC8vIHVzZVZpZXdzIGlzIGZvciBwZXJmIG9wdGltaXphdGlvbi4gRm9yIHJlbmRlcigpIHdlIG9ubHkgdXNlIHZpZXdzIGlmIG5lY2Vzc2FyeSAtIGZvciB0aGUgbW9yZSBhZHZhbmNlZCBzY2VuYXJpb3MuXG5cdFx0XHRcdC8vIFdlIHVzZSB2aWV3cyBpZiB0aGVyZSBhcmUgcHJvcHMsIGNvbnRleHR1YWwgcHJvcGVydGllcyBvciBhcmdzIHdpdGggIy4uLiAob3RoZXIgdGhhbiAjaW5kZXgpIC0gYnV0IHlvdSBjYW4gZm9yY2Vcblx0XHRcdFx0Ly8gdXNpbmcgdGhlIGZ1bGwgdmlldyBpbmZyYXN0cnVjdHVyZSwgKGFuZCBwYXkgYSBwZXJmIHByaWNlKSBieSBvcHRpbmcgaW46IFNldCB1c2VWaWV3czogdHJ1ZSBvbiB0aGUgdGVtcGxhdGUsIG1hbnVhbGx5Li4uXG5cdFx0XHRcdGlmIChpc0dldFZhbCA9IHRhZ05hbWUgPT09IFwiOlwiKSB7XG5cdFx0XHRcdFx0aWYgKGNvbnZlcnRlcikge1xuXHRcdFx0XHRcdFx0dGFnTmFtZSA9IGNvbnZlcnRlciA9PT0gSFRNTCA/IFwiPlwiIDogY29udmVydGVyICsgdGFnTmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGNvbnRlbnQpIHsgLy8gVE9ETyBvcHRpbWl6ZSAtIGlmIGNvbnRlbnQubGVuZ3RoID09PSAwIG9yIGlmIHRoZXJlIGlzIGEgdG1wbD1cIi4uLlwiIHNwZWNpZmllZCAtIHNldCBjb250ZW50IHRvIG51bGwgLyBkb24ndCBydW4gdGhpcyBjb21waWxhdGlvbiBjb2RlIC0gc2luY2UgY29udGVudCB3b24ndCBnZXQgdXNlZCEhXG5cdFx0XHRcdFx0XHQvLyBDcmVhdGUgdGVtcGxhdGUgb2JqZWN0IGZvciBuZXN0ZWQgdGVtcGxhdGVcblx0XHRcdFx0XHRcdG5lc3RlZFRtcGwgPSB0bXBsT2JqZWN0KG1hcmt1cCwgdG1wbE9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0bmVzdGVkVG1wbC50bXBsTmFtZSA9IHRtcGxOYW1lICsgXCIvXCIgKyB0YWdOYW1lO1xuXHRcdFx0XHRcdFx0Ly8gQ29tcGlsZSB0byBBU1QgYW5kIHRoZW4gdG8gY29tcGlsZWQgZnVuY3Rpb25cblx0XHRcdFx0XHRcdG5lc3RlZFRtcGwudXNlVmlld3MgPSBuZXN0ZWRUbXBsLnVzZVZpZXdzIHx8IHVzZVZpZXdzO1xuXHRcdFx0XHRcdFx0YnVpbGRDb2RlKGNvbnRlbnQsIG5lc3RlZFRtcGwpO1xuXHRcdFx0XHRcdFx0dXNlVmlld3MgPSBuZXN0ZWRUbXBsLnVzZVZpZXdzO1xuXHRcdFx0XHRcdFx0bmVzdGVkVG1wbHMucHVzaChuZXN0ZWRUbXBsKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIWlzRWxzZSkge1xuXHRcdFx0XHRcdFx0Ly8gVGhpcyBpcyBub3QgYW4gZWxzZSB0YWcuXG5cdFx0XHRcdFx0XHR0YWdBbmRFbHNlcyA9IHRhZ05hbWU7XG5cdFx0XHRcdFx0XHR1c2VWaWV3cyA9IHVzZVZpZXdzIHx8IHRhZ05hbWUgJiYgKCEkdGFnc1t0YWdOYW1lXSB8fCAhJHRhZ3NbdGFnTmFtZV0uZmxvdyk7XG5cdFx0XHRcdFx0XHQvLyBTd2l0Y2ggdG8gYSBuZXcgY29kZSBzdHJpbmcgZm9yIHRoaXMgYm91bmQgdGFnIChhbmQgaXRzIGVsc2VzLCBpZiBpdCBoYXMgYW55KSAtIGZvciByZXR1cm5pbmcgdGhlIHRhZ0N0eHMgYXJyYXlcblx0XHRcdFx0XHRcdG9sZENvZGUgPSBjb2RlO1xuXHRcdFx0XHRcdFx0Y29kZSA9IFwiXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5leHRJc0Vsc2UgPSBhc3RbaSArIDFdO1xuXHRcdFx0XHRcdG5leHRJc0Vsc2UgPSBuZXh0SXNFbHNlICYmIG5leHRJc0Vsc2VbMF0gPT09IFwiZWxzZVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRhZ1N0YXJ0ID0gb25FcnJvciA/IFwiO1xcbnRyeXtcXG5yZXQrPVwiIDogXCJcXG4rXCI7XG5cdFx0XHRcdGJvdW5kT25FcnJTdGFydCA9IFwiXCI7XG5cdFx0XHRcdGJvdW5kT25FcnJFbmQgPSBcIlwiO1xuXG5cdFx0XHRcdGlmIChpc0dldFZhbCAmJiAocGF0aEJpbmRpbmdzIHx8IHRyaWdnZXIgfHwgY29udmVydGVyICYmIGNvbnZlcnRlciAhPT0gSFRNTCB8fCBsYXRlUmVuZGVyKSkge1xuXHRcdFx0XHRcdC8vIEZvciBjb252ZXJ0VmFsIHdlIG5lZWQgYSBjb21waWxlZCBmdW5jdGlvbiB0byByZXR1cm4gdGhlIG5ldyB0YWdDdHgocylcblx0XHRcdFx0XHR0YWdDdHhGbiA9IG5ldyBGdW5jdGlvbihcImRhdGEsdmlldyxqLHVcIiwgXCIvLyBcIiArIHRtcGxOYW1lICsgXCIgXCIgKyAoKyt0bXBsQmluZGluZ0tleSkgKyBcIiBcIiArIHRhZ05hbWVcblx0XHRcdFx0XHRcdCsgcmV0U3RyT3BlbiArIFwie1wiICsgdGFnQ3R4ICsgXCJ9O1wiICsgcmV0U3RyQ2xvc2UpO1xuXHRcdFx0XHRcdHRhZ0N0eEZuLl9lciA9IG9uRXJyb3I7XG5cdFx0XHRcdFx0dGFnQ3R4Rm4uX3RhZyA9IHRhZ05hbWU7XG5cdFx0XHRcdFx0dGFnQ3R4Rm4uX2JkID0gISFwYXRoQmluZGluZ3M7IC8vIGRhdGEtbGlua2VkIHRhZyB7XnsuLi4vfX1cblx0XHRcdFx0XHR0YWdDdHhGbi5fbHIgPSBsYXRlUmVuZGVyO1xuXG5cdFx0XHRcdFx0aWYgKGlzTGlua0V4cHIpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0YWdDdHhGbjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzZXRQYXRocyh0YWdDdHhGbiwgcGF0aEJpbmRpbmdzKTtcblx0XHRcdFx0XHR0YWdSZW5kZXIgPSAnYyhcIicgKyBjb252ZXJ0ZXIgKyAnXCIsdmlldywnO1xuXHRcdFx0XHRcdHVzZUNudnQgPSB0cnVlO1xuXHRcdFx0XHRcdGJvdW5kT25FcnJTdGFydCA9IHRhZ1JlbmRlciArIHRtcGxCaW5kaW5nS2V5ICsgXCIsXCI7XG5cdFx0XHRcdFx0Ym91bmRPbkVyckVuZCA9IFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvZGUgKz0gKGlzR2V0VmFsXG5cdFx0XHRcdFx0PyAoaXNMaW5rRXhwciA/IChvbkVycm9yID8gXCJ0cnl7XFxuXCIgOiBcIlwiKSArIFwicmV0dXJuIFwiIDogdGFnU3RhcnQpICsgKHVzZUNudnQgLy8gQ2FsbCBfY252dCBpZiB0aGVyZSBpcyBhIGNvbnZlcnRlcjoge3tjbnZ0OiAuLi4gfX0gb3Ige157Y252dDogLi4uIH19XG5cdFx0XHRcdFx0XHQ/ICh1c2VDbnZ0ID0gdW5kZWZpbmVkLCB1c2VWaWV3cyA9IGhhc0NudnQgPSB0cnVlLCB0YWdSZW5kZXIgKyAodGFnQ3R4Rm5cblx0XHRcdFx0XHRcdFx0PyAoKHRtcGxCaW5kaW5nc1t0bXBsQmluZGluZ0tleSAtIDFdID0gdGFnQ3R4Rm4pLCB0bXBsQmluZGluZ0tleSkgLy8gU3RvcmUgdGhlIGNvbXBpbGVkIHRhZ0N0eEZuIGluIHRtcGwuYm5kcywgYW5kIHBhc3MgdGhlIGtleSB0byBjb252ZXJ0VmFsKClcblx0XHRcdFx0XHRcdFx0OiBcIntcIiArIHRhZ0N0eCArIFwifVwiKSArIFwiKVwiKVxuXHRcdFx0XHRcdFx0OiB0YWdOYW1lID09PSBcIj5cIlxuXHRcdFx0XHRcdFx0XHQ/IChoYXNFbmNvZGVyID0gdHJ1ZSwgXCJoKFwiICsgcGFyYW1zWzBdICsgXCIpXCIpXG5cdFx0XHRcdFx0XHRcdDogKGdldHNWYWwgPSB0cnVlLCBcIigodj1cIiArIHBhcmFtc1swXSArICcpIT1udWxsP3Y6JyArIChpc0xpbmtFeHByID8gJ251bGwpJyA6ICdcIlwiKScpKVxuXHRcdFx0XHRcdFx0XHQvLyBOb24gc3RyaWN0IGVxdWFsaXR5IHNvIGRhdGEtbGluaz1cInRpdGxlezpleHByfVwiIHdpdGggZXhwcj1udWxsL3VuZGVmaW5lZCByZW1vdmVzIHRpdGxlIGF0dHJpYnV0ZVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQ6IChoYXNUYWcgPSB0cnVlLCBcIlxcbnt2aWV3OnZpZXcsY29udGVudDpmYWxzZSx0bXBsOlwiIC8vIEFkZCB0aGlzIHRhZ0N0eCB0byB0aGUgY29tcGlsZWQgY29kZSBmb3IgdGhlIHRhZ0N0eHMgdG8gYmUgcGFzc2VkIHRvIHJlbmRlclRhZygpXG5cdFx0XHRcdFx0XHQrIChjb250ZW50ID8gbmVzdGVkVG1wbHMubGVuZ3RoIDogXCJmYWxzZVwiKSArIFwiLFwiIC8vIEZvciBibG9jayB0YWdzLCBwYXNzIGluIHRoZSBrZXkgKG5lc3RlZFRtcGxzLmxlbmd0aCkgdG8gdGhlIG5lc3RlZCBjb250ZW50IHRlbXBsYXRlXG5cdFx0XHRcdFx0XHQrIHRhZ0N0eCArIFwifSxcIikpO1xuXG5cdFx0XHRcdGlmICh0YWdBbmRFbHNlcyAmJiAhbmV4dElzRWxzZSkge1xuXHRcdFx0XHRcdC8vIFRoaXMgaXMgYSBkYXRhLWxpbmsgZXhwcmVzc2lvbiBvciBhbiBpbmxpbmUgdGFnIHdpdGhvdXQgYW55IGVsc2VzLCBvciB0aGUgbGFzdCB7e2Vsc2V9fSBvZiBhbiBpbmxpbmUgdGFnXG5cdFx0XHRcdFx0Ly8gV2UgY29tcGxldGUgdGhlIGNvZGUgZm9yIHJldHVybmluZyB0aGUgdGFnQ3R4cyBhcnJheVxuXHRcdFx0XHRcdGNvZGUgPSBcIltcIiArIGNvZGUuc2xpY2UoMCwgLTEpICsgXCJdXCI7XG5cdFx0XHRcdFx0dGFnUmVuZGVyID0gJ3QoXCInICsgdGFnQW5kRWxzZXMgKyAnXCIsdmlldyx0aGlzLCc7XG5cdFx0XHRcdFx0aWYgKGlzTGlua0V4cHIgfHwgcGF0aEJpbmRpbmdzKSB7XG5cdFx0XHRcdFx0XHQvLyBUaGlzIGlzIGEgYm91bmQgdGFnIChkYXRhLWxpbmsgZXhwcmVzc2lvbiBvciBpbmxpbmUgYm91bmQgdGFnIHtee3RhZyAuLi59fSkgc28gd2Ugc3RvcmUgYSBjb21waWxlZCB0YWdDdHhzIGZ1bmN0aW9uIGluIHRtcC5ibmRzXG5cdFx0XHRcdFx0XHRjb2RlID0gbmV3IEZ1bmN0aW9uKFwiZGF0YSx2aWV3LGosdVwiLCBcIiAvLyBcIiArIHRtcGxOYW1lICsgXCIgXCIgKyB0bXBsQmluZGluZ0tleSArIFwiIFwiICsgdGFnQW5kRWxzZXMgKyByZXRTdHJPcGVuICsgY29kZVxuXHRcdFx0XHRcdFx0XHQrIHJldFN0ckNsb3NlKTtcblx0XHRcdFx0XHRcdGNvZGUuX2VyID0gb25FcnJvcjtcblx0XHRcdFx0XHRcdGNvZGUuX3RhZyA9IHRhZ0FuZEVsc2VzO1xuXHRcdFx0XHRcdFx0aWYgKHBhdGhCaW5kaW5ncykge1xuXHRcdFx0XHRcdFx0XHRzZXRQYXRocyh0bXBsQmluZGluZ3NbdG1wbEJpbmRpbmdLZXkgLSAxXSA9IGNvZGUsIHBhdGhCaW5kaW5ncyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb2RlLl9sciA9IGxhdGVSZW5kZXI7XG5cdFx0XHRcdFx0XHRpZiAoaXNMaW5rRXhwcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY29kZTsgLy8gRm9yIGEgZGF0YS1saW5rIGV4cHJlc3Npb24gd2UgcmV0dXJuIHRoZSBjb21waWxlZCB0YWdDdHhzIGZ1bmN0aW9uXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRib3VuZE9uRXJyU3RhcnQgPSB0YWdSZW5kZXIgKyB0bXBsQmluZGluZ0tleSArIFwiLHVuZGVmaW5lZCxcIjtcblx0XHRcdFx0XHRcdGJvdW5kT25FcnJFbmQgPSBcIilcIjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBUaGlzIGlzIHRoZSBsYXN0IHt7ZWxzZX19IGZvciBhbiBpbmxpbmUgdGFnLlxuXHRcdFx0XHRcdC8vIEZvciBhIGJvdW5kIHRhZywgcGFzcyB0aGUgdGFnQ3R4cyBmbiBsb29rdXAga2V5IHRvIHJlbmRlclRhZy5cblx0XHRcdFx0XHQvLyBGb3IgYW4gdW5ib3VuZCB0YWcsIGluY2x1ZGUgdGhlIGNvZGUgZGlyZWN0bHkgZm9yIGV2YWx1YXRpbmcgdGFnQ3R4cyBhcnJheVxuXHRcdFx0XHRcdGNvZGUgPSBvbGRDb2RlICsgdGFnU3RhcnQgKyB0YWdSZW5kZXIgKyAocGF0aEJpbmRpbmdzICYmIHRtcGxCaW5kaW5nS2V5IHx8IGNvZGUpICsgXCIpXCI7XG5cdFx0XHRcdFx0cGF0aEJpbmRpbmdzID0gMDtcblx0XHRcdFx0XHR0YWdBbmRFbHNlcyA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9uRXJyb3IgJiYgIW5leHRJc0Vsc2UpIHtcblx0XHRcdFx0XHR1c2VWaWV3cyA9IHRydWU7XG5cdFx0XHRcdFx0Y29kZSArPSAnO1xcbn1jYXRjaChlKXtyZXQnICsgKGlzTGlua0V4cHIgPyBcInVybiBcIiA6IFwiKz1cIikgKyBib3VuZE9uRXJyU3RhcnQgKyAnai5fZXJyKGUsdmlldywnICsgb25FcnJvciArICcpJyArIGJvdW5kT25FcnJFbmQgKyAnO30nICsgKGlzTGlua0V4cHIgPyBcIlwiIDogJ3JldD1yZXQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBJbmNsdWRlIG9ubHkgdGhlIHZhciByZWZlcmVuY2VzIHRoYXQgYXJlIG5lZWRlZCBpbiB0aGUgY29kZVxuXHRjb2RlID0gXCIvLyBcIiArIHRtcGxOYW1lXG5cdFx0KyAodG1wbE9wdGlvbnMuZGVidWcgPyBcIlxcbmRlYnVnZ2VyO1wiIDogXCJcIilcblx0XHQrIFwiXFxudmFyIHZcIlxuXHRcdCsgKGhhc1RhZyA/IFwiLHQ9ai5fdGFnXCIgOiBcIlwiKSAgICAgICAgICAgICAgICAvLyBoYXMgdGFnXG5cdFx0KyAoaGFzQ252dCA/IFwiLGM9ai5fY252dFwiIDogXCJcIikgICAgICAgICAgICAgIC8vIGNvbnZlcnRlclxuXHRcdCsgKGhhc0VuY29kZXIgPyBcIixoPWouX2h0bWxcIiA6IFwiXCIpICAgICAgICAgICAvLyBodG1sIGNvbnZlcnRlclxuXHRcdCsgKGlzTGlua0V4cHJcblx0XHRcdFx0PyAobm9kZVs4XSAgLy8gbGF0ZSBALi4uIHBhdGg/XG5cdFx0XHRcdFx0XHQ/IFwiLCBvYlwiXG5cdFx0XHRcdFx0XHQ6IFwiXCJcblx0XHRcdFx0XHQpICsgXCI7XFxuXCJcblx0XHRcdFx0OiAnLHJldD1cIlwiJylcblx0XHQrIGNvZGVcblx0XHQrIChpc0xpbmtFeHByID8gXCJcXG5cIiA6IFwiO1xcbnJldHVybiByZXQ7XCIpO1xuXG5cdHRyeSB7XG5cdFx0Y29kZSA9IG5ldyBGdW5jdGlvbihcImRhdGEsdmlldyxqLHVcIiwgY29kZSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRzeW50YXhFcnJvcihcIkNvbXBpbGVkIHRlbXBsYXRlIGNvZGU6XFxuXFxuXCIgKyBjb2RlICsgJ1xcbjogXCInICsgKGUubWVzc2FnZXx8ZSkgKyAnXCInKTtcblx0fVxuXHRpZiAodG1wbCkge1xuXHRcdHRtcGwuZm4gPSBjb2RlO1xuXHRcdHRtcGwudXNlVmlld3MgPSAhIXVzZVZpZXdzO1xuXHR9XG5cdHJldHVybiBjb2RlO1xufVxuXG4vLz09PT09PT09PT1cbi8vIFV0aWxpdGllc1xuLy89PT09PT09PT09XG5cbi8vIE1lcmdlIG9iamVjdHMsIGluIHBhcnRpY3VsYXIgY29udGV4dHMgd2hpY2ggaW5oZXJpdCBmcm9tIHBhcmVudCBjb250ZXh0c1xuZnVuY3Rpb24gZXh0ZW5kQ3R4KGNvbnRleHQsIHBhcmVudENvbnRleHQpIHtcblx0Ly8gUmV0dXJuIGNvcHkgb2YgcGFyZW50Q29udGV4dCwgdW5sZXNzIGNvbnRleHQgaXMgZGVmaW5lZCBhbmQgaXMgZGlmZmVyZW50LCBpbiB3aGljaCBjYXNlIHJldHVybiBhIG5ldyBtZXJnZWQgY29udGV4dFxuXHQvLyBJZiBuZWl0aGVyIGNvbnRleHQgbm9yIHBhcmVudENvbnRleHQgYXJlIGRlZmluZWQsIHJldHVybiB1bmRlZmluZWRcblx0cmV0dXJuIGNvbnRleHQgJiYgY29udGV4dCAhPT0gcGFyZW50Q29udGV4dFxuXHRcdD8gKHBhcmVudENvbnRleHRcblx0XHRcdD8gJGV4dGVuZCgkZXh0ZW5kKHt9LCBwYXJlbnRDb250ZXh0KSwgY29udGV4dClcblx0XHRcdDogY29udGV4dClcblx0XHQ6IHBhcmVudENvbnRleHQgJiYgJGV4dGVuZCh7fSwgcGFyZW50Q29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhcmdldFByb3BzKHNvdXJjZSwgdGFnQ3R4KSB7XG5cdC8vIHRoaXMgcG9pbnRlciBpcyB0aGVNYXAgLSB3aGljaCBoYXMgdGFnQ3R4LnByb3BzIHRvb1xuXHQvLyBhcmd1bWVudHM6IHRhZ0N0eC5hcmdzLlxuXHR2YXIga2V5LCBwcm9wLFxuXHRcdG1hcCA9IHRhZ0N0eC5tYXAsXG5cdFx0cHJvcHNBcnIgPSBtYXAgJiYgbWFwLnByb3BzQXJyO1xuXG5cdGlmICghcHJvcHNBcnIpIHsgLy8gbWFwLnByb3BzQXJyIGlzIHRoZSBmdWxsIGFycmF5IG9mIHtrZXk6Li4uLCBwcm9wOi4uLn0gb2JqZWN0c1xuXHRcdHByb3BzQXJyID0gW107XG5cdFx0aWYgKHR5cGVvZiBzb3VyY2UgPT09IE9CSkVDVCB8fCAkaXNGdW5jdGlvbihzb3VyY2UpKSB7XG5cdFx0XHRmb3IgKGtleSBpbiBzb3VyY2UpIHtcblx0XHRcdFx0cHJvcCA9IHNvdXJjZVtrZXldO1xuXHRcdFx0XHRpZiAoa2V5ICE9PSAkZXhwYW5kbyAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoIXRhZ0N0eC5wcm9wcy5ub0Z1bmN0aW9ucyB8fCAhJC5pc0Z1bmN0aW9uKHByb3ApKSkge1xuXHRcdFx0XHRcdHByb3BzQXJyLnB1c2goe2tleToga2V5LCBwcm9wOiBwcm9wfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG1hcCkge1xuXHRcdFx0bWFwLnByb3BzQXJyID0gbWFwLm9wdGlvbnMgJiYgcHJvcHNBcnI7IC8vIElmIGJvdW5kIHtee3Byb3BzfX0gYW5kIG5vdCBpc1JlbmRlckNhbGwsIHN0b3JlIHByb3BzQXJyIG9uIG1hcCAobWFwLm9wdGlvbnMgaXMgZGVmaW5lZCBvbmx5IGZvciBib3VuZCwgJiYgIWlzUmVuZGVyQ2FsbClcblx0XHR9XG5cdH1cblx0cmV0dXJuIGdldFRhcmdldFNvcnRlZChwcm9wc0FyciwgdGFnQ3R4KTsgLy8gT2J0YWlucyBtYXAudGd0LCBieSBmaWx0ZXJpbmcsIHNvcnRpbmcgYW5kIHNwbGljaW5nIHRoZSBmdWxsIHByb3BzQXJyXG59XG5cbmZ1bmN0aW9uIGdldFRhcmdldFNvcnRlZCh2YWx1ZSwgdGFnQ3R4KSB7XG5cdC8vIGdldFRndFxuXHR2YXIgbWFwcGVkLCBzdGFydCwgZW5kLFxuXHRcdHRhZyA9IHRhZ0N0eC50YWcsXG5cdFx0cHJvcHMgPSB0YWdDdHgucHJvcHMsXG5cdFx0cHJvcFBhcmFtcyA9IHRhZ0N0eC5wYXJhbXMucHJvcHMsXG5cdFx0ZmlsdGVyID0gcHJvcHMuZmlsdGVyLFxuXHRcdHNvcnQgPSBwcm9wcy5zb3J0LFxuXHRcdGRpcmVjdFNvcnQgPSBzb3J0ID09PSB0cnVlLFxuXHRcdHN0ZXAgPSBwYXJzZUludChwcm9wcy5zdGVwKSxcblx0XHRyZXZlcnNlID0gcHJvcHMucmV2ZXJzZSA/IC0xIDogMTtcblxuXHRpZiAoISRpc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRpZiAoZGlyZWN0U29ydCB8fCBzb3J0ICYmIFwiXCIgKyBzb3J0ID09PSBzb3J0KSB7XG5cdFx0Ly8gVGVtcG9yYXJ5IG1hcHBlZCBhcnJheSBob2xkcyBvYmplY3RzIHdpdGggaW5kZXggYW5kIHNvcnQtdmFsdWVcblx0XHRtYXBwZWQgPSB2YWx1ZS5tYXAoZnVuY3Rpb24oaXRlbSwgaSkge1xuXHRcdFx0aXRlbSA9IGRpcmVjdFNvcnQgPyBpdGVtIDogZ2V0UGF0aE9iamVjdChpdGVtLCBzb3J0KTtcblx0XHRcdHJldHVybiB7aTogaSwgdjogXCJcIiArIGl0ZW0gPT09IGl0ZW0gPyBpdGVtLnRvTG93ZXJDYXNlKCkgOiBpdGVtfTtcblx0XHR9KTtcblx0XHQvLyBTb3J0IG1hcHBlZCBhcnJheVxuXHRcdG1hcHBlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHJldHVybiBhLnYgPiBiLnYgPyByZXZlcnNlIDogYS52IDwgYi52ID8gLXJldmVyc2UgOiAwO1xuXHRcdH0pO1xuXHRcdC8vIE1hcCB0byBuZXcgYXJyYXkgd2l0aCByZXN1bHRpbmcgb3JkZXJcblx0XHR2YWx1ZSA9IG1hcHBlZC5tYXAoZnVuY3Rpb24oaXRlbSl7XG5cdFx0XHRyZXR1cm4gdmFsdWVbaXRlbS5pXTtcblx0XHR9KTtcblx0fSBlbHNlIGlmICgoc29ydCB8fCByZXZlcnNlIDwgMCkgJiYgIXRhZy5kYXRhTWFwKSB7XG5cdFx0dmFsdWUgPSB2YWx1ZS5zbGljZSgpOyAvLyBDbG9uZSBhcnJheSBmaXJzdCBpZiBub3QgYWxyZWFkeSBhIG5ldyBhcnJheVxuXHR9XG5cdGlmICgkaXNGdW5jdGlvbihzb3J0KSkge1xuXHRcdHZhbHVlID0gdmFsdWUuc29ydChmdW5jdGlvbigpIHsgLy8gV3JhcCB0aGUgc29ydCBmdW5jdGlvbiB0byBwcm92aWRlIHRhZ0N0eCBhcyAndGhpcycgcG9pbnRlclxuXHRcdFx0cmV0dXJuIHNvcnQuYXBwbHkodGFnQ3R4LCBhcmd1bWVudHMpO1xuXHRcdH0pO1xuXHR9XG5cdGlmIChyZXZlcnNlIDwgMCAmJiAoIXNvcnQgfHwgJGlzRnVuY3Rpb24oc29ydCkpKSB7IC8vIFJldmVyc2UgcmVzdWx0IGlmIG5vdCBhbHJlYWR5IHJldmVyc2VkIGluIHNvcnRcblx0XHR2YWx1ZSA9IHZhbHVlLnJldmVyc2UoKTtcblx0fVxuXG5cdGlmICh2YWx1ZS5maWx0ZXIgJiYgZmlsdGVyKSB7IC8vIElFOCBkb2VzIG5vdCBzdXBwb3J0IGZpbHRlclxuXHRcdHZhbHVlID0gdmFsdWUuZmlsdGVyKGZpbHRlciwgdGFnQ3R4KTtcblx0XHRpZiAodGFnQ3R4LnRhZy5vbkZpbHRlcikge1xuXHRcdFx0dGFnQ3R4LnRhZy5vbkZpbHRlcih0YWdDdHgpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChwcm9wUGFyYW1zLnNvcnRlZCkge1xuXHRcdG1hcHBlZCA9IChzb3J0IHx8IHJldmVyc2UgPCAwKSA/IHZhbHVlIDogdmFsdWUuc2xpY2UoKTtcblx0XHRpZiAodGFnLnNvcnRlZCkge1xuXHRcdFx0JC5vYnNlcnZhYmxlKHRhZy5zb3J0ZWQpLnJlZnJlc2gobWFwcGVkKTsgLy8gTm90ZSB0aGF0IHRoaXMgbWlnaHQgY2F1c2UgdGhlIHN0YXJ0IGFuZCBlbmQgcHJvcHMgdG8gYmUgbW9kaWZpZWQgLSBlLmcuIGJ5IHBhZ2VyIHRhZyBjb250cm9sXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhZ0N0eC5tYXAuc29ydGVkID0gbWFwcGVkO1xuXHRcdH1cblx0fVxuXG5cdHN0YXJ0ID0gcHJvcHMuc3RhcnQ7IC8vIEdldCBjdXJyZW50IHZhbHVlIC0gYWZ0ZXIgcG9zc2libGUgIGNoYW5nZXMgdHJpZ2dlcmVkIGJ5IHRhZy5zb3J0ZWQgcmVmcmVzaCgpIGFib3ZlXG5cdGVuZCA9IHByb3BzLmVuZDtcblx0aWYgKHByb3BQYXJhbXMuc3RhcnQgJiYgc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBwcm9wUGFyYW1zLmVuZCAmJiBlbmQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHN0YXJ0ID0gZW5kID0gMDtcblx0fVxuXHRpZiAoIWlzTmFOKHN0YXJ0KSB8fCAhaXNOYU4oZW5kKSkgeyAvLyBzdGFydCBvciBlbmQgc3BlY2lmaWVkLCBidXQgbm90IHRoZSBhdXRvLWNyZWF0ZSBOdW1iZXIgYXJyYXkgc2NlbmFyaW8gb2Yge3tmb3Igc3RhcnQ9eHh4IGVuZD15eXl9fVxuXHRcdHN0YXJ0ID0gK3N0YXJ0IHx8IDA7XG5cdFx0ZW5kID0gZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdmFsdWUubGVuZ3RoID8gdmFsdWUubGVuZ3RoIDogK2VuZDtcblx0XHR2YWx1ZSA9IHZhbHVlLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXHR9XG5cdGlmIChzdGVwID4gMSkge1xuXHRcdHN0YXJ0ID0gMDtcblx0XHRlbmQgPSB2YWx1ZS5sZW5ndGg7XG5cdFx0bWFwcGVkID0gW107XG5cdFx0Zm9yICg7IHN0YXJ0PGVuZDsgc3RhcnQrPXN0ZXApIHtcblx0XHRcdG1hcHBlZC5wdXNoKHZhbHVlW3N0YXJ0XSk7XG5cdFx0fVxuXHRcdHZhbHVlID0gbWFwcGVkO1xuXHR9XG5cdGlmIChwcm9wUGFyYW1zLnBhZ2VkICYmIHRhZy5wYWdlZCkge1xuXHRcdCRvYnNlcnZhYmxlKHRhZy5wYWdlZCkucmVmcmVzaCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKiBSZW5kZXIgdGhlIHRlbXBsYXRlIGFzIGEgc3RyaW5nLCB1c2luZyB0aGUgc3BlY2lmaWVkIGRhdGEgYW5kIGhlbHBlcnMvY29udGV4dFxuKiAkKFwiI3RtcGxcIikucmVuZGVyKClcbipcbiogQHBhcmFtIHthbnl9ICAgICAgICBkYXRhXG4qIEBwYXJhbSB7aGFzaH0gICAgICAgW2hlbHBlcnNPckNvbnRleHRdXG4qIEBwYXJhbSB7Ym9vbGVhbn0gICAgW25vSXRlcmF0aW9uXVxuKiBAcmV0dXJucyB7c3RyaW5nfSAgIHJlbmRlcmVkIHRlbXBsYXRlXG4qL1xuZnVuY3Rpb24gJGZuUmVuZGVyKGRhdGEsIGNvbnRleHQsIG5vSXRlcmF0aW9uKSB7XG5cdHZhciB0bXBsRWxlbSA9IHRoaXMuanF1ZXJ5ICYmICh0aGlzWzBdIHx8IGVycm9yKCdVbmtub3duIHRlbXBsYXRlJykpLCAvLyBUYXJnZXRlZCBlbGVtZW50IG5vdCBmb3VuZCBmb3IgalF1ZXJ5IHRlbXBsYXRlIHNlbGVjdG9yIHN1Y2ggYXMgXCIjbXlUbXBsXCJcblx0XHR0bXBsID0gdG1wbEVsZW0uZ2V0QXR0cmlidXRlKHRtcGxBdHRyKTtcblxuXHRyZXR1cm4gcmVuZGVyQ29udGVudC5jYWxsKHRtcGwgJiYgJC5kYXRhKHRtcGxFbGVtKVtqc3ZUbXBsXSB8fCAkdGVtcGxhdGVzKHRtcGxFbGVtKSxcblx0XHRkYXRhLCBjb250ZXh0LCBub0l0ZXJhdGlvbik7XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVnaXN0ZXIgY29udmVydGVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBnZXRDaGFyRW50aXR5KGNoKSB7XG5cdC8vIEdldCBjaGFyYWN0ZXIgZW50aXR5IGZvciBIVE1MLCBBdHRyaWJ1dGUgYW5kIG9wdGlvbmFsIGRhdGEgZW5jb2Rpbmdcblx0cmV0dXJuIGNoYXJFbnRpdGllc1tjaF0gfHwgKGNoYXJFbnRpdGllc1tjaF0gPSBcIiYjXCIgKyBjaC5jaGFyQ29kZUF0KDApICsgXCI7XCIpO1xufVxuXG5mdW5jdGlvbiBnZXRDaGFyRnJvbUVudGl0eShtYXRjaCwgdG9rZW4pIHtcblx0Ly8gR2V0IGNoYXJhY3RlciBmcm9tIEhUTUwgZW50aXR5LCBmb3Igb3B0aW9uYWwgZGF0YSB1bmVuY29kaW5nXG5cdHJldHVybiBjaGFyc0Zyb21FbnRpdGllc1t0b2tlbl0gfHwgXCJcIjtcbn1cblxuZnVuY3Rpb24gaHRtbEVuY29kZSh0ZXh0KSB7XG5cdC8vIEhUTUwgZW5jb2RlOiBSZXBsYWNlIDwgPiAmICcgXCIgYCBldGMuIGJ5IGNvcnJlc3BvbmRpbmcgZW50aXRpZXMuXG5cdHJldHVybiB0ZXh0ICE9IHVuZGVmaW5lZCA/IHJJc0h0bWwudGVzdCh0ZXh0KSAmJiAoXCJcIiArIHRleHQpLnJlcGxhY2Uockh0bWxFbmNvZGUsIGdldENoYXJFbnRpdHkpIHx8IHRleHQgOiBcIlwiO1xufVxuXG5mdW5jdGlvbiBkYXRhRW5jb2RlKHRleHQpIHtcblx0Ly8gRW5jb2RlIGp1c3QgPCA+IGFuZCAmIC0gaW50ZW5kZWQgZm9yICdzYWZlIGRhdGEnIGFsb25nIHdpdGgge3s6fX0gcmF0aGVyIHRoYW4ge3s+fX1cbiAgcmV0dXJuIFwiXCIgKyB0ZXh0ID09PSB0ZXh0ID8gdGV4dC5yZXBsYWNlKHJEYXRhRW5jb2RlLCBnZXRDaGFyRW50aXR5KSA6IHRleHQ7XG59XG5cbmZ1bmN0aW9uIGRhdGFVbmVuY29kZSh0ZXh0KSB7XG4gIC8vIFVuZW5jb2RlIGp1c3QgPCA+IGFuZCAmIC0gaW50ZW5kZWQgZm9yICdzYWZlIGRhdGEnIGFsb25nIHdpdGgge3s6fX0gcmF0aGVyIHRoYW4ge3s+fX1cbiAgcmV0dXJuIFwiXCIgKyB0ZXh0ID09PSB0ZXh0ID8gdGV4dC5yZXBsYWNlKHJEYXRhVW5lbmNvZGUsIGdldENoYXJGcm9tRW50aXR5KSA6IHRleHQ7XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT0gSW5pdGlhbGl6ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kc3ViID0gJHZpZXdzLnN1YjtcbiR2aWV3c1NldHRpbmdzID0gJHZpZXdzLnNldHRpbmdzO1xuXG5pZiAoIShqc3IgfHwgJCAmJiAkLnJlbmRlcikpIHtcblx0Ly8gSnNSZW5kZXIgbm90IGFscmVhZHkgbG9hZGVkLCBvciBsb2FkZWQgd2l0aG91dCBqUXVlcnksIGFuZCB3ZSBhcmUgbm93IG1vdmluZyBmcm9tIGpzcmVuZGVyIG5hbWVzcGFjZSB0byBqUXVlcnkgbmFtZXBhY2Vcblx0Zm9yIChqc3ZTdG9yZU5hbWUgaW4ganN2U3RvcmVzKSB7XG5cdFx0cmVnaXN0ZXJTdG9yZShqc3ZTdG9yZU5hbWUsIGpzdlN0b3Jlc1tqc3ZTdG9yZU5hbWVdKTtcblx0fVxuXG5cdCRjb252ZXJ0ZXJzID0gJHZpZXdzLmNvbnZlcnRlcnM7XG5cdCRoZWxwZXJzID0gJHZpZXdzLmhlbHBlcnM7XG5cdCR0YWdzID0gJHZpZXdzLnRhZ3M7XG5cblx0JHN1Yi5fdGcucHJvdG90eXBlID0ge1xuXHRcdGJhc2VBcHBseTogYmFzZUFwcGx5LFxuXHRcdGN2dEFyZ3M6IGNvbnZlcnRBcmdzLFxuXHRcdGJuZEFyZ3M6IGNvbnZlcnRCb3VuZEFyZ3MsXG5cdFx0Y3R4UHJtOiBjb250ZXh0UGFyYW1ldGVyXG5cdH07XG5cblx0dG9wVmlldyA9ICRzdWIudG9wVmlldyA9IG5ldyBWaWV3KCk7XG5cblx0Ly9CUk9XU0VSLVNQRUNJRklDIENPREVcblx0aWYgKCQpIHtcblxuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHRcdC8vIGpRdWVyeSAoPSAkKSBpcyBsb2FkZWRcblxuXHRcdCQuZm4ucmVuZGVyID0gJGZuUmVuZGVyO1xuXHRcdCRleHBhbmRvID0gJC5leHBhbmRvO1xuXHRcdGlmICgkLm9ic2VydmFibGUpIHtcblx0XHRcdGlmICh2ZXJzaW9uTnVtYmVyICE9PSAodmVyc2lvbk51bWJlciA9ICQudmlld3MuanN2aWV3cykpIHtcblx0XHRcdFx0Ly8gRGlmZmVyZW50IHZlcnNpb24gb2YganNSZW5kZXIgd2FzIGxvYWRlZFxuXHRcdFx0XHR0aHJvdyBcIkpzT2JzZXJ2YWJsZSByZXF1aXJlcyBKc1JlbmRlciBcIiArIHZlcnNpb25OdW1iZXI7XG5cdFx0XHR9XG5cdFx0XHQkZXh0ZW5kKCRzdWIsICQudmlld3Muc3ViKTsgLy8ganF1ZXJ5Lm9ic2VydmFibGUuanMgd2FzIGxvYWRlZCBiZWZvcmUganNyZW5kZXIuanNcblx0XHRcdCR2aWV3cy5tYXAgPSAkLnZpZXdzLm1hcDtcblx0XHR9XG5cblx0fSBlbHNlIHtcblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0XHQvLyBqUXVlcnkgaXMgbm90IGxvYWRlZC5cblxuXHRcdCQgPSB7fTtcblxuXHRcdGlmIChzZXRHbG9iYWxzKSB7XG5cdFx0XHRnbG9iYWwuanNyZW5kZXIgPSAkOyAvLyBXZSBhcmUgbG9hZGluZyBqc3JlbmRlci5qcyBmcm9tIGEgc2NyaXB0IGVsZW1lbnQsIG5vdCBBTUQgb3IgQ29tbW9uSlMsIHNvIHNldCBnbG9iYWxcblx0XHR9XG5cblx0XHQvLyBFcnJvciB3YXJuaW5nIGlmIGpzcmVuZGVyLmpzIGlzIHVzZWQgYXMgdGVtcGxhdGUgZW5naW5lIG9uIE5vZGUuanMgKGUuZy4gRXhwcmVzcyBvciBIYXBpLi4uKVxuXHRcdC8vIFVzZSBqc3JlbmRlci1ub2RlLmpzIGluc3RlYWQuLi5cblx0XHQkLnJlbmRlckZpbGUgPSAkLl9fZXhwcmVzcyA9ICQuY29tcGlsZSA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBcIk5vZGUuanM6IHVzZSBucG0ganNyZW5kZXIsIG9yIGpzcmVuZGVyLW5vZGUuanNcIjsgfTtcblxuXHRcdC8vRU5EIEJST1dTRVItU1BFQ0lGSUMgQ09ERVxuXHRcdCQuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIG9iID09PSBcImZ1bmN0aW9uXCI7XG5cdFx0fTtcblxuXHRcdCQuaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG5cdFx0XHRyZXR1cm4gKHt9LnRvU3RyaW5nKS5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcblx0XHR9O1xuXG5cdFx0JHN1Yi5fanEgPSBmdW5jdGlvbihqcSkgeyAvLyBwcml2YXRlIG1ldGhvZCB0byBtb3ZlIGZyb20gSnNSZW5kZXIgQVBJcyBmcm9tIGpzcmVuZGVyIG5hbWVzcGFjZSB0byBqUXVlcnkgbmFtZXNwYWNlXG5cdFx0XHRpZiAoanEgIT09ICQpIHtcblx0XHRcdFx0JGV4dGVuZChqcSwgJCk7IC8vIG1hcCBvdmVyIGZyb20ganNyZW5kZXIgbmFtZXNwYWNlIHRvIGpRdWVyeSBuYW1lc3BhY2Vcblx0XHRcdFx0JCA9IGpxO1xuXHRcdFx0XHQkLmZuLnJlbmRlciA9ICRmblJlbmRlcjtcblx0XHRcdFx0ZGVsZXRlICQuanNyZW5kZXI7XG5cdFx0XHRcdCRleHBhbmRvID0gJC5leHBhbmRvO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQkLmpzcmVuZGVyID0gdmVyc2lvbk51bWJlcjtcblx0fVxuXHQkc3ViU2V0dGluZ3MgPSAkc3ViLnNldHRpbmdzO1xuXHQkc3ViU2V0dGluZ3MuYWxsb3dDb2RlID0gZmFsc2U7XG5cdCRpc0Z1bmN0aW9uID0gJC5pc0Z1bmN0aW9uO1xuXHQkLnJlbmRlciA9ICRyZW5kZXI7XG5cdCQudmlld3MgPSAkdmlld3M7XG5cdCQudGVtcGxhdGVzID0gJHRlbXBsYXRlcyA9ICR2aWV3cy50ZW1wbGF0ZXM7XG5cblx0Zm9yIChzZXR0aW5nIGluICRzdWJTZXR0aW5ncykge1xuXHRcdGFkZFNldHRpbmcoc2V0dGluZyk7XG5cdH1cblxuXHQvKipcblx0KiAkLnZpZXdzLnNldHRpbmdzLmRlYnVnTW9kZSh0cnVlKVxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gIGRlYnVnTW9kZVxuXHQqIEByZXR1cm5zIHtTZXR0aW5nc31cblx0KlxuXHQqIGRlYnVnTW9kZSA9ICQudmlld3Muc2V0dGluZ3MuZGVidWdNb2RlKClcblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0Ki9cblx0KCR2aWV3c1NldHRpbmdzLmRlYnVnTW9kZSA9IGZ1bmN0aW9uKGRlYnVnTW9kZSkge1xuXHRcdHJldHVybiBkZWJ1Z01vZGUgPT09IHVuZGVmaW5lZFxuXHRcdFx0PyAkc3ViU2V0dGluZ3MuZGVidWdNb2RlXG5cdFx0XHQ6IChcblx0XHRcdFx0JHN1YlNldHRpbmdzLmRlYnVnTW9kZSA9IGRlYnVnTW9kZSxcblx0XHRcdFx0JHN1YlNldHRpbmdzLm9uRXJyb3IgPSBkZWJ1Z01vZGUgKyBcIlwiID09PSBkZWJ1Z01vZGVcblx0XHRcdFx0XHQ/IGZ1bmN0aW9uKCkgeyByZXR1cm4gZGVidWdNb2RlOyB9XG5cdFx0XHRcdFx0OiAkaXNGdW5jdGlvbihkZWJ1Z01vZGUpXG5cdFx0XHRcdFx0XHQ/IGRlYnVnTW9kZVxuXHRcdFx0XHRcdFx0OiB1bmRlZmluZWQsXG5cdFx0XHRcdCR2aWV3c1NldHRpbmdzKTtcblx0fSkoZmFsc2UpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuXHQkc3ViU2V0dGluZ3NBZHZhbmNlZCA9ICRzdWJTZXR0aW5ncy5hZHZhbmNlZCA9IHtcblx0XHR1c2VWaWV3czogZmFsc2UsXG5cdFx0X2pzdjogZmFsc2UgLy8gRm9yIGdsb2JhbCBhY2Nlc3MgdG8gSnNWaWV3cyBzdG9yZVxuXHR9O1xuXG5cdC8vPT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVnaXN0ZXIgdGFncyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdCR0YWdzKHtcblx0XHRcImlmXCI6IHtcblx0XHRcdHJlbmRlcjogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdC8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIG9uY2UgZm9yIHt7aWZ9fSBhbmQgb25jZSBmb3IgZWFjaCB7e2Vsc2V9fS5cblx0XHRcdFx0Ly8gV2Ugd2lsbCB1c2UgdGhlIHRhZy5yZW5kZXJpbmcgb2JqZWN0IGZvciBjYXJyeWluZyByZW5kZXJpbmcgc3RhdGUgYWNyb3NzIHRoZSBjYWxscy5cblx0XHRcdFx0Ly8gSWYgbm90IGRvbmUgKGEgcHJldmlvdXMgYmxvY2sgaGFzIG5vdCBiZWVuIHJlbmRlcmVkKSwgbG9vayBhdCBleHByZXNzaW9uIGZvciB0aGlzIGJsb2NrIGFuZCByZW5kZXIgdGhlIGJsb2NrIGlmIGV4cHJlc3Npb24gaXMgdHJ1dGh5XG5cdFx0XHRcdC8vIE90aGVyd2lzZSByZXR1cm4gXCJcIlxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdFx0dGFnQ3R4ID0gc2VsZi50YWdDdHgsXG5cdFx0XHRcdFx0cmV0ID0gKHNlbGYucmVuZGVyaW5nLmRvbmUgfHwgIXZhbCAmJiAodGFnQ3R4LmFyZ3MubGVuZ3RoIHx8ICF0YWdDdHguaW5kZXgpKVxuXHRcdFx0XHRcdFx0PyBcIlwiXG5cdFx0XHRcdFx0XHQ6IChzZWxmLnJlbmRlcmluZy5kb25lID0gdHJ1ZSxcblx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RlZCA9IHRhZ0N0eC5pbmRleCxcblx0XHRcdFx0XHRcdFx0dW5kZWZpbmVkKTsgLy8gVGVzdCBpcyBzYXRpc2ZpZWQsIHNvIHJlbmRlciBjb250ZW50IG9uIGN1cnJlbnQgY29udGV4dFxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fSxcblx0XHRcdGNvbnRlbnRDdHg6IHRydWUsIC8vIEluaGVyaXQgcGFyZW50IHZpZXcgZGF0YSBjb250ZXh0XG5cdFx0XHRmbG93OiB0cnVlXG5cdFx0fSxcblx0XHRcImZvclwiOiB7XG5cdFx0XHRzb3J0RGF0YU1hcDogZGF0YU1hcChnZXRUYXJnZXRTb3J0ZWQpLFxuXHRcdFx0aW5pdDogZnVuY3Rpb24odmFsLCBjbG9uZWQpIHtcblx0XHRcdFx0dGhpcy5zZXREYXRhTWFwKHRoaXMudGFnQ3R4cyk7XG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyOiBmdW5jdGlvbih2YWwpIHtcblx0XHRcdFx0Ly8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgb25jZSBmb3Ige3tmb3J9fSBhbmQgb25jZSBmb3IgZWFjaCB7e2Vsc2V9fS5cblx0XHRcdFx0Ly8gV2Ugd2lsbCB1c2UgdGhlIHRhZy5yZW5kZXJpbmcgb2JqZWN0IGZvciBjYXJyeWluZyByZW5kZXJpbmcgc3RhdGUgYWNyb3NzIHRoZSBjYWxscy5cblx0XHRcdFx0dmFyIHZhbHVlLCBmaWx0ZXIsIHNydEZpZWxkLCBpc0FycmF5LCBpLCBzb3J0ZWQsIGVuZCwgc3RlcCxcblx0XHRcdFx0XHRzZWxmID0gdGhpcyxcblx0XHRcdFx0XHR0YWdDdHggPSBzZWxmLnRhZ0N0eCxcblx0XHRcdFx0XHRyYW5nZSA9IHRhZ0N0eC5hcmdEZWZhdWx0ID09PSBmYWxzZSxcblx0XHRcdFx0XHRwcm9wcyA9IHRhZ0N0eC5wcm9wcyxcblx0XHRcdFx0XHRpdGVyYXRlID0gIHJhbmdlIHx8IHRhZ0N0eC5hcmdzLmxlbmd0aCwgLy8gTm90IGZpbmFsIGVsc2UgYW5kIG5vdCBhdXRvLWNyZWF0ZSByYW5nZVxuXHRcdFx0XHRcdHJlc3VsdCA9IFwiXCIsXG5cdFx0XHRcdFx0ZG9uZSA9IDA7XG5cblx0XHRcdFx0aWYgKCFzZWxmLnJlbmRlcmluZy5kb25lKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBpdGVyYXRlID8gdmFsIDogdGFnQ3R4LnZpZXcuZGF0YTsgLy8gRm9yIHRoZSBmaW5hbCBlbHNlLCBkZWZhdWx0cyB0byBjdXJyZW50IGRhdGEgd2l0aG91dCBpdGVyYXRpb24uXG5cblx0XHRcdFx0XHRpZiAocmFuZ2UpIHtcblx0XHRcdFx0XHRcdHJhbmdlID0gcHJvcHMucmV2ZXJzZSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCI7XG5cdFx0XHRcdFx0XHRlbmQgPSArcHJvcHMuZW5kO1xuXHRcdFx0XHRcdFx0c3RlcCA9ICtwcm9wcy5zdGVwIHx8IDE7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IFtdOyAvLyBhdXRvLWNyZWF0ZSBpbnRlZ2VyIGFycmF5IHNjZW5hcmlvIG9mIHt7Zm9yIHN0YXJ0PXh4eCBlbmQ9eXl5fX1cblx0XHRcdFx0XHRcdGZvciAoaSA9ICtwcm9wcy5zdGFydCB8fCAwOyAoZW5kIC0gaSkgKiBzdGVwID4gMDsgaSArPSBzdGVwKSB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlW3JhbmdlXShpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdGlzQXJyYXkgPSAkaXNBcnJheSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gdGFnQ3R4LnJlbmRlcih2YWx1ZSwgIWl0ZXJhdGUgfHwgcHJvcHMubm9JdGVyYXRpb24pO1xuXHRcdFx0XHRcdFx0Ly8gSXRlcmF0ZXMgaWYgZGF0YSBpcyBhbiBhcnJheSwgZXhjZXB0IG9uIGZpbmFsIGVsc2UgLSBvciBpZiBub0l0ZXJhdGlvbiBwcm9wZXJ0eVxuXHRcdFx0XHRcdFx0Ly8gc2V0IHRvIHRydWUuIChVc2Uge3tpbmNsdWRlfX0gdG8gY29tcG9zZSB0ZW1wbGF0ZXMgd2l0aG91dCBhcnJheSBpdGVyYXRpb24pXG5cdFx0XHRcdFx0XHRkb25lICs9IGlzQXJyYXkgPyB2YWx1ZS5sZW5ndGggOiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2VsZi5yZW5kZXJpbmcuZG9uZSA9IGRvbmUpIHtcblx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0ZWQgPSB0YWdDdHguaW5kZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIElmIG5vdGhpbmcgd2FzIHJlbmRlcmVkIHdlIHdpbGwgbG9vayBhdCB0aGUgbmV4dCB7e2Vsc2V9fS4gT3RoZXJ3aXNlLCB3ZSBhcmUgZG9uZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSxcblx0XHRcdHNldERhdGFNYXA6IGZ1bmN0aW9uKHRhZ0N0eHMpIHtcblx0XHRcdFx0dmFyIHRhZ0N0eCwgcHJvcHMsIHBhcmFtc1Byb3BzLFxuXHRcdFx0XHRcdHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRcdGwgPSB0YWdDdHhzLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKGwtLSkge1xuXHRcdFx0XHRcdHRhZ0N0eCA9IHRhZ0N0eHNbbF07XG5cdFx0XHRcdFx0cHJvcHMgPSB0YWdDdHgucHJvcHM7XG5cdFx0XHRcdFx0cGFyYW1zUHJvcHMgPSB0YWdDdHgucGFyYW1zLnByb3BzO1xuXHRcdFx0XHRcdHRhZ0N0eC5hcmdEZWZhdWx0ID0gcHJvcHMuZW5kID09PSB1bmRlZmluZWQgfHwgdGFnQ3R4LmFyZ3MubGVuZ3RoID4gMDsgLy8gRGVmYXVsdCB0byAjZGF0YSBleGNlcHQgZm9yIGF1dG8tY3JlYXRlIHJhbmdlIHNjZW5hcmlvIHt7Zm9yIHN0YXJ0PXh4eCBlbmQ9eXl5IHN0ZXA9enp6fX1cblx0XHRcdFx0XHRwcm9wcy5kYXRhTWFwID0gKHRhZ0N0eC5hcmdEZWZhdWx0ICE9PSBmYWxzZSAmJiAkaXNBcnJheSh0YWdDdHguYXJnc1swXSkgJiZcblx0XHRcdFx0XHRcdChwYXJhbXNQcm9wcy5zb3J0IHx8IHBhcmFtc1Byb3BzLnN0YXJ0IHx8IHBhcmFtc1Byb3BzLmVuZCB8fCBwYXJhbXNQcm9wcy5zdGVwIHx8IHBhcmFtc1Byb3BzLmZpbHRlciB8fCBwYXJhbXNQcm9wcy5yZXZlcnNlXG5cdFx0XHRcdFx0XHR8fCBwcm9wcy5zb3J0IHx8IHByb3BzLnN0YXJ0IHx8IHByb3BzLmVuZCB8fCBwcm9wcy5zdGVwIHx8IHByb3BzLmZpbHRlciB8fCBwcm9wcy5yZXZlcnNlKSlcblx0XHRcdFx0XHRcdCYmIHNlbGYuc29ydERhdGFNYXA7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRmbG93OiB0cnVlXG5cdFx0fSxcblx0XHRwcm9wczoge1xuXHRcdFx0YmFzZVRhZzogXCJmb3JcIixcblx0XHRcdGRhdGFNYXA6IGRhdGFNYXAoZ2V0VGFyZ2V0UHJvcHMpLFxuXHRcdFx0aW5pdDogbm9vcCwgLy8gRG9uJ3QgZXhlY3V0ZSB0aGUgYmFzZSBpbml0KCkgb2YgdGhlIFwiZm9yXCIgdGFnXG5cdFx0XHRmbG93OiB0cnVlXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHRmbG93OiB0cnVlXG5cdFx0fSxcblx0XHRcIipcIjoge1xuXHRcdFx0Ly8ge3sqIGNvZGUuLi4gfX0gLSBJZ25vcmVkIGlmIHRlbXBsYXRlLmFsbG93Q29kZSBhbmQgJC52aWV3cy5zZXR0aW5ncy5hbGxvd0NvZGUgYXJlIGZhbHNlLiBPdGhlcndpc2UgaW5jbHVkZSBjb2RlIGluIGNvbXBpbGVkIHRlbXBsYXRlXG5cdFx0XHRyZW5kZXI6IHJldFZhbCxcblx0XHRcdGZsb3c6IHRydWVcblx0XHR9LFxuXHRcdFwiOipcIjoge1xuXHRcdFx0Ly8ge3s6KiByZXR1cm5lZEV4cHJlc3Npb24gfX0gLSBJZ25vcmVkIGlmIHRlbXBsYXRlLmFsbG93Q29kZSBhbmQgJC52aWV3cy5zZXR0aW5ncy5hbGxvd0NvZGUgYXJlIGZhbHNlLiBPdGhlcndpc2UgaW5jbHVkZSBjb2RlIGluIGNvbXBpbGVkIHRlbXBsYXRlXG5cdFx0XHRyZW5kZXI6IHJldFZhbCxcblx0XHRcdGZsb3c6IHRydWVcblx0XHR9LFxuXHRcdGRiZzogJGhlbHBlcnMuZGJnID0gJGNvbnZlcnRlcnMuZGJnID0gZGJnQnJlYWsgLy8gUmVnaXN0ZXIge3tkYmcvfX0sIHt7ZGJnOi4uLn19IGFuZCB+ZGJnKCkgdG8gdGhyb3cgYW5kIGNhdGNoLCBhcyBicmVha3BvaW50cyBmb3IgZGVidWdnaW5nLlxuXHR9KTtcblxuXHQkY29udmVydGVycyh7XG5cdFx0aHRtbDogaHRtbEVuY29kZSxcblx0XHRhdHRyOiBodG1sRW5jb2RlLCAvLyBJbmNsdWRlcyA+IGVuY29kaW5nIHNpbmNlIHJDb252ZXJ0TWFya2VycyBpbiBKc1ZpZXdzIGRvZXMgbm90IHNraXAgPiBjaGFyYWN0ZXJzIGluIGF0dHJpYnV0ZSBzdHJpbmdzXG5cdFx0ZW5jb2RlOiBkYXRhRW5jb2RlLFxuXHRcdHVuZW5jb2RlOiBkYXRhVW5lbmNvZGUsIC8vIEluY2x1ZGVzID4gZW5jb2Rpbmcgc2luY2UgckNvbnZlcnRNYXJrZXJzIGluIEpzVmlld3MgZG9lcyBub3Qgc2tpcCA+IGNoYXJhY3RlcnMgaW4gYXR0cmlidXRlIHN0cmluZ3Ncblx0XHR1cmw6IGZ1bmN0aW9uKHRleHQpIHtcblx0XHRcdC8vIFVSTCBlbmNvZGluZyBoZWxwZXIuXG5cdFx0XHRyZXR1cm4gdGV4dCAhPSB1bmRlZmluZWQgPyBlbmNvZGVVUkkoXCJcIiArIHRleHQpIDogdGV4dCA9PT0gbnVsbCA/IHRleHQgOiBcIlwiOyAvLyBudWxsIHJldHVybnMgbnVsbCwgZS5nLiB0byByZW1vdmUgYXR0cmlidXRlLiB1bmRlZmluZWQgcmV0dXJucyBcIlwiXG5cdFx0fVxuXHR9KTtcbn1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT0gRGVmaW5lIGRlZmF1bHQgZGVsaW1pdGVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuJHN1YlNldHRpbmdzID0gJHN1Yi5zZXR0aW5ncztcbiRpc0FycmF5ID0gKCR8fGpzcikuaXNBcnJheTtcbiR2aWV3c1NldHRpbmdzLmRlbGltaXRlcnMoXCJ7e1wiLCBcIn19XCIsIFwiXlwiKTtcblxuaWYgKGpzclRvSnEpIHsgLy8gTW92aW5nIGZyb20ganNyZW5kZXIgbmFtZXNwYWNlIHRvIGpRdWVyeSBuYW1lcGFjZSAtIGNvcHkgb3ZlciB0aGUgc3RvcmVkIGl0ZW1zICh0ZW1wbGF0ZXMsIGNvbnZlcnRlcnMsIGhlbHBlcnMuLi4pXG5cdGpzci52aWV3cy5zdWIuX2pxKCQpO1xufVxucmV0dXJuICQgfHwganNyO1xufSwgd2luZG93KSk7XG4iLCJpbXBvcnQgJ3VpLWh1bWEvanMvbWVzc2FnZXMnIl0sInNvdXJjZVJvb3QiOiIifQ==