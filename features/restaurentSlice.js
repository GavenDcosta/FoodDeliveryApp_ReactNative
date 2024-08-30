import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurent: {
    id: null,
    imgUrl: null,
    name: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    long: null,
    lat: null,
  },
}

export const restaurentSlice = createSlice({
  name: 'restaurent',
  initialState,
  reducers: {
    setRestaurent: (state, action) => {
        state.restaurent = action.payload
    }
  },
})

export const { setRestaurent } = restaurentSlice.actions

export const selectRestaurent = (state) => state.restaurent.restaurent

export default restaurentSlice.reducer