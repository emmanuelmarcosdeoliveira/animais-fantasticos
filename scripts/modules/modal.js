export default class Modal {
  constructor(btnOPen, btnClose, sectionModal) {
    this.btnOpen = document.querySelector(btnOPen)
    this.btnClose = document.querySelector(btnClose)
    this.sectionModal = document.querySelector(sectionModal)
    //bind this ao callback para fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.outModal = this.outModal.bind(this)
  }

  // Abre ou fecha o Modal
  toggleModal() {
    this.sectionModal.classList.toggle("active")
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  // Fecha o Modal ao clicar do lado de fora
  outModal(event) {
    if (event.target === this.sectionModal) {
      this.toggleModal()
    }
  }

  // Adiciona os eventos ao elemento do Modal
  addModalEvent() {
    this.btnOpen.addEventListener("click", this.eventToggleModal)
    this.btnClose.addEventListener("click", this.eventToggleModal)
    this.sectionModal.addEventListener("click", this.outModal)
  }

  init() {
    if (this.btnOpen && this.btnClose && this.sectionModal) {
      this.addModalEvent()
    }
    return this
  }
}
