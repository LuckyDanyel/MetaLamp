// var scoreMinusBedrooms = document.querySelector('#drop-downs__score-minus-Bedrooms');
// var ValueBedrooms = document.querySelector('#drop-downs__score-value-Bedrooms');
// var scorePlusBedrooms = document.querySelector('#drop-downs__score-plus-Bedrooms');
// var headingBedrooms = document.querySelector('.drop-downs__h3-Bedrooms').innerHTML;
// var activeBedrooms = document.querySelector('.drop-downs__score-minus_active-Bedrooms');
// var countBedrooms = 0;

// var scoreMinusBeds = document.querySelector('#drop-downs__score-minus-Beds');
// var ValueBeds = document.querySelector('#drop-downs__score-value-Beds');
// var scorePlusBeds = document.querySelector('#drop-downs__score-plus-Beds');
// var headingBeds = document.querySelector('.drop-downs__h3-Beds').innerHTML;
// var activeBeds = document.querySelector('.drop-downs__score-minus_active-Beds');
// var countBeds = 0;


// var scoreMinusBathrooms = document.querySelector('#drop-downs__score-minus-Bathrooms');
// var ValueBathrooms = document.querySelector('#drop-downs__score-value-Bathrooms');
// var scorePlusBathrooms = document.querySelector('#drop-downs__score-plus-Bathrooms');
// var headingBathrooms = document.querySelector('.drop-downs__h3-Bathrooms').innerHTML;
// var activeBathrooms = document.querySelector('.drop-downs__score-minus_active-Bathrooms');
// var countBathrooms = 0;

// var sliceHeadingBathrooms = headingBathrooms.substring(0, headingBathrooms.indexOf(' '));

// var RoomsMassive = [0, headingBedrooms, 0, headingBeds, 0 , sliceHeadingBathrooms]; // Массив для перезаписи строки в DropBox

// let getDropTextRooms = document.querySelector('.drop-downs__general-text')
// let getDropInputRooms = document.getElementById("drop-downs__input-general")
// let getDropBlockRooms = document.querySelector('.drop-downs__block-general');



// -------------------- Rooms Function start ------------------- //
// function clickDropDownRooms() {
//     console.log("Работает");

//     if(FirstClick == true) {
//         getDropBlockRooms.style.display = 'flex';
//         FirstClick = false;
//         console.log("true");

//     }else {
//         getDropBlockRooms.style.display = 'none';
//         FirstClick = true;
//         console.log("false");
//     }
// }

// function countDropBox(scorePlus, scoreMinus, massive, heading , count , value, active) { // [0 Спальни, 0 Кровати, 0 Ванные]
        
//         scorePlus.addEventListener('click', function(){
//             active.style.opacity = "1";
            
//            if(count < 9 ) {
//                 for(i = 1; i < massive.length; i += 2){
//                     if(massive[i] == heading){
//                         count++;
//                         massive[i - 1] = count;
//                         value.innerHTML = count;

//                             for(let j = 1; j < massive.length; j += 2) {

//                                 if(massive[j - 1] == 1 && massive[j] == "Спальни"){
//                                     massive[j] = "Спальня";  
//                                 }
//                                 if(massive[j + 1] == 1 && massive[j + 2] == "Кровати") {
//                                     massive[j + 2] = "Кровать";
//                                 }

//                                 if(massive[j - 1] >= 2 && massive[j - 1] < 5  && massive[j] == "Спальни"){
//                                     massive[j] = "Спальни";  
//                                 }
//                                 if(massive[j + 1] >= 2 && massive[j + 1] < 5  && massive[j + 2] == "Кровати"){
//                                     massive[j + 2] = "Кровати";  
//                                 }

//                                 if(massive[j - 1] >= 5 && massive[j - 1] < 10  && massive[j] == "Спальни") {
//                                     massive[j] = "Спален"; 
//                                 }
//                                 if(massive[j + 1] >= 5 && massive[j + 1] < 10  && massive[j + 2] == "Кровати"){
//                                     massive[j + 2] = "Кроватей";  
//                                 }
//                                     j = massive.length;

//                             }
                        
                            
//                             getDropTextRooms.innerHTML = massive.join(" ");
//                             getDropTextRooms.innerHTML = getDropTextRooms.innerHTML.substring(0, getDropTextRooms.innerHTML.indexOf("Ванные") - 3);
//                             getDropTextRooms.innerHTML = getDropTextRooms.innerHTML + ".....";
//                             massive[1] = "Спальни";
//                             massive[3] = "Кровати";
                        
                         
//                     }
//                 }
//             }
//         });
//         scoreMinus.addEventListener('click', function(){
//             if(count == 1) {
//                 active.style.opacity = "0.5";
//             }
//             if(count > 0) {
//                 for(i = 1; i < massive.length; i += 2){
//                     if(massive[i] == heading){
//                         count--;
//                         massive[i - 1] = count;
//                         value.innerHTML = count;

//                             for(let j = 1; j < massive.length; j += 2) {

//                                 if(massive[j - 1] == 1 && massive[j] == "Спальни" ){
//                                     massive[j] = "Спальня";
                                    
//                                 }
//                                 if(massive[j + 1] == 1 && massive[j + 2] == "Кровати") {
//                                     massive[j + 2] = "Кровать";
                                    
//                                 }

//                                 if(massive[j - 1] >= 2 && massive[j - 1] < 5  && massive[j] == "Спальни") {
//                                     massive[j] = "Спальни";  
//                                 }
//                                 if(massive[j + 1] >= 2 && massive[j + 1] < 5  && massive[j + 2] == "Кровати") {
//                                     massive[j + 2] = "Кровати";  
//                                 }

//                                 if(massive[j - 1] >= 5 && massive[j - 1] < 10  && massive[j] == "Спальни") {
//                                     massive[j] = "Спален"; 
//                                 }
//                                 if(massive[j + 1] >= 5 && massive[j + 1] < 10  && massive[j + 2] == "Кровати") {
//                                     massive[j + 2] = "Кроватей";  
//                                 }
                                
//                                 if (massive[j - 1] == 0 &&  massive[j] == "Спальни") {
//                                     massive[j] = "Спален";
                                   
//                                 }
//                                 if (massive[j + 1] == 0 &&  massive[j + 2] == "Кровати") {
//                                     massive[j + 2] = "Кроватей";
                                    
//                                 }
//                                     j = massive.length;

//                             }
                        
//                                 getDropTextRooms.innerHTML = massive.join(" ");
//                                 getDropTextRooms.innerHTML = getDropTextRooms.innerHTML.substring(0, getDropTextRooms.innerHTML.indexOf("Ванные") - 3);
//                                 getDropTextRooms.innerHTML = getDropTextRooms.innerHTML + ".....";
//                                 massive[1] = "Спальни";
//                                 massive[3] = "Кровати";
//                     }
//                 }
//             }
//         });
//     }

// -------------------- Rooms Function ------------------- //


// -------------------- Rooms ------------------- //

// getDropInputRooms.addEventListener('click', clickDropDownRooms);

// countDropBox( scorePlusBedrooms, scoreMinusBedrooms, RoomsMassive, headingBedrooms, countBedrooms, ValueBedrooms, activeBedrooms);

// countDropBox(scorePlusBeds, scoreMinusBeds, RoomsMassive, headingBeds, countBeds, ValueBeds, activeBeds);

// countDropBox(scorePlusBathrooms, scoreMinusBathrooms, RoomsMassive, sliceHeadingBathrooms, countBathrooms, ValueBathrooms, activeBathrooms);

// -------------------- Rooms ------------------- //
