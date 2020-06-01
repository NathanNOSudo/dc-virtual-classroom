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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/vendor/sweetalert.js":
/*!******************************************************!*\
  !*** ./node_modules/ui-huma/js/vendor/sweetalert.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fm_plugin_sweetalert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fm-plugin-sweetalert */ "./node_modules/ui-huma/node_modules/fm-plugin-sweetalert/js/sweetalert.js");
/* harmony import */ var fm_plugin_sweetalert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fm_plugin_sweetalert__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/ui-huma/node_modules/fm-plugin-sweetalert/js/sweetalert.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ui-huma/node_modules/fm-plugin-sweetalert/js/sweetalert.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var Swal = function Swal(element) {
    var options = {
      title: void 0 !== element.data('swal-title') ? element.data('swal-title') : 'Title',
      text: element.data('swal-text'),
      type: void 0 !== element.data('swal-type') ? element.data('swal-type') : null,
      html: element.data('swal-html'),
      showCancelButton: element.data('swal-show-cancel-button'),
      cancelButtonText: element.data('swal-cancel-button-text'),
      closeOnCancel: void 0 !== element.data('swal-close-on-cancel') ? element.data('swal-close-on-cancel') : true,
      confirmButtonText: element.data('swal-confirm-button-text'),
      confirmButtonColor: void 0 !== element.data('swal-confirm-button-color') ? element.data('swal-confirm-button-color') : settings.colors.primary[500],
      closeOnConfirm: void 0 !== element.data('swal-close-on-confirm') ? element.data('swal-close-on-confirm') : true
    };
    swal(options, function (isConfirm) {
      if (element.data('swal-confirm-cb') && isConfirm) {
        return Swal($(element.data('swal-confirm-cb')));
      }

      if (element.data('swal-cancel-cb')) {
        Swal($(element.data('swal-cancel-cb')));
      }
    });
  };

  $('[data-toggle="swal"]').on('click', function () {
    var element = $(this);
    Swal(element);
  });
})();

/***/ }),

/***/ "./src/js/vendor/sweetalert.js":
/*!*************************************!*\
  !*** ./src/js/vendor/sweetalert.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_vendor_sweetalert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/vendor/sweetalert */ "./node_modules/ui-huma/js/vendor/sweetalert.js");


/***/ }),

/***/ 46:
/*!*******************************************!*\
  !*** multi ./src/js/vendor/sweetalert.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/vendor/sweetalert.js */"./src/js/vendor/sweetalert.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvdmVuZG9yL3N3ZWV0YWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvbm9kZV9tb2R1bGVzL2ZtLXBsdWdpbi1zd2VldGFsZXJ0L2pzL3N3ZWV0YWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZlbmRvci9zd2VldGFsZXJ0LmpzIl0sIm5hbWVzIjpbIlN3YWwiLCJlbGVtZW50Iiwib3B0aW9ucyIsInRpdGxlIiwiZGF0YSIsInRleHQiLCJ0eXBlIiwiaHRtbCIsInNob3dDYW5jZWxCdXR0b24iLCJjYW5jZWxCdXR0b25UZXh0IiwiY2xvc2VPbkNhbmNlbCIsImNvbmZpcm1CdXR0b25UZXh0IiwiY29uZmlybUJ1dHRvbkNvbG9yIiwic2V0dGluZ3MiLCJjb2xvcnMiLCJwcmltYXJ5IiwiY2xvc2VPbkNvbmZpcm0iLCJzd2FsIiwiaXNDb25maXJtIiwiJCIsIm9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsQ0FBQyxZQUFVO0FBQ1Q7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsT0FBRCxFQUFhO0FBQ3hCLFFBQU1DLE9BQU8sR0FBRztBQUNkQyxXQUFLLEVBQUUsS0FBSyxDQUFMLEtBQVdGLE9BQU8sQ0FBQ0csSUFBUixDQUFhLFlBQWIsQ0FBWCxHQUNISCxPQUFPLENBQUNHLElBQVIsQ0FBYSxZQUFiLENBREcsR0FFSCxPQUhVO0FBSWRDLFVBQUksRUFBRUosT0FBTyxDQUFDRyxJQUFSLENBQWEsV0FBYixDQUpRO0FBS2RFLFVBQUksRUFBRSxLQUFLLENBQUwsS0FBV0wsT0FBTyxDQUFDRyxJQUFSLENBQWEsV0FBYixDQUFYLEdBQ0ZILE9BQU8sQ0FBQ0csSUFBUixDQUFhLFdBQWIsQ0FERSxHQUVGLElBUFU7QUFRZEcsVUFBSSxFQUFFTixPQUFPLENBQUNHLElBQVIsQ0FBYSxXQUFiLENBUlE7QUFTZEksc0JBQWdCLEVBQUVQLE9BQU8sQ0FBQ0csSUFBUixDQUFhLHlCQUFiLENBVEo7QUFVZEssc0JBQWdCLEVBQUVSLE9BQU8sQ0FBQ0csSUFBUixDQUFhLHlCQUFiLENBVko7QUFXZE0sbUJBQWEsRUFBRSxLQUFLLENBQUwsS0FBV1QsT0FBTyxDQUFDRyxJQUFSLENBQWEsc0JBQWIsQ0FBWCxHQUNYSCxPQUFPLENBQUNHLElBQVIsQ0FBYSxzQkFBYixDQURXLEdBRVgsSUFiVTtBQWNkTyx1QkFBaUIsRUFBRVYsT0FBTyxDQUFDRyxJQUFSLENBQWEsMEJBQWIsQ0FkTDtBQWVkUSx3QkFBa0IsRUFBRSxLQUFLLENBQUwsS0FBV1gsT0FBTyxDQUFDRyxJQUFSLENBQWEsMkJBQWIsQ0FBWCxHQUNoQkgsT0FBTyxDQUFDRyxJQUFSLENBQWEsMkJBQWIsQ0FEZ0IsR0FFaEJTLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEIsQ0FqQlU7QUFrQmRDLG9CQUFjLEVBQUUsS0FBSyxDQUFMLEtBQVdmLE9BQU8sQ0FBQ0csSUFBUixDQUFhLHVCQUFiLENBQVgsR0FDWkgsT0FBTyxDQUFDRyxJQUFSLENBQWEsdUJBQWIsQ0FEWSxHQUVaO0FBcEJVLEtBQWhCO0FBc0JBYSxRQUFJLENBQUNmLE9BQUQsRUFBVSxVQUFTZ0IsU0FBVCxFQUFvQjtBQUNoQyxVQUFJakIsT0FBTyxDQUFDRyxJQUFSLENBQWEsaUJBQWIsS0FBbUNjLFNBQXZDLEVBQWtEO0FBQ2hELGVBQU9sQixJQUFJLENBQUNtQixDQUFDLENBQUNsQixPQUFPLENBQUNHLElBQVIsQ0FBYSxpQkFBYixDQUFELENBQUYsQ0FBWDtBQUNEOztBQUNELFVBQUlILE9BQU8sQ0FBQ0csSUFBUixDQUFhLGdCQUFiLENBQUosRUFBb0M7QUFDbENKLFlBQUksQ0FBQ21CLENBQUMsQ0FBQ2xCLE9BQU8sQ0FBQ0csSUFBUixDQUFhLGdCQUFiLENBQUQsQ0FBRixDQUFKO0FBQ0Q7QUFDRixLQVBHLENBQUo7QUFRRCxHQS9CRDs7QUFpQ0FlLEdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCQyxFQUExQixDQUE2QixPQUE3QixFQUFzQyxZQUFXO0FBQy9DLFFBQUluQixPQUFPLEdBQUdrQixDQUFDLENBQUMsSUFBRCxDQUFmO0FBQ0FuQixRQUFJLENBQUNDLE9BQUQsQ0FBSjtBQUNELEdBSEQ7QUFLRCxDQXpDRCxJOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9zd2VldGFsZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0Nik7XG4iLCJpbXBvcnQgJ2ZtLXBsdWdpbi1zd2VldGFsZXJ0JyIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgY29uc3QgU3dhbCA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnc3dhbC10aXRsZScpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnc3dhbC10aXRsZScpIFxuICAgICAgICA6ICdUaXRsZScsXG4gICAgICB0ZXh0OiBlbGVtZW50LmRhdGEoJ3N3YWwtdGV4dCcpLFxuICAgICAgdHlwZTogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ3N3YWwtdHlwZScpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnc3dhbC10eXBlJykgXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGh0bWw6IGVsZW1lbnQuZGF0YSgnc3dhbC1odG1sJyksXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiBlbGVtZW50LmRhdGEoJ3N3YWwtc2hvdy1jYW5jZWwtYnV0dG9uJyksIFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogZWxlbWVudC5kYXRhKCdzd2FsLWNhbmNlbC1idXR0b24tdGV4dCcpLCBcbiAgICAgIGNsb3NlT25DYW5jZWw6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdzd2FsLWNsb3NlLW9uLWNhbmNlbCcpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnc3dhbC1jbG9zZS1vbi1jYW5jZWwnKSBcbiAgICAgICAgOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGVsZW1lbnQuZGF0YSgnc3dhbC1jb25maXJtLWJ1dHRvbi10ZXh0JyksIFxuICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnc3dhbC1jb25maXJtLWJ1dHRvbi1jb2xvcicpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnc3dhbC1jb25maXJtLWJ1dHRvbi1jb2xvcicpIFxuICAgICAgICA6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICBjbG9zZU9uQ29uZmlybTogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ3N3YWwtY2xvc2Utb24tY29uZmlybScpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnc3dhbC1jbG9zZS1vbi1jb25maXJtJykgXG4gICAgICAgIDogdHJ1ZVxuICAgIH1cbiAgICBzd2FsKG9wdGlvbnMsIGZ1bmN0aW9uKGlzQ29uZmlybSkge1xuICAgICAgaWYgKGVsZW1lbnQuZGF0YSgnc3dhbC1jb25maXJtLWNiJykgJiYgaXNDb25maXJtKSB7XG4gICAgICAgIHJldHVybiBTd2FsKCQoZWxlbWVudC5kYXRhKCdzd2FsLWNvbmZpcm0tY2InKSkpXG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5kYXRhKCdzd2FsLWNhbmNlbC1jYicpKSB7XG4gICAgICAgIFN3YWwoJChlbGVtZW50LmRhdGEoJ3N3YWwtY2FuY2VsLWNiJykpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAkKCdbZGF0YS10b2dnbGU9XCJzd2FsXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgU3dhbChlbGVtZW50KVxuICB9KVxuXG59KSgpIiwiaW1wb3J0ICd1aS1odW1hL2pzL3ZlbmRvci9zd2VldGFsZXJ0JyJdLCJzb3VyY2VSb290IjoiIn0=