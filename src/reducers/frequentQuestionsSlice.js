import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getFrequentQuestions } from '../services/index'
const NAME = 'frequentQuestions'

export const fetchFrequentQuestions = createAsyncThunk(NAME +
'/fetchFrequentQuestions',
  async() => {
  const { data } = await getFrequentQuestions()
  return data.data
})

export const frequentQuestionsSlice = createSlice({
  name: NAME,
  initialState: {
    status: 'idle',
    error: null,
    data: []
  },
  reducers: {},
  extraReducers: {
    [fetchFrequentQuestions.pending]: state => {
      state.status = 'loading'
    },
    [fetchFrequentQuestions.fulfilled]: (state, { payload }) => {
      state.status = 'succeeded'
      state.data = payload
    },
    [fetchFrequentQuestions.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

export default frequentQuestionsSlice.reducer
