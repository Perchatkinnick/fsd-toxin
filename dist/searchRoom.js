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

/***/ "./common.blocks/facilities-dropdown/facilities-dropdown.css":
/*!*******************************************************************!*\
  !*** ./common.blocks/facilities-dropdown/facilities-dropdown.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/facilities-dropdown/facilities-dropdown.css?");

/***/ }),

/***/ "./common.blocks/show-rooms/show-rooms.css":
/*!*************************************************!*\
  !*** ./common.blocks/show-rooms/show-rooms.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./common.blocks/show-rooms/show-rooms.css?");

/***/ }),

/***/ "./styles/search-room.css":
/*!********************************!*\
  !*** ./styles/search-room.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/search-room.css?");

/***/ }),

/***/ "./common.blocks/facilities-dropdown/facilities-dropdown.js":
/*!******************************************************************!*\
  !*** ./common.blocks/facilities-dropdown/facilities-dropdown.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("module.exports = {\r\n\taddFacilitiesDropdown\r\n}\r\n\r\nfunction addFacilitiesDropdown() {\r\n    let facilitiesDropdown = document.querySelector('.facilities__dropdown');\r\n\r\n    if (facilitiesDropdown.style.display == '') {\r\n        facilitiesDropdown.style.display = 'block';\r\n        onFacilitiesDropdaunLoad();\r\n    } else {\r\n        facilitiesDropdown.style.display = '';\r\n    }\r\n}\r\n\r\n\r\nfunction onFacilitiesDropdaunLoad() {\r\n    \r\n\r\n    let minuses = document.getElementsByClassName('facilities__minus');\r\n    for (let minus of minuses) {\r\n        minus.addEventListener('click', onMinusClick)\r\n    }\r\n\r\n    let pluses = document.getElementsByClassName('facilities__plus');\r\n    for (let plus of pluses) {\r\n        plus.addEventListener('click', onPlusClick)\r\n    }\r\n\r\n}\r\n\r\nfunction onPlusClick(e) {\r\n    let count = e.target.previousElementSibling;\r\n    count.innerHTML = +count.innerHTML + 1;\r\n\r\n    let parent = e.target.parentElement;\r\n    addCount(parent, count.innerHTML);\r\n}\r\n\r\nfunction onMinusClick(e) {\r\n    let count = e.target.nextElementSibling; \r\n    count.innerHTML = +count.innerHTML - 1;\r\n\r\n    if (count.innerHTML < 1) {\r\n        count.innerHTML = 0;\r\n    }\r\n\r\n    let parent = e.target.parentElement;\r\n    addCount(parent, count.innerHTML);\r\n}\r\n\r\nfunction addCount(elem, count) {\r\n    switch (elem.classList[0]) {\r\n        case 'facilities__dropdown__bedrooms':\r\n            addBedrooms(count);\r\n            break;\r\n        case 'facilities__dropdown__beds':\r\n            addBeds(count);\r\n            break;\r\n        case 'facilities__dropdown__bathrooms':\r\n            addBathrooms(count);\r\n            break;\r\n    }\r\n}\r\n\r\nfunction addBathrooms(count) {\r\n    let text = '';\r\n\r\n    switch (count) {\r\n        case '1':\r\n            text = '1 ванная комната';\r\n            break;\r\n        case '2':\r\n            text = '2 ванных комнаты';\r\n            break;\r\n        case '3':\r\n            text = '3 ванных комнаты';\r\n            break;\r\n        case '4':\r\n            text = '4 ванных комнаты';\r\n            break;\r\n        case '5':\r\n            text = '5 ванных комнат';\r\n            break;\r\n        default:\r\n            text = count + ' ванных комнат';\r\n            break;\r\n    }\r\n\r\n    /*let container = document.querySelector('.content__room-settings__facilities__title');\r\n    let arr = container.innerHTML.split(', ');\r\n    if (arr[2] != null) {\r\n        arr[2] = text;\r\n    } \r\n\r\n    container.innerHTML = arr.join(', ');*/\r\n}\r\n\r\nfunction addBedrooms(count) {\r\n    let text = '';\r\n\r\n    switch (count) {\r\n        case '1':\r\n            text = '1 спальня';\r\n            break;\r\n        case '2':\r\n            text = '2 спальни';\r\n            break;\r\n        case '3':\r\n            text = '3 спальни';\r\n            break;\r\n        case '4':\r\n            text = '4 спальни';\r\n            break;\r\n        case '5':\r\n            text = '5 спален';\r\n            break;\r\n        default:\r\n            text = count + ' спален';\r\n            break;\r\n    }\r\n\r\n    let container = document.querySelector('.content__room-settings__facilities__title');\r\n    let arr = container.innerHTML.split(', ');\r\n    if (arr[0] != null) {\r\n        arr[0] = text;\r\n    }\r\n\r\n    container.innerHTML = arr.join(', ');\r\n}\r\n\r\nfunction addBeds(count) {\r\n    let text = '';\r\n\r\n    switch (count) {\r\n        case '1':\r\n            text = '1 кровать';\r\n            break;\r\n        case '2':\r\n            text = '2 кровати';\r\n            break;\r\n        case '3':\r\n            text = '3 кровати';\r\n            break;\r\n        case '4':\r\n            text = '4 кровати';\r\n            break;\r\n        case '5':\r\n            text = '5 кроватей';\r\n            break;\r\n        default:\r\n            text = count + ' кроватей';\r\n            break;\r\n    }\r\n\r\n    let container = document.querySelector('.content__room-settings__facilities__title');\r\n    let arr = container.innerHTML.split(', ');\r\n    \r\n    if (arr[1] != null) {\r\n        arr[1] = text;\r\n    } \r\n\r\n    container.innerHTML = arr.join(', ');\r\n}\n\n//# sourceURL=webpack:///./common.blocks/facilities-dropdown/facilities-dropdown.js?");

/***/ }),

/***/ "./common.blocks/show-rooms/data.js":
/*!******************************************!*\
  !*** ./common.blocks/show-rooms/data.js ***!
  \******************************************/
/***/ ((module) => {

eval("\r\nconst roomsData = [\r\n    {\r\n        room: '888',\r\n        price: '9990',\r\n        stars: '5',\r\n        isLux: 'true',\r\n        review: '145'\r\n    },\r\n    {\r\n        room: '350',\r\n        price: '5000',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '77'\r\n    },\r\n    {\r\n        room: '352',\r\n        price: '5000',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '55'\r\n    },\r\n    {\r\n        room: '444',\r\n        price: '5000',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '15'\r\n    },\r\n    {\r\n        room: '450',\r\n        price: '5300',\r\n        stars: '4',\r\n        isLux: 'false',\r\n        review: '39'\r\n    },\r\n    {\r\n        room: '666',\r\n        price: '5000',\r\n        stars: '4',\r\n        isLux: 'false',\r\n        review: '25'\r\n    },\r\n    {\r\n        room: '678',\r\n        price: '5500',\r\n        stars: '5',\r\n        isLux: 'false',\r\n        review: '45'\r\n    },\r\n    {\r\n        room: '740',\r\n        price: '6000',\r\n        stars: '5',\r\n        isLux: 'true',\r\n        review: '145'\r\n    },\r\n    {\r\n        room: '840',\r\n        price: '9990',\r\n        stars: '4',\r\n        isLux: 'false',\r\n        review: '65'\r\n    },\r\n    {\r\n        room: '856',\r\n        price: '7300',\r\n        stars: '5',\r\n        isLux: 'false',\r\n        review: '19'\r\n    },\r\n    {\r\n        room: '980',\r\n        price: '8500',\r\n        stars: '3',\r\n        isLux: 'true',\r\n        review: '35'\r\n    },\r\n    {\r\n        room: '982',\r\n        price: '5800',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '56'\r\n    },\r\n    {\r\n        room: '234',\r\n        price: '4500',\r\n        stars: '4',\r\n        isLux: 'true',\r\n        review: '47'\r\n    },\r\n    {\r\n        room: '134',\r\n        price: '4000',\r\n        stars: '5',\r\n        isLux: 'false',\r\n        review: '23'\r\n    },\r\n    {\r\n        room: '500',\r\n        price: '4900',\r\n        stars: '4',\r\n        isLux: 'true',\r\n        review: '77'\r\n    },\r\n    {\r\n        room: '401',\r\n        price: '4000',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '121'\r\n    },\r\n    {\r\n        room: '760',\r\n        price: '3500',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '33'\r\n    },\r\n    {\r\n        room: '656',\r\n        price: '4700',\r\n        stars: '5',\r\n        isLux: 'true',\r\n        review: '9'\r\n    },\r\n    {\r\n        room: '432',\r\n        price: '3000',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '58'\r\n    },\r\n    {\r\n        room: '903',\r\n        price: '2500',\r\n        stars: '3',\r\n        isLux: 'false',\r\n        review: '59'\r\n    },\r\n]\r\n\r\nmodule.exports = {\r\n\troomsData\r\n}\n\n//# sourceURL=webpack:///./common.blocks/show-rooms/data.js?");

/***/ }),

/***/ "./common.blocks/show-rooms/show-rooms.js":
/*!************************************************!*\
  !*** ./common.blocks/show-rooms/show-rooms.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const data = __webpack_require__(/*! ./data */ \"./common.blocks/show-rooms/data.js\");\r\n\r\nmodule.exports = {\r\n\tloadRooms\r\n}\r\n\r\nfunction loadRooms(page) {\r\n    buildGrid(sort(data.roomsData), page);\r\n}\r\n\r\nfunction buildGrid(rooms, page) {\r\n    let container = document.querySelector('.content__show__rooms');\r\n    container.innerHTML = '';\r\n\r\n    for (let i = 12 * (page - 1); i < 12 * page; i++) {\r\n        if (i < data.roomsData.length) {\r\n            let div = document.createElement('div');\r\n            div.classList.add('room');\r\n            div.addEventListener('click', onRoomClickHandler);\r\n            div.dataset.room = rooms[i].room;\r\n            div.style.background = 'no-repeat url(\"../src/media/images/rooms/' + rooms[i].room + '/icon.png\")';\r\n            container.appendChild(div);\r\n\r\n            for (let k = 0; k < 4; k++) {\r\n                let ellips = document.createElement('div');\r\n                ellips.classList.add('ellips');\r\n\r\n                if (k == 0) {\r\n                    ellips.classList.add('ellips__checked');\r\n                    ellips.style.left = '213.75px';\r\n                }else {\r\n                    let pos = (k * 11.25) + 213.75;\r\n                    ellips.style.left =  String(pos) + 'px';\r\n                }\r\n\r\n                ellips.addEventListener('click', onEllipsClickHandler);\r\n                div.appendChild(ellips);\r\n            }\r\n\r\n            let number = document.createElement('div');\r\n            number.classList.add('number');\r\n            number.innerHTML = '<span style=\"font-size: 11px\">№ </span>' + rooms[i].room;\r\n            div.appendChild(number);\r\n\r\n            let coast = document.createElement('div');\r\n            coast.classList.add('coast');\r\n            coast.innerHTML = rooms[i].price + '\\u20bd <span style=\"font-size: 11px; opacity: 0.4\">в сутки</span>';\r\n            div.appendChild(coast);\r\n\r\n            let line = document.createElement('div');\r\n            line.classList.add('line');\r\n            div.appendChild(line);\r\n\r\n\r\n            let stars = rooms[i].stars;\r\n            for (let k = 1; k < 6; k++) {\r\n                let star = document.createElement('i');\r\n                star.classList.add('material-icons', 'star');\r\n                if (k > +stars) {\r\n                    star.innerHTML = 'star_border';\r\n                } else {\r\n                    star.innerHTML = 'star';\r\n                }\r\n\r\n                div.appendChild(star);\r\n            }\r\n\r\n            let lux = document.createElement('div');\r\n            lux.classList.add('lux');\r\n            if (rooms[i].isLux == 'true') {\r\n                lux.innerHTML = 'люкс';\r\n            }\r\n            div.appendChild(lux);\r\n\r\n            let review = document.createElement('div');\r\n            review.classList.add('review');\r\n            review.innerHTML = rooms[i].review + '<span style=\"font-size: 11px; opacity: 0.4\"> Отзывов</span>'\r\n            div.appendChild(review);\r\n        }else {\r\n            let div = document.createElement('div');\r\n            div.classList.add('room');\r\n            div.style.boxShadow = 'none';\r\n            div.style.cursor = 'auto';\r\n            container.appendChild(div);\r\n        }\r\n    }\r\n}\r\n\r\nfunction onRoomClickHandler(e) {\r\n    let number = e.target.dataset.room;\r\n    let roomData;\r\n    for (let room of data.roomsData) {\r\n        if (room.room == number) {\r\n            roomData = room;\r\n        }\r\n    }\r\n    localStorage.setItem('roomData', JSON.stringify(roomData));\r\n\r\n    location.href = 'room-details.html';\r\n}\r\n\r\nfunction onEllipsClickHandler(e) {\r\n    let ellipses = e.target.parentElement.getElementsByClassName('ellips');\r\n    for (let ellips of ellipses) {\r\n        ellips.classList.remove('ellips__checked');\r\n    }\r\n\r\n    e.target.classList.add('ellips__checked');\r\n\r\n}\r\n\r\nfunction sort(rooms) {\r\n    let byPrice = rooms.slice(0);\r\n    byPrice.sort(function (a, b) {\r\n        return b.price - a.price;\r\n    });\r\n\r\n    return byPrice;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./common.blocks/show-rooms/show-rooms.js?");

/***/ }),

/***/ "./scripts/search-room.js":
/*!********************************!*\
  !*** ./scripts/search-room.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_search_room_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/search-room.css */ \"./styles/search-room.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _fonts_montserrat_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fonts/montserrat.css */ \"./fonts/montserrat.css\");\n/* harmony import */ var _fonts_fontawesome_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fonts/fontawesome/all.min.css */ \"./fonts/fontawesome/all.min.css\");\n/* harmony import */ var _fonts_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fonts/iconfont/material-icons.css */ \"./fonts/iconfont/material-icons.css\");\n/* harmony import */ var _blocks_guests_dropdown_guests_dropdown_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown.css */ \"./common.blocks/guests-dropdown/guests-dropdown.css\");\n/* harmony import */ var _blocks_calendar_calendar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/calendar/calendar.css */ \"./common.blocks/calendar/calendar.css\");\n/* harmony import */ var _blocks_header_header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blocks/header/header.css */ \"./common.blocks/header/header.css\");\n/* harmony import */ var _blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blocks/footer/footer.css */ \"./common.blocks/footer/footer.css\");\n/* harmony import */ var _blocks_logo_logo_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blocks/logo/logo.css */ \"./common.blocks/logo/logo.css\");\n/* harmony import */ var _blocks_login_button_login_button_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blocks/login-button/login-button.css */ \"./common.blocks/login-button/login-button.css\");\n/* harmony import */ var _blocks_menu_menu_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @blocks/menu/menu.css */ \"./common.blocks/menu/menu.css\");\n/* harmony import */ var _blocks_show_rooms_show_rooms_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @blocks/show-rooms/show-rooms.css */ \"./common.blocks/show-rooms/show-rooms.css\");\n/* harmony import */ var _blocks_facilities_dropdown_facilities_dropdown_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @blocks/facilities-dropdown/facilities-dropdown.css */ \"./common.blocks/facilities-dropdown/facilities-dropdown.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst calendar = __webpack_require__(/*! @blocks/calendar/calendar */ \"./common.blocks/calendar/calendar.js\");\r\nconst header = __webpack_require__(/*! @blocks/header/header */ \"./common.blocks/header/header.js\");\r\nconst guestsDropdown = __webpack_require__(/*! @blocks/guests-dropdown/guests-dropdown */ \"./common.blocks/guests-dropdown/guests-dropdown.js\");\r\nconst facilitiesDropdown = __webpack_require__(/*! @blocks/facilities-dropdown/facilities-dropdown */ \"./common.blocks/facilities-dropdown/facilities-dropdown.js\");\r\nconst showRooms = __webpack_require__(/*! @blocks/show-rooms/show-rooms */ \"./common.blocks/show-rooms/show-rooms.js\");\r\nconst roomsData = __webpack_require__(/*! @blocks/show-rooms/data */ \"./common.blocks/show-rooms/data.js\");\r\n\r\nheader.onHeaderLoad();\r\n\r\nlet contentDateRect = document.querySelector('.content__date__rect');\r\ncontentDateRect.addEventListener('click', addCalendar);\r\nlet contentDateTitle = document.querySelector('.content__date__title');\r\ncontentDateTitle.addEventListener('click', addCalendar);\r\nlet contentDateArrow = document.querySelector('.content__date__arrow');\r\ncontentDateArrow.addEventListener('click', addCalendar);\r\n\r\nlet contentGuestsRect = document.querySelector('.content__guests__rect');\r\ncontentGuestsRect.addEventListener('click', addGuestsForm);\r\nlet contentGuestsTitle = document.querySelector('.content__guests__title');\r\ncontentGuestsTitle.addEventListener('click', addGuestsForm);\r\nlet contentGuestsArrow = document.querySelector('.content__guests__arrow');\r\ncontentGuestsArrow.addEventListener('click', addGuestsForm);\r\n\r\nlet contentFacilitiesRect = document.querySelector('.content__room-settings__facilities__rect');\r\ncontentFacilitiesRect.addEventListener('click', facilitiesDropdown.addFacilitiesDropdown);\r\nlet contentFacilitiesTitle = document.querySelector('.content__room-settings__facilities__title');\r\ncontentFacilitiesTitle.addEventListener('click', facilitiesDropdown.addFacilitiesDropdown);\r\nlet contentFacilitiesArrow = document.querySelector('.content__room-settings__facilities__arrow');\r\ncontentFacilitiesArrow.addEventListener('click', facilitiesDropdown.addFacilitiesDropdown);\r\n\r\n\r\n\r\nlet additionalArrow = document.querySelector('.content__room-settings__additional__arrow');\r\nadditionalArrow.addEventListener('click', onAdditionalArrowClick);\r\n\r\nlet checkBoxes = document.getElementsByClassName('content__home-rules__checkbox');\r\nfor (let checkBox of checkBoxes) {\r\n    checkBox.addEventListener('click', function () {\r\n        if (checkBox.dataset.checked == 'checked') {\r\n            checkBox.dataset.checked = 'none';\r\n        } else {\r\n            checkBox.dataset.checked = 'checked';\r\n        }\r\n    });\r\n}\r\n\r\nloadDataFromLocalStorage(contentDateTitle, contentGuestsTitle);\r\n\r\nshowRooms.loadRooms(1);\r\n\r\ncreatePageMarkers();\r\n\r\ncreateShowVariants(1);\r\n\r\ncalendar.func();\r\n\r\n\r\nfunction createPageMarkers() {\r\n    let len = roomsData.length;\r\n    let pages = Math.ceil(len / 12);\r\n\r\n    let container = document.querySelector('.content__show__page-navigation');\r\n\r\n    for (let i = 1; i <= pages + 1; i++) {\r\n        let marker = document.createElement('div');\r\n        if (i == 1) {\r\n            marker.classList.add('content__show__page-navigation__marker__active');\r\n        }\r\n        \r\n        if (i == pages + 1) {\r\n            marker.classList.add('material-icons', 'content__show__page-navigation__marker__forward');\r\n            marker.innerHTML = 'arrow_forward';\r\n        } else {\r\n            marker.classList.add('content__show__page-navigation__marker');\r\n            marker.innerHTML = String(i);\r\n        }\r\n\r\n        marker.addEventListener('click', onMarkerClickHandler);\r\n        \r\n        container.appendChild(marker);\r\n    }\r\n}\r\n\r\nfunction onMarkerClickHandler(e) {\r\n    if (e.target.innerHTML == 'arrow_forward') {\r\n        nextPage();\r\n    } else {\r\n        let markers = document.getElementsByClassName('content__show__page-navigation__marker');\r\n        for (let marker of markers) {\r\n            marker.classList.remove('content__show__page-navigation__marker__active');\r\n        }\r\n\r\n        e.target.classList.add('content__show__page-navigation__marker__active');\r\n\r\n        createShowVariants(+e.target.innerHTML);\r\n        loadRooms(+e.target.innerHTML);\r\n    }\r\n}\r\n\r\nfunction nextPage() {\r\n    let len = roomsData.length;\r\n    let pages = Math.ceil(len / 12);\r\n    let currentPage = document.querySelector('.content__show__page-navigation__marker__active').innerHTML;\r\n\r\n    if (+currentPage < pages) {\r\n        createShowVariants(+currentPage + 1);\r\n        loadRooms(+currentPage + 1);\r\n\r\n        let markers = document.getElementsByClassName('content__show__page-navigation__marker');\r\n        for (let marker of markers) {\r\n            marker.classList.remove('content__show__page-navigation__marker__active');\r\n            if (+marker.innerHTML == +currentPage + 1) {\r\n                marker.classList.add('content__show__page-navigation__marker__active');\r\n            }\r\n        }\r\n    }\r\n    \r\n}\r\n\r\nfunction createShowVariants(page) {\r\n    let container = document.querySelector('.content__show__variants');\r\n    let totalVariants = 12 * page;\r\n    if (totalVariants > roomsData.length) {\r\n        totalVariants = roomsData.length;\r\n    }\r\n\r\n    container.innerHTML = (12 * (page - 1) + 1) + ' – ' + totalVariants + ' из ' + roomsData.length + ' вариантов аренды'\r\n}\r\n\r\nfunction onAdditionalArrowClick(e) {\r\n    if (e.target.dataset.checked == 'checked') {\r\n        e.target.dataset.checked = 'none';\r\n    } else {\r\n        e.target.dataset.checked = 'checked';\r\n    }\r\n\r\n    let list = document.querySelector('.content__room-settings__additional__list');\r\n    if (list.style.display == '') {\r\n        list.style.display = 'block';\r\n    } else {\r\n        list.style.display = '';\r\n    }\r\n    \r\n}\r\n\r\nfunction addCalendar() {\r\n    let calendar = document.querySelector('.calendar-parent');\r\n\r\n    if (calendar.style.display == '') {\r\n        calendar.style.display = 'block';\r\n        //func();\r\n    } else {\r\n        calendar.style.display = '';\r\n\r\n        let days = document.querySelector('#days');\r\n        let body = days.querySelector('.body');\r\n        body.dataset.dot1 = '';\r\n        body.dataset.dot2 = '';\r\n    }\r\n}\r\n\r\nfunction addGuestsForm() {\r\n    let guestsForm = document.querySelector('.guests-dropdown');\r\n\r\n    if (guestsForm.style.display == '') {\r\n        guestsForm.style.display = 'block';\r\n        guestsDropdown.onGuestsDropdaunLoad();\r\n    } else {\r\n        guestsForm.style.display = '';\r\n    }\r\n}\r\n\r\nfunction loadDataFromLocalStorage(elemDate, elemGuests) {\r\n    let arriveDate = localStorage.getItem('dateArrive');\r\n    let departureDate = localStorage.getItem('dateDeparture');\r\n\r\n    if (arriveDate != null && departureDate != null) {\r\n        let complexArriveDate = calendar.getComplexDate(arriveDate);\r\n        let complexDepartureDate = calendar.getComplexDate(departureDate);\r\n\r\n        elemDate.innerHTML = complexArriveDate + ' - ' + complexDepartureDate;\r\n    }\r\n\r\n    let guestsBabies = localStorage.getItem('guestsBabies');\r\n    let guestsChildren = localStorage.getItem('guestsChildren');\r\n    let guestsAdult = localStorage.getItem('guestsAdult');\r\n\r\n    if (guestsBabies != null && guestsChildren != null && guestsAdult != null) {\r\n        elemGuests.innerHTML = guestsAdult + ' гостя';\r\n        if (guestsChildren != 0) {\r\n            elemGuests.innerHTML += ', ' + guestsChildren + ' детей';\r\n        }\r\n\r\n        if (guestsBabies != 0) {\r\n            elemGuests.innerHTML += ', ' + guestsBabies + ' младенцев';\r\n        }\r\n    }\r\n    \r\n}\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(function ($) {\r\n    var twobombSlider = (function () {\r\n        var drag = false;\r\n        var values = [];\r\n\r\n\r\n        $(\".slider\").each(function (i, e) {\r\n            updateView(e);\r\n        });\r\n        $(\".slider>.bar>.lp,.slider>.bar>.rp\").bind(\"mousedown\", function () {\r\n            drag = $(this);\r\n        })\r\n        $(document).bind(\"mousemove\", function (e) {\r\n            if (!drag)\r\n                return;\r\n            var x = (e.pageX - $(drag).outerWidth() / 2 - $(drag).parent().parent().offset().left) / $(drag).parent().parent().outerWidth();\r\n            if (x < 0) x = 0;\r\n            if (x > 1) x = 1;\r\n            var rp = $(drag).parent().find(\".rp\");\r\n            var lp = $(drag).parent().find(\".lp\");\r\n            if ($(drag).hasClass(\"lp\") && x > $(rp).attr(\"data-pos\")) {\r\n                $(rp).attr(\"data-pos\", x);\r\n            }\r\n            if ($(drag).hasClass(\"rp\") && x < $(lp).attr(\"data-pos\")) {\r\n                $(lp).attr(\"data-pos\", x);\r\n            }\r\n            $(drag).attr(\"data-pos\", x);\r\n            updateView($(drag).parent().parent());\r\n        });\r\n        $(document).bind(\"mouseup\", function () {\r\n            drag = false;\r\n        });\r\n        function updateView(slider) {\r\n            var startVal = parseInt($(slider).find(\".bar\").data(\"start\"));\r\n            var endVal = parseInt($(slider).find(\".bar\").data(\"end\"));\r\n            if (startVal > endVal)\r\n                endVal = startVal;\r\n            startVal = startVal || 1000;\r\n            endVal = endVal || 15000;\r\n            var values = [];\r\n            for (var i = startVal; i <= endVal; i+=100)\r\n                values.push(i);\r\n            var l = $(slider).find(\".lp\").attr(\"data-pos\");\r\n            var r = $(slider).find(\".rp\").attr(\"data-pos\");\r\n            var x = $(slider).outerWidth() * l;\r\n            var w = (r - l) * $(slider).outerWidth();\r\n            $(slider).find(\".bar\").css({ left: x + \"px\", width: w + \"px\" });\r\n            var index = Math.round(values.length * l);\r\n            if (index >= values.length)\r\n                index = values.length - 1;\r\n\r\n            \r\n\r\n            $(document).find(\".min\").html(prettify(values[index]) + \"\\u20bd\");\r\n            index = Math.round(values.length * r);\r\n            if (index >= values.length)\r\n                index = values.length - 1;\r\n            $(document).find(\".max\").html(prettify(values[index]) + \"\\u20bd\");\r\n        }\r\n    })();\r\n\r\n    function prettify(num) {\r\n        var n = num.toString();\r\n        return n.replace(/(\\d{1,3}(?=(?:\\d\\d\\d)+(?!\\d)))/g, \"$1\" + ' ');\r\n    }\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/search-room.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","node_modules_normalize_css_normalize_css-common_blocks_footer_footer_css-common_blocks_header-2c7e07","common_blocks_calendar_calendar_css-common_blocks_footer_footer_css-common_blocks_guests-drop-95a510"], () => (__webpack_require__("./scripts/search-room.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;