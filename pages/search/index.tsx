import React, { useState } from 'react'
import CharacterCard from '../../components/characterCard'
import PageLayout from '../../components/layout/pageLayout'
import PaginationButton from '../../components/paginationButton'
import { useGetCharactersByNameQuery } from '../../redux/rmapi'
import { Info, Result } from '../../types/dataPages'

type Props = {}

const SearchPage = (props: Props) => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('rick')
  const { data, error, isLoading } = useGetCharactersByNameQuery(search)

  
  const info: Info = data?.info ? data.info : {} as Info
  const results: Result[] = data?.results ? data.results : []

  const increasePage = (info: Info) => {
    console.log(info)
    if (info.next !== null) {
      setPage(page + 1)
    }
  }

  const decreasePage = (info: Info) => {
    console.log(info)
    if (info.prev !== null) {
      setPage(page - 1)
    }
  }

  return (
    <PageLayout title="Search">
      {isLoading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <div className="flex justify-between py-4">
            <PaginationButton text="Decrease" fn={() => decreasePage(info)} />
            <h2 className="text-sm font-bold md:text-2xl">{`Page ${page} of ${info.pages}`}</h2>
            <PaginationButton text="Increase" fn={() => increasePage(info)} />
          </div>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {results.map((char, i) => (
              <CharacterCard character={char} key={i} />
            ))}
          </div>
        </>
      )}
    </PageLayout>
  )
}

export default SearchPage
