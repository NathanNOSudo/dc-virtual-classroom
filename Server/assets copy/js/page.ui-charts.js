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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/page.ui-charts.js":
/*!***************************************************!*\
  !*** ./node_modules/ui-huma/js/page.ui-charts.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var Performance = function Performance(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Orders = function Orders(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'roundedBar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales",
        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
        barThickness: 20
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Devices = function Devices(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'doughnut';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = {
      labels: ["Desktop", "Tablet", "Mobile"],
      datasets: [{
        data: [60, 25, 15],
        backgroundColor: [],
        hoverBorderColor: settings.colors.white
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
        pointHoverBorderColor: settings.colors.accent[400],
        pointHoverBackgroundColor: settings.colors.white
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
        borderWidth: 0
      }]
    };
    Charts.create(id, type, options, data);
  }; ///////////////////
  // Create Charts //
  ///////////////////


  Progress('#inTimeProgressChart', 24.84, 27);
  Progress('#lateProgressChart', 6.21, 27);
  Progress('#absentsProgressChart', 1.62, 27);
  Progress('#vacationProgressChart', 0.27, 27);
  Performance('#performanceChart');
  Performance('#performanceAreaChart', 'area');
  Orders('#ordersChart');
  Orders('#ordersChartSwitch');
  Devices('#devicesChart');
  TopicIQChart('#topicIqChart');
  $('[data-toggle="chart"]:checked').each(function (index, el) {
    Charts.add($(el));
  });
})();

/***/ }),

/***/ "./src/js/page.ui-charts.js":
/*!**********************************!*\
  !*** ./src/js/page.ui-charts.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_page_ui_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/page.ui-charts */ "./node_modules/ui-huma/js/page.ui-charts.js");
/* harmony import */ var ui_huma_js_page_ui_charts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_page_ui_charts__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 24:
/*!****************************************!*\
  !*** multi ./src/js/page.ui-charts.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/page.ui-charts.js */"./src/js/page.ui-charts.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvcGFnZS51aS1jaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UudWktY2hhcnRzLmpzIl0sIm5hbWVzIjpbIlBlcmZvcm1hbmNlIiwiaWQiLCJ0eXBlIiwib3B0aW9ucyIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiQ2hhcnRzIiwiY3JlYXRlIiwiT3JkZXJzIiwiYmFyVGhpY2tuZXNzIiwiRGV2aWNlcyIsImJhY2tncm91bmRDb2xvciIsImhvdmVyQm9yZGVyQ29sb3IiLCJzZXR0aW5ncyIsImNvbG9ycyIsIndoaXRlIiwiVG9waWNJUUNoYXJ0IiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwiYWNjZW50IiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsIlByb2dyZXNzIiwidmFsdWUiLCJ0b3RhbCIsIkNoYXJ0IiwiaGVscGVycyIsIm1lcmdlIiwiY3V0b3V0UGVyY2VudGFnZSIsImFzcGVjdFJhdGlvIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJib3JkZXJXaWR0aCIsIiQiLCJlYWNoIiwiaW5kZXgiLCJlbCIsImFkZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsWUFBVTtBQUNUOztBQUVBLE1BQUlBLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNDLEVBQVQsRUFBMEM7QUFBQSxRQUE3QkMsSUFBNkIsdUVBQXRCLE1BQXNCO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQzFELFFBQUlDLElBQUksR0FBRztBQUNUQyxZQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsRUFBZ0UsS0FBaEUsRUFBdUUsS0FBdkUsRUFBOEUsS0FBOUUsQ0FEQztBQUVUQyxjQUFRLEVBQUUsQ0FBQztBQUNUQyxhQUFLLEVBQUUsYUFERTtBQUVUSCxZQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLENBQVIsRUFBVyxFQUFYLEVBQWUsRUFBZixFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQixFQUEvQixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QyxFQUEyQyxFQUEzQztBQUZHLE9BQUQ7QUFGRCxLQUFYO0FBUUFJLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjUixFQUFkLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUNDLElBQWpDO0FBQ0QsR0FWRDs7QUFZQSxNQUFJTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFTVCxFQUFULEVBQWdEO0FBQUEsUUFBbkNDLElBQW1DLHVFQUE1QixZQUE0QjtBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUMzRCxRQUFJQyxJQUFJLEdBQUc7QUFDVEMsWUFBTSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQXVFLEtBQXZFLEVBQThFLEtBQTlFLENBREM7QUFFVEMsY0FBUSxFQUFFLENBQUM7QUFDVEMsYUFBSyxFQUFFLE9BREU7QUFFVEgsWUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxFQUFqQyxFQUFxQyxFQUFyQyxFQUF5QyxFQUF6QyxFQUE2QyxFQUE3QyxDQUZHO0FBR1RPLG9CQUFZLEVBQUU7QUFITCxPQUFEO0FBRkQsS0FBWDtBQVNBSCxVQUFNLENBQUNDLE1BQVAsQ0FBY1IsRUFBZCxFQUFrQkMsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDQyxJQUFqQztBQUNELEdBWEQ7O0FBYUEsTUFBSVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBU1gsRUFBVCxFQUE4QztBQUFBLFFBQWpDQyxJQUFpQyx1RUFBMUIsVUFBMEI7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFDMUQsUUFBSUMsSUFBSSxHQUFHO0FBQ1RDLFlBQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFFBQXRCLENBREM7QUFFVEMsY0FBUSxFQUFFLENBQUM7QUFDVEYsWUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULENBREc7QUFFVFMsdUJBQWUsRUFBRSxFQUZSO0FBR1RDLHdCQUFnQixFQUFFQyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDO0FBSHpCLE9BQUQ7QUFGRCxLQUFYO0FBU0FULFVBQU0sQ0FBQ0MsTUFBUCxDQUFjUixFQUFkLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUNDLElBQWpDO0FBQ0QsR0FYRDs7QUFhQSxNQUFJYyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFTakIsRUFBVCxFQUEyQztBQUFBLFFBQTlCQyxJQUE4Qix1RUFBdkIsT0FBdUI7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFDNUQsUUFBSUMsSUFBSSxHQUFHO0FBQ1RDLFlBQU0sRUFBRSxDQUFDLFlBQUQsRUFBZSxNQUFmLEVBQXVCLFFBQXZCLEVBQWlDLFFBQWpDLEVBQTJDLFFBQTNDLEVBQXFELFVBQXJELEVBQWlFLEtBQWpFLEVBQXdFLFNBQXhFLENBREM7QUFFVEMsY0FBUSxFQUFFLENBQUM7QUFDVEMsYUFBSyxFQUFFLGVBREU7QUFFVEgsWUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixDQUZHO0FBR1RlLDZCQUFxQixFQUFFSixRQUFRLENBQUNDLE1BQVQsQ0FBZ0JJLE1BQWhCLENBQXVCLEdBQXZCLENBSGQ7QUFJVEMsaUNBQXlCLEVBQUVOLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkM7QUFKbEMsT0FBRDtBQUZELEtBQVg7QUFVQVQsVUFBTSxDQUFDQyxNQUFQLENBQWNSLEVBQWQsRUFBa0JDLElBQWxCLEVBQXdCQyxPQUF4QixFQUFpQ0MsSUFBakM7QUFDRCxHQVpEOztBQWNBLE1BQUlrQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTckIsRUFBVCxFQUFhc0IsS0FBYixFQUFvQkMsS0FBcEIsRUFBNEQ7QUFBQSxRQUFqQ3RCLElBQWlDLHVFQUExQixVQUEwQjtBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUN6RUEsV0FBTyxHQUFHc0IsS0FBSyxDQUFDQyxPQUFOLENBQWNDLEtBQWQsQ0FBb0I7QUFDNUJDLHNCQUFnQixFQUFFLEVBRFU7QUFFNUJDLGlCQUFXLEVBQUUsQ0FGZTtBQUc1QkMsZ0JBQVUsRUFBRSxLQUhnQjtBQUk1QkMseUJBQW1CLEVBQUU7QUFKTyxLQUFwQixFQUtQNUIsT0FMTyxDQUFWO0FBT0EsUUFBSUMsSUFBSSxHQUFHO0FBQ1RFLGNBQVEsRUFBRSxDQUFDO0FBQ1RGLFlBQUksRUFBRSxDQUFDbUIsS0FBRCxFQUFRQyxLQUFLLEdBQUdELEtBQWhCLENBREc7QUFFVFMsbUJBQVcsRUFBRTtBQUZKLE9BQUQ7QUFERCxLQUFYO0FBT0F4QixVQUFNLENBQUNDLE1BQVAsQ0FBY1IsRUFBZCxFQUFrQkMsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDQyxJQUFqQztBQUNELEdBaEJELENBdkRTLENBeUVUO0FBQ0E7QUFDQTs7O0FBRUFrQixVQUFRLENBQUMsc0JBQUQsRUFBeUIsS0FBekIsRUFBZ0MsRUFBaEMsQ0FBUjtBQUNBQSxVQUFRLENBQUMsb0JBQUQsRUFBdUIsSUFBdkIsRUFBNkIsRUFBN0IsQ0FBUjtBQUNBQSxVQUFRLENBQUMsdUJBQUQsRUFBMEIsSUFBMUIsRUFBZ0MsRUFBaEMsQ0FBUjtBQUNBQSxVQUFRLENBQUMsd0JBQUQsRUFBMkIsSUFBM0IsRUFBaUMsRUFBakMsQ0FBUjtBQUVBdEIsYUFBVyxDQUFDLG1CQUFELENBQVg7QUFFQUEsYUFBVyxDQUFDLHVCQUFELEVBQTBCLE1BQTFCLENBQVg7QUFFQVUsUUFBTSxDQUFDLGNBQUQsQ0FBTjtBQUVBQSxRQUFNLENBQUMsb0JBQUQsQ0FBTjtBQUVBRSxTQUFPLENBQUMsZUFBRCxDQUFQO0FBRUFNLGNBQVksQ0FBQyxlQUFELENBQVo7QUFFQWUsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNDLElBQW5DLENBQXdDLFVBQVVDLEtBQVYsRUFBaUJDLEVBQWpCLEVBQXFCO0FBQzNENUIsVUFBTSxDQUFDNkIsR0FBUCxDQUFXSixDQUFDLENBQUNHLEVBQUQsQ0FBWjtBQUNELEdBRkQ7QUFJRCxDQWxHRCxJOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUEiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL3BhZ2UudWktY2hhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuICBcbiAgdmFyIFBlcmZvcm1hbmNlID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSkge1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgbGFiZWxzOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl0sXG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6IFwiUGVyZm9ybWFuY2VcIixcbiAgICAgICAgZGF0YTogWzAsIDEwLCA1LCAxNSwgMTAsIDIwLCAxNSwgMjUsIDIwLCAzMCwgMjUsIDQwXVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgdmFyIE9yZGVycyA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ3JvdW5kZWRCYXInLCBvcHRpb25zID0ge30pIHtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIlNhbGVzXCIsXG4gICAgICAgIGRhdGE6IFsyNSwgMjAsIDMwLCAyMiwgMTcsIDEwLCAxOCwgMjYsIDI4LCAyNiwgMjAsIDMyXSxcbiAgICAgICAgYmFyVGhpY2tuZXNzOiAyMFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgdmFyIERldmljZXMgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdkb3VnaG51dCcsIG9wdGlvbnMgPSB7fSkge1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgbGFiZWxzOiBbXCJEZXNrdG9wXCIsIFwiVGFibGV0XCIsIFwiTW9iaWxlXCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGRhdGE6IFs2MCwgMjUsIDE1XSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXSxcbiAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLndoaXRlXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICB2YXIgVG9waWNJUUNoYXJ0ID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAncmFkYXInLCBvcHRpb25zID0ge30pIHtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJGbGludG9cIiwgXCJWdWUuanNcIiwgXCJTa2V0Y2hcIiwgXCJQcmljaXBsZVwiLCBcIkNTU1wiLCBcIkFuZ3VsYXJcIl0sXG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6IFwiRXhwZXJpZW5jZSBJUVwiLFxuICAgICAgICBkYXRhOiBbMzAsIDM1LCAzMywgMzIsIDMxLCAzMCwgMjgsIDM2XSxcbiAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBzZXR0aW5ncy5jb2xvcnMuYWNjZW50WzQwMF0sXG4gICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy53aGl0ZVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgdmFyIFByb2dyZXNzID0gZnVuY3Rpb24oaWQsIHZhbHVlLCB0b3RhbCwgdHlwZSA9ICdkb3VnaG51dCcsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDg1LFxuICAgICAgYXNwZWN0UmF0aW86IDEsXG4gICAgICByZXNwb25zaXZlOiBmYWxzZSxcbiAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGRhdGE6IFt2YWx1ZSwgdG90YWwgLSB2YWx1ZV0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIENyZWF0ZSBDaGFydHMgLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIFByb2dyZXNzKCcjaW5UaW1lUHJvZ3Jlc3NDaGFydCcsIDI0Ljg0LCAyNylcbiAgUHJvZ3Jlc3MoJyNsYXRlUHJvZ3Jlc3NDaGFydCcsIDYuMjEsIDI3KVxuICBQcm9ncmVzcygnI2Fic2VudHNQcm9ncmVzc0NoYXJ0JywgMS42MiwgMjcpXG4gIFByb2dyZXNzKCcjdmFjYXRpb25Qcm9ncmVzc0NoYXJ0JywgMC4yNywgMjcpXG5cbiAgUGVyZm9ybWFuY2UoJyNwZXJmb3JtYW5jZUNoYXJ0JylcbiAgXG4gIFBlcmZvcm1hbmNlKCcjcGVyZm9ybWFuY2VBcmVhQ2hhcnQnLCAnYXJlYScpXG5cbiAgT3JkZXJzKCcjb3JkZXJzQ2hhcnQnKVxuXG4gIE9yZGVycygnI29yZGVyc0NoYXJ0U3dpdGNoJylcblxuICBEZXZpY2VzKCcjZGV2aWNlc0NoYXJ0JylcblxuICBUb3BpY0lRQ2hhcnQoJyN0b3BpY0lxQ2hhcnQnKVxuXG4gICQoJ1tkYXRhLXRvZ2dsZT1cImNoYXJ0XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICBDaGFydHMuYWRkKCQoZWwpKVxuICB9KVxuXG59KSgpIiwiaW1wb3J0ICd1aS1odW1hL2pzL3BhZ2UudWktY2hhcnRzJyJdLCJzb3VyY2VSb290IjoiIn0=