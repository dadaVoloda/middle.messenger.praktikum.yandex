import tpl from './login.hbs';
import button from '../../components/button';
import field from '../../components/field';
import toggleActive from '../../utils/toggleActiveInputText';

const data = {
  title: 'Вход',
  inputs: [
    {
      field: field('text', 'login', 'true', 'Логин')
    },
    {
      field: field('password', 'password', 'false', 'Пароль')
    }
  ],
  button: button('login-form__btn', 'submit', 'Авторизоваться'),
  linkText: 'Нет аккаунта?',
  linkPath: '/signup',
};

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.field__input');
  
  [...inputs].forEach((inp) => {
    inp.addEventListener('input', (e) => toggleActive(e, '.field', '.field__label-text'));
  });
});

export default tpl(data);
