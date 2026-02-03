function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function ativeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo');
    });
    const animacaoAoShow = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', animacaoAoShow);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        ativeTab(index);
      });
    });
  }
}
export default initTabNav;
