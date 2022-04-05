import { useRouter } from 'next/router'
import PageLayout from '../../components/layout/pageLayout'
import PropTitle from '../../components/propTitle'
import { useGetCharacterDetailsQuery } from '../../redux/rmapi'

const CharacterDetail = () => {
  const router = useRouter()
  const { id } = router.query
  
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  const { data, error, isLoading, isSuccess } = useGetCharacterDetailsQuery(id)

  if (error) {
    return
  }

  return (
    <PageLayout title="Character detail">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <article className="flex flex-col gap-2">
          {isSuccess && (
            <>
              <header>
                <img src={data.image} alt={`Avatar of: ${data.name}`} />
                <div className="pt-4">
                  <PropTitle text="Name" />
                  <h2 className="text-2xl font-semibold">{data.name}</h2>
                </div>
              </header>
              <div>
                <PropTitle text="Status" />
                <p>{data.status}</p>
              </div>
              <div>
                <PropTitle text="Species" />
                <p>{data.species}</p>
              </div>
              <div>
                <PropTitle text="Type" />
                <p>{data.type}</p>
              </div>
              <div>
                <PropTitle text="Gender" />
                <p>{data.gender}</p>
              </div>
              <div>
                <PropTitle text="Origin" />
                <p>{data.origin.name}</p>
                <p>{data.origin.url}</p>
              </div>
              <div>
                <PropTitle text="Location" />
                <p>{data.location.name}</p>
                <p>{data.location.url}</p>
              </div>
              <div>
                <PropTitle text="Episodes" />
                {data.episode.map((episode, i) => (
                  <p key={i}>{episode}</p>
                ))}
              </div>
              <div>
                <PropTitle text="URL" />
                <p>{data.url}</p>
              </div>
              <div>
                <PropTitle text="Creation date" />
                <p>{data.created}</p>
              </div>
            </>
          )}
        </article>
      )}
    </PageLayout>
  )
}

export default CharacterDetail
