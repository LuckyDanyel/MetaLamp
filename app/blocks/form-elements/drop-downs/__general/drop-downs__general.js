var scoreMinusBedrooms = document.querySelector('#drop-downs__score-minus-Bedrooms');
var ValueBedrooms = document.querySelector('#drop-downs__score-value-Bedrooms');
var scorePlusBedrooms = document.querySelector('#drop-downs__score-plus-Bedrooms');
var headingBedrooms = document.querySelector('.drop-downs__h3-Bedrooms');
var countBedrooms = 0;
var Bedrooms = {
    nameBedrooms: document.querySelector('.drop-downs__h3-Bedrooms').innerHTML,
    coreMinusBedrooms: document.querySelector('#drop-downs__score-minus-Bedrooms'),
    valueBedrooms: document.querySelector('#drop-downs__score-value-Bedrooms'),
    scorePlusBedrooms: document.querySelector('#drop-downs__score-plus-Bedrooms'),
    countBedrooms: 0
}


var scoreMinusBeds = document.querySelector('#drop-downs__score-minus-Beds');
var ValueBeds = document.querySelector('#drop-downs__score-value-Beds');
var scorePlusBeds = document.querySelector('#drop-downs__score-plus-Beds');
var headingBeds = document.querySelector('.drop-downs__h3-Beds');
var countBeds = 0;


var scoreMinusBathrooms = document.querySelector('#drop-downs__score-minus-Bathrooms');
var ValueBathrooms = document.querySelector('#drop-downs__score-value-Bathrooms');
var scorePlusBathrooms = document.querySelector('#drop-downs__score-plus-Bathrooms');
var headingBathrooms = document.querySelector('.drop-downs__h3-Bathrooms');
var countBathrooms = 0;


let getDropInput = document.getElementById("drop-downs__input")
let getDropBlock = document.querySelector('.drop-downs__block-general');
let getDropText = document.querySelector('.drop-downs__general-text')



getDropInput.addEventListener('click', first);


function first(e){
    
    e.stopImmediatePropagation();
    this.removeEventListener("click", first);
    getDropInput.onclick = second;
    getDropBlock.style.display = 'flex';
}
function second(){
    getDropBlock.style.display = 'none';
    getDropInput.onclick = first;
    
}


function Rooms(Object){
    console.log(Object.get(1));
    Object[3].addEventListener('click', function(){
        if(Object[4] < 10)
        Object[4]++;
        Object[1].innerHTML = count;
        
    });
}
//     scoreMinus.addEventListener('click', function(){
//         if(count > 0)
//             count--;
//             value.innerHTML = count;
//     });
// }
// function UpdateText() {
//     getDropText.
// }
Rooms(Bedrooms);

// Rooms(scorePlusBedrooms, scoreMinusBedrooms, ValueBedrooms, countBedrooms);

// Rooms(scorePlusBeds, scoreMinusBeds, ValueBeds, countBeds);

// Rooms(scorePlusBathrooms, scoreMinusBathrooms, ValueBathrooms, countBathrooms);
