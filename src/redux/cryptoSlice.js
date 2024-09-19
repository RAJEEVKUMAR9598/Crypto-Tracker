import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCryptoList = createAsyncThunk('crypto/fetchCryptoList', async (searchTerm = '') => {
  const response = await fetch(`https://api.example.com/cryptocurrencies?search=${searchTerm}`);
  const data = await response.json();
  return data;
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    cryptoList: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptoList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cryptoList = action.payload;
      })
      .addCase(fetchCryptoList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cryptoSlice.reducer;
