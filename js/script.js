import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scrollAnima.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
const modal = new Modal('[data-modal="container"]', '[data-modal="abrir"]', '[data-modal="fechar"]');
const tooltip = new Tooltip('[data-tooltip]');
const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();
scrollSuave.init();
accordion.init();
tabNav.init();
modal.init();
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();

fetchAnimais('../../animaisApi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
