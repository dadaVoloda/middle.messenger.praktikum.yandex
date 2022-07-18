import tpl from './500.hbs';

const data = {
  title: 'Вход',
  inputs: ['Логин', 'Пароль'],
};

export default tpl(data);
