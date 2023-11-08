export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  function animaNumeros() {
    numeros.forEach((numero) => {
      const total = +numero.innerHTML;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerHTML = start;
        if (start > total) {
          numero.innerHTML = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('animationSection')) {
      // Vai desconectar o observador, fazendo ele parar de observar a section
      observador.disconnect();
      animaNumeros();
    }
  }
  const observeTarget = document.querySelector('.numeros');
  const observador = new MutationObserver(handleMutation);
  observador.observe(observeTarget, { attributes: true });
}
