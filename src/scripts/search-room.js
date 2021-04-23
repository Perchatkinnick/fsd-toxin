import * as $ from 'jquery';

import '../styles/search-room.css';
import '../styles/reset.css';
import '../fonts/montserrat.css';
import '../fonts/fontawesome/all.min.css';
import '../fonts/iconfont/material-icons.css';
import '../common.blocks/guests-dropdown/guests-dropdown.css';
import '../common.blocks/calendar/calendar.css';
import '../common.blocks/header/header.css';
import '../common.blocks/footer/footer.css';
import '../common.blocks/logo/logo.css';
import '../common.blocks/login-button/login-button.css';
import '../common.blocks/menu/menu.css';
import '../common.blocks/show-rooms/show-rooms.css';
import '../common.blocks/facilities-dropdown/facilities-dropdown.css';

const calendar = require('../common.blocks/calendar/calendar');
const header = require('../common.blocks/header/header');
const guestsDropdown = require('../common.blocks/guests-dropdown/guests-dropdown');
const facilitiesDropdown = require('../common.blocks/facilities-dropdown/facilities-dropdown');
const showRooms = require('../common.blocks/show-rooms/show-rooms');
const roomsData = require('../common.blocks/show-rooms/data');

header.onHeaderLoad();

let contentDateRect = document.querySelector('.content__date__rect');
contentDateRect.addEventListener('click', addCalendar);
let contentDateTitle = document.querySelector('.content__date__title');
contentDateTitle.addEventListener('click', addCalendar);
let contentDateArrow = document.querySelector('.content__date__arrow');
contentDateArrow.addEventListener('click', addCalendar);

let contentGuestsRect = document.querySelector('.content__guests__rect');
contentGuestsRect.addEventListener('click', addGuestsForm);
let contentGuestsTitle = document.querySelector('.content__guests__title');
contentGuestsTitle.addEventListener('click', addGuestsForm);
let contentGuestsArrow = document.querySelector('.content__guests__arrow');
contentGuestsArrow.addEventListener('click', addGuestsForm);

let contentFacilitiesRect = document.querySelector('.content__room-settings__facilities__rect');
contentFacilitiesRect.addEventListener('click', facilitiesDropdown.addFacilitiesDropdown);
let contentFacilitiesTitle = document.querySelector('.content__room-settings__facilities__title');
contentFacilitiesTitle.addEventListener('click', facilitiesDropdown.addFacilitiesDropdown);
let contentFacilitiesArrow = document.querySelector('.content__room-settings__facilities__arrow');
contentFacilitiesArrow.addEventListener('click', facilitiesDropdown.addFacilitiesDropdown);



let additionalArrow = document.querySelector('.content__room-settings__additional__arrow');
additionalArrow.addEventListener('click', onAdditionalArrowClick);

let checkBoxes = document.getElementsByClassName('content__home-rules__checkbox');
for (let checkBox of checkBoxes) {
    checkBox.addEventListener('click', function () {
        if (checkBox.dataset.checked == 'checked') {
            checkBox.dataset.checked = 'none';
        } else {
            checkBox.dataset.checked = 'checked';
        }
    });
}

loadDataFromLocalStorage(contentDateTitle, contentGuestsTitle);

showRooms.loadRooms(1);

createPageMarkers();

createShowVariants(1);

calendar.func();


function createPageMarkers() {
    let len = roomsData.length;
    let pages = Math.ceil(len / 12);

    let container = document.querySelector('.content__show__page-navigation');

    for (let i = 1; i <= pages + 1; i++) {
        let marker = document.createElement('div');
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
        let markers = document.getElementsByClassName('content__show__page-navigation__marker');
        for (let marker of markers) {
            marker.classList.remove('content__show__page-navigation__marker__active');
        }

        e.target.classList.add('content__show__page-navigation__marker__active');

        createShowVariants(+e.target.innerHTML);
        loadRooms(+e.target.innerHTML);
    }
}

function nextPage() {
    let len = roomsData.length;
    let pages = Math.ceil(len / 12);
    let currentPage = document.querySelector('.content__show__page-navigation__marker__active').innerHTML;

    if (+currentPage < pages) {
        createShowVariants(+currentPage + 1);
        loadRooms(+currentPage + 1);

        let markers = document.getElementsByClassName('content__show__page-navigation__marker');
        for (let marker of markers) {
            marker.classList.remove('content__show__page-navigation__marker__active');
            if (+marker.innerHTML == +currentPage + 1) {
                marker.classList.add('content__show__page-navigation__marker__active');
            }
        }
    }
    
}

function createShowVariants(page) {
    let container = document.querySelector('.content__show__variants');
    let totalVariants = 12 * page;
    if (totalVariants > roomsData.length) {
        totalVariants = roomsData.length;
    }

    container.innerHTML = (12 * (page - 1) + 1) + ' – ' + totalVariants + ' из ' + roomsData.length + ' вариантов аренды'
}

function onAdditionalArrowClick(e) {
    if (e.target.dataset.checked == 'checked') {
        e.target.dataset.checked = 'none';
    } else {
        e.target.dataset.checked = 'checked';
    }

    let list = document.querySelector('.content__room-settings__additional__list');
    if (list.style.display == '') {
        list.style.display = 'block';
    } else {
        list.style.display = '';
    }
    
}

function addCalendar() {
    let calendar = document.querySelector('.calendar-parent');

    if (calendar.style.display == '') {
        calendar.style.display = 'block';
        //func();
    } else {
        calendar.style.display = '';

        let days = document.querySelector('#days');
        let body = days.querySelector('.body');
        body.dataset.dot1 = '';
        body.dataset.dot2 = '';
    }
}

function addGuestsForm() {
    let guestsForm = document.querySelector('.guests-dropdown');

    if (guestsForm.style.display == '') {
        guestsForm.style.display = 'block';
        guestsDropdown.onGuestsDropdaunLoad();
    } else {
        guestsForm.style.display = '';
    }
}

function loadDataFromLocalStorage(elemDate, elemGuests) {
    let arriveDate = localStorage.getItem('dateArrive');
    let departureDate = localStorage.getItem('dateDeparture');

    if (arriveDate != null && departureDate != null) {
        let complexArriveDate = calendar.getComplexDate(arriveDate);
        let complexDepartureDate = calendar.getComplexDate(departureDate);

        elemDate.innerHTML = complexArriveDate + ' - ' + complexDepartureDate;
    }

    let guestsBabies = localStorage.getItem('guestsBabies');
    let guestsChildren = localStorage.getItem('guestsChildren');
    let guestsAdult = localStorage.getItem('guestsAdult');

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

$(function ($) {
    var twobombSlider = (function () {
        var drag = false;
        var values = [];


        $(".slider").each(function (i, e) {
            updateView(e);
        });
        $(".slider>.bar>.lp,.slider>.bar>.rp").bind("mousedown", function () {
            drag = $(this);
        })
        $(document).bind("mousemove", function (e) {
            if (!drag)
                return;
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
            if (startVal > endVal)
                endVal = startVal;
            startVal = startVal || 1000;
            endVal = endVal || 15000;
            var values = [];
            for (var i = startVal; i <= endVal; i+=100)
                values.push(i);
            var l = $(slider).find(".lp").attr("data-pos");
            var r = $(slider).find(".rp").attr("data-pos");
            var x = $(slider).outerWidth() * l;
            var w = (r - l) * $(slider).outerWidth();
            $(slider).find(".bar").css({ left: x + "px", width: w + "px" });
            var index = Math.round(values.length * l);
            if (index >= values.length)
                index = values.length - 1;

            

            $(document).find(".min").html(prettify(values[index]) + "\u20bd");
            index = Math.round(values.length * r);
            if (index >= values.length)
                index = values.length - 1;
            $(document).find(".max").html(prettify(values[index]) + "\u20bd");
        }
    })();

    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }
});

















