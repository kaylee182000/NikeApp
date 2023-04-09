import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//use the ip address from the machine using ipconfig
const baseUrl = 'http://192.168.1.10:8080/api/v1/';

// Define a service using a base URL and expected endpoints
export const apiSlide = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/product',
    }),
    getProduct: builder.query({
      query: productId => `product/${productId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetProductsQuery, useGetProductQuery} = apiSlide;
