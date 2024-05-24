export default function activeTabs() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li")
  const tabContent = document.querySelectorAll("[data-tab='content'] section")
  tabContent[0].classList.add("active")

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("active")
    })
    const direcao = tabContent[index].dataset.anime
    tabContent[index].classList.add("active", direcao)
  }
  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index)
      })
    })
  }
}
