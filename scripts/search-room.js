//@ts-check

function onLoad() {
    let contentDateRect = document.querySelector('.content__date__rect');
    contentDateRect.addEventListener('click', addCalendar);
    let contentDateTitle = document.querySelector('.content__date__title');
    contentDateTitle.addEventListener('click', addCalendar);
    let contentDateArrow = document.querySelector('.content__date__arrow');
    contentDateArrow.addEventListener('click', addCalendar);

    let contentGuestsRect = document.querySelector('.content__guests__rect');
    contentGuestsRect.addEventListener('click', addGuestsForm);
    let contentGuestsTitle = document.querySelector('.content__guests__title');
    contentGuestsTitle.addEventListener('click', addGuestsForm);
    let contentGuestsArrow = document.querySelector('.content__guests__arrow');
    contentGuestsArrow.addEventListener('click', addGuestsForm);

    let contentFacilitiesRect = document.querySelector('.content__room-settings__facilities__rect');
    contentFacilitiesRect.addEventListener('click', addFacilitiesDropdown);
    let contentFacilitiesTitle = document.querySelector('.content__room-settings__facilities__title');
    contentFacilitiesTitle.addEventListener('click', addFacilitiesDropdown);
    let contentFacilitiesArrow = document.querySelector('.content__room-settings__facilities__arrow');
    contentFacilitiesArrow.addEventListener('click', addFacilitiesDropdown);

    

    let additionalArrow = document.querySelector('.content__room-settings__additional__arrow');
    additionalArrow.addEventListener('click', onAdditionalArrowClick);

    let checkBoxes = document.getElementsByClassName('content__home-rules__checkbox');
    for (let checkBox of checkBoxes) {
        checkBox.addEventListener('click', function () {
            if (checkBox.dataset.checked == 'checked') {
                checkBox.dataset.checked = 'none';
            } else {
                checkBox.dataset.checked = 'checked';
            }
        });
    }

    loadDataFromLocalStorage(contentDateTitle, contentGuestsTitle);

    loadRooms();


}

function onAdditionalArrowClick(e) {
    if (e.target.dataset.checked == 'checked') {
        e.target.dataset.checked = 'none';
    } else {
        e.target.dataset.checked = 'checked';
    }

    let list = document.querySelector('.content__room-settings__additional__list');
    if (list.style.display == '') {
        list.style.display = 'block';
    } else {
        list.style.display = '';
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

function addGuestsForm() {
    let guestsForm = document.querySelector('.guests-dropdown');

    if (guestsForm.style.display == '') {
        guestsForm.style.display = 'block';
        onGuestsDropdaunLoad();
    } else {
        guestsForm.style.display = '';
    }
}

function loadDataFromLocalStorage(elemDate, elemGuests) {
    let arriveDate = localStorage.getItem('dateArrive');
    let departureDate = localStorage.getItem('dateDeparture');

    if (arriveDate != null && departureDate != null) {
        let complexArriveDate = getComplexDate(arriveDate);
        let complexDepartureDate = getComplexDate(departureDate);

        elemDate.innerHTML = complexArriveDate + ' - ' + complexDepartureDate;
    }

    let guestsBabies = localStorage.getItem('guestsBabies');
    let guestsChildren = localStorage.getItem('guestsChildren');
    let guestsAdult = localStorage.getItem('guestsAdult');

    if (guestsBabies != null && guestsChildren != null && guestsAdult != null) {
        elemGuests.innerHTML = guestsAdult + ' гостя';
        if (guestsChildren != 0) {
            elemGuests.innerHTML += ', ' + guestsChildren + ' детей';
        }

        if (guestsBabies != 0) {
            elemGuests.innerHTML += ', ' + guestsBabies + ' младенцев';
        }
    }
    
}

jQuery(document).ready(function ($) {
    var twobombSlider = (function () {
        var drag = false;
        var values = [];


        $(".slider").each(function (i, e) {
            updateView(e);
        });
        $(".slider>.bar>.lp,.slider>.bar>.rp").bind("mousedown", function () {
            drag = $(this);
        })
        $(document).bind("mousemove", function (e) {
            if (!drag)
                return;
            var x = (e.pageX - $(drag).outerWidth() / 2 - $(drag).parent().parent().offset().left) / $(drag).parent().parent().outerWidth();
            if (x < 0) x = 0;
            if (x > 1) x = 1;
            var rp = $(drag).parent().find(".rp");
            var lp = $(drag).parent().find(".lp");
            if ($(drag).hasClass("lp") && x > $(rp).attr("data-pos")) {
                $(rp).attr("data-pos", x);
            }
            if ($(drag).hasClass("rp") && x < $(lp).attr("data-pos")) {
                $(lp).attr("data-pos", x);
            }
            $(drag).attr("data-pos", x);
            updateView($(drag).parent().parent());
        });
        $(document).bind("mouseup", function () {
            drag = false;
        });
        function updateView(slider) {
            var startVal = parseInt($(slider).find(".bar").data("start"));
            var endVal = parseInt($(slider).find(".bar").data("end"));
            if (startVal > endVal)
                endVal = startVal;
            startVal = startVal || 1000;
            endVal = endVal || 15000;
            var values = [];
            for (var i = startVal; i <= endVal; i+=100)
                values.push(i);
            var l = $(slider).find(".lp").attr("data-pos");
            var r = $(slider).find(".rp").attr("data-pos");
            var x = $(slider).outerWidth() * l;
            var w = (r - l) * $(slider).outerWidth();
            $(slider).find(".bar").css({ left: x + "px", width: w + "px" });
            var index = Math.round(values.length * l);
            if (index >= values.length)
                index = values.length - 1;
            $(document).find(".min").html( values[index] + "Р");
            index = Math.round(values.length * r);
            if (index >= values.length)
                index = values.length - 1;
            $(document).find(".max").html(values[index] + "P");
        }
    })();
});

















