import 'jquery';

let getBurgerMenu = document.querySelector('.burger__menu');
let getMenu = document.querySelector('.header__menu');

let firstClick = false;
function hideMenu(){
      if(firstClick == true) {
            $(getMenu).hide();
            firstClick = false;
      }else {
            $(getMenu).show();
            firstClick = true;
      }
}
$(getBurgerMenu).click(hideMenu.bind(this));

