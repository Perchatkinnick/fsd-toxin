
function onLoad() {
    let arriveForm = document.querySelector('.arrive-form');
    arriveForm.addEventListener('click', addCalendar);

    let departureForm = document.querySelector('.departure-form');
    departureForm.addEventListener('click', addCalendar);

    let guestsForm = document.querySelector('.guests-form');
    

    let searchButton = document.querySelector('.search-button');
    
    

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















