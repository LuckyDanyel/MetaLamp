
const date = new Date();
function init () {
    let sliceStrokeUrl = window.location.href.split("?");
    console.log(decodeURIComponent(sliceStrokeUrl));
    let numberRoom = document.querySelectorAll('.appart__header-left-item')[1];
    let pricePerRoom = document.querySelectorAll('.appart__header-right-item')[0];
    let getCalendarTextOne = document.querySelector('#calendar__text-one');
    let getCalendarTextSecond = document.querySelector('#calendar__text-one-second');
    let getCountDaysText = document.querySelectorAll('.appart__main-text')[0];
    let getResultDaysText = document.querySelectorAll('.appart__main-text')[1];
    let getTootalText = document.querySelectorAll('.appart__footer-total')[1];

    controllerForm.Room(sliceStrokeUrl, numberRoom, pricePerRoom);
    controllerForm.Date(sliceStrokeUrl, getCalendarTextOne, getCalendarTextSecond, pricePerRoom, getCountDaysText, getResultDaysText, getTootalText);
    

    let getGuestText = document.querySelector('.drop-downs__guest-text');
    controllerForm.Guest(sliceStrokeUrl, getGuestText);

    let getBtnSend = document.querySelector('.calendar__buttons-item-send-one');
    $(getBtnSend).click(controllerForm.UpdateDate.bind(this, getCalendarTextOne, getCalendarTextSecond, pricePerRoom, getCountDaysText, getResultDaysText, getTootalText));

    let getClickBlockCalendarOne = document.querySelector('.calendar-date-one');
    $(getClickBlockCalendarOne).click(controllerForm.UpdateDate.bind(this, getCalendarTextOne, getCalendarTextSecond, pricePerRoom, getCountDaysText, getResultDaysText, getTootalText));



}

let controllerForm = {
    Room: function(url, numberRoomDom, priceRoomDom) {
        let rightNumber = localStorage.getItem("DataNumberRoom");
        let isLux = (localStorage.getItem("isLux") == 0) ? null :`<div class = "room__info-item-left"> Люкс </div>`;
        let priceRoom = localStorage.getItem("DataPriceRoom");

        viewForm.displayRoom(rightNumber, priceRoom, numberRoomDom, priceRoomDom);

    },
    Date: function(url, firstDateText, secondDateText, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom) {
        let getDataDate = localStorage.getItem("DataArrival") + localStorage.getItem("DataExit");
        console.log(getDataDate);
        let dateFirts = localStorage.getItem("DataArrival");
        let dateDaysFirst = dateFirts.substr(0, 2);
        let dateMonthFirst = dateFirts.substr(3, 2);
            
        let dateSecond = localStorage.getItem("DataExit");
        let dateDaysSecond = dateSecond.substr(0, 2);
        let dateMonthSecond = dateSecond.substr(3, 2);

        console.log(dateMonthFirst);
        
        viewForm.displayDate(firstDateText, dateDaysFirst, dateMonthFirst, secondDateText, dateDaysSecond, dateMonthSecond);
        modelForm.count(dateDaysFirst, dateDaysSecond, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom);

        
    },
    Guest: function(url, textblock) {
        let countGuset = (localStorage.getItem("DataGuest") == null)  ? "Сколько гостей" : localStorage.getItem("DataGuest");

        viewForm.displayGuest(countGuset, textblock);
    },
    UpdateDate: function(firstDateDom, SecondDateDoom, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom) {
            firstDate = firstDateDom.innerHTML.substring(0, 2);
            secondDate = SecondDateDoom.innerHTML.substring(0, 2);
            modelForm.count(firstDate, secondDate, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom);
    },
}

let modelForm = {
    count: function(firstDate, SecondDate, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom) {
        let resultDays = Number(priceRoomDoom.innerHTML.split("₽")[0].replace(/\s+/g, '')) * Number(SecondDate - firstDate);
        let countDays = String(priceRoomDoom.innerHTML) + " x " + String(SecondDate - firstDate);
        console.log();
        viewForm.displayCount(CountDaysTextDom, countDays, resultDays, ResultDaysTextDom, TootalTextDom);
    }
}

let viewForm = {
    displayRoom: function(number, price, numberRoomDom, priceRoomDom) {
        numberRoomDom.innerHTML = number;
        priceRoomDom.innerHTML = price[0] + price.substring(1, price.length);
    },
    displayDate: function(firstDateText, dateDaysFirst, dateMonthFirst, secondDateText, dateDaysSecond, dateMonthSecond) {
        let masiveMonth = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
       

        firstDateText.innerHTML = dateDaysFirst + "." + dateMonthFirst + "." + date.getFullYear();
        secondDateText.innerHTML = dateDaysSecond + "." + dateMonthSecond + "." + date.getFullYear();
    },
    displayGuest: function(item, textBlock){
        textBlock.innerHTML = item;
    },
    displayCount: function(textBlockCount, countDays, resultDays, textBlockResult, totalBlock) {
        textBlockCount.innerHTML = countDays + " " + "cуток";
        textBlockResult.innerHTML = resultDays + "₽";
        totalBlock.innerHTML = resultDays + "₽";
    },
}

window.onload = init();


