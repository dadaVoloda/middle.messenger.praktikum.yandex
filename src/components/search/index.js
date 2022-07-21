import search from './search.hbs'
import toggleActive from '../../utils/toggleActiveInputText'

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.search__input');

  input.addEventListener('input', (e) => toggleActive(e, '.search', '.search__label-text-wrapper'));
});

export default () => search()