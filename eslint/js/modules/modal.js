function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  function modalAbrir(e) {
    e.preventDefault();
    containerModal.classList.add('ativo');
  }
  function modalFechar() {
    containerModal.classList.remove('ativo');
  }

  function clicarForaModal(event) {
    if (event.target === this) {
      modalFechar();
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', modalAbrir);

    botaoFechar.addEventListener('click', modalFechar);

    containerModal.addEventListener('click', clicarForaModal);
  }
}
export default initModal;
