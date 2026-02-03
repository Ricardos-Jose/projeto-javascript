function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-accordion="accordion"] dt',
  );
  const activeClass = 'ativo';
  function ativeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener('click', ativeAccordion);
    });
  }
}
export default initAccordion;
