//@ts-check

function onHeaderLoad() {

    onLoginButtonLoad();

    let regButton = document.querySelector('.header__registration');
    regButton.addEventListener('click', onRegButtonClickHandler);
}

function onRegButtonClickHandler() {
    localStorage.setItem('loginOrRegistration', 'registration');

    location.href = 'authoriz.html';
}









