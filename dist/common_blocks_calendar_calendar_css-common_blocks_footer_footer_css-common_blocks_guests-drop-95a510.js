/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["common_blocks_calendar_calendar_css-common_blocks_footer_footer_css-common_blocks_guests-drop-95a510"],{

/***/ "./common.blocks/calendar/calendar.css":
/*!*********************************************!*\
  !*** ./common.blocks/calendar/calendar.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/calendar/calendar.css?");

/***/ }),

/***/ "./common.blocks/footer/footer.css":
/*!*****************************************!*\
  !*** ./common.blocks/footer/footer.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/footer/footer.css?");

/***/ }),

/***/ "./common.blocks/guests-dropdown/guests-dropdown.css":
/*!***********************************************************!*\
  !*** ./common.blocks/guests-dropdown/guests-dropdown.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/guests-dropdown/guests-dropdown.css?");

/***/ }),

/***/ "./common.blocks/header/header.css":
/*!*****************************************!*\
  !*** ./common.blocks/header/header.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/header/header.css?");

/***/ }),

/***/ "./common.blocks/login-button/login-button.css":
/*!*****************************************************!*\
  !*** ./common.blocks/login-button/login-button.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/login-button/login-button.css?");

/***/ }),

/***/ "./common.blocks/logo/logo.css":
/*!*************************************!*\
  !*** ./common.blocks/logo/logo.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/logo/logo.css?");

/***/ }),

/***/ "./common.blocks/menu/menu.css":
/*!*************************************!*\
  !*** ./common.blocks/menu/menu.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/menu/menu.css?");

/***/ }),

/***/ "./fonts/fontawesome/all.min.css":
/*!***************************************!*\
  !*** ./fonts/fontawesome/all.min.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./fonts/fontawesome/all.min.css?");

/***/ }),

/***/ "./fonts/iconfont/material-icons.css":
/*!*******************************************!*\
  !*** ./fonts/iconfont/material-icons.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./fonts/iconfont/material-icons.css?");

/***/ }),

/***/ "./fonts/montserrat.css":
/*!******************************!*\
  !*** ./fonts/montserrat.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./fonts/montserrat.css?");

/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/reset.css?");

/***/ }),

/***/ "./common.blocks/calendar/calendar.js":
/*!********************************************!*\
  !*** ./common.blocks/calendar/calendar.js ***!
  \********************************************/
/***/ ((module) => {

eval("module.exports = {\r\n\tfunc,\r\n\tgetComplexDate\r\n}\r\n\r\nfunction func() {\r\n\tlet backArrow = document.querySelector('.arrow-back');\r\n\r\n\tbackArrow.addEventListener('click', function () {\r\n\t\tisFuture = false;\r\n\t\tdraw(body, getPrevYear(body), getPrevMonth(body), isFuture);\r\n\t\tshowCurrentMonth(body);\r\n\t});\r\n\r\n\tlet forwardArrow = document.querySelector('.arrow-forward');\r\n\r\n\tforwardArrow.addEventListener('click', function () {\r\n\t\tif (body.dataset.year >= year && body.dataset.month >= month) {\r\n\t\t\tisFuture = true;\r\n\t\t} else {\r\n\t\t\tisFuture = false;\r\n\t\t}\r\n\r\n\t\tdraw(body, getNextYear(body), getNextMonth(body), isFuture);\r\n\t\tshowCurrentMonth(body);\r\n\t});\r\n\r\n\tlet clear = document.querySelector('.clear');\r\n\r\n\tclear.addEventListener('click', function () {\r\n\t\tbody.dataset.month = month;\r\n\t\tbody.dataset.year = year;\r\n\t\tisFuture = false;\r\n\t\tbody.dataset.dot1 = '';\r\n\t\tbody.dataset.dot2 = '';\r\n\t\tdraw(body, year, month, isFuture);\r\n\t\tshowCurrentMonth(body);\r\n\t});\r\n\r\n\tlet event = new Event(\"changeDate\", { bubbles: true }); ///\r\n\r\n\tlet apply = document.querySelector('.apply');\r\n\tapply.addEventListener('click', function () {\r\n\r\n\t\tlet currentPage = document.location.href;\r\n\r\n\t\tlet dot1 = body.dataset.dot1;\r\n\t\tlet dot2 = body.dataset.dot2;\r\n\r\n\t\tif (currentPage.split('/').pop() != 'search-room.html') {\r\n\t\t\tlet arriveDate = document.querySelector('.content__search__arrive');\r\n\t\t\tlet departureDate = document.querySelector('.content__search__departure');\r\n\r\n\t\t\tdateLoad(arriveDate, dot1);\r\n\t\t\tdateLoad(departureDate, dot2);\r\n\t\t}\r\n\r\n\t\tlocalStorage.setItem('dateArrive', dot1);\r\n\t\tlocalStorage.setItem('dateDeparture', dot2);\r\n\r\n\r\n\r\n\t\t// for search-room\r\n\t\tlet contentDateTitle = document.querySelector('.content__date__title');\r\n\t\tif (contentDateTitle != null) {\r\n\t\t\tif (dot1 != '' && dot2 != '')\r\n\t\t\t\tcomplexDateLoad(contentDateTitle, dot1, dot2);\r\n\t\t}\r\n\r\n\r\n\t\tbody.dataset.dot1 = '';\r\n\t\tbody.dataset.dot2 = '';\r\n\r\n\t\tlet calendar = document.querySelector('.calendar-parent');\r\n\t\tcalendar.style.display = '';\r\n\r\n\t\tcalendar.dispatchEvent(event); ///\r\n\t});\r\n\r\n\tlet days = document.querySelector('#days');\r\n\tlet body = days.querySelector('.body');\r\n\r\n\tlet date = new Date();\r\n\tlet year = date.getFullYear();\r\n\tlet month = date.getMonth();\r\n\r\n\tbody.dataset.month = month;\r\n\tbody.dataset.year = year;\r\n\r\n\tlet isFuture = false;\r\n\r\n\tdraw(body, year, month, isFuture);\r\n\r\n\tshowCurrentMonth(body);\r\n\r\n}\r\n\r\nfunction complexDateLoad(elem, arriveDate, departureDate) {\r\n\tlet complexArriveDate = getComplexDate(arriveDate);\r\n\tlet complexDepartureDate = getComplexDate(departureDate);\r\n\r\n\telem.innerHTML = complexArriveDate + ' - ' + complexDepartureDate;\r\n}\r\n\r\nfunction getComplexDate(date) {\r\n\tlet arr = date.split('.');\r\n\tdate = arr[2] + ' ' + getShortMonth(arr[1]);\r\n\r\n\treturn date;\r\n}\r\n\r\nfunction getShortMonth(num) {\r\n\r\n\tlet months = ['янв', 'фев', 'мар', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'];\r\n\tlet str = '';\r\n\r\n\tfor (let i = 0; i < 12; i++) {\r\n\t\tif (eraseZero(num) == i) {\r\n\t\t\tstr = months[i];\r\n\t\t}\r\n\t}\r\n\r\n\treturn str;\r\n}\r\n\r\nfunction dateLoad(elem, text) {\r\n\tlet node = elem.querySelector('.content__search__rect').firstChild;\r\n\r\n\tif (node != null) {\r\n\t\tif (text != '') {\r\n\t\t\tlet arr = text.split('.');\r\n\r\n\t\t\tlet content = arr[2] + '.' + monthForShow(arr[1]) + '.' + arr[0];\r\n\r\n\t\t\tnode.textContent = content;\r\n\t\t} else {\r\n\t\t\t//alert('Выберите дату прибытия и дату отъезда');\r\n\t\t}\r\n\t}\r\n\r\n}\r\n\r\nfunction monthForShow(number) {\r\n\tif (number == 11) {\r\n\t\tnumber = 0;\r\n\t}\r\n\tnumber++;\r\n\r\n\r\n\treturn addZero(number);\r\n}\r\n\r\nfunction getNextMonth(body) {\r\n\tlet month = body.dataset.month;\r\n\r\n\tif (month == 11) {\r\n\t\tmonth = 0\r\n\t} else {\r\n\t\tmonth++;\r\n\t}\r\n\r\n\tbody.dataset.month = month;\r\n\r\n\treturn month;\r\n}\r\n\r\nfunction getNextYear(body) {\r\n\tlet year = body.dataset.year;\r\n\tlet month = body.dataset.month;\r\n\r\n\tif (month == 11) {\r\n\t\tyear++;\r\n\t\tbody.dataset.year = year;\r\n\t}\r\n\r\n\treturn year;\r\n}\r\n\r\nfunction getPrevMonth(body) {\r\n\tlet month = body.dataset.month;\r\n\r\n\tif (month == 0) {\r\n\t\tmonth = 11\r\n\t} else {\r\n\t\tmonth--;\r\n\r\n\t}\r\n\r\n\tbody.dataset.month = month;\r\n\r\n\treturn month;\r\n}\r\n\r\nfunction getPrevYear(body) {\r\n\tlet year = body.dataset.year;\r\n\tlet month = body.dataset.month;\r\n\r\n\tif (month == 0) {\r\n\t\tyear--;\r\n\t\tbody.dataset.year = year;\r\n\t}\r\n\r\n\treturn year;\r\n}\r\n\r\nfunction draw(body, year, month, isFuture) {\r\n\tlet days = range(getLastDay(year, month));\r\n\r\n\tlet firstWeekDay = getFirstWeekDay(year, month);\r\n\tlet lastWeekDay = getLastWeekDay(year, month);\r\n\r\n\tlet res = chunk(normalize(days, firstWeekDay, 7 - lastWeekDay), 7);\r\n\tcreateTable(body, res, isFuture);\r\n}\r\n\r\nfunction createTable(parent, arr, isFuture) {\r\n\tparent.innerHTML = '';\r\n\tlet nextMonthDays = 1;\r\n\tlet prevMonthDays = getLastDay(parent.dataset.year, parent.dataset.month - 1);\r\n\r\n\tlet emptyCells = -1;\r\n\tfor (let j = 0; j < arr[0].length; j++) {\r\n\t\tif (arr[0][j] == '') {\r\n\t\t\temptyCells++;\r\n\t\t}\r\n\t}\r\n\r\n\tfor (let i = 0; i < arr.length; i++) {\r\n\t\tlet row = document.createElement('tr');\r\n\t\tparent.appendChild(row);\r\n\r\n\t\tfor (let k = 0; k < 7; k++) {\r\n\t\t\tlet cell = document.createElement('td');\r\n\t\t\tcell.innerHTML = arr[i][k];\r\n\t\t\tif (isToday(cell, parent)) {\r\n\t\t\t\tcell.classList.add('today');\r\n\t\t\t\tisFuture = true;\r\n\t\t\t}\r\n\r\n\t\t\tif (parent.dataset.dot1 != '') {\r\n\t\t\t\tlet dot1ARR = parent.dataset.dot1.split('.');\r\n\t\t\t\tlet dayDot1 = eraseZero(dot1ARR[2]);\r\n\t\t\t\tif (dot1ARR[0] == parent.dataset.year && dot1ARR[1] == parent.dataset.month && dayDot1 == cell.innerHTML) {\r\n\t\t\t\t\tcell.classList.add('parentDotLeft');\r\n\t\t\t\t\tlet parentDiv = document.createElement('div');\r\n\t\t\t\t\tparentDiv.innerHTML = cell.innerHTML;\r\n\t\t\t\t\tcell.innerHTML = '';\r\n\t\t\t\t\tparentDiv.classList.add('dot');\r\n\t\t\t\t\tcell.appendChild(parentDiv);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (parent.dataset.dot2 != '') {\r\n\t\t\t\tlet dot2ARR = parent.dataset.dot2.split('.');\r\n\t\t\t\tlet dayDot2 = eraseZero(dot2ARR[2]);\r\n\t\t\t\tif (dot2ARR[0] == parent.dataset.year && dot2ARR[1] == parent.dataset.month && dayDot2 == cell.innerHTML) {\r\n\t\t\t\t\tcell.classList.add('parentDotRight');\r\n\t\t\t\t\tlet parentDiv = document.createElement('div');\r\n\t\t\t\t\tparentDiv.innerHTML = cell.innerHTML;\r\n\t\t\t\t\tcell.innerHTML = '';\r\n\t\t\t\t\tparentDiv.classList.add('dot');\r\n\t\t\t\t\tcell.appendChild(parentDiv);\r\n\t\t\t\t} else {\r\n\t\t\t\t\tlet dot1 = parent.dataset.dot1.split('.');\r\n\t\t\t\t\tlet dot2 = parent.dataset.dot2.split('.');\r\n\r\n\t\t\t\t\tif (dot2[0] == dot1[0]) {\r\n\t\t\t\t\t\tif (eraseZero(dot2[1]) == eraseZero(dot1[1])) {\r\n\t\t\t\t\t\t\tif (+cell.innerHTML > eraseZero(dot1[2]) && +cell.innerHTML < eraseZero(dot2[2]) && eraseZero(parent.dataset.month) == eraseZero(dot1[1]) && parent.dataset.year == dot1[0]) {\r\n\t\t\t\t\t\t\t\tcell.classList.add('period');\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tif (+cell.innerHTML > eraseZero(dot1[2]) && eraseZero(dot1[1]) == parent.dataset.month) {\r\n\t\t\t\t\t\t\t\tcell.classList.add('period');\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tif (+cell.innerHTML < eraseZero(dot2[2]) && eraseZero(dot2[1]) == parent.dataset.month) {\r\n\t\t\t\t\t\t\t\tcell.classList.add('period');\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (cell.innerHTML == '' && i > 0) {\r\n\t\t\t\tcell.innerHTML = nextMonthDays;\r\n\t\t\t\tcell.classList.add('anotherMonthDays');\r\n\t\t\t\tcell.classList.remove('period');\r\n\t\t\t\tisFuture = false;\r\n\t\t\t\tnextMonthDays++;\r\n\t\t\t}\r\n\r\n\t\t\tif (cell.innerHTML == '' && i == 0) {\r\n\t\t\t\tcell.innerHTML = prevMonthDays - emptyCells;\r\n\t\t\t\temptyCells--;\r\n\t\t\t\tcell.classList.add('anotherMonthDays');\r\n\t\t\t\tcell.classList.remove('period');\r\n\t\t\t\tisFuture = false;\r\n\r\n\t\t\t}\r\n\r\n\t\t\tlet currentDate = new Date();\r\n\t\t\tif (currentDate.getFullYear() <= parent.dataset.year && currentDate.getMonth() < parent.dataset.month) {\r\n\t\t\t\tisFuture = true;\r\n\t\t\t}\r\n\r\n\t\t\tif (isFuture && !cell.classList.contains('anotherMonthDays')) {\r\n\t\t\t\tcell.addEventListener('mouseover', cursorChange);\r\n\t\t\t\tcell.addEventListener('click', function () {\r\n\t\t\t\t\tif (parent.dataset.dot1 == '') {\r\n\t\t\t\t\t\tcell.classList.add('dot');\r\n\t\t\t\t\t\tparent.dataset.dot1 = parent.dataset.year + '.' + parent.dataset.month + '.' + addZero(cell.innerHTML);\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tlet dot2 = parent.dataset.year + '.' + parent.dataset.month + '.' + addZero(cell.innerHTML)\r\n\t\t\t\t\t\tif (parent.dataset.dot2 == '' && parent.dataset.dot1 < dot2) {\r\n\t\t\t\t\t\t\tcell.classList.add('dot');\r\n\t\t\t\t\t\t\tparent.dataset.dot2 = dot2;\r\n\t\t\t\t\t\t\tcreateTable(parent, arr, isFuture)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t\trow.appendChild(cell);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction eraseZero(str) {\r\n\tif(!!str){\r\n\t\tif (str.split('')[0] == '0') {\r\n\t\tstr = str.split('')[1]\r\n\t}\r\n\r\n\treturn str;\r\n\t}\r\n}\r\n\r\nfunction addZero(num) {\r\n\tif (num < 10) {\r\n\t\tnum = '0' + num;\r\n\t}\r\n\r\n\treturn num;\r\n}\r\n\r\nfunction isToday(cell, body) {\r\n\tlet date = new Date();\r\n\tlet year = date.getFullYear();\r\n\tlet month = date.getMonth();\r\n\r\n\tif (body.dataset.month == month && body.dataset.year == year && cell.innerHTML == date.getDate()) {\r\n\t\treturn true;\r\n\t} else {\r\n\t\treturn false;\r\n\t}\r\n}\r\n\r\nfunction normalize(arr, left, right) {\r\n\t// left\r\n\tif (left != 0) {\r\n\t\tfor (let i = 0; i < left - 1; i++) {\r\n\t\t\tarr.unshift('');\r\n\t\t}\r\n\t} else {\r\n\t\tfor (let i = 0; i < 6; i++) {\r\n\t\t\tarr.unshift('');\r\n\t\t}\r\n\t}\r\n\t//right\r\n\tfor (let k = 0; k < right; k++) {\r\n\t\tarr.push('');\r\n\t}\r\n\r\n\treturn arr;\r\n}\r\n\r\nfunction chunk(arr, n) {\r\n\r\n\tlet result = [];\r\n\tlet countWeeks = Math.ceil(arr.length / n);\r\n\r\n\tfor (let i = 0; i < countWeeks; i++) {\r\n\t\tlet week = arr.splice(0, n);\r\n\t\tresult.push(week);\r\n\t}\r\n\r\n\treturn result;\r\n}\r\n\r\nfunction getLastWeekDay(year, month) {\r\n\tlet date = new Date(year, month + 1, 0);\r\n\tlet lastWeekDay = date.getDay();\r\n\r\n\treturn lastWeekDay;\r\n}\r\n\r\nfunction getFirstWeekDay(year, month) {\r\n\tlet date = new Date(year, month, 1);\r\n\tlet firstWeekDay = date.getDay();\r\n\r\n\treturn firstWeekDay;\r\n}\r\n\r\nfunction range(count) {\r\n\tlet arr = [];\r\n\r\n\tfor (let i = 1; i <= count; i++) {\r\n\t\tarr.push(i);\r\n\t}\r\n\r\n\treturn arr;\r\n}\r\n\r\nfunction getLastDay(year, month) {\r\n\tlet date = new Date(year, month + 1, 0);\r\n\tlet lastDay = date.getDate();\r\n\r\n\treturn lastDay;\r\n}\r\n\r\n\r\nfunction showCurrentMonth(body) {\r\n\tlet month = body.dataset.month;\r\n\tlet year = body.dataset.year;\r\n\r\n\tlet info = document.querySelector('.info');\r\n\tlet text = getMonth(+month) + ' ' + year;\r\n\tinfo.innerHTML = text;\r\n}\r\n\r\nfunction getMonth(num) {\r\n\tlet months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];\r\n\tlet str = '';\r\n\r\n\tfor (let i = 0; i < 12; i++) {\r\n\t\tif (num == i) {\r\n\t\t\tstr = months[i];\r\n\t\t}\r\n\t}\r\n\r\n\treturn str;\r\n}\r\n\r\nfunction cursorChange(event) {\r\n\tthis.style.cursor = 'pointer';\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./common.blocks/calendar/calendar.js?");

/***/ }),

/***/ "./common.blocks/guests-dropdown/guests-dropdown.js":
/*!**********************************************************!*\
  !*** ./common.blocks/guests-dropdown/guests-dropdown.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("module.exports = {\r\n\tonGuestsDropdaunLoad\r\n}\r\n\r\nfunction onGuestsDropdaunLoad() {\r\n    let adultPlus = document.querySelector('#guests-adult-plus');\r\n    adultPlus.addEventListener('click', onAdultPlusClick);\r\n\r\n    let adultMinus = document.querySelector('#guests-adult-minus');\r\n    adultMinus.addEventListener('click', onAdultMinusClick);\r\n\r\n    let childrenPlus = document.querySelector('#guests-children-plus');\r\n    childrenPlus.addEventListener('click', onChildrenPlusClick);\r\n\r\n    let childrenMinus = document.querySelector('#guests-children-minus');\r\n    childrenMinus.addEventListener('click', onChildrenMinusClick);\r\n\r\n    let babiesPlus = document.querySelector('#guests-babies-plus');\r\n    babiesPlus.addEventListener('click', onBabiesPlusClick);\r\n\r\n    let babiesMinus = document.querySelector('#guests-babies-minus');\r\n    babiesMinus.addEventListener('click', onBabiesMinusClick);\r\n\r\n    let gestsAdultElem = document.querySelector('#guests-adult');\r\n    let gestsChildrenElem = document.querySelector('#guests-children');\r\n    let gestsBabies = document.querySelector('#guests-babies');\r\n\r\n    let clear = document.querySelector('.guests-clear');\r\n    clear.addEventListener('click', function () {\r\n        gestsBabies.innerHTML = 0; \r\n        gestsChildrenElem.innerHTML = 0;\r\n        gestsAdultElem.innerHTML = 2;\r\n    });\r\n\r\n    let event = new Event(\"changeGuests\", { bubbles: true }); ///\r\n\r\n    let apply = document.querySelector('.guests-apply');\r\n    apply.addEventListener('click', function () {\r\n\r\n        let guestsTitle = document.querySelector('.guests__rect');\r\n        if (guestsTitle != null) {\r\n            guestsTitle.innerHTML = +(gestsBabies.innerHTML) + +(gestsChildrenElem.innerHTML) + +(gestsAdultElem.innerHTML);\r\n        }\r\n\r\n        // for search-room\r\n        let contentGuestsTitle = document.querySelector('.content__guests__title');\r\n        if (contentGuestsTitle != null) {\r\n            contentGuestsTitle.innerHTML = gestsAdultElem.innerHTML + ' гостя';\r\n            if (gestsChildrenElem.innerHTML != 0) {\r\n                contentGuestsTitle.innerHTML += ', ' + gestsChildrenElem.innerHTML + ' детей';\r\n            }\r\n\r\n            if (gestsBabies.innerHTML != 0) {\r\n                contentGuestsTitle.innerHTML += ', ' + gestsBabies.innerHTML + ' младенцев';\r\n            }\r\n        }\r\n\r\n\r\n        localStorage.setItem('guestsBabies', gestsBabies.innerHTML);\r\n        localStorage.setItem('guestsChildren', gestsChildrenElem.innerHTML);\r\n        localStorage.setItem('guestsAdult', gestsAdultElem.innerHTML);\r\n\r\n        let guestsForm = document.querySelector('.guests-dropdown');\r\n        guestsForm.style.display = '';\r\n\r\n        guestsForm.dispatchEvent(event);\r\n    });\r\n}\r\n\r\nfunction onBabiesMinusClick() {\r\n    let count = document.querySelector('#guests-babies');\r\n\r\n    count.innerHTML = +count.innerHTML - 1;\r\n\r\n    if (count.innerHTML < 0) {\r\n        count.innerHTML = 0;\r\n    }\r\n}\r\n\r\nfunction onBabiesPlusClick() {\r\n    let count = document.querySelector('#guests-babies');\r\n\r\n    count.innerHTML = +count.innerHTML + 1;\r\n}\r\n\r\nfunction onChildrenMinusClick() {\r\n    let count = document.querySelector('#guests-children');\r\n\r\n    count.innerHTML = +count.innerHTML - 1;\r\n\r\n    if (count.innerHTML < 0) {\r\n        count.innerHTML = 0;\r\n    }\r\n}\r\n\r\nfunction onChildrenPlusClick() {\r\n    let count = document.querySelector('#guests-children');\r\n\r\n    count.innerHTML = +count.innerHTML + 1;\r\n}\r\n\r\nfunction onAdultPlusClick() {\r\n    let count = document.querySelector('#guests-adult');\r\n\r\n    count.innerHTML = +count.innerHTML + 1;\r\n}\r\n\r\nfunction onAdultMinusClick() {\r\n    let count = document.querySelector('#guests-adult');\r\n\r\n    count.innerHTML = +count.innerHTML - 1;\r\n\r\n    if (count.innerHTML < 1) {\r\n        count.innerHTML = 1;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./common.blocks/guests-dropdown/guests-dropdown.js?");

/***/ }),

/***/ "./common.blocks/header/header.js":
/*!****************************************!*\
  !*** ./common.blocks/header/header.js ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = {\r\n\tonHeaderLoad\r\n}\r\n\r\nfunction onHeaderLoad() {\r\n\r\n    let loginButtons = document.getElementsByClassName('login-button__background');\r\n    for (let loginButton of loginButtons) {\r\n        loginButton.addEventListener('click', onLoginButtonClickHandler);\r\n    }\r\n\r\n    let regButton = document.querySelector('.registration-button');\r\n    regButton.addEventListener('click', onRegButtonClickHandler);\r\n}\r\n\r\nfunction onLoginButtonClickHandler() {\r\n    localStorage.setItem('loginOrRegistration', 'login');\r\n    location.href = 'authoriz.html';\r\n}\r\n\r\nfunction onRegButtonClickHandler() {\r\n    localStorage.setItem('loginOrRegistration', 'registration');\r\n\r\n    location.href = 'authoriz.html';\r\n}\n\n//# sourceURL=webpack:///./common.blocks/header/header.js?");

/***/ })

}]);