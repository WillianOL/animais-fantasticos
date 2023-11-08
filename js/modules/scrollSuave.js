export default function iniScrollSuave() {
  const menuLinks = document.querySelectorAll('.menu-js a[href^="#"]'); // Selecionando todos os links internos.

  function scrollParaSection(event) {
    event.preventDefault(); // Desabilitando o comportamento padrão do link interno.
    const link = event.target.getAttribute('href'); // Pegando o atributo href dos links.
    const section = document.querySelector(link); // Selecionando a section atravéz de seu href

    section.scrollIntoView({
      // Vai dar o scroll até a section relacionada com o link interno, dando um scroll suave.
      behavior: 'smooth',
    });
  }

  menuLinks.forEach((links) => {
    // Adicionando a função de click em casa a.
    links.addEventListener('click', scrollParaSection);
  });
}
