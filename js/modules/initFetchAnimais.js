import initAnimaNumeros from './animaNumeros.js';

function criarAnimal(animal) {
  const div = document.createElement('div');
  div.classList.add('numero-animais');
  div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.numero}</span>`;
  return div;
}

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const response = await fetch(url);
    const animaisJSON = await response.json();
    const conteiner = document.querySelector('.numeros-grid');
    animaisJSON.forEach((animal) => {
      const animaisDiv = criarAnimal(animal);
      conteiner.appendChild(animaisDiv);
    });
    initAnimaNumeros();
  }

  fetchAnimais('./animaisApi.json');
}
