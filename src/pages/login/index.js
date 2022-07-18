import tpl from './login.hbs';

const data = {
  title: 'Вход',
  inputs: [
    {
      label: 'Логин',
      name: 'login',
      type: 'text',
      autocomplete: 'true',
    },
    {
      label: 'Пароль',
      name: 'password',
      type: 'password',
      autocomplete: 'false',
    },
  ],
  btnText: 'Авторизоваться',
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
