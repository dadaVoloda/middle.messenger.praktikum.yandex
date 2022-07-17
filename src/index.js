import login from './pages/login';
import signup from './pages/signup';

import './styles/style.scss';

const root = document.querySelector('#root');

const routes = {
  '/': login,
  '/signup': signup,
};

const path = window.location.pathname;
root.innerHTML = routes[path];
