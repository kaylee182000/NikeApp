import {configureStore} from '@reduxjs/toolkit';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import productSlide from './product/productSlide';
import cartSlide from './cart/cartSlide';

export const store = configureStore({
  reducer: {
    products: productSlide,
    cart: cartSlide
  },
});

//to use useSelector and useDispatch correctly in typescript you must have these two lines of code
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
