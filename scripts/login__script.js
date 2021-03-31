//@ts-check

function onLoad() {
    onHeaderLoad();

    let marker = localStorage.getItem('loginOrRegistration');
    let loginForm = document.querySelector('.content__container__login');
    let regForm = document.querySelector('.registration');

    if (marker == 'login') {
        loginForm.style.display = 'block';
        regForm.style.display = '';
    } else {
        loginForm.style.display = '';
        regForm.style.display = 'block';
    }
}