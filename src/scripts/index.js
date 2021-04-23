import '../styles/index.css';
import '../styles/reset.css';
import '../fonts/montserrat.css';
import '../fonts/fontawesome/all.min.css';
import '../fonts/iconfont/material-icons.css';
import '../common.blocks/header/header.css';
import '../common.blocks/footer/footer.css';
import '../common.blocks/menu/menu.css';
import '../common.blocks/calendar/calendar.css';
import '../common.blocks/guests-dropdown/guests-dropdown.css';
import '../common.blocks/logo/logo.css';
import '../common.blocks/login-button/login-button.css';
import '../common.blocks/go-button/go-button.css';
import '../common.blocks/input/input.css';


const calendar = require('../common.blocks/calendar/calendar');
const header = require('../common.blocks/header/header');
const guestsDropdown = require('../common.blocks/guests-dropdown/guests-dropdown')

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














