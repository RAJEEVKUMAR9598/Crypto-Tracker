import React, { useState, useEffect } from 'react';
import { fetchConversionRate } from '../utils/api';

const CryptoConverterPage = () => {
    const [rate, setRate] = useState(null);
    const [fromCurrency, setFromCurrency] = useState('BTC');
    const [toCurrency, setToCurrency] = useState('USD');

    useEffect(() => {
        const getConversionRate = async () => {
            try {
                const data = await fetchConversionRate(fromCurrency, toCurrency);
                console.log('API Response:', data); // Log the response for debugging
                setRate(data.data); // Adjust this based on the actual API response structure
            } catch (error) {
                console.error('Error fetching conversion rate:', error);
            }
        };

        getConversionRate(); // Fetch conversion rate when component mounts or currencies change
    }, [fromCurrency, toCurrency]);

    return (
        <div>
            <h1>Convert Cryptocurrencies</h1>
            <form>
                <label>
                    From:
                    <input
                        type="text"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    />
                </label>
                <label>
                    To:
                    <input
                        type="text"
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                    />
                </label>
                <button type="button" onClick={() => setRate(null)}>Convert</button>
            </form>
            {rate ? (
                <div>
                    <h2>Conversion Rate</h2>
                    <p>
                        {fromCurrency} to {toCurrency}: {rate.quote[toCurrency]?.price.toFixed(2)}
                    </p>
                </div>
            ) : (
                <p>No conversion rate data available.</p>
            )}
        </div>
    );
};

export default CryptoConverterPage;
