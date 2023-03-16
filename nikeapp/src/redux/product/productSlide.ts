import {createSlice} from '@reduxjs/toolkit';
import products from '../../data/products';
import { Product } from '../../types/product.type';

interface ProductState {
  products: Product[];
}

const initialState : ProductState = {
  products: products
};

const productSlide = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const {} = productSlide.actions;

export default productSlide.reducer;
