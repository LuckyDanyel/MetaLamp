let rateInputs = document.querySelectorAll('.rate__input');
let widthRate = document.querySelector('.rate__active');
let rateBlockInputs = document.querySelector('.rate__inputs');

let valueFinishRaing = 0;


function setRate(value){
    let countValue;
    countValue = value * 20;

    widthRate.style.width = String(countValue + "%");
}
function getRate() {
    for(i = 0; i < rateInputs.length; i++){
        const index = rateInputs[i];
        index.addEventListener('mouseenter', function(e){
            setRate(index.value);
        })
        index.addEventListener('click', function(e){
            valueFinishRaing = index.value;
            setRate(valueFinishRaing);
        })
        rateBlockInputs.addEventListener('mouseleave', function(e){
            setRate(valueFinishRaing);
        })
        
    }
}
getRate();