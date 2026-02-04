import AnimaNumeros from './numeros.js';

function initFetchAnimais() {
  async function fetchApi(url) {
    try {
      const divGrid = document.querySelector('.numeros-grid');
      const response = await fetch(url);
      const responseJSON = await response.json();
      responseJSON.forEach((animal) => {
        const divNova = criarDiv(animal);

        divGrid.appendChild(divNova);
      });
      const anima = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      anima.init();
    } catch (erro) {}
  }

  function criarDiv(animal) {
    const div = document.createElement('div');
    div.classList.add('numeros-animal');
    div.innerHTML = `<h3 class="titulo">${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchApi('./animaisapi.json');
}

export default initFetchAnimais;
