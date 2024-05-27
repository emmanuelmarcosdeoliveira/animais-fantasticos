export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass
    // bind o this do objeto  ao callback da mutaçào
    this.handleMutation = this.handleMutation.bind(this)
  }

  // Recebe um elmento do Dom com numero em seu texto
  // Incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText
    const incremento = Math.floor(total / 100)
    let start = 0
    const timer = setInterval(() => {
      start += incremento
      numero.innerText = start
      if (start > total) {
        numero.innerText = total
        clearInterval(timer)
      }
    }, 25 * Math.random())
  }

  // Ativa incrementar numero para cada
  // Numero selecionado do Dom
  aninaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero))
  }
  // Funçào que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.aninaNumeros()
    }
  }
  //Adiciona o MutationObserver para verificar
  // Quando a classe active é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }
  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this
  }
}
