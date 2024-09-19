import React, { useEffect, useState } from 'react';
import cryptoData from '../data/cryptocurrencies.json'; // Adjust the path based on your folder structure
import './HomePage.css';

const HomePage = () => {
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API by using local JSON
    setCryptoList(cryptoData);
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Cryptocurrency Tracker</h1>
        <p>Track the latest trends and updates in the world of cryptocurrencies.</p>
        <div className="search-section">
          <input type="text" placeholder="Search for a cryptocurrency..." />
          <button>Search</button>
        </div>
      </div>
      <div className="crypto-list">
        {cryptoList && cryptoList.length > 0 ? (
          cryptoList.map((crypto) => (
            <div className="crypto-card" key={crypto.id}>
              <img src={crypto.logo} alt={crypto.name} className="crypto-logo" />
              <div className="crypto-info">
                <h3>{crypto.name}</h3>
                <div className="crypto-price">${crypto.price}</div>
                <div
                  className={`crypto-change ${crypto.change >= 0 ? 'positive' : 'negative'}`}
                >
                  {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cryptocurrencies available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
