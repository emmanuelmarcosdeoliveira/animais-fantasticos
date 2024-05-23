import scrollSoft from "./modules/initScroll.js"
import initAccordion from "./modules/accordion.js"
import activeTabs from "./modules/activeTabs.js"
import initAnimationScroll from "./modules/animationScroll.js"
import initModal from "./modules/modal.js"
import InitTolltip from "./modules/tooltip.js"
import initDropdownMenu from "./modules/dropdown-menu.js"
import initMenuMobile from "./modules/menu-mobile.js"
import initOperation from "./modules/operation.js"
import initFetchAnimais from "./modules/fetch-animais.js"
import initFetchBitcoin from "./modules/fetch-bitcoin.js"

const ScrollSoft = new scrollSoft('[data-menu="smoth"] a[href^="#"]')
ScrollSoft.init()

activeTabs()
initAccordion()
initAnimationScroll()
initModal()
InitTolltip()
initDropdownMenu()
initMenuMobile()
initOperation()
initFetchAnimais()
initFetchBitcoin()
