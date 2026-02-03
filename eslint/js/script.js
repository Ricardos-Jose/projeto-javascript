import ScrollSuave from './modules/scroll-suave.js';
import initScrollSite from './modules/animacao-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/animacao-tabnav-menu.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
import initMobile from './modules/mobile-menu.js';
import initDate from './modules/date-object.js';
import initFetch from './modules/fetchAnimais.js';
import initBitcoin from './modules/bitcoin.js';
initScrollSite();

initModal();
initTooltip();
initDropDown();
initMobile();
initDate();
initFetch();
initBitcoin();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-accordion="accordion"] dt');
accordion.initAccordion();
scrollSuave.init();
const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();
