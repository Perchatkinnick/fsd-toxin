import * as $ from 'jquery';

import '@styles/main.css';
import '@styles/authoriz.css';
import '@styles/reset.css';
import '@fonts/montserrat.css';
import '@fonts/fontawesome/all.min.css';
import '@fonts/iconfont/material-icons.css';
import '@blocks/go-button/go-button.css';


const header = require('@blocks/header/header');
const login = require('@blocks/login/login');
const sexRadio = require('@blocks/sex-radio/sex-radio');

header.onHeaderLoad();


let marker = localStorage.getItem('loginOrRegistration');
let loginForm = document.querySelector('.login');
let regForm = document.querySelector('.registration');

if (marker == 'login') {
    loginForm.style.display = 'block';
    regForm.style.display = '';
} else {
    loginForm.style.display = '';
    regForm.style.display = 'block';
}

sexRadio.onSexRadioLoad();

let switcher = document.querySelector('.registration__mailing__switcher');
switcher.addEventListener('click', onSwitcherClickHandler);

login.onLoginLoad();

function onSwitcherClickHandler(e) {
    if (e.target.classList.contains('registration__mailing__switcher')) {
        e.target.classList.toggle('registration__mailing__switcher__active');
    }
    
}