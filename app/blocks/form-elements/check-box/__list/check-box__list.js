let getArrowActiveBox = document.querySelector('.check-box__list-arrow-model');
let getArrowActiveBoxRotate = document.querySelector('.check-box__list-arrow');
let getBlockBoxList = document.querySelector('.check-box__list');




getArrowActiveBox.addEventListener('click', first);

    function first(e) {
        e.stopImmediatePropagation();
        this.removeEventListener("click", first);
        getArrowActiveBox.onclick = second;
        getBlockBoxList.style.display = 'block';
        getArrowActiveBoxRotate.style.transform = "rotate(225deg)"
    }
    function second() {
        getBlockBoxList.style.display = 'none';
        getArrowActiveBox.onclick = first;
        getArrowActiveBoxRotate.style.transform = "rotate(45deg)"
    
    }  