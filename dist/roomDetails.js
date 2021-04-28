/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./common.blocks/booking/booking.js":
/*!******************************************!*\
  !*** ./common.blocks/booking/booking.js ***!
  \******************************************/
/***/ (function(module) {

module.exports = {
  loadBooking: loadBooking,
  loadCalculator: loadCalculator
};
var roomsDataParth = [{
  //more info about room... and than ->
  reviews: [{
    user: 1,
    date: '2021.03.23',
    text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    likes: 12
  }, {
    user: 2,
    date: '2021.03.21',
    text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    likes: 2
  }],
  serviceFee: '-2179',
  extraFee: '300'
}, {//next room
}];

function loadBooking(roomData) {
  var numberElem = document.querySelector('.content__booking__number');
  numberElem.innerHTML = '<span style="font-size: 10px">№ </span>' + roomData.room;
  var luxElem = document.querySelector('.content__booking__lux');

  if (roomData.isLux == 'true') {
    luxElem.innerHTML = 'люкс';
  }

  var priceElem = document.querySelector('.content__booking__price');
  priceElem.innerHTML = roomData.price + "\u20BD <span style=\"font-size: 11px; opacity: 0.4\">\u0432 \u0441\u0443\u0442\u043A\u0438</span>";
  var arriveDate = getValidDate(localStorage.getItem('dateArrive'));
  var departureDate = getValidDate(localStorage.getItem('dateDeparture'));
  var arriveElem = document.querySelector('.arrive-date');
  arriveElem.innerHTML = arriveDate;
  var departureElem = document.querySelector('.departure-date');
  departureElem.innerHTML = departureDate;
}

function getValidDate(date) {
  if (!!date) {
    var arr = date.split('.');
    var month = +arr[1] + 1;

    if (month > 12) {
      month = 1;
    }

    if (month < 10) {
      month = '0' + String(month);
    }

    date = arr[2] + '.' + month + '.' + arr[0];
  }

  return date;
}

function loadCalculator(roomData) {
  loadMainString(roomData);
  loadFee();
  loadExtraFee();
  loadTotal();
}

function loadTotal() {
  var parent = document.querySelector('.content__booking__calculator__total');
  var priceElem = parent.children[2];
  var roomPrice = +document.querySelector('.content__booking__calculator__main').children[2].innerHTML.split("\u20BD")[0];
  var total = roomPrice + +roomsDataParth[0].serviceFee + +roomsDataParth[0].extraFee;
  priceElem.innerHTML = total + "\u20BD";
  loadSeparatorForTotal(parent.children[1]);
}

function loadSeparatorForTotal(parent) {
  var separator = document.createElement('div');
  separator.classList.add('content__booking__calculator__total__separator__body');
  var previousSibling = parent.previousElementSibling;
  var left = previousSibling.offsetWidth;
  separator.style.left = left + 8 + 'px';
  var containerWidth = parent.parentElement.offsetWidth;
  separator.style.width = containerWidth - parent.parentElement.children[2].offsetWidth - left - 16 + 'px';
  parent.appendChild(separator);
}

function loadExtraFee() {
  var parent = document.querySelector('.content__booking__calculator__extrafee');
  var valueElem = parent.children[0];
  var priceElem = parent.children[2];
  valueElem.innerHTML = 'Сбор за доп. услуги';
  priceElem.innerHTML = roomsDataParth[0].extraFee + "\u20BD";
  loadSeparator(parent.children[1]);
}

function loadFee() {
  var parent = document.querySelector('.content__booking__calculator__fee');
  var valueElem = parent.children[0];
  var priceElem = parent.children[2];
  var valueFee = +roomsDataParth[0].serviceFee;
  var textValue = 'Сбор за услуги: ';
  var textPrice = "\u20BD";

  if (valueFee < 0) {
    textValue += 'скидка ';
    textPrice = '0' + textPrice;
  } else {
    textPrice = valueFee + textPrice;
  }

  textValue += Math.abs(valueFee) + "\u20BD";
  valueElem.innerHTML = textValue;
  priceElem.innerHTML = textPrice;
  loadSeparator(parent.children[1]);
}

function loadSeparator(parent) {
  var separator = document.createElement('div');
  separator.classList.add('content__booking__calculator__separator__body');
  separator.innerHTML = 'i';
  var previousSibling = parent.previousElementSibling;
  var left = previousSibling.offsetWidth;
  separator.style.left = left + 8 + 'px';
  parent.appendChild(separator);
}

function loadMainString(roomData) {
  var parent = document.querySelector('.content__booking__calculator__main');
  var valueElem = parent.children[0];
  var priceElem = parent.children[2];
  var period = countDays();
  var coast = roomData.price;
  valueElem.innerHTML = coast + "\u20BD x " + period + ' суток';
  priceElem.innerHTML = String(coast * period) + "\u20BD";
}

function countDays() {
  var f = localStorage.getItem('dateArrive');

  if (f != '') {
    var arriveDate = new Date(localStorage.getItem('dateArrive'));
    var departureDate = new Date(localStorage.getItem('dateDeparture'));
    var period = Math.round((departureDate - arriveDate) / (60 * 60 * 24 * 1000)) + 1;
    return period;
  }
}

/***/ }),

/***/ "./common.blocks/collage/collage.js":
/*!******************************************!*\
  !*** ./common.blocks/collage/collage.js ***!
  \******************************************/
/***/ (function(module) {

module.exports = {
  loadPhoto: loadPhoto
};

function loadPhoto(roomData) {
  var mainPhoto = document.querySelector('.collage__main');
  mainPhoto.style.background = 'no-repeat url("../src/media/images/rooms/' + roomData.room + '/main.png")';
  var secPhoto = document.querySelector('.collage__2');
  secPhoto.style.background = 'no-repeat url("../src/media/images/rooms/' + roomData.room + '/image 2.png")';
  var thrdPhoto = document.querySelector('.collage__3');
  thrdPhoto.style.background = 'no-repeat url("../src/media/images/rooms/' + roomData.room + '/image 3.png")';
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

/***/ "./scripts/room-details.js":
/*!*********************************!*\
  !*** ./scripts/room-details.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_room_details_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/room-details.css */ "./styles/room-details.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/reset.css */ "./styles/reset.css");
/* harmony import */ var _blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/footer/footer.css */ "./common.blocks/footer/footer.css");
/* harmony import */ var _blocks_calendar_calendar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/calendar/calendar.css */ "./common.blocks/calendar/calendar.css");
/* harmony import */ var _blocks_guests_dropdown_guests_dropdown_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown.css */ "./common.blocks/guests-dropdown/guests-dropdown.css");
/* harmony import */ var _fonts_montserrat_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fonts/montserrat.css */ "./fonts/montserrat.css");
/* harmony import */ var _fonts_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fonts/fontawesome/all.min.css */ "./fonts/fontawesome/all.min.css");
/* harmony import */ var _fonts_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fonts/iconfont/material-icons.css */ "./fonts/iconfont/material-icons.css");











var calendar = __webpack_require__(/*! @blocks/calendar/calendar */ "./common.blocks/calendar/calendar.js");

var guestsDropdown = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown */ "./common.blocks/guests-dropdown/guests-dropdown.js");

var header = __webpack_require__(/*! @blocks/header/header */ "./common.blocks/header/header.js");

var roomsData = __webpack_require__(/*! @blocks/show-rooms/data */ "./common.blocks/show-rooms/data.js");

var collage = __webpack_require__(/*! @blocks/collage/collage */ "./common.blocks/collage/collage.js");

var booking = __webpack_require__(/*! @blocks/booking/booking */ "./common.blocks/booking/booking.js");

var roomsDataParth = [{
  //more info about room... and than ->
  reviews: [{
    user: 1,
    date: '2021.03.23',
    text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    likes: 12
  }, {
    user: 2,
    date: '2021.03.21',
    text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    likes: 2
  }],
  serviceFee: '-2179',
  extraFee: '300'
}, {//next room
}];
var users = [{
  id: 1,
  name: 'Мурад',
  lastName: 'Сарафанов',
  sex: 'm',
  birthday: '',
  email: '',
  pass: '',
  mailing: false
}, {
  id: 2,
  name: 'Патрисия',
  lastName: 'Стёклышкова',
  sex: 'f',
  birthday: '',
  email: '',
  pass: '',
  mailing: false
}];
var roomData = JSON.parse(localStorage.getItem("roomData"));
header.onHeaderLoad();
collage.loadPhoto(roomData);
loadDiagramm();
loadCounts();
loadReviews();
booking.loadBooking(roomData);
calendar.func();
loadCalendar();
loadGuestsDropdaun();
booking.loadCalculator(roomData);
document.addEventListener("changeDate", function (event) {
  loadCalculator(roomData);
});
document.addEventListener("changeGuests", function (event) {});

function loadGuestsDropdaun() {
  var guestsElem = document.querySelector('.content__booking__guests');
  guestsElem.addEventListener('click', onGuestsElemClickHandler);
  var guestsValue = document.querySelector('.content__booking__guests__value');
  var guestsBabies = localStorage.getItem('guestsBabies');
  var guestsChildren = localStorage.getItem('guestsChildren');
  var guestsAdult = localStorage.getItem('guestsAdult');

  if (guestsBabies != null && guestsChildren != null && guestsAdult != null) {
    guestsValue.innerHTML = guestsAdult + ' гостя';

    if (guestsChildren != 0) {
      guestsValue.innerHTML += ', ' + guestsChildren + ' детей';
    }

    if (guestsBabies != 0) {
      guestsValue.innerHTML += ', ' + guestsBabies + ' младенцев';
    }
  }
}

function onGuestsElemClickHandler() {
  var guestsForm = document.querySelector('.guests-dropdown');

  if (guestsForm.style.display == '') {
    guestsForm.style.display = 'block';
    onGuestsDropdaunLoad();
  } else {
    guestsForm.style.display = '';
  }
}

function loadCalendar() {
  var arriveElem = document.querySelector('.content__booking__date__arrive');
  arriveElem.addEventListener('click', showCalendar);
  var departureElem = document.querySelector('.content__booking__date__departure');
  departureElem.addEventListener('click', showCalendar);
}

function showCalendar() {
  var calendar = document.querySelector('.content__booking__calendar');

  if (calendar.style.display == '') {
    calendar.style.display = 'block';
  } else {
    calendar.style.display = '';
    var days = document.querySelector('#days');
    var body = days.querySelector('.body');
    body.dataset.dot1 = '';
    body.dataset.dot2 = '';
  }
}

function loadCounts() {
  var count = roomsDataParth[0].reviews.length;
  var container = document.querySelector('.content__details__reviews__count');
  container.innerHTML = count + ' отзыва';
}

function loadReviews() {
  var container = document.querySelector('.content__details__reviews__container');
  var count = roomsDataParth[0].reviews.length;

  var _loop = function _loop(i) {
    var review = document.createElement('div');
    review.classList.add('content__details__reviews__container__review');
    var userPhoto = document.createElement('div');
    userPhoto.classList.add('content__details__reviews__container__review__photo');
    var userID = roomsDataParth[0].reviews[i].user;
    userPhoto.style.background = 'url("../src/media/images/users/' + userID + '.png")';
    review.appendChild(userPhoto);
    var user = users.find(function (user) {
      return user.id === userID;
    });
    var name = document.createElement('div');
    name.classList.add('content__details__reviews__container__review__name');
    name.innerHTML = user.name + ' ' + user.lastName;
    review.appendChild(name);
    var dateElement = document.createElement('div');
    dateElement.classList.add('content__details__reviews__container__review__date');
    var date = new Date(roomsDataParth[0].reviews[i].date);
    var now = new Date();
    var diff = Math.round((now - date) / (60 * 60 * 24 * 1000));
    dateElement.innerHTML = diff + ' дней назад';
    review.appendChild(dateElement);
    var text = document.createElement('div');
    text.classList.add('content__details__reviews__container__review__text');
    text.innerHTML = roomsDataParth[0].reviews[i].text;
    review.appendChild(text);
    var likeContainer = document.createElement('div');
    likeContainer.classList.add('content__details__reviews__container__review__likeContainer');
    likeContainer.addEventListener('click', onLikeClickHandler);
    review.appendChild(likeContainer);
    var heart = document.createElement('div');
    heart.classList.add('content__details__reviews__container__review__likeContainer__heart');
    heart.innerHTML = 'favorite_border';
    likeContainer.appendChild(heart);
    var count = document.createElement('div');
    count.classList.add('content__details__reviews__container__review__likeContainer__count');
    count.innerHTML = String(roomsDataParth[0].reviews[i].likes);
    likeContainer.appendChild(count);
    container.appendChild(review);
  };

  for (var i = 0; i < count; i++) {
    _loop(i);
  }
}

function onLikeClickHandler(e) {
  if (!e.target.classList.contains('content__details__reviews__container__review__likeContainer')) {
    var container = e.target.parentElement;
    container.classList.toggle('content__details__reviews__container__review__likeContainer__checkked');
    var heart = container.querySelector('.content__details__reviews__container__review__likeContainer__heart');
    heart.classList.toggle('content__details__reviews__container__review__likeContainer__heart__checked');

    if (heart.innerHTML == 'favorite_border') {
      heart.innerHTML = 'favorite';
    } else {
      heart.innerHTML = 'favorite_border';
    }

    var count = container.querySelector('.content__details__reviews__container__review__likeContainer__count');
    count.classList.toggle('content__details__reviews__container__review__likeContainer__count__checked');

    if (count.classList.contains('content__details__reviews__container__review__likeContainer__count__checked')) {
      count.innerHTML++;
    } else {
      count.innerHTML--;
    }
  }
}

function loadDiagramm() {
  // get from localStorage or search from DB wrigth now
  var dataImpression = {
    impressions: 260,
    magnificently: 120,
    good: 65,
    passably: 65,
    bad: 10
  };
  var total = dataImpression.impressions;
  var voteCount = document.querySelector('.content__details__impression__diagramm__vote__count');
  voteCount.innerHTML = String(total);
  var position = 1;
  position = sectionLoad('bad', dataImpression.bad, dataImpression.impressions, position);
  position = sectionLoad('passably', dataImpression.passably, dataImpression.impressions, position);
  position = sectionLoad('good', dataImpression.good, dataImpression.impressions, position);
  position = sectionLoad('magnificently', dataImpression.magnificently, dataImpression.impressions, position);
}

function sectionLoad(grade, count, total, position) {
  var circle = document.querySelector('.' + grade);
  var percent = count / total * 100;
  circle.setAttribute('stroke-dasharray', percent + ' ' + 100);
  circle.setAttribute('stroke-dashoffset', '-' + position);
  var bufer = document.querySelector('.' + grade + '__bufer');
  bufer.setAttribute('stroke-dasharray', '1 100');
  position += percent;
  bufer.setAttribute('stroke-dashoffset', '-' + position);
  var animation = document.querySelector('#' + grade + '__anim');
  animation.setAttribute('to', percent + ' ' + 100);
  return position;
}

/***/ }),

/***/ "./styles/room-details.css":
/*!*********************************!*\
  !*** ./styles/room-details.css ***!
  \*********************************/
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
/******/ 			"roomDetails": 0,
/******/ 			"node_modules_normalize_css_normalize_css-common_blocks_footer_footer_css-fonts_fontawesome_al-ff57be": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","node_modules_normalize_css_normalize_css-common_blocks_footer_footer_css-fonts_fontawesome_al-ff57be","common_blocks_calendar_calendar_js-common_blocks_guests-dropdown_guests-dropdown_js-common_bl-7a09f5"], function() { return __webpack_require__("./scripts/room-details.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=roomDetails.js.map