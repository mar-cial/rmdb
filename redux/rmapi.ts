import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PageData, Result } from '../pages'

export const rmApi = createApi({
  reducerPath: 'rmApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api'}),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<PageData, string>({
      query: () => `/character`
    }),
    getCharacterDetails: builder.query<Result, string>({
      query: (id) => `/character/${id}`
    })
  })
})

export const { useGetAllCharactersQuery, useGetCharacterDetailsQuery } = rmApi