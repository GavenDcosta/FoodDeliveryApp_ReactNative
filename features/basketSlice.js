import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)

      let newBasket = [...state.items]

      if(index >= 0){
        newBasket.splice(index, 1)
      }else{
        console.warn(`cant remove product (id: ${action.payload.id}) as its not in the basket`)
      }

      state.items = newBasket
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addToBasket, removeFromBasket, incrementByAmount } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter(items => items.id === id)

export default basketSlice.reducer