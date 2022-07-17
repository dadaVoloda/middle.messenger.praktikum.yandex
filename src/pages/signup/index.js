import './signup.scss';
import tpl from './signup.hbs';

const data = {
  title: 'Регистрация',
  inputs: ['Логин', 'Пароль'],
};

export default tpl(data);
