let getLikeAll = document.querySelectorAll('.like__input');
let getLikeTextAll = document.querySelectorAll('.like__text');

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
        }
  }

for(i = 0; i < getLikeAll.length; i++) {
  let like = createLike(getLikeTextAll[i]);
  $(getLikeAll[i]).click(like.bind(this));
}