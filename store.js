import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import restaurentReducer from './features/restaurentSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurent: restaurentReducer,
  },
})