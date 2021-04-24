/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./common.blocks/go-button/go-button.css":
/*!***********************************************!*\
  !*** ./common.blocks/go-button/go-button.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/go-button/go-button.css?");

/***/ }),

/***/ "./common.blocks/input/input.css":
/*!***************************************!*\
  !*** ./common.blocks/input/input.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/input/input.css?");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/index.css?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _fonts_montserrat_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fonts/montserrat.css */ \"./fonts/montserrat.css\");\n/* harmony import */ var _fonts_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fonts/fontawesome/all.min.css */ \"./fonts/fontawesome/all.min.css\");\n/* harmony import */ var _fonts_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fonts/iconfont/material-icons.css */ \"./fonts/iconfont/material-icons.css\");\n/* harmony import */ var _blocks_header_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/header/header.css */ \"./common.blocks/header/header.css\");\n/* harmony import */ var _blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/footer/footer.css */ \"./common.blocks/footer/footer.css\");\n/* harmony import */ var _blocks_menu_menu_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blocks/menu/menu.css */ \"./common.blocks/menu/menu.css\");\n/* harmony import */ var _blocks_calendar_calendar_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blocks/calendar/calendar.css */ \"./common.blocks/calendar/calendar.css\");\n/* harmony import */ var _blocks_guests_dropdown_guests_dropdown_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown.css */ \"./common.blocks/guests-dropdown/guests-dropdown.css\");\n/* harmony import */ var _blocks_logo_logo_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blocks/logo/logo.css */ \"./common.blocks/logo/logo.css\");\n/* harmony import */ var _blocks_login_button_login_button_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @blocks/login-button/login-button.css */ \"./common.blocks/login-button/login-button.css\");\n/* harmony import */ var _blocks_go_button_go_button_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @blocks/go-button/go-button.css */ \"./common.blocks/go-button/go-button.css\");\n/* harmony import */ var _blocks_input_input_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @blocks/input/input.css */ \"./common.blocks/input/input.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst calendar = __webpack_require__(/*! @blocks/calendar/calendar */ \"./common.blocks/calendar/calendar.js\");\r\nconst header = __webpack_require__(/*! @blocks/header/header */ \"./common.blocks/header/header.js\");\r\nconst guestsDropdown = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown */ \"./common.blocks/guests-dropdown/guests-dropdown.js\")\r\n\r\nheader.onHeaderLoad();\r\n\r\nlet arriveForm = document.querySelector('.content__search__arrive');\r\narriveForm.addEventListener('click', addCalendar);\r\n\r\nlet departureForm = document.querySelector('.content__search__departure');\r\ndepartureForm.addEventListener('click', addCalendar);\r\n\r\nlet guestsForm = document.querySelector('.content__search__guests');\r\nguestsForm.addEventListener('click', addGuestsForm);\r\n\r\n\r\nlet searchButton = document.querySelector('.content__search__button');\r\nsearchButton.addEventListener('click', function () {\r\n    location.href = 'search-room.html';\r\n});\r\n\r\ncalendar.func();\r\n\r\n\r\nfunction addGuestsForm() {\r\n    let calendar = document.querySelector('.calendar-parent');\r\n    let guestsForm = document.querySelector('.guests-dropdown');\r\n\r\n    calendar.style.display = '';\r\n    if (guestsForm.style.display == '') {\r\n        guestsForm.style.display = 'block';\r\n        guestsDropdown.onGuestsDropdaunLoad();\r\n        \r\n    } else {\r\n        guestsForm.style.display = '';\r\n    }\r\n}\r\n\r\nfunction addCalendar() {\r\n    let calendarElem = document.querySelector('.calendar-parent');\r\n    let guestsForm = document.querySelector('.guests-dropdown');\r\n    \r\n    guestsForm.style.display = '';\r\n    if (calendarElem.style.display == '') {\r\n        calendarElem.style.display = 'block';\r\n        calendar.func();\r\n    } else {\r\n        calendarElem.style.display = '';\r\n\r\n        let days = document.querySelector('#days');\r\n        let body = days.querySelector('.body');\r\n        body.dataset.dot1 = '';\r\n        body.dataset.dot2 = '';\r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/index.js?");

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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"node_modules_normalize_css_normalize_css-common_blocks_footer_footer_css-common_blocks_header-2c7e07": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
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
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","node_modules_normalize_css_normalize_css-common_blocks_footer_footer_css-common_blocks_header-2c7e07","common_blocks_calendar_calendar_css-common_blocks_footer_footer_css-common_blocks_guests-drop-95a510"], () => (__webpack_require__("./scripts/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;