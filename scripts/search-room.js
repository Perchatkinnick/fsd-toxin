
function onLoad() {
    /*alert(localStorage.getItem('dateArrive'));
    alert(localStorage.getItem('dateDeparture'));
    alert(localStorage.getItem('guestsBabies'));
    alert(localStorage.getItem('guestsChildren'));
    alert(localStorage.getItem('guestsAdult'));*/

    

    let contentDateRect = document.querySelector('.content__date__rect');
    contentDateRect.addEventListener('click', addCalendar);
    let contentDateTitle = document.querySelector('.content__date__title');
    contentDateTitle.addEventListener('click', addCalendar);
    let contentDateArrow = document.querySelector('.content__date__arrow');
    contentDateArrow.addEventListener('click', addCalendar);

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

    loadDataFromLocalStorage(contentDateTitle);
}

function loadDataFromLocalStorage(elemDate) {
    let arriveDate = localStorage.getItem('dateArrive');
    let departureDate = localStorage.getItem('dateDeparture');

    if (arriveDate != null && departureDate != null) {
        let complexArriveDate = getComplexDate(arriveDate);
        let complexDepartureDate = getComplexDate(departureDate);

        elemDate.innerHTML = complexArriveDate + ' - ' + complexDepartureDate;
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

















