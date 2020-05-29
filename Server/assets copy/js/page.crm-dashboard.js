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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/page.crm-dashboard.js":
/*!*******************************************************!*\
  !*** ./node_modules/ui-huma/js/page.crm-dashboard.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var Views = function Views(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      scales: {
        xAxes: [{
          display: false,
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day'
          }
        }]
      }
    }, options);
    var data = [];
    var conversion = []; // Create a date range for the last 7 days

    var start = moment().subtract(7, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    range.by('days', function (moment) {
      var views = Math.round(Math.floor(Math.random() * 300) + 10);
      data.push({
        y: views,
        x: moment.toDate()
      });
      conversion.push({
        y: Math.round(views * 0.5),
        x: moment.toDate()
      });
    });
    var data = {
      datasets: [{
        label: "Conversion",
        data: conversion
      }, {
        label: "Views",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  }; // Create Chart


  Views('#viewsChart');
})();

/***/ }),

/***/ "./src/js/page.crm-dashboard.js":
/*!**************************************!*\
  !*** ./src/js/page.crm-dashboard.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_page_crm_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/page.crm-dashboard */ "./node_modules/ui-huma/js/page.crm-dashboard.js");
/* harmony import */ var ui_huma_js_page_crm_dashboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_page_crm_dashboard__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 12:
/*!********************************************!*\
  !*** multi ./src/js/page.crm-dashboard.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/page.crm-dashboard.js */"./src/js/page.crm-dashboard.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvcGFnZS5jcm0tZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlLmNybS1kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiVmlld3MiLCJpZCIsInR5cGUiLCJvcHRpb25zIiwiQ2hhcnQiLCJoZWxwZXJzIiwibWVyZ2UiLCJzY2FsZXMiLCJ4QXhlcyIsImRpc3BsYXkiLCJncmlkTGluZXMiLCJ0aW1lIiwidW5pdCIsImRhdGEiLCJjb252ZXJzaW9uIiwic3RhcnQiLCJtb21lbnQiLCJzdWJ0cmFjdCIsImZvcm1hdCIsImVuZCIsInJhbmdlIiwiYnkiLCJ2aWV3cyIsIk1hdGgiLCJyb3VuZCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInkiLCJ4IiwidG9EYXRlIiwiZGF0YXNldHMiLCJsYWJlbCIsIkNoYXJ0cyIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsWUFBVTtBQUNUOztBQUVBLE1BQUlBLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQVNDLEVBQVQsRUFBMEM7QUFBQSxRQUE3QkMsSUFBNkIsdUVBQXRCLE1BQXNCO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQ3BEQSxXQUFPLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxLQUFkLENBQW9CO0FBQzVCQyxZQUFNLEVBQUU7QUFDTkMsYUFBSyxFQUFFLENBQUM7QUFDTkMsaUJBQU8sRUFBRSxLQURIO0FBRU5DLG1CQUFTLEVBQUU7QUFDVEQsbUJBQU8sRUFBRTtBQURBLFdBRkw7QUFLTlAsY0FBSSxFQUFFLE1BTEE7QUFNTlMsY0FBSSxFQUFFO0FBQ0pDLGdCQUFJLEVBQUU7QUFERjtBQU5BLFNBQUQ7QUFERDtBQURvQixLQUFwQixFQWFQVCxPQWJPLENBQVY7QUFlQSxRQUFJVSxJQUFJLEdBQUcsRUFBWDtBQUNBLFFBQUlDLFVBQVUsR0FBRyxFQUFqQixDQWpCb0QsQ0FtQnBEOztBQUNBLFFBQUlDLEtBQUssR0FBR0MsTUFBTSxHQUFHQyxRQUFULENBQWtCLENBQWxCLEVBQXFCLE1BQXJCLEVBQTZCQyxNQUE3QixDQUFvQyxZQUFwQyxDQUFaLENBcEJvRCxDQW9CVTs7QUFDOUQsUUFBSUMsR0FBRyxHQUFHSCxNQUFNLEdBQUdFLE1BQVQsQ0FBZ0IsWUFBaEIsQ0FBVixDQXJCb0QsQ0FxQlo7O0FBQ3hDLFFBQUlFLEtBQUssR0FBR0osTUFBTSxDQUFDSSxLQUFQLENBQWFMLEtBQWIsRUFBb0JJLEdBQXBCLENBQVosQ0F0Qm9ELENBd0JwRDtBQUNBOztBQUNBQyxTQUFLLENBQUNDLEVBQU4sQ0FBUyxNQUFULEVBQWlCLFVBQVNMLE1BQVQsRUFBaUI7QUFDaEMsVUFBTU0sS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0csTUFBTCxLQUFnQixHQUEzQixJQUFrQyxFQUE3QyxDQUFkO0FBQ0FiLFVBQUksQ0FBQ2MsSUFBTCxDQUFVO0FBQ1JDLFNBQUMsRUFBRU4sS0FESztBQUVSTyxTQUFDLEVBQUViLE1BQU0sQ0FBQ2MsTUFBUDtBQUZLLE9BQVY7QUFJQWhCLGdCQUFVLENBQUNhLElBQVgsQ0FBZ0I7QUFDZEMsU0FBQyxFQUFFTCxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsS0FBSyxHQUFHLEdBQW5CLENBRFc7QUFFZE8sU0FBQyxFQUFFYixNQUFNLENBQUNjLE1BQVA7QUFGVyxPQUFoQjtBQUlELEtBVkQ7QUFZQSxRQUFJakIsSUFBSSxHQUFHO0FBQ1RrQixjQUFRLEVBQUUsQ0FBQztBQUNUQyxhQUFLLEVBQUUsWUFERTtBQUVUbkIsWUFBSSxFQUFFQztBQUZHLE9BQUQsRUFHUDtBQUNEa0IsYUFBSyxFQUFFLE9BRE47QUFFRG5CLFlBQUksRUFBSkE7QUFGQyxPQUhPO0FBREQsS0FBWDtBQVVBb0IsVUFBTSxDQUFDQyxNQUFQLENBQWNqQyxFQUFkLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUNVLElBQWpDO0FBQ0QsR0FqREQsQ0FIUyxDQXNEVDs7O0FBQ0FiLE9BQUssQ0FBQyxhQUFELENBQUw7QUFFRCxDQXpERCxJOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUEiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL3BhZ2UuY3JtLWRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgVmlld3MgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSBbXVxuICAgIHZhciBjb252ZXJzaW9uID0gW11cblxuICAgIC8vIENyZWF0ZSBhIGRhdGUgcmFuZ2UgZm9yIHRoZSBsYXN0IDcgZGF5c1xuICAgIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDcsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gNyBkYXlzIGFnb1xuICAgIHZhciBlbmQgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyB0b2RheVxuICAgIHZhciByYW5nZSA9IG1vbWVudC5yYW5nZShzdGFydCwgZW5kKVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBncmFwaCBkYXRhXG4gICAgLy8gSXRlcmF0ZSB0aGUgZGF0ZSByYW5nZSBhbmQgYXNzaWduIGEgcmFuZG9tIHZhbHVlIGZvciBlYWNoIGRheVxuICAgIHJhbmdlLmJ5KCdkYXlzJywgZnVuY3Rpb24obW9tZW50KSB7XG4gICAgICBjb25zdCB2aWV3cyA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzAwKSArIDEwKVxuICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgeTogdmlld3MsXG4gICAgICAgIHg6IG1vbWVudC50b0RhdGUoKVxuICAgICAgfSlcbiAgICAgIGNvbnZlcnNpb24ucHVzaCh7XG4gICAgICAgIHk6IE1hdGgucm91bmQodmlld3MgKiAwLjUpLFxuICAgICAgICB4OiBtb21lbnQudG9EYXRlKClcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIkNvbnZlcnNpb25cIixcbiAgICAgICAgZGF0YTogY29udmVyc2lvblxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJWaWV3c1wiLFxuICAgICAgICBkYXRhXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICAvLyBDcmVhdGUgQ2hhcnRcbiAgVmlld3MoJyN2aWV3c0NoYXJ0JylcblxufSkoKSIsImltcG9ydCAndWktaHVtYS9qcy9wYWdlLmNybS1kYXNoYm9hcmQnIl0sInNvdXJjZVJvb3QiOiIifQ==