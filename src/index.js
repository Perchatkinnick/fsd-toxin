import Calendar from './common.blocks/calendar/calendar';
const calendar = new Calendar();

import Header from './common.blocks/header/header';
const header = new Header();

import GuestsDropdaun from './common.blocks/guests-dropdaun/guests_dropdaun';
const guestsDropdaun = new GuestsDropdaun();

import LoginButton from './common.blocks/login-button/login-button';
const loginButton = new LoginButton();

//header.onHeaderLoad();

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

//calendar.func();


function addGuestsForm() {
    let calendar = document.querySelector('.calendar-parent');
    let guestsForm = document.querySelector('.guests-dropdown');

    calendar.style.display = '';
    if (guestsForm.style.display == '') {
        guestsForm.style.display = 'block';
        
    } else {
        guestsForm.style.display = '';
    }
}

function addCalendar() {
    let calendar = document.querySelector('.calendar-parent');
    let guestsForm = document.querySelector('.guests-dropdown');
    
    guestsForm.style.display = '';
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















