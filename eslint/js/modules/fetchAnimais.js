import initNumeros from './numeros.js';

export default function initFetchAnimais() {
  async function fetchApi(url) {
    try {
      const divGrid = document.querySelector('.numeros-grid');
      const response = await fetch(url);
      const responseJSON = await response.json();
      responseJSON.forEach((animal) => {
        const divNova = criarDiv(animal);

        divGrid.appendChild(divNova);
      });
      initNumeros();
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
