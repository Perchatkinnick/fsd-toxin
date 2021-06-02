module.exports = {
	onSexRadioLoad
}

function onSexRadioLoad() {
    let checkBoxes = document.getElementsByClassName('registration__sex__check-box');
    for (let checkBox of checkBoxes) {
        checkBox.addEventListener('click', onCheckBoxClickHandler);
    }
}

function onCheckBoxClickHandler(e) {
    let male = document.querySelector('.registration__sex__male');
    male.classList.toggle('registration__sex__checked');
    let female = document.querySelector('.registration__sex__female');
    female.classList.toggle('registration__sex__checked');
}