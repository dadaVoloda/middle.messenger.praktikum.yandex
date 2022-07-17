import './login.scss';
import tpl from './login.hbs';

const data = {
  title: 'Вход',
  inputs: ['Логин', 'Пароль'],
};

export default tpl(data);
