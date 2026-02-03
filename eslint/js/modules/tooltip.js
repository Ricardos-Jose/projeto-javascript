export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  if (tooltips.length) {
    tooltips.forEach((i) => {
      i.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver(event) {
      const tooltipBox = criarTooltip(this);
      tooltipBox.style.top = event.pageY + 'px';
      tooltipBox.style.left = event.pageX + 'px';
      onMouseMove.tooltipBox = tooltipBox;
      onMouseLeave.tooltipBox = tooltipBox;
      this.addEventListener('mouseleave', onMouseLeave);
      onMouseLeave.element = this;
      this.addEventListener('mousemove', onMouseMove);
    }

    const onMouseLeave = {
      tooltipBox: '',
      element: '',
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
      },
    };

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
      },
    };

    function criarTooltip(elemento) {
      const tooltipBox = document.createElement('div');
      const text = elemento.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }
  }
}
