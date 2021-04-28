/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/reset.css */ "./styles/reset.css");
/* harmony import */ var _fonts_montserrat_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fonts/montserrat.css */ "./fonts/montserrat.css");
/* harmony import */ var _fonts_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fonts/fontawesome/all.min.css */ "./fonts/fontawesome/all.min.css");
/* harmony import */ var _fonts_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fonts/iconfont/material-icons.css */ "./fonts/iconfont/material-icons.css");
/* harmony import */ var _blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/footer/footer.css */ "./common.blocks/footer/footer.css");
/* harmony import */ var _blocks_calendar_calendar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blocks/calendar/calendar.css */ "./common.blocks/calendar/calendar.css");
/* harmony import */ var _blocks_guests_dropdown_guests_dropdown_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown.css */ "./common.blocks/guests-dropdown/guests-dropdown.css");
/* harmony import */ var _blocks_go_button_go_button_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blocks/go-button/go-button.css */ "./common.blocks/go-button/go-button.css");
/* harmony import */ var _blocks_input_input_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blocks/input/input.css */ "./common.blocks/input/input.css");













var calendar = __webpack_require__(/*! @blocks/calendar/calendar */ "./common.blocks/calendar/calendar.js");

var header = __webpack_require__(/*! @blocks/header/header */ "./common.blocks/header/header.js");

var guestsDropdown = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown */ "./common.blocks/guests-dropdown/guests-dropdown.js");

header.onHeaderLoad();
var arriveForm = document.querySelector('.content__search__arrive');
arriveForm.addEventListener('click', addCalendar);
var departureForm = document.querySelector('.content__search__departure');
departureForm.addEventListener('click', addCalendar);
var guestsForm = document.querySelector('.content__search__guests');
guestsForm.addEventListener('click', addGuestsForm);
var searchButton = document.querySelector('.content__search__button');
searchButton.addEventListener('click', function () {
  location.href = 'search-room.html';
});
calendar.func();

function addGuestsForm() {
  var calendar = document.querySelector('.calendar-parent');
  var guestsForm = document.querySelector('.guests-dropdown');
  calendar.style.display = '';

  if (guestsForm.style.display == '') {
    guestsForm.style.display = 'block';
    guestsDropdown.onGuestsDropdaunLoad();
  } else {
    guestsForm.style.display = '';
  }
}

function addCalendar() {
  var calendarElem = document.querySelector('.calendar-parent');
  var guestsForm = document.querySelector('.guests-dropdown');
  guestsForm.style.display = '';

  if (calendarElem.style.display == '') {
    calendarElem.style.display = 'block';
    calendar.func();
  } else {
    calendarElem.style.display = '';
    var days = document.querySelector('#days');
    var body = days.querySelector('.body');
    body.dataset.dot1 = '';
    body.dataset.dot2 = '';
  }
}

/***/ }),

/***/ "./common.blocks/go-button/go-button.css":
/*!***********************************************!*\
  !*** ./common.blocks/go-button/go-button.css ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/input/input.css":
/*!***************************************!*\
  !*** ./common.blocks/input/input.css ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"node_modules_normalize_css_normalize_css-fonts_fontawesome_all_min_css-fonts_iconfont_materia-001807": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_babel_polyfill_lib_index_js","node_modules_normalize_css_normalize_css-fonts_fontawesome_all_min_css-fonts_iconfont_materia-001807","common_blocks_calendar_calendar_js-common_blocks_guests-dropdown_guests-dropdown_js-common_bl-7a09f5"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_babel_polyfill_lib_index_js","node_modules_normalize_css_normalize_css-fonts_fontawesome_all_min_css-fonts_iconfont_materia-001807","common_blocks_calendar_calendar_js-common_blocks_guests-dropdown_guests-dropdown_js-common_bl-7a09f5"], function() { return __webpack_require__("./scripts/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map