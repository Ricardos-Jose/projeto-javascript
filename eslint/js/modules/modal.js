export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
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

    botaoAbrir.addEventListener('click', modalAbrir);

    botaoFechar.addEventListener('click', modalFechar);

    containerModal.addEventListener('click', clicarForaModal);
  }
}
