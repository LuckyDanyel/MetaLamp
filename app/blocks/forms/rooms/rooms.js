let getFormRooms = document.querySelector('.rooms__form');

let getBtnFormRooms = getFormRooms.btnSign;


getBtnFormRooms.addEventListener('click', function(){
      console.log(window);
     window.name = 2;
     console.log(window);
})