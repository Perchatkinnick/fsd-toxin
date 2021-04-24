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

/***/ "./styles/room-details.css":
/*!*********************************!*\
  !*** ./styles/room-details.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/room-details.css?");

/***/ }),

/***/ "./common.blocks/show-rooms/data.js":
/*!******************************************!*\
  !*** ./common.blocks/show-rooms/data.js ***!
  \******************************************/
/***/ ((module) => {

eval("\r\nconst roomsData = [\r\n    {\r\n        room: '888',\r\n        price: '9990',\r\n        stars: '5',\r\n        isLux: 'true',\r\n        review: '145'\r\n    },\r\n    {\r\n        room: '350',\r\n        price: '5000',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '77'\r\n    },\r\n    {\r\n        room: '352',\r\n        price: '5000',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '55'\r\n    },\r\n    {\r\n        room: '444',\r\n        price: '5000',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '15'\r\n    },\r\n    {\r\n        room: '450',\r\n        price: '5300',\r\n        stars: '4',\r\n        isLux: 'false',\r\n        review: '39'\r\n    },\r\n    {\r\n        room: '666',\r\n        price: '5000',\r\n        stars: '4',\r\n        isLux: 'false',\r\n        review: '25'\r\n    },\r\n    {\r\n        room: '678',\r\n        price: '5500',\r\n        stars: '5',\r\n        isLux: 'false',\r\n        review: '45'\r\n    },\r\n    {\r\n        room: '740',\r\n        price: '6000',\r\n        stars: '5',\r\n        isLux: 'true',\r\n        review: '145'\r\n    },\r\n    {\r\n        room: '840',\r\n        price: '9990',\r\n        stars: '4',\r\n        isLux: 'false',\r\n        review: '65'\r\n    },\r\n    {\r\n        room: '856',\r\n        price: '7300',\r\n        stars: '5',\r\n        isLux: 'false',\r\n        review: '19'\r\n    },\r\n    {\r\n        room: '980',\r\n        price: '8500',\r\n        stars: '3',\r\n        isLux: 'true',\r\n        review: '35'\r\n    },\r\n    {\r\n        room: '982',\r\n        price: '5800',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '56'\r\n    },\r\n    {\r\n        room: '234',\r\n        price: '4500',\r\n        stars: '4',\r\n        isLux: 'true',\r\n        review: '47'\r\n    },\r\n    {\r\n        room: '134',\r\n        price: '4000',\r\n        stars: '5',\r\n        isLux: 'false',\r\n        review: '23'\r\n    },\r\n    {\r\n        room: '500',\r\n        price: '4900',\r\n        stars: '4',\r\n        isLux: 'true',\r\n        review: '77'\r\n    },\r\n    {\r\n        room: '401',\r\n        price: '4000',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '121'\r\n    },\r\n    {\r\n        room: '760',\r\n        price: '3500',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '33'\r\n    },\r\n    {\r\n        room: '656',\r\n        price: '4700',\r\n        stars: '5',\r\n        isLux: 'true',\r\n        review: '9'\r\n    },\r\n    {\r\n        room: '432',\r\n        price: '3000',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '58'\r\n    },\r\n    {\r\n        room: '903',\r\n        price: '2500',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '59'\r\n    },\r\n]\r\n\r\nmodule.exports = {\r\n\troomsData\r\n}\n\n//# sourceURL=webpack:///./common.blocks/show-rooms/data.js?");

/***/ }),

/***/ "./scripts/room-details.js":
/*!*********************************!*\
  !*** ./scripts/room-details.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_room_details_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/room-details.css */ \"./styles/room-details.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _blocks_header_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blocks/header/header.css */ \"./common.blocks/header/header.css\");\n/* harmony import */ var _blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/footer/footer.css */ \"./common.blocks/footer/footer.css\");\n/* harmony import */ var _blocks_calendar_calendar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/calendar/calendar.css */ \"./common.blocks/calendar/calendar.css\");\n/* harmony import */ var _blocks_guests_dropdown_guests_dropdown_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown.css */ \"./common.blocks/guests-dropdown/guests-dropdown.css\");\n/* harmony import */ var _blocks_logo_logo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/logo/logo.css */ \"./common.blocks/logo/logo.css\");\n/* harmony import */ var _blocks_login_button_login_button_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blocks/login-button/login-button.css */ \"./common.blocks/login-button/login-button.css\");\n/* harmony import */ var _blocks_menu_menu_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blocks/menu/menu.css */ \"./common.blocks/menu/menu.css\");\n/* harmony import */ var _fonts_montserrat_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fonts/montserrat.css */ \"./fonts/montserrat.css\");\n/* harmony import */ var _fonts_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fonts/fontawesome/all.min.css */ \"./fonts/fontawesome/all.min.css\");\n/* harmony import */ var _fonts_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fonts/iconfont/material-icons.css */ \"./fonts/iconfont/material-icons.css\");\n﻿\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst calendar = __webpack_require__(/*! @blocks/calendar/calendar */ \"./common.blocks/calendar/calendar.js\");\r\nconst guestsDropdown = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown */ \"./common.blocks/guests-dropdown/guests-dropdown.js\");\r\nconst header = __webpack_require__(/*! @blocks/header/header */ \"./common.blocks/header/header.js\");\r\nconst roomsData = __webpack_require__(/*! @blocks/show-rooms/data */ \"./common.blocks/show-rooms/data.js\");\r\n\r\n\r\nlet roomsDataParth = [\r\n    {\r\n\r\n        //more info about room... and than ->\r\n        reviews: [\r\n            {\r\n                user: 1,\r\n                date: '2021.03.23',\r\n                text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',\r\n                likes: 12,\r\n            },\r\n            {\r\n                user: 2,\r\n                date: '2021.03.21',\r\n                text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',\r\n                likes: 2,\r\n            },\r\n        ],\r\n        serviceFee: '-2179',\r\n        extraFee: '300',\r\n    },\r\n    {\r\n        //next room\r\n    }\r\n];\r\n\r\nlet users = [\r\n    {\r\n        id: 1,\r\n        name: 'Мурад',\r\n        lastName: 'Сарафанов',\r\n        sex: 'm',\r\n        birthday: '',\r\n        email: '',\r\n        pass: '',\r\n        mailing: false,\r\n    },\r\n    {\r\n        id: 2,\r\n        name: 'Патрисия',\r\n        lastName: 'Стёклышкова',\r\n        sex: 'f',\r\n        birthday: '',\r\n        email: '',\r\n        pass: '',\r\n        mailing: false,\r\n    },\r\n];\r\n\r\nlet roomData = JSON.parse(localStorage.getItem(\"roomData\"));\r\nheader.onHeaderLoad();\r\n\r\nloadPhoto(roomData);\r\n\r\nloadDiagramm();\r\nloadCounts();\r\nloadReviews();\r\nloadBooking(roomData);\r\ncalendar.func();\r\nloadCalendar();\r\nloadGuestsDropdaun();\r\nloadCalculator(roomData);\r\n\r\n\r\ndocument.addEventListener(\"changeDate\", function (event) {\r\n    loadCalculator(roomData);\r\n});\r\n\r\ndocument.addEventListener(\"changeGuests\", function (event) {\r\n\r\n});\r\n\r\n\r\nfunction loadCalculator(roomData) {\r\n    loadMainString(roomData);\r\n    loadFee();\r\n    loadExtraFee();\r\n    loadTotal();\r\n}\r\n\r\nfunction loadTotal() {\r\n    let parent = document.querySelector('.content__booking__calculator__total');\r\n    let priceElem = parent.children[2];\r\n\r\n    let roomPrice = +document.querySelector('.content__booking__calculator__main').children[2].innerHTML.split('\\u20bd')[0];\r\n\r\n    let total = roomPrice + +roomsDataParth[0].serviceFee + +roomsDataParth[0].extraFee;\r\n\r\n    priceElem.innerHTML = total + '\\u20bd';\r\n    loadSeparatorForTotal(parent.children[1]);\r\n}\r\n\r\nfunction loadSeparatorForTotal(parent) {\r\n    let separator = document.createElement('div');\r\n    separator.classList.add('content__booking__calculator__total__separator__body');\r\n\r\n    let previousSibling = parent.previousElementSibling;\r\n    let left = previousSibling.offsetWidth;\r\n    separator.style.left = left + 8 + 'px';\r\n\r\n    let containerWidth = parent.parentElement.offsetWidth;\r\n    separator.style.width = containerWidth - parent.parentElement.children[2].offsetWidth - left - 16 + 'px';\r\n\r\n    parent.appendChild(separator);\r\n}\r\n\r\nfunction loadExtraFee() {\r\n    let parent = document.querySelector('.content__booking__calculator__extrafee');\r\n    let valueElem = parent.children[0];\r\n    let priceElem = parent.children[2];\r\n\r\n    valueElem.innerHTML = 'Сбор за доп. услуги';\r\n    priceElem.innerHTML = roomsDataParth[0].extraFee + '\\u20bd';\r\n    loadSeparator(parent.children[1]);\r\n}\r\n\r\nfunction loadFee() {\r\n    let parent = document.querySelector('.content__booking__calculator__fee');\r\n    let valueElem = parent.children[0];\r\n    let priceElem = parent.children[2];\r\n\r\n    let valueFee = +roomsDataParth[0].serviceFee;\r\n    let textValue = 'Сбор за услуги: ';\r\n    let textPrice = '\\u20bd';\r\n    if (valueFee < 0) {\r\n        textValue += 'скидка ';\r\n        textPrice = '0' + textPrice;\r\n    } else {\r\n        textPrice = valueFee + textPrice;\r\n    }\r\n\r\n    textValue += Math.abs(valueFee) + '\\u20bd';\r\n    valueElem.innerHTML = textValue;\r\n\r\n    priceElem.innerHTML = textPrice;\r\n\r\n    loadSeparator(parent.children[1]);\r\n}\r\n\r\nfunction loadSeparator(parent) {\r\n    let separator = document.createElement('div');\r\n    separator.classList.add('content__booking__calculator__separator__body');\r\n    separator.innerHTML = 'i'\r\n    let previousSibling = parent.previousElementSibling;\r\n    let left = previousSibling.offsetWidth;\r\n    separator.style.left = left + 8 + 'px';\r\n\r\n\r\n    parent.appendChild(separator);\r\n}\r\n\r\nfunction loadMainString(roomData) {\r\n    let parent = document.querySelector('.content__booking__calculator__main');\r\n    let valueElem = parent.children[0];\r\n    let priceElem = parent.children[2];\r\n\r\n    let period = countDays();\r\n    let coast = roomData.price;\r\n\r\n    valueElem.innerHTML = coast + '\\u20bd x ' + period + ' суток';\r\n    priceElem.innerHTML = String(coast * period) + '\\u20bd';\r\n}\r\n\r\nfunction countDays() {\r\n    let f = localStorage.getItem('dateArrive');\r\n    if (f != '') {\r\n        let arriveDate = new Date(localStorage.getItem('dateArrive'));\r\n        let departureDate = new Date(localStorage.getItem('dateDeparture'));\r\n\r\n        let period = Math.round((departureDate - arriveDate) / (60 * 60 * 24 * 1000)) + 1;\r\n        return period;\r\n    }\r\n}\r\n\r\nfunction loadGuestsDropdaun() {\r\n    let guestsElem = document.querySelector('.content__booking__guests');\r\n    guestsElem.addEventListener('click', onGuestsElemClickHandler);\r\n\r\n    let guestsValue = document.querySelector('.content__booking__guests__value');\r\n    let guestsBabies = localStorage.getItem('guestsBabies');\r\n    let guestsChildren = localStorage.getItem('guestsChildren');\r\n    let guestsAdult = localStorage.getItem('guestsAdult');\r\n\r\n    if (guestsBabies != null && guestsChildren != null && guestsAdult != null) {\r\n        guestsValue.innerHTML = guestsAdult + ' гостя';\r\n        if (guestsChildren != 0) {\r\n            guestsValue.innerHTML += ', ' + guestsChildren + ' детей';\r\n        }\r\n\r\n        if (guestsBabies != 0) {\r\n            guestsValue.innerHTML += ', ' + guestsBabies + ' младенцев';\r\n        }\r\n    }\r\n}\r\n\r\nfunction onGuestsElemClickHandler() {\r\n    let guestsForm = document.querySelector('.guests-dropdown');\r\n\r\n    if (guestsForm.style.display == '') {\r\n        guestsForm.style.display = 'block';\r\n        onGuestsDropdaunLoad();\r\n    } else {\r\n        guestsForm.style.display = '';\r\n    }\r\n}\r\n\r\nfunction loadCalendar() {\r\n    let arriveElem = document.querySelector('.content__booking__date__arrive');\r\n    arriveElem.addEventListener('click', showCalendar);\r\n\r\n    let departureElem = document.querySelector('.content__booking__date__departure');\r\n    departureElem.addEventListener('click', showCalendar);\r\n}\r\n\r\nfunction showCalendar() {\r\n    let calendar = document.querySelector('.content__booking__calendar');\r\n\r\n    if (calendar.style.display == '') {\r\n        calendar.style.display = 'block';\r\n        \r\n    } else {\r\n        calendar.style.display = '';\r\n\r\n        let days = document.querySelector('#days');\r\n        let body = days.querySelector('.body');\r\n        body.dataset.dot1 = '';\r\n        body.dataset.dot2 = '';\r\n    }\r\n}\r\n\r\nfunction loadBooking(roomData) {\r\n    let numberElem = document.querySelector('.content__booking__number');\r\n    numberElem.innerHTML = '<span style=\"font-size: 10px\">№ </span>' + roomData.room;\r\n\r\n    let luxElem = document.querySelector('.content__booking__lux');\r\n    if (roomData.isLux == 'true') {\r\n        luxElem.innerHTML = 'люкс';\r\n    }\r\n\r\n    let priceElem = document.querySelector('.content__booking__price');\r\n    priceElem.innerHTML = roomData.price + '\\u20bd <span style=\"font-size: 11px; opacity: 0.4\">в сутки</span>';\r\n\r\n    let arriveDate = getValidDate(localStorage.getItem('dateArrive'));\r\n    let departureDate = getValidDate(localStorage.getItem('dateDeparture'));\r\n    let arriveElem = document.querySelector('.arrive-date');\r\n    arriveElem.innerHTML = arriveDate;\r\n    let departureElem = document.querySelector('.departure-date');\r\n    departureElem.innerHTML = departureDate;\r\n}\r\n\r\nfunction getValidDate(date) {\r\n    let arr = date.split('.');\r\n    let month = +arr[1] + 1;\r\n    if (month > 12) {\r\n        month = 1;\r\n    }\r\n    if (month < 10) {\r\n        month = '0' + String(month);\r\n    }\r\n    date = arr[2] + '.' + month + '.' + arr[0]\r\n    return date;\r\n}\r\n\r\nfunction loadCounts() {\r\n    let count = roomsDataParth[0].reviews.length;\r\n    let container = document.querySelector('.content__details__reviews__count');\r\n    container.innerHTML = count + ' отзыва';\r\n}\r\n\r\nfunction loadReviews() {\r\n    let container = document.querySelector('.content__details__reviews__container');\r\n\r\n    let count = roomsDataParth[0].reviews.length;\r\n\r\n    for (let i = 0; i < count; i++) {\r\n        let review = document.createElement('div');\r\n        review.classList.add('content__details__reviews__container__review');\r\n\r\n        let userPhoto = document.createElement('div');\r\n        userPhoto.classList.add('content__details__reviews__container__review__photo');\r\n        let userID = roomsDataParth[0].reviews[i].user;\r\n        userPhoto.style.background = 'url(\"../src/media/images/users/' + userID + '.png\")'; \r\n        review.appendChild(userPhoto);\r\n\r\n        let user = users.find(user => user.id === userID);\r\n\r\n        let name = document.createElement('div');\r\n        name.classList.add('content__details__reviews__container__review__name');\r\n        name.innerHTML = user.name + ' ' + user.lastName;\r\n        review.appendChild(name);\r\n\r\n        let dateElement = document.createElement('div');\r\n        dateElement.classList.add('content__details__reviews__container__review__date');\r\n        let date = new Date(roomsDataParth[0].reviews[i].date);\r\n        let now = new Date();\r\n        let diff = Math.round((now - date) / (60 * 60 * 24 * 1000));\r\n        dateElement.innerHTML = diff + ' дней назад';\r\n        review.appendChild(dateElement);\r\n\r\n        let text = document.createElement('div');\r\n        text.classList.add('content__details__reviews__container__review__text');\r\n        text.innerHTML = roomsDataParth[0].reviews[i].text;\r\n        review.appendChild(text);\r\n\r\n        let likeContainer = document.createElement('div');\r\n        likeContainer.classList.add('content__details__reviews__container__review__likeContainer');\r\n        likeContainer.addEventListener('click', onLikeClickHandler);\r\n        review.appendChild(likeContainer);\r\n\r\n        let heart = document.createElement('div');\r\n        heart.classList.add('content__details__reviews__container__review__likeContainer__heart');\r\n        heart.innerHTML = 'favorite_border';\r\n        likeContainer.appendChild(heart);\r\n\r\n        let count = document.createElement('div');\r\n        count.classList.add('content__details__reviews__container__review__likeContainer__count');\r\n        count.innerHTML = String(roomsDataParth[0].reviews[i].likes);\r\n        likeContainer.appendChild(count);\r\n\r\n        container.appendChild(review);\r\n    }\r\n}\r\n\r\nfunction onLikeClickHandler(e) {\r\n    if (!e.target.classList.contains('content__details__reviews__container__review__likeContainer')) {\r\n        let container = e.target.parentElement;\r\n        container.classList.toggle('content__details__reviews__container__review__likeContainer__checkked');\r\n        let heart = container.querySelector('.content__details__reviews__container__review__likeContainer__heart');\r\n        heart.classList.toggle('content__details__reviews__container__review__likeContainer__heart__checked');\r\n        if (heart.innerHTML == 'favorite_border') {\r\n            heart.innerHTML = 'favorite';\r\n        } else {\r\n            heart.innerHTML = 'favorite_border';\r\n        }\r\n        let count = container.querySelector('.content__details__reviews__container__review__likeContainer__count');\r\n        count.classList.toggle('content__details__reviews__container__review__likeContainer__count__checked');\r\n        if (count.classList.contains('content__details__reviews__container__review__likeContainer__count__checked')) {\r\n            count.innerHTML++;\r\n        } else {\r\n            count.innerHTML--;\r\n        }\r\n    }\r\n    \r\n}\r\n\r\nfunction loadDiagramm() {\r\n    // get from localStorage or search from DB wrigth now\r\n    let dataImpression = {\r\n        impressions: 260,\r\n        magnificently: 120,\r\n        good: 65,\r\n        passably: 65,\r\n        bad: 10,\r\n    }\r\n\r\n    let total = dataImpression.impressions;\r\n\r\n    let voteCount = document.querySelector('.content__details__impression__diagramm__vote__count');\r\n    voteCount.innerHTML = String(total);\r\n\r\n    let position = 1;\r\n\r\n    position = sectionLoad('bad', dataImpression.bad, dataImpression.impressions, position);\r\n    position = sectionLoad('passably', dataImpression.passably, dataImpression.impressions, position);\r\n    position = sectionLoad('good', dataImpression.good, dataImpression.impressions, position);\r\n    position = sectionLoad('magnificently', dataImpression.magnificently, dataImpression.impressions, position);\r\n} \r\n\r\nfunction sectionLoad(grade, count, total, position) {\r\n    let circle = document.querySelector('.' + grade);\r\n    let percent = count / total * 100;\r\n\r\n    circle.setAttribute('stroke-dasharray', percent + ' ' + 100);\r\n    circle.setAttribute('stroke-dashoffset', '-' + position);\r\n\r\n    let bufer = document.querySelector('.' + grade + '__bufer');\r\n    bufer.setAttribute('stroke-dasharray', '1 100');\r\n\r\n    position += percent;\r\n    bufer.setAttribute('stroke-dashoffset', '-' + position);\r\n\r\n    let animation = document.querySelector('#' + grade + '__anim');\r\n    animation.setAttribute('to', percent + ' ' + 100);\r\n\r\n    return position;\r\n}\r\n\r\nfunction loadPhoto(roomData) {\r\n    let mainPhoto = document.querySelector('.content__gallery__main');\r\n    mainPhoto.style.background = 'no-repeat url(\"../src/media/images/rooms/' + roomData.room + '/main.png\")';\r\n\r\n    let secPhoto = document.querySelector('.content__gallery__2');\r\n    secPhoto.style.background = 'no-repeat url(\"../src/media/images/rooms/' + roomData.room + '/image 2.png\")';\r\n\r\n    let thrdPhoto = document.querySelector('.content__gallery__3');\r\n    thrdPhoto.style.background = 'no-repeat url(\"../src/media/images/rooms/' + roomData.room + '/image 3.png\")';\r\n}\n\n//# sourceURL=webpack:///./scripts/room-details.js?");

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
/******/ 			"roomDetails": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","node_modules_normalize_css_normalize_css-common_blocks_footer_footer_css-common_blocks_header-2c7e07","common_blocks_calendar_calendar_css-common_blocks_footer_footer_css-common_blocks_guests-drop-95a510"], () => (__webpack_require__("./scripts/room-details.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;