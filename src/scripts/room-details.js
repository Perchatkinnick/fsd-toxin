import * as $ from 'jquery';

import '@styles/main.css';
import '@styles/room-details.css';
import '@styles/reset.css';
import '@blocks/footer/footer.css';
import '@blocks/guests-dropdown/guests-dropdown.css';
import '@fonts/montserrat.css';
import '@fonts/fontawesome/all.min.css';
import '@fonts/iconfont/material-icons.css';


const calendar = require('@blocks/calendar/calendar');
const guestsDropdown = require('@blocks/guests-dropdown/guests-dropdown');
const header = require('@blocks/header/header');
const roomsData = require('@blocks/show-rooms/data');
const collage = require('@blocks/collage/collage');
const booking = require('@blocks/booking/booking');


let roomsDataParth = [
    {

        //more info about room... and than ->
        reviews: [
            {
                user: 1,
                date: '2021.03.23',
                text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
                likes: 12,
            },
            {
                user: 2,
                date: '2021.03.21',
                text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
                likes: 2,
            },
        ],
        serviceFee: '-2179',
        extraFee: '300',
    },
    {
        //next room
    }
];

let users = [
    {
        id: 1,
        name: 'Мурад',
        lastName: 'Сарафанов',
        sex: 'm',
        birthday: '',
        email: '',
        pass: '',
        mailing: false,
    },
    {
        id: 2,
        name: 'Патрисия',
        lastName: 'Стёклышкова',
        sex: 'f',
        birthday: '',
        email: '',
        pass: '',
        mailing: false,
    },
];

let roomData = JSON.parse(localStorage.getItem("roomData"));
header.onHeaderLoad();

collage.loadPhoto(roomData);

loadDiagramm();
loadCounts();
loadReviews();
booking.loadBooking(roomData);
calendar.func();
loadCalendar();
loadGuestsDropdaun();
booking.loadCalculator(roomData);


document.addEventListener("changeDate", function (event) {
    loadCalculator(roomData);
});

document.addEventListener("changeGuests", function (event) {

});

function loadGuestsDropdaun() {
    let guestsElem = document.querySelector('.content__booking__guests');
    guestsElem.addEventListener('click', onGuestsElemClickHandler);

    let guestsValue = document.querySelector('.content__booking__guests__value');
    let guestsBabies = localStorage.getItem('guestsBabies');
    let guestsChildren = localStorage.getItem('guestsChildren');
    let guestsAdult = localStorage.getItem('guestsAdult');

    if (guestsBabies != null && guestsChildren != null && guestsAdult != null) {
        guestsValue.innerHTML = guestsAdult + ' гостя';
        if (guestsChildren != 0) {
            guestsValue.innerHTML += ', ' + guestsChildren + ' детей';
        }

        if (guestsBabies != 0) {
            guestsValue.innerHTML += ', ' + guestsBabies + ' младенцев';
        }
    }
}

function onGuestsElemClickHandler() {
    let guestsForm = document.querySelector('.guests-dropdown');

    if (guestsForm.style.display == '') {
        guestsForm.style.display = 'block';
        onGuestsDropdaunLoad();
    } else {
        guestsForm.style.display = '';
    }
}

function loadCalendar() {
    let arriveElem = document.querySelector('.date-picker__arrive');
    arriveElem.addEventListener('click', showCalendar);

    let departureElem = document.querySelector('.date-picker__departure');
    departureElem.addEventListener('click', showCalendar);
}

function showCalendar() {
    let calendar = document.querySelector('.calendar-parent');

    if (calendar.style.display == '') {
        calendar.style.display = 'block';
        
    } else {
        calendar.style.display = '';

        let days = document.querySelector('#days');
        let body = days.querySelector('.body');
        body.dataset.dot1 = '';
        body.dataset.dot2 = '';
    }
}

function loadCounts() {
    let count = roomsDataParth[0].reviews.length;
    let container = document.querySelector('.content__details__reviews__count');
    container.innerHTML = count + ' отзыва';
}

function loadReviews() {
    let container = document.querySelector('.content__details__reviews__container');

    let count = roomsDataParth[0].reviews.length;

    for (let i = 0; i < count; i++) {
        let review = document.createElement('div');
        review.classList.add('content__details__reviews__container__review');

        let userPhoto = document.createElement('div');
        userPhoto.classList.add('content__details__reviews__container__review__photo');
        let userID = roomsDataParth[0].reviews[i].user;
        userPhoto.style.background = 'url("../src/media/images/users/' + userID + '.png")'; 
        review.appendChild(userPhoto);

        let user = users.find(user => user.id === userID);

        let name = document.createElement('div');
        name.classList.add('content__details__reviews__container__review__name');
        name.innerHTML = user.name + ' ' + user.lastName;
        review.appendChild(name);

        let dateElement = document.createElement('div');
        dateElement.classList.add('content__details__reviews__container__review__date');
        let date = new Date(roomsDataParth[0].reviews[i].date);
        let now = new Date();
        let diff = Math.round((now - date) / (60 * 60 * 24 * 1000));
        dateElement.innerHTML = diff + ' дней назад';
        review.appendChild(dateElement);

        let text = document.createElement('div');
        text.classList.add('content__details__reviews__container__review__text');
        text.innerHTML = roomsDataParth[0].reviews[i].text;
        review.appendChild(text);

        let likeContainer = document.createElement('div');
        likeContainer.classList.add('content__details__reviews__container__review__likeContainer');
        likeContainer.addEventListener('click', onLikeClickHandler);
        review.appendChild(likeContainer);

        let heart = document.createElement('div');
        heart.classList.add('content__details__reviews__container__review__likeContainer__heart');
        heart.innerHTML = 'favorite_border';
        likeContainer.appendChild(heart);

        let count = document.createElement('div');
        count.classList.add('content__details__reviews__container__review__likeContainer__count');
        count.innerHTML = String(roomsDataParth[0].reviews[i].likes);
        likeContainer.appendChild(count);

        container.appendChild(review);
    }
}

function onLikeClickHandler(e) {
    if (!e.target.classList.contains('content__details__reviews__container__review__likeContainer')) {
        let container = e.target.parentElement;
        container.classList.toggle('content__details__reviews__container__review__likeContainer__checkked');
        let heart = container.querySelector('.content__details__reviews__container__review__likeContainer__heart');
        heart.classList.toggle('content__details__reviews__container__review__likeContainer__heart__checked');
        if (heart.innerHTML == 'favorite_border') {
            heart.innerHTML = 'favorite';
        } else {
            heart.innerHTML = 'favorite_border';
        }
        let count = container.querySelector('.content__details__reviews__container__review__likeContainer__count');
        count.classList.toggle('content__details__reviews__container__review__likeContainer__count__checked');
        if (count.classList.contains('content__details__reviews__container__review__likeContainer__count__checked')) {
            count.innerHTML++;
        } else {
            count.innerHTML--;
        }
    }
    
}

function loadDiagramm() {
    // get from localStorage or search from DB wrigth now
    let dataImpression = {
        impressions: 260,
        magnificently: 120,
        good: 65,
        passably: 65,
        bad: 10,
    }

    let total = dataImpression.impressions;

    let voteCount = document.querySelector('.content__details__impression__diagramm__vote__count');
    voteCount.innerHTML = String(total);

    let position = 1;

    position = sectionLoad('bad', dataImpression.bad, dataImpression.impressions, position);
    position = sectionLoad('passably', dataImpression.passably, dataImpression.impressions, position);
    position = sectionLoad('good', dataImpression.good, dataImpression.impressions, position);
    position = sectionLoad('magnificently', dataImpression.magnificently, dataImpression.impressions, position);
} 

function sectionLoad(grade, count, total, position) {
    let circle = document.querySelector('.' + grade);
    let percent = count / total * 100;

    circle.setAttribute('stroke-dasharray', percent + ' ' + 100);
    circle.setAttribute('stroke-dashoffset', '-' + position);

    let bufer = document.querySelector('.' + grade + '__bufer');
    bufer.setAttribute('stroke-dasharray', '1 100');

    position += percent;
    bufer.setAttribute('stroke-dashoffset', '-' + position);

    let animation = document.querySelector('#' + grade + '__anim');
    animation.setAttribute('to', percent + ' ' + 100);

    return position;
}

