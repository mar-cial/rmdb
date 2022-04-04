import { NextPage } from 'next'
import React from 'react'
import CharacterCard from '../../components/characterCard'
import PageLayout from '../../components/layout/pageLayout'
import { useGetAllCharactersQuery } from '../../redux/rmapi'
import { Info, Result } from '../../types/dataPages'

const CharactersPage: NextPage = () => {
  // using rtk query
  const { data, error, isLoading } = useGetAllCharactersQuery('')

  const info: Info = data?.info ? data.info : {}
  const results: Result[] = data?.results ? data.results : []

  return (
    <PageLayout title="All characters">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {results.map((character: Result, i: number) => (
            <CharacterCard character={character} key={i} />
          ))}
        </div>
      )}
    </PageLayout>
  )
}

export default CharactersPage
