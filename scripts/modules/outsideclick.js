export default function outSideClick(element, events, callback) {
  const html = document.documentElement
  const outside = 'data-outside'

  function handleOutsideCkick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside)
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideCkick)
      })
      callback()
    }
  }
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideCkick)
      })
    })
    element.setAttribute(outside, '')
  }
}
