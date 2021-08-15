let rateInputs = document.querySelectorAll('.rate__input');
let widthRate = document.querySelectorAll('.rate__active');
let rateBlockInputs = document.querySelector('.rate__inputs');


function setRate(value, index){ 
    let countValue;
    countValue = value * 20;

    widthRate[index].style.width = String(countValue + "%");
}

export {setRate};
