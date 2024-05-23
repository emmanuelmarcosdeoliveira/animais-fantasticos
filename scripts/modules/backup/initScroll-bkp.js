//---------------------------------------------------------------------
// Scroll suave link intenro
//---------------------------------------------------------------------
export default function initScroll() {
  const linksInterno = document.querySelectorAll(
    '[data-menu="smoth"] a[href^="#"]'
  )

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  linksInterno.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
