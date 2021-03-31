//@ts-check

function onHeaderLoad() {

    let loginButton = document.querySelector('.header__login__background');
    loginButton.addEventListener('click', onLoginButtonClickHandler);

    let regButton = document.querySelector('.header__registration');
    regButton.addEventListener('click', onRegButtonClickHandler);
}

function onLoginButtonClickHandler() {
    localStorage.setItem('loginOrRegistration', 'login');
    location.href = 'login.html';
}

function onRegButtonClickHandler() {
    localStorage.setItem('loginOrRegistration', 'registration');

    location.href = 'login.html';
}









