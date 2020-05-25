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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/theme-utils.js":
/*!************************************************!*\
  !*** ./node_modules/ui-huma/js/theme-utils.js ***!
  \************************************************/
/*! exports provided: hexToRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGB", function() { return hexToRGB; });
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

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var ui_huma_js_theme_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/theme-utils */ "./node_modules/ui-huma/js/theme-utils.js");
// import 'ui-huma/js/settings'
 // https://material.io/design/color/the-color-system.html#tools-for-picking-colors

var colors = {
  plain: {
    gray: '#E3EBF6',
    primary: '#5567FF',
    accent: '#ed0b4b',
    teal: '#00BCC2',
    yellow: '#E4A93C',
    success: '#66BB6A',
    purple: '#824EE1',
    'dodger-blue': '#5567FF',
    'dodger-blue-20': Object(ui_huma_js_theme_utils__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])('#5567FF', 0.20)
  },
  darkMode: {
    border: '#19191A',
    bodyBg: '#1D2126'
  },
  gray: {
    300: '#E3EBF6',
    600: '#95AAC9',
    700: '#B1BBC9',
    // text color
    800: '#152E4D',
    900: '#5B6066' // grid

  },
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90c9f9',
    300: '#63b4f6',
    400: '#42a4f5',
    500: '#2196F3',
    // $primary
    600: '#1f87e5',
    700: '#1a75d2',
    800: '#1764c0',
    900: '#1045a1'
  },
  accent: {
    50: '#fee3e9',
    100: '#fdb9c8',
    200: '#fa8ca3',
    300: '#f75c7f',
    400: '#f23764',
    500: '#ed0b4b',
    // primary
    600: '#dd024a',
    700: '#c80047',
    800: '#b40045',
    900: '#920041'
  },
  success: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66BB6A',
    // $success
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20'
  },
  purple: {
    500: '#824EE1'
  },
  warning: '#E4A93C',
  black: '#383B3D',
  white: '#FFFFFF',
  transparent: 'transparent'
};
var charts = {
  zeroLineColor: colors.gray[300],
  gridLinesColor: colors.gray[300],
  angleLinesColor: colors.gray[300],
  zeroLineWidth: 1,
  defaultColor: colors.gray[600],
  defaultFontColor: colors.gray[600],
  defaultFontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  defaultFontSize: 13,
  colors: {
    area: Object(ui_huma_js_theme_utils__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])(colors.primary[500], 0.24)
  }
};
var settings = {
  colors: colors,
  charts: charts
};

if (typeof window !== 'undefined') {
  window.settings = settings;
}

/***/ }),

/***/ 28:
/*!**********************************!*\
  !*** multi ./src/js/settings.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/settings.js */"./src/js/settings.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvdGhlbWUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NldHRpbmdzLmpzIl0sIm5hbWVzIjpbImhleFRvUkdCIiwiaGV4IiwiYWxwaGEiLCJyIiwicGFyc2VJbnQiLCJzbGljZSIsImciLCJiIiwiY29sb3JzIiwicGxhaW4iLCJncmF5IiwicHJpbWFyeSIsImFjY2VudCIsInRlYWwiLCJ5ZWxsb3ciLCJzdWNjZXNzIiwicHVycGxlIiwiZGFya01vZGUiLCJib3JkZXIiLCJib2R5QmciLCJ3YXJuaW5nIiwiYmxhY2siLCJ3aGl0ZSIsInRyYW5zcGFyZW50IiwiY2hhcnRzIiwiemVyb0xpbmVDb2xvciIsImdyaWRMaW5lc0NvbG9yIiwiYW5nbGVMaW5lc0NvbG9yIiwiemVyb0xpbmVXaWR0aCIsImRlZmF1bHRDb2xvciIsImRlZmF1bHRGb250Q29sb3IiLCJkZWZhdWx0Rm9udEZhbWlseSIsImRlZmF1bHRGb250U2l6ZSIsImFyZWEiLCJzZXR0aW5ncyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7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QUFLYkMsY0FBWSxFQUFFckIsTUFBTSxDQUFOQSxLQUxELEdBS0NBLENBTEQ7QUFNYnNCLGtCQUFnQixFQUFFdEIsTUFBTSxDQUFOQSxLQU5MLEdBTUtBLENBTkw7QUFPYnVCLG1CQUFpQixFQVBKO0FBUWJDLGlCQUFlLEVBUkY7QUFTYnhCLFFBQU0sRUFBRTtBQUNOeUIsUUFBSSxFQUFFakMsdUVBQVEsQ0FBQ1EsTUFBTSxDQUFOQSxRQUFELEdBQUNBLENBQUQ7QUFEUjtBQVRLLENBQWY7QUFjTyxJQUFNMEIsUUFBUSxHQUFHO0FBQ3RCMUIsUUFBTSxFQURnQjtBQUV0QmdCLFFBQU0sRUFBTkE7QUFGc0IsQ0FBakI7O0FBS1AsSUFBSSxrQkFBSixhQUFtQztBQUNqQ1csUUFBTSxDQUFOQTtBQUNELEMiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyOCk7XG4iLCJleHBvcnQgY29uc3QgaGV4VG9SR0IgPSAoaGV4LCBhbHBoYSkgPT4ge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNilcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpXG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KVxuXG4gIGlmIChhbHBoYSkge1xuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIpXCJcbiAgfVxufVxuIiwiLy8gaW1wb3J0ICd1aS1odW1hL2pzL3NldHRpbmdzJ1xuXG5pbXBvcnQgeyBoZXhUb1JHQiB9IGZyb20gJ3VpLWh1bWEvanMvdGhlbWUtdXRpbHMnXG5cbi8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL3RoZS1jb2xvci1zeXN0ZW0uaHRtbCN0b29scy1mb3ItcGlja2luZy1jb2xvcnNcbmNvbnN0IGNvbG9ycyA9IHtcbiAgcGxhaW46IHtcbiAgICBncmF5OiAnI0UzRUJGNicsXG4gICAgcHJpbWFyeTogJyM1NTY3RkYnLFxuICAgIGFjY2VudDogJyNlZDBiNGInLFxuICAgIHRlYWw6ICcjMDBCQ0MyJyxcbiAgICB5ZWxsb3c6ICcjRTRBOTNDJyxcbiAgICBzdWNjZXNzOiAnIzY2QkI2QScsXG4gICAgcHVycGxlOiAnIzgyNEVFMScsXG4gICAgJ2RvZGdlci1ibHVlJzogJyM1NTY3RkYnLFxuICAgICdkb2RnZXItYmx1ZS0yMCc6IGhleFRvUkdCKCcjNTU2N0ZGJywgMC4yMCksXG4gIH0sXG4gIGRhcmtNb2RlOiB7XG4gICAgYm9yZGVyOiAnIzE5MTkxQScsXG4gICAgYm9keUJnOiAnIzFEMjEyNidcbiAgfSxcbiAgZ3JheToge1xuICAgIDMwMDogJyNFM0VCRjYnLFxuICAgIDYwMDogJyM5NUFBQzknLFxuICAgIDcwMDogJyNCMUJCQzknLCAvLyB0ZXh0IGNvbG9yXG4gICAgODAwOiAnIzE1MkU0RCcsXG4gICAgOTAwOiAnIzVCNjA2NicgLy8gZ3JpZFxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgNTA6ICcjZTNmMmZkJyxcbiAgICAxMDA6ICcjYmJkZWZiJyxcbiAgICAyMDA6ICcjOTBjOWY5JyxcbiAgICAzMDA6ICcjNjNiNGY2JyxcbiAgICA0MDA6ICcjNDJhNGY1JyxcbiAgICA1MDA6ICcjMjE5NkYzJywgLy8gJHByaW1hcnlcbiAgICA2MDA6ICcjMWY4N2U1JyxcbiAgICA3MDA6ICcjMWE3NWQyJyxcbiAgICA4MDA6ICcjMTc2NGMwJyxcbiAgICA5MDA6ICcjMTA0NWExJ1xuICB9LFxuICBhY2NlbnQ6IHtcbiAgICA1MDogJyNmZWUzZTknLFxuICAgIDEwMDogJyNmZGI5YzgnLFxuICAgIDIwMDogJyNmYThjYTMnLFxuICAgIDMwMDogJyNmNzVjN2YnLFxuICAgIDQwMDogJyNmMjM3NjQnLFxuICAgIDUwMDogJyNlZDBiNGInLCAvLyBwcmltYXJ5XG4gICAgNjAwOiAnI2RkMDI0YScsXG4gICAgNzAwOiAnI2M4MDA0NycsXG4gICAgODAwOiAnI2I0MDA0NScsXG4gICAgOTAwOiAnIzkyMDA0MSdcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIDUwOiAnI2U4ZjVlOScsXG4gICAgMTAwOiAnI2M4ZTZjOScsXG4gICAgMjAwOiAnI2E1ZDZhNycsXG4gICAgMzAwOiAnIzgxYzc4NCcsXG4gICAgNDAwOiAnIzY2QkI2QScsIC8vICRzdWNjZXNzXG4gICAgNTAwOiAnIzRjYWY1MCcsXG4gICAgNjAwOiAnIzQzYTA0NycsXG4gICAgNzAwOiAnIzM4OGUzYycsXG4gICAgODAwOiAnIzJlN2QzMicsXG4gICAgOTAwOiAnIzFiNWUyMCcsXG4gIH0sXG4gIHB1cnBsZToge1xuICAgIDUwMDogJyM4MjRFRTEnXG4gIH0sXG4gIHdhcm5pbmc6ICcjRTRBOTNDJyxcbiAgYmxhY2s6ICcjMzgzQjNEJyxcbiAgd2hpdGU6ICcjRkZGRkZGJyxcbiAgdHJhbnNwYXJlbnQ6ICd0cmFuc3BhcmVudCdcbn1cblxuY29uc3QgY2hhcnRzID0ge1xuICB6ZXJvTGluZUNvbG9yOiBjb2xvcnMuZ3JheVszMDBdLFxuICBncmlkTGluZXNDb2xvcjogY29sb3JzLmdyYXlbMzAwXSxcbiAgYW5nbGVMaW5lc0NvbG9yOiBjb2xvcnMuZ3JheVszMDBdLFxuICB6ZXJvTGluZVdpZHRoOiAxLFxuICBkZWZhdWx0Q29sb3I6IGNvbG9ycy5ncmF5WzYwMF0sXG4gIGRlZmF1bHRGb250Q29sb3I6IGNvbG9ycy5ncmF5WzYwMF0sXG4gIGRlZmF1bHRGb250RmFtaWx5OiAnUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIicsXG4gIGRlZmF1bHRGb250U2l6ZTogMTMsXG4gIGNvbG9yczoge1xuICAgIGFyZWE6IGhleFRvUkdCKGNvbG9ycy5wcmltYXJ5WzUwMF0sIDAuMjQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICBjb2xvcnMsXG4gIGNoYXJ0c1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LnNldHRpbmdzID0gc2V0dGluZ3Ncbn0iXSwic291cmNlUm9vdCI6IiJ9