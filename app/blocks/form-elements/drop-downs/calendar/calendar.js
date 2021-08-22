
const date = new Date();
const massiveMonth = ["Январь", "Ферваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];


function init() { // Если на странице будет несколько календарей, то изменять данные придется только в функции init()

    // ----------------------------- Первый тип календаря -------------------------- //

    let getCalendarClick = document.querySelector('.calendar-date-one'); // Блок на который пользователь нажимет для открытия календаря
    let getCalendarShowBlock = document.querySelector('.calendar-one'); // Блок который показывается
    let getDaysBlockOne = document.querySelector('.calednar__days-one'); // Блок в который записываются дни
    let getRightArrowOne = document.querySelector('.calendar__arrow-right-one'); // Стрелка для переключения следующего месяца
    let getLeftArrowOne = document.querySelector('.calendar__arrow-left-one'); // Стрелка для переключения предыдущего месяца
    let getCalendarTitleOne = document.querySelector('.calendar__heading-one'); // Заголовок месяца в календаре
    let getCalendarDeleteOne = document.querySelector('#calendar-delete-one'); // Кнопка очистки календаря
    let getCalendarButtonSendOne = document.querySelector('.calendar__buttons-item-send-one'); // Кнопка подтверждения
    let getCalendarOneTextSecond = document.querySelector('#calendar__text-one-second'); // Текстовое поле заезда
    let getCalendarOneText = document.querySelector('#calendar__text-one'); // Текстовое поле выезда

                                                                                                                                                        // цифра 1 означает тип календаря, отличается только способом вывода
    $(getCalendarClick).click(controllerCalendar.DropCalendar.bind(this, getCalendarShowBlock, getDaysBlockOne, getCalendarTitleOne, getCalendarOneText, getCalendarOneTextSecond, 1)); // Кнопка дропа календаря
    $(getRightArrowOne).click(controllerCalendar.NexMonth.bind(this, getDaysBlockOne, getCalendarTitleOne, getCalendarOneText, getCalendarOneTextSecond, 1)); // Кнопка следующешо месяца
    $(getLeftArrowOne).click(controllerCalendar.PrevMonth.bind(this, getDaysBlockOne, getCalendarTitleOne, getCalendarOneText, getCalendarOneTextSecond, 1)); // Кнопка предыдущего месяца
    $(getCalendarDeleteOne).click(controllerCalendar.Clean.bind(this, getDaysBlockOne, getCalendarTitleOne, getCalendarOneText, getCalendarOneTextSecond, 1)); // Кнопка удаленя 
    $(getCalendarButtonSendOne).click(controllerCalendar.SendArrivalExit.bind(this, getCalendarShowBlock));

    // ----------------------------- Второй тип календаря ------------------------- //
    let getCalendarShowBlockFilter = document.querySelector('.calendar-filter');
    let getCalendarButtonSendFilter = document.querySelector('.calendar__buttons-item-send-filter');
    let getCalendarFilterDelete = document.querySelector('#calendar-delete-filter');
    let getDaysBlockFilter = document.querySelector('.calednar__days-filter');
    let getRightArrowFilter = document.querySelector('.calendar__arrow-right-filter');
    let getLeftArrowFilter = document.querySelector('.calendar__arrow-left-filter');
    let getCalendarTitleFilter = document.querySelector('.calendar__heading-filter');
    let getCalendarBlockFooter = document.querySelector('.calendar__footer-filter');
    let getCalendarClickFilter = document.querySelector('#calendar-filter-date');
    let getCalendarFilterText = document.querySelector('#calendar-filter-text');
    
    $(getCalendarClickFilter).click(controllerCalendar.DropCalendar.bind(this, getCalendarShowBlockFilter, getDaysBlockFilter, getCalendarTitleFilter, getCalendarFilterText, null, 2)); // null передается потому у второго календаря только одно текстовое поле
    $(getRightArrowFilter).click(controllerCalendar.NexMonth.bind(this, getDaysBlockFilter, getCalendarTitleFilter, getCalendarFilterText, null, 2)); 
    $(getLeftArrowFilter).click(controllerCalendar.PrevMonth.bind(this, getDaysBlockFilter, getCalendarTitleFilter, getCalendarFilterText, null, 2)); 
    $(getCalendarFilterDelete).click(controllerCalendar.Clean.bind(this, getDaysBlockFilter, getCalendarTitleFilter, getCalendarFilterText, null, 2));
    $(getCalendarButtonSendFilter).click(controllerCalendar.SendArrivalExit.bind(this, getCalendarShowBlockFilter));

}

let viewCalendar = { // ---------------------- VIEW ---------------------------------------
    getAllItems: " ",

    displayMain: function(item, getDaysBlockOne){
        this.getAllItems += item;
        getDaysBlockOne.innerHTML = this.getAllItems;
        
    },
    displayTitle: function(headingMonthCalendar, item) {
        headingMonthCalendar.innerHTML = item + " " + date.getFullYear();
    },
    showCalendar: function(block) {
        $(block).show();
    },
    hideCalendar: function(block) {
        $(block).hide();
    },
    displayArrivalExit: function(arrivalNumber, exitNumber, allDaysItem, firstDays, firstTextInput, secondTextInput, typeCalendar) {
            if(exitNumber - arrivalNumber < 0) {
                let changeNumber = exitNumber;
                exitNumber = arrivalNumber;
                arrivalNumber = changeNumber;
            }
                allDaysItem[arrivalNumber + firstDays - 2].setAttribute('class', 'calednar__days-item calednar__days-item_focus-left');
                allDaysItem[exitNumber + firstDays - 2].setAttribute('class', 'calednar__days-item calednar__days-item_focus-right');
                
            for(i = arrivalNumber + firstDays - 1; i < exitNumber + firstDays - 2; i++) {
                    allDaysItem[i].setAttribute('class', 'calednar__days-item calednar__days-item_light');
            }
            this.displayTextArrivalExit(firstTextInput, secondTextInput, arrivalNumber, exitNumber, typeCalendar);
    },
    displayTextArrivalExit: function(FirstBlockText, SecondBlockText, arrivalNumber, exitNumber, typeCalendar) {
        if(typeCalendar === 1) {
            let nullingMonth = (date.getMonth() < 9) ? "0" : "";
            let nullingDayArrival = (arrivalNumber < 9) ? "0" : "";
            let nullingDayExit = (exitNumber < 9) ? "0" : "";
            FirstBlockText.innerHTML = nullingDayArrival + arrivalNumber + "." + nullingMonth + (date.getMonth() + 1) + "." + date.getFullYear();
            SecondBlockText.innerHTML = nullingDayExit + exitNumber + "." + nullingMonth + (date.getMonth() + 1) + "." + date.getFullYear();
        } else if(typeCalendar === 2) {
            FirstBlockText.innerHTML = arrivalNumber + " " + massiveMonth[date.getMonth()].substr(0, 3) + " - " + exitNumber + " " + massiveMonth[date.getMonth()].substr(0, 3);
        }
        
    }
} // ---------------------- END VIEW ---------------------------------------

let modelCalendar = { // ---------------------- MODEL ---------------------------------------
    renderCalendar: function(writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar){
 
        const DaysNowMonth = new Date(date.getFullYear(), date.getMonth() + 1,0).getDate(); // Возрващаем количество дней текущего месяца
        const WeekDayNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(); // Возвращает день недели, с которого начинается следующий месяц
        let nextDays = 7 - WeekDayNextMonth; // Количество дней до конца недели
        let firstDayIndex = (date.getDay() == 0) ? 7 : date.getDay(); //Вс начинается с нуля // День недели с которого начинается текущий месяц 
               
                viewCalendar.displayTitle(headingMonthCalendar, massiveMonth[date.getMonth()]); // Отрисовываем заголовок календаря
                this.renderMainCaledar(firstDayIndex - 1, writeBlock, this.startDaysMonth); // Рендерим последние дни прошлого месяца и отрисовывваем их
                this.renderMainCaledar(DaysNowMonth, writeBlock, this.nowDaysMonth); // рендерим дни текущего месяца и отрисовываем их
                this.renderMainCaledar(nextDays, writeBlock, this.nextDaysMonth); // рендерим дни следующего месяца и отрисовываем их
                viewCalendar.getAllItems = " "; // В представлении обнуляем глобальную переменную
                this.renderEventDays(firstDayIndex, nextDays, '.calednar__days-item', writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar); // Рендерим два числа при 
        
    },
    renderMainCaledar(index, blockWrite, callback) {
        let days = " ";
        for(i = 1; i <= index; i++) {;
            days += callback(i, index);
        }
        viewCalendar.displayMain(days, blockWrite);
       
    },
    startDaysMonth(i, index) {
        const DayLastMonth = new Date(date.getFullYear(), date.getMonth() ,0).getDate(); // Возрвашает последнее число предыдущего месяца
        return  '<div class = "calednar__days-item calendar__prev-item">' + (DayLastMonth - index + i) + '</div>';
    },
    nowDaysMonth(i) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) { // Сегодняшний день // Если i = текущему дню и установленный месяц = текущему месяцу
            return '<div class = "calednar__days-item calendar__days-today">' + i + '</div>';
                        
        } else {
             return '<div class = "calednar__days-item">' + i + '</div>'; // Заполняем дни текущего месяца
                        
        }
    },
    nextDaysMonth(i) {
        return '<div class = "calednar__days-item calendar__prev-item">' + i + '</div>'; // Заполняем дни следующего месяца
    },

    renderEventDays: function(firstDays, nextDays, NameItem, writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar) { // Устанавливаем события на дни текущего месяца
            let calendarDaysItem = writeBlock.querySelectorAll(NameItem);

            for(i = firstDays - 1; i < calendarDaysItem.length - nextDays; i++) {
                $(calendarDaysItem[i]).click(this.takeTwoNumber.bind(this, i + 1, calendarDaysItem, firstDays, writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar)); 
            }
    },
    takeFirstDate: true,
    firstNumber: 0,
    secondNumber: 0,
    takeTwoNumber: function(item, allDaysItem, firstDays, writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar) { // Определяем два числа на которые нажал пользователь
            
            if(this.takeFirstDate == true) {
                
                console.log("Первая функция");
                this.firstNumber = item - firstDays + 1;
                this.takeFirstDate = false;
                console.log(this.firstNumber + firstDays);
                allDaysItem[this.firstNumber + firstDays - 2].setAttribute('class', 'calednar__days-item calednar__days-item_focus');
                
            } else {
                console.log("Вторая функция");
                 // Нужно для того, чтобы при повторном нажатии рендерился календарь снова
                this.secondNumber = item - firstDays + 1;
                viewCalendar.displayArrivalExit(this.firstNumber, this.secondNumber, allDaysItem, firstDays, firstTextInput, secondTextInput, typeCalendar); // Отображаем для пользователя промежуток этих чисел
                this.takeFirstDate = true;
                this.firstNumber = 0;
                this.secondNumber = 0;
            }
            
           
    }
}// ---------------------- END MODEL ---------------------------------------

let controllerCalendar = { // ---------------------- CONTROLER ---------------------------------------
    firstClick: true,
    DropCalendar: function(blockShow, blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar){ 

        if(this.firstClick == false){
            viewCalendar.hideCalendar(blockShow);
            this.firstClick = true;

        } else {
            modelCalendar.renderCalendar(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar);
            viewCalendar.showCalendar(blockShow);
            this.firstClick = false;
        }
    },
    NexMonth: function(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar) {
            date.setMonth(date.getMonth() + 1);
            modelCalendar.renderCalendar(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar);
    },
    PrevMonth: function(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar) {
            date.setMonth(date.getMonth() - 1);
            modelCalendar.renderCalendar(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar);
    },
    Clean: function(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar) {
            modelCalendar.renderCalendar(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar);
    },
    SendArrivalExit: function(blockShow) {
            viewCalendar.hideCalendar(blockShow);
            this.firstClick = true;
    }
} // ---------------------- END CONTROLER ---------------------------------------

init();


    


    



   

    