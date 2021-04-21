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

/***/ "./src/scripts/authoriz.js":
/*!*********************************!*\
  !*** ./src/scripts/authoriz.js ***!
  \*********************************/
/***/ (() => {

eval("\r\nonHeaderLoad();\r\n\r\n\r\nlet marker = localStorage.getItem('loginOrRegistration');\r\nlet loginForm = document.querySelector('.login');\r\nlet regForm = document.querySelector('.registration');\r\n\r\nif (marker == 'login') {\r\n    loginForm.style.display = 'block';\r\n    regForm.style.display = '';\r\n} else {\r\n    loginForm.style.display = '';\r\n    regForm.style.display = 'block';\r\n}\r\n\r\nlet checkBoxes = document.getElementsByClassName('registration__sex__check-box');\r\nfor (let checkBox of checkBoxes) {\r\n    checkBox.addEventListener('click', onCheckBoxClickHandler);\r\n}\r\n\r\nlet switcher = document.querySelector('.registration__mailing__switcher');\r\nswitcher.addEventListener('click', onSwitcherClickHandler);\r\n\r\nonLoginLoad();\r\n\r\n\r\nfunction onSwitcherClickHandler(e) {\r\n    if (e.target.classList.contains('registration__mailing__switcher')) {\r\n        e.target.classList.toggle('registration__mailing__switcher__active');\r\n    }\r\n    \r\n}\r\n\r\nfunction onCheckBoxClickHandler(e) {\r\n    let male = document.querySelector('.registration__sex__male');\r\n    male.classList.toggle('registration__sex__checked');\r\n    let female = document.querySelector('.registration__sex__female');\r\n    female.classList.toggle('registration__sex__checked');\r\n}\r\n\n\n//# sourceURL=webpack://fsd-toxin/./src/scripts/authoriz.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/authoriz.js"]();
/******/ 	
/******/ })()
;