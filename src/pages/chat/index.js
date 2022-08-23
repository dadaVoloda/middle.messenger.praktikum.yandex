import tpl from './chat.hbs'
import search from '../../components/search'
import './chat.scss'

const data = {
  search: search(),
}

document.addEventListener('DOMContentLoaded', () => {
  const users = document.querySelectorAll('.js-user-chat')
  const btnBack = document.querySelector('.js-chat-back')
  const feed = document.querySelector('.chat-feed')

  if (users) {
    users.forEach((user) => {
      user.addEventListener('click', () => {
        feed.classList.add('active')
      })
    })
  }
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      feed.classList.remove('active')
    })
  }

  const settingsBtn = document.querySelector('.chat-feed-top__settings-btn')
  const toggleActive = (e) => {
    e.stopPropagation()
    const { target } = e
    target.classList.toggle('active')
  }
  if (settingsBtn) {
    settingsBtn.addEventListener('click', toggleActive)
  }
})

export default tpl(data)
