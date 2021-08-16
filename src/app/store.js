import { configureStore } from '@reduxjs/toolkit'
import listOfPricesSlice from '../reducers/listOfpricesSlice'

export default configureStore({
  reducer: {
    listOfPrices: listOfPricesSlice
  },
})
