
const date = new Date();
const massiveDays = ["Январь","Ферваль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];


function init() { // Если на странице будет несколько календарей, то изменять данные придется только в функции init()

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
}

let viewCalendar = { // ---------------------- VIEW ---------------------------------------
    displayMain: function(item, getDaysBlockOne){
        getDaysBlockOne.innerHTML = item;
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
            console.log("Дарова")
        }
        
    }
} // ---------------------- END VIEW ---------------------------------------

let modelCalendar = { // ---------------------- MODEL ---------------------------------------
    renderCalendar: function(writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar){
        date.setDate(1);
        const DaysNowMonth = new Date(date.getFullYear(), date.getMonth() + 1,0).getDate(); // Возрващаем количество дней текущего месяца
        const DayLastMonth = new Date(date.getFullYear(), date.getMonth() ,0).getDate(); // Возрвашает последнее число предыдущего месяца
        const WeekDayNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(); // Возвращает день недели, с которого начинается следующий месяц
    
        let nextDays = 7 - WeekDayNextMonth; // Количество дней до конца недели
        let firstDayIndex = (date.getDay() == 0) ? 7 : date.getDay(); //Вс начинается с нуля // День недели с которого начинается текущий месяц 
        let days = " ";
               
                viewCalendar.displayTitle(headingMonthCalendar, massiveDays[date.getMonth()]);

                for(i = 1; i < firstDayIndex; i++) {
                    days += '<div class = "calednar__days-item calendar__prev-item">' + Number(DayLastMonth - firstDayIndex + i + 1) + '</div>'; // Заполняем дни предыдущего месяца
                    viewCalendar.displayMain(days, writeBlock);
                }
                for(i = 1; i <= DaysNowMonth; i++){
                        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) { // Сегодняшний день // Если i = текущему дню и установленный месяц = текущему месяцу
                            days += '<div class = "calednar__days-item calendar__days-today">' + i + '</div>';
                            viewCalendar.displayMain(days, writeBlock);
                        } else {
                            days += '<div class = "calednar__days-item">' + i + '</div>'; // Заполняем дни текущего месяца
                            viewCalendar.displayMain(days, writeBlock);
                        }
                }
                for(i = 1; i <= nextDays; i++) {
                    days += '<div class = "calednar__days-item calendar__prev-item">' + i + '</div>'; // Заполняем дни следующего месяца
                    viewCalendar.displayMain(days, writeBlock);
                }
                this.renderEventDays(firstDayIndex, nextDays, '.calednar__days-item', writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar);
        
    },
    renderEventDays: function(firstDays, nextDays, NameItem, writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar) { // Устанавливаем события на дни текущего месяца
            let calendarDaysItem = document.querySelectorAll(NameItem);

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
                this.renderCalendar(writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar); // Нужно для того, чтобы при повтором первом нажатии календарь снова ренерился
                
            } else {
                console.log("Вторая функция");
                this.secondNumber = item - firstDays + 1;
                this.takeFirstDate = true;
                viewCalendar.displayArrivalExit(this.firstNumber, this.secondNumber, allDaysItem, firstDays, firstTextInput, secondTextInput, typeCalendar); // Отображаем для пользователя промежуток этих чисел
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


    


    



   

    