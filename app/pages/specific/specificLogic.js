const { get } = require("jquery");

const date = new Date();

let sliceStrokeUrl = window.location.href.split("?");
let rightNumber = sliceStrokeUrl[1];
let isLux = sliceStrokeUrl[2]
let priceRoom = sliceStrokeUrl[3].substring(0, 4);

let dateCalendar = decodeURIComponent(sliceStrokeUrl[4]).split(" - ");
let dateFirts = dateCalendar[0];
let dateDaysFirst = dateFirts.split(" ")[0];
let dateMonthFirst = dateFirts.split(" ")[1];

let dateSecond = dateCalendar[1];
let dateDaysSecond = dateSecond.split(" ")[0];
let dateMonthSecond = dateSecond.split(" ")[1];
let masiveMonth = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

let countGuset = decodeURIComponent(sliceStrokeUrl[5]);


let numberOnPage = document.querySelectorAll('.appart__header-left-item')[1];
let pricePerDays = document.querySelectorAll('.appart__header-right-item')[0];
let getCalendarTextOne = document.querySelector('#calendar__text-one');
let getCalendarTextSecond = document.querySelector('#calendar__text-one-second');
let getGuestText = document.querySelector('.drop-downs__guest-text');


numberOnPage.innerHTML = rightNumber;
pricePerDays.innerHTML = priceRoom[0] + " " + priceRoom.substring(1, priceRoom.length) + "₽";
getGuestText.innerHTML = countGuset;

let nullingDaysFirst = "";
let nullingDaysSecond = "";
let nullingMonth = "";
      if(dateDaysFirst < 10){
          nullingDaysFirst = "0";
      }
      if(dateDaysSecond < 10) {
          nullingDaysSecond = "0";
      }
      if(masiveMonth.indexOf(String(dateMonthSecond)) + 1 < 10){
          nullingMonth = "0";
      } 
     

getCalendarTextOne.innerHTML = nullingDaysFirst + dateDaysFirst + "." + nullingMonth + (Number(masiveMonth.indexOf(String(dateMonthFirst)) + 1)) + "." + date.getFullYear();
getCalendarTextSecond.innerHTML = nullingDaysSecond + dateDaysSecond + "." + nullingMonth + (Number(masiveMonth.indexOf(String(dateMonthSecond)) + 1)) + "." + date.getFullYear();



let getLikeAll = document.querySelectorAll('.like');
let getLikeTextAll = document.querySelector('.like__text');


getLikeAll.forEach(getLike => {
    $(getLike).click(countLike)
},)

function countLike(event) {
    //   console.log(event.currentTarget);
    //   event.currentTarget.querySelector('.like__text').innerHTML =  Number(event.currentTarget.querySelector('.like__text').innerHTML) + 1; 
    //   event.stopPropagation();
}