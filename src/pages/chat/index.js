import tpl from './chat.hbs';
import search from '../../components/search';


const data = {
  search: search()
};

export default tpl(data);