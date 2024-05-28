import outSideClick from "./outsideclick.js"

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    //define touch start e click como argumento padrão
    // de events caso ususário nào defina nada
    if (events === undefined) this.events = ["touchstart", "click"]
    else this.events = events
    this.activeClass = "active"
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  // Ativa o Dropdown Menu e adiciona a funçào
  // que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outSideClick(element, this.events, () => {
      element.classList.remove("active")
    })
  }
  // Adiciona os eventos ao dropdownMenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent()
    }
    return this
  }
}
