//@ts-check

function loadRooms() {
    let len = roomsData.length;
    let pages = Math.ceil(len / 12);

    buildGrid(sort(roomsData));
}

function buildGrid(rooms) {
    let container = document.querySelector('.content__show__rooms');

    for (let i = 0; i < 12; i++) {
        let div = document.createElement('div');
        div.style.background = 'no-repeat url("media/images/rooms/' + rooms[i].room + '.png")';
        container.appendChild(div);

        for (let k = 0; k < 4; k++) {
            let ellips = document.createElement('div');
            ellips.classList.add('ellips');
            if (k == 0) {
                ellips.classList.add('ellips__checked');
            }

            ellips.addEventListener('click', onEllipsClickHandler);
            div.appendChild(ellips);
        }

        let number = document.createElement('div');
        number.classList.add('number');
        number.innerHTML = '<span style="font-size: 11px">№ </span>' + rooms[i].room;
        div.appendChild(number);

        let coast = document.createElement('div');
        coast.classList.add('coast');
        coast.innerHTML = rooms[i].price + '\u20bd <span style="font-size: 11px; opacity: 0.4">в сутки</span>';
        div.appendChild(coast);

        let line = document.createElement('div');
        line.classList.add('line');
        div.appendChild(line);


        let stars = rooms[i].stars;
        for (let k = 1; k < 6; k++) {
            let star = document.createElement('i');
            star.classList.add('material-icons', 'star');
            if (k > +stars) {
                star.innerHTML = 'star_border';
            } else {
                star.innerHTML = 'star';
            }
            
            div.appendChild(star);
        }

        let lux = document.createElement('div');
        lux.classList.add('lux');
        if (rooms[i].isLux == 'true') {
            lux.innerHTML = 'люкс';
        }
        div.appendChild(lux);

        let review = document.createElement('div');
        review.classList.add('review');
        review.innerHTML = rooms[i].review + '<span style="font-size: 11px; opacity: 0.4"> Отзывов</span>'
        div.appendChild(review);
        
    }
}

function onEllipsClickHandler(e) {
    let ellipses = e.target.parentElement.getElementsByClassName('ellips');
    for (let ellips of ellipses) {
        ellips.classList.remove('ellips__checked');
    }

    e.target.classList.add('ellips__checked');

}

function sort(rooms) {
    var byPrice = rooms.slice(0);
    byPrice.sort(function (a, b) {
        return b.price - a.price;
    });

    return byPrice;
}

