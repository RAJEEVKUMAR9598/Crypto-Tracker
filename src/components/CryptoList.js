import React, { useEffect, useState } from 'react';
import { fetchCryptoList } from '../utils/api'; // Adjust the path if necessary

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCryptoData = async () => {
      try {
        const data = await fetchCryptoList();
        setCryptoData(data); // Update state with the fetched data
      } catch (error) {
        setError('Failed to fetch cryptocurrency data');
      }
    };

    getCryptoData();
  }, []);

  if (error) return <div>{error}</div>;
  if (!cryptoData.length) return <div>Loading...</div>;

  return (
    <div>
      {cryptoData.map((crypto) => (
        <div key={crypto.id}>
          <h2>{crypto.name}</h2>
          <p>{crypto.symbol}</p>
          <p>${crypto.quote.USD.price}</p> {/* Adjust based on actual data structure */}
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
