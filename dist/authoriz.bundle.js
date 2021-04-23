/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.blocks/header/header.js":
/*!********************************************!*\
  !*** ./src/common.blocks/header/header.js ***!
  \********************************************/
/***/ ((module) => {

eval("module.exports = {\r\n\tonHeaderLoad\r\n}\r\n\r\nfunction onHeaderLoad() {\r\n\r\n    let loginButtons = document.getElementsByClassName('login-button__background');\r\n    for (let loginButton of loginButtons) {\r\n        loginButton.addEventListener('click', onLoginButtonClickHandler);\r\n    }\r\n\r\n    let regButton = document.querySelector('.registration-button');\r\n    regButton.addEventListener('click', onRegButtonClickHandler);\r\n}\r\n\r\nfunction onLoginButtonClickHandler() {\r\n    localStorage.setItem('loginOrRegistration', 'login');\r\n    location.href = 'authoriz.html';\r\n}\r\n\r\nfunction onRegButtonClickHandler() {\r\n    localStorage.setItem('loginOrRegistration', 'registration');\r\n\r\n    location.href = 'authoriz.html';\r\n}\n\n//# sourceURL=webpack://fsd-toxin/./src/common.blocks/header/header.js?");

/***/ }),

/***/ "./src/common.blocks/login/login.js":
/*!******************************************!*\
  !*** ./src/common.blocks/login/login.js ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = {\r\n\tonLoginLoad\r\n}\r\n\r\nfunction onLoginLoad() {\r\n    let toRegistrationButton = document.querySelector('.login__toRegistration__button');\r\n\r\n    toRegistrationButton.addEventListener('click', onToRegistrationButtonClickHandler);\r\n}\r\n\r\nfunction onToRegistrationButtonClickHandler(e) {\r\n    let loginForm = document.querySelector('.login');\r\n    let regForm = document.querySelector('.registration');\r\n\r\n    loginForm.style.display = '';\r\n    regForm.style.display = 'block';\r\n}\n\n//# sourceURL=webpack://fsd-toxin/./src/common.blocks/login/login.js?");

/***/ }),

/***/ "./src/scripts/authoriz.js":
/*!*********************************!*\
  !*** ./src/scripts/authoriz.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const header = __webpack_require__(/*! ../common.blocks/header/header */ \"./src/common.blocks/header/header.js\");\r\nconst login = __webpack_require__(/*! ../common.blocks/login/login */ \"./src/common.blocks/login/login.js\");\r\n\r\nheader.onHeaderLoad();\r\n\r\n\r\nlet marker = localStorage.getItem('loginOrRegistration');\r\nlet loginForm = document.querySelector('.login');\r\nlet regForm = document.querySelector('.registration');\r\n\r\nif (marker == 'login') {\r\n    loginForm.style.display = 'block';\r\n    regForm.style.display = '';\r\n} else {\r\n    loginForm.style.display = '';\r\n    regForm.style.display = 'block';\r\n}\r\n\r\nlet checkBoxes = document.getElementsByClassName('registration__sex__check-box');\r\nfor (let checkBox of checkBoxes) {\r\n    checkBox.addEventListener('click', onCheckBoxClickHandler);\r\n}\r\n\r\nlet switcher = document.querySelector('.registration__mailing__switcher');\r\nswitcher.addEventListener('click', onSwitcherClickHandler);\r\n\r\nlogin.onLoginLoad();\r\n\r\n\r\nfunction onSwitcherClickHandler(e) {\r\n    if (e.target.classList.contains('registration__mailing__switcher')) {\r\n        e.target.classList.toggle('registration__mailing__switcher__active');\r\n    }\r\n    \r\n}\r\n\r\nfunction onCheckBoxClickHandler(e) {\r\n    let male = document.querySelector('.registration__sex__male');\r\n    male.classList.toggle('registration__sex__checked');\r\n    let female = document.querySelector('.registration__sex__female');\r\n    female.classList.toggle('registration__sex__checked');\r\n}\r\n\n\n//# sourceURL=webpack://fsd-toxin/./src/scripts/authoriz.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/authoriz.js");
/******/ 	
/******/ })()
;