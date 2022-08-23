import form from './login-form.hbs'
import './login-form.scss'

export default (title, inputs, button, link) => form({
  title, inputs, button, link
})