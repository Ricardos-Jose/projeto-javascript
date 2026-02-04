export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.eventModal = this.eventModal.bind(this);
    this.clicarForaModal = this.clicarForaModal.bind(this);
  }

  toggleEvent() {
    this.containerModal.classList.toggle('ativo');
  }
  eventModal(event) {
    event.preventDefault();
    this.toggleEvent();
  }

  clicarForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleEvent();
    }
  }

  modalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventModal);

    this.botaoFechar.addEventListener('click', this.eventModal);

    this.containerModal.addEventListener('click', this.clicarForaModal);
  }
  initModal() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.modalEvents();
    }
    return this;
  }
}
