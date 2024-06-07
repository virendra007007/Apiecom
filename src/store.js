import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartdata/cartSlice'

export const store = configureStore({
  reducer: {
    managecart:cartReducer,
  },
})