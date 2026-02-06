// import outsideClick from './cliqueFora.js';
// export default function initDropDown() {
//   const dropdownMenus = document.querySelectorAll('[data-dropdown]');

//   dropdownMenus.forEach((menu) => {
//     ['touchstart', 'click'].forEach((eventoUsuario) => {
//       menu.addEventListener(eventoUsuario, handleClick);
//     });
//   });

//   function handleClick(e) {
//     e.preventDefault();
//     this.classList.add('active');
//     outsideClick(this, ['click', 'touchstart'], () => {
//       this.classList.remove('active');
//     });
//   }
// }
// TENTATIVA
import outsideClick from './cliqueFora.js';
export default class DropDown {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);
    this.handleClick = this.handleClick.bind();
    this.activeClass = 'active';
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = this.events;
  }

  handleClick(e) {
    e.preventDefault();
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.currentTarget.classList.remove(this.activeClass);
    });
  }
  adicionarEventDrop() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((eventoUsuario) => {
        menu.addEventListener(eventoUsuario, this.handleClick);
      });
    });
  }
  init() {
    if (this.dropdownMenus.length) {
      this.adicionarEventDrop();
    }
    return this;
  }
}
