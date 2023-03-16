import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cart} from '../../types/cart.type';

interface CartState {
  cart: Cart[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlide = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{data: Cart}>) => {
      state.cart.push(action.payload.data);
    },
  },
});

export const {addToCart} = cartSlide.actions;

export default cartSlide.reducer;
