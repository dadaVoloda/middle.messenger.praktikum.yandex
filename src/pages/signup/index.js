import tpl from './signup.hbs';
import button from '../../components/button';
import field from '../../components/field';

const data = {
  title: 'Регистрация',
  inputs: [
    {
      field: field('email', 'email', 'true', 'Почта')
    },
    {
      field: field('text', 'login', 'true', 'Логин')
    },
    {
      field: field('text', 'first_name', 'true', 'Имя')
    },
    {
      field: field('text', 'second_name', 'true', 'Фамилия')
    },
    {
      field: field('tel', 'phone', 'true', 'Телефон')
    },
    {
      field: field('password', 'password', 'false', 'Пароль')
    },
    {
      field: field('password', 'password', 'false', 'Пароль (ещё раз)')
    }
  ],
  button: button('login-form__btn', 'submit', 'Зарегистрироваться'),
  linkText: 'Войти',
  linkPath: '/',
};

export default tpl(data);
