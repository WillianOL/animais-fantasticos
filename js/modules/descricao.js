const menuClick = document.querySelectorAll('.js-listaAnimais img');
const descricaoAnimais = document.querySelectorAll('.js-descricao-tabs section');
descricaoAnimais[0].classList.add('ativado'); // Adiciona o conteúdo para não ficar sem nada inicialmente

function mostrarInfo(index) {
  descricaoAnimais.forEach((itens) => {
    itens.classList.remove('ativado');
  });
  descricaoAnimais[index].classList.add('ativado');
}

export default function initDescricao() {
  if (menuClick.length && descricaoAnimais.length) {
    // Só vai executar se os dois elementos existirem na tela.
    // função recebendo o index do forEach para adicionar a classe a section de acordo com a img.
    menuClick.forEach((imgs, index) => {
      // Criando a função de click para todas as imagens.
      imgs.addEventListener('click', () => {
        mostrarInfo(index);
      });
    });
  }
}
