
import noUiSlider from 'nouislider';

let slider = document.querySelector('#slider');
let textSlider = document.querySelectorAll('.range-slider__item-text');
noUiSlider.create(slider, {
    start: [5000, 10000],
    step: 1,
    connect: true,
    range: {
        'min': 5000,
        'max': 10000,
    }
});
slider.noUiSlider.on('update', function(values, handle){
    if(handle == 1){
        textSlider[2].innerHTML = Math.round(values[1]) + "₽"
    } else {
        textSlider[0].innerHTML = Math.round(values[0]) + "₽"
    }

})
