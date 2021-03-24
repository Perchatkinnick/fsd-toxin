//@ts-check

function onLoad() {
    let roomData = JSON.parse(localStorage.getItem("roomData"));

    loadPhoto(roomData);

}

function loadPhoto(roomData) {
    let mainPhoto = document.querySelector('.content__gallery__main');
    mainPhoto.style.background = 'no-repeat url("media/images/rooms/' + roomData.room + '/main.png")';

    let secPhoto = document.querySelector('.content__gallery__2');
    secPhoto.style.background = 'no-repeat url("media/images/rooms/' + roomData.room + '/image 2.png")';

    let thrdPhoto = document.querySelector('.content__gallery__3');
    thrdPhoto.style.background = 'no-repeat url("media/images/rooms/' + roomData.room + '/image 3.png")';
}