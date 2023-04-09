import {configureStore} from '@reduxjs/toolkit';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import productSlide from './product/productSlide';
import cartSlide from './cart/cartSlide';
import userSlide from './user/userSlide';
import {apiSlide} from './api/apiSlide';

export const store = configureStore({
  reducer: {
    products: productSlide,
    cart: cartSlide,
    user: userSlide,
    api: apiSlide.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlide.middleware),
});

//to use useSelector and useDispatch correctly in typescript you must have these two lines of code
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
