export default class outsideClick {
  constructor(elements, events, callback) {
    this.html = document.documentElement;
    this.outside = 'data-outside';
  }
  validacao() {
    if (!this.elements.hasAttribute(this.outside)) {
      this.events.forEach((userEvent) => {
        setTimeout(() =>
          html.addEventListener(userEvent, () => this.handleOutsideClick),
        );
      });
      this.elements.setAttribute(this.outside, '');
    }
  }

  handleOutsideClick(event) {
    if (!this.elements.contains(event.target)) {
      this.elements.removeAttribute(outside);
      this.events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
  initOutside() {
    this.handleOutsideClick();
    return this;
  }
}
