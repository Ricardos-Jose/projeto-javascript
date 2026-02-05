export default class scrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.userHalfWindow = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this);
  }
  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.userHalfWindow < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      window.addEventListener('scroll', this.animaScroll);
    }
  }
}
