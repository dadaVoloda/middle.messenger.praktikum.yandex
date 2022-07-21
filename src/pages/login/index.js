import tpl from './login.hbs';
import button from '../../components/button';
import field from '../../components/field';

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
  const toggleActive = (e) => {
    const { target } = e;
    const wrapper = target.closest('.field');
    const label = wrapper.querySelector('.field__label-text');
    if (target.value) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  };
  [...inputs].forEach((inp) => {
    inp.addEventListener('input', toggleActive);
  });
});

export default tpl(data);
