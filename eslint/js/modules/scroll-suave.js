export default class ScrollSuave {
  constructor(links, options) {
    this.linkInterno = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollSection = this.scrollSection.bind(this);
  }

  scrollSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  addLinkEvent() {
    this.linkInterno.forEach((link) => {
      link.addEventListener('click', scrollSection);
    });
  }

  init() {
    if (this.linkInterno.length) {
      this.addLinkEvent();
      return this;
    }
  }
}
