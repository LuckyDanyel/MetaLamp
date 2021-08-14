let sliceStrokeUrl = window.location.href.split("?");
let rightNumber = sliceStrokeUrl[1];
let isLux = sliceStrokeUrl[2]
let priceRoom = sliceStrokeUrl[3].substring(0, 4);
console.log(priceRoom);

let numberOnPage = document.querySelectorAll('.appart__header-left-item')[1];
let pricePerDays = document.querySelectorAll('.appart__header-right-item')[0];
console.log(pricePerDays);

numberOnPage.innerHTML = rightNumber;
pricePerDays.innerHTML = priceRoom[0] + " " + priceRoom.substring(1, priceRoom.length) + "₽";
