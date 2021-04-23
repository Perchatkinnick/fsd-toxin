const data = require('./data');

module.exports = {
	loadRooms
}

function loadRooms(page) {
    buildGrid(sort(data.roomsData), page);
}

function buildGrid(rooms, page) {
    let container = document.querySelector('.content__show__rooms');
    container.innerHTML = '';

    for (let i = 12 * (page - 1); i < 12 * page; i++) {
        if (i < data.roomsData.length) {
            let div = document.createElement('div');
            div.classList.add('room');
            div.addEventListener('click', onRoomClickHandler);
            div.dataset.room = rooms[i].room;
            div.style.background = 'no-repeat url("../src/media/images/rooms/' + rooms[i].room + '/icon.png")';
            container.appendChild(div);

            for (let k = 0; k < 4; k++) {
                let ellips = document.createElement('div');
                ellips.classList.add('ellips');

                if (k == 0) {
                    ellips.classList.add('ellips__checked');
                    ellips.style.left = '213.75px';
                }else {
                    let pos = (k * 11.25) + 213.75;
                    ellips.style.left =  String(pos) + 'px';
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
        }else {
            let div = document.createElement('div');
            div.classList.add('room');
            div.style.boxShadow = 'none';
            div.style.cursor = 'auto';
            container.appendChild(div);
        }
    }
}

function onRoomClickHandler(e) {
    let number = e.target.dataset.room;
    let roomData;
    for (let room of data.roomsData) {
        if (room.room == number) {
            roomData = room;
        }
    }
    localStorage.setItem('roomData', JSON.stringify(roomData));

    location.href = 'room-details.html';
}

function onEllipsClickHandler(e) {
    let ellipses = e.target.parentElement.getElementsByClassName('ellips');
    for (let ellips of ellipses) {
        ellips.classList.remove('ellips__checked');
    }

    e.target.classList.add('ellips__checked');

}

function sort(rooms) {
    let byPrice = rooms.slice(0);
    byPrice.sort(function (a, b) {
        return b.price - a.price;
    });

    return byPrice;
}

