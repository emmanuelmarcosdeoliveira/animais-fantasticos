export default function initAnimaNumeros() {
  function aninaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')
    numeros.forEach((numeros) => {
      let start = 0
      const total = +numeros.innerText
      const timer = setInterval(() => {
        const incremento = Math.floor(total / 100)
        start = start + incremento
        numeros.innerText = start
        if (start > total) {
          numeros.innerText = total
          clearInterval(timer)
        }
      }, 50 * Math.random())
    })
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect()
      aninaNumeros()
    }
  }

  const observerTarget = document.querySelector('.numeros')
  const observer = new MutationObserver(handleMutation)
  observer.observe(observerTarget, { attributes: true })
}
