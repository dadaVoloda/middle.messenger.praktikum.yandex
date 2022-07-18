import tpl from './signup.hbs';

const data = {
  title: 'Регистрация',
  inputs: [
    {
      label: 'Почта',
      name: 'email',
      type: 'email',
      autocomplete: 'true',
    },
    {
      label: 'Логин',
      name: 'login',
      type: 'text',
      autocomplete: 'true',
    },
    {
      label: 'Имя',
      name: 'first_name',
      type: 'text',
      autocomplete: 'true',
    },
    {
      label: 'Фамилия',
      name: 'second_name',
      type: 'text',
      autocomplete: 'true',
    },
    {
      label: 'Телефон',
      name: 'phone',
      type: 'tel',
      autocomplete: 'true',
    },
    {
      label: 'Пароль',
      name: 'password',
      type: 'password',
      autocomplete: 'false',
    },
    {
      label: 'Пароль (ещё раз)',
      name: 'password',
      type: 'password',
      autocomplete: 'false',
    },
  ],
  btnText: 'Зарегистрироваться',
  linkText: 'Войти',
  linkPath: '/',
};

export default tpl(data);
