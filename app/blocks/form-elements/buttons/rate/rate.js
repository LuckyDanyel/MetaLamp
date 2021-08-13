let rateInputs = document.querySelectorAll('.rate__input');
let widthRate = document.querySelectorAll('.rate__active');
let rateBlockInputs = document.querySelector('.rate__inputs');


function setRate(value, index){ 
    let countValue;
    countValue = value * 20;

    widthRate[index].style.width = String(countValue + "%");
}

export {setRate};
// function getRate() {
//     for(i = 0; i < rateInputs.length; i++){
//         const index = rateInputs[i];
//         index.addEventListener('mouseenter', function(e){
//             setRate(index.value);
//         })
//         index.addEventListener('click', function(e){
//             valueFinishRaing = index.value;
//             setRate(valueFinishRaing);
//         })
//         rateBlockInputs.addEventListener('mouseleave', function(e){
//             setRate(valueFinishRaing);
//         })
        
//     }
// }
// getRate();