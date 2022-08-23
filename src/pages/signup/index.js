import tpl from './signup.hbs';
import loginForm from '../../components/login-form';
import button from '../../components/button';
import field from '../../components/field';

const data = {
  loginForm: loginForm(
    'Регистрация',
    [
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
    button('login-form__btn', 'submit', 'Зарегистрироваться'),
    {
      path: '/',
      text: 'Войти'
    }
  )
};

export default tpl(data);
