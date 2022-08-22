import tpl from './profile.hbs'
import './profile.scss'
import avatar from '../../assets/img/default-avatar.svg'

const data = {
  avatar,
  fields: [
    {
      label: 'Почта',
      type: 'text',
      name: 'email',
      value: 'pochta@yandex.ru',
    },
    {
      label: 'Логин',
      type: 'text',
      name: 'login',
      value: 'ivanivanov',
    },
    {
      label: 'Имя',
      type: 'text',
      name: 'first_name',
      value: 'Иван',
    },
    {
      label: 'Фамилия',
      type: 'text',
      name: 'second_name',
      value: 'Иванов',
    },
    {
      label: 'Имя в чате',
      type: 'text',
      name: 'display_name',
      value: 'Иван',
    },
    {
      label: 'Телефон',
      type: 'tel',
      name: 'phone',
      value: '+7 (909) 967 30 30',
    },
  ],
}

export default tpl(data)
