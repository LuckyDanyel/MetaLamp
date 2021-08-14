
import '../../scss/main.scss';
import './index.pug';

import '../../blocks/form-elements/drop-downs/__general/drop-downs__general.js';
import '../../blocks/form-elements/drop-downs/calendar/calendar.js';


let getForm = document.querySelector('.find-rooms__form');
let getFromBtn = getForm.btnSign;

$(getFromBtn).click(function(){
      window.location.href = 'second-page.html';
})
