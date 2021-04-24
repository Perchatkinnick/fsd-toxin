import * as $ from 'jquery';

import '@styles/index.css';
import '@styles/reset.css';
import '@fonts/montserrat.css';
import '@fonts/fontawesome/all.min.css';
import '@fonts/iconfont/material-icons.css';
import '@blocks/header/header.css';
import '@blocks/footer/footer.css';
import '@blocks/menu/menu.css';
import '@blocks/calendar/calendar.css';
import '@blocks/guests-dropdown/guests-dropdown.css';
import '@blocks/logo/logo.css';
import '@blocks/login-button/login-button.css';
import '@blocks/go-button/go-button.css';
import '@blocks/input/input.css';


const calendar = require('@blocks/calendar/calendar');
const header = require('@blocks/header/header');
const guestsDropdown = require('@blocks/guests-dropdown/guests-dropdown')

header.onHeaderLoad();

let arriveForm = document.querySelector('.content__search__arrive');
arriveForm.addEventListener('click', addCalendar);

let departureForm = document.querySelector('.content__search__departure');
departureForm.addEventListener('click', addCalendar);

let guestsForm = document.querySelector('.content__search__guests');
guestsForm.addEventListener('click', addGuestsForm);


let searchButton = document.querySelector('.content__search__button');
searchButton.addEventListener('click', function () {
    location.href = 'search-room.html';
});

calendar.func();


function addGuestsForm() {
    let calendar = document.querySelector('.calendar-parent');
    let guestsForm = document.querySelector('.guests-dropdown');

    calendar.style.display = '';
    if (guestsForm.style.display == '') {
        guestsForm.style.display = 'block';
        guestsDropdown.onGuestsDropdaunLoad();
        
    } else {
        guestsForm.style.display = '';
    }
}

function addCalendar() {
    let calendarElem = document.querySelector('.calendar-parent');
    let guestsForm = document.querySelector('.guests-dropdown');
    
    guestsForm.style.display = '';
    if (calendarElem.style.display == '') {
        calendarElem.style.display = 'block';
        calendar.func();
    } else {
        calendarElem.style.display = '';

        let days = document.querySelector('#days');
        let body = days.querySelector('.body');
        body.dataset.dot1 = '';
        body.dataset.dot2 = '';
    }
    
}















