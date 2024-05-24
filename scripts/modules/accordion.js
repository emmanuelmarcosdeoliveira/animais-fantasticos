export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list)
    this.activeClass = "active"
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass)
    item.nextElementSibling.classList.toggle(this.activeClass)
  }
  //Adiciona os Eventos ao Accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item))
    })
  }
  // Iniciar função
  init() {
    if (this.accordionList.length) {
      //Ativar primeiro Item
      this.toggleAccordion(this.accordionList[0])
      this.addAccordionEvent()
    }
    return this
  }
}
