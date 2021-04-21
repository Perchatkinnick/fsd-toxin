module.exports = {
	addFacilitiesDropdown
}

function addFacilitiesDropdown() {
    let facilitiesDropdown = document.querySelector('.facilities__dropdown');

    if (facilitiesDropdown.style.display == '') {
        facilitiesDropdown.style.display = 'block';
        onFacilitiesDropdaunLoad();
    } else {
        facilitiesDropdown.style.display = '';
    }
}


function onFacilitiesDropdaunLoad() {
    

    let minuses = document.getElementsByClassName('facilities__minus');
    for (let minus of minuses) {
        minus.addEventListener('click', onMinusClick)
    }

    let pluses = document.getElementsByClassName('facilities__plus');
    for (let plus of pluses) {
        plus.addEventListener('click', onPlusClick)
    }

}

function onPlusClick(e) {
    let count = e.target.previousElementSibling;
    count.innerHTML = +count.innerHTML + 1;

    let parent = e.target.parentElement;
    addCount(parent, count.innerHTML);
}

function onMinusClick(e) {
    let count = e.target.nextElementSibling; 
    count.innerHTML = +count.innerHTML - 1;

    if (count.innerHTML < 1) {
        count.innerHTML = 0;
    }

    let parent = e.target.parentElement;
    addCount(parent, count.innerHTML);
}

function addCount(elem, count) {
    switch (elem.classList[0]) {
        case 'facilities__dropdown__bedrooms':
            addBedrooms(count);
            break;
        case 'facilities__dropdown__beds':
            addBeds(count);
            break;
        case 'facilities__dropdown__bathrooms':
            addBathrooms(count);
            break;
    }
}

function addBathrooms(count) {
    let text = '';

    switch (count) {
        case '1':
            text = '1 ванная комната';
            break;
        case '2':
            text = '2 ванных комнаты';
            break;
        case '3':
            text = '3 ванных комнаты';
            break;
        case '4':
            text = '4 ванных комнаты';
            break;
        case '5':
            text = '5 ванных комнат';
            break;
        default:
            text = count + ' ванных комнат';
            break;
    }

    /*let container = document.querySelector('.content__room-settings__facilities__title');
    let arr = container.innerHTML.split(', ');
    if (arr[2] != null) {
        arr[2] = text;
    } 

    container.innerHTML = arr.join(', ');*/
}

function addBedrooms(count) {
    let text = '';

    switch (count) {
        case '1':
            text = '1 спальня';
            break;
        case '2':
            text = '2 спальни';
            break;
        case '3':
            text = '3 спальни';
            break;
        case '4':
            text = '4 спальни';
            break;
        case '5':
            text = '5 спален';
            break;
        default:
            text = count + ' спален';
            break;
    }

    let container = document.querySelector('.content__room-settings__facilities__title');
    let arr = container.innerHTML.split(', ');
    if (arr[0] != null) {
        arr[0] = text;
    }

    container.innerHTML = arr.join(', ');
}

function addBeds(count) {
    let text = '';

    switch (count) {
        case '1':
            text = '1 кровать';
            break;
        case '2':
            text = '2 кровати';
            break;
        case '3':
            text = '3 кровати';
            break;
        case '4':
            text = '4 кровати';
            break;
        case '5':
            text = '5 кроватей';
            break;
        default:
            text = count + ' кроватей';
            break;
    }

    let container = document.querySelector('.content__room-settings__facilities__title');
    let arr = container.innerHTML.split(', ');
    
    if (arr[1] != null) {
        arr[1] = text;
    } 

    container.innerHTML = arr.join(', ');
}