export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toglleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordinEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toglleAccordion(item));
    });
  }

  // Iniciar função
  init() {
    if (this.accordionList.length) {
      // ativar o primeiro item
      this.toglleAccordion(this.accordionList[0]);
      this.addAccordinEvent();
    }
    return this;
  }
}
