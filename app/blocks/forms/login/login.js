let getLoginForm = document.querySelector('.login__form');
let getPasswordLoginForm = getLoginForm.loginPassword;
let getBtnLoginForm = getLoginForm.btnSign;
let getLabel = document.querySelector('#text__enter_first-field');

$(getLoginForm).validate({
	rules: {
		loginName: {
                  required: true, 
                  email: true,
                  minlength: 2,
            },
            loginPassword: {
                  required: true,
                  maxlength: 20,
                  minlength: 5,
            }
	},
      messages: {
            loginName: {
                  required: "Пожалуйста, введите эмаил",
                  email: "Пожалуйста введите валидный эмаил"
            },
            loginPassword:{
                  required: "Пожалуйста, введите пароль",
                  maxlength: "Пожалуйста, введите меньше чем 20 символов",
                  minlength: "Пожалуйста, введите больше чем 5 символов"
            }
      }
});

