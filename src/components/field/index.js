import field from './field.hbs'
import './field.scss'

export default (type, name, autocomplete, label) => field({type, name, autocomplete, label})