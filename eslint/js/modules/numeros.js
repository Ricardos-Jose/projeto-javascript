export default class AnimaNumeros {
  constructor(numeros, numeroarea, observerClass) {
    this.numerosTodos = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(numeroarea);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  static incremento(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numerosTodos.forEach((numero) => this.constructor.incremento(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  eventObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }
  init() {
    if (this.numerosTodos.length && this.observerTarget && this.observerClass) {
      this.eventObserver();
    }
    return this;
  }
}
