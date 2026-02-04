export default class Tooltip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }
  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    if (event.pageY + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 190 + 'px';
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  criarTooltip(elemento) {
    const tooltipBox = document.createElement('div');
    const text = elemento.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  onMouseOver(event) {
    this.criarTooltip(event.currentTarget);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  tooltipEvent() {
    this.tooltips.forEach((i) => {
      i.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.tooltipEvent();
      return this;
    }
  }
}
