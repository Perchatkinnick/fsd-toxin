//@ts-check

function onLoginButtonLoad() {
    let loginButtons = document.getElementsByClassName('login-button__background');
    for (let loginButton of loginButtons) {
        loginButton.addEventListener('click', onLoginButtonClickHandler);
    }
    
}

function onLoginButtonClickHandler() {
    localStorage.setItem('loginOrRegistration', 'login');
    location.href = 'authoriz.html';
}