module.exports = {
	onLoginLoad
}

function onLoginLoad() {
    let toRegistrationButton = document.querySelector('.login__toRegistration__button');

    toRegistrationButton.addEventListener('click', onToRegistrationButtonClickHandler);
}

function onToRegistrationButtonClickHandler(e) {
    let loginForm = document.querySelector('.login');
    let regForm = document.querySelector('.registration');

    loginForm.style.display = '';
    regForm.style.display = 'block';
}