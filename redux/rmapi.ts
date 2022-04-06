import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CharacterPageData, Character, LocationPageData, EpisodePageData } from '../types/dataPages'

export const rmApi = createApi({
  reducerPath: 'rmApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api'}),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharacterPageData, number>({
      query: (page = 1) => `/character?page=${page}`
    }),
    getCharacterDetails: builder.query<Character, string>({
      query: (id) => `/character/${id}`
    }),
    getCharactersByName: builder.query<CharacterPageData, { page: number, name: string}>({
      query: (arg) => {
        const { page, name } = arg
        return ({
          url: `/character/?page=${page}&name=${name}`,
          params: { page, name }
        })
      }
    }),
    getEpisodes: builder.query<EpisodePageData, number>({
      query: (page = 1) => `/episode?page=${page}`
    }),
    getLocations: builder.query<LocationPageData, number>({
      query: (page = 1) => `/location?page=${page}`
    }),
  })
})

export const { 
  useGetAllCharactersQuery, 
  useGetCharacterDetailsQuery, 
  useGetCharactersByNameQuery,
  useGetEpisodesQuery,
  useGetLocationsQuery
 } = rmApi