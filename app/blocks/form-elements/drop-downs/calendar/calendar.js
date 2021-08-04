

let getDaysBlock = document.querySelector('.calednar__days-filter');
let getRightArrow = document.querySelector('.calendar__arrow-right-filter');
let getLeftArrow = document.querySelector('.calendar__arrow-left-filter');
let getCalendarTitle = document.querySelector('.calendar__heading-filter');
let getCalendarBlockFooter = document.querySelector('.calendar__footer-filter');
let getCalendarBlock = document.querySelector('.calendar-filter');
let getCalendarFilterDate = document.querySelector('#calendar-filter-date');
let getCalendarButtonSend = document.querySelector('.calendar__buttons-item-send-filter');
let getCalendarFilterText = document.querySelector('#calendar-filter-text');
let getCalendarFilterDelete = document.querySelector('#calendar-delete-filter');


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
  

const renderCalendar = ()=>{

    date.setDate(1);

const month = date.getMonth();

const Year = date.getFullYear();

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1,0).getDate(); // Возрващаем количество дней текущего месяца

const prevLastDay = new Date(date.getFullYear(), date.getMonth() ,0).getDate(); // Возрвашает последнее число предыдущего месяца

const lastMonthDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(); // Возвращаем день недели, с которого начинается  следующий месяц

    nextDays = 7 - lastMonthDayIndex;
    firstDayIndex = date.getDay();

let banAdding = 0;

  getCalendarTitle.innerHTML = massiveDays[month] + " " + Year;

    let days = " ";
    if(firstDayIndex == 0){

    for(x = 6; x > 0; x--){ 
        let prevLast = prevLastDay - x + 1;  
        days += '<div class = "calednar__days-item calendar__prev-item" tabindex="0">' + prevLast + '</div>';
        getDaysBlock.innerHTML = days;                                                              
        banAdding++;
    } 
    
    }else{
        for(x = firstDayIndex - 1; x > 0; x--){ 
            let prevLast = prevLastDay - x + 1;  
            days += '<div class = "calednar__days-item calendar__prev-item" tabindex="0">' + prevLast + '</div>';
            getDaysBlock.innerHTML = days;                                                              
            banAdding++;
        } 
    }
    for(i = 1; i <= lastDay; i++){
        if( i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += '<div class = "calednar__days-item calendar__days-today" tabindex="0">' + i + '</div>';
            banAdding++;
           
        }else {
            days += '<div class = "calednar__days-item" tabindex="0">' + i + '</div>';
            getDaysBlock.innerHTML = days;
            banAdding++;
            
        }

    }
    
        for(j = 1; j <= nextDays; j++){
            days += '<div class = "calednar__days-item calendar__prev-item" tabindex="0">' + j + '</div>'
            getDaysBlock.innerHTML = days;
            banAdding++;

            if(banAdding > 36){
                getCalendarBlockFooter.style.marginTop = "6px"
            }
            else{
                getCalendarBlockFooter.style.marginTop = "25px"
            }
           
    }

}
function deleteNumberDays(){

    getCalendarFilterDelete.addEventListener('click', function(){
        renderCalendar();
        dateNumberFirst.value = 0;
        dateNumberFirst.index = 0;
        dateNumberSecond.value = 0;
        dateNumberSecond.index = 0;
        renderNumberDays(typeCalendar);
    })
}
function renderNumberDays(type){ // Функция для поиска двух чисел, которые не повторяются. 
    
    if(type == "FilterCalendar") {
        let getItem = document.querySelectorAll('.calednar__days-item');
        let result;
        for(i = 0; i < getItem.length; i++){
            result = getItem[i];
        
            result.addEventListener('click', function(e){
                let count;
            
                if(isTwoNumberFind == false) {
                    
                    dateNumberFirst.value = e.composedPath().values().next().value.innerHTML;
                    isTwoNumberFind = true;
                }
                else if(isTwoNumberFind == true) {
                    
                    dateNumberSecond.value = e.composedPath().values().next().value.innerHTML;
                    console.log(firstDayIndex);
                    if(firstDayIndex == 0){
                        console.log("==0")
                        count = 5;
                    }
                    if(firstDayIndex == 1){
                       console.log("==1")
                        count = firstDayIndex - 1;
                        console.log(count);
                    }
                    if(firstDayIndex > 1) {
                        console.log(">1")
                        
                        count = firstDayIndex - 2;
                    }
                    
                        for(count < getItem.length - nextDays - firstDayIndex; count++;){
                            console.log("dsada");
                           if(dateNumberFirst.value == getItem[count].innerHTML){
                               dateNumberFirst.index = count;
                               
                               for(j = count; j < getItem.length - nextDays; j++){
                                   
                                    if(dateNumberSecond.value == getItem[j].innerHTML){
                                        dateNumberSecond.index = j;
                                        j = getItem.length;
                                        count = j;

                                }
                           }
                           isTwoNumberFind = false;
                           count = 0;       
                }
            }
        }
            
        setClassFocus(dateNumberFirst.index, dateNumberSecond.index, getItem);
            })

        }
            
    } else {
        console.log("Работает");
    }
}


function setClassFocus(firstIndex, secondIndex, getItem){
    
    if(firstIndex > 0) {
        getItem[firstIndex].setAttribute("class", "calednar__days-item calednar__days-item_focus-left");
        getItem[secondIndex].setAttribute("class", "calednar__days-item calednar__days-item_focus-right");
        for(i = firstIndex + 1; i < secondIndex; i++){
            getItem[i].setAttribute("class", "calednar__days-item calednar__days-item_light");
        }
    }
    
    
}
function sendDate(type, getBlock) {
    let result;
    getCalendarButtonSend.addEventListener('click', function(){
        if(type == typeCalendar) {
            result = massiveDays[date.getMonth()];
            getCalendarFilterText.innerHTML = dateNumberFirst.value + " " + result.substring(0, 3) + " - " + dateNumberSecond.value + " " + result.substring(0, 3);
            getBlock.style.display = 'none';

            renderCalendar();
            dateNumberFirst.value = 0;
            dateNumberFirst.index = 0;
            dateNumberSecond.value = 0;
            dateNumberSecond.index = 0;
            renderNumberDays(typeCalendar);
            
            
            
        }else {
    
        }
    })
    
}

function getArrow() {
    getRightArrow.addEventListener('click', function(){
        date.setMonth(date.getMonth() + 1)
        renderCalendar();
        dateNumberFirst.value = 0;
        dateNumberFirst.index = 0;
        dateNumberSecond.value = 0;
        dateNumberSecond.index = 0;
        renderNumberDays(typeCalendar);
        sendDate(typeCalendar, getCalendarBlock);
    })
    getLeftArrow.addEventListener('click', function(){
        date.setMonth(date.getMonth() - 1)
        renderCalendar();
        dateNumberFirst.value = 0;
        dateNumberFirst.index = 0;
        dateNumberSecond.value = 0;
        dateNumberSecond.index = 0;
        renderNumberDays(typeCalendar);
        sendDate(typeCalendar, getCalendarBlock);
    })
}


function clickDropDown(getInput, getBlock) {
    
    getInput.addEventListener('click', first);
    typeCalendar = "FilterCalendar";
    renderCalendar();
    renderNumberDays(typeCalendar);
    deleteNumberDays();
    getArrow();
    sendDate(typeCalendar, getCalendarBlock);

    function first(e) {
    
        e.stopImmediatePropagation();
        this.removeEventListener("click", first);
        getInput.onclick = second;
        getBlock.style.display = 'block';
    }
    function second() {
        getBlock.style.display = 'none';
        getInput.onclick = first;
    
    }   
}


    clickDropDown(getCalendarFilterDate, getCalendarBlock);



   

    