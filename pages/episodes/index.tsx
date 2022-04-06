import { NextPage } from 'next'
import React, { useState } from 'react'
import PageLayout from '../../components/layout/pageLayout'
import { useGetEpisodesQuery } from '../../redux/rmapi'
import { Episode, Info } from '../../types/dataPages'
import PaginationButton from '../../components/paginationButton'
import PropTitle from '../../components/propTitle'
type Props = {}

const EpisodesPage: NextPage = (props: Props) => {
  const [page, setPage] = useState(1)
  const { data, error, isLoading, isFetching } = useGetEpisodesQuery(page)

  const pageInfo: Info = data?.info ? data.info : ({} as Info)
  const pageData: Episode[] = data?.results ? data.results : []

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
    <PageLayout title='Episodes'>
      {isLoading ? (
        <div><h2>Loading...</h2></div>
      ) : (
        <>
          <div className="flex justify-between py-4">
            <PaginationButton text="Decrease" fn={() => decreasePage(pageInfo)} />
            <h2 className="text-sm font-bold md:text-2xl">{`Page ${page} of ${pageInfo.pages}`}</h2>
            <PaginationButton text="Increase" fn={() => increasePage(pageInfo)} />
          </div>
          {isFetching ? (
            <div><h2>Fetching... wait a sec.</h2></div>
          ) : (
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {pageData.map((episode, i) => (
              <article
                key={i}
                className={'grid gap-3 border-2 border-white p-2'}
              >
                <header className="border-b-2 border-white">
                  <PropTitle text={`Location ID: ${episode.id}`} />
                  <h2 className="text-xl font-semibold">{episode.name}</h2>
                </header>
                <div>
                  <PropTitle text="Air date" />
                  <h3>{episode.air_date}</h3>
                </div>
                <div>
                  <PropTitle text="Episode" />
                  <h3>{episode.episode}</h3>
                </div>
                <div>
                  <PropTitle text="Residents" />
                  <a
                    href={episode.url}
                    className={'transition-all hover:text-green-500'}
                  >
                    Click here to get check out the episodes &gt;
                  </a>
                </div>
              </article>
            ))}
            </div>
          )}
        </>
      )}
    </PageLayout>
  )
}

export default EpisodesPage