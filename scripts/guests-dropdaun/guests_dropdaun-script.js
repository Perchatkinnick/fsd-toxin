
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

    let clear = document.querySelector('.guests-clear');
    clear.addEventListener('click', function () {
        document.querySelector('#guests-babies').innerHTML = 0; 
        document.querySelector('#guests-children').innerHTML = 0;
        document.querySelector('#guests-adult').innerHTML = 2;
    });

    let apply = document.querySelector('.guests-apply');
    apply.addEventListener('click', function () {

        let guestsTitle = document.querySelector('.guests-title');
        guestsTitle.innerHTML = +(document.querySelector('#guests-babies').innerHTML) + +(document.querySelector('#guests-children').innerHTML) + +(document.querySelector('#guests-adult').innerHTML);

        let guestsForm = document.querySelector('.guests-dropdown');
        guestsForm.style.display = '';
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





