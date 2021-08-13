let numberRooms = 0;

let getRoom = document.querySelectorAll('.room')[numberRooms];
let getRoomSliderItem = getRoom.querySelectorAll('.room__slider-item');
let getRoomSliderArrow = getRoom.querySelectorAll('.room__arrow-item');
let getRoomSliderCircle = getRoom.querySelectorAll('.room__circle-item');

let numberImagePlus = 1;



function imageChangeRight() {

      console.log(numberImagePlus);
      if(numberImagePlus == 0) {

            $(getRoomSliderItem[3]).css('order', 4);
            $(getRoomSliderItem[2]).css('order', 3);
            $(getRoomSliderItem[1]).css('order', 2);
            $(getRoomSliderItem[0]).css('order', 1);

            getRoomSliderCircle[0].setAttribute("class","room__circle-item room__circle-active");
            getRoomSliderCircle[1].setAttribute("class","room__circle-item");
            getRoomSliderCircle[2].setAttribute("class","room__circle-item");
            getRoomSliderCircle[3].setAttribute("class","room__circle-item");
           
      }
      if(numberImagePlus == 1) {
            $(getRoomSliderItem[3]).css('order', 4);
            $(getRoomSliderItem[2]).css('order', 3);
            $(getRoomSliderItem[1]).css('order', 1);
            $(getRoomSliderItem[0]).css('order', 2);

            getRoomSliderCircle[1].setAttribute("class","room__circle-item room__circle-active");
            getRoomSliderCircle[0].setAttribute("class","room__circle-item");
            getRoomSliderCircle[2].setAttribute("class","room__circle-item");
            getRoomSliderCircle[3].setAttribute("class","room__circle-item");

      }

      if(numberImagePlus == 2) {
            $(getRoomSliderItem[3]).css('order', 4);
            $(getRoomSliderItem[2]).css('order', 1);
            $(getRoomSliderItem[1]).css('order', 2);
            $(getRoomSliderItem[0]).css('order', 3);

            getRoomSliderCircle[2].setAttribute("class","room__circle-item room__circle-active");
            getRoomSliderCircle[0].setAttribute("class","room__circle-item");
            getRoomSliderCircle[1].setAttribute("class","room__circle-item");
            getRoomSliderCircle[3].setAttribute("class","room__circle-item");


      }

      if(numberImagePlus == 3) {
            $(getRoomSliderItem[3]).css('order', 1);
            $(getRoomSliderItem[2]).css('order', 2);
            $(getRoomSliderItem[1]).css('order', 3);
            $(getRoomSliderItem[0]).css('order', 4);

            getRoomSliderCircle[3].setAttribute("class","room__circle-item room__circle-active");
            getRoomSliderCircle[2].setAttribute("class","room__circle-item");
            getRoomSliderCircle[1].setAttribute("class","room__circle-item");
            getRoomSliderCircle[0].setAttribute("class","room__circle-item");


            numberImagePlus = 0;
            return 0;
      }
      numberImagePlus++;      
      
}
$(getRoomSliderArrow[1]).click(imageChangeRight.bind(this)) // правая стрелка

function circleChagneImage(item){
      if(item == 0) {

            $(getRoomSliderItem[3]).css('order', 4);
            $(getRoomSliderItem[2]).css('order', 3);
            $(getRoomSliderItem[1]).css('order', 2);
            $(getRoomSliderItem[0]).css('order', 1);

            getRoomSliderCircle[0].setAttribute("class","room__circle-item room__circle-active");
            getRoomSliderCircle[1].setAttribute("class","room__circle-item");
            getRoomSliderCircle[2].setAttribute("class","room__circle-item");
            getRoomSliderCircle[3].setAttribute("class","room__circle-item");

            numberImagePlus = 1;

           
      }
      if(item == 1) {
            $(getRoomSliderItem[3]).css('order', 4);
            $(getRoomSliderItem[2]).css('order', 3);
            $(getRoomSliderItem[1]).css('order', 1);
            $(getRoomSliderItem[0]).css('order', 2);

            getRoomSliderCircle[1].setAttribute("class","room__circle-item room__circle-active");
            getRoomSliderCircle[0].setAttribute("class","room__circle-item");
            getRoomSliderCircle[2].setAttribute("class","room__circle-item");
            getRoomSliderCircle[3].setAttribute("class","room__circle-item");

            numberImagePlus = 2;
      }

      if(item == 2) {
            $(getRoomSliderItem[3]).css('order', 4);
            $(getRoomSliderItem[2]).css('order', 1);
            $(getRoomSliderItem[1]).css('order', 2);
            $(getRoomSliderItem[0]).css('order', 3);

            getRoomSliderCircle[2].setAttribute("class","room__circle-item room__circle-active");
            getRoomSliderCircle[0].setAttribute("class","room__circle-item");
            getRoomSliderCircle[1].setAttribute("class","room__circle-item");
            getRoomSliderCircle[3].setAttribute("class","room__circle-item");

            numberImagePlus = 3;

      }

      if(item == 3) {
            $(getRoomSliderItem[3]).css('order', 1);
            $(getRoomSliderItem[2]).css('order', 2);
            $(getRoomSliderItem[1]).css('order', 3);
            $(getRoomSliderItem[0]).css('order', 4);

            getRoomSliderCircle[3].setAttribute("class","room__circle-item room__circle-active");
            getRoomSliderCircle[2].setAttribute("class","room__circle-item");
            getRoomSliderCircle[1].setAttribute("class","room__circle-item");
            getRoomSliderCircle[0].setAttribute("class","room__circle-item");

            numberImagePlus = 0;
            return 0;
      }     
}

for(i = 0; i < getRoomSliderCircle.length; i++){
      let circleItem = getRoomSliderCircle[i];

      $(circleItem).click(circleChagneImage.bind(this, i));

}




