export default class TabNav {
  constructor(tabmenu, conteudo) {
    this.tabMenu = document.querySelectorAll(tabmenu);
    this.tabContent = document.querySelectorAll(conteudo);
    this.activeClass = 'ativo';
  }

  ativeTab(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove(this.activeClass);
    });
    const animacaoAoShow = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add('ativo', animacaoAoShow);
  }
  initEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.ativeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.initEvent();
      this.ativeTab(0);
    }
  }
}
