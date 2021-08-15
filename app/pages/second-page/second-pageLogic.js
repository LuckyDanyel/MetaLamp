
let getAllRooms = document.querySelectorAll('.room');
let getAllRoom = document.querySelectorAll('.room__box');
let getNumber = document.querySelectorAll('.room__info-item-left');
let getCalendarTextFilter = document.querySelector('#calendar-filter-text');
let getGuestText = document.querySelector('.drop-downs__guest-text');

let masiveMonth = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

let sendNumberRoom = 0;
let isLux = 0;
let priceRoom = 0;

let getGuset = decodeURIComponent(window.location.href.split("?")[3]);

let dateFirst = window.location.href.split("?")[1];
let dateDaysFirst = Number(dateFirst.split(".")[0]);
let dateMonthsFirst = Number(dateFirst.split(".")[1]);


let dateSecond = window.location.href.split("?")[2];
let dateDaysSecond = Number(dateSecond.split(".")[0]);
let dateMonthsSecond = Number(dateSecond.split(".")[1]);

getCalendarTextFilter.innerHTML = dateDaysFirst + " " + masiveMonth[dateMonthsFirst - 1] + " - " + dateDaysSecond + " " + masiveMonth[dateMonthsSecond - 1];
getGuestText.innerHTML = getGuset;


for(let i = 0; i < getAllRoom.length; i++){
      let addEventRoom = getAllRoom[i];

      $(addEventRoom).click(findRoom.bind(this, i))
}

function findRoom(numberRoom) {
      if(getAllRooms[numberRoom].children[2].children[0].children[0].children[2] == undefined){
            isLux = 0;
      }else {
            isLux = 1;
      }
      priceRoom = getAllRooms[numberRoom].children[2].children[0].children[1].children[0].innerHTML
      sendNumberRoom = getAllRooms[numberRoom].children[2].children[0].children[0].children[1].innerHTML;
      let sendCalendarTextFilter = getCalendarTextFilter.innerHTML;
      let sendCountGuest = getGuestText.innerHTML;
      console.log(sendCalendarTextFilter, sendCountGuest);
      window.location = 'specific.html?' + sendNumberRoom + "?" + isLux + "?" + priceRoom.split(" ")[0] + priceRoom.split(" ")[1] + "?" + sendCalendarTextFilter + "?" + sendCountGuest; 
}
