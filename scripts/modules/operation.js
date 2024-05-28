export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation)
    this.activeClass = activeClass
  }

  dadosOperation() {
    this.diasSemana = this.operation.dataset.semana.split(",").map(Number)
    this.horarioSemana = this.operation.dataset.horario.split(",").map(Number)
  }

  dadosAgora() {
    this.dataAgora = new Date()
    this.diaAgora = this.dataAgora.getDay()
    this.horarioAgora = this.dataAgora.getUTCHours() - 3
  }

  estaAberto() {
    const semanaOpen = this.diasSemana.indexOf(this.diaAgora) !== -1
    const horarioOpen =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1]
    return semanaOpen && horarioOpen
  }

  activeOpen() {
    if (this.estaAberto()) {
      this.operation.classList.add(this.activeClass)
    }
  }
  init() {
    if (this.operation) {
      this.dadosOperation()
      this.dadosAgora()
      this.activeOpen()
    }
    return this
  }
}
