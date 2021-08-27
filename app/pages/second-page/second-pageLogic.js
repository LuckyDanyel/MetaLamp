
let getAllRoom = document.querySelectorAll('.room__box');
let getCalendarTextFilter = document.querySelector('#calendar-filter-text');
let getGuestText = document.querySelector('.drop-downs__guest-text');
let getBtnFilter = document.querySelector('.aside__filter-btn');
let getBtnEnd = document.querySelector('.aside__filter-end');
let firstClick = true;
let firstClickEnd = false;

let masiveMonth = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

let dateFirst = localStorage.getItem("DataArrival");
let dateDaysFirst = Number(dateFirst.split(".")[0]);
let dateMonthsFirst = Number(dateFirst.split(".")[1]);


let dateSecond = localStorage.getItem("DataExit");
let dateDaysSecond = Number(dateSecond.split(".")[0]);
let dateMonthsSecond = Number(dateSecond.split(".")[1]);

getCalendarTextFilter.innerHTML = dateDaysFirst + " " + masiveMonth[dateMonthsFirst - 1] + " - " + dateDaysSecond + " " + masiveMonth[dateMonthsSecond - 1];
getGuestText.innerHTML =  (localStorage.getItem("DataGuest") == null) ? "Сколько гостей" : localStorage.getItem("DataGuest");

for(let i = 0; i < getAllRoom.length; i++){
      let addEventRoom = getAllRoom[i];

      $(addEventRoom).click(findRoom.bind(this, i))
}

function findRoom(numberRoom) {
      let isLux;
      let getAllRooms = document.querySelectorAll('.room')[numberRoom];
      let getLux = getAllRooms.querySelectorAll('.room__info-item-left')[2];
      let getNumberRoom = getAllRooms.querySelectorAll('.room__info-item-left')[1];
      let getPriceRoom = getAllRooms.querySelectorAll('.room__info-item-right')[0];
      if(getLux == undefined){
            isLux = 0;
            localStorage.setItem("isLux", isLux);

      }else {
            isLux = 1;
            localStorage.setItem("isLux", isLux);
            
      }
      localStorage.setItem("DataPriceRoom", getPriceRoom.innerHTML);
      localStorage.setItem("DataNumberRoom", getNumberRoom.innerHTML);
      console.log(localStorage.getItem("isLux"));
      window.location = 'specific.html?';
}
// ---------------------------- For css ----------------------------------------------------
      $(document).scroll(function(){
                  if(window.innerWidth > 890 && window.innerWidth < 1200) {
                        let marginTop = 0;
                        let scrolled = $(this).scrollTop();
                       
                        marginTop = scrolled - 50;
                        if(scrolled < 600) {
                              $('.aside').css("margin-top", 0 + "px")
                        }
                        if( scrolled > 601 && scrolled < document.body.scrollHeight - scrolled - 1200) {
                           $('.aside').css("margin-top", marginTop + "px")
                        
                        }
                  }
                  if(window.innerWidth > 650 && window.innerWidth < 890) {
                        let marginTop = 0;
                        let scrolled = $(this).scrollTop();
                        
                        marginTop = scrolled - 50;
                        if(scrolled < 600) {
                              $('.aside').css("margin-top", 0 + "px")
                        }
                        if( scrolled > 601 && scrolled < document.body.scrollHeight - scrolled + 300) {
                           $('.aside').css("margin-top", marginTop + "px")
                        
                        }
                  }
      
        });
           
        $(getBtnFilter).click(function(){
            console.log("Первая фунция");
              if(firstClick == true) {
                  $('.aside').show();
                  $('.aside__filter-end').show();
                  firstClick = false;
                  firstClickEnd = true;
              } else {
                  firstClick = true;
              }
        })

        getBtnEnd.addEventListener('click', function(){
            console.log("Вторая фунция")
            if(firstClickEnd == true){
                  $('.aside').hide();
                  $('.aside__filter-end').hide();
                  firstClickEnd = false;
                  
            }       
        })
      
const mediaMin = window.matchMedia('(min-width: 651px)')


function displayAsideMin(e) {
      if (e.matches) {
            $('.aside').show();
      } else {
            $('.aside__filter-end').hide();
            $('.aside').hide();
            firstClick = true;
      }
    }
    mediaMin.addListener(displayAsideMin)
    displayAsideMin(mediaMin)

  
import {getSlider} from "../../blocks/room/room";

getSlider();


