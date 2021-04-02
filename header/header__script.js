//@ts-check

function onHeaderLoad() {

    let loginButtons = document.getElementsByClassName('login-event');
    for (let loginButton of loginButtons) {
        loginButton.addEventListener('click', onLoginButtonClickHandler);
    }

    let regButton = document.querySelector('.header__registration');
    regButton.addEventListener('click', onRegButtonClickHandler);
}

function onLoginButtonClickHandler() {
    localStorage.setItem('loginOrRegistration', 'login');
    location.href = 'authoriz.html';
}

function onRegButtonClickHandler() {
    localStorage.setItem('loginOrRegistration', 'registration');

    location.href = 'authoriz.html';
}









