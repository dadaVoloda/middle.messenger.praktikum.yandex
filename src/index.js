import './styles/main.scss';

import login from './pages/login';
import signup from './pages/signup';
import page404 from './pages/404';
import page500 from './pages/500';

const root = document.querySelector('#root');

const routes = {
  '/': login,
  '/signup': signup,
  '/page404': page404,
  '/page500': page500,
};

const path = window.location.pathname;
root.innerHTML = routes[path];
