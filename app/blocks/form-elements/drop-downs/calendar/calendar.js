

let getDaysBlock = document.querySelector('.calednar__days');

let getRightArrow = document.querySelector('.calendar__arrow-right');
let getLeftArrow = document.querySelector('.calendar__arrow-left');
let getCalendarTitle = document.querySelector('.calendar__heading');

let getCalendarBlockFooter = document.querySelector('.calendar__footer');
let getCalendarBlock = document.querySelector('.calendar');
let getCalendarInput = document.querySelector('#calendar__drop-downs');
let getCalendarButtonSend = document.querySelector('.calendar__buttons-item-send');


let isTwoNumberFind = false;

let dateNumberFirst = {
    value: 0,
    index : 0
}
let dateNumberSecond = {
    value: 0,
    index : 0
}


const date = new Date();

const renderCalendar = ()=>{

    date.setDate(1);

const month = date.getMonth();

const Year = date.getFullYear();

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1,0).getDate(); // Возрващаем количество дней текущего месяца

const firstDayIndex = date.getDay();


const prevLastDay = new Date(date.getFullYear(), date.getMonth() ,0).getDate(); // Возрвашает последнее число предыдущего месяца

const lastMonthDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(); // Возвращаем день недели, с которого начинается  следующий месяц

const nextDays = 7 - lastMonthDayIndex; 

let banAdding = 0;

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
    const getDeleteBtn = document.querySelector('#calendar-delete');

    getDeleteBtn.addEventListener('click', function(){
        renderCalendar();
        dateNumberFirst.value = 0;
        dateNumberFirst.index = 0;
        dateNumberSecond.value = 0;
        dateNumberSecond.index = 0;
        renderNumberDays();
    })
}
function renderNumberDays(){ // Функция для поиска двух чисел, которые не повторяются. 
    console.log(dateNumberSecond, dateNumberFirst);
    let getItem = document.querySelectorAll('.calednar__days-item');
    let result;
    for(i = 0; i < getItem.length; i++){
        result = getItem[i];
       
        result.addEventListener('click', function(e){
            if(isTwoNumberFind == false) {
                dateNumberFirst.value = e.composedPath().values().next().value.innerHTML;
                isTwoNumberFind = true;
                
                
            }
            else if(isTwoNumberFind == true) {

                dateNumberSecond.value = e.composedPath().values().next().value.innerHTML;
                

                    for(i = 0; i < getItem.length; i++){
                        if(dateNumberFirst.value == getItem[i].innerHTML){
                            
                            dateNumberFirst.index = i;
                            for(j = i; j < getItem.length; j++){
                                if(dateNumberSecond.value == getItem[j].innerHTML ) {
                                    
                                    dateNumberSecond.index = j;
                                    j = getItem.length;
                                    i = j;
                            }

                        }
                    }
                }

                isTwoNumberFind = false;
                
            }
            
            setClassFocus(dateNumberFirst.index, dateNumberSecond.index, getItem);
            
        })
        
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


function clickDropDown(getInput, getBlock) {

    getInput.addEventListener('click', first);


    function first(e) {
    
        e.stopImmediatePropagation();
        this.removeEventListener("click", first);
        console.log(second);
        getInput.onclick = second;
        getBlock.style.display = 'block';
    }
    function second() {
        console.log(first);
        getBlock.style.display = 'none';
        getInput.onclick = first;
    
    }   
}


    getRightArrow.addEventListener('click', function(){
        date.setMonth(date.getMonth() + 1)
        renderCalendar();
        renderNumberDays();
    })
    getLeftArrow.addEventListener('click', function(){
        date.setMonth(date.getMonth() - 1)
        renderCalendar();
        renderNumberDays();
    })

    renderCalendar();

    clickDropDown(getCalendarInput, getCalendarBlock);

    renderNumberDays();

    deleteNumberDays();

    