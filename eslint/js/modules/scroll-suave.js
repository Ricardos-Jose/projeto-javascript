export default function initScrollSuave() {
  const linkInterno = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  // 1 maneira, calcula o topo do elemento
  //   const topo = section.offsetTop;
  //   window.scrollTo({
  //     top: topo,
  //     behavior: 'smooth',
  //   });
  // }

  linkInterno.forEach((link) => {
    link.addEventListener('click', scrollSection);
  });
}
