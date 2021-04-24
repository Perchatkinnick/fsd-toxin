/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./common.blocks/header/header.js":
/*!****************************************!*\
  !*** ./common.blocks/header/header.js ***!
  \****************************************/
/***/ (function(module) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

module.exports = {
  onHeaderLoad: onHeaderLoad
};

function onHeaderLoad() {
  var loginButtons = document.getElementsByClassName('login-button__background');

  var _iterator = _createForOfIteratorHelper(loginButtons),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var loginButton = _step.value;
      loginButton.addEventListener('click', onLoginButtonClickHandler);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var regButton = document.querySelector('.registration-button');
  regButton.addEventListener('click', onRegButtonClickHandler);
}

function onLoginButtonClickHandler() {
  localStorage.setItem('loginOrRegistration', 'login');
  location.href = 'authoriz.html';
}

function onRegButtonClickHandler() {
  localStorage.setItem('loginOrRegistration', 'registration');
  location.href = 'authoriz.html';
}

/***/ }),

/***/ "./common.blocks/login/login.js":
/*!**************************************!*\
  !*** ./common.blocks/login/login.js ***!
  \**************************************/
/***/ (function(module) {

module.exports = {
  onLoginLoad: onLoginLoad
};

function onLoginLoad() {
  var toRegistrationButton = document.querySelector('.login__toRegistration__button');
  toRegistrationButton.addEventListener('click', onToRegistrationButtonClickHandler);
}

function onToRegistrationButtonClickHandler(e) {
  var loginForm = document.querySelector('.login');
  var regForm = document.querySelector('.registration');
  loginForm.style.display = '';
  regForm.style.display = 'block';
}

/***/ }),

/***/ "./scripts/authoriz.js":
/*!*****************************!*\
  !*** ./scripts/authoriz.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_authoriz_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/authoriz.css */ "./styles/authoriz.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/reset.css */ "./styles/reset.css");
/* harmony import */ var _fonts_montserrat_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fonts/montserrat.css */ "./fonts/montserrat.css");
/* harmony import */ var _fonts_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fonts/fontawesome/all.min.css */ "./fonts/fontawesome/all.min.css");
/* harmony import */ var _fonts_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fonts/iconfont/material-icons.css */ "./fonts/iconfont/material-icons.css");
/* harmony import */ var _blocks_header_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/header/header.css */ "./common.blocks/header/header.css");
/* harmony import */ var _blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/footer/footer.css */ "./common.blocks/footer/footer.css");
/* harmony import */ var _blocks_menu_menu_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blocks/menu/menu.css */ "./common.blocks/menu/menu.css");
/* harmony import */ var _blocks_logo_logo_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blocks/logo/logo.css */ "./common.blocks/logo/logo.css");
/* harmony import */ var _blocks_login_button_login_button_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blocks/login-button/login-button.css */ "./common.blocks/login-button/login-button.css");
/* harmony import */ var _blocks_login_login_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blocks/login/login.css */ "./common.blocks/login/login.css");
/* harmony import */ var _blocks_go_button_go_button_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @blocks/go-button/go-button.css */ "./common.blocks/go-button/go-button.css");
/* harmony import */ var _blocks_input_input_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @blocks/input/input.css */ "./common.blocks/input/input.css");
/* harmony import */ var _blocks_registration_registration_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @blocks/registration/registration.css */ "./common.blocks/registration/registration.css");
/* harmony import */ var _blocks_title_title_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @blocks/title/title.css */ "./common.blocks/title/title.css");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


















var header = __webpack_require__(/*! @blocks/header/header */ "./common.blocks/header/header.js");

var login = __webpack_require__(/*! @blocks/login/login */ "./common.blocks/login/login.js");

header.onHeaderLoad();
var marker = localStorage.getItem('loginOrRegistration');
var loginForm = document.querySelector('.login');
var regForm = document.querySelector('.registration');

if (marker == 'login') {
  loginForm.style.display = 'block';
  regForm.style.display = '';
} else {
  loginForm.style.display = '';
  regForm.style.display = 'block';
}

var checkBoxes = document.getElementsByClassName('registration__sex__check-box');

var _iterator = _createForOfIteratorHelper(checkBoxes),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var checkBox = _step.value;
    checkBox.addEventListener('click', onCheckBoxClickHandler);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var switcher = document.querySelector('.registration__mailing__switcher');
switcher.addEventListener('click', onSwitcherClickHandler);
login.onLoginLoad();

function onSwitcherClickHandler(e) {
  if (e.target.classList.contains('registration__mailing__switcher')) {
    e.target.classList.toggle('registration__mailing__switcher__active');
  }
}

function onCheckBoxClickHandler(e) {
  var male = document.querySelector('.registration__sex__male');
  male.classList.toggle('registration__sex__checked');
  var female = document.querySelector('.registration__sex__female');
  female.classList.toggle('registration__sex__checked');
}

/***/ }),

/***/ "./common.blocks/footer/footer.css":
/*!*****************************************!*\
  !*** ./common.blocks/footer/footer.css ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/go-button/go-button.css":
/*!***********************************************!*\
  !*** ./common.blocks/go-button/go-button.css ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/header/header.css":
/*!*****************************************!*\
  !*** ./common.blocks/header/header.css ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/input/input.css":
/*!***************************************!*\
  !*** ./common.blocks/input/input.css ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/login-button/login-button.css":
/*!*****************************************************!*\
  !*** ./common.blocks/login-button/login-button.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/login/login.css":
/*!***************************************!*\
  !*** ./common.blocks/login/login.css ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/logo/logo.css":
/*!*************************************!*\
  !*** ./common.blocks/logo/logo.css ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/menu/menu.css":
/*!*************************************!*\
  !*** ./common.blocks/menu/menu.css ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/registration/registration.css":
/*!*****************************************************!*\
  !*** ./common.blocks/registration/registration.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/title/title.css":
/*!***************************************!*\
  !*** ./common.blocks/title/title.css ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./fonts/fontawesome/all.min.css":
/*!***************************************!*\
  !*** ./fonts/fontawesome/all.min.css ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./fonts/iconfont/material-icons.css":
/*!*******************************************!*\
  !*** ./fonts/iconfont/material-icons.css ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./fonts/montserrat.css":
/*!******************************!*\
  !*** ./fonts/montserrat.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/authoriz.css":
/*!*****************************!*\
  !*** ./styles/authoriz.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/******/ 			"authoriz": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","node_modules_normalize_css_normalize_css-common_blocks_footer_footer_css-common_blocks_header-2c7e07"], function() { return __webpack_require__("./scripts/authoriz.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=authoriz.js.map