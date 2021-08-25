
// import '../../scss/main.scss';
import './index.scss';
import './index.pug';

import '../../blocks/header/header.js';
import '../../blocks/form-elements/drop-downs/__general/drop-downs__count.js';
import '../../blocks/form-elements/drop-downs/calendar/calendar.js';


let getForm = document.querySelector('.find-rooms__form');
let getFromBtn = getForm.btnSign;

 $(getFromBtn).click(function(){ // Отрпавка информации через Location
      let getCaledarText = document.querySelector('#calendar__text-one').innerHTML;
      if(isNaN(Number(getCaledarText.substring(0, 2))) == false) {
           

            let url = "second-page.html";
             window.location = url;  
      } else {
            window.alert("Введите дату");
            console.log("Введите Дату!");
      }
      
 })

