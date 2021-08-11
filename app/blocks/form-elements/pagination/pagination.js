let getPaginationItems = document.querySelectorAll('.pagination__item');
let getPaginationArrow = document.querySelector('.pagination__arrow');

let NumberOfPages = 15; // Количество страниц. Можно менять это значение.
let NumberMassivePages = [];
let NumberMassiveOnSite = [];
let countNextNumber = 0;
let activeNumber = 1;
let ObjectActiveNow = { // Объект, который сохраняет номер страцницы, которая в данный момент активна
      number: 1, // Индекс массива, который показывает активность номера страницы
      value: 1, // Номер страницы
};
let endRowPages = false;
let endCountPages = true;

function renderMassivePages() {
      for(i = 1; i < NumberOfPages + 1; i++){
            NumberMassivePages[i - 1] = i;
      }
}
function renderMassiveSite() {
      NumberMassiveOnSite[0]= 1;
      NumberMassiveOnSite[1] = 2;
      NumberMassiveOnSite[2] = 3;
      NumberMassiveOnSite[3] = "...";
      NumberMassiveOnSite[4] = NumberOfPages;

      viewPagItems(NumberMassiveOnSite, 0);
      
}
getPaginationArrow.addEventListener('click', function(){
      
            renderPagItems(NumberMassivePages, NumberMassiveOnSite, countNextNumber);
            countNextNumber++;
   
})


function  renderPagItems(massive, massiveSite, nextNumber) {
      
      if(massive[nextNumber] != NumberOfPages) {
            for(i = 0; i < 5; i++){
                        if(endRowPages == false) {
                              massiveSite[i] = massive[nextNumber];
                              ObjectActiveNow.value = massiveSite[ObjectActiveNow.number];
                              if(i == 3) {
                                    massiveSite[i] = "...";
                              }else if(i == 4){
                                    massiveSite[i] = massive.length;
                              }
                              if(massiveSite[i] == massive.length - 2) {
                                    endRowPages = true;
                                    ObjectActiveNow.value = massiveSite[ObjectActiveNow.number];
                                    i = 5;
                              }
                              
                              nextNumber++;
                              
                        
                        } else {
                              activeNumber++;
                              ObjectActiveNow.number++;
                             if(activeNumber == 2) {
                                   massiveSite[activeNumber] = massive.length - 2; 
                                   ObjectActiveNow.value = massiveSite[ObjectActiveNow.number];
                             }
                             if(activeNumber == 3) {
                                    massiveSite[activeNumber] = massive.length - 1; 
                                    ObjectActiveNow.value = massiveSite[ObjectActiveNow.number];
                             }
                             if(activeNumber == 4){
                                    massiveSite[activeNumber] = massive.length;
                                    ObjectActiveNow.value = massiveSite[ObjectActiveNow.number];
                                    
                             }
                             i = 5;
                        }
                        
            }  
            
            viewPagItems(massiveSite, activeNumber);
      } else {
            ObjectActiveNow.value = 1;
             ObjectActiveNow.number = 1;
             renderMassiveSite();
             countNextNumber = - 1;
             activeNumber = 1;
             endRowPages = false;
             
      }
      
}
function  viewPagItems(massiveSite, activeNumber) {
      

  for(i = 0; i < 5; i++){
        getPaginationItems[i].innerHTML = massiveSite[i];
        getPaginationItems[i].setAttribute('class', 'pagination__item');     
  } 
  getPaginationItems[activeNumber].setAttribute('class', 'pagination__item pagination__active');
  console.log("Сейчас активна страница - ", ObjectActiveNow.value); // В консоле можно посмотреть, какая страница в данный момент активна
}


renderMassivePages();
renderMassiveSite();
