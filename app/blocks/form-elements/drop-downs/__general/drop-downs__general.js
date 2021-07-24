
// -------------------- Rooms ------------------- //

var scoreMinusBedrooms = document.querySelector('#drop-downs__score-minus-Bedrooms');
var ValueBedrooms = document.querySelector('#drop-downs__score-value-Bedrooms');
var scorePlusBedrooms = document.querySelector('#drop-downs__score-plus-Bedrooms');
var headingBedrooms = document.querySelector('.drop-downs__h3-Bedrooms').innerHTML;
var countBedrooms = 0;

var scoreMinusBeds = document.querySelector('#drop-downs__score-minus-Beds');
var ValueBeds = document.querySelector('#drop-downs__score-value-Beds');
var scorePlusBeds = document.querySelector('#drop-downs__score-plus-Beds');
var headingBeds = document.querySelector('.drop-downs__h3-Beds').innerHTML;
var countBeds = 0;


var scoreMinusBathrooms = document.querySelector('#drop-downs__score-minus-Bathrooms');
var ValueBathrooms = document.querySelector('#drop-downs__score-value-Bathrooms');
var scorePlusBathrooms = document.querySelector('#drop-downs__score-plus-Bathrooms');
var headingBathrooms = document.querySelector('.drop-downs__h3-Bathrooms').innerHTML;
var countBathrooms = 0;

var sliceHeadingBathrooms = headingBathrooms.substring(0, headingBathrooms.indexOf(' '));

var RoomsMassive = [0, headingBedrooms, 0, headingBeds, 0 , sliceHeadingBathrooms]; // Массив для перезаписи строки в DropBox

let getDropTextRooms = document.querySelector('.drop-downs__general-text')
let getDropInputRooms = document.getElementById("drop-downs__input-general")
let getDropBlockRooms = document.querySelector('.drop-downs__block-general');

// -------------------- Rooms ------------------- //

// -------------------- Guests ------------------ //

var scoreMinusAdults = document.querySelector('#drop-downs__score-minus-Adults');
var ValueAdults = document.querySelector('#drop-downs__score-value-Adults');
var scorePlusAdults = document.querySelector('#drop-downs__score-plus-Adults');
var headingAdults = document.querySelector('.drop-downs__h3-Adults').innerHTML;
var countAdults = 0;

var scoreMinusChild = document.querySelector('#drop-downs__score-minus-Child');
var ValueChild = document.querySelector('#drop-downs__score-value-Child');
var scorePlusChild = document.querySelector('#drop-downs__score-plus-Child');
var headingChild = document.querySelector('.drop-downs__h3-Child').innerHTML;
var countChild = 0;

var scoreMinusBaby = document.querySelector('#drop-downs__score-minus-Baby');
var ValueBaby = document.querySelector('#drop-downs__score-value-Baby');
var scorePlusBaby = document.querySelector('#drop-downs__score-plus-Baby');
var headingBaby = document.querySelector('.drop-downs__h3-Baby').innerHTML;
var countBaby = 0;


var countAllGuest = 0;
let getDropInputGuest = document.getElementById("drop-downs__input-guest");
let getDropBlockGuest = document.querySelector('.drop-downs__block-guest');
let getDropTextGuest = document.querySelector('.drop-downs__guest-text');

// -------------------- Guests ------------------ //





function clickDropDown(getInput, getBlock) {

    getInput.addEventListener('click', first);


    function first(e) {
    
        e.stopImmediatePropagation();
        this.removeEventListener("click", first);
        getInput.onclick = second;
        getBlock.style.display = 'flex';
    }
    function second() {
        getBlock.style.display = 'none';
        getInput.onclick = first;
    
    }   
}
function countDropBox(scorePlus, scoreMinus, massive, heading , count , value) {
        
        scorePlus.addEventListener('click', function(){
           if(count < 9 ) {
                for(i = 1; i < massive.length; i+=2){

                    if(massive[i] == heading){
                        count++;
                        massive[i - 1] = count;
                        value.innerHTML = count;
                        getDropTextRooms.innerHTML = massive.join(" ");
                        getDropTextRooms.innerHTML = getDropTextRooms.innerHTML.substring(0, getDropTextRooms.innerHTML.indexOf("Ванные") - 3);
                        getDropTextRooms.innerHTML = getDropTextRooms.innerHTML + ".....";
                         
                    }
                }
            }
        });
        scoreMinus.addEventListener('click', function(){
            if(count > 0) {
                for(i = 1; i < massive.length; i+=2){
                    if(massive[i] == heading){
                        count--;
                        massive[i - 1] = count;
                        value.innerHTML = count;
                        getDropTextRooms.innerHTML = massive.join(" ");
                        getDropTextRooms.innerHTML = getDropTextRooms.innerHTML.substring(0, getDropTextRooms.innerHTML.indexOf("Ванные") - 3);
                        getDropTextRooms.innerHTML = getDropTextRooms.innerHTML + ".....";
                    }
                }
            }
        });
    }

function countGuest(scorePlus, scoreMinus, count, value) {
    
    scorePlus.addEventListener('click', function(){
    if(countAllGuest < 100){
        count++;
        value.innerHTML = count;
        countAllGuest++;
            if(countAllGuest == 1 || countAllGuest == 21 || countAllGuest == 31 || countAllGuest == 41 ) {
                getDropTextGuest.innerHTML = countAllGuest + " Гость";
            }
            else if(countAllGuest <= 4 || countAllGuest <= 24 || countAllGuest <= 34 || countAllGuest <= 44) {
                getDropTextGuest.innerHTML = countAllGuest + " Гостя";
            }
            else if(countAllGuest > 5 || countAllGuest >= 25 || countAllGuest >= 35 || countAllGuest >= 45) {
                getDropTextGuest.innerHTML = countAllGuest + " Гостей";
            }
         
    }
     });
     scoreMinus.addEventListener('click', function(){
        if(count > 0) {
            count--;
            value.innerHTML = count;
            countAllGuest--;
            if(countAllGuest == 1 || countAllGuest == 21 || countAllGuest == 31 || countAllGuest == 41 ) {
                getDropTextGuest.innerHTML = countAllGuest + " Гость";
            }
            else if(countAllGuest <= 4 || countAllGuest <= 24 || countAllGuest <= 34 || countAllGuest <= 44) {
                getDropTextGuest.innerHTML = countAllGuest + " Гостя";
            }
            else if(countAllGuest > 5 || countAllGuest >= 25 || countAllGuest >= 35 || countAllGuest >= 45) {
                getDropTextGuest.innerHTML = countAllGuest + " Гостей";
            }
        }
     });
}
    


// -------------------- Rooms ------------------- //

clickDropDown(getDropInputRooms, getDropBlockRooms);

countDropBox( scorePlusBedrooms, scoreMinusBedrooms, RoomsMassive, headingBedrooms, countBedrooms, ValueBedrooms);

countDropBox(scorePlusBeds, scoreMinusBeds, RoomsMassive, headingBeds, countBeds, ValueBeds);

countDropBox(scorePlusBathrooms, scoreMinusBathrooms, RoomsMassive, sliceHeadingBathrooms, countBathrooms, ValueBathrooms);

// -------------------- Rooms ------------------- //


// -------------------- Guests ------------------ //

countGuest(scorePlusAdults, scoreMinusAdults, countAdults , ValueAdults);

countGuest(scorePlusChild, scoreMinusChild, countChild , ValueChild);

countGuest(scorePlusBaby, scoreMinusBaby, countBaby , ValueBaby);

clickDropDown(getDropInputGuest, getDropBlockGuest);

// -------------------- Guests ------------------ //