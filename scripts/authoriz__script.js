//@ts-check

function onLoad() {
    onHeaderLoad();
    

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

    onLoginLoad();
}

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
