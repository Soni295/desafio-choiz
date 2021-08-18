import { configureStore } from '@reduxjs/toolkit'
import listOfPricesSlice from '../reducers/listOfpricesSlice'
import frequentQuestionsSlice from '../reducers/frequentQuestionsSlice'

export default configureStore({
  reducer: {
    listOfPrices: listOfPricesSlice,
    frequentQuestions: frequentQuestionsSlice
  },
})
