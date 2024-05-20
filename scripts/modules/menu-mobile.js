import outSideClick from './outsideclick.js'

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const eventos = ['click', 'touchstart']

  if (menuButton) {
    function openMenu() {
      menuList.classList.add('active')
      menuButton.classList.add('active')
      outSideClick(menuList, eventos, () => {
        menuList.classList.remove('active')
        menuButton.classList.remove('active')
      })
    }
    eventos.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu)
    })
  }
}
