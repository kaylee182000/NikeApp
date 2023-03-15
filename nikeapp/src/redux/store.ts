import {configureStore} from '@reduxjs/toolkit';
import {productSlide} from './product/productSlide';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    products: productSlide.reducer,
  },
});

//to use useSelector and useDispatch correctly in typescript you must have these two lines of code
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
