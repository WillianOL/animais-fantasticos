const descricaoAnimais = document.querySelectorAll('.js-descricao-tabs section');
descricaoAnimais[0].classList.add('ativado'); // Adiciona o conteúdo para não ficar sem nada inicialmente
export default function initAnimationScroll() {
  const sections = document.querySelectorAll('section'); // Selecionando tudas as sections
  sections[0].classList.add('animationSection');

  function animationScroll() {
    sections.forEach((section) => {
      // Pegando o topo de cada section -500 para aumentar a distancia de contato
      const topSection = section.getBoundingClientRect().top - 500;
      if (topSection < 0) {
        // Se topo for < que 0, adicionar a classe da animação
        section.classList.add('animationSection');
      } else if (section.classList.contains('animationSection')) {
        section.classList.remove('animationSection');
      }
    });
  }
  window.addEventListener('scroll', animationScroll);
}
initAnimationScroll();
