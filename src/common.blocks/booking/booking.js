module.exports = {
	loadBooking,
    loadCalculator
}

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

function loadBooking(roomData) {
    let numberElem = document.querySelector('.content__booking__number');
    numberElem.innerHTML = '<span style="font-size: 10px">№ </span>' + roomData.room;

    let luxElem = document.querySelector('.content__booking__lux');
    if (roomData.isLux == 'true') {
        luxElem.innerHTML = 'люкс';
    }

    let priceElem = document.querySelector('.content__booking__price');
    priceElem.innerHTML = roomData.price + '\u20bd <span style="font-size: 11px; opacity: 0.4">в сутки</span>';

    let arriveDate = getValidDate(localStorage.getItem('dateArrive'));
    let departureDate = getValidDate(localStorage.getItem('dateDeparture'));
    let arriveElem = document.querySelector('.date-picker__arrive').querySelector('.content__search__rect');
    arriveElem.innerHTML = arriveDate;
    let departureElem = document.querySelector('.date-picker__departure').querySelector('.content__search__rect');
    departureElem.innerHTML = departureDate;
}

function getValidDate(date) {
    if(!!date){
        let arr = date.split('.');
        let month = +arr[1] + 1;
        if (month > 12) {
            month = 1;
        }
        if (month < 10) {
            month = '0' + String(month);
        }
        date = arr[2] + '.' + month + '.' + arr[0]
    }

    return date;
}

function loadCalculator(roomData) {
    loadMainString(roomData);
    loadFee();
    loadExtraFee();
    loadTotal();
}

function loadTotal() {
    let parent = document.querySelector('.content__booking__calculator__total');
    let priceElem = parent.children[2];

    let roomPrice = +document.querySelector('.content__booking__calculator__main').children[2].innerHTML.split('\u20bd')[0];

    let total = roomPrice + +roomsDataParth[0].serviceFee + +roomsDataParth[0].extraFee;

    priceElem.innerHTML = total + '\u20bd';
    loadSeparatorForTotal(parent.children[1]);
}

function loadSeparatorForTotal(parent) {
    let separator = document.createElement('div');
    separator.classList.add('content__booking__calculator__total__separator__body');

    let previousSibling = parent.previousElementSibling;
    let left = previousSibling.offsetWidth;
    separator.style.left = left + 8 + 'px';

    let containerWidth = parent.parentElement.offsetWidth;
    separator.style.width = containerWidth - parent.parentElement.children[2].offsetWidth - left - 16 + 'px';

    parent.appendChild(separator);
}

function loadExtraFee() {
    let parent = document.querySelector('.content__booking__calculator__extrafee');
    let valueElem = parent.children[0];
    let priceElem = parent.children[2];

    valueElem.innerHTML = 'Сбор за доп. услуги';
    priceElem.innerHTML = roomsDataParth[0].extraFee + '\u20bd';
    loadSeparator(parent.children[1]);
}

function loadFee() {
    let parent = document.querySelector('.content__booking__calculator__fee');
    let valueElem = parent.children[0];
    let priceElem = parent.children[2];

    let valueFee = +roomsDataParth[0].serviceFee;
    let textValue = 'Сбор за услуги: ';
    let textPrice = '\u20bd';
    if (valueFee < 0) {
        textValue += 'скидка ';
        textPrice = '0' + textPrice;
    } else {
        textPrice = valueFee + textPrice;
    }

    textValue += Math.abs(valueFee) + '\u20bd';
    valueElem.innerHTML = textValue;

    priceElem.innerHTML = textPrice;

    loadSeparator(parent.children[1]);
}

function loadSeparator(parent) {
    let separator = document.createElement('div');
    separator.classList.add('content__booking__calculator__separator__body');
    separator.innerHTML = 'i'
    let previousSibling = parent.previousElementSibling;
    let left = previousSibling.offsetWidth;
    separator.style.left = left + 8 + 'px';


    parent.appendChild(separator);
}

function loadMainString(roomData) {
    let parent = document.querySelector('.content__booking__calculator__main');
    let valueElem = parent.children[0];
    let priceElem = parent.children[2];

    let period = countDays();
    let coast = roomData.price;

    valueElem.innerHTML = coast + '\u20bd x ' + period + ' суток';
    priceElem.innerHTML = String(coast * period) + '\u20bd';
}

function countDays() {
    let f = localStorage.getItem('dateArrive');
    if (f != '') {
        let arriveDate = new Date(localStorage.getItem('dateArrive'));
        let departureDate = new Date(localStorage.getItem('dateDeparture'));

        let period = Math.round((departureDate - arriveDate) / (60 * 60 * 24 * 1000)) + 1;
        return period;
    }
}