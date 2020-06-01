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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var accordionComponent = function accordionComponent() {
  return {
    _onShow: function _onShow(e) {
      if ($(e.target).hasClass('accordion__menu')) {
        $(e.target).closest('.accordion__item').addClass('open');
      }
    },
    _onHide: function _onHide(e) {
      if ($(e.target).hasClass('accordion__menu')) {
        $(e.target).closest('.accordion__item').removeClass('open');
      }
    },
    init: function init() {
      $(this.element).on('show.bs.collapse', this._onShow);
      $(this.element).on('hide.bs.collapse', this._onHide);
    },
    destroy: function destroy() {
      $(this.element).off('show.bs.collapse', this._onShow);
      $(this.element).off('hide.bs.collapse', this._onHide);
    }
  };
};

domFactory.handler.register('accordion', accordionComponent);

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/preloader.scss":
/*!*********************************!*\
  !*** ./src/sass/preloader.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/bootstrap-datepicker.scss":
/*!***************************************************!*\
  !*** ./src/sass/vendor/bootstrap-datepicker.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/bootstrap-timepicker.scss":
/*!***************************************************!*\
  !*** ./src/sass/vendor/bootstrap-timepicker.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/bootstrap-touchspin.scss":
/*!**************************************************!*\
  !*** ./src/sass/vendor/bootstrap-touchspin.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/dropzone.scss":
/*!***************************************!*\
  !*** ./src/sass/vendor/dropzone.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/fancytree.scss":
/*!****************************************!*\
  !*** ./src/sass/vendor/fancytree.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/flatpickr-airbnb.scss":
/*!***********************************************!*\
  !*** ./src/sass/vendor/flatpickr-airbnb.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/flatpickr.scss":
/*!****************************************!*\
  !*** ./src/sass/vendor/flatpickr.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/fontawesome.scss":
/*!******************************************!*\
  !*** ./src/sass/vendor/fontawesome.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/fullcalendar.scss":
/*!*******************************************!*\
  !*** ./src/sass/vendor/fullcalendar.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/ion-rangeslider.scss":
/*!**********************************************!*\
  !*** ./src/sass/vendor/ion-rangeslider.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/jvectormap.scss":
/*!*****************************************!*\
  !*** ./src/sass/vendor/jvectormap.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/material-icons.scss":
/*!*********************************************!*\
  !*** ./src/sass/vendor/material-icons.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/nestable.scss":
/*!***************************************!*\
  !*** ./src/sass/vendor/nestable.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/quill.scss":
/*!************************************!*\
  !*** ./src/sass/vendor/quill.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/select2.scss":
/*!**************************************!*\
  !*** ./src/sass/vendor/select2.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/sweetalert.scss":
/*!*****************************************!*\
  !*** ./src/sass/vendor/sweetalert.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor/toastr.scss":
/*!*************************************!*\
  !*** ./src/sass/vendor/toastr.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/accordion.js ./src/sass/app.scss ./src/sass/preloader.scss ./src/sass/vendor/bootstrap-datepicker.scss ./src/sass/vendor/bootstrap-timepicker.scss ./src/sass/vendor/bootstrap-touchspin.scss ./src/sass/vendor/dropzone.scss ./src/sass/vendor/fancytree.scss ./src/sass/vendor/flatpickr-airbnb.scss ./src/sass/vendor/flatpickr.scss ./src/sass/vendor/fontawesome.scss ./src/sass/vendor/fullcalendar.scss ./src/sass/vendor/ion-rangeslider.scss ./src/sass/vendor/jvectormap.scss ./src/sass/vendor/material-icons.scss ./src/sass/vendor/nestable.scss ./src/sass/vendor/quill.scss ./src/sass/vendor/select2.scss ./src/sass/vendor/sweetalert.scss ./src/sass/vendor/toastr.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/accordion.js */"./src/js/accordion.js");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/app.scss */"./src/sass/app.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/preloader.scss */"./src/sass/preloader.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/bootstrap-datepicker.scss */"./src/sass/vendor/bootstrap-datepicker.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/bootstrap-timepicker.scss */"./src/sass/vendor/bootstrap-timepicker.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/bootstrap-touchspin.scss */"./src/sass/vendor/bootstrap-touchspin.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/dropzone.scss */"./src/sass/vendor/dropzone.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/fancytree.scss */"./src/sass/vendor/fancytree.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/flatpickr-airbnb.scss */"./src/sass/vendor/flatpickr-airbnb.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/flatpickr.scss */"./src/sass/vendor/flatpickr.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/fontawesome.scss */"./src/sass/vendor/fontawesome.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/fullcalendar.scss */"./src/sass/vendor/fullcalendar.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/ion-rangeslider.scss */"./src/sass/vendor/ion-rangeslider.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/jvectormap.scss */"./src/sass/vendor/jvectormap.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/material-icons.scss */"./src/sass/vendor/material-icons.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/nestable.scss */"./src/sass/vendor/nestable.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/quill.scss */"./src/sass/vendor/quill.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/select2.scss */"./src/sass/vendor/select2.scss");
__webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/sweetalert.scss */"./src/sass/vendor/sweetalert.scss");
module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/sass/vendor/toastr.scss */"./src/sass/vendor/toastr.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9hcHAuc2Nzcz8xM2NmIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3ByZWxvYWRlci5zY3NzPzlmY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyLnNjc3M/OTAzNCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy92ZW5kb3IvYm9vdHN0cmFwLXRpbWVwaWNrZXIuc2Nzcz83YjcyIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3ZlbmRvci9ib290c3RyYXAtdG91Y2hzcGluLnNjc3M/ZjM4NSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy92ZW5kb3IvZHJvcHpvbmUuc2Nzcz8zYmI4Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3ZlbmRvci9mYW5jeXRyZWUuc2Nzcz8zOGJhIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3ZlbmRvci9mbGF0cGlja3ItYWlyYm5iLnNjc3M/YjAyNiIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy92ZW5kb3IvZmxhdHBpY2tyLnNjc3M/YmY5YSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy92ZW5kb3IvZm9udGF3ZXNvbWUuc2Nzcz83OGExIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3ZlbmRvci9mdWxsY2FsZW5kYXIuc2Nzcz8wMjdhIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3ZlbmRvci9pb24tcmFuZ2VzbGlkZXIuc2Nzcz84MjljIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3ZlbmRvci9qdmVjdG9ybWFwLnNjc3M/ZGM2OSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy92ZW5kb3IvbWF0ZXJpYWwtaWNvbnMuc2Nzcz8yODk4Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL3ZlbmRvci9uZXN0YWJsZS5zY3NzP2JjNzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdmVuZG9yL3F1aWxsLnNjc3M/ZjkzOCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy92ZW5kb3Ivc2VsZWN0Mi5zY3NzPzRhMWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdmVuZG9yL3N3ZWV0YWxlcnQuc2Nzcz9lNzdlIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3ZlbmRvci90b2FzdHIuc2Nzcz9lYWEzIl0sIm5hbWVzIjpbImFjY29yZGlvbkNvbXBvbmVudCIsIl9vblNob3ciLCIkIiwiZSIsIl9vbkhpZGUiLCJpbml0IiwiZGVzdHJveSIsImRvbUZhY3RvcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsU0FBTztBQUNoQ0MsV0FEZ0Msc0JBQ3BCO0FBQ1YsVUFBSUMsQ0FBQyxDQUFDQyxDQUFDLENBQUhELE1BQUMsQ0FBREEsVUFBSixpQkFBSUEsQ0FBSixFQUE2QztBQUMzQ0EsU0FBQyxDQUFDQyxDQUFDLENBQUhELE1BQUMsQ0FBREE7QUFDRDtBQUo2QjtBQU1oQ0UsV0FOZ0Msc0JBTXBCO0FBQ1YsVUFBSUYsQ0FBQyxDQUFDQyxDQUFDLENBQUhELE1BQUMsQ0FBREEsVUFBSixpQkFBSUEsQ0FBSixFQUE2QztBQUMzQ0EsU0FBQyxDQUFDQyxDQUFDLENBQUhELE1BQUMsQ0FBREE7QUFDRDtBQVQ2QjtBQVdoQ0csUUFYZ0Msa0JBV3hCO0FBQ05ILE9BQUMsQ0FBQyxLQUFGQSxPQUFDLENBQURBLHdCQUF1QyxLQUF2Q0E7QUFDQUEsT0FBQyxDQUFDLEtBQUZBLE9BQUMsQ0FBREEsd0JBQXVDLEtBQXZDQTtBQWI4QjtBQWVoQ0ksV0FmZ0MscUJBZXJCO0FBQ1RKLE9BQUMsQ0FBQyxLQUFGQSxPQUFDLENBQURBLHlCQUF3QyxLQUF4Q0E7QUFDQUEsT0FBQyxDQUFDLEtBQUZBLE9BQUMsQ0FBREEseUJBQXdDLEtBQXhDQTtBQUNEO0FBbEIrQixHQUFQO0FBQTNCOztBQXFCQUssVUFBVSxDQUFWQSxrRDs7Ozs7Ozs7Ozs7QUNyQkEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL2FjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBhY2NvcmRpb25Db21wb25lbnQgPSAoKSA9PiAoe1xuICBfb25TaG93IChlKSB7XG4gICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdhY2NvcmRpb25fX21lbnUnKSkge1xuICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnLmFjY29yZGlvbl9faXRlbScpLmFkZENsYXNzKCdvcGVuJylcbiAgICB9XG4gIH0sXG4gIF9vbkhpZGUgKGUpIHtcbiAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2FjY29yZGlvbl9fbWVudScpKSB7XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuYWNjb3JkaW9uX19pdGVtJykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIH1cbiAgfSxcbiAgaW5pdCAoKSB7XG4gICAgJCh0aGlzLmVsZW1lbnQpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgdGhpcy5fb25TaG93KVxuICAgICQodGhpcy5lbGVtZW50KS5vbignaGlkZS5icy5jb2xsYXBzZScsIHRoaXMuX29uSGlkZSlcbiAgfSxcbiAgZGVzdHJveSAoKSB7XG4gICAgJCh0aGlzLmVsZW1lbnQpLm9mZignc2hvdy5icy5jb2xsYXBzZScsIHRoaXMuX29uU2hvdylcbiAgICAkKHRoaXMuZWxlbWVudCkub2ZmKCdoaWRlLmJzLmNvbGxhcHNlJywgdGhpcy5fb25IaWRlKVxuICB9XG59KVxuXG5kb21GYWN0b3J5LmhhbmRsZXIucmVnaXN0ZXIoJ2FjY29yZGlvbicsIGFjY29yZGlvbkNvbXBvbmVudCkiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=