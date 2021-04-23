import '../styles/authoriz.css';
import '../styles/reset.css';
import '../fonts/montserrat.css';
import '../fonts/fontawesome/all.min.css';
import '../fonts/iconfont/material-icons.css';
import '../common.blocks/header/header.css';
import '../common.blocks/footer/footer.css';
import '../common.blocks/menu/menu.css';
import '../common.blocks/logo/logo.css';
import '../common.blocks/login-button/login-button.css';
import '../common.blocks/login/login.css';
import '../common.blocks/go-button/go-button.css';
import '../common.blocks/input/input.css';
import '../common.blocks/registration/registration.css';
import '../common.blocks/title/title.css';


const header = require('../common.blocks/header/header');
const login = require('../common.blocks/login/login');

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

let checkBoxes = document.getElementsByClassName('registration__sex__check-box');
for (let checkBox of checkBoxes) {
    checkBox.addEventListener('click', onCheckBoxClickHandler);
}

let switcher = document.querySelector('.registration__mailing__switcher');
switcher.addEventListener('click', onSwitcherClickHandler);

login.onLoginLoad();


function onSwitcherClickHandler(e) {
    if (e.target.classList.contains('registration__mailing__switcher')) {
        e.target.classList.toggle('registration__mailing__switcher__active');
    }
    
}

function onCheckBoxClickHandler(e) {
    let male = document.querySelector('.registration__sex__male');
    male.classList.toggle('registration__sex__checked');
    let female = document.querySelector('.registration__sex__female');
    female.classList.toggle('registration__sex__checked');
}
