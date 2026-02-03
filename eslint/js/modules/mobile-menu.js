import outsideClick from './cliqueFora.js';

export default function initMobile() {
  const eventos = ['touchstart', 'click'];
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  function openMenu(event) {
    menuButton.classList.add('active');
    menuList.classList.add('active');
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }
  eventos.forEach((evento) => {
    menuButton.addEventListener(evento, openMenu);
  });
}
