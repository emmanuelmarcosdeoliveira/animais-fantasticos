import outSideClick from "./outsideclick.js"

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton)
    this.menuList = document.querySelector(menuList)
    this.activeClass = "active"
    //define touch start e click como argumento padrão
    // de events caso ususário nào defina nada
    if (events === undefined) this.events = ["touchstart", "click"]
    else this.events = events

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass)
    this.menuButton.classList.add(this.activeClass)
    outSideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass)
      this.menuButton.classList.remove(this.activeClass)
    })
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    )
  }
  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents()
    }
    return this
  }
}
