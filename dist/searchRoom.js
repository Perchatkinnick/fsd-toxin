/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./common.blocks/facilities-dropdown/facilities-dropdown.js":
/*!******************************************************************!*\
  !*** ./common.blocks/facilities-dropdown/facilities-dropdown.js ***!
  \******************************************************************/
/***/ (function(module) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

module.exports = {
  addFacilitiesDropdown: addFacilitiesDropdown
};

function addFacilitiesDropdown() {
  var facilitiesDropdown = document.querySelector('.facilities__dropdown');

  if (facilitiesDropdown.style.display == '') {
    facilitiesDropdown.style.display = 'block';
    onFacilitiesDropdaunLoad();
  } else {
    facilitiesDropdown.style.display = '';
  }
}

function onFacilitiesDropdaunLoad() {
  var minuses = document.getElementsByClassName('facilities__minus');

  var _iterator = _createForOfIteratorHelper(minuses),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var minus = _step.value;
      minus.addEventListener('click', onMinusClick);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var pluses = document.getElementsByClassName('facilities__plus');

  var _iterator2 = _createForOfIteratorHelper(pluses),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var plus = _step2.value;
      plus.addEventListener('click', onPlusClick);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function onPlusClick(e) {
  var count = e.target.previousElementSibling;
  count.innerHTML = +count.innerHTML + 1;
  var parent = e.target.parentElement;
  addCount(parent, count.innerHTML);
}

function onMinusClick(e) {
  var count = e.target.nextElementSibling;
  count.innerHTML = +count.innerHTML - 1;

  if (count.innerHTML < 1) {
    count.innerHTML = 0;
  }

  var parent = e.target.parentElement;
  addCount(parent, count.innerHTML);
}

function addCount(elem, count) {
  switch (elem.classList[0]) {
    case 'facilities__dropdown__bedrooms':
      addBedrooms(count);
      break;

    case 'facilities__dropdown__beds':
      addBeds(count);
      break;

    case 'facilities__dropdown__bathrooms':
      addBathrooms(count);
      break;
  }
}

function addBathrooms(count) {
  var text = '';

  switch (count) {
    case '1':
      text = '1 ванная комната';
      break;

    case '2':
      text = '2 ванных комнаты';
      break;

    case '3':
      text = '3 ванных комнаты';
      break;

    case '4':
      text = '4 ванных комнаты';
      break;

    case '5':
      text = '5 ванных комнат';
      break;

    default:
      text = count + ' ванных комнат';
      break;
  }
  /*let container = document.querySelector('.content__room-settings__facilities__title');
  let arr = container.innerHTML.split(', ');
  if (arr[2] != null) {
      arr[2] = text;
  } 
    container.innerHTML = arr.join(', ');*/

}

function addBedrooms(count) {
  var text = '';

  switch (count) {
    case '1':
      text = '1 спальня';
      break;

    case '2':
      text = '2 спальни';
      break;

    case '3':
      text = '3 спальни';
      break;

    case '4':
      text = '4 спальни';
      break;

    case '5':
      text = '5 спален';
      break;

    default:
      text = count + ' спален';
      break;
  }

  var container = document.querySelector('.content__room-settings__facilities__title');
  var arr = container.innerHTML.split(', ');

  if (arr[0] != null) {
    arr[0] = text;
  }

  container.innerHTML = arr.join(', ');
}

function addBeds(count) {
  var text = '';

  switch (count) {
    case '1':
      text = '1 кровать';
      break;

    case '2':
      text = '2 кровати';
      break;

    case '3':
      text = '3 кровати';
      break;

    case '4':
      text = '4 кровати';
      break;

    case '5':
      text = '5 кроватей';
      break;

    default:
      text = count + ' кроватей';
      break;
  }

  var container = document.querySelector('.content__room-settings__facilities__title');
  var arr = container.innerHTML.split(', ');

  if (arr[1] != null) {
    arr[1] = text;
  }

  container.innerHTML = arr.join(', ');
}

/***/ }),

/***/ "./common.blocks/show-rooms/data.js":
/*!******************************************!*\
  !*** ./common.blocks/show-rooms/data.js ***!
  \******************************************/
/***/ (function(module) {

var roomsData = [{
  room: '888',
  price: '9990',
  stars: '5',
  isLux: 'true',
  review: '145'
}, {
  room: '350',
  price: '5000',
  stars: '3',
  isLux: 'false',
  review: '77'
}, {
  room: '352',
  price: '5000',
  stars: '3',
  isLux: 'false',
  review: '55'
}, {
  room: '444',
  price: '5000',
  stars: '3',
  isLux: 'false',
  review: '15'
}, {
  room: '450',
  price: '5300',
  stars: '4',
  isLux: 'false',
  review: '39'
}, {
  room: '666',
  price: '5000',
  stars: '4',
  isLux: 'false',
  review: '25'
}, {
  room: '678',
  price: '5500',
  stars: '5',
  isLux: 'false',
  review: '45'
}, {
  room: '740',
  price: '6000',
  stars: '5',
  isLux: 'true',
  review: '145'
}, {
  room: '840',
  price: '9990',
  stars: '4',
  isLux: 'false',
  review: '65'
}, {
  room: '856',
  price: '7300',
  stars: '5',
  isLux: 'false',
  review: '19'
}, {
  room: '980',
  price: '8500',
  stars: '3',
  isLux: 'true',
  review: '35'
}, {
  room: '982',
  price: '5800',
  stars: '3',
  isLux: 'false',
  review: '56'
}, {
  room: '234',
  price: '4500',
  stars: '4',
  isLux: 'true',
  review: '47'
}, {
  room: '134',
  price: '4000',
  stars: '5',
  isLux: 'false',
  review: '23'
}, {
  room: '500',
  price: '4900',
  stars: '4',
  isLux: 'true',
  review: '77'
}, {
  room: '401',
  price: '4000',
  stars: '3',
  isLux: 'false',
  review: '121'
}, {
  room: '760',
  price: '3500',
  stars: '3',
  isLux: 'false',
  review: '33'
}, {
  room: '656',
  price: '4700',
  stars: '5',
  isLux: 'true',
  review: '9'
}, {
  room: '432',
  price: '3000',
  stars: '3',
  isLux: 'false',
  review: '58'
}, {
  room: '903',
  price: '2500',
  stars: '3',
  isLux: 'false',
  review: '59'
}];
module.exports = {
  roomsData: roomsData
};

/***/ }),

/***/ "./common.blocks/show-rooms/show-rooms.js":
/*!************************************************!*\
  !*** ./common.blocks/show-rooms/show-rooms.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var data = __webpack_require__(/*! ./data */ "./common.blocks/show-rooms/data.js");

module.exports = {
  loadRooms: loadRooms
};

function loadRooms(page) {
  buildGrid(sort(data.roomsData), page);
}

function buildGrid(rooms, page) {
  var container = document.querySelector('.content__show__rooms');
  container.innerHTML = '';

  for (var i = 12 * (page - 1); i < 12 * page; i++) {
    if (i < data.roomsData.length) {
      var div = document.createElement('div');
      div.classList.add('room');
      div.addEventListener('click', onRoomClickHandler);
      div.dataset.room = rooms[i].room;
      div.style.background = 'no-repeat url("../src/media/images/rooms/' + rooms[i].room + '/icon.png")';
      container.appendChild(div);

      for (var k = 0; k < 4; k++) {
        var ellips = document.createElement('div');
        ellips.classList.add('ellips');

        if (k == 0) {
          ellips.classList.add('ellips__checked');
          ellips.style.left = '213.75px';
        } else {
          var pos = k * 11.25 + 213.75;
          ellips.style.left = String(pos) + 'px';
        }

        ellips.addEventListener('click', onEllipsClickHandler);
        div.appendChild(ellips);
      }

      var number = document.createElement('div');
      number.classList.add('number');
      number.innerHTML = '<span style="font-size: 11px">№ </span>' + rooms[i].room;
      div.appendChild(number);
      var coast = document.createElement('div');
      coast.classList.add('coast');
      coast.innerHTML = rooms[i].price + "\u20BD <span style=\"font-size: 11px; opacity: 0.4\">\u0432 \u0441\u0443\u0442\u043A\u0438</span>";
      div.appendChild(coast);
      var line = document.createElement('div');
      line.classList.add('line');
      div.appendChild(line);
      var stars = rooms[i].stars;

      for (var _k = 1; _k < 6; _k++) {
        var star = document.createElement('i');
        star.classList.add('material-icons', 'star');

        if (_k > +stars) {
          star.innerHTML = 'star_border';
        } else {
          star.innerHTML = 'star';
        }

        div.appendChild(star);
      }

      var lux = document.createElement('div');
      lux.classList.add('lux');

      if (rooms[i].isLux == 'true') {
        lux.innerHTML = 'люкс';
      }

      div.appendChild(lux);
      var review = document.createElement('div');
      review.classList.add('review');
      review.innerHTML = rooms[i].review + '<span style="font-size: 11px; opacity: 0.4"> Отзывов</span>';
      div.appendChild(review);
    } else {
      var _div = document.createElement('div');

      _div.classList.add('room');

      _div.style.boxShadow = 'none';
      _div.style.cursor = 'auto';
      container.appendChild(_div);
    }
  }
}

function onRoomClickHandler(e) {
  var number = e.target.dataset.room;
  var roomData;

  var _iterator = _createForOfIteratorHelper(data.roomsData),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var room = _step.value;

      if (room.room == number) {
        roomData = room;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  localStorage.setItem('roomData', JSON.stringify(roomData));
  location.href = 'room-details.html';
}

function onEllipsClickHandler(e) {
  var ellipses = e.target.parentElement.getElementsByClassName('ellips');

  var _iterator2 = _createForOfIteratorHelper(ellipses),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var ellips = _step2.value;
      ellips.classList.remove('ellips__checked');
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  e.target.classList.add('ellips__checked');
}

function sort(rooms) {
  var byPrice = rooms.slice(0);
  byPrice.sort(function (a, b) {
    return b.price - a.price;
  });
  return byPrice;
}

/***/ }),

/***/ "./scripts/search-room.js":
/*!********************************!*\
  !*** ./scripts/search-room.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_search_room_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/search-room.css */ "./styles/search-room.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/reset.css */ "./styles/reset.css");
/* harmony import */ var _fonts_montserrat_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fonts/montserrat.css */ "./fonts/montserrat.css");
/* harmony import */ var _fonts_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fonts/fontawesome/all.min.css */ "./fonts/fontawesome/all.min.css");
/* harmony import */ var _fonts_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fonts/iconfont/material-icons.css */ "./fonts/iconfont/material-icons.css");
/* harmony import */ var _blocks_guests_dropdown_guests_dropdown_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown.css */ "./common.blocks/guests-dropdown/guests-dropdown.css");
/* harmony import */ var _blocks_calendar_calendar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/calendar/calendar.css */ "./common.blocks/calendar/calendar.css");
/* harmony import */ var _blocks_header_header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blocks/header/header.css */ "./common.blocks/header/header.css");
/* harmony import */ var _blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blocks/footer/footer.css */ "./common.blocks/footer/footer.css");
/* harmony import */ var _blocks_logo_logo_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blocks/logo/logo.css */ "./common.blocks/logo/logo.css");
/* harmony import */ var _blocks_login_button_login_button_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blocks/login-button/login-button.css */ "./common.blocks/login-button/login-button.css");
/* harmony import */ var _blocks_menu_menu_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @blocks/menu/menu.css */ "./common.blocks/menu/menu.css");
/* harmony import */ var _blocks_show_rooms_show_rooms_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @blocks/show-rooms/show-rooms.css */ "./common.blocks/show-rooms/show-rooms.css");
/* harmony import */ var _blocks_facilities_dropdown_facilities_dropdown_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @blocks/facilities-dropdown/facilities-dropdown.css */ "./common.blocks/facilities-dropdown/facilities-dropdown.css");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

















var calendar = __webpack_require__(/*! @blocks/calendar/calendar */ "./common.blocks/calendar/calendar.js");

var header = __webpack_require__(/*! @blocks/header/header */ "./common.blocks/header/header.js");

var guestsDropdown = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown */ "./common.blocks/guests-dropdown/guests-dropdown.js");

var facilitiesDropdown = __webpack_require__(/*! @blocks/facilities-dropdown/facilities-dropdown */ "./common.blocks/facilities-dropdown/facilities-dropdown.js");

var showRooms = __webpack_require__(/*! @blocks/show-rooms/show-rooms */ "./common.blocks/show-rooms/show-rooms.js");

var roomsData = __webpack_require__(/*! @blocks/show-rooms/data */ "./common.blocks/show-rooms/data.js");

header.onHeaderLoad();
var contentDateRect = document.querySelector('.content__date__rect');
contentDateRect.addEventListener('click', addCalendar);
var contentDateTitle = document.querySelector('.content__date__title');
contentDateTitle.addEventListener('click', addCalendar);
var contentDateArrow = document.querySelector('.content__date__arrow');
contentDateArrow.addEventListener('click', addCalendar);
var contentGuestsRect = document.querySelector('.content__guests__rect');
contentGuestsRect.addEventListener('click', addGuestsForm);
var contentGuestsTitle = document.querySelector('.content__guests__title');
contentGuestsTitle.addEventListener('click', addGuestsForm);
var contentGuestsArrow = document.querySelector('.content__guests__arrow');
contentGuestsArrow.addEventListener('click', addGuestsForm);
var contentFacilitiesRect = document.querySelector('.content__room-settings__facilities__rect');
contentFacilitiesRect.addEventListener('click', facilitiesDropdown.addFacilitiesDropdown);
var contentFacilitiesTitle = document.querySelector('.content__room-settings__facilities__title');
contentFacilitiesTitle.addEventListener('click', facilitiesDropdown.addFacilitiesDropdown);
var contentFacilitiesArrow = document.querySelector('.content__room-settings__facilities__arrow');
contentFacilitiesArrow.addEventListener('click', facilitiesDropdown.addFacilitiesDropdown);
var additionalArrow = document.querySelector('.content__room-settings__additional__arrow');
additionalArrow.addEventListener('click', onAdditionalArrowClick);
var checkBoxes = document.getElementsByClassName('content__home-rules__checkbox');

var _iterator = _createForOfIteratorHelper(checkBoxes),
    _step;

try {
  var _loop = function _loop() {
    var checkBox = _step.value;
    checkBox.addEventListener('click', function () {
      if (checkBox.dataset.checked == 'checked') {
        checkBox.dataset.checked = 'none';
      } else {
        checkBox.dataset.checked = 'checked';
      }
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

loadDataFromLocalStorage(contentDateTitle, contentGuestsTitle);
showRooms.loadRooms(1);
createPageMarkers();
createShowVariants(1);
calendar.func();

function createPageMarkers() {
  var len = roomsData.length;
  var pages = Math.ceil(len / 12);
  var container = document.querySelector('.content__show__page-navigation');

  for (var i = 1; i <= pages + 1; i++) {
    var marker = document.createElement('div');

    if (i == 1) {
      marker.classList.add('content__show__page-navigation__marker__active');
    }

    if (i == pages + 1) {
      marker.classList.add('material-icons', 'content__show__page-navigation__marker__forward');
      marker.innerHTML = 'arrow_forward';
    } else {
      marker.classList.add('content__show__page-navigation__marker');
      marker.innerHTML = String(i);
    }

    marker.addEventListener('click', onMarkerClickHandler);
    container.appendChild(marker);
  }
}

function onMarkerClickHandler(e) {
  if (e.target.innerHTML == 'arrow_forward') {
    nextPage();
  } else {
    var markers = document.getElementsByClassName('content__show__page-navigation__marker');

    var _iterator2 = _createForOfIteratorHelper(markers),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var marker = _step2.value;
        marker.classList.remove('content__show__page-navigation__marker__active');
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    e.target.classList.add('content__show__page-navigation__marker__active');
    createShowVariants(+e.target.innerHTML);
    loadRooms(+e.target.innerHTML);
  }
}

function nextPage() {
  var len = roomsData.length;
  var pages = Math.ceil(len / 12);
  var currentPage = document.querySelector('.content__show__page-navigation__marker__active').innerHTML;

  if (+currentPage < pages) {
    createShowVariants(+currentPage + 1);
    loadRooms(+currentPage + 1);
    var markers = document.getElementsByClassName('content__show__page-navigation__marker');

    var _iterator3 = _createForOfIteratorHelper(markers),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var marker = _step3.value;
        marker.classList.remove('content__show__page-navigation__marker__active');

        if (+marker.innerHTML == +currentPage + 1) {
          marker.classList.add('content__show__page-navigation__marker__active');
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
}

function createShowVariants(page) {
  var container = document.querySelector('.content__show__variants');
  var totalVariants = 12 * page;

  if (totalVariants > roomsData.length) {
    totalVariants = roomsData.length;
  }

  container.innerHTML = 12 * (page - 1) + 1 + ' – ' + totalVariants + ' из ' + roomsData.length + ' вариантов аренды';
}

function onAdditionalArrowClick(e) {
  if (e.target.dataset.checked == 'checked') {
    e.target.dataset.checked = 'none';
  } else {
    e.target.dataset.checked = 'checked';
  }

  var list = document.querySelector('.content__room-settings__additional__list');

  if (list.style.display == '') {
    list.style.display = 'block';
  } else {
    list.style.display = '';
  }
}

function addCalendar() {
  var calendar = document.querySelector('.calendar-parent');

  if (calendar.style.display == '') {
    calendar.style.display = 'block'; //func();
  } else {
    calendar.style.display = '';
    var days = document.querySelector('#days');
    var body = days.querySelector('.body');
    body.dataset.dot1 = '';
    body.dataset.dot2 = '';
  }
}

function addGuestsForm() {
  var guestsForm = document.querySelector('.guests-dropdown');

  if (guestsForm.style.display == '') {
    guestsForm.style.display = 'block';
    guestsDropdown.onGuestsDropdaunLoad();
  } else {
    guestsForm.style.display = '';
  }
}

function loadDataFromLocalStorage(elemDate, elemGuests) {
  var arriveDate = localStorage.getItem('dateArrive');
  var departureDate = localStorage.getItem('dateDeparture');

  if (arriveDate != null && departureDate != null) {
    var complexArriveDate = calendar.getComplexDate(arriveDate);
    var complexDepartureDate = calendar.getComplexDate(departureDate);
    elemDate.innerHTML = complexArriveDate + ' - ' + complexDepartureDate;
  }

  var guestsBabies = localStorage.getItem('guestsBabies');
  var guestsChildren = localStorage.getItem('guestsChildren');
  var guestsAdult = localStorage.getItem('guestsAdult');

  if (guestsBabies != null && guestsChildren != null && guestsAdult != null) {
    elemGuests.innerHTML = guestsAdult + ' гостя';

    if (guestsChildren != 0) {
      elemGuests.innerHTML += ', ' + guestsChildren + ' детей';
    }

    if (guestsBabies != 0) {
      elemGuests.innerHTML += ', ' + guestsBabies + ' младенцев';
    }
  }
}

jquery__WEBPACK_IMPORTED_MODULE_0__(function ($) {
  var twobombSlider = function () {
    var drag = false;
    var values = [];
    $(".slider").each(function (i, e) {
      updateView(e);
    });
    $(".slider>.bar>.lp,.slider>.bar>.rp").bind("mousedown", function () {
      drag = $(this);
    });
    $(document).bind("mousemove", function (e) {
      if (!drag) return;
      var x = (e.pageX - $(drag).outerWidth() / 2 - $(drag).parent().parent().offset().left) / $(drag).parent().parent().outerWidth();
      if (x < 0) x = 0;
      if (x > 1) x = 1;
      var rp = $(drag).parent().find(".rp");
      var lp = $(drag).parent().find(".lp");

      if ($(drag).hasClass("lp") && x > $(rp).attr("data-pos")) {
        $(rp).attr("data-pos", x);
      }

      if ($(drag).hasClass("rp") && x < $(lp).attr("data-pos")) {
        $(lp).attr("data-pos", x);
      }

      $(drag).attr("data-pos", x);
      updateView($(drag).parent().parent());
    });
    $(document).bind("mouseup", function () {
      drag = false;
    });

    function updateView(slider) {
      var startVal = parseInt($(slider).find(".bar").data("start"));
      var endVal = parseInt($(slider).find(".bar").data("end"));
      if (startVal > endVal) endVal = startVal;
      startVal = startVal || 1000;
      endVal = endVal || 15000;
      var values = [];

      for (var i = startVal; i <= endVal; i += 100) {
        values.push(i);
      }

      var l = $(slider).find(".lp").attr("data-pos");
      var r = $(slider).find(".rp").attr("data-pos");
      var x = $(slider).outerWidth() * l;
      var w = (r - l) * $(slider).outerWidth();
      $(slider).find(".bar").css({
        left: x + "px",
        width: w + "px"
      });
      var index = Math.round(values.length * l);
      if (index >= values.length) index = values.length - 1;
      $(document).find(".min").html(prettify(values[index]) + "\u20BD");
      index = Math.round(values.length * r);
      if (index >= values.length) index = values.length - 1;
      $(document).find(".max").html(prettify(values[index]) + "\u20BD");
    }
  }();

  function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }
});

/***/ }),

/***/ "./common.blocks/facilities-dropdown/facilities-dropdown.css":
/*!*******************************************************************!*\
  !*** ./common.blocks/facilities-dropdown/facilities-dropdown.css ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common.blocks/show-rooms/show-rooms.css":
/*!*************************************************!*\
  !*** ./common.blocks/show-rooms/show-rooms.css ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/search-room.css":
/*!********************************!*\
  !*** ./styles/search-room.css ***!
  \********************************/
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
/******/ 			"searchRoom": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","node_modules_normalize_css_normalize_css-common_blocks_footer_footer_css-common_blocks_header-2c7e07","common_blocks_calendar_calendar_js-common_blocks_guests-dropdown_guests-dropdown_js-common_bl-134ab3"], function() { return __webpack_require__("./scripts/search-room.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=searchRoom.js.map