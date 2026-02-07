import outsideClick from './cliqueFora.js';
export default class Mobile {
  constructor(areaMenu, areaMenuLista, events) {
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = this.events;
    this.menuButton = document.querySelector(areaMenu);
    this.menuList = document.querySelector(areaMenuLista);
    this.openMenu = this.openMenu.bind(this);
    this.activeClass = 'active';
  }

  openMenu(event) {
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }
  addMenuMobileEvents() {
    this.events.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuMobileEvents();
    return this;
  }
}
