import outsideClick from './cliqueFora.js';
export default class DropDown {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);
    this.handleClick = this.handleClick.bind(this);

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = this.events;

    this.activeClass = 'active';
  }

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
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
