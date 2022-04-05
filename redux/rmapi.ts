import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PageData, Result } from '../types/dataPages'

export const rmApi = createApi({
  reducerPath: 'rmApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api'}),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<PageData, number>({
      query: (page = 1) => `/character?page=${page}`
    }),
    getCharacterDetails: builder.query<Result, string>({
      query: (id) => `/character/${id}`
    }),
    getCharactersByName: builder.query<PageData, string>({
      query: (name) => `/character/?name=${name}`
    })
  })
})

export const { useGetAllCharactersQuery, useGetCharacterDetailsQuery, useGetCharactersByNameQuery } = rmApi