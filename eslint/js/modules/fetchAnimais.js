import AnimaNumeros from './numeros.js';

export default function fetchApi(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numeros-animal');
    div.innerHTML = `<h3 class="titulo">${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaNumeros() {
    const anima = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    anima.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaNumeros();
    } catch (erro) {}
  }
  return criarAnimais();
}
