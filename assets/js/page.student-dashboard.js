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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/page.student-dashboard.js":
/*!******************************************!*\
  !*** ./src/js/page.student-dashboard.js ***!
  \******************************************/
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

/***/ 21:
/*!************************************************!*\
  !*** multi ./src/js/page.student-dashboard.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/page.student-dashboard.js */"./src/js/page.student-dashboard.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2Uuc3R1ZGVudC1kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiZWFybmluZ3MiLCJzdGFydCIsIm1vbWVudCIsImVuZCIsInJhbmdlIiwieSIsIk1hdGgiLCJ4IiwiV2Vla0lRQ2hhcnQiLCJ0eXBlIiwib3B0aW9ucyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJtYXhUaWNrc0xpbWl0IiwieEF4ZXMiLCJncmlkTGluZXMiLCJkaXNwbGF5IiwiZGlzdHJpYnV0aW9uIiwidGltZSIsInVuaXQiLCJzdGVwU2l6ZSIsImF1dG9Ta2lwIiwiZGlzcGxheUZvcm1hdHMiLCJkYXkiLCJkYXRhIiwiZGF0YXNldHMiLCJsYWJlbCIsIkNoYXJ0cyIsIlRvcGljSVFDaGFydCIsImxhYmVscyIsImJvcmRlckpvaW5TdHlsZSIsImxpbmVUZW5zaW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsQ0FBQyxZQUFVO0FBQ1Q7O0FBRUEsTUFBSUEsUUFBUSxHQUhILEVBR1QsQ0FIUyxDQUtUOztBQUNBLE1BQUlDLEtBQUssR0FBR0MsTUFBTSxHQUFOQSwyQkFOSCxZQU1HQSxDQUFaLENBTlMsQ0FNcUQ7O0FBQzlELE1BQUlDLEdBQUcsR0FBR0QsTUFBTSxHQUFOQSxPQVBELFlBT0NBLENBQVYsQ0FQUyxDQU8rQjs7QUFDeEMsTUFBSUUsS0FBSyxHQUFHRixNQUFNLENBQU5BLGFBUkgsR0FRR0EsQ0FBWixDQVJTLENBVVQ7QUFDQTs7QUFDQUUsT0FBSyxDQUFMQSxXQUFpQixrQkFBaUI7QUFDaENKLFlBQVEsQ0FBUkEsS0FBYztBQUNaSyxPQUFDLEVBQUVDLElBQUksQ0FBSkEsTUFBV0EsSUFBSSxDQUFKQSxXQUFYQSxPQURTO0FBRVpDLE9BQUMsRUFBRUwsTUFBTSxDQUFOQTtBQUZTLEtBQWRGO0FBREZJOztBQU9BLE1BQUlJLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEtBQTBDO0FBQUEsUUFBN0JDLElBQTZCLHVFQUF0QixNQUFzQjtBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUMxREEsV0FBTyxHQUFHLEtBQUssQ0FBTCxjQUFvQjtBQUM1QkMsWUFBTSxFQUFFO0FBQ05DLGFBQUssRUFBRSxDQUFDO0FBQ05DLGVBQUssRUFBRTtBQUNMQyx5QkFBYSxFQUFFO0FBRFY7QUFERCxTQUFELENBREQ7QUFNTkMsYUFBSyxFQUFFLENBQUM7QUFDTkMsbUJBQVMsRUFBRTtBQUNUQyxtQkFBTyxFQUFFO0FBREEsV0FETDtBQUlOUixjQUFJLEVBSkU7QUFLTlMsc0JBQVksRUFMTjtBQU1OQyxjQUFJLEVBQUU7QUFDSkMsZ0JBQUksRUFEQTtBQUVKQyxvQkFBUSxFQUZKO0FBR0pDLG9CQUFRLEVBSEo7QUFJSkMsMEJBQWMsRUFBRTtBQUNkQyxpQkFBRyxFQUFFO0FBRFM7QUFKWjtBQU5BLFNBQUQ7QUFORDtBQURvQixLQUFwQixFQUFWZCxPQUFVLENBQVZBO0FBeUJBLFFBQUllLElBQUksR0FBRztBQUNUQyxjQUFRLEVBQUUsQ0FBQztBQUNUQyxhQUFLLEVBREk7QUFFVEYsWUFBSSxFQUFFekI7QUFGRyxPQUFEO0FBREQsS0FBWDtBQU9BNEIsVUFBTSxDQUFOQTtBQWpDRjs7QUFvQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsS0FBMkM7QUFBQSxRQUE5QnBCLElBQThCLHVFQUF2QixPQUF1QjtBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUM1RCxRQUFJZSxJQUFJLEdBQUc7QUFDVEssWUFBTSxFQUFFLHdFQURDLFNBQ0QsQ0FEQztBQUVUSixjQUFRLEVBQUUsQ0FBQztBQUNUQyxhQUFLLEVBREk7QUFFVEYsWUFBSSxFQUFFLDZCQUZHLEVBRUgsQ0FGRztBQUdUTSx1QkFBZSxFQUhOO0FBSVRDLG1CQUFXLEVBQUU7QUFKSixPQUFEO0FBRkQsS0FBWDtBQVVBSixVQUFNLENBQU5BO0FBbEVPLEdBdURULENBdkRTLENBcUVUOzs7QUFDQXBCLGFBQVcsQ0FBWEEsVUFBVyxDQUFYQTtBQUNBcUIsY0FBWSxDQUFaQSxlQUFZLENBQVpBO0FBdkVGLEsiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL3BhZ2Uuc3R1ZGVudC1kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGVhcm5pbmdzID0gW11cblxuICAvLyBDcmVhdGUgYSBkYXRlIHJhbmdlIGZvciB0aGUgbGFzdCA3IGRheXNcbiAgdmFyIHN0YXJ0ID0gbW9tZW50KCkuc3VidHJhY3QoNiwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyA3IGRheXMgYWdvXG4gIHZhciBlbmQgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyB0b2RheVxuICB2YXIgcmFuZ2UgPSBtb21lbnQucmFuZ2Uoc3RhcnQsIGVuZClcblxuICAvLyBDcmVhdGUgdGhlIGVhcm5pbmdzIGdyYXBoIGRhdGFcbiAgLy8gSXRlcmF0ZSB0aGUgZGF0ZSByYW5nZSBhbmQgYXNzaWduIGEgcmFuZG9tICgkKSBlYXJuaW5ncyB2YWx1ZSBmb3IgZWFjaCBkYXlcbiAgcmFuZ2UuYnkoJ2RheXMnLCBmdW5jdGlvbihtb21lbnQpIHtcbiAgICBlYXJuaW5ncy5wdXNoKHtcbiAgICAgIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyAxNSxcbiAgICAgIHg6IG1vbWVudC50b0RhdGUoKVxuICAgIH0pXG4gIH0pXG5cbiAgdmFyIFdlZWtJUUNoYXJ0ID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogNFxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICBkaXN0cmlidXRpb246ICdzZXJpZXMnLFxuICAgICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknLFxuICAgICAgICAgICAgc3RlcFNpemU6IDEsXG4gICAgICAgICAgICBhdXRvU2tpcDogZmFsc2UsXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybWF0czoge1xuICAgICAgICAgICAgICBkYXk6ICdkZGQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJFeHBlcmllbmNlIElRXCIsXG4gICAgICAgIGRhdGE6IGVhcm5pbmdzXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICB2YXIgVG9waWNJUUNoYXJ0ID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAncmFkYXInLCBvcHRpb25zID0ge30pIHtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJGbGludG9cIiwgXCJWdWUuanNcIiwgXCJTa2V0Y2hcIiwgXCJQcmljaXBsZVwiLCBcIkNTU1wiLCBcIkFuZ3VsYXJcIl0sXG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6IFwiRXhwZXJpZW5jZSBJUVwiLFxuICAgICAgICBkYXRhOiBbMzAsIDM1LCAzMywgMzIsIDMxLCAzMCwgMjgsIDM2XSxcbiAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnYmV2ZWwnLFxuICAgICAgICBsaW5lVGVuc2lvbjogLjFcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIC8vIENyZWF0ZSBDaGFydFxuICBXZWVrSVFDaGFydCgnI2lxQ2hhcnQnKVxuICBUb3BpY0lRQ2hhcnQoJyN0b3BpY0lxQ2hhcnQnKVxuXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==