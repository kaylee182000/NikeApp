import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cart} from '../../types/cart.type';

interface CartState {
  cart: Cart[];
}

interface ChangeQuantityParams {
  id: string;
  type: string;
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
        if (newCart[productIndex].quantity <= 9) {
          newCart[productIndex].quantity++;
          state.cart = newCart;
        }
      } else {
        state.cart.push(action.payload.data);
      }
    },
    changeQuantity: (
      state,
      action: PayloadAction<{data: ChangeQuantityParams}>,
    ) => {
      const {data} = action.payload;
      const newCart = [...state.cart];
      const productIndex = newCart.findIndex(p => p.product.id === data.id);
      if (data.type === 'decrease' && newCart[productIndex].quantity > 1) {
        newCart[productIndex].quantity--;
        state.cart = newCart;
      } else if (
        data.type === 'increase' &&
        newCart[productIndex].quantity <= 9
      ) {
        newCart[productIndex].quantity++;
        state.cart = newCart;
      }
    },
    deleteFromCart: (state, action: PayloadAction<{data: String}>) => {
      const productId = action.payload.data;
      const newCart = state.cart.filter(p => p.product.id !== productId) || [];
      state.cart = newCart;
    },
  },
});

export const {addToCart, changeQuantity, deleteFromCart} = cartSlide.actions;

export default cartSlide.reducer;
