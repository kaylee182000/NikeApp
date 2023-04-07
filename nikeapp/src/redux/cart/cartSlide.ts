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
      const {data} = action.payload;
      const isAlreadyInCart = state.cart.find(
        p => p.product.id === data.product.id,
      );

      if (isAlreadyInCart) {
        const newCart = [...state.cart];
        const productIndex = newCart.findIndex(
          p => p.product.id === data.product.id,
        );
        newCart[productIndex].quantity++;
        state.cart = newCart;
      } else {
        state.cart.push(action.payload.data);
      }
    },
    changeQuantity: (state, action: PayloadAction<{data: any}>) => {
      const {data} = action.payload;
    },
  },
});

export const {addToCart, changeQuantity} = cartSlide.actions;

export default cartSlide.reducer;
