import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/animacao-tabnav-menu.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropDown from './modules/dropdown.js';
import Mobile from './modules/mobile-menu.js';
import fetchApi from './modules/fetchAnimais.js';
import Bitcoin from './modules/bitcoin.js';
import Funcionamento from './modules/date-object.js';
import { SlideNav } from './modules/slide.js';

Bitcoin('https://blockchain.info/ticker', '.btc-preco');
fetchApi('./animaisapi.json', '.numeros-grid');

const slide = new SlideNav('.slide', '.holder');
slide.init();

slide.addControl('.custom-control');

const dropDown = new DropDown('[data-dropdown]');
dropDown.init();
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-accordion="accordion"] dt');
accordion.initAccordion();
scrollSuave.init();
const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.initModal();
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();
tabNav.init();

// scroll anima

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

// menu mobile
const eventos = ['touchstart', 'click'];
const menu = new Mobile('[data-menu="button"]', '[data-menu="list"]');
menu.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();
