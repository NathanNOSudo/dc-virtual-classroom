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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/vendor/fancytree.js":
/*!*****************************************************!*\
  !*** ./node_modules/ui-huma/js/vendor/fancytree.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fm_plugin_fancytree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fm-plugin-fancytree */ "./node_modules/ui-huma/node_modules/fm-plugin-fancytree/js/fancytree.js");
/* harmony import */ var fm_plugin_fancytree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fm_plugin_fancytree__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/ui-huma/node_modules/fm-plugin-fancytree/js/fancytree.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ui-huma/node_modules/fm-plugin-fancytree/js/fancytree.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  var tree_glyph_options = {
    map: {
      checkbox: "fa fa-square-o fa-fw",
      checkboxSelected: "fa fa-check-square fa-fw",
      checkboxUnknown: "fa fa-check-square fa-fw fa-muted",
      error: "fa fa-exclamation-triangle fa-fw",
      expanderClosed: "fa fa-caret-right fa-fw",
      expanderLazy: "fa fa-angle-right fa-fw",
      expanderOpen: "fa fa-caret-down fa-fw",
      doc: "fa fa-file-o fa-fw",
      noExpander: "",
      docOpen: "fa fa-file fa-fw",
      loading: "fa fa-refresh fa-spin fa-fw",
      folder: "fa fa-folder fa-fw",
      folderOpen: "fa fa-folder-open fa-fw"
    }
  };
  var tree_dnd_options = {
    autoExpandMS: 400,
    focusOnClick: true,
    preventVoidMoves: true,
    // Prevent dropping nodes 'before self', etc.
    preventRecursiveMoves: true,
    // Prevent dropping nodes on own descendants
    dragStart: function dragStart(node, data) {
      return true;
    },
    dragEnter: function dragEnter(node, data) {
      return true;
    },
    dragDrop: function dragDrop(node, data) {
      data.otherNode.moveTo(node, data.hitMode);
    }
  };
  /**
   * jQuery plugin wrapper for compatibility
   */

  $.fn.APFancyTree = function () {
    if (!this.length) return;
    if (typeof $.fn.fancytree == 'undefined') return;
    var extensions = ["glyph"];

    if (typeof this.attr('data-tree-dnd') !== "undefined") {
      extensions.push("dnd");
    }

    this.fancytree({
      extensions: extensions,
      glyph: tree_glyph_options,
      dnd: tree_dnd_options,
      clickFolderMode: 3,
      checkbox: typeof this.attr('data-tree-checkbox') !== "undefined" || false,
      selectMode: typeof this.attr('data-tree-select') !== "undefined" ? parseInt(this.attr('data-tree-select')) : 2
    });
  }; // using default options


  $('[data-toggle="tree"]').each(function () {
    $(this).APFancyTree();
  });
})(jQuery);

/***/ }),

/***/ "./src/js/vendor/fancytree.js":
/*!************************************!*\
  !*** ./src/js/vendor/fancytree.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_vendor_fancytree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/vendor/fancytree */ "./node_modules/ui-huma/js/vendor/fancytree.js");


/***/ }),

/***/ 38:
/*!******************************************!*\
  !*** multi ./src/js/vendor/fancytree.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/vendor/fancytree.js */"./src/js/vendor/fancytree.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvdmVuZG9yL2ZhbmN5dHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9ub2RlX21vZHVsZXMvZm0tcGx1Z2luLWZhbmN5dHJlZS9qcy9mYW5jeXRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZlbmRvci9mYW5jeXRyZWUuanMiXSwibmFtZXMiOlsiJCIsInRyZWVfZ2x5cGhfb3B0aW9ucyIsIm1hcCIsImNoZWNrYm94IiwiY2hlY2tib3hTZWxlY3RlZCIsImNoZWNrYm94VW5rbm93biIsImVycm9yIiwiZXhwYW5kZXJDbG9zZWQiLCJleHBhbmRlckxhenkiLCJleHBhbmRlck9wZW4iLCJkb2MiLCJub0V4cGFuZGVyIiwiZG9jT3BlbiIsImxvYWRpbmciLCJmb2xkZXIiLCJmb2xkZXJPcGVuIiwidHJlZV9kbmRfb3B0aW9ucyIsImF1dG9FeHBhbmRNUyIsImZvY3VzT25DbGljayIsInByZXZlbnRWb2lkTW92ZXMiLCJwcmV2ZW50UmVjdXJzaXZlTW92ZXMiLCJkcmFnU3RhcnQiLCJub2RlIiwiZGF0YSIsImRyYWdFbnRlciIsImRyYWdEcm9wIiwib3RoZXJOb2RlIiwibW92ZVRvIiwiaGl0TW9kZSIsImZuIiwiQVBGYW5jeVRyZWUiLCJsZW5ndGgiLCJmYW5jeXRyZWUiLCJleHRlbnNpb25zIiwiYXR0ciIsInB1c2giLCJnbHlwaCIsImRuZCIsImNsaWNrRm9sZGVyTW9kZSIsInNlbGVjdE1vZGUiLCJwYXJzZUludCIsImVhY2giLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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QyxHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQnlDLElBQTFCLENBQStCLFlBQVk7QUFDekN6QyxLQUFDLENBQUMsSUFBRCxDQUFELENBQVE4QixXQUFSO0FBQ0QsR0FGRDtBQUlELENBOURBLEVBOERDWSxNQTlERCxDQUFELEM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL2ZhbmN5dHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzgpO1xuIiwiaW1wb3J0ICdmbS1wbHVnaW4tZmFuY3l0cmVlJyIsIihmdW5jdGlvbiAoJCkge1xuXG4gIHZhciB0cmVlX2dseXBoX29wdGlvbnMgPSB7XG4gICAgbWFwOiB7XG4gICAgICBjaGVja2JveDogXCJmYSBmYS1zcXVhcmUtbyBmYS1md1wiLFxuICAgICAgY2hlY2tib3hTZWxlY3RlZDogXCJmYSBmYS1jaGVjay1zcXVhcmUgZmEtZndcIixcbiAgICAgIGNoZWNrYm94VW5rbm93bjogXCJmYSBmYS1jaGVjay1zcXVhcmUgZmEtZncgZmEtbXV0ZWRcIixcbiAgICAgIGVycm9yOiBcImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIGZhLWZ3XCIsXG4gICAgICBleHBhbmRlckNsb3NlZDogXCJmYSBmYS1jYXJldC1yaWdodCBmYS1md1wiLFxuICAgICAgZXhwYW5kZXJMYXp5OiBcImZhIGZhLWFuZ2xlLXJpZ2h0IGZhLWZ3XCIsXG4gICAgICBleHBhbmRlck9wZW46IFwiZmEgZmEtY2FyZXQtZG93biBmYS1md1wiLFxuICAgICAgZG9jOiBcImZhIGZhLWZpbGUtbyBmYS1md1wiLFxuICAgICAgbm9FeHBhbmRlcjogXCJcIixcbiAgICAgIGRvY09wZW46IFwiZmEgZmEtZmlsZSBmYS1md1wiLFxuICAgICAgbG9hZGluZzogXCJmYSBmYS1yZWZyZXNoIGZhLXNwaW4gZmEtZndcIixcbiAgICAgIGZvbGRlcjogXCJmYSBmYS1mb2xkZXIgZmEtZndcIixcbiAgICAgIGZvbGRlck9wZW46IFwiZmEgZmEtZm9sZGVyLW9wZW4gZmEtZndcIlxuICAgIH1cbiAgfTtcbiAgdmFyIHRyZWVfZG5kX29wdGlvbnMgPSB7XG4gICAgYXV0b0V4cGFuZE1TOiA0MDAsXG4gICAgZm9jdXNPbkNsaWNrOiB0cnVlLFxuICAgIHByZXZlbnRWb2lkTW92ZXM6IHRydWUsIC8vIFByZXZlbnQgZHJvcHBpbmcgbm9kZXMgJ2JlZm9yZSBzZWxmJywgZXRjLlxuICAgIHByZXZlbnRSZWN1cnNpdmVNb3ZlczogdHJ1ZSwgLy8gUHJldmVudCBkcm9wcGluZyBub2RlcyBvbiBvd24gZGVzY2VuZGFudHNcbiAgICBkcmFnU3RhcnQ6IGZ1bmN0aW9uKG5vZGUsIGRhdGEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZHJhZ0VudGVyOiBmdW5jdGlvbihub2RlLCBkYXRhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGRyYWdEcm9wOiBmdW5jdGlvbihub2RlLCBkYXRhKSB7XG4gICAgICBkYXRhLm90aGVyTm9kZS5tb3ZlVG8obm9kZSwgZGF0YS5oaXRNb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eVxuICAgKi9cbiAgJC5mbi5BUEZhbmN5VHJlZSA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgJC5mbi5mYW5jeXRyZWUgPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgIHZhciBleHRlbnNpb25zID0gWyBcImdseXBoXCIgXTtcbiAgICBpZiAodHlwZW9mIHRoaXMuYXR0cignZGF0YS10cmVlLWRuZCcpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBleHRlbnNpb25zLnB1c2goIFwiZG5kXCIgKTtcbiAgICB9XG4gICAgdGhpcy5mYW5jeXRyZWUoe1xuICAgICAgZXh0ZW5zaW9uczogZXh0ZW5zaW9ucyxcbiAgICAgIGdseXBoOiB0cmVlX2dseXBoX29wdGlvbnMsXG4gICAgICBkbmQ6IHRyZWVfZG5kX29wdGlvbnMsXG4gICAgICBjbGlja0ZvbGRlck1vZGU6IDMsXG4gICAgICBjaGVja2JveDogdHlwZW9mIHRoaXMuYXR0cignZGF0YS10cmVlLWNoZWNrYm94JykgIT09IFwidW5kZWZpbmVkXCIgfHwgZmFsc2UsXG4gICAgICBzZWxlY3RNb2RlOiB0eXBlb2YgdGhpcy5hdHRyKCdkYXRhLXRyZWUtc2VsZWN0JykgIT09IFwidW5kZWZpbmVkXCIgPyBwYXJzZUludCh0aGlzLmF0dHIoJ2RhdGEtdHJlZS1zZWxlY3QnKSkgOiAyXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gdXNpbmcgZGVmYXVsdCBvcHRpb25zXG4gICQoJ1tkYXRhLXRvZ2dsZT1cInRyZWVcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLkFQRmFuY3lUcmVlKCk7XG4gIH0pO1xuICBcbn0oalF1ZXJ5KSk7IiwiaW1wb3J0ICd1aS1odW1hL2pzL3ZlbmRvci9mYW5jeXRyZWUnIl0sInNvdXJjZVJvb3QiOiIifQ==