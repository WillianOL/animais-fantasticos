export default class ScrollSuave {
  constructor(links, opcoes) {
    this.linksInternos = document.querySelectorAll(links);
    if (opcoes === undefined) {
      this.opcoes = { behavior: 'smooth', block: 'start' };
    } else {
      this.opcoes = opcoes;
    }
    this.scrollParaSection = this.scrollParaSection.bind(this);
  }

  scrollParaSection(event) {
    console.log(event);
    event.preventDefault();
    const link = event.target.getAttribute('href');
    const section = document.querySelector(link);
    section.scrollIntoView(this.opcoes);
  }

  addLinkEvent() {
    this.linksInternos.forEach((links) => {
      links.addEventListener('click', this.scrollParaSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
