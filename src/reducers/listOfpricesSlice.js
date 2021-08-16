import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTableOfPrices } from '../services/index'
import { setDataPrice } from './setData'
const NAME = 'listOfPrices'

export const fetchListOfPrices = createAsyncThunk(NAME + '/fetchListOfPrices',
  async() => {
  const { data } = await getTableOfPrices()
  return data.data
})

export const listOfPricesSlice = createSlice({
  name: NAME,
  initialState: {
    status: 'idle',
    error: null,
    data: {}
  },
  reducers: {},
  extraReducers: {
    [fetchListOfPrices.pending]: state => {
      state.status = 'loading'
    },
    [fetchListOfPrices.fulfilled]: (state, { payload }) => {
      state.status = 'succeeded'
      state.data = setDataPrice(payload)
    },
    [fetchListOfPrices.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

export default listOfPricesSlice.reducer
