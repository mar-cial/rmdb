import { NextPage } from 'next'
import React, { FC, useState } from 'react'
import CharacterCard from '../../components/characterCard'
import PageLayout from '../../components/layout/pageLayout'
import { useGetAllCharactersQuery } from '../../redux/rmapi'
import { Info, PageData, Result } from '../../types/dataPages'

type PaginationButtonProps = {
  text: string
  fn: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const PaginationButton: FC<PaginationButtonProps> = ({ text, fn }) => {
  return (
    <button onClick={fn} className={'border-2 border-white px-2 text-sm'}>
      {text}
    </button>
  )
}

const CharactersPage: NextPage = () => {
  const [page, setPage] = useState(1)
  // using rtk query
  const { data, error, isLoading, isFetching } = useGetAllCharactersQuery(page)

  const info: Info = data?.info ? data.info : {} as Info
  const results: Result[] = data?.results ? data.results : []

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

  return (
    <PageLayout title="All characters">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex justify-between py-4">
            <PaginationButton text="Decrease" fn={() => decreasePage(info)} />
            <h2 className="text-sm font-bold md:text-2xl">{`Page ${page} of ${info.pages}`}</h2>
            <PaginationButton text="Increase" fn={() => increasePage(info)} />
          </div>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {isFetching ? (
              <h2>Wait a min...</h2>
            ) : (
              results.map((character: Result, i: number) => (
                <CharacterCard character={character} key={i} />
              ))
            )}
          </div>
        </>
      )}
    </PageLayout>
  )
}

export default CharactersPage
