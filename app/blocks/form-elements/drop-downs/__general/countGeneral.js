
// let FirstClick = true;

// // -------------------- Rooms ------------------- //

// // -------------------- Guests ------------------ //
// var Adult = {
//     scoreMinus: document.querySelector('#drop-downs__score-minus-Adults'),
//     value: document.querySelector('#drop-downs__score-value-Adults'),
//     scorePlus: document.querySelector('#drop-downs__score-plus-Adults'),
//     heading: document.querySelector('.drop-downs__h3-Adults').innerHTML,
//     active: document.querySelector('.drop-downs__score-minus_active-Adults'),
//     count: 0,
// }


// var Child = {
//     scoreMinus: document.querySelector('#drop-downs__score-minus-Child'),
//     value: document.querySelector('#drop-downs__score-value-Child'),
//     scorePlus: document.querySelector('#drop-downs__score-plus-Child'),
//     heading: document.querySelector('.drop-downs__h3-Child').innerHTML,
//     active: document.querySelector('.drop-downs__score-minus_active-Child'),
//     count: 0,
// }

// var Baby = {

//     scoreMinus: document.querySelector('#drop-downs__score-minus-Baby'),
//     value: document.querySelector('#drop-downs__score-value-Baby'),
//     scorePlus: document.querySelector('#drop-downs__score-plus-Baby'),
//     heading: document.querySelector('.drop-downs__h3-Baby').innerHTML,
//     active: document.querySelector('.drop-downs__score-minus_active-Baby'),
//     count: 0,
// }



// var countAllGuest = 0;

// let getDropInputGuest = document.querySelector('#drop-downs__input-guest');
// let getDropBlockGuest = document.querySelector('.drop-downs__block-guest');
// let getDropTextGuest = document.querySelector('.drop-downs__guest-text');
// let getDropTextGuestAllPages = document.querySelector('.drop-downs__guest-text');
// let getDropDeleteGuest = document.querySelector('#drop-downs__buttons-item_delete');
// let getDropSendGuest = document.querySelector('#drop-downs__buttons-item_send');
// let getDropButtonsGuest = document.querySelector('.drop-downs__buttons-guest');

// console.log(getDropInputGuest);



// // -------------------- Guests end ------------------ //


// function clickDropDownGuest() {
//     console.log("Работает");

//     if(FirstClick == true) {
//         getDropBlockGuest.style.display = 'flex';
//         FirstClick = false;
//         console.log("true");

//     }else {
//         getDropBlockGuest.style.display = 'none';
//         FirstClick = true;
//         console.log("false");
//     }
// }

// function scorePlusListener(Object){
//     Object.active.style.opacity = "1"
//     getDropDeleteGuest.style.display = "flex";
//     getDropButtonsGuest.style.justifyContent = "space-between";
    
// if(countAllGuest < 100){
//     Object.count++;
//     Object.value.innerHTML = Object.count;
//     countAllGuest++;
    
//         if(countAllGuest == 1 || countAllGuest == 21 || countAllGuest == 31 || countAllGuest == 41 ) {
//             getDropTextGuest.innerHTML = countAllGuest + " Гость";
//         }
//         else if(countAllGuest >= 2 && countAllGuest < 5 || countAllGuest > 21 && countAllGuest < 25 || countAllGuest > 31 && countAllGuest < 35 || countAllGuest > 41 && countAllGuest < 45 ) {
//             getDropTextGuest.innerHTML = countAllGuest + " Гостя";
//         }
//         else if(countAllGuest >= 5 && countAllGuest < 21|| countAllGuest >= 25 && countAllGuest < 31 || countAllGuest >= 35 && countAllGuest < 41 || countAllGuest >= 45 && countAllGuest < 51) {
//             getDropTextGuest.innerHTML = countAllGuest + " Гостей";
//         }    
//     }
// }

// function scoreMinusListener(Object) {
//     if(Object.count == 1) {
//         Object.active.style.opacity = "0.5";
//     }

//     if(countAllGuest == 1 && Object.count == 1) {
//         getDropTextGuest.innerHTML = "Сколько гостей";
//         getDropDeleteGuest.style.display = "none";
//         getDropButtonsGuest.style.justifyContent = "flex-end";
//     }
    
//     if(Object.count > 0) {
        
//         countAllGuest--;
//         Object.count--;
//         Object.value.innerHTML = Object.count;
        
//         if(countAllGuest == 1 || countAllGuest == 21 || countAllGuest == 31 || countAllGuest == 41 ) {
//             getDropTextGuest.innerHTML = countAllGuest + " Гость";
               
//         }
//         else if(countAllGuest >= 2 && countAllGuest < 5 || countAllGuest > 21 && countAllGuest < 25 || countAllGuest > 31 && countAllGuest < 35 || countAllGuest > 41 && countAllGuest < 45 ) {
//             getDropTextGuest.innerHTML = countAllGuest + " Гостя";
//         }
//         else if(countAllGuest >= 5 && countAllGuest < 21|| countAllGuest >= 25 && countAllGuest < 31 || countAllGuest >= 35 && countAllGuest < 41 || countAllGuest >= 45 && countAllGuest < 51) {
//             getDropTextGuest.innerHTML = countAllGuest + " Гостей";
//         }
        
//     }
    
    
// }

// function getDropDeleteGuestListener(ObjectOne, ObjectSecond, ObjectThird, getBlock) {
//         countAllGuest = 0;

//         getDropTextGuestAllPages.innerHTML = countAllGuest + " Гостей";
        

//         ObjectOne.value.innerHTML = 0;
//         ObjectSecond.value.innerHTML = 0;
//         ObjectThird.value.innerHTML = 0;

//         ObjectOne.count = 0;
//         ObjectSecond.count = 0;
//         ObjectThird.count = 0;

//         getDropDeleteGuest.style.display = "none";
//         getDropButtonsGuest.style.justifyContent = "flex-end";
//         ObjectOne.active.style.opacity = "0.5";
//         ObjectSecond.active.style.opacity = "0.5";
//         ObjectThird.active.style.opacity = "0.5";

// }
// function getDropSendGuestListener(ObjectOne, ObjectSecond, ObjectThird, getBlock) {

//     if(  ObjectOne.count == 0 && ObjectSecond.count == 0 && ObjectThird.count == 0){
//         console.log('Введите количетсво гостей!');
//     }
//     else {
//              for(let i = 0; i < getDropTextGuestAllPages.length; i++){
//                 getDropTextGuestAllPages[i].innerHTML = getDropTextGuest.innerHTML;
//              }

//          ObjectOne.count = 0;
//         ObjectSecond.count = 0;
//         ObjectThird.count = 0;

        
       
//         getBlock.style.display = 'none';
//         if(countAllGuest > 0){
//             getDropDeleteGuest.style.display = "inline-block";
//             getDropButtonsGuest.style.justifyContent = "space-between";
//         }
//         else {
//             getDropDeleteGuest.style.display = "none";
//             getDropButtonsGuest.style.justifyContent = "flex-end";
//         }

//         ObjectOne.active.style.opacity = "0.5";
//         ObjectSecond.active.style.opacity = "0.5";
//         ObjectThird.active.style.opacity = "0.5";

//         ObjectOne.value.innerHTML = 0;
//         ObjectSecond.value.innerHTML = 0;
//         ObjectThird.value.innerHTML = 0;

//         FirstClick = true;

        
//     }
// }

// // -------------------- Guests Function ------------------ //
    


// // -------------------- Guests ------------------ //
// getDropInputGuest.addEventListener('click' , clickDropDownGuest);

// $(Adult.scorePlus).click(scorePlusListener.bind(this, Adult));
// $(Child.scorePlus).click(scorePlusListener.bind(this, Child));
// $(Baby.scorePlus).click(scorePlusListener.bind(this, Baby));

// // $(Adult.scorePlus).unbind('click'); ----------- Удаление

// $(Adult.scoreMinus).click(scoreMinusListener.bind(this, Adult));
// $(Child.scoreMinus).click(scoreMinusListener.bind(this, Child));
// $(Baby.scoreMinus).click(scoreMinusListener.bind(this, Baby));

// $(getDropDeleteGuest).click(getDropDeleteGuestListener.bind(this, Adult, Child, Baby, getDropBlockGuest)); 


// $(getDropSendGuest).click(getDropSendGuestListener.bind(this, Adult, Child, Baby, getDropBlockGuest));


// // -------------------- Guests ------------------ //

function init() {

    let getBtnMinus = document.querySelectorAll('#drop-downs__minus');
    let getBtnPlus = document.querySelectorAll('#drop-downs__plus');
    let getValue = document.querySelectorAll('#drop-downs__value');

    let getHeading = document.querySelector('.drop-downs__guest-text');
    let getBtnSend = document.querySelector('#drop-downs__send');
    let getShowBlock = document.querySelector('.drop-downs__block');
    let getBtnDrop = document.querySelector('#drop-downs__input');

    addEvent(getBtnPlus, getValue, getHeading);
    addEvent(getBtnMinus, getValue, getHeading);
    addEventBtn(getBtnSend, getShowBlock);
    addEventBtn(getBtnDrop, getShowBlock);

}

function addEvent(items, values, heading) {
    items.forEach((el, index) => {
        $(el).click(controllerCount.takeAddEvents.bind(this, el, index, values, heading));
    });
}
function addEventBtn(button, showBlock, values, blockHeading) {
    $(button).click(controllerCount.takeButtonEvent.bind(this, button, showBlock));
}

let controllerCount = {
    takeAddEvents: function(el, index, values, heading){
        let isMinus = false;
        if(el.id === "drop-downs__minus") {
            isMinus = true;
        } 
            let takeOneValue = modelCount.logicCount(values[index], isMinus);
            viewCount.onValue(values[index], takeOneValue);
    
            let takeAllValue = modelCount.logicAllCount(values);
            viewCount.onHeading(heading, takeAllValue());
    },
    takeButtonEvent(el, showBlock, values, blockHeading) {
            if(el.id === "drop-downs__send") {
                $(showBlock).removeClass("drop-downs__open");
                
            } else if(el.id === "drop-downs__input") {

                if(showBlock.classList.contains("drop-downs__open")) {
                    $(showBlock).removeClass("drop-downs__open");
                } else {
                    $(showBlock).addClass("drop-downs__open");
                }
            }
    }
}
let modelCount = {
    logicCount: function(valueItem, isMinus) {
                if(isMinus == true) {
                        return (valueItem.dataset.value > 0) ? valueItem.dataset.value = Number(valueItem.dataset.value) - 1 : 0;
                } else {
                    return(valueItem.dataset.value < 20) ? valueItem.dataset.value = Number(valueItem.dataset.value) + 1 : 20;
                }
    },
    logicAllCount: function(valueAll) {
            return function() {
                let countAll = 0;
                valueAll.forEach(el => {                   
                    countAll += Number(el.dataset.value); 
                })
                return countAll;
            }
    }

}
let viewCount = {
    onValue: function(writeBlockValue, value) {
        writeBlockValue.innerHTML = value;
    },
    onHeading: function(headignBlock, value) {
        headignBlock.innerHTML = value;
    }
}

window.onload = init();