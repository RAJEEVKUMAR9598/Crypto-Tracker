import React from 'react';

const CryptoCard = ({ crypto }) => {
  const priceChange24h = crypto.quote.USD.percent_change_24h;
  const priceChange7d = crypto.quote.USD.percent_change_7d;
  const changeClass = priceChange24h > 0 ? 'positive' : 'negative';

  return (
    <div className="crypto-card">
      <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`} alt={crypto.name} />
      <h2>{crypto.name} ({crypto.symbol})</h2>
      <p>Current Price: ${crypto.quote.USD.price.toFixed(2)}</p>
      <p className={changeClass}>24h: {priceChange24h.toFixed(2)}%</p>
      <p className={changeClass}>7d: {priceChange7d.toFixed(2)}%</p>
    </div>
  );
};

export default CryptoCard;
