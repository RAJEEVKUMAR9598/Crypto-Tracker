const API_KEY = 'e4f9116b-ebf9-4c6a-8815-0060196e857e';
const BASE_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';

export const fetchCryptoList = async () => {
    try {
        const response = await fetch(`${BASE_URL}?start=1&limit=10`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-CMC_PRO_API_KEY': API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cryptocurrency list:', error);
        throw error;
    }
};

export const fetchConversionRate = async (fromCurrency, toCurrency) => {
    try {
        const response = await fetch(`${BASE_URL}?symbol=${fromCurrency}&convert=${toCurrency}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-CMC_PRO_API_KEY': API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Conversion rate data:', data); // Log the data for debugging
        return data;
    } catch (error) {
        console.error('Error fetching conversion rate:', error);
        throw error;
    }
};
