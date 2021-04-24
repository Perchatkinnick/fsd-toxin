(self["webpackChunk"] = self["webpackChunk"] || []).push([["common_blocks_calendar_calendar_js-common_blocks_guests-dropdown_guests-dropdown_js-common_bl-134ab3"],{

/***/ "./common.blocks/calendar/calendar.js":
/*!********************************************!*\
  !*** ./common.blocks/calendar/calendar.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = {
  func: func,
  getComplexDate: getComplexDate
};

function func() {
  var backArrow = document.querySelector('.arrow-back');
  backArrow.addEventListener('click', function () {
    isFuture = false;
    draw(body, getPrevYear(body), getPrevMonth(body), isFuture);
    showCurrentMonth(body);
  });
  var forwardArrow = document.querySelector('.arrow-forward');
  forwardArrow.addEventListener('click', function () {
    if (body.dataset.year >= year && body.dataset.month >= month) {
      isFuture = true;
    } else {
      isFuture = false;
    }

    draw(body, getNextYear(body), getNextMonth(body), isFuture);
    showCurrentMonth(body);
  });
  var clear = document.querySelector('.clear');
  clear.addEventListener('click', function () {
    body.dataset.month = month;
    body.dataset.year = year;
    isFuture = false;
    body.dataset.dot1 = '';
    body.dataset.dot2 = '';
    draw(body, year, month, isFuture);
    showCurrentMonth(body);
  });
  var event = new Event("changeDate", {
    bubbles: true
  }); ///

  var apply = document.querySelector('.apply');
  apply.addEventListener('click', function () {
    var currentPage = document.location.href;
    var dot1 = body.dataset.dot1;
    var dot2 = body.dataset.dot2;

    if (currentPage.split('/').pop() != 'search-room.html') {
      var arriveDate = document.querySelector('.content__search__arrive');
      var departureDate = document.querySelector('.content__search__departure');
      dateLoad(arriveDate, dot1);
      dateLoad(departureDate, dot2);
    }

    localStorage.setItem('dateArrive', dot1);
    localStorage.setItem('dateDeparture', dot2); // for search-room

    var contentDateTitle = document.querySelector('.content__date__title');

    if (contentDateTitle != null) {
      if (dot1 != '' && dot2 != '') complexDateLoad(contentDateTitle, dot1, dot2);
    }

    body.dataset.dot1 = '';
    body.dataset.dot2 = '';
    var calendar = document.querySelector('.calendar-parent');
    calendar.style.display = '';
    calendar.dispatchEvent(event); ///
  });
  var days = document.querySelector('#days');
  var body = days.querySelector('.body');
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  body.dataset.month = month;
  body.dataset.year = year;
  var isFuture = false;
  draw(body, year, month, isFuture);
  showCurrentMonth(body);
}

function complexDateLoad(elem, arriveDate, departureDate) {
  var complexArriveDate = getComplexDate(arriveDate);
  var complexDepartureDate = getComplexDate(departureDate);
  elem.innerHTML = complexArriveDate + ' - ' + complexDepartureDate;
}

function getComplexDate(date) {
  var arr = date.split('.');
  date = arr[2] + ' ' + getShortMonth(arr[1]);
  return date;
}

function getShortMonth(num) {
  var months = ['янв', 'фев', 'мар', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  var str = '';

  for (var i = 0; i < 12; i++) {
    if (eraseZero(num) == i) {
      str = months[i];
    }
  }

  return str;
}

function dateLoad(elem, text) {
  var node = elem.querySelector('.content__search__rect').firstChild;

  if (node != null) {
    if (text != '') {
      var arr = text.split('.');
      var content = arr[2] + '.' + monthForShow(arr[1]) + '.' + arr[0];
      node.textContent = content;
    } else {//alert('Выберите дату прибытия и дату отъезда');
    }
  }
}

function monthForShow(number) {
  if (number == 11) {
    number = 0;
  }

  number++;
  return addZero(number);
}

function getNextMonth(body) {
  var month = body.dataset.month;

  if (month == 11) {
    month = 0;
  } else {
    month++;
  }

  body.dataset.month = month;
  return month;
}

function getNextYear(body) {
  var year = body.dataset.year;
  var month = body.dataset.month;

  if (month == 11) {
    year++;
    body.dataset.year = year;
  }

  return year;
}

function getPrevMonth(body) {
  var month = body.dataset.month;

  if (month == 0) {
    month = 11;
  } else {
    month--;
  }

  body.dataset.month = month;
  return month;
}

function getPrevYear(body) {
  var year = body.dataset.year;
  var month = body.dataset.month;

  if (month == 0) {
    year--;
    body.dataset.year = year;
  }

  return year;
}

function draw(body, year, month, isFuture) {
  var days = range(getLastDay(year, month));
  var firstWeekDay = getFirstWeekDay(year, month);
  var lastWeekDay = getLastWeekDay(year, month);
  var res = chunk(normalize(days, firstWeekDay, 7 - lastWeekDay), 7);
  createTable(body, res, isFuture);
}

function createTable(parent, arr, isFuture) {
  parent.innerHTML = '';
  var nextMonthDays = 1;
  var prevMonthDays = getLastDay(parent.dataset.year, parent.dataset.month - 1);
  var emptyCells = -1;

  for (var j = 0; j < arr[0].length; j++) {
    if (arr[0][j] == '') {
      emptyCells++;
    }
  }

  for (var i = 0; i < arr.length; i++) {
    var row = document.createElement('tr');
    parent.appendChild(row);

    var _loop = function _loop(k) {
      var cell = document.createElement('td');
      cell.innerHTML = arr[i][k];

      if (isToday(cell, parent)) {
        cell.classList.add('today');
        isFuture = true;
      }

      if (parent.dataset.dot1 != '') {
        var dot1ARR = parent.dataset.dot1.split('.');
        var dayDot1 = eraseZero(dot1ARR[2]);

        if (dot1ARR[0] == parent.dataset.year && dot1ARR[1] == parent.dataset.month && dayDot1 == cell.innerHTML) {
          cell.classList.add('parentDotLeft');
          var parentDiv = document.createElement('div');
          parentDiv.innerHTML = cell.innerHTML;
          cell.innerHTML = '';
          parentDiv.classList.add('dot');
          cell.appendChild(parentDiv);
        }
      }

      if (parent.dataset.dot2 != '') {
        var dot2ARR = parent.dataset.dot2.split('.');
        var dayDot2 = eraseZero(dot2ARR[2]);

        if (dot2ARR[0] == parent.dataset.year && dot2ARR[1] == parent.dataset.month && dayDot2 == cell.innerHTML) {
          cell.classList.add('parentDotRight');

          var _parentDiv = document.createElement('div');

          _parentDiv.innerHTML = cell.innerHTML;
          cell.innerHTML = '';

          _parentDiv.classList.add('dot');

          cell.appendChild(_parentDiv);
        } else {
          var dot1 = parent.dataset.dot1.split('.');
          var dot2 = parent.dataset.dot2.split('.');

          if (dot2[0] == dot1[0]) {
            if (eraseZero(dot2[1]) == eraseZero(dot1[1])) {
              if (+cell.innerHTML > eraseZero(dot1[2]) && +cell.innerHTML < eraseZero(dot2[2]) && eraseZero(parent.dataset.month) == eraseZero(dot1[1]) && parent.dataset.year == dot1[0]) {
                cell.classList.add('period');
              }
            } else {
              if (+cell.innerHTML > eraseZero(dot1[2]) && eraseZero(dot1[1]) == parent.dataset.month) {
                cell.classList.add('period');
              }

              if (+cell.innerHTML < eraseZero(dot2[2]) && eraseZero(dot2[1]) == parent.dataset.month) {
                cell.classList.add('period');
              }
            }
          }
        }
      }

      if (cell.innerHTML == '' && i > 0) {
        cell.innerHTML = nextMonthDays;
        cell.classList.add('anotherMonthDays');
        cell.classList.remove('period');
        isFuture = false;
        nextMonthDays++;
      }

      if (cell.innerHTML == '' && i == 0) {
        cell.innerHTML = prevMonthDays - emptyCells;
        emptyCells--;
        cell.classList.add('anotherMonthDays');
        cell.classList.remove('period');
        isFuture = false;
      }

      var currentDate = new Date();

      if (currentDate.getFullYear() <= parent.dataset.year && currentDate.getMonth() < parent.dataset.month) {
        isFuture = true;
      }

      if (isFuture && !cell.classList.contains('anotherMonthDays')) {
        cell.addEventListener('mouseover', cursorChange);
        cell.addEventListener('click', function () {
          if (parent.dataset.dot1 == '') {
            cell.classList.add('dot');
            parent.dataset.dot1 = parent.dataset.year + '.' + parent.dataset.month + '.' + addZero(cell.innerHTML);
          } else {
            var _dot = parent.dataset.year + '.' + parent.dataset.month + '.' + addZero(cell.innerHTML);

            if (parent.dataset.dot2 == '' && parent.dataset.dot1 < _dot) {
              cell.classList.add('dot');
              parent.dataset.dot2 = _dot;
              createTable(parent, arr, isFuture);
            }
          }
        });
      }

      row.appendChild(cell);
    };

    for (var k = 0; k < 7; k++) {
      _loop(k);
    }
  }
}

function eraseZero(str) {
  if (!!str) {
    if (str.split('')[0] == '0') {
      str = str.split('')[1];
    }

    return str;
  }
}

function addZero(num) {
  if (num < 10) {
    num = '0' + num;
  }

  return num;
}

function isToday(cell, body) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();

  if (body.dataset.month == month && body.dataset.year == year && cell.innerHTML == date.getDate()) {
    return true;
  } else {
    return false;
  }
}

function normalize(arr, left, right) {
  // left
  if (left != 0) {
    for (var i = 0; i < left - 1; i++) {
      arr.unshift('');
    }
  } else {
    for (var _i = 0; _i < 6; _i++) {
      arr.unshift('');
    }
  } //right


  for (var k = 0; k < right; k++) {
    arr.push('');
  }

  return arr;
}

function chunk(arr, n) {
  var result = [];
  var countWeeks = Math.ceil(arr.length / n);

  for (var i = 0; i < countWeeks; i++) {
    var week = arr.splice(0, n);
    result.push(week);
  }

  return result;
}

function getLastWeekDay(year, month) {
  var date = new Date(year, month + 1, 0);
  var lastWeekDay = date.getDay();
  return lastWeekDay;
}

function getFirstWeekDay(year, month) {
  var date = new Date(year, month, 1);
  var firstWeekDay = date.getDay();
  return firstWeekDay;
}

function range(count) {
  var arr = [];

  for (var i = 1; i <= count; i++) {
    arr.push(i);
  }

  return arr;
}

function getLastDay(year, month) {
  var date = new Date(year, month + 1, 0);
  var lastDay = date.getDate();
  return lastDay;
}

function showCurrentMonth(body) {
  var month = body.dataset.month;
  var year = body.dataset.year;
  var info = document.querySelector('.info');
  var text = getMonth(+month) + ' ' + year;
  info.innerHTML = text;
}

function getMonth(num) {
  var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  var str = '';

  for (var i = 0; i < 12; i++) {
    if (num == i) {
      str = months[i];
    }
  }

  return str;
}

function cursorChange(event) {
  this.style.cursor = 'pointer';
}

/***/ }),

/***/ "./common.blocks/guests-dropdown/guests-dropdown.js":
/*!**********************************************************!*\
  !*** ./common.blocks/guests-dropdown/guests-dropdown.js ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = {
  onGuestsDropdaunLoad: onGuestsDropdaunLoad
};

function onGuestsDropdaunLoad() {
  var adultPlus = document.querySelector('#guests-adult-plus');
  adultPlus.addEventListener('click', onAdultPlusClick);
  var adultMinus = document.querySelector('#guests-adult-minus');
  adultMinus.addEventListener('click', onAdultMinusClick);
  var childrenPlus = document.querySelector('#guests-children-plus');
  childrenPlus.addEventListener('click', onChildrenPlusClick);
  var childrenMinus = document.querySelector('#guests-children-minus');
  childrenMinus.addEventListener('click', onChildrenMinusClick);
  var babiesPlus = document.querySelector('#guests-babies-plus');
  babiesPlus.addEventListener('click', onBabiesPlusClick);
  var babiesMinus = document.querySelector('#guests-babies-minus');
  babiesMinus.addEventListener('click', onBabiesMinusClick);
  var gestsAdultElem = document.querySelector('#guests-adult');
  var gestsChildrenElem = document.querySelector('#guests-children');
  var gestsBabies = document.querySelector('#guests-babies');
  var clear = document.querySelector('.guests-clear');
  clear.addEventListener('click', function () {
    gestsBabies.innerHTML = 0;
    gestsChildrenElem.innerHTML = 0;
    gestsAdultElem.innerHTML = 2;
  });
  var event = new Event("changeGuests", {
    bubbles: true
  }); ///

  var apply = document.querySelector('.guests-apply');
  apply.addEventListener('click', function () {
    var guestsTitle = document.querySelector('.guests__rect');

    if (guestsTitle != null) {
      guestsTitle.innerHTML = +gestsBabies.innerHTML + +gestsChildrenElem.innerHTML + +gestsAdultElem.innerHTML;
    } // for search-room


    var contentGuestsTitle = document.querySelector('.content__guests__title');

    if (contentGuestsTitle != null) {
      contentGuestsTitle.innerHTML = gestsAdultElem.innerHTML + ' гостя';

      if (gestsChildrenElem.innerHTML != 0) {
        contentGuestsTitle.innerHTML += ', ' + gestsChildrenElem.innerHTML + ' детей';
      }

      if (gestsBabies.innerHTML != 0) {
        contentGuestsTitle.innerHTML += ', ' + gestsBabies.innerHTML + ' младенцев';
      }
    }

    localStorage.setItem('guestsBabies', gestsBabies.innerHTML);
    localStorage.setItem('guestsChildren', gestsChildrenElem.innerHTML);
    localStorage.setItem('guestsAdult', gestsAdultElem.innerHTML);
    var guestsForm = document.querySelector('.guests-dropdown');
    guestsForm.style.display = '';
    guestsForm.dispatchEvent(event);
  });
}

function onBabiesMinusClick() {
  var count = document.querySelector('#guests-babies');
  count.innerHTML = +count.innerHTML - 1;

  if (count.innerHTML < 0) {
    count.innerHTML = 0;
  }
}

function onBabiesPlusClick() {
  var count = document.querySelector('#guests-babies');
  count.innerHTML = +count.innerHTML + 1;
}

function onChildrenMinusClick() {
  var count = document.querySelector('#guests-children');
  count.innerHTML = +count.innerHTML - 1;

  if (count.innerHTML < 0) {
    count.innerHTML = 0;
  }
}

function onChildrenPlusClick() {
  var count = document.querySelector('#guests-children');
  count.innerHTML = +count.innerHTML + 1;
}

function onAdultPlusClick() {
  var count = document.querySelector('#guests-adult');
  count.innerHTML = +count.innerHTML + 1;
}

function onAdultMinusClick() {
  var count = document.querySelector('#guests-adult');
  count.innerHTML = +count.innerHTML - 1;

  if (count.innerHTML < 1) {
    count.innerHTML = 1;
  }
}

/***/ }),

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

/***/ "./common.blocks/calendar/calendar.css":
/*!*********************************************!*\
  !*** ./common.blocks/calendar/calendar.css ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./common.blocks/guests-dropdown/guests-dropdown.css":
/*!***********************************************************!*\
  !*** ./common.blocks/guests-dropdown/guests-dropdown.css ***!
  \***********************************************************/
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

/***/ "./common.blocks/login-button/login-button.css":
/*!*****************************************************!*\
  !*** ./common.blocks/login-button/login-button.css ***!
  \*****************************************************/
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

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=common_blocks_calendar_calendar_js-common_blocks_guests-dropdown_guests-dropdown_js-common_bl-134ab3.js.map