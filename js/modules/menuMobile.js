import clickOutSide from './outSideClick.js';

export default function initMenuMObile() {
  const menuBotton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuBotton.classList.add('ativo');
    menuList.classList.add('ativo');
    clickOutSide(menuList, eventos, () => {
      menuBotton.classList.remove('ativo');
      menuList.classList.remove('ativo');
    });
  }

  eventos.forEach((event) => {
    menuBotton.addEventListener(event, openMenu);
  });
  menuBotton.addEventListener('click', openMenu);
}
