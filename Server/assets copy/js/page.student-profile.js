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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/page.student-profile.js":
/*!****************************************!*\
  !*** ./src/js/page.student-profile.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var earnings = []; // Create a date range for the last 7 days

  var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

  var end = moment().format('YYYY-MM-DD'); // today

  var range = moment.range(start, end); // Create the earnings graph data
  // Iterate the date range and assign a random ($) earnings value for each day

  range.by('days', function (moment) {
    earnings.push({
      y: Math.floor(Math.random() * 200) + 15,
      x: moment.toDate()
    });
  });

  var WeekIQChart = function WeekIQChart(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      scales: {
        yAxes: [{
          ticks: {
            maxTicksLimit: 4
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          type: 'time',
          distribution: 'series',
          time: {
            unit: 'day',
            stepSize: 1,
            autoSkip: false,
            displayFormats: {
              day: 'ddd'
            }
          }
        }]
      }
    }, options);
    var data = {
      datasets: [{
        label: "Experience IQ",
        data: earnings
      }]
    };
    Charts.create(id, type, options, data);
  };

  var TopicIQChart = function TopicIQChart(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'radar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = {
      labels: ["JavaScript", "HTML", "Flinto", "Vue.js", "Sketch", "Priciple", "CSS", "Angular"],
      datasets: [{
        label: "Experience IQ",
        data: [30, 35, 33, 32, 31, 30, 28, 36],
        borderJoinStyle: 'bevel',
        lineTension: .1
      }]
    };
    Charts.create(id, type, options, data);
  }; // Create Chart


  WeekIQChart('#iqChart');
  TopicIQChart('#topicIqChart');
})();

/***/ }),

/***/ 22:
/*!**********************************************!*\
  !*** multi ./src/js/page.student-profile.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/page.student-profile.js */"./src/js/page.student-profile.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2Uuc3R1ZGVudC1wcm9maWxlLmpzIl0sIm5hbWVzIjpbImVhcm5pbmdzIiwic3RhcnQiLCJtb21lbnQiLCJlbmQiLCJyYW5nZSIsInkiLCJNYXRoIiwieCIsIldlZWtJUUNoYXJ0IiwidHlwZSIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwibWF4VGlja3NMaW1pdCIsInhBeGVzIiwiZ3JpZExpbmVzIiwiZGlzcGxheSIsImRpc3RyaWJ1dGlvbiIsInRpbWUiLCJ1bml0Iiwic3RlcFNpemUiLCJhdXRvU2tpcCIsImRpc3BsYXlGb3JtYXRzIiwiZGF5IiwiZGF0YSIsImRhdGFzZXRzIiwibGFiZWwiLCJDaGFydHMiLCJUb3BpY0lRQ2hhcnQiLCJsYWJlbHMiLCJib3JkZXJKb2luU3R5bGUiLCJsaW5lVGVuc2lvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsWUFBVTtBQUNUOztBQUVBLE1BQUlBLFFBQVEsR0FISCxFQUdULENBSFMsQ0FLVDs7QUFDQSxNQUFJQyxLQUFLLEdBQUdDLE1BQU0sR0FBTkEsMkJBTkgsWUFNR0EsQ0FBWixDQU5TLENBTXFEOztBQUM5RCxNQUFJQyxHQUFHLEdBQUdELE1BQU0sR0FBTkEsT0FQRCxZQU9DQSxDQUFWLENBUFMsQ0FPK0I7O0FBQ3hDLE1BQUlFLEtBQUssR0FBR0YsTUFBTSxDQUFOQSxhQVJILEdBUUdBLENBQVosQ0FSUyxDQVVUO0FBQ0E7O0FBQ0FFLE9BQUssQ0FBTEEsV0FBaUIsa0JBQWlCO0FBQ2hDSixZQUFRLENBQVJBLEtBQWM7QUFDWkssT0FBQyxFQUFFQyxJQUFJLENBQUpBLE1BQVdBLElBQUksQ0FBSkEsV0FBWEEsT0FEUztBQUVaQyxPQUFDLEVBQUVMLE1BQU0sQ0FBTkE7QUFGUyxLQUFkRjtBQURGSTs7QUFPQSxNQUFJSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxLQUEwQztBQUFBLFFBQTdCQyxJQUE2Qix1RUFBdEIsTUFBc0I7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFDMURBLFdBQU8sR0FBRyxLQUFLLENBQUwsY0FBb0I7QUFDNUJDLFlBQU0sRUFBRTtBQUNOQyxhQUFLLEVBQUUsQ0FBQztBQUNOQyxlQUFLLEVBQUU7QUFDTEMseUJBQWEsRUFBRTtBQURWO0FBREQsU0FBRCxDQUREO0FBTU5DLGFBQUssRUFBRSxDQUFDO0FBQ05DLG1CQUFTLEVBQUU7QUFDVEMsbUJBQU8sRUFBRTtBQURBLFdBREw7QUFJTlIsY0FBSSxFQUpFO0FBS05TLHNCQUFZLEVBTE47QUFNTkMsY0FBSSxFQUFFO0FBQ0pDLGdCQUFJLEVBREE7QUFFSkMsb0JBQVEsRUFGSjtBQUdKQyxvQkFBUSxFQUhKO0FBSUpDLDBCQUFjLEVBQUU7QUFDZEMsaUJBQUcsRUFBRTtBQURTO0FBSlo7QUFOQSxTQUFEO0FBTkQ7QUFEb0IsS0FBcEIsRUFBVmQsT0FBVSxDQUFWQTtBQXlCQSxRQUFJZSxJQUFJLEdBQUc7QUFDVEMsY0FBUSxFQUFFLENBQUM7QUFDVEMsYUFBSyxFQURJO0FBRVRGLFlBQUksRUFBRXpCO0FBRkcsT0FBRDtBQURELEtBQVg7QUFPQTRCLFVBQU0sQ0FBTkE7QUFqQ0Y7O0FBb0NBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEtBQTJDO0FBQUEsUUFBOUJwQixJQUE4Qix1RUFBdkIsT0FBdUI7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFDNUQsUUFBSWUsSUFBSSxHQUFHO0FBQ1RLLFlBQU0sRUFBRSx3RUFEQyxTQUNELENBREM7QUFFVEosY0FBUSxFQUFFLENBQUM7QUFDVEMsYUFBSyxFQURJO0FBRVRGLFlBQUksRUFBRSw2QkFGRyxFQUVILENBRkc7QUFHVE0sdUJBQWUsRUFITjtBQUlUQyxtQkFBVyxFQUFFO0FBSkosT0FBRDtBQUZELEtBQVg7QUFVQUosVUFBTSxDQUFOQTtBQWxFTyxHQXVEVCxDQXZEUyxDQXFFVDs7O0FBQ0FwQixhQUFXLENBQVhBLFVBQVcsQ0FBWEE7QUFDQXFCLGNBQVksQ0FBWkEsZUFBWSxDQUFaQTtBQXZFRixLIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9wYWdlLnN0dWRlbnQtcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZWFybmluZ3MgPSBbXVxuXG4gIC8vIENyZWF0ZSBhIGRhdGUgcmFuZ2UgZm9yIHRoZSBsYXN0IDcgZGF5c1xuICB2YXIgc3RhcnQgPSBtb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIDcgZGF5cyBhZ29cbiAgdmFyIGVuZCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIHRvZGF5XG4gIHZhciByYW5nZSA9IG1vbWVudC5yYW5nZShzdGFydCwgZW5kKVxuXG4gIC8vIENyZWF0ZSB0aGUgZWFybmluZ3MgZ3JhcGggZGF0YVxuICAvLyBJdGVyYXRlIHRoZSBkYXRlIHJhbmdlIGFuZCBhc3NpZ24gYSByYW5kb20gKCQpIGVhcm5pbmdzIHZhbHVlIGZvciBlYWNoIGRheVxuICByYW5nZS5ieSgnZGF5cycsIGZ1bmN0aW9uKG1vbWVudCkge1xuICAgIGVhcm5pbmdzLnB1c2goe1xuICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwKSArIDE1LFxuICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXG4gICAgfSlcbiAgfSlcblxuICB2YXIgV2Vla0lRQ2hhcnQgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA0XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgICAgIGRpc3RyaWJ1dGlvbjogJ3NlcmllcycsXG4gICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgdW5pdDogJ2RheScsXG4gICAgICAgICAgICBzdGVwU2l6ZTogMSxcbiAgICAgICAgICAgIGF1dG9Ta2lwOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiB7XG4gICAgICAgICAgICAgIGRheTogJ2RkZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIkV4cGVyaWVuY2UgSVFcIixcbiAgICAgICAgZGF0YTogZWFybmluZ3NcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIHZhciBUb3BpY0lRQ2hhcnQgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdyYWRhcicsIG9wdGlvbnMgPSB7fSkge1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgbGFiZWxzOiBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkZsaW50b1wiLCBcIlZ1ZS5qc1wiLCBcIlNrZXRjaFwiLCBcIlByaWNpcGxlXCIsIFwiQ1NTXCIsIFwiQW5ndWxhclwiXSxcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJFeHBlcmllbmNlIElRXCIsXG4gICAgICAgIGRhdGE6IFszMCwgMzUsIDMzLCAzMiwgMzEsIDMwLCAyOCwgMzZdLFxuICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdiZXZlbCcsXG4gICAgICAgIGxpbmVUZW5zaW9uOiAuMVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgLy8gQ3JlYXRlIENoYXJ0XG4gIFdlZWtJUUNoYXJ0KCcjaXFDaGFydCcpXG4gIFRvcGljSVFDaGFydCgnI3RvcGljSXFDaGFydCcpXG5cbn0pKCkiXSwic291cmNlUm9vdCI6IiJ9