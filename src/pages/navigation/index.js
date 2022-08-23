import tpl from './navigation.hbs'

const data = {
  links: [, '/login', '/signup', '/chat', '/profile', '/page404', '/page500'],
}

export default tpl(data)
