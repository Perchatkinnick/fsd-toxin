
function onLoad() {
    let arriveForm = document.querySelector('.arrive-form');
    arriveForm.addEventListener('click', addCalendar);

    let departureForm = document.querySelector('.departure-form');
    departureForm.addEventListener('click', addCalendar);

    let guestsForm = document.querySelector('.guests-form');
    guestsForm.addEventListener('click', addGuestsForm);
    

    let searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', function () {
        addDataToLocalStorage();
        location.href = 'search-room.html';
    });
}

function addDataToLocalStorage() {

    let guestsBabies = document.querySelector('#guests-babies').innerHTML;
    localStorage.setItem('guestsBabies', guestsBabies);

    let guestsChildren = document.querySelector('#guests-children').innerHTML;
    localStorage.setItem('guestsChildren', guestsChildren);

    let guestsAdult = document.querySelector('#guests-adult').innerHTML;
    localStorage.setItem('guestsAdult', guestsAdult);
}

function addGuestsForm() {
    let guestsForm = document.querySelector('.guests-dropdown');

    if (guestsForm.style.display == '') {
        guestsForm.style.display = 'block';
        onGuestsDropdaunLoad();
    } else {
        guestsForm.style.display = '';
    }
}

function addCalendar() {
    let calendar = document.querySelector('.calendar-parent');
    

    if (calendar.style.display == '') {
        calendar.style.display = 'block';
        func();
    } else {
        calendar.style.display = '';

        let body = days.querySelector('.body');
        body.dataset.dot1 = '';
        body.dataset.dot2 = '';
    }
    
}















