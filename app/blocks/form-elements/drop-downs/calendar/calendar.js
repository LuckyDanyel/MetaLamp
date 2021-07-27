

let getDay = document.querySelectorAll('.calednar__days-item');
let massiveDay = [
      [ ],
];

for(i = 0; i < getDay.length; i++) {
      for(j = 0; j < 7; j++) {
            massiveDay = getDay[ j , i ].innerHTML;
      }
}
console.log(massiveDay[1][1]);