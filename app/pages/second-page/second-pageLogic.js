
let getAllRooms = document.querySelectorAll('.room');
let getAllRoom = document.querySelectorAll('.room__box');
let getNumber = document.querySelectorAll('.room__info-item-left');

let sendNumberRoom = 0;
let isLux = 0;
let priceRoom = 0;

for(let i = 0; i < getAllRoom.length; i++){
      let addEventRoom = getAllRoom[i];

      $(addEventRoom).click(findRoom.bind(this, i))
}

function findRoom(numberRoom) {
      if(getAllRooms[numberRoom].children[2].children[0].children[0].children[2] == undefined){
            isLux = 0;
      }else {
            isLux = 1;
      }
      priceRoom = getAllRooms[numberRoom].children[2].children[0].children[1].children[0].innerHTML
      sendNumberRoom = getAllRooms[numberRoom].children[2].children[0].children[0].children[1].innerHTML;
      window.location = 'specific.html?' + sendNumberRoom + "?" + isLux + "?" + priceRoom.split(" ")[0] + priceRoom.split(" ")[1]; 
      console.log(priceRoom.split(" ")[0] + priceRoom.split(" ")[1] );
}
