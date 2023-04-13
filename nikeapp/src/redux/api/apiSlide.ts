import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//import types
import {Product} from '../../types/product.type';
import {Register, Login} from '../../types/auth.types';

//use the ip address from the machine using ipconfig
//const baseUrl = 'https://nikestore-kaylee.onrender.com/api/v1/';
const baseUrl = 'http://192.168.1.11:8080/api/v1/';

type ProductResponse = Product[];

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
}

interface LoginPayload {
  username: string;
  password: string;
}

// Define a service using a base URL and expected endpoints
export const apiSlide = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getProducts: builder.query<ProductResponse, void>({
      query: () => '/product',
    }),
    getProduct: builder.query<Product, string>({
      query: productId => `product/${productId}`,
    }),
    register: builder.mutation<RegisterPayload, Register>({
      query: credential => ({
        url: '/register',
        method: 'POST',
        body: credential,
      }),
    }),
    login: builder.mutation<LoginPayload, Login>({
      query: credential => ({
        url: '/login',
        method: 'POST',
        body: credential,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductQuery,
  useLoginMutation,
  useRegisterMutation,
} = apiSlide;
