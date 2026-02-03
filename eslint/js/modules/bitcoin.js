export default async function initBitcoin() {
  try {
    const bitCoin = await fetch('https://blockchain.info/ticker');
    const json = await bitCoin.json();
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = json.BRL.buy.toFixed(4);
  } catch (erro) {}
}
