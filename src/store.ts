// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import { apiSlice } from './slices/apiSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
