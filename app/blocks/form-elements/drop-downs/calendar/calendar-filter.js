
let getCalendarBlock = document.querySelector('.calendar-filter');
let getCalendarButtonSend = document.querySelector('.calendar__buttons-item-send-filter');
let getCalendarFilterDelete = document.querySelector('#calendar-delete-filter');
let getDaysBlock = document.querySelector('.calednar__days-filter');
let getRightArrow = document.querySelector('.calendar__arrow-right-filter');
let getLeftArrow = document.querySelector('.calendar__arrow-left-filter');
let getCalendarTitleFilter = document.querySelector('.calendar__heading-filter');
let getCalendarBlockFooter = document.querySelector('.calendar__footer-filter');
let getCalendarFilterDate = document.querySelector('#calendar-filter-date');
let getCalendarFilterText = document.querySelector('#calendar-filter-text');
let getItemFilter = document.querySelectorAll('.calednar__days-item-filter');


//------------------ CalendarFilter -------------------------
let isTwoNumberFind = false;
let typeCalendar;

let dateNumberFirst = {
    value: 0,
    index : 0
}
let dateNumberSecond = {
    value: 0,
    index : 0
}


let nextDays;
let firstDayIndex;

const date = new Date();

let numberMonth = date.getMonth();
console.log(numberMonth);

const massiveDays = [
    "Январь",
    "Ферваль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];
  
const renderCalendar = (daysBlock, blockFooter, getCalendarHeading, daysItem)=>{ 
    date.setDate(1);

const month = date.getMonth();

const Year = date.getFullYear();

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1,0).getDate(); // Возрващаем количество дней текущего месяца

const prevLastDay = new Date(date.getFullYear(), date.getMonth() ,0).getDate(); // Возрвашает последнее число предыдущего месяца

const lastMonthDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(); // Возвращаем день недели, с которого начинается  следующий месяц

    nextDays = 7 - lastMonthDayIndex;
    firstDayIndex = date.getDay();

let banAdding = 0;

    getCalendarHeading.innerHTML = massiveDays[month] + " " + Year;

    let days = " ";
    let result = daysItem;

        if(firstDayIndex == 0){

        for(let x = 6; x > 0; x--){ 
            let prevLast = prevLastDay - x + 1;  
            days += '<div class = "calednar__days-item ' + result + ' calendar__prev-item" tabindex="0">' + prevLast + '</div>';
            daysBlock.innerHTML = days;                                                              
            banAdding++;
        } 

        }else{
            for(let x = firstDayIndex - 1; x > 0; x--){ 
                let prevLast = prevLastDay - x + 1;  
                days += '<div class = "calednar__days-item ' + result + ' calendar__prev-item" tabindex="0">' + prevLast + '</div>';
                daysBlock.innerHTML = days;                                                              
                banAdding++;
            } 
        }
        for(let i = 1; i <= lastDay; i++){
            if( i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
                days += '<div class = "calednar__days-item ' + result + ' calendar__days-today" tabindex="0">' + i + '</div>';
                banAdding++;
            
            }else {
                days += '<div class = "calednar__days-item ' + result + '" tabindex="0">' + i + '</div>';
                daysBlock.innerHTML = days;
                banAdding++;

            }

        }

            for(let j = 1; j <= nextDays; j++){
                days += '<div class = "calednar__days-item ' + result + '  calendar__prev-item" tabindex="0">' + j + '</div>';
                daysBlock.innerHTML = days;
                banAdding++;

                if(banAdding > 36){
                    blockFooter.style.marginTop = "6px"
                }
                else{
                    blockFooter.style.marginTop = "25px"
                }
            
        }
        dateNumberSecond.value = 0;
        dateNumberSecond.index = 0;
        dateNumberFirst.value = 0;
        dateNumberFirst.index = 0;

}
function renderNumberDays(daysItem, type){ // Функция для поиска двух чисел, которые не повторяются.
      let getItem;
      if(type == "one") {
          getItem = getDaysBlockOne.querySelectorAll(daysItem);
          
      } else {
          getItem = document.querySelectorAll(daysItem);
      }
     
  let result;
  for(let i = 0; i < getItem.length; i++){
      result = getItem[i];
  
      result.addEventListener('click', function(e){
          let count = 0;
      
          if(isTwoNumberFind == false) {

              dateNumberFirst.value = e.composedPath().values().next().value.innerHTML;
            
              isTwoNumberFind = true;
          }
          else if(isTwoNumberFind == true) {

              dateNumberSecond.value = e.composedPath().values().next().value.innerHTML;
          
              if(firstDayIndex == 0){
                  count = 6;
              }
              if(firstDayIndex == 1){
                  count = firstDayIndex - 1;

              }
              if(firstDayIndex > 1) {
                  count = firstDayIndex - 1;
              }
              if(dateNumberSecond.value - dateNumberFirst.value < 0) {
                  let result;
                  result = dateNumberFirst.value;
                  dateNumberFirst.value = dateNumberSecond.value;
                  dateNumberSecond.value = result;
              }
              
                  while (count < getItem.length - nextDays){

                     if(dateNumberFirst.value == getItem[count].innerHTML){

                         dateNumberFirst.index = count;
                      }
                      else if(dateNumberSecond.value == getItem[count].innerHTML){
                      
                          dateNumberSecond.index = count;
                          count =  getItem.length - nextDays;
                      }

                      count++; 
                  
              }
              
              isTwoNumberFind = false;
          }
          if(dateNumberFirst.index >= 0 && dateNumberSecond.index > 0) {
              
              getItem[dateNumberFirst.index].setAttribute("class", "calednar__days-item calednar__days-item_focus-left");
              getItem[dateNumberSecond.index].setAttribute("class", "calednar__days-item calednar__days-item_focus-right");
              for(let i = dateNumberFirst.index + 1; i < dateNumberSecond.index; i++){
                  getItem[i].setAttribute("class", "calednar__days-item calednar__days-item_light");
              }
          }
      
      })

  } 
}
    getRightArrow.addEventListener('click', function(){
        numberMonth++;
        date.setMonth(date.getMonth() + 1)
        if(numberMonth == 12){
            numberMonth = 0;
        }
        
        renderCalendar(getDaysBlock, getCalendarBlockFooter, getCalendarTitleFilter, "calendar__days-item-filter");
        renderNumberDays(".calendar__days-item-filter");
        
    })
    getLeftArrow.addEventListener('click', function(){
        numberMonth--;
        date.setMonth(date.getMonth() - 1)
        if(numberMonth == -1){
            numberMonth = 11;
        }
        renderCalendar(getDaysBlock, getCalendarBlockFooter, getCalendarTitleFilter, "calendar__days-item-filter");
        renderNumberDays(".calendar__days-item-filter");
        
    })

    getCalendarButtonSend.addEventListener('click', function() {
        let result = massiveDays[numberMonth];
        let nullingDaysFirst = "";
        let nullingDaysSecond = "";
        let nullingMonth = "";
        if(dateNumberSecond.value < 10){
            nullingDaysSecond = "0";
        }
        if(dateNumberFirst.value < 10) {
            nullingDaysFirst = "0";
        }
        if(numberMonth < 10){
            nullingMonth = "0";
        }    
        
        for(i = 0; i < getCalendarOneText.length; i++) {
            getCalendarOneText[i].innerHTML = nullingDaysFirst + dateNumberFirst.value + "." + nullingMonth + numberMonth + "." + date.getFullYear();
            getCalendarOneTextSecond[i].innerHTML = nullingDaysSecond + dateNumberSecond.value + "." + nullingMonth + numberMonth + "." + date.getFullYear();
        }
        getCalendarFilterText.innerHTML = dateNumberFirst.value + " " + result.substring(0, 3) + " - " + dateNumberSecond.value + " " + result.substring(0, 3);
        
        getCalendarBlock.style.display = 'none';
        getCalendarFilterDate.addEventListener('click', first);
    })
    getCalendarFilterDelete.addEventListener('click', function(){
        renderCalendar(getDaysBlock, getCalendarBlockFooter, getCalendarTitleFilter, "calendar__days-item-filter");
        renderNumberDays(".calendar__days-item-filter");
    })

    
    getCalendarFilterDate.addEventListener('click', first);

    function first(e) {
        typeCalendar = "FilterCalendar";
        renderCalendar(getDaysBlock, getCalendarBlockFooter, getCalendarTitleFilter, "calendar__days-item-filter");
        renderNumberDays(".calendar__days-item-filter");

        e.stopImmediatePropagation();
        this.removeEventListener("click", first);
        getCalendarFilterDate.onclick = second;
        getCalendarBlock.style.display = 'block';
    }
    function second() {
        getCalendarBlock.style.display = 'none';
        getCalendarFilterDate.onclick = first;
    
    }  
