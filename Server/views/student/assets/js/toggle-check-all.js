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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/toggle-check-all.js":
/*!*****************************************************!*\
  !*** ./node_modules/ui-huma/js/toggle-check-all.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/ui-huma/node_modules/@babel/runtime/helpers/typeof.js");

var toggleCheckAllComponent = function toggleCheckAllComponent() {
  return {
    properties: {
      target: {
        reflectToAttribute: true
      }
    },
    listeners: ['_onClick(click)'],

    /**
     * Fire a DOM Event on the HTMLElement
     * @param  {String} eventName The event name
     */
    dispatchEvent: function dispatchEvent(eventName, element) {
      var event;
      var bubbles = false;

      if ('CustomEvent' in window && _typeof(window.CustomEvent) === 'object') {
        try {
          event = new CustomEvent(eventName, {
            bubbles: bubbles,
            cancelable: false
          });
        } catch (e) {
          event = new this.CustomEvent_(eventName, {
            bubbles: bubbles,
            cancelable: false
          });
        }
      } else {
        event = document.createEvent('Event');
        event.initEvent(eventName, bubbles, true);
      }

      element.dispatchEvent(event);
    },
    CustomEvent_: function CustomEvent_(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    },

    get $target() {
      return document.querySelector(this.target);
    },

    get $targets() {
      return this.$target.querySelectorAll('[type="checkbox"]');
    },

    _onClick: function _onClick(e) {
      var _this = this;

      if (this.element.type && this.element.type === 'checkbox') {
        this._checked = this.element.checked;
      } else {
        this._checked = !this._checked;
        e.preventDefault();
      }

      this.$targets.forEach(function (i) {
        i.checked = _this._checked;

        _this.dispatchEvent('change', i);
      });
    }
  };
};

domFactory.handler.register('toggle-check-all', toggleCheckAllComponent);

/***/ }),

/***/ "./node_modules/ui-huma/node_modules/@babel/runtime/helpers/typeof.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ui-huma/node_modules/@babel/runtime/helpers/typeof.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/js/toggle-check-all.js":
/*!************************************!*\
  !*** ./src/js/toggle-check-all.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_toggle_check_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/toggle-check-all */ "./node_modules/ui-huma/js/toggle-check-all.js");
/* harmony import */ var ui_huma_js_toggle_check_all__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_toggle_check_all__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 32:
/*!******************************************!*\
  !*** multi ./src/js/toggle-check-all.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/toggle-check-all.js */"./src/js/toggle-check-all.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvdG9nZ2xlLWNoZWNrLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZ2dsZS1jaGVjay1hbGwuanMiXSwibmFtZXMiOlsidG9nZ2xlQ2hlY2tBbGxDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0IiwicmVmbGVjdFRvQXR0cmlidXRlIiwibGlzdGVuZXJzIiwiZGlzcGF0Y2hFdmVudCIsImV2ZW50TmFtZSIsImVsZW1lbnQiLCJldmVudCIsImJ1YmJsZXMiLCJ3aW5kb3ciLCJDdXN0b21FdmVudCIsImNhbmNlbGFibGUiLCJlIiwiQ3VzdG9tRXZlbnRfIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsInBhcmFtcyIsImRldGFpbCIsInVuZGVmaW5lZCIsImV2dCIsImluaXRDdXN0b21FdmVudCIsIiR0YXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwiJHRhcmdldHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX29uQ2xpY2siLCJ0eXBlIiwiX2NoZWNrZWQiLCJjaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJmb3JFYWNoIiwiaSIsImRvbUZhY3RvcnkiLCJoYW5kbGVyIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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dEI7QUFDQWhCLFNBQUMsQ0FBQ2tCLGNBQUY7QUFDRDs7QUFFRCxXQUFLTixRQUFMLENBQWNPLE9BQWQsQ0FBc0IsVUFBQUMsQ0FBQyxFQUFJO0FBQ3pCQSxTQUFDLENBQUNILE9BQUYsR0FBWSxLQUFJLENBQUNELFFBQWpCOztBQUNBLGFBQUksQ0FBQ3hCLGFBQUwsQ0FBbUIsUUFBbkIsRUFBNkI0QixDQUE3QjtBQUNELE9BSEQ7QUFJRDtBQW5Fb0MsR0FBUDtBQUFBLENBQWhDOztBQXNFQUMsVUFBVSxDQUFDQyxPQUFYLENBQW1CQyxRQUFuQixDQUE0QixrQkFBNUIsRUFBZ0RwQyx1QkFBaEQsRTs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy90b2dnbGUtY2hlY2stYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMik7XG4iLCJjb25zdCB0b2dnbGVDaGVja0FsbENvbXBvbmVudCA9ICgpID0+ICh7XG4gIHByb3BlcnRpZXM6IHtcbiAgICB0YXJnZXQ6IHtcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgIH0sXG4gIH0sXG5cbiAgbGlzdGVuZXJzOiBbXG4gICAgJ19vbkNsaWNrKGNsaWNrKScsXG4gIF0sXG5cbiAgLyoqXG4gICAqIEZpcmUgYSBET00gRXZlbnQgb24gdGhlIEhUTUxFbGVtZW50XG4gICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnROYW1lIFRoZSBldmVudCBuYW1lXG4gICAqL1xuICBkaXNwYXRjaEV2ZW50IChldmVudE5hbWUsIGVsZW1lbnQpIHtcbiAgICBsZXQgZXZlbnRcbiAgICBsZXQgYnViYmxlcyA9IGZhbHNlXG4gICAgaWYgKCdDdXN0b21FdmVudCcgaW4gd2luZG93ICYmIHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICAgICAgICBidWJibGVzLFxuICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlXG4gICAgICAgIH0pIFxuICAgICAgfSBcbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGV2ZW50ID0gbmV3IHRoaXMuQ3VzdG9tRXZlbnRfKGV2ZW50TmFtZSwge1xuICAgICAgICAgIGJ1YmJsZXMsXG4gICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG4gICAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCBidWJibGVzLCB0cnVlKVxuICAgIH1cbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gIH0sXG5cbiAgQ3VzdG9tRXZlbnRfIChldmVudCwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKVxuICAgIHJldHVybiBldnRcbiAgfSxcblxuICBnZXQgJHRhcmdldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50YXJnZXQpXG4gIH0sXG5cbiAgZ2V0ICR0YXJnZXRzICgpIHtcbiAgICByZXR1cm4gdGhpcy4kdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKVxuICB9LFxuXG4gIF9vbkNsaWNrIChlKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC50eXBlICYmIHRoaXMuZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gdGhpcy5lbGVtZW50LmNoZWNrZWRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gIXRoaXMuX2NoZWNrZWRcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuJHRhcmdldHMuZm9yRWFjaChpID0+IHtcbiAgICAgIGkuY2hlY2tlZCA9IHRoaXMuX2NoZWNrZWRcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2hhbmdlJywgaSlcbiAgICB9KVxuICB9XG59KVxuXG5kb21GYWN0b3J5LmhhbmRsZXIucmVnaXN0ZXIoJ3RvZ2dsZS1jaGVjay1hbGwnLCB0b2dnbGVDaGVja0FsbENvbXBvbmVudCkiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0ICd1aS1odW1hL2pzL3RvZ2dsZS1jaGVjay1hbGwnIl0sInNvdXJjZVJvb3QiOiIifQ==