//@ts-check

function onLoad() {
    let roomData = JSON.parse(localStorage.getItem("roomData"));

    loadPhoto(roomData);


    loadDiagramm();
}

function loadDiagramm() {
    let dataImpression = {
        impressions: 260,
        magnificently: 120,
        good: 65,
        passably: 65,
        bad: 10,
    }

    let total = dataImpression.impressions;

    let voteCount = document.querySelector('.content__details__impression__diagramm__vote__count');
    voteCount.innerHTML = String(total);

    let position = 1;

    position = sectionLoad('bad', dataImpression.bad, dataImpression.impressions, position);
    position = sectionLoad('passably', dataImpression.passably, dataImpression.impressions, position);
    position = sectionLoad('good', dataImpression.good, dataImpression.impressions, position);
    position = sectionLoad('magnificently', dataImpression.magnificently, dataImpression.impressions, position);
} 

function sectionLoad(grade, count, total, position) {
    let circle = document.querySelector('.' + grade);
    let percent = count / total * 100;

    circle.setAttribute('stroke-dasharray', percent + ' ' + 100);
    circle.setAttribute('stroke-dashoffset', '-' + position);

    let bufer = document.querySelector('.' + grade + '__bufer');
    bufer.setAttribute('stroke-dasharray', '1 100');

    position += percent;
    bufer.setAttribute('stroke-dashoffset', '-' + position);

    return position;
}

function loadPhoto(roomData) {
    let mainPhoto = document.querySelector('.content__gallery__main');
    mainPhoto.style.background = 'no-repeat url("media/images/rooms/' + roomData.room + '/main.png")';

    let secPhoto = document.querySelector('.content__gallery__2');
    secPhoto.style.background = 'no-repeat url("media/images/rooms/' + roomData.room + '/image 2.png")';

    let thrdPhoto = document.querySelector('.content__gallery__3');
    thrdPhoto.style.background = 'no-repeat url("media/images/rooms/' + roomData.room + '/image 3.png")';
}