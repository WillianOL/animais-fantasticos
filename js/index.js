import ScrollSuave from './modules/scrollSuave.js';
import initDescricao from './modules/descricao.js';
import initInfo from './modules/mostrarInfo.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tolltip.js';
import initDropDawnMenu from './modules/dropDawnMenu.js';
import initMenuMObile from './modules/menuMobile.js';
import initAnimationScroll from './modules/animation-scroll.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/initFetchAnimais.js';
import initFetchBitcoin from './modules/fethBitcoin.js';

const scrollsuave = new ScrollSuave('.menu-js a[href^="#"]');
scrollsuave.init();

initModal();
initDescricao();
initInfo();
initTooltip();
initDropDawnMenu();
initMenuMObile();
initAnimationScroll();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
