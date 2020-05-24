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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
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

/***/ "./node_modules/ui-huma/js/vendor/chartjs.js":
/*!***************************************************!*\
  !*** ./node_modules/ui-huma/js/vendor/chartjs.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fm_plugin_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fm-plugin-chartjs */ "./node_modules/ui-huma/node_modules/fm-plugin-chartjs/js/chartjs.js");


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

/***/ "./node_modules/ui-huma/node_modules/fm-plugin-chartjs/js/chartjs.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ui-huma/node_modules/fm-plugin-chartjs/js/chartjs.js ***!
  \***************************************************************************/
/*! exports provided: hexToRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGB", function() { return hexToRGB; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/ui-huma/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);




var extend = function extend(object, value) {
  for (var key in value) {
    "object" != _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(value[key]) ? object[key] = value[key] : extend(object[key], value[key]);
  }
};

var add = function add(element) {
  var data = element.data("add");
  var chart = $(element.data("target")).data("chart");

  if (element.is(":checked")) {
    var addRecursive = function addRecursive(chart, data) {
      for (var o in data) {
        Array.isArray(data[o]) ? data[o].forEach(function (a) {
          chart[o].push(a);
        }) : addRecursive(chart[o], data[o]);
      }
    };

    addRecursive(chart, data);
  } else {
    var removeRecursive = function removeRecursive(chart, data) {
      for (var o in data) {
        Array.isArray(data[o]) ? data[o].forEach(function (a) {
          chart[o].pop();
        }) : removeRecursive(chart[o], data[o]);
      }
    };

    removeRecursive(chart, data);
  }

  chart.update();
};

var update = function update(element) {
  var data = element.data("update");
  var chart = $(element.data("target")).data("chart");
  extend(chart, data);

  if (void 0 !== element.data("prefix") || void 0 !== element.data("suffix")) {
    var prefix = element.data("prefix") ? element.data("prefix") : "";
    var suffix = element.data("suffix") ? element.data("suffix") : "";

    if (chart.options.scales !== undefined) {
      chart.options.scales.yAxes[0].ticks.callback = function (a) {
        if (!(a % 10)) return prefix + a + suffix;
      };
    }

    chart.options.tooltips.callbacks.label = function (a, e) {
      var t = e.datasets[a.datasetIndex].label || "",
          o = a.yLabel || e.datasets[0].data[a.index],
          r = "";
      return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + prefix + o + suffix + "</span>";
    };
  }

  chart.update();
};

var globalSettings = {
  responsive: true,
  maintainAspectRatio: false,
  defaultColor: settings.charts.defaultColor,
  defaultFontColor: settings.charts.defaultFontColor,
  defaultFontFamily: settings.charts.defaultFontFamily,
  defaultFontSize: settings.charts.defaultFontSize,
  layout: {
    padding: 0
  },
  legend: {
    display: false,
    position: "bottom",
    labels: {
      usePointStyle: true,
      padding: 16
    }
  },
  elements: {
    point: {
      radius: 0,
      backgroundColor: settings.colors.primary[500]
    },
    line: {
      tension: .4,
      borderWidth: 3,
      borderColor: settings.colors.primary[500],
      backgroundColor: settings.colors.transparent,
      borderCapStyle: "rounded"
    },
    rectangle: {
      backgroundColor: settings.colors.primary[500]
    },
    arc: {
      backgroundColor: settings.colors.primary[500],
      borderColor: settings.colors.white,
      borderWidth: 4
    }
  },
  legendCallback: function legendCallback(a) {
    var o = a.data,
        r = "";
    var td = a.options.elements.line.borderColor;
    return o.datasets.forEach(function (a, e) {
      var l = o.datasets[e].label;
      var t = o.datasets[e].borderColor || td;
      r += '<span class="chart-legend-item">', r += '<i class="chart-legend-indicator" style="background-color: ' + t + '"></i>', r += l, r += "</span>";
    }), r;
  },
  tooltips: {
    enabled: !1,
    mode: "index",
    intersect: !1,
    custom: function custom(r) {
      var a = $("#chart-tooltip");

      if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
        if (r.body) {
          var e = r.title || [],
              l = r.body.map(function (a) {
            return a.lines;
          }),
              n = "";
          n += '<div class="arrow"></div>', e.forEach(function (a) {
            n += '<h3 class="popover-header text-center">' + a + "</h3>";
          }), l.forEach(function (a, e) {
            var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                o = 1 < l.length ? "justify-content-left" : "justify-content-center";
            n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>";
          }), a.html(n);
        }

        var t = $(this._chart.canvas),
            o = (t.outerWidth(), t.outerHeight(), t.offset().top),
            s = t.offset().left,
            i = a.outerWidth(),
            c = a.outerHeight(),
            d = o + r.caretY - c - 16,
            u = s + r.caretX - i / 2;
        a.css({
          top: d + "px",
          left: u + "px",
          display: "block"
        });
      } else a.css("display", "none");
    },
    callbacks: {
      title: function title(a, e) {
        return e.labels[a[0].index];
      },
      label: function label(a, e) {
        var t = e.datasets[a.datasetIndex].label || "",
            o = a.yLabel,
            r = "";
        return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "</span>";
      }
    }
  }
};
var doughnutSettings = {
  cutoutPercentage: 83,
  tooltips: {
    callbacks: {
      title: function title(a, e) {
        return e.labels[a[0].index];
      },
      label: function label(a, e) {
        var t = "";
        return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "</span>";
      }
    }
  },
  legendCallback: function legendCallback(a) {
    var o = a.data,
        r = "";
    return o.labels.forEach(function (a, e) {
      var t = o.datasets[0].backgroundColor[e];
      r += '<span class="chart-legend-item">', r += '<i class="chart-legend-indicator" style="background-color: ' + t + '"></i>', r += a, r += "</span>";
    }), r;
  }
};

var dot = function dot(str, obj) {
  return str.split('.').reduce(function (o, i) {
    return o[i];
  }, obj);
};

var applyColors = function applyColors(el) {
  var chart = $(el).data('chart');
  var darkMode = el.hasAttribute('data-chart-dark-mode');

  if (chart.options.scales.yAxes[0] !== undefined) {
    chart.options.scales.yAxes[0].gridLines = {
      color: !!darkMode ? settings.colors.darkMode.border : settings.charts.gridLinesColor,
      zeroLineColor: !!darkMode ? settings.colors.darkMode.border : settings.charts.zeroLineColor
    };
    chart.options.scales.yAxes[0].angleLines = {
      color: !!darkMode ? settings.colors.darkMode.border : settings.charts.angleLinesColor
    };
  }

  if (chart.config.type === 'doughnut') {
    chart.data.datasets[0].borderColor = !!darkMode ? settings.colors.darkMode.bodyBg : settings.colors.white;
    chart.data.datasets[0].hoverBorderColor = !!darkMode ? settings.colors.darkMode.bodyBg : settings.colors.white;
  }

  var lineBorderColor = (el.getAttribute('data-chart-line-border-color') || '').split(',').filter(function (v) {
    return !!v;
  });
  var lineBorderOpacity = new String(el.getAttribute('data-chart-line-border-opacity') || '1').split(',').filter(function (v) {
    return !!v;
  });
  var lineBackgroundColor = (el.getAttribute('data-chart-line-background-color') || '').split(',').filter(function (v) {
    return !!v;
  });
  var lineBackgroundOpacity = new String(el.getAttribute('data-chart-line-background-opacity') || '1').split(',').filter(function (v) {
    return !!v;
  });
  lineBorderColor.forEach(function (color, index) {
    var opacity = lineBorderOpacity[index];

    if (color.indexOf(';') !== -1) {
      color = color.split(';');
      opacity = lineBorderOpacity[0].split(';');
      chart.data.datasets[0].borderColor = [];
      chart.data.datasets[0].pointBackgroundColor = [];
      color.forEach(function (color, index) {
        if (color.indexOf('.') !== -1) {
          color = dot(color, settings.colors);
        } else {
          color = hexToRGB(settings.colors.plain[color], opacity[index]);
        }

        chart.data.datasets[0].borderColor.push(color);
        chart.data.datasets[0].pointBackgroundColor.push(settings.colors.white);
      });
    } else {
      if (color.indexOf('.') !== -1) {
        color = dot(color, settings.colors);
      } else {
        color = hexToRGB(settings.colors.plain[color], opacity);
      }

      chart.data.datasets[index].borderColor = color;
      chart.data.datasets[index].pointBackgroundColor = settings.colors.white;
    }
  });
  var ctx = el.getContext('2d');
  var canvasHeight = el.scrollHeight;
  var gradient = null;
  var gradientEndOpacity = 0.001;

  if (chart.config.type.toLowerCase().indexOf('bar') !== -1) {
    gradientEndOpacity = 0.2;
  }

  lineBackgroundColor.forEach(function (color, index) {
    var opacity = lineBackgroundOpacity[index];
    gradient = gradient || color.indexOf('gradient:') !== -1;
    color = color.replace(/gradient\:/ig, '');

    if (color.indexOf(';') !== -1) {
      color = color.split(';');
      opacity = lineBackgroundOpacity[0].split(';');
      chart.data.datasets[0].backgroundColor = [];
      color.forEach(function (color, index) {
        var hex = color;

        if (color.indexOf('.') !== -1) {
          color = dot(color, settings.colors);
        } else {
          color = hexToRGB(settings.colors.plain[color], opacity[index]);
        }

        if (gradient) {
          var gradientCanvas = ctx.createLinearGradient(0, 0, 0, canvasHeight);
          gradientCanvas.addColorStop(0, color);
          gradientCanvas.addColorStop(1, hexToRGB(hex, gradientEndOpacity));
          color = gradientCanvas;
        }

        chart.data.datasets[0].backgroundColor.push(color);
      });
    } else {
      var hex;

      if (color.indexOf('.') !== -1) {
        color = dot(color, settings.colors);
        hex = color;
      } else {
        hex = settings.colors.plain[color];
        color = hexToRGB(hex, opacity);
      }

      if (gradient) {
        var gradientCanvas = ctx.createLinearGradient(0, 0, 0, canvasHeight);
        gradientCanvas.addColorStop(0, color);
        gradientCanvas.addColorStop(1, hexToRGB(hex, gradientEndOpacity));
        color = gradientCanvas;
      }

      chart.data.datasets[index].backgroundColor = color;
    }
  });
  chart.update();

  if ($(el).data('chart-legend')) {
    document.querySelector($(el).data('chart-legend')).innerHTML = chart.generateLegend();
  }
};

var create = function create(id) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var el = $(id);
  var prefix = el.data('chart-prefix') || '';
  var suffix = el.data('chart-suffix') || '';
  var points = el.data('chart-points');
  var hideAxes = el.data('chart-hide-axes');
  var disableTooltips = el.data('chart-disable-tooltips');

  if (hideAxes) {
    options = Chart.helpers.merge({
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      }
    }, options);
  }

  if (type === 'area') {
    type = 'line';
    options = Chart.helpers.merge({
      elements: {
        line: {
          fill: 'start'
        }
      }
    }, options);
  }

  if (points) {
    options = Chart.helpers.merge({
      elements: {
        point: {
          pointStyle: 'circle',
          radius: 4,
          hoverRadius: 4,
          backgroundColor: settings.colors.white,
          borderColor: settings.colors.primary[500],
          borderWidth: 2
        }
      }
    }, options);
  }

  if (type === 'radar') {
    options = Chart.helpers.merge({
      scale: {
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 4
        },
        pointLabels: {
          fontSize: settings.charts.defaultFontSize
        }
      }
    }, options);
  }

  if (type === 'roundedBar') {
    options = Chart.helpers.merge({
      barRoundness: 1.2
    }, options);
  }

  if (type === 'doughnut' || type === 'radar') {
    options = Chart.helpers.merge({
      scales: {
        yAxes: {
          gridLines: {
            zeroLineWidth: 0
          }
        }
      }
    }, options);
  }

  if (prefix.length || suffix.length) {
    options = Chart.helpers.merge({
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return "".concat(prefix).concat(a).concat(suffix);
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";

            if (type === 'doughnut') {
              o = e.datasets[0].data[a.index];
            }

            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += "<span class=\"popover-body-value\">".concat(prefix).concat(o).concat(suffix, "</span>");
          }
        }
      }
    }, options);
  }

  if (disableTooltips) {
    options = Chart.helpers.merge({
      tooltips: {
        enabled: false,
        custom: function custom() {}
      }
    }, options);
  }

  var chart = new Chart(el, {
    type: type,
    options: options,
    data: data
  });
  el.data('chart', chart);

  if (el.data('chart-legend')) {
    document.querySelector(el.data('chart-legend')).innerHTML = chart.generateLegend();
  }

  applyColors(document.querySelector(id));
};

var init = function init() {
  extend(Chart, {
    defaults: {
      global: globalSettings,
      doughnut: doughnutSettings
    }
  });
  Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: settings.charts.gridLinesColor,
      drawBorder: false,
      drawTicks: false,
      lineWidth: settings.charts.lineWidth,
      zeroLineWidth: settings.charts.zeroLineWidth,
      zeroLineColor: settings.charts.zeroLineColor,
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    angleLines: {
      color: settings.charts.angleLinesColor
    },
    ticks: {
      beginAtZero: !0,
      padding: 10,
      callback: function callback(a) {
        if (!(a % 10)) return a;
      }
    }
  });
  Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: !1,
      drawOnChartArea: !1,
      drawTicks: !1
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  });
  $('[data-toggle="chart"]').on({
    change: function change() {
      var el = $(this);

      if (el.is("[data-add]")) {
        add(el);
      }
    },
    click: function click() {
      var el = $(this);

      if (el.is("[data-update]")) {
        update(el);
      }
    }
  });
};

var hexToRGB = function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};
var Charts = {
  settings: settings,
  init: init,
  add: add,
  update: update,
  create: create,
  applyColors: applyColors,
  hexToRGB: hexToRGB
};

if (window !== undefined) {
  window.Charts = Charts;
  Charts.init();
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      return applyColors(mutation.target);
    });
  });
  var nodes = document.querySelectorAll('.chart-canvas');
  nodes.forEach(function (node) {
    observer.observe(node, {
      attributes: true,
      attributeOldValue: false,
      attributeFilter: ['data-chart-line-border-color', 'data-chart-line-border-opacity', 'data-chart-line-background-color', 'data-chart-line-background-opacity', 'data-chart-dark-mode']
    });
  });
}

/***/ }),

/***/ "./src/js/vendor/chartjs.js":
/*!**********************************!*\
  !*** ./src/js/vendor/chartjs.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_vendor_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/vendor/chartjs */ "./node_modules/ui-huma/js/vendor/chartjs.js");


/***/ }),

/***/ 34:
/*!****************************************!*\
  !*** multi ./src/js/vendor/chartjs.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/vendor/chartjs.js */"./src/js/vendor/chartjs.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aS1odW1hL2pzL3ZlbmRvci9jaGFydGpzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aS1odW1hL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9ub2RlX21vZHVsZXMvZm0tcGx1Z2luLWNoYXJ0anMvanMvY2hhcnRqcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmVuZG9yL2NoYXJ0anMuanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwib2JqZWN0IiwidmFsdWUiLCJrZXkiLCJhZGQiLCJlbGVtZW50IiwiZGF0YSIsImNoYXJ0IiwiJCIsImlzIiwiYWRkUmVjdXJzaXZlIiwibyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJhIiwicHVzaCIsInJlbW92ZVJlY3Vyc2l2ZSIsInBvcCIsInVwZGF0ZSIsInByZWZpeCIsInN1ZmZpeCIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ1bmRlZmluZWQiLCJ5QXhlcyIsInRpY2tzIiwiY2FsbGJhY2siLCJ0b29sdGlwcyIsImNhbGxiYWNrcyIsImxhYmVsIiwiZSIsInQiLCJkYXRhc2V0cyIsImRhdGFzZXRJbmRleCIsInlMYWJlbCIsImluZGV4IiwiciIsImxlbmd0aCIsImdsb2JhbFNldHRpbmdzIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJkZWZhdWx0Q29sb3IiLCJzZXR0aW5ncyIsImNoYXJ0cyIsImRlZmF1bHRGb250Q29sb3IiLCJkZWZhdWx0Rm9udEZhbWlseSIsImRlZmF1bHRGb250U2l6ZSIsImxheW91dCIsInBhZGRpbmciLCJsZWdlbmQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJsYWJlbHMiLCJ1c2VQb2ludFN0eWxlIiwiZWxlbWVudHMiLCJwb2ludCIsInJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsInByaW1hcnkiLCJsaW5lIiwidGVuc2lvbiIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJ0cmFuc3BhcmVudCIsImJvcmRlckNhcFN0eWxlIiwicmVjdGFuZ2xlIiwiYXJjIiwid2hpdGUiLCJsZWdlbmRDYWxsYmFjayIsInRkIiwibCIsImVuYWJsZWQiLCJtb2RlIiwiaW50ZXJzZWN0IiwiY3VzdG9tIiwiYXBwZW5kIiwib3BhY2l0eSIsImJvZHkiLCJ0aXRsZSIsIm1hcCIsImxpbmVzIiwibiIsImxhYmVsQ29sb3JzIiwiaHRtbCIsIl9jaGFydCIsImNhbnZhcyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsIm9mZnNldCIsInRvcCIsInMiLCJsZWZ0IiwiaSIsImMiLCJkIiwiY2FyZXRZIiwidSIsImNhcmV0WCIsImNzcyIsImRvdWdobnV0U2V0dGluZ3MiLCJjdXRvdXRQZXJjZW50YWdlIiwiZG90Iiwic3RyIiwib2JqIiwic3BsaXQiLCJyZWR1Y2UiLCJhcHBseUNvbG9ycyIsImVsIiwiZGFya01vZGUiLCJoYXNBdHRyaWJ1dGUiLCJncmlkTGluZXMiLCJjb2xvciIsImJvcmRlciIsImdyaWRMaW5lc0NvbG9yIiwiemVyb0xpbmVDb2xvciIsImFuZ2xlTGluZXMiLCJhbmdsZUxpbmVzQ29sb3IiLCJjb25maWciLCJ0eXBlIiwiYm9keUJnIiwiaG92ZXJCb3JkZXJDb2xvciIsImxpbmVCb3JkZXJDb2xvciIsImdldEF0dHJpYnV0ZSIsImZpbHRlciIsInYiLCJsaW5lQm9yZGVyT3BhY2l0eSIsIlN0cmluZyIsImxpbmVCYWNrZ3JvdW5kQ29sb3IiLCJsaW5lQmFja2dyb3VuZE9wYWNpdHkiLCJpbmRleE9mIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJoZXhUb1JHQiIsInBsYWluIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc0hlaWdodCIsInNjcm9sbEhlaWdodCIsImdyYWRpZW50IiwiZ3JhZGllbnRFbmRPcGFjaXR5IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiaGV4IiwiZ3JhZGllbnRDYW52YXMiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImdlbmVyYXRlTGVnZW5kIiwiY3JlYXRlIiwiaWQiLCJwb2ludHMiLCJoaWRlQXhlcyIsImRpc2FibGVUb29sdGlwcyIsIkNoYXJ0IiwiaGVscGVycyIsIm1lcmdlIiwieEF4ZXMiLCJmaWxsIiwicG9pbnRTdHlsZSIsImhvdmVyUmFkaXVzIiwic2NhbGUiLCJiZWdpbkF0WmVybyIsIm1heFRpY2tzTGltaXQiLCJwb2ludExhYmVscyIsImZvbnRTaXplIiwiYmFyUm91bmRuZXNzIiwiemVyb0xpbmVXaWR0aCIsImluaXQiLCJkZWZhdWx0cyIsImdsb2JhbCIsImRvdWdobnV0Iiwic2NhbGVTZXJ2aWNlIiwidXBkYXRlU2NhbGVEZWZhdWx0cyIsImJvcmRlckRhc2giLCJib3JkZXJEYXNoT2Zmc2V0IiwiZHJhd0JvcmRlciIsImRyYXdUaWNrcyIsImxpbmVXaWR0aCIsInplcm9MaW5lQm9yZGVyRGFzaCIsInplcm9MaW5lQm9yZGVyRGFzaE9mZnNldCIsImRyYXdPbkNoYXJ0QXJlYSIsIm1heEJhclRoaWNrbmVzcyIsIm9uIiwiY2hhbmdlIiwiY2xpY2siLCJhbHBoYSIsInBhcnNlSW50Iiwic2xpY2UiLCJnIiwiYiIsIkNoYXJ0cyIsIndpbmRvdyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidGFyZ2V0Iiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZSIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJhdHRyaWJ1dGVGaWx0ZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xG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MWhCRDtBQUFBIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9jaGFydGpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjknIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xuXG52YXIgU1BFQ0lFUyA9IHdrcygnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMiAmJiByZXN1bHRbMF0gPT09ICdhJyAmJiByZXN1bHRbMV0gPT09ICdiJztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MID8gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgfVxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgZm5zID0gZXhlYyhcbiAgICAgIGRlZmluZWQsXG4gICAgICBTWU1CT0wsXG4gICAgICAnJ1tLRVldLFxuICAgICAgZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgIH1cbiAgICApO1xuICAgIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgICB2YXIgcnhmbiA9IGZuc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuL19mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGJ1aWx0aW5FeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuXG4gLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKHR5cGVvZiBleGVjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChjbGFzc29mKFIpICE9PSAnUmVnRXhwJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbiAgfVxuICByZXR1cm4gYnVpbHRpbkV4ZWMuY2FsbChSLCBTKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWdleHBGbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG5cbnZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuLy8gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIGJlY2F1c2UgdGhlXG4vLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbi8vIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBiZWZvcmUgcGF0Y2hpbmcgdGhlIG1ldGhvZC5cbnZhciBuYXRpdmVSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuXG52YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLyxcbiAgICAgIHJlMiA9IC9iKi9nO1xuICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICByZXR1cm4gcmUxW0xBU1RfSU5ERVhdICE9PSAwIHx8IHJlMltMQVNUX0lOREVYXSAhPT0gMDtcbn0pKCk7XG5cbi8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbnZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbnZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEO1xuXG5pZiAoUEFUQ0gpIHtcbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cikge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcblxuICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHJlLnNvdXJjZSArICckKD8hXFxcXHMpJywgcmVnZXhwRmxhZ3MuY2FsbChyZSkpO1xuICAgIH1cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZVtMQVNUX0lOREVYXTtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHJlLCBzdHIpO1xuXG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgcmVbTEFTVF9JTkRFWF0gPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnJlcXVpcmUoJy4vX2V4cG9ydCcpKHtcbiAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgcHJvdG86IHRydWUsXG4gIGZvcmNlZDogcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbn0sIHtcbiAgZXhlYzogcmVnZXhwRXhlY1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJmAnXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJmAnXXxcXGRcXGQ/KS9nO1xuXG52YXIgbWF5YmVUb1N0cmluZyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG5cbi8vIEBAcmVwbGFjZSBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJHJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIGZ1bmN0aW9uYWxSZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgIH1cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICB9XG4gICAgcmV0dXJuICRyZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJG1pbiA9IE1hdGgubWluO1xudmFyICRwdXNoID0gW10ucHVzaDtcbnZhciAkU1BMSVQgPSAnc3BsaXQnO1xudmFyIExFTkdUSCA9ICdsZW5ndGgnO1xudmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcbnZhciBNQVhfVUlOVDMyID0gMHhmZmZmZmZmZjtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciBTVVBQT1JUU19ZID0gIWZhaWxzKGZ1bmN0aW9uICgpIHsgUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdDtcbiAgaWYgKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApIHtcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiAkc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiAkc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGludGVybmFsU3BsaXQgPSAkc3BsaXQ7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XG4gICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgOiBpbnRlcm5hbFNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcbiAgICAvL1xuICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAvLyB0aGUgJ3knIGZsYWcuXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gJHNwbGl0KTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XG5cbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoU1VQUE9SVFNfWSA/ICd5JyA6ICdnJyk7XG5cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhTVVBQT1JUU19ZID8gcnggOiAnXig/OicgKyByeC5zb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICB2YXIgcCA9IDA7XG4gICAgICB2YXIgcSA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgIHZhciB6ID0gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFNVUFBPUlRTX1kgPyBTIDogUy5zbGljZShxKSk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gJG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59KTtcbiIsImltcG9ydCAnZm0tcGx1Z2luLWNoYXJ0anMnIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImNvbnN0IGV4dGVuZCA9IChvYmplY3QsIHZhbHVlKSA9PiB7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgXCJvYmplY3RcIiAhPSB0eXBlb2YgdmFsdWVba2V5XSA/IG9iamVjdFtrZXldID0gdmFsdWVba2V5XSA6IGV4dGVuZChvYmplY3Rba2V5XSwgdmFsdWVba2V5XSlcbn1cblxuY29uc3QgYWRkID0gKGVsZW1lbnQpID0+IHtcbiAgdmFyIGRhdGEgPSBlbGVtZW50LmRhdGEoXCJhZGRcIilcbiAgdmFyIGNoYXJ0ID0gJChlbGVtZW50LmRhdGEoXCJ0YXJnZXRcIikpLmRhdGEoXCJjaGFydFwiKVxuXG4gIGlmIChlbGVtZW50LmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICBmdW5jdGlvbiBhZGRSZWN1cnNpdmUoY2hhcnQsIGRhdGEpIHtcbiAgICAgIGZvciAodmFyIG8gaW4gZGF0YSkgQXJyYXkuaXNBcnJheShkYXRhW29dKSA/IGRhdGFbb10uZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgICAgIGNoYXJ0W29dLnB1c2goYSlcbiAgICAgIH0pIDogYWRkUmVjdXJzaXZlKGNoYXJ0W29dLCBkYXRhW29dKVxuICAgIH1cbiAgICBhZGRSZWN1cnNpdmUoY2hhcnQsIGRhdGEpXG4gIH0gXG4gIGVsc2Uge1xuICAgIGZ1bmN0aW9uIHJlbW92ZVJlY3Vyc2l2ZShjaGFydCwgZGF0YSkge1xuICAgICAgZm9yICh2YXIgbyBpbiBkYXRhKSBBcnJheS5pc0FycmF5KGRhdGFbb10pID8gZGF0YVtvXS5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgY2hhcnRbb10ucG9wKClcbiAgICAgIH0pIDogcmVtb3ZlUmVjdXJzaXZlKGNoYXJ0W29dLCBkYXRhW29dKVxuICAgIH1cbiAgICByZW1vdmVSZWN1cnNpdmUoY2hhcnQsIGRhdGEpXG4gIH1cblxuICBjaGFydC51cGRhdGUoKVxufVxuXG5jb25zdCB1cGRhdGUgPSAoZWxlbWVudCkgPT4ge1xuICB2YXIgZGF0YSA9IGVsZW1lbnQuZGF0YShcInVwZGF0ZVwiKVxuICB2YXIgY2hhcnQgPSAkKGVsZW1lbnQuZGF0YShcInRhcmdldFwiKSkuZGF0YShcImNoYXJ0XCIpXG4gIFxuICBleHRlbmQoY2hhcnQsIGRhdGEpXG5cbiAgaWYgKHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKFwicHJlZml4XCIpIHx8IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKFwic3VmZml4XCIpKSB7XG4gICAgbGV0IHByZWZpeCA9IGVsZW1lbnQuZGF0YShcInByZWZpeFwiKSA/IGVsZW1lbnQuZGF0YShcInByZWZpeFwiKSA6IFwiXCJcbiAgICBsZXQgc3VmZml4ID0gZWxlbWVudC5kYXRhKFwic3VmZml4XCIpID8gZWxlbWVudC5kYXRhKFwic3VmZml4XCIpIDogXCJcIlxuXG4gICAgaWYgKGNoYXJ0Lm9wdGlvbnMuc2NhbGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzLmNhbGxiYWNrID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBpZiAoIShhICUgMTApKSByZXR1cm4gcHJlZml4ICsgYSArIHN1ZmZpeFxuICAgICAgfVxuICAgIH1cblxuICAgIGNoYXJ0Lm9wdGlvbnMudG9vbHRpcHMuY2FsbGJhY2tzLmxhYmVsID0gZnVuY3Rpb24oYSwgZSkge1xuICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgIG8gPSBhLnlMYWJlbCB8fCBlLmRhdGFzZXRzWzBdLmRhdGFbYS5pbmRleF0sXG4gICAgICAgICAgciA9IFwiXCI7XG4gICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JyArIHByZWZpeCArIG8gKyBzdWZmaXggKyBcIjwvc3Bhbj5cIlxuICAgIH1cbiAgfVxuXG4gIGNoYXJ0LnVwZGF0ZSgpXG59XG5cbmNvbnN0IGdsb2JhbFNldHRpbmdzID0ge1xuICByZXNwb25zaXZlOiB0cnVlLFxuICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgZGVmYXVsdENvbG9yOiBzZXR0aW5ncy5jaGFydHMuZGVmYXVsdENvbG9yLFxuICBkZWZhdWx0Rm9udENvbG9yOiBzZXR0aW5ncy5jaGFydHMuZGVmYXVsdEZvbnRDb2xvcixcbiAgZGVmYXVsdEZvbnRGYW1pbHk6IHNldHRpbmdzLmNoYXJ0cy5kZWZhdWx0Rm9udEZhbWlseSxcbiAgZGVmYXVsdEZvbnRTaXplOiBzZXR0aW5ncy5jaGFydHMuZGVmYXVsdEZvbnRTaXplLFxuICBsYXlvdXQ6IHtcbiAgICBwYWRkaW5nOiAwXG4gIH0sXG4gIGxlZ2VuZDoge1xuICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxuICAgIGxhYmVsczoge1xuICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcbiAgICAgIHBhZGRpbmc6IDE2XG4gICAgfVxuICB9LFxuICBlbGVtZW50czoge1xuICAgIHBvaW50OiB7XG4gICAgICByYWRpdXM6IDAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF1cbiAgICB9LFxuICAgIGxpbmU6IHtcbiAgICAgIHRlbnNpb246IC40LFxuICAgICAgYm9yZGVyV2lkdGg6IDMsXG4gICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLnRyYW5zcGFyZW50LFxuICAgICAgYm9yZGVyQ2FwU3R5bGU6IFwicm91bmRlZFwiXG4gICAgfSxcbiAgICByZWN0YW5nbGU6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTAwXVxuICAgIH0sXG4gICAgYXJjOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyV2lkdGg6IDRcbiAgICB9XG4gIH0sXG4gIGxlZ2VuZENhbGxiYWNrOiBmdW5jdGlvbihhKSB7XG4gICAgdmFyIG8gPSBhLmRhdGEsXG4gICAgICAgIHIgPSBcIlwiO1xuICAgIHZhciB0ZCA9IGEub3B0aW9ucy5lbGVtZW50cy5saW5lLmJvcmRlckNvbG9yO1xuICAgIHJldHVybiBvLmRhdGFzZXRzLmZvckVhY2goZnVuY3Rpb24oYSwgZSkge1xuICAgICAgdmFyIGwgPSBvLmRhdGFzZXRzW2VdLmxhYmVsO1xuICAgICAgdmFyIHQgPSBvLmRhdGFzZXRzW2VdLmJvcmRlckNvbG9yIHx8IHRkO1xuICAgICAgciArPSAnPHNwYW4gY2xhc3M9XCJjaGFydC1sZWdlbmQtaXRlbVwiPicsIHIgKz0gJzxpIGNsYXNzPVwiY2hhcnQtbGVnZW5kLWluZGljYXRvclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJyArIHQgKyAnXCI+PC9pPicsIHIgKz0gbCwgciArPSBcIjwvc3Bhbj5cIlxuICAgIH0pLCByXG4gIH0sXG4gIHRvb2x0aXBzOiB7XG4gICAgZW5hYmxlZDogITEsXG4gICAgbW9kZTogXCJpbmRleFwiLFxuICAgIGludGVyc2VjdDogITEsXG4gICAgY3VzdG9tOiBmdW5jdGlvbihyKSB7XG4gICAgICB2YXIgYSA9ICQoXCIjY2hhcnQtdG9vbHRpcFwiKTtcbiAgICAgIGlmIChhLmxlbmd0aCB8fCAoYSA9ICQoJzxkaXYgaWQ9XCJjaGFydC10b29sdGlwXCIgY2xhc3M9XCJwb3BvdmVyIGJzLXBvcG92ZXItdG9wXCIgcm9sZT1cInRvb2x0aXBcIj48L2Rpdj4nKSwgJChcImJvZHlcIikuYXBwZW5kKGEpKSwgMCAhPT0gci5vcGFjaXR5KSB7XG4gICAgICAgIGlmIChyLmJvZHkpIHtcbiAgICAgICAgICB2YXIgZSA9IHIudGl0bGUgfHwgW10sXG4gICAgICAgICAgICAgIGwgPSByLmJvZHkubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5saW5lc1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbiA9IFwiXCI7XG4gICAgICAgICAgbiArPSAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JywgZS5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgbiArPSAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXIgdGV4dC1jZW50ZXJcIj4nICsgYSArIFwiPC9oMz5cIlxuICAgICAgICAgIH0pLCBsLmZvckVhY2goZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgICB2YXIgdCA9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1pbmRpY2F0b3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyByLmxhYmVsQ29sb3JzW2VdLmJhY2tncm91bmRDb2xvciArICdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgIG8gPSAxIDwgbC5sZW5ndGggPyBcImp1c3RpZnktY29udGVudC1sZWZ0XCIgOiBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIjtcbiAgICAgICAgICAgICAgbiArPSAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICcgKyBvICsgJ1wiPicgKyB0ICsgYSArIFwiPC9kaXY+XCJcbiAgICAgICAgICB9KSwgYS5odG1sKG4pXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHQgPSAkKHRoaXMuX2NoYXJ0LmNhbnZhcyksXG4gICAgICAgICAgICBvID0gKHQub3V0ZXJXaWR0aCgpLCB0Lm91dGVySGVpZ2h0KCksIHQub2Zmc2V0KCkudG9wKSxcbiAgICAgICAgICAgIHMgPSB0Lm9mZnNldCgpLmxlZnQsXG4gICAgICAgICAgICBpID0gYS5vdXRlcldpZHRoKCksXG4gICAgICAgICAgICBjID0gYS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgZCA9IG8gKyByLmNhcmV0WSAtIGMgLSAxNixcbiAgICAgICAgICAgIHUgPSBzICsgci5jYXJldFggLSBpIC8gMjtcbiAgICAgICAgICBcbiAgICAgICAgYS5jc3Moe1xuICAgICAgICAgIHRvcDogZCArIFwicHhcIixcbiAgICAgICAgICBsZWZ0OiB1ICsgXCJweFwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICB9KVxuXG4gICAgICB9IGVsc2UgYS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgIH0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICB0aXRsZTogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICByZXR1cm4gZS5sYWJlbHNbYVswXS5pbmRleF1cbiAgICAgIH0sXG4gICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICB2YXIgdCA9IGUuZGF0YXNldHNbYS5kYXRhc2V0SW5kZXhdLmxhYmVsIHx8IFwiXCIsXG4gICAgICAgICAgICBvID0gYS55TGFiZWwsXG4gICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIDEgPCBlLmRhdGFzZXRzLmxlbmd0aCAmJiAociArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicgKyB0ICsgXCI8L3NwYW4+XCIpLCByICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicgKyBvICsgXCI8L3NwYW4+XCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZG91Z2hudXRTZXR0aW5ncyA9IHtcbiAgY3V0b3V0UGVyY2VudGFnZTogODMsXG4gIHRvb2x0aXBzOiB7XG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICB0aXRsZTogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICByZXR1cm4gZS5sYWJlbHNbYVswXS5pbmRleF1cbiAgICAgIH0sXG4gICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICB2YXIgdCA9IFwiXCI7XG4gICAgICAgIHJldHVybiB0ICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicgKyBlLmRhdGFzZXRzWzBdLmRhdGFbYS5pbmRleF0gKyBcIjwvc3Bhbj5cIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbGVnZW5kQ2FsbGJhY2s6IGZ1bmN0aW9uKGEpIHtcbiAgICB2YXIgbyA9IGEuZGF0YSxcbiAgICAgICAgciA9IFwiXCI7XG4gICAgcmV0dXJuIG8ubGFiZWxzLmZvckVhY2goZnVuY3Rpb24oYSwgZSkge1xuICAgICAgdmFyIHQgPSBvLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvcltlXTtcbiAgICAgIHIgKz0gJzxzcGFuIGNsYXNzPVwiY2hhcnQtbGVnZW5kLWl0ZW1cIj4nLCByICs9ICc8aSBjbGFzcz1cImNoYXJ0LWxlZ2VuZC1pbmRpY2F0b3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyB0ICsgJ1wiPjwvaT4nLCByICs9IGEsIHIgKz0gXCI8L3NwYW4+XCJcbiAgICB9KSwgclxuICB9XG59XG5cbmNvbnN0IGRvdCA9IChzdHIsIG9iaikgPT4gc3RyLnNwbGl0KCcuJykucmVkdWNlKChvLGkpPT5vW2ldLCBvYmopXG5cbmNvbnN0IGFwcGx5Q29sb3JzID0gKGVsKSA9PiB7XG4gIGNvbnN0IGNoYXJ0ID0gJChlbCkuZGF0YSgnY2hhcnQnKVxuICBjb25zdCBkYXJrTW9kZSA9IGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1jaGFydC1kYXJrLW1vZGUnKVxuICBcbiAgaWYgKGNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjaGFydC5vcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMgPSB7XG4gICAgICBjb2xvcjogISFkYXJrTW9kZSA/IHNldHRpbmdzLmNvbG9ycy5kYXJrTW9kZS5ib3JkZXIgOiBzZXR0aW5ncy5jaGFydHMuZ3JpZExpbmVzQ29sb3IsXG4gICAgICB6ZXJvTGluZUNvbG9yOiAhIWRhcmtNb2RlID8gc2V0dGluZ3MuY29sb3JzLmRhcmtNb2RlLmJvcmRlciA6IHNldHRpbmdzLmNoYXJ0cy56ZXJvTGluZUNvbG9yXG4gICAgfVxuICAgIGNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmFuZ2xlTGluZXMgPSB7XG4gICAgICBjb2xvcjogISFkYXJrTW9kZSA/IHNldHRpbmdzLmNvbG9ycy5kYXJrTW9kZS5ib3JkZXIgOiBzZXR0aW5ncy5jaGFydHMuYW5nbGVMaW5lc0NvbG9yXG4gICAgfVxuICB9XG5cbiAgaWYgKGNoYXJ0LmNvbmZpZy50eXBlID09PSAnZG91Z2hudXQnKSB7XG4gICAgY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5ib3JkZXJDb2xvciA9ICEhZGFya01vZGUgPyBzZXR0aW5ncy5jb2xvcnMuZGFya01vZGUuYm9keUJnIDogc2V0dGluZ3MuY29sb3JzLndoaXRlXG4gICAgY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5ob3ZlckJvcmRlckNvbG9yID0gISFkYXJrTW9kZSA/IHNldHRpbmdzLmNvbG9ycy5kYXJrTW9kZS5ib2R5QmcgOiBzZXR0aW5ncy5jb2xvcnMud2hpdGVcbiAgfVxuXG4gIGNvbnN0IGxpbmVCb3JkZXJDb2xvciA9IChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hhcnQtbGluZS1ib3JkZXItY29sb3InKSB8fCAnJykuc3BsaXQoJywnKS5maWx0ZXIodiA9PiAhIXYpXG4gIGNvbnN0IGxpbmVCb3JkZXJPcGFjaXR5ID0gbmV3IFN0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hhcnQtbGluZS1ib3JkZXItb3BhY2l0eScpIHx8ICcxJykuc3BsaXQoJywnKS5maWx0ZXIodiA9PiAhIXYpXG4gIGNvbnN0IGxpbmVCYWNrZ3JvdW5kQ29sb3IgPSAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNoYXJ0LWxpbmUtYmFja2dyb3VuZC1jb2xvcicpIHx8ICcnKS5zcGxpdCgnLCcpLmZpbHRlcih2ID0+ICEhdilcbiAgY29uc3QgbGluZUJhY2tncm91bmRPcGFjaXR5ID0gbmV3IFN0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hhcnQtbGluZS1iYWNrZ3JvdW5kLW9wYWNpdHknKSB8fCAnMScpLnNwbGl0KCcsJykuZmlsdGVyKHYgPT4gISF2KVxuXG4gIGxpbmVCb3JkZXJDb2xvci5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICBsZXQgb3BhY2l0eSA9IGxpbmVCb3JkZXJPcGFjaXR5W2luZGV4XVxuICAgIGlmIChjb2xvci5pbmRleE9mKCc7JykgIT09IC0xKSB7XG4gICAgICBjb2xvciA9IGNvbG9yLnNwbGl0KCc7JylcbiAgICAgIG9wYWNpdHkgPSBsaW5lQm9yZGVyT3BhY2l0eVswXS5zcGxpdCgnOycpXG4gICAgICBcbiAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uYm9yZGVyQ29sb3IgPSBbXVxuICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5wb2ludEJhY2tncm91bmRDb2xvciA9IFtdXG5cbiAgICAgIGNvbG9yLmZvckVhY2goKGNvbG9yLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY29sb3IuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICAgIGNvbG9yID0gZG90KGNvbG9yLCBzZXR0aW5ncy5jb2xvcnMpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29sb3IgPSBoZXhUb1JHQihzZXR0aW5ncy5jb2xvcnMucGxhaW5bY29sb3JdLCBvcGFjaXR5W2luZGV4XSlcbiAgICAgICAgfVxuICAgICAgICBjaGFydC5kYXRhLmRhdGFzZXRzWzBdLmJvcmRlckNvbG9yLnB1c2goY29sb3IpXG4gICAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0ucG9pbnRCYWNrZ3JvdW5kQ29sb3IucHVzaChzZXR0aW5ncy5jb2xvcnMud2hpdGUpXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChjb2xvci5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgIGNvbG9yID0gZG90KGNvbG9yLCBzZXR0aW5ncy5jb2xvcnMpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sb3IgPSBoZXhUb1JHQihzZXR0aW5ncy5jb2xvcnMucGxhaW5bY29sb3JdLCBvcGFjaXR5KVxuICAgICAgfVxuICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1tpbmRleF0uYm9yZGVyQ29sb3IgPSBjb2xvclxuICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1tpbmRleF0ucG9pbnRCYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5ncy5jb2xvcnMud2hpdGVcbiAgICB9XG4gIH0pXG5cbiAgbGV0IGN0eCA9IGVsLmdldENvbnRleHQoJzJkJylcbiAgbGV0IGNhbnZhc0hlaWdodCA9IGVsLnNjcm9sbEhlaWdodFxuICBsZXQgZ3JhZGllbnQgPSBudWxsXG5cbiAgbGV0IGdyYWRpZW50RW5kT3BhY2l0eSA9IDAuMDAxXG4gIGlmIChjaGFydC5jb25maWcudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2JhcicpICE9PSAtMSkge1xuICAgIGdyYWRpZW50RW5kT3BhY2l0eSA9IDAuMlxuICB9XG5cbiAgbGluZUJhY2tncm91bmRDb2xvci5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICBsZXQgb3BhY2l0eSA9IGxpbmVCYWNrZ3JvdW5kT3BhY2l0eVtpbmRleF1cblxuICAgIGdyYWRpZW50ID0gZ3JhZGllbnQgfHwgY29sb3IuaW5kZXhPZignZ3JhZGllbnQ6JykgIT09IC0xXG4gICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKC9ncmFkaWVudFxcOi9pZywgJycpXG5cbiAgICBpZiAoY29sb3IuaW5kZXhPZignOycpICE9PSAtMSkge1xuICAgICAgY29sb3IgPSBjb2xvci5zcGxpdCgnOycpXG4gICAgICBvcGFjaXR5ID0gbGluZUJhY2tncm91bmRPcGFjaXR5WzBdLnNwbGl0KCc7JylcbiAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yID0gW11cbiAgICAgIGNvbG9yLmZvckVhY2goKGNvbG9yLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgaGV4ID0gY29sb3JcbiAgICAgICAgaWYgKGNvbG9yLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBjb2xvciA9IGRvdChjb2xvciwgc2V0dGluZ3MuY29sb3JzKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbG9yID0gaGV4VG9SR0Ioc2V0dGluZ3MuY29sb3JzLnBsYWluW2NvbG9yXSwgb3BhY2l0eVtpbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdyYWRpZW50KSB7XG4gICAgICAgICAgbGV0IGdyYWRpZW50Q2FudmFzID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCwwLGNhbnZhc0hlaWdodClcbiAgICAgICAgICBncmFkaWVudENhbnZhcy5hZGRDb2xvclN0b3AoMCwgY29sb3IpXG4gICAgICAgICAgZ3JhZGllbnRDYW52YXMuYWRkQ29sb3JTdG9wKDEsIGhleFRvUkdCKGhleCwgZ3JhZGllbnRFbmRPcGFjaXR5KSlcbiAgICAgICAgICBjb2xvciA9IGdyYWRpZW50Q2FudmFzXG4gICAgICAgIH1cbiAgICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IucHVzaChjb2xvcilcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGhleFxuICAgICAgaWYgKGNvbG9yLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgY29sb3IgPSBkb3QoY29sb3IsIHNldHRpbmdzLmNvbG9ycylcbiAgICAgICAgaGV4ID0gY29sb3JcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBoZXggPSBzZXR0aW5ncy5jb2xvcnMucGxhaW5bY29sb3JdXG4gICAgICAgIGNvbG9yID0gaGV4VG9SR0IoaGV4LCBvcGFjaXR5KVxuICAgICAgfVxuICAgICAgaWYgKGdyYWRpZW50KSB7XG4gICAgICAgIGxldCBncmFkaWVudENhbnZhcyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsMCxjYW52YXNIZWlnaHQpXG4gICAgICAgIGdyYWRpZW50Q2FudmFzLmFkZENvbG9yU3RvcCgwLCBjb2xvcilcbiAgICAgICAgZ3JhZGllbnRDYW52YXMuYWRkQ29sb3JTdG9wKDEsIGhleFRvUkdCKGhleCwgZ3JhZGllbnRFbmRPcGFjaXR5KSlcbiAgICAgICAgY29sb3IgPSBncmFkaWVudENhbnZhc1xuICAgICAgfVxuICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1tpbmRleF0uYmFja2dyb3VuZENvbG9yID0gY29sb3JcbiAgICB9XG4gIH0pXG5cbiAgY2hhcnQudXBkYXRlKClcblxuICBpZiAoJChlbCkuZGF0YSgnY2hhcnQtbGVnZW5kJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCQoZWwpLmRhdGEoJ2NoYXJ0LWxlZ2VuZCcpKS5pbm5lckhUTUwgPSBjaGFydC5nZW5lcmF0ZUxlZ2VuZCgpXG4gIH1cbn1cblxuY29uc3QgY3JlYXRlID0gKGlkLCB0eXBlID0gJ2xpbmUnLCBvcHRpb25zID0ge30sIGRhdGEgPSB7fSkgPT4ge1xuICB2YXIgZWwgPSAkKGlkKVxuICBcbiAgY29uc3QgcHJlZml4ID0gZWwuZGF0YSgnY2hhcnQtcHJlZml4JykgfHwgJydcbiAgY29uc3Qgc3VmZml4ID0gZWwuZGF0YSgnY2hhcnQtc3VmZml4JykgfHwgJydcbiAgY29uc3QgcG9pbnRzID0gZWwuZGF0YSgnY2hhcnQtcG9pbnRzJylcbiAgY29uc3QgaGlkZUF4ZXMgPSBlbC5kYXRhKCdjaGFydC1oaWRlLWF4ZXMnKVxuICBjb25zdCBkaXNhYmxlVG9vbHRpcHMgPSBlbC5kYXRhKCdjaGFydC1kaXNhYmxlLXRvb2x0aXBzJylcblxuICBpZiAoaGlkZUF4ZXMpIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgfV0sXG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnYXJlYScpIHtcbiAgICB0eXBlID0gJ2xpbmUnXG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIGZpbGw6ICdzdGFydCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG4gIH1cblxuICBpZiAocG9pbnRzKSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICByYWRpdXM6IDQsXG4gICAgICAgICAgaG92ZXJSYWRpdXM6IDQsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMud2hpdGUsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ3JhZGFyJykge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgbWF4VGlja3NMaW1pdDogNFxuICAgICAgICB9LFxuICAgICAgICBwb2ludExhYmVsczoge1xuICAgICAgICAgIGZvbnRTaXplOiBzZXR0aW5ncy5jaGFydHMuZGVmYXVsdEZvbnRTaXplXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdyb3VuZGVkQmFyJykge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIGJhclJvdW5kbmVzczogMS4yXG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnZG91Z2hudXQnIHx8IHR5cGUgPT09ICdyYWRhcicpIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeUF4ZXM6IHtcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIHplcm9MaW5lV2lkdGg6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKHByZWZpeC5sZW5ndGggfHwgc3VmZml4Lmxlbmd0aCkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKCEoYSAlIDEwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7cHJlZml4fSR7YX0ke3N1ZmZpeH1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUuZGF0YXNldHNbYS5kYXRhc2V0SW5kZXhdLmxhYmVsIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbyA9IGEueUxhYmVsLFxuICAgICAgICAgICAgICAgIHIgPSBcIlwiO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RvdWdobnV0Jykge1xuICAgICAgICAgICAgICBvID0gZS5kYXRhc2V0c1swXS5kYXRhW2EuaW5kZXhdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gYDxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JHtwcmVmaXh9JHtvfSR7c3VmZml4fTwvc3Bhbj5gXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIGlmIChkaXNhYmxlVG9vbHRpcHMpIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgY3VzdG9tOiBmdW5jdGlvbigpIHt9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIHZhciBjaGFydCA9IG5ldyBDaGFydChlbCwge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICBkYXRhOiBkYXRhXG4gIH0pXG4gIGVsLmRhdGEoJ2NoYXJ0JywgY2hhcnQpXG4gIGlmIChlbC5kYXRhKCdjaGFydC1sZWdlbmQnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwuZGF0YSgnY2hhcnQtbGVnZW5kJykpXG4gICAgICAuaW5uZXJIVE1MID0gY2hhcnQuZ2VuZXJhdGVMZWdlbmQoKVxuICB9XG5cbiAgYXBwbHlDb2xvcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkpXG59XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGV4dGVuZChDaGFydCwge1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICBnbG9iYWw6IGdsb2JhbFNldHRpbmdzLFxuICAgICAgZG91Z2hudXQ6IGRvdWdobnV0U2V0dGluZ3NcbiAgICB9XG4gIH0pXG5cbiAgQ2hhcnQuc2NhbGVTZXJ2aWNlLnVwZGF0ZVNjYWxlRGVmYXVsdHMoXCJsaW5lYXJcIiwge1xuICAgIGdyaWRMaW5lczoge1xuICAgICAgYm9yZGVyRGFzaDogWzJdLFxuICAgICAgYm9yZGVyRGFzaE9mZnNldDogWzJdLFxuICAgICAgY29sb3I6IHNldHRpbmdzLmNoYXJ0cy5ncmlkTGluZXNDb2xvcixcbiAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxuICAgICAgZHJhd1RpY2tzOiBmYWxzZSxcbiAgICAgIGxpbmVXaWR0aDogc2V0dGluZ3MuY2hhcnRzLmxpbmVXaWR0aCxcbiAgICAgIHplcm9MaW5lV2lkdGg6IHNldHRpbmdzLmNoYXJ0cy56ZXJvTGluZVdpZHRoLFxuICAgICAgemVyb0xpbmVDb2xvcjogc2V0dGluZ3MuY2hhcnRzLnplcm9MaW5lQ29sb3IsXG4gICAgICB6ZXJvTGluZUJvcmRlckRhc2g6IFsyXSxcbiAgICAgIHplcm9MaW5lQm9yZGVyRGFzaE9mZnNldDogWzJdXG4gICAgfSxcbiAgICBhbmdsZUxpbmVzOiB7XG4gICAgICBjb2xvcjogc2V0dGluZ3MuY2hhcnRzLmFuZ2xlTGluZXNDb2xvclxuICAgIH0sXG4gICAgdGlja3M6IHtcbiAgICAgIGJlZ2luQXRaZXJvOiAhMCxcbiAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgaWYgKCEoYSAlIDEwKSkgcmV0dXJuIGFcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgQ2hhcnQuc2NhbGVTZXJ2aWNlLnVwZGF0ZVNjYWxlRGVmYXVsdHMoXCJjYXRlZ29yeVwiLCB7XG4gICAgZ3JpZExpbmVzOiB7XG4gICAgICBkcmF3Qm9yZGVyOiAhMSxcbiAgICAgIGRyYXdPbkNoYXJ0QXJlYTogITEsXG4gICAgICBkcmF3VGlja3M6ICExXG4gICAgfSxcbiAgICB0aWNrczoge1xuICAgICAgcGFkZGluZzogMjBcbiAgICB9LFxuICAgIG1heEJhclRoaWNrbmVzczogMTBcbiAgfSlcblxuICAkKCdbZGF0YS10b2dnbGU9XCJjaGFydFwiXScpLm9uKHtcbiAgICBjaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsID0gJCh0aGlzKVxuICAgICAgaWYgKGVsLmlzKFwiW2RhdGEtYWRkXVwiKSkge1xuICAgICAgICBhZGQoZWwpXG4gICAgICB9XG4gICAgfSxcbiAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWwgPSAkKHRoaXMpXG4gICAgICBpZiAoZWwuaXMoXCJbZGF0YS11cGRhdGVdXCIpKSB7XG4gICAgICAgIHVwZGF0ZShlbClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBoZXhUb1JHQiA9IChoZXgsIGFscGhhKSA9PiB7XG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KVxuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNilcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpXG5cbiAgaWYgKGFscGhhKSB7XG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiLCBcIiArIGFscGhhICsgXCIpXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIilcIlxuICB9XG59XG5cbmNvbnN0IENoYXJ0cyA9IHtcbiAgc2V0dGluZ3MsXG4gIGluaXQsXG4gIGFkZCxcbiAgdXBkYXRlLFxuICBjcmVhdGUsXG4gIGFwcGx5Q29sb3JzLFxuICBoZXhUb1JHQlxufVxuXG5pZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgd2luZG93LkNoYXJ0cyA9IENoYXJ0c1xuXG4gIENoYXJ0cy5pbml0KClcblxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHsgXG4gICAgbXV0YXRpb25zLmZvckVhY2gobXV0YXRpb24gPT4gYXBwbHlDb2xvcnMobXV0YXRpb24udGFyZ2V0KSlcbiAgIH0pXG5cbiAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJ0LWNhbnZhcycpXG4gIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IFxuICAgICAgYXR0cmlidXRlczogdHJ1ZSwgXG4gICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogZmFsc2UsIFxuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXG4gICAgICAgICdkYXRhLWNoYXJ0LWxpbmUtYm9yZGVyLWNvbG9yJywgXG4gICAgICAgICdkYXRhLWNoYXJ0LWxpbmUtYm9yZGVyLW9wYWNpdHknLFxuICAgICAgICAnZGF0YS1jaGFydC1saW5lLWJhY2tncm91bmQtY29sb3InLCBcbiAgICAgICAgJ2RhdGEtY2hhcnQtbGluZS1iYWNrZ3JvdW5kLW9wYWNpdHknLFxuICAgICAgICAnZGF0YS1jaGFydC1kYXJrLW1vZGUnXG4gICAgICBdXG4gICAgfSlcbiAgfSlcbn0iLCJpbXBvcnQgJ3VpLWh1bWEvanMvdmVuZG9yL2NoYXJ0anMnIl0sInNvdXJjZVJvb3QiOiIifQ==