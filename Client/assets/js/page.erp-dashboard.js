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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/page.erp-dashboard.js":
/*!*******************************************************!*\
  !*** ./node_modules/ui-huma/js/page.erp-dashboard.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var earnings = [];
  var prev = [];
  var backgroundColor = []; // Create a date range for the last 7 days

  var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

  var end = moment().format('YYYY-MM-DD'); // today

  var range = moment.range(start, end); // Create the earnings graph data
  // Iterate the date range and assign a random ($) earnings value for each day

  range.by('days', function (m) {
    earnings.push({
      y: Math.floor(Math.random() * 300) + 30,
      x: m.toDate()
    });
    prev.push({
      y: Math.floor(Math.random() * 300) + 10,
      x: m.toDate()
    });

    if (m.startOf('day').isSame(moment().startOf('day'))) {
      backgroundColor.push(settings.colors.accent[500]);
    } else {
      backgroundColor.push(settings.colors.primary[500]);
    }
  });

  var Earnings = function Earnings(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'roundedBar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      barRoundness: 1.2,
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'GENERATED INCOME'
      },
      scales: {
        yAxes: [{
          ticks: {
            maxTicksLimit: 4
          }
        }],
        xAxes: [{
          offset: true,
          ticks: {
            padding: 10
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            maxTicksLimit: 7
          }
        }]
      }
    }, options);
    var data = {
      datasets: [{
        label: "Previous Week",
        data: prev,
        barThickness: 20
      }, {
        label: "Last Week",
        data: earnings,
        barThickness: 20
      }]
    };
    Charts.create(id, type, options, data);
  };

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
      var views = Math.floor(Math.random() * 300) + 10;
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


  Earnings('#earningsChart');
  Views('#viewsChart');
})();

/***/ }),

/***/ "./src/js/page.erp-dashboard.js":
/*!**************************************!*\
  !*** ./src/js/page.erp-dashboard.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_page_erp_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/page.erp-dashboard */ "./node_modules/ui-huma/js/page.erp-dashboard.js");
/* harmony import */ var ui_huma_js_page_erp_dashboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_page_erp_dashboard__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 15:
/*!********************************************!*\
  !*** multi ./src/js/page.erp-dashboard.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/page.erp-dashboard.js */"./src/js/page.erp-dashboard.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvcGFnZS5lcnAtZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlLmVycC1kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiZWFybmluZ3MiLCJwcmV2IiwiYmFja2dyb3VuZENvbG9yIiwic3RhcnQiLCJtb21lbnQiLCJzdWJ0cmFjdCIsImZvcm1hdCIsImVuZCIsInJhbmdlIiwiYnkiLCJtIiwicHVzaCIsInkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ4IiwidG9EYXRlIiwic3RhcnRPZiIsImlzU2FtZSIsInNldHRpbmdzIiwiY29sb3JzIiwiYWNjZW50IiwicHJpbWFyeSIsIkVhcm5pbmdzIiwiaWQiLCJ0eXBlIiwib3B0aW9ucyIsIkNoYXJ0IiwiaGVscGVycyIsIm1lcmdlIiwiYmFyUm91bmRuZXNzIiwidGl0bGUiLCJkaXNwbGF5IiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJwb3NpdGlvbiIsInRleHQiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwibWF4VGlja3NMaW1pdCIsInhBeGVzIiwib2Zmc2V0IiwicGFkZGluZyIsImdyaWRMaW5lcyIsInRpbWUiLCJ1bml0IiwiZGlzcGxheUZvcm1hdHMiLCJkYXkiLCJkYXRhIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhclRoaWNrbmVzcyIsIkNoYXJ0cyIsImNyZWF0ZSIsIlZpZXdzIiwiY29udmVyc2lvbiIsInZpZXdzIiwicm91bmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7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LEVBQWQsRUFBa0JDLElBQWxCLEVBQXdCQyxPQUF4QixFQUFpQ3VCLElBQWpDO0FBQ0QsR0FqREQsQ0FuRlMsQ0FzSVQ7OztBQUNBMUIsVUFBUSxDQUFDLGdCQUFELENBQVI7QUFDQWdDLE9BQUssQ0FBQyxhQUFELENBQUw7QUFFRCxDQTFJRCxJOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUEiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL3BhZ2UuZXJwLWRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZWFybmluZ3MgPSBbXVxuICB2YXIgcHJldiA9IFtdXG4gIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBbXVxuXG4gIC8vIENyZWF0ZSBhIGRhdGUgcmFuZ2UgZm9yIHRoZSBsYXN0IDcgZGF5c1xuICB2YXIgc3RhcnQgPSBtb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIDcgZGF5cyBhZ29cbiAgdmFyIGVuZCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIHRvZGF5XG4gIHZhciByYW5nZSA9IG1vbWVudC5yYW5nZShzdGFydCwgZW5kKVxuXG4gIC8vIENyZWF0ZSB0aGUgZWFybmluZ3MgZ3JhcGggZGF0YVxuICAvLyBJdGVyYXRlIHRoZSBkYXRlIHJhbmdlIGFuZCBhc3NpZ24gYSByYW5kb20gKCQpIGVhcm5pbmdzIHZhbHVlIGZvciBlYWNoIGRheVxuICByYW5nZS5ieSgnZGF5cycsIGZ1bmN0aW9uKG0pIHtcbiAgICBlYXJuaW5ncy5wdXNoKHtcbiAgICAgIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwMCkgKyAzMCxcbiAgICAgIHg6IG0udG9EYXRlKClcbiAgICB9KVxuICAgIHByZXYucHVzaCh7XG4gICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMDApICsgMTAsXG4gICAgICB4OiBtLnRvRGF0ZSgpXG4gICAgfSlcblxuICAgIGlmIChtLnN0YXJ0T2YoJ2RheScpLmlzU2FtZShtb21lbnQoKS5zdGFydE9mKCdkYXknKSkpIHtcbiAgICAgIGJhY2tncm91bmRDb2xvci5wdXNoKHNldHRpbmdzLmNvbG9ycy5hY2NlbnRbNTAwXSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3IucHVzaChzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs1MDBdKVxuICAgIH1cbiAgfSlcblxuICB2YXIgRWFybmluZ3MgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdyb3VuZGVkQmFyJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgYmFyUm91bmRuZXNzOiAxLjIsXG4gICAgICB0aXRsZToge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGZvbnRDb2xvcjogJ3JnYmEoNTQsIDc2LCAxMDIsIDAuNTQpJyxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICB0ZXh0OiAnR0VORVJBVEVEIElOQ09NRSdcbiAgICAgIH0sXG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDRcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICBvZmZzZXQ6IHRydWUsXG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgdW5pdDogJ2RheScsXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybWF0czoge1xuICAgICAgICAgICAgICBkYXk6ICdEL01NJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDdcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIlByZXZpb3VzIFdlZWtcIixcbiAgICAgICAgZGF0YTogcHJldixcbiAgICAgICAgYmFyVGhpY2tuZXNzOiAyMFxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJMYXN0IFdlZWtcIixcbiAgICAgICAgZGF0YTogZWFybmluZ3MsXG4gICAgICAgIGJhclRoaWNrbmVzczogMjBcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIHZhciBWaWV3cyA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ2xpbmUnLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IFtdXG4gICAgdmFyIGNvbnZlcnNpb24gPSBbXVxuXG4gICAgLy8gQ3JlYXRlIGEgZGF0ZSByYW5nZSBmb3IgdGhlIGxhc3QgNyBkYXlzXG4gICAgdmFyIHN0YXJ0ID0gbW9tZW50KCkuc3VidHJhY3QoNywgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyA3IGRheXMgYWdvXG4gICAgdmFyIGVuZCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIHRvZGF5XG4gICAgdmFyIHJhbmdlID0gbW9tZW50LnJhbmdlKHN0YXJ0LCBlbmQpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGdyYXBoIGRhdGFcbiAgICAvLyBJdGVyYXRlIHRoZSBkYXRlIHJhbmdlIGFuZCBhc3NpZ24gYSByYW5kb20gdmFsdWUgZm9yIGVhY2ggZGF5XG4gICAgcmFuZ2UuYnkoJ2RheXMnLCBmdW5jdGlvbihtb21lbnQpIHtcbiAgICAgIGNvbnN0IHZpZXdzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzAwKSArIDEwXG4gICAgICBkYXRhLnB1c2goe1xuICAgICAgICB5OiB2aWV3cyxcbiAgICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXG4gICAgICB9KVxuICAgICAgY29udmVyc2lvbi5wdXNoKHtcbiAgICAgICAgeTogTWF0aC5yb3VuZCh2aWV3cyAqIDAuNSksXG4gICAgICAgIHg6IG1vbWVudC50b0RhdGUoKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6IFwiQ29udmVyc2lvblwiLFxuICAgICAgICBkYXRhOiBjb252ZXJzaW9uXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIlZpZXdzXCIsXG4gICAgICAgIGRhdGFcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIC8vIENyZWF0ZSBDaGFydFxuICBFYXJuaW5ncygnI2Vhcm5pbmdzQ2hhcnQnKVxuICBWaWV3cygnI3ZpZXdzQ2hhcnQnKVxuXG59KSgpIiwiaW1wb3J0ICd1aS1odW1hL2pzL3BhZ2UuZXJwLWRhc2hib2FyZCciXSwic291cmNlUm9vdCI6IiJ9