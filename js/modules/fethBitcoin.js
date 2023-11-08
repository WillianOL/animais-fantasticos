export default async function initFetchBitcoin() {
  try {
    const spanBitcoin = document.querySelector('.bitcoinPreco');
    const response = await fetch('https://www.blockchain.com/pt/ticker');
    const json = await response.json();
    const bitcoin = (10000 / json.BRL.sell).toFixed(4);
    spanBitcoin.innerText = bitcoin;
  } catch (erro) {
    console.log(erro);
  }
}
