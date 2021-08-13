

let getFormRooms = document.querySelector('.find-rooms__form');

let getBtnFormRooms = getFormRooms.btnSign;

import {renderCalendarItems} from '../../form-elements/drop-downs/calendar/calendar';

import {updateGuest} from '../../form-elements/drop-downs/__general/drop-downs__general';

getBtnFormRooms.addEventListener('click', function(){
      
      updateGuest(1);
      renderCalendarItems(1);
    
})
