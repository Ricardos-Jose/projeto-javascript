function initScrollSite() {
  const metadeWindow = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - metadeWindow < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
export default initScrollSite;
