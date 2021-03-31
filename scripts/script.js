//@ts-check

function onLoad() {
    onHeaderLoad();

    let arriveForm = document.querySelector('.arrive-form');
    arriveForm.addEventListener('click', addCalendar);

    let departureForm = document.querySelector('.departure-form');
    departureForm.addEventListener('click', addCalendar);

    let guestsForm = document.querySelector('.guests-form');
    guestsForm.addEventListener('click', addGuestsForm);
    

    let searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', function () {
        location.href = 'search-room.html';
    });

    func();
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
        //func();
    } else {
        calendar.style.display = '';

        let days = document.querySelector('#days');
        let body = days.querySelector('.body');
        body.dataset.dot1 = '';
        body.dataset.dot2 = '';
    }
    
}















