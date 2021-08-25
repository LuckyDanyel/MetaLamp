

function init() {
    // Один функционал, который считает counts в dropDowns. DropDowns по факту отличаются лишь способом вывода
    let getAllDropDowns = document.querySelectorAll('.drop-downs__count');
    let length = getAllDropDowns.length;
    for(i = 0; i < length; i++) { // Цикл нужен для того, чтобы функционал накинуть на все дропы где идет подсчет

        getAllDropDowns = document.querySelectorAll('.drop-downs__count')[i];

    // Присутсвует и в гостях и в комнатах
    let getBtnMinus = getAllDropDowns.querySelectorAll('#drop-downs__minus');
    let getBtnPlus = getAllDropDowns.querySelectorAll('#drop-downs__plus');
    let getValue = getAllDropDowns.querySelectorAll('#drop-downs__value');
    let getHeading = getAllDropDowns.querySelector('.drop-downs__global-text');
    let getShowBlock = getAllDropDowns.querySelector('.drop-downs__block-general');
    let getBtnDrop = getAllDropDowns.querySelector('#drop-downs__input');

    // Только в гостях присутсвуют эти кнопки
    let getBtnSend = getAllDropDowns.querySelector('#drop-downs__send');
    let getBtnDelete = getAllDropDowns.querySelectorAll('#drop-downs__delete');


    addEvent(getBtnPlus, getValue, getHeading);
    addEvent(getBtnMinus, getValue, getHeading);
    addEventBtn(getBtnSend, getShowBlock, getValue, getHeading);
    addEventBtn(getBtnDrop, getShowBlock, getValue, getHeading);
    addEventBtn(getBtnDelete, getShowBlock, getValue, getHeading);
}

    

}

function addEvent(items, values, heading) {
    items.forEach((el, index) => {
        $(el).click(controllerCount.takeAddEvents.bind(this, el, index, values, heading));
    });
}
function addEventBtn(button, showBlock, values, blockHeading) {
    $(button).click(controllerCount.takeButtonEvent.bind(this, button, showBlock, values, blockHeading));
}

let controllerCount = {
    takeAddEvents: function(el, index, values, heading){
        let isMinus = false;
        if(el.id === "drop-downs__minus") {
            isMinus = true;
        } else {
            viewCount.activeMinus(values[index]);
        }
            let takeOneValue = modelCount.logicCount(values[index], isMinus);
            viewCount.onValue(values[index], takeOneValue);
    
            let takeAllValue = modelCount.logicAllCount(values);
            viewCount.onHeading(heading, takeAllValue, values); // здесь

    },
    takeButtonEvent(el, showBlock, values, blockHeading) {
        console.log(el);
        let openClass = "drop-downs__open"

            if(el.id === "drop-downs__send") { // Если это кнопка отправить
                viewCount.hide(showBlock, openClass);
                
            }else if(el.id === "drop-downs__input") { // Если это кнопка дропа

                    if(showBlock.classList.contains(openClass)) {

                        viewCount.hide(showBlock, openClass);

                    } else {
                        viewCount.show(showBlock, openClass);

                    }
            }else { // Если это кнопка удалить
                console.log("Удалить");
                modelCount.deleteAllCount(values, blockHeading)
            }
    }
}
let modelCount = {
    logicCount: function(valueItem, isMinus) {
                if(isMinus == true) {
                        if(valueItem.dataset.value > 0) {
                                if(valueItem.dataset.value == 1) {
                                    viewCount.noActieMinus(valueItem)
                                }
                            return valueItem.dataset.value = Number(valueItem.dataset.value) - 1;
                        } else {

                            return 0;
                        }
                } else {
                        return(valueItem.dataset.value < 10) ? valueItem.dataset.value = Number(valueItem.dataset.value) + 1 : 10;
                }
    },
    logicAllCount: function(valueAll) {
                let countAll = 0;
                valueAll.forEach(el => {                   
                    countAll += Number(el.dataset.value); 
                })
                return countAll;
    },
    deleteAllCount: function (values, blockHeading) {
        for(i = 0; i < values.length; i++) {
            values[i].dataset.value = "0";
            viewCount.onValue(values[i], 0);
            viewCount.noActieMinus(values[i]);
        }
        let DeleteAll = this.logicAllCount(values);
        console.log(DeleteAll);
        viewCount.onHeading(blockHeading, DeleteAll, values) // Здесь 
    },

}
let viewCount = { 
    onValue: function(writeBlockValue, value) {
        writeBlockValue.innerHTML = value;
    },
    onHeading: function(headignBlock, value, values) {
            if(headignBlock.classList.contains("drop-downs__guest-text")) {
            headignBlock.innerHTML = this.rightBetweenGuest(value);
            localStorage.setItem("DataGuest", this.rightBetweenGuest(value))
        } else { // Иначе если это другой вывод в heading
            headignBlock.innerHTML = this.rightBetweenGuestRooms(values);
            localStorage.setItem("DataRooms", this.rightBetweenGuestRooms(values))
        }
    },
    rightBetweenGuest: function(value) {

                    if(value == 1 || value == 21) {
                        return value + " Гость";
                    }
                    else if(value >= 2 && value < 5 || value > 21 && value < 25)  {
                        return value + " Гостя";
                    }
                    else if(value >= 5 && value < 21|| value >= 25 && value < 31) {
                        return value + " Гостей";
                    } else if(value == 0) {
                        return "Сколько гостей";
                    }
    },
    rightBetweenGuestRooms: function(values) {
                    let concatValue = "";
                    let name = {
                        0 : " Спальни",
                        1 : " Кровати",
                        2 : ".....",
                    }
                    values.forEach((el, index) => {
                        concatValue += el.dataset.value + name[index] + " ";
                    })
                    
                    return concatValue;
    },
    show: function(block, classEl) {
        $(block).addClass(classEl);
    },
    hide: function(block, classEl) {
        $(block).removeClass(classEl);
    },
    activeMinus: function(itemPlus) {
        let getMinus = itemPlus.parentNode.children[0];
        let classAdd = "drop-downs__minus_active";
        this.show(getMinus, classAdd)
        
    },
    noActieMinus: function(itemPlus) {
        let getMinus = itemPlus.parentNode.children[0];
        let classAdd = "drop-downs__minus_active"
        this.hide(getMinus, classAdd)
    },
} 

window.onload = init();