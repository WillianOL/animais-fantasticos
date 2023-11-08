export default function initModal() {
  const containerModal = document.querySelector('[data-modal="conteiner"]');
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function fecharClickForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (containerModal && btnAbrir && btnFechar) {
    btnFechar.addEventListener('click', toggleModal);
    btnAbrir.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', fecharClickForaModal);
  }
}
