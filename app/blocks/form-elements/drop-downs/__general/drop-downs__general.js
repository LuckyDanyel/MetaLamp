
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
var Adult = {
    scoreMinus: document.querySelector('#drop-downs__score-minus-Adults'),
    value: document.querySelector('#drop-downs__score-value-Adults'),
    scorePlus: document.querySelector('#drop-downs__score-plus-Adults'),
    heading: document.querySelector('.drop-downs__h3-Adults').innerHTML,
    count: 0,
}

var Child = {
    scoreMinus: document.querySelector('#drop-downs__score-minus-Child'),
    value: document.querySelector('#drop-downs__score-value-Child'),
    scorePlus: document.querySelector('#drop-downs__score-plus-Child'),
    heading: document.querySelector('.drop-downs__h3-Child').innerHTML,
    count: 0,
}

var Baby = {

    scoreMinus: document.querySelector('#drop-downs__score-minus-Baby'),
    value: document.querySelector('#drop-downs__score-value-Baby'),
    scorePlus: document.querySelector('#drop-downs__score-plus-Baby'),
    heading: document.querySelector('.drop-downs__h3-Baby').innerHTML,
    count: 0,
}



var countAllGuest = 0;
let getDropInputGuest = document.getElementById("drop-downs__input-guest");
let getDropBlockGuest = document.querySelector('.drop-downs__block-guest');
let getDropTextGuest = document.querySelector('.drop-downs__guest-text');
let getDropDeleteGuest = document.querySelector('#drop-downs__buttons-item_delete');
let getDropSendGuest = document.querySelector('#drop-downs__buttons-item_send');

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

// -------------------- Rooms Function ------------------- //

function countDropBox(scorePlus, scoreMinus, massive, heading , count , value) { // [0 Спальни, 0 Кровати, 0 Ванные]
        
        scorePlus.addEventListener('click', function(){
            
           if(count < 9 ) {
                for(i = 1; i < massive.length; i += 2){
                    if(massive[i] == heading){
                        count++;
                        massive[i - 1] = count;
                        value.innerHTML = count;

                            for(j = 1; j < massive.length; j += 2) {

                                if(massive[j - 1] == 1 && massive[j] == "Спальни"){
                                    massive[j] = "Спальня";  
                                }
                                if(massive[j + 1] == 1 && massive[j + 2] == "Кровати") {
                                    massive[j + 2] = "Кровать";
                                }

                                if(massive[j - 1] >= 2 && massive[j - 1] < 5  && massive[j] == "Спальни"){
                                    massive[j] = "Спальни";  
                                }
                                if(massive[j + 1] >= 2 && massive[j + 1] < 5  && massive[j + 2] == "Кровати"){
                                    massive[j + 2] = "Кровати";  
                                }

                                if(massive[j - 1] >= 5 && massive[j - 1] < 10  && massive[j] == "Спальни") {
                                    massive[j] = "Спален"; 
                                }
                                if(massive[j + 1] >= 5 && massive[j + 1] < 10  && massive[j + 2] == "Кровати"){
                                    massive[j + 2] = "Кроватей";  
                                }
                                    j = massive.length;

                            }
                        
                            
                            getDropTextRooms.innerHTML = massive.join(" ");
                            getDropTextRooms.innerHTML = getDropTextRooms.innerHTML.substring(0, getDropTextRooms.innerHTML.indexOf("Ванные") - 3);
                            getDropTextRooms.innerHTML = getDropTextRooms.innerHTML + ".....";
                            massive[1] = "Спальни";
                            massive[3] = "Кровати";
                        
                         
                    }
                }
            }
        });
        scoreMinus.addEventListener('click', function(){
            if(count > 0) {
                for(i = 1; i < massive.length; i += 2){
                    if(massive[i] == heading){
                        count--;
                        massive[i - 1] = count;
                        value.innerHTML = count;

                            for(j = 1; j < massive.length; j += 2) {

                                if(massive[j - 1] == 1 && massive[j] == "Спальни"){
                                    massive[j] = "Спальня";  
                                }
                                if(massive[j + 1] == 1 && massive[j + 2] == "Кровати") {
                                    massive[j + 2] = "Кровать";
                                }

                                if(massive[j - 1] >= 2 && massive[j - 1] < 5  && massive[j] == "Спальни") {
                                    massive[j] = "Спальни";  
                                }
                                if(massive[j + 1] >= 2 && massive[j + 1] < 5  && massive[j + 2] == "Кровати") {
                                    massive[j + 2] = "Кровати";  
                                }

                                if(massive[j - 1] >= 5 && massive[j - 1] < 10  && massive[j] == "Спальни") {
                                    massive[j] = "Спален"; 
                                }
                                if(massive[j + 1] >= 5 && massive[j + 1] < 10  && massive[j + 2] == "Кровати") {
                                    massive[j + 2] = "Кроватей";  
                                }
                                
                                if (massive[j - 1] == 0 &&  massive[j] == "Спальни") {
                                    massive[j] = "Спален";
                                   
                                }
                                if (massive[j + 1] == 0 &&  massive[j + 2] == "Кровати") {
                                    massive[j + 2] = "Кроватей";
                                    
                                }
                                    j = massive.length;

                            }
                        
                                getDropTextRooms.innerHTML = massive.join(" ");
                                getDropTextRooms.innerHTML = getDropTextRooms.innerHTML.substring(0, getDropTextRooms.innerHTML.indexOf("Ванные") - 3);
                                getDropTextRooms.innerHTML = getDropTextRooms.innerHTML + ".....";
                                massive[1] = "Спальни";
                                massive[3] = "Кровати";
                    }
                }
            }
        });
    }

// -------------------- Rooms Function ------------------- //

// -------------------- Guests Function ------------------ //

function countGuest(Object) {
    
    Object.scorePlus.addEventListener('click', function(){
        
        
    if(countAllGuest < 100){
        Object.count++;
        Object.value.innerHTML = Object.count;
        countAllGuest++;
        
            if(countAllGuest == 1 || countAllGuest == 21 || countAllGuest == 31 || countAllGuest == 41 ) {
                getDropTextGuest.innerHTML = countAllGuest + " Гость";
            }
            else if(countAllGuest >= 2 && countAllGuest < 5 || countAllGuest > 21 && countAllGuest < 25 || countAllGuest > 31 && countAllGuest < 35 || countAllGuest > 41 && countAllGuest < 45 ) {
                getDropTextGuest.innerHTML = countAllGuest + " Гостя";
            }
            else if(countAllGuest >= 5 && countAllGuest < 21|| countAllGuest >= 25 && countAllGuest < 31 || countAllGuest >= 35 && countAllGuest < 41 || countAllGuest >= 45 && countAllGuest < 51) {
                getDropTextGuest.innerHTML = countAllGuest + " Гостей";
            }    
    }
     });
     Object.scoreMinus.addEventListener('click', function(){
        if(countAllGuest == 1 && Object.count == 1){
            getDropTextGuest.innerHTML = "Сколько гостей";
        }

        if(Object.count > 0) {
            
            countAllGuest--;
            Object.count--;
            Object.value.innerHTML = Object.count;
            
            if(countAllGuest == 1 || countAllGuest == 21 || countAllGuest == 31 || countAllGuest == 41 ) {
                getDropTextGuest.innerHTML = countAllGuest + " Гость";
                   
            }
            else if(countAllGuest >= 2 && countAllGuest < 5 || countAllGuest > 21 && countAllGuest < 25 || countAllGuest > 31 && countAllGuest < 35 || countAllGuest > 41 && countAllGuest < 45 ) {
                getDropTextGuest.innerHTML = countAllGuest + " Гостя";
            }
            else if(countAllGuest >= 5 && countAllGuest < 21|| countAllGuest >= 25 && countAllGuest < 31 || countAllGuest >= 35 && countAllGuest < 41 || countAllGuest >= 45 && countAllGuest < 51) {
                getDropTextGuest.innerHTML = countAllGuest + " Гостей";
            }
            
        }
        
        
        
     });
}



function DeleteOrSend(ObjectOne, ObjectSecond, ObjectThird) {
    getDropDeleteGuest.addEventListener('click', function () {
        countAllGuest = 0;
        
        getDropTextGuest.innerHTML = countAllGuest + " Гостей";

        ObjectOne.value.innerHTML = 0;
        ObjectSecond.value.innerHTML = 0;
        ObjectThird.value.innerHTML = 0;

        ObjectOne.count = 0;
        ObjectSecond.count = 0;
        ObjectThird.count = 0;

    });
    getDropSendGuest.addEventListener('click', function () {
        console.log("Количество гостей - ", countAllGuest, " Взрослые - ", ObjectOne.count , " Дети - ", ObjectSecond.count, " Младенцы - ", ObjectThird.count)

        countAllGuest = 0;
        
        ObjectOne.count = 0;
        ObjectSecond.count = 0;
        ObjectThird.count = 0;

        getDropTextGuest.innerHTML = countAllGuest + " Гостей";

        ObjectOne.value.innerHTML = 0;
        ObjectSecond.value.innerHTML = 0;
        ObjectThird.value.innerHTML = 0;
    }); 
    
}

// -------------------- Guests Function ------------------ //
    


// -------------------- Rooms ------------------- //

clickDropDown(getDropInputRooms, getDropBlockRooms);

countDropBox( scorePlusBedrooms, scoreMinusBedrooms, RoomsMassive, headingBedrooms, countBedrooms, ValueBedrooms);

countDropBox(scorePlusBeds, scoreMinusBeds, RoomsMassive, headingBeds, countBeds, ValueBeds);

countDropBox(scorePlusBathrooms, scoreMinusBathrooms, RoomsMassive, sliceHeadingBathrooms, countBathrooms, ValueBathrooms);

// -------------------- Rooms ------------------- //


// -------------------- Guests ------------------ //

countGuest(Adult);

countGuest(Child);

countGuest(Baby);

clickDropDown(getDropInputGuest, getDropBlockGuest);

DeleteOrSend(Adult, Child, Baby);

// -------------------- Guests ------------------ //