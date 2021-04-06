//@ts-check

function onLoad() {
    onHeaderLoad();

    let arriveForm = document.querySelector('.content__search__arrive');
    arriveForm.addEventListener('click', addCalendar);

    let departureForm = document.querySelector('.content__search__departure');
    departureForm.addEventListener('click', addCalendar);

    let guestsForm = document.querySelector('.content__search__guests');
    guestsForm.addEventListener('click', addGuestsForm);
    

    let searchButton = document.querySelector('.content__search__button');
    searchButton.addEventListener('click', function () {
        location.href = 'search-room.html';
    });

    func();
}

function addGuestsForm() {
    let calendar = document.querySelector('.calendar-parent');
    let guestsForm = document.querySelector('.guests-dropdown');

    calendar.style.display = '';
    if (guestsForm.style.display == '') {
        guestsForm.style.display = 'block';
        onGuestsDropdaunLoad();
    } else {
        guestsForm.style.display = '';
    }
}

function addCalendar() {
    let calendar = document.querySelector('.calendar-parent');
    let guestsForm = document.querySelector('.guests-dropdown');
    
    guestsForm.style.display = '';
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















