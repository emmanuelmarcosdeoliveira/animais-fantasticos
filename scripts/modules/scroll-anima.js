import debounce from "./debounce.js"

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowMetade = window.innerHeight * 0.6
    this.checkDistance = debounce(this.checkDistance.bind(this), 20)
  }
  // Pega a distancia de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade)
      }
    })
  }
  //Verifica a distancia em cada objeto em
  // em relaçao ao site

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("active")
      } else if (item.element.classList.contains("active")) {
        item.element.classList.remove("active")
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener("scroll", this.checkDistance)
    }
    return this
  }
  // Remove o evento de scroll
  toDestroy() {
    window.removeEventListener("scroll", this.checkDistance)
  }
}
