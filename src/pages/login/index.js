import tpl from './login.hbs';
import loginForm from '../../components/login-form';
import button from '../../components/button';
import field from '../../components/field';
import toggleActive from '../../utils/toggleActiveInputText';

const data = {
  loginForm: loginForm(
    'Вход',
    [
      {
        field: field('text', 'login', 'true', 'Логин')
      },
      {
        field: field('password', 'password', 'false', 'Пароль')
      }
    ],
    button('login-form__btn', 'submit', 'Авторизоваться'),
    {
      path: '/signup',
      text: 'Нет аккаунта?'
    }
  )
};

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.field__input');
  
  [...inputs].forEach((inp) => {
    inp.addEventListener('input', (e) => toggleActive(e, '.field', '.field__label-text'));
  });
});

export default tpl(data);
