import scrollSoft from "./modules/initScroll.js"
import Accordion from "./modules/accordion.js"
import TabNav from "./modules/activeTabs.js"
import Modal from "./modules/modal.js"
import Tooltip from "./modules/tooltip.js"
import DropdownMenu from "./modules/dropdown-menu.js"
import MenuMobile from "./modules/menu-mobile.js"
import Operation from "./modules/operation.js"
import fetchAnimais from "./modules/fetch-animais.js"
import fetchBitcoin from "./modules/fetch-bitcoin.js"
import ScrollAnima from "./modules/scroll-anima.js"

const ScrollSoft = new scrollSoft('[data-menu="smoth"] a[href^="#"]')
ScrollSoft.init()
const accordion = new Accordion("[data-anime='accordion'] dt")
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
)
tabNav.init()

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[ data-modal="container"]'
)
modal.init()

const tooltip = new Tooltip("[data-tooltip]")
tooltip.init()

const scrollAnima = new ScrollAnima("[data-anime='scroll']")
scrollAnima.init()

const dropdownMenu = new DropdownMenu("[data-dropdown]")
dropdownMenu.init()
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

const operation = new Operation("[data-semana]", "open")
operation.init()

fetchAnimais("../../animaisapi.json", ".numeros-grid")
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco")
