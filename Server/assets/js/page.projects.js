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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/page.projects.js":
/*!**************************************************!*\
  !*** ./node_modules/ui-huma/js/page.projects.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var Earnings = function Earnings(id) {
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
    var customers = []; // Create a date range for the last 7 days

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
      customers.push({
        y: Math.round(views * 0.5),
        x: moment.toDate()
      });
    });
    var data = {
      datasets: [{
        label: "Customers",
        data: customers
      }, {
        label: "Earnings",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Progress = function Progress(id, value, total) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'doughnut';
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    options = Chart.helpers.merge({
      cutoutPercentage: 85,
      aspectRatio: 1,
      responsive: false,
      maintainAspectRatio: false
    }, options);
    var data = {
      datasets: [{
        data: [value, total - value],
        backgroundColor: [],
        borderWidth: 0
      }]
    };
    Charts.create(id, type, options, data);
  }; ///////////////////
  // Create Charts //
  ///////////////////


  Progress('#invoicesProgressChart', 11.34, 27);
  Earnings('#earningsChart');
})();

/***/ }),

/***/ "./src/js/page.projects.js":
/*!*********************************!*\
  !*** ./src/js/page.projects.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_page_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/page.projects */ "./node_modules/ui-huma/js/page.projects.js");
/* harmony import */ var ui_huma_js_page_projects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_page_projects__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 19:
/*!***************************************!*\
  !*** multi ./src/js/page.projects.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/page.projects.js */"./src/js/page.projects.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvcGFnZS5wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZS5wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJFYXJuaW5ncyIsImlkIiwidHlwZSIsIm9wdGlvbnMiLCJDaGFydCIsImhlbHBlcnMiLCJtZXJnZSIsInNjYWxlcyIsInhBeGVzIiwiZGlzcGxheSIsImdyaWRMaW5lcyIsInRpbWUiLCJ1bml0IiwiZGF0YSIsImN1c3RvbWVycyIsInN0YXJ0IiwibW9tZW50Iiwic3VidHJhY3QiLCJmb3JtYXQiLCJlbmQiLCJyYW5nZSIsImJ5Iiwidmlld3MiLCJNYXRoIiwicm91bmQiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJ5IiwieCIsInRvRGF0ZSIsImRhdGFzZXRzIiwibGFiZWwiLCJDaGFydHMiLCJjcmVhdGUiLCJQcm9ncmVzcyIsInZhbHVlIiwidG90YWwiLCJjdXRvdXRQZXJjZW50YWdlIiwiYXNwZWN0UmF0aW8iLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlcldpZHRoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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STVCQyx5QkFBbUIsRUFBRTtBQUpPLEtBQXBCLEVBS1B0QyxPQUxPLENBQVY7QUFPQSxRQUFJVSxJQUFJLEdBQUc7QUFDVGtCLGNBQVEsRUFBRSxDQUFDO0FBQ1RsQixZQUFJLEVBQUUsQ0FBQ3VCLEtBQUQsRUFBUUMsS0FBSyxHQUFHRCxLQUFoQixDQURHO0FBRVRNLHVCQUFlLEVBQUUsRUFGUjtBQUdUQyxtQkFBVyxFQUFFO0FBSEosT0FBRDtBQURELEtBQVg7QUFRQVYsVUFBTSxDQUFDQyxNQUFQLENBQWNqQyxFQUFkLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUNVLElBQWpDO0FBQ0QsR0FqQkQsQ0F0RFMsQ0F5RVQ7QUFDQTtBQUNBOzs7QUFFQXNCLFVBQVEsQ0FBQyx3QkFBRCxFQUEyQixLQUEzQixFQUFrQyxFQUFsQyxDQUFSO0FBQ0FuQyxVQUFRLENBQUMsZ0JBQUQsQ0FBUjtBQUVELENBaEZELEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvcGFnZS5wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgRWFybmluZ3MgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSBbXVxuICAgIHZhciBjdXN0b21lcnMgPSBbXVxuXG4gICAgLy8gQ3JlYXRlIGEgZGF0ZSByYW5nZSBmb3IgdGhlIGxhc3QgNyBkYXlzXG4gICAgdmFyIHN0YXJ0ID0gbW9tZW50KCkuc3VidHJhY3QoNywgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyA3IGRheXMgYWdvXG4gICAgdmFyIGVuZCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIHRvZGF5XG4gICAgdmFyIHJhbmdlID0gbW9tZW50LnJhbmdlKHN0YXJ0LCBlbmQpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGdyYXBoIGRhdGFcbiAgICAvLyBJdGVyYXRlIHRoZSBkYXRlIHJhbmdlIGFuZCBhc3NpZ24gYSByYW5kb20gdmFsdWUgZm9yIGVhY2ggZGF5XG4gICAgcmFuZ2UuYnkoJ2RheXMnLCBmdW5jdGlvbihtb21lbnQpIHtcbiAgICAgIGNvbnN0IHZpZXdzID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMDApICsgMTApXG4gICAgICBkYXRhLnB1c2goe1xuICAgICAgICB5OiB2aWV3cyxcbiAgICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXG4gICAgICB9KVxuICAgICAgY3VzdG9tZXJzLnB1c2goe1xuICAgICAgICB5OiBNYXRoLnJvdW5kKHZpZXdzICogMC41KSxcbiAgICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJDdXN0b21lcnNcIixcbiAgICAgICAgZGF0YTogY3VzdG9tZXJzXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIkVhcm5pbmdzXCIsXG4gICAgICAgIGRhdGFcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIHZhciBQcm9ncmVzcyA9IGZ1bmN0aW9uKGlkLCB2YWx1ZSwgdG90YWwsIHR5cGUgPSAnZG91Z2hudXQnLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBjdXRvdXRQZXJjZW50YWdlOiA4NSxcbiAgICAgIGFzcGVjdFJhdGlvOiAxLFxuICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBkYXRhOiBbdmFsdWUsIHRvdGFsIC0gdmFsdWVdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtdLFxuICAgICAgICBib3JkZXJXaWR0aDogMFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBDcmVhdGUgQ2hhcnRzIC8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgXG4gIFByb2dyZXNzKCcjaW52b2ljZXNQcm9ncmVzc0NoYXJ0JywgMTEuMzQsIDI3KVxuICBFYXJuaW5ncygnI2Vhcm5pbmdzQ2hhcnQnKVxuXG59KSgpIiwiaW1wb3J0ICd1aS1odW1hL2pzL3BhZ2UucHJvamVjdHMnIl0sInNvdXJjZVJvb3QiOiIifQ==