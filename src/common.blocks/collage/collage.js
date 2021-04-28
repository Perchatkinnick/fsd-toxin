module.exports = {
	loadPhoto
}

function loadPhoto(roomData) {
    let mainPhoto = document.querySelector('.collage__main');
    mainPhoto.style.background = 'no-repeat url("../src/media/images/rooms/' + roomData.room + '/main.png")';

    let secPhoto = document.querySelector('.collage__2');
    secPhoto.style.background = 'no-repeat url("../src/media/images/rooms/' + roomData.room + '/image 2.png")';

    let thrdPhoto = document.querySelector('.collage__3');
    thrdPhoto.style.background = 'no-repeat url("../src/media/images/rooms/' + roomData.room + '/image 3.png")';
}