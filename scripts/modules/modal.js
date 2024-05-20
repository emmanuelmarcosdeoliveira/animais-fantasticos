export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const sectionModal = document.querySelector('[ data-modal="container"]');

  if (btnOpen && btnClose && sectionModal) {
    function toggleModal(event) {
      event.preventDefault();
      sectionModal.classList.toggle("active");
    }
    function outModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }
    btnOpen.addEventListener("click", toggleModal);
    btnClose.addEventListener("click", toggleModal);
    sectionModal.addEventListener("click", outModal);
  }
}
