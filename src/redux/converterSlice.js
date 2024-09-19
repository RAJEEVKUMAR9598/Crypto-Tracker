import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchConversionRate } from '../utils/api';

export const convertCurrency = createAsyncThunk(
  'converter/convertCurrency',
  async ({ fromCurrency, toCurrency }) => {
    const response = await fetchConversionRate(fromCurrency, toCurrency);
    return response.quote[toCurrency].price;
  }
);

const converterSlice = createSlice({
  name: 'converter',
  initialState: {
    conversionRate: null,
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(convertCurrency.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(convertCurrency.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.conversionRate = action.payload;
      })
      .addCase(convertCurrency.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default converterSlice.reducer;
