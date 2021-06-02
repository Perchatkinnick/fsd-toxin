module.exports = {
	func,
	getComplexDate
}

function func() {
	let backArrow = document.querySelector('.arrow-back');

	backArrow.addEventListener('click', function () {
		isFuture = false;
		draw(body, getPrevYear(body), getPrevMonth(body), isFuture);
		showCurrentMonth(body);
	});

	let forwardArrow = document.querySelector('.arrow-forward');

	forwardArrow.addEventListener('click', function () {
		if (body.dataset.year >= year && body.dataset.month >= month) {
			isFuture = true;
		} else {
			isFuture = false;
		}

		draw(body, getNextYear(body), getNextMonth(body), isFuture);
		showCurrentMonth(body);
	});

	let clear = document.querySelector('.clear');

	clear.addEventListener('click', function () {
		body.dataset.month = month;
		body.dataset.year = year;
		isFuture = false;
		body.dataset.dot1 = '';
		body.dataset.dot2 = '';
		draw(body, year, month, isFuture);
		showCurrentMonth(body);
	});

	let event = new Event("changeDate", { bubbles: true }); ///

	let apply = document.querySelector('.apply');
	apply.addEventListener('click', function () {

		let currentPage = document.location.href;

		let dot1 = body.dataset.dot1;
		let dot2 = body.dataset.dot2;

		if (currentPage.split('/').pop() != 'search-room.html') {
			let arriveDate = document.querySelector('.date-picker__arrive').querySelector('.content__search__rect');
			let departureDate = document.querySelector('.date-picker__departure').querySelector('.content__search__rect');

			dateLoad(arriveDate, dot1);
			dateLoad(departureDate, dot2);
		}

		if(dot1 != "" && dot2 != "") {
			localStorage.setItem('dateArrive', dot1);
			localStorage.setItem('dateDeparture', dot2);
		}

		// for search-room
		let contentDateTitle = document.querySelector('.content__date__title');
		if (contentDateTitle != null) {
			if (dot1 != '' && dot2 != '')
				complexDateLoad(contentDateTitle, dot1, dot2);
		}


		body.dataset.dot1 = '';
		body.dataset.dot2 = '';

		let calendar = document.querySelector('.calendar-parent');
		calendar.style.display = '';

		calendar.dispatchEvent(event); ///
	});

	let days = document.querySelector('#days');
	let body = days.querySelector('.body');

	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth();

	body.dataset.month = month;
	body.dataset.year = year;

	let isFuture = false;

	draw(body, year, month, isFuture);

	showCurrentMonth(body);

}

function complexDateLoad(elem, arriveDate, departureDate) {
	let complexArriveDate = getComplexDate(arriveDate);
	let complexDepartureDate = getComplexDate(departureDate);

	elem.innerHTML = complexArriveDate + ' - ' + complexDepartureDate;
}

function getComplexDate(date) {
	let arr = date.split('.');
	date = arr[2] + ' ' + getShortMonth(arr[1]);

	return date;
}

function getShortMonth(num) {

	let months = ['янв', 'фев', 'мар', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'];
	let str = '';

	for (let i = 0; i < 12; i++) {
		if (eraseZero(num) == i) {
			str = months[i];
		}
	}

	return str;
}

function dateLoad(elem, text) {

	if (text != '') {
		let arr = text.split('.');

		let content = arr[2] + '.' + monthForShow(arr[1]) + '.' + arr[0];

		elem.innerHTML = content;
	} else {
		//alert('Выберите дату прибытия и дату отъезда');
	}
}

function monthForShow(number) {
	if (number == 11) {
		number = 0;
	}
	number++;


	return addZero(number);
}

function getNextMonth(body) {
	let month = body.dataset.month;

	if (month == 11) {
		month = 0
	} else {
		month++;
	}

	body.dataset.month = month;

	return month;
}

function getNextYear(body) {
	let year = body.dataset.year;
	let month = body.dataset.month;

	if (month == 11) {
		year++;
		body.dataset.year = year;
	}

	return year;
}

function getPrevMonth(body) {
	let month = body.dataset.month;

	if (month == 0) {
		month = 11
	} else {
		month--;

	}

	body.dataset.month = month;

	return month;
}

function getPrevYear(body) {
	let year = body.dataset.year;
	let month = body.dataset.month;

	if (month == 0) {
		year--;
		body.dataset.year = year;
	}

	return year;
}

function draw(body, year, month, isFuture) {
	let days = range(getLastDay(year, month));

	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay = getLastWeekDay(year, month);

	let res = chunk(normalize(days, firstWeekDay, 7 - lastWeekDay), 7);
	createTable(body, res, isFuture);
}

function createTable(parent, arr, isFuture) {
	parent.innerHTML = '';
	let nextMonthDays = 1;
	let prevMonthDays = getLastDay(parent.dataset.year, parent.dataset.month - 1);

	let emptyCells = -1;
	for (let j = 0; j < arr[0].length; j++) {
		if (arr[0][j] == '') {
			emptyCells++;
		}
	}

	for (let i = 0; i < arr.length; i++) {
		let row = document.createElement('tr');
		parent.appendChild(row);

		for (let k = 0; k < 7; k++) {
			let cell = document.createElement('td');
			cell.innerHTML = arr[i][k];
			if (isToday(cell, parent)) {
				cell.classList.add('today');
				isFuture = true;
			}

			if (parent.dataset.dot1 != '') {
				let dot1ARR = parent.dataset.dot1.split('.');
				let dayDot1 = eraseZero(dot1ARR[2]);
				if (dot1ARR[0] == parent.dataset.year && dot1ARR[1] == parent.dataset.month && dayDot1 == cell.innerHTML) {
					cell.classList.add('parentDotLeft');
					let parentDiv = document.createElement('div');
					parentDiv.innerHTML = cell.innerHTML;
					cell.innerHTML = '';
					parentDiv.classList.add('dot');
					cell.appendChild(parentDiv);
				}
			}

			if (parent.dataset.dot2 != '') {
				let dot2ARR = parent.dataset.dot2.split('.');
				let dayDot2 = eraseZero(dot2ARR[2]);
				if (dot2ARR[0] == parent.dataset.year && dot2ARR[1] == parent.dataset.month && dayDot2 == cell.innerHTML) {
					cell.classList.add('parentDotRight');
					let parentDiv = document.createElement('div');
					parentDiv.innerHTML = cell.innerHTML;
					cell.innerHTML = '';
					parentDiv.classList.add('dot');
					cell.appendChild(parentDiv);
				} else {
					let dot1 = parent.dataset.dot1.split('.');
					let dot2 = parent.dataset.dot2.split('.');

					if (dot2[0] == dot1[0]) {
						if (eraseZero(dot2[1]) == eraseZero(dot1[1])) {
							if (+cell.innerHTML > eraseZero(dot1[2]) && +cell.innerHTML < eraseZero(dot2[2]) && eraseZero(parent.dataset.month) == eraseZero(dot1[1]) && parent.dataset.year == dot1[0]) {
								cell.classList.add('period');
							}
						} else {
							if (+cell.innerHTML > eraseZero(dot1[2]) && eraseZero(dot1[1]) == parent.dataset.month) {
								cell.classList.add('period');
							}
							if (+cell.innerHTML < eraseZero(dot2[2]) && eraseZero(dot2[1]) == parent.dataset.month) {
								cell.classList.add('period');
							}
						}
					}
				}
			}

			if (cell.innerHTML == '' && i > 0) {
				cell.innerHTML = nextMonthDays;
				cell.classList.add('anotherMonthDays');
				cell.classList.remove('period');
				isFuture = false;
				nextMonthDays++;
			}

			if (cell.innerHTML == '' && i == 0) {
				cell.innerHTML = prevMonthDays - emptyCells;
				emptyCells--;
				cell.classList.add('anotherMonthDays');
				cell.classList.remove('period');
				isFuture = false;

			}

			let currentDate = new Date();
			if (currentDate.getFullYear() <= parent.dataset.year && currentDate.getMonth() < parent.dataset.month) {
				isFuture = true;
			}

			if (isFuture && !cell.classList.contains('anotherMonthDays')) {
				cell.addEventListener('mouseover', cursorChange);
				cell.addEventListener('click', function () {
					if (parent.dataset.dot1 == '') {
						cell.classList.add('dot');
						parent.dataset.dot1 = parent.dataset.year + '.' + parent.dataset.month + '.' + addZero(cell.innerHTML);
					} else {
						let dot2 = parent.dataset.year + '.' + parent.dataset.month + '.' + addZero(cell.innerHTML)
						if (parent.dataset.dot2 == '' && parent.dataset.dot1 < dot2) {
							cell.classList.add('dot');
							parent.dataset.dot2 = dot2;
							createTable(parent, arr, isFuture)
						}
					}
				});
			}
			row.appendChild(cell);
		}
	}
}

function eraseZero(str) {
	if(!!str){
		if (str.split('')[0] == '0') {
		str = str.split('')[1]
	}

	return str;
	}
}

function addZero(num) {
	if (num < 10) {
		num = '0' + num;
	}

	return num;
}

function isToday(cell, body) {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth();

	if (body.dataset.month == month && body.dataset.year == year && cell.innerHTML == date.getDate()) {
		return true;
	} else {
		return false;
	}
}

function normalize(arr, left, right) {
	// left
	if (left != 0) {
		for (let i = 0; i < left - 1; i++) {
			arr.unshift('');
		}
	} else {
		for (let i = 0; i < 6; i++) {
			arr.unshift('');
		}
	}
	//right
	for (let k = 0; k < right; k++) {
		arr.push('');
	}

	return arr;
}

function chunk(arr, n) {

	let result = [];
	let countWeeks = Math.ceil(arr.length / n);

	for (let i = 0; i < countWeeks; i++) {
		let week = arr.splice(0, n);
		result.push(week);
	}

	return result;
}

function getLastWeekDay(year, month) {
	let date = new Date(year, month + 1, 0);
	let lastWeekDay = date.getDay();

	return lastWeekDay;
}

function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 1);
	let firstWeekDay = date.getDay();

	return firstWeekDay;
}

function range(count) {
	let arr = [];

	for (let i = 1; i <= count; i++) {
		arr.push(i);
	}

	return arr;
}

function getLastDay(year, month) {
	let date = new Date(year, month + 1, 0);
	let lastDay = date.getDate();

	return lastDay;
}


function showCurrentMonth(body) {
	let month = body.dataset.month;
	let year = body.dataset.year;

	let info = document.querySelector('.info');
	let text = getMonth(+month) + ' ' + year;
	info.innerHTML = text;
}

function getMonth(num) {
	let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	let str = '';

	for (let i = 0; i < 12; i++) {
		if (num == i) {
			str = months[i];
		}
	}

	return str;
}

function cursorChange(event) {
	this.style.cursor = 'pointer';
}



















