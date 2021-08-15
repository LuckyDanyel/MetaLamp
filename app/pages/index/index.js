
import '../../scss/main.scss';
import './index.pug';

import '../../blocks/header/header.js';
import '../../blocks/form-elements/drop-downs/__general/drop-downs__general.js';
import '../../blocks/form-elements/drop-downs/calendar/calendar.js';


let getForm = document.querySelector('.find-rooms__form');
let getFromBtn = getForm.btnSign;

$(getFromBtn).click(function(){
      let getTextInputCalendar = document.querySelector('#calendar__text-one').innerHTML;
      let getTextInputCalendarSecond = document.querySelector('#calendar__text-one-second').innerHTML;;
      let getTextInputGuest = document.querySelector('.drop-downs__guest-text').innerHTML;

      let url = "second-page.html" + "?" + getTextInputCalendar.substring(0, 5) + "?" + getTextInputCalendarSecond.substring(0, 5) + "?" + getTextInputGuest;
      window.location = url;
})

