export default async function Bitcoin(url, target) {
  try {
    const bitCoin = await fetch(url);
    const json = await bitCoin.json();
    const btcPreco = document.querySelector(target);
    btcPreco.innerText = json.BRL.buy.toFixed(4);
  } catch (erro) {}
}
