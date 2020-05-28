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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/vendor/daterangepicker.js":
/*!***********************************************************!*\
  !*** ./node_modules/ui-huma/js/vendor/daterangepicker.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fm_plugin_daterangepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fm-plugin-daterangepicker */ "./node_modules/ui-huma/node_modules/fm-plugin-daterangepicker/js/daterangepicker.js");
/* harmony import */ var fm_plugin_daterangepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fm_plugin_daterangepicker__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/ui-huma/node_modules/fm-plugin-daterangepicker/js/daterangepicker.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ui-huma/node_modules/fm-plugin-daterangepicker/js/daterangepicker.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  $('[data-toggle="daterangepicker"]').each(function () {
    var element = $(this);
    var format = void 0 !== element.data('daterangepicker-locale-format') ? element.data('daterangepicker-locale-format') : 'YYYY/MM/DD';
    var ranges = {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    };
    var options = {
      showDropdowns: void 0 !== element.data('daterangepicker-show-dropdowns') ? element.data('daterangepicker-show-dropdowns') : false,
      drops: void 0 !== element.data('daterangepicker-drops') ? element.data('daterangepicker-drops') : 'down',
      opens: void 0 !== element.data('daterangepicker-opens') ? element.data('daterangepicker-opens') : 'right',
      startDate: void 0 !== element.data('daterangepicker-start-date') ? element.data('daterangepicker-start-date') : moment(),
      endDate: void 0 !== element.data('daterangepicker-end-date') ? element.data('daterangepicker-end-date') : moment().add(1, 'month'),
      singleDatePicker: void 0 !== element.data('daterangepicker-single-date-picker') ? element.data('daterangepicker-single-date-picker') : false,
      autoApply: void 0 !== element.data('daterangepicker-auto-apply') ? element.data('daterangepicker-auto-apply') : true,
      timePicker: void 0 !== element.data('daterangepicker-time-picker') ? element.data('daterangepicker-time-picker') : false,
      timePicker24Hour: void 0 !== element.data('daterangepicker-time-picker-24-hour') ? element.data('daterangepicker-time-picker-24-hour') : false,
      ranges: void 0 !== element.data('daterangepicker-ranges') ? ranges : false,
      locale: {
        format: format,
        separator: void 0 !== element.data('daterangepicker-locale-separator') ? element.data('daterangepicker-locale-separator') : ' to '
      }
    };
    element.daterangepicker(options);
  });
})();

/***/ }),

/***/ "./src/js/vendor/daterangepicker.js":
/*!******************************************!*\
  !*** ./src/js/vendor/daterangepicker.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_vendor_daterangepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/vendor/daterangepicker */ "./node_modules/ui-huma/js/vendor/daterangepicker.js");


/***/ }),

/***/ 35:
/*!************************************************!*\
  !*** multi ./src/js/vendor/daterangepicker.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/vendor/daterangepicker.js */"./src/js/vendor/daterangepicker.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvdmVuZG9yL2RhdGVyYW5nZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9ub2RlX21vZHVsZXMvZm0tcGx1Z2luLWRhdGVyYW5nZXBpY2tlci9qcy9kYXRlcmFuZ2VwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZlbmRvci9kYXRlcmFuZ2VwaWNrZXIuanMiXSwibmFtZXMiOlsiJCIsImVhY2giLCJlbGVtZW50IiwiZm9ybWF0IiwiZGF0YSIsInJhbmdlcyIsIm1vbWVudCIsInN1YnRyYWN0Iiwic3RhcnRPZiIsImVuZE9mIiwib3B0aW9ucyIsInNob3dEcm9wZG93bnMiLCJkcm9wcyIsIm9wZW5zIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImFkZCIsInNpbmdsZURhdGVQaWNrZXIiLCJhdXRvQXBwbHkiLCJ0aW1lUGlja2VyIiwidGltZVBpY2tlcjI0SG91ciIsImxvY2FsZSIsInNlcGFyYXRvciIsImRhdGVyYW5nZXBpY2tlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7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T0FBTyxDQUFDRSxJQUFSLENBQWEsNEJBQWIsQ0FBWCxHQUNQRixPQUFPLENBQUNFLElBQVIsQ0FBYSw0QkFBYixDQURPLEdBRVAsSUFyQlU7QUFzQmRlLGdCQUFVLEVBQUUsS0FBSyxDQUFMLEtBQVdqQixPQUFPLENBQUNFLElBQVIsQ0FBYSw2QkFBYixDQUFYLEdBQ1JGLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLDZCQUFiLENBRFEsR0FFUixLQXhCVTtBQXlCZGdCLHNCQUFnQixFQUFFLEtBQUssQ0FBTCxLQUFXbEIsT0FBTyxDQUFDRSxJQUFSLENBQWEscUNBQWIsQ0FBWCxHQUNkRixPQUFPLENBQUNFLElBQVIsQ0FBYSxxQ0FBYixDQURjLEdBRWQsS0EzQlU7QUE0QmRDLFlBQU0sRUFBRSxLQUFLLENBQUwsS0FBV0gsT0FBTyxDQUFDRSxJQUFSLENBQWEsd0JBQWIsQ0FBWCxHQUNKQyxNQURJLEdBRUosS0E5QlU7QUErQmRnQixZQUFNLEVBQUU7QUFDTmxCLGNBQU0sRUFBTkEsTUFETTtBQUVObUIsaUJBQVMsRUFBRSxLQUFLLENBQUwsS0FBV3BCLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLGtDQUFiLENBQVgsR0FDUEYsT0FBTyxDQUFDRSxJQUFSLENBQWEsa0NBQWIsQ0FETyxHQUVQO0FBSkU7QUEvQk0sS0FBaEI7QUF1Q0FGLFdBQU8sQ0FBQ3FCLGVBQVIsQ0FBd0JiLE9BQXhCO0FBQ0QsR0F2REQ7QUF5REQsQ0E1REQsSTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvZGF0ZXJhbmdlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNSk7XG4iLCJpbXBvcnQgJ2ZtLXBsdWdpbi1kYXRlcmFuZ2VwaWNrZXInIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICAkKCdbZGF0YS10b2dnbGU9XCJkYXRlcmFuZ2VwaWNrZXJcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgY29uc3QgZm9ybWF0ID0gdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1sb2NhbGUtZm9ybWF0JykgXG4gICAgICA/IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLWxvY2FsZS1mb3JtYXQnKSBcbiAgICAgIDogJ1lZWVkvTU0vREQnXG5cbiAgICBjb25zdCByYW5nZXMgPSB7XG4gICAgICAnVG9kYXknOiBbbW9tZW50KCksIG1vbWVudCgpXSxcbiAgICAgICdZZXN0ZXJkYXknOiBbbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKSwgbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKV0sXG4gICAgICAnTGFzdCA3IERheXMnOiBbbW9tZW50KCkuc3VidHJhY3QoNiwgJ2RheXMnKSwgbW9tZW50KCldLFxuICAgICAgJ0xhc3QgMzAgRGF5cyc6IFttb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKSwgbW9tZW50KCldLFxuICAgICAgJ1RoaXMgTW9udGgnOiBbbW9tZW50KCkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KCkuZW5kT2YoJ21vbnRoJyldLFxuICAgICAgJ0xhc3QgTW9udGgnOiBbbW9tZW50KCkuc3VidHJhY3QoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KCkuc3VidHJhY3QoMSwgJ21vbnRoJykuZW5kT2YoJ21vbnRoJyldXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHNob3dEcm9wZG93bnM6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItc2hvdy1kcm9wZG93bnMnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1zaG93LWRyb3Bkb3ducycpIFxuICAgICAgICA6IGZhbHNlLFxuICAgICAgZHJvcHM6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItZHJvcHMnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1kcm9wcycpIFxuICAgICAgICA6ICdkb3duJyxcbiAgICAgIG9wZW5zOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLW9wZW5zJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItb3BlbnMnKSBcbiAgICAgICAgOiAncmlnaHQnLFxuICAgICAgc3RhcnREYXRlOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLXN0YXJ0LWRhdGUnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1zdGFydC1kYXRlJylcbiAgICAgICAgOiBtb21lbnQoKSxcbiAgICAgIGVuZERhdGU6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItZW5kLWRhdGUnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1lbmQtZGF0ZScpXG4gICAgICAgIDogbW9tZW50KCkuYWRkKDEsICdtb250aCcpLFxuICAgICAgc2luZ2xlRGF0ZVBpY2tlcjogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1zaW5nbGUtZGF0ZS1waWNrZXInKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1zaW5nbGUtZGF0ZS1waWNrZXInKSBcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIGF1dG9BcHBseTogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1hdXRvLWFwcGx5JykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItYXV0by1hcHBseScpIFxuICAgICAgICA6IHRydWUsXG4gICAgICB0aW1lUGlja2VyOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLXRpbWUtcGlja2VyJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItdGltZS1waWNrZXInKSBcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIHRpbWVQaWNrZXIyNEhvdXI6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItdGltZS1waWNrZXItMjQtaG91cicpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLXRpbWUtcGlja2VyLTI0LWhvdXInKSBcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIHJhbmdlczogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1yYW5nZXMnKSBcbiAgICAgICAgPyByYW5nZXMgXG4gICAgICAgIDogZmFsc2UsXG4gICAgICBsb2NhbGU6IHtcbiAgICAgICAgZm9ybWF0LFxuICAgICAgICBzZXBhcmF0b3I6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItbG9jYWxlLXNlcGFyYXRvcicpIFxuICAgICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItbG9jYWxlLXNlcGFyYXRvcicpIFxuICAgICAgICAgIDogJyB0byAnLFxuICAgICAgfVxuICAgIH1cblxuICAgIGVsZW1lbnQuZGF0ZXJhbmdlcGlja2VyKG9wdGlvbnMpXG4gIH0pXG5cbn0pKCkiLCJpbXBvcnQgJ3VpLWh1bWEvanMvdmVuZG9yL2RhdGVyYW5nZXBpY2tlciciXSwic291cmNlUm9vdCI6IiJ9