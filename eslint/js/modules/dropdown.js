import outsideClick from './cliqueFora.js';

export default function initDropDown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((eventoUsuario) => {
      menu.addEventListener(eventoUsuario, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('active');
    });
  }
}
