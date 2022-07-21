import tpl from './500.hbs';
import error from '../../components/error';

const data = {
  error: error('500', 'Мы уже фиксим', {path: '/', text: 'Назад к чатам'})
};

export default tpl(data);
