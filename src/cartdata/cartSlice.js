import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  name: 'jay'
}

export const cartSlice = createSlice({
  name: 'managecart',
  
  initialState,
  reducers: {
    addtocart: (state, action) => 
    {
      console.log('action parms', action.payload)
      let modify = action.payload
      modify.qty = 1
      modify.total = modify.price
      let temp = [...state.cart, modify]
      state.cart = temp
      
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addtocart} = cartSlice.actions

export default cartSlice.reducer