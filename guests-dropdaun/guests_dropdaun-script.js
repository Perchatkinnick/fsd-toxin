
function onGuestsDropdaunLoad() {
    let adultPlus = document.querySelector('#guests-adult-plus');
    adultPlus.addEventListener('click', onAdultPlusClick);

    let adultMinus = document.querySelector('#guests-adult-minus');
    adultMinus.addEventListener('click', onAdultMinusClick);

    let childrenPlus = document.querySelector('#guests-children-plus');
    childrenPlus.addEventListener('click', onChildrenPlusClick);

    let childrenMinus = document.querySelector('#guests-children-minus');
    childrenMinus.addEventListener('click', onChildrenMinusClick);

    let babiesPlus = document.querySelector('#guests-babies-plus');
    babiesPlus.addEventListener('click', onBabiesPlusClick);

    let babiesMinus = document.querySelector('#guests-babies-minus');
    babiesMinus.addEventListener('click', onBabiesMinusClick);

    let gestsAdultElem = document.querySelector('#guests-adult');
    let gestsChildrenElem = document.querySelector('#guests-children');
    let gestsBabies = document.querySelector('#guests-babies');

    let clear = document.querySelector('.guests-clear');
    clear.addEventListener('click', function () {
        gestsBabies.innerHTML = 0; 
        gestsChildrenElem.innerHTML = 0;
        gestsAdultElem.innerHTML = 2;
    });

    let event = new Event("changeGuests", { bubbles: true }); ///

    let apply = document.querySelector('.guests-apply');
    apply.addEventListener('click', function () {

        let guestsTitle = document.querySelector('.guests-title');
        if (guestsTitle != null) {
            guestsTitle.innerHTML = +(gestsBabies.innerHTML) + +(gestsChildrenElem.innerHTML) + +(gestsAdultElem.innerHTML);
        }

        // for search-room
        let contentGuestsTitle = document.querySelector('.content__guests__title');
        if (contentGuestsTitle != null) {
            contentGuestsTitle.innerHTML = gestsAdultElem.innerHTML + ' гостя';
            if (gestsChildrenElem.innerHTML != 0) {
                contentGuestsTitle.innerHTML += ', ' + gestsChildrenElem.innerHTML + ' детей';
            }

            if (gestsBabies.innerHTML != 0) {
                contentGuestsTitle.innerHTML += ', ' + gestsBabies.innerHTML + ' младенцев';
            }
        }


        localStorage.setItem('guestsBabies', gestsBabies.innerHTML);
        localStorage.setItem('guestsChildren', gestsChildrenElem.innerHTML);
        localStorage.setItem('guestsAdult', gestsAdultElem.innerHTML);

        let guestsForm = document.querySelector('.guests-dropdown');
        guestsForm.style.display = '';

        guestsForm.dispatchEvent(event);
    });
}

function onBabiesMinusClick() {
    let count = document.querySelector('#guests-babies');

    count.innerHTML = +count.innerHTML - 1;

    if (count.innerHTML < 0) {
        count.innerHTML = 0;
    }
}

function onBabiesPlusClick() {
    let count = document.querySelector('#guests-babies');

    count.innerHTML = +count.innerHTML + 1;
}

function onChildrenMinusClick() {
    let count = document.querySelector('#guests-children');

    count.innerHTML = +count.innerHTML - 1;

    if (count.innerHTML < 0) {
        count.innerHTML = 0;
    }
}

function onChildrenPlusClick() {
    let count = document.querySelector('#guests-children');

    count.innerHTML = +count.innerHTML + 1;
}

function onAdultPlusClick() {
    let count = document.querySelector('#guests-adult');

    count.innerHTML = +count.innerHTML + 1;
}

function onAdultMinusClick() {
    let count = document.querySelector('#guests-adult');

    count.innerHTML = +count.innerHTML - 1;

    if (count.innerHTML < 1) {
        count.innerHTML = 1;
    }
}





