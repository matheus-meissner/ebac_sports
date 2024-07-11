// src/slices/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Product {
  id: string
  name: string
  preco: number
  imagem: string
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products'
    })
    // Adicione outras requisições aqui
  })
})

export const { useGetProductsQuery } = apiSlice
