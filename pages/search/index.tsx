import { NextPage } from 'next'
import React, { ChangeEvent, useEffect, useState } from 'react'
import CharacterCard from '../../components/characterCard'
import PageLayout from '../../components/layout/pageLayout'
import PaginationButton from '../../components/paginationButton'
import { useGetCharactersByNameQuery } from '../../redux/rmapi'
import { Info, Character } from '../../types/dataPages'

const SearchPage: NextPage = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const { data, isLoading, isError } = useGetCharactersByNameQuery({
    page: page,
    name: search,
  })

  const info: Info = data?.info ? data.info : ({} as Info)
  const results: Character[] = data?.results ? data.results : []

  const increasePage = (info: Info) => {
    if (info.next !== null) {
      setPage(page + 1)
    }
  }

  const decreasePage = (info: Info) => {
    if (info.prev !== null) {
      setPage(page - 1)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPage(1)
    setSearch(e.target.value)
  }

  return (
    <PageLayout title="Search">
      <div className="py-6">
        <input
          type={'text'}
          id={'name'}
          placeholder="Search character..."
          value={search}
          onChange={handleChange}
          className={'border-2 border-white bg-black p-1 text-gray-400'}
        />
      </div>
      {isLoading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : isError ? (
        <div>Not found :/</div>
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
