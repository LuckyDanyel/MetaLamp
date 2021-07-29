

let getDaysBlock = document.querySelector('.calednar__days');
let getButton = document.querySelector('.test_button');

let getRightArrow = document.querySelector('.calendar__arrow-right');
let getLeftArrow = document.querySelector('.calendar__arrow-left');
let getCalendarTitle = document.querySelector('.calendar__heading');


const date = new Date();

date.setDate(1);

const month = date.getMonth();

const Year = date.getFullYear();

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1,0).getDate(); // Возрващаем количество дней текущего месяца

const firstDayIndex = date.getDay();

const prevLastDay = new Date(date.getFullYear(), date.getMonth() ,0).getDate(); // Возрвашаем последнее число текущего месяца

console.log(prevLastDay);



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
for(x = firstDayIndex; x > 0; x--){ // Функция, которая записывает числа с предыдущего месяца в начало календаря
                                    //firstDayIndex Возрващает день недели с которого начинается месяц
                                    //prevLastDay Возращает последнее число месяца
    let prevLast = prevLastDay - x + 1; //Далее в переменную prevLast помещаем разницу последенего месяца и день недели
    days += '<div class = "calednar__days-item calendar__prev-item">' + prevLast + '</div>'
    getDaysBlock.innerHTML = days; //Записываем в начало календаря числа с предыдущего месяца
}
for(i = 1; i <= lastDay; i++){
    days += '<div class = "calednar__days-item">' + i + '</div>';
    getDaysBlock.innerHTML = days;

}




