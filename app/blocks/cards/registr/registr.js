let getRegistrForm = document.querySelector('.registr-form');


$(getRegistrForm).validate({
	rules: {
		RegistrEmail: {
                  required: true, 
                  email: true,
                  minlength: 2,
            },
            RegistrPassword: {
                  required: true,
                  maxlength: 20,
                  minlength: 5,
            },
            SecondDate:{
                  required: true,
                  date: true,
            }
	},
      messages: {
            SecondDate: {
                  required: "Обязательное поле",
                  date: "Неправильный формат даты",
            },
            RegistrEmail: {
                  required: "Пожалуйста, введите эмаил",
                  email: "Пожалуйста введите валидный эмаил"
            },
            RegistrPassword:{
                  required: "Пожалуйста, введите пароль",
                  maxlength: "Пожалуйста, введите меньше чем 20 символов",
                  minlength: "Пожалуйста, введите больше чем 5 символов"
            }
      }
});