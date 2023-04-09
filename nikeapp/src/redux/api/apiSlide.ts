import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product} from '../../types/product.type';

const baseUrl = 'http://localhost:8080/api/v1/';

// Define a service using a base URL and expected endpoints
export const apiSlide = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/product',
    }),
    getProduct: builder.query<Product, string>({
      query: productId => `product/${productId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetProductsQuery, useGetProductQuery} = apiSlide;
