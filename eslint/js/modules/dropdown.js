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
// TENTATIVA
// import outsideClick from './cliqueFora.js';
// export default class DropDown {
//   constructor(menus) {
//     this.dropdownMenus = document.querySelectorAll(menus);
//     this.handleClick = this.handleClick.bind();
//   }
//   adicionarEventDrop() {
//     this.dropdownMenus.forEach((menu) => {
//       ['touchstart', 'click'].forEach((eventoUsuario) => {
//         menu.addEventListener(eventoUsuario, this.handleClick);
//       });
//     });
//   }

//   handleClick(e) {
//     e.preventDefault();
//     e.classList.add('active');
//     outsideClick(this, ['click', 'touchstart'], () => {
//       this.classList.remove('active');
//     });
//   }
//   init() {
//     this.handleClick();
//     return this;
//   }
// }
