import tpl from './404.hbs';
import error from '../../components/error';

const data = {
  error: error('404', 'Не туда попали', {path: '/', text: 'Назад к чатам'})
};

export default tpl(data);
