
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
        let rightNumber = url[1];
        let isLux = url[2]
        let priceRoom = decodeURIComponent(url[3]).split("undefined")[0];

        viewForm.displayRoom(rightNumber, priceRoom, numberRoomDom, priceRoomDom);

    },
    Date: function(url, firstDateText, secondDateText, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom) {

        let dateCalendar = decodeURIComponent(url[4]).split(" - ");
        let dateFirts = dateCalendar[0];
        let dateDaysFirst = dateFirts.split(" ")[0];
        let dateMonthFirst = dateFirts.split(" ")[1];
            
        let dateSecond = dateCalendar[1];
        let dateDaysSecond = dateSecond.split(" ")[0];
        let dateMonthSecond = dateSecond.split(" ")[1];
        
        viewForm.displayDate(firstDateText, dateDaysFirst, dateMonthFirst, secondDateText, dateDaysSecond, dateMonthSecond);
        modelForm.count(dateDaysFirst, dateDaysSecond, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom);
    },
    Guest: function(url, textblock) {
        let countGuset = decodeURIComponent(url[5]);

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
        let nullingDaysFirst = "";
        let nullingDaysSecond = "";
        let nullingMonth = "";

              if(dateDaysFirst < 9){
                  nullingDaysFirst = "0";
              }
              if(dateDaysSecond < 9) {
                  nullingDaysSecond = "0";
              }
              if(masiveMonth.indexOf(String(dateMonthSecond)) < 9){
                  nullingMonth = "0";
              } 

        firstDateText.innerHTML = nullingDaysFirst + dateDaysFirst + "." + nullingMonth + (Number(masiveMonth.indexOf(String(dateMonthFirst)) + 1)) + "." + date.getFullYear();
        secondDateText.innerHTML = nullingDaysSecond + dateDaysSecond + "." + nullingMonth + (Number(masiveMonth.indexOf(String(dateMonthSecond)) + 1)) + "." + date.getFullYear();
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


