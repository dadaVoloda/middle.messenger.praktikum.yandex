import tpl from './404.hbs';

const data = {
  title: 'Вход',
  inputs: ['Логин', 'Пароль'],
};

export default tpl(data);
