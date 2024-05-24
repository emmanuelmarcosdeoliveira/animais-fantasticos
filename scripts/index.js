import scrollSoft from "./modules/initScroll.js"
import Accordion from "./modules/accordion.js"
import TabNav from "./modules/activeTabs.js"
import initModal from "./modules/modal.js"
import InitTolltip from "./modules/tooltip.js"
import initDropdownMenu from "./modules/dropdown-menu.js"
import initMenuMobile from "./modules/menu-mobile.js"
import initOperation from "./modules/operation.js"
import initFetchAnimais from "./modules/fetch-animais.js"
import initFetchBitcoin from "./modules/fetch-bitcoin.js"
import initAnimationScroll from "./modules/animationScroll.js"

const ScrollSoft = new scrollSoft('[data-menu="smoth"] a[href^="#"]')
ScrollSoft.init()
const accordion = new Accordion("[data-anime='accordion'] dt")
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
)
tabNav.init()

initAnimationScroll()
initModal()
InitTolltip()
initDropdownMenu()
initMenuMobile()
initOperation()
initFetchAnimais()
initFetchBitcoin()
