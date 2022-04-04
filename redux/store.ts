import { configureStore } from '@reduxjs/toolkit'
import { rmApi } from './rmapi'

export const store = configureStore({
  reducer: {
    [rmApi.reducerPath]: rmApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rmApi.middleware)
})
