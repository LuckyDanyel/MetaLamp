import 'jquery';

let getBurgerMenu = document.querySelector('.burger__menu');
let getMenu = document.querySelector('.header__menu');

let firstClick = false;
function hideMenu(){
      if(firstClick == true) {
            getBurgerMenu.classList.remove("animation__burger");
            $(getMenu).hide();
            firstClick = false;
      }else {
            getBurgerMenu.classList.add("animation__burger");
            $(getMenu).show();
            firstClick = true;
      }
}
$(getBurgerMenu).click(hideMenu.bind(this));

