export default function initInfo() {
  const faqBtns = document.querySelectorAll('.js-showAnimais h2');
  const showP = 'showP'; // Definindo a classe CSS em uma constante para uma futura modificação

  faqBtns[0].nextElementSibling.classList.add(showP); // Deixa o primeiro item visível na tela.

  function mostrarInfoFaq() {
    // função para clicar e adicionar a classe ao item abaixo do clicado.
    this.nextElementSibling.classList.toggle(showP);
  }

  faqBtns.forEach((item) => {
    // Crianco a função com evento de click a todos os h2
    item.addEventListener('click', mostrarInfoFaq);
  });
}
