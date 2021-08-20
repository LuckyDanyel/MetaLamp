let getLikeAll = document.querySelectorAll('.like__input');
let getLikeTextAll = document.querySelectorAll('.like__text');

// class Like { // Создаем класс лайк, указываем необходимые свойства
//       constructor(isLike, count, getLikeDom, getLikeTextDoom, index) {
//         this.isLike = isLike;
//         this.count = count;
//         this.getLikeDom = getLikeDom;
//         this.getLikeTextDoom = getLikeTextDoom;
//         this.index = index;
//       }
//     }
//     let massiveLike = []; // Массив для объекто класса лайк
  
//   for(i = 0; i < getLikeAll.length; i++) {
//       let like = new Like(false, getLikeTextAll[i].innerHTML, getLikeAll[i], getLikeTextAll[i], i); // Для каждого лайка на странице создаем объект
//       massiveLike.push(like); // И заносим каждый объект каждого лайка на странице в массив
//       $(getLikeAll[i]).click(countLike.bind(this, i)); 
//   }
//   function countLike(getLike) {  // Передаем индек лайка, на который было совершено событие
      
//       if(massiveLike[getLike].isLike == false) {  // Проверяем, что лайк еще не был поставлен
//               massiveLike[getLike].count = massiveLike[getLike].getLikeTextDoom.innerHTML = Number(massiveLike[getLike].count) + 1; // Меняет дум элемент и значения записываем в count
//               massiveLike[getLike].isLike = true; // Для этого лайка указываем что он был поставлен
//       } else { // Иначе если пользователь совершил клик и лайк был поставле
//           massiveLike[getLike].count = massiveLike[getLike].getLikeTextDoom.innerHTML = Number(massiveLike[getLike].count) - 1; // Убираем из лайка единиицу и значения записываем в count
//           massiveLike[getLike].isLike = false; // Теперь для этого лайка указываем, что он был убран
//       }
//   }

  function createLike(likeDoomText) { // Оптимизация кода для подсчетов лайков
      let firstClick = true;
      let count = likeDoomText.innerHTML;
        return function countLike(){
            if(firstClick == true) {
                count++;
                likeDoomText.innerHTML = count;
                firstClick = false;
            } else {
                count--;
                likeDoomText.innerHTML = count;
                firstClick = true;
            }
            console.log(count);
        }
  }

for(i = 0; i < getLikeAll.length; i++) {
  let like = createLike(getLikeTextAll[i]);
  console.log(createLike(getLikeTextAll[i]));
  $(getLikeAll[i]).click(like.bind(this));
}