import './assets/styles/main.scss'

import login from './pages/login'
import signup from './pages/signup'
import page404 from './pages/404'
import page500 from './pages/500'
import chat from './pages/chat'
import navigation from './pages/navigation'
import profile from './pages/profile'

const root = document.querySelector('#root')

const routes = {
  '/': navigation,
  '/profile': profile,
  '/chat': chat,
  '/login': login,
  '/signup': signup,
  '/page404': page404,
  '/page500': page500,
}

const path = window.location.pathname
root.innerHTML = routes[path]
