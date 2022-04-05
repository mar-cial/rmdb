import { useRouter } from 'next/router'
import PageLayout from '../../components/layout/pageLayout'
import PropTitle from '../../components/propTitle'
import { useGetCharacterDetailsQuery } from '../../redux/rmapi'
import { Result } from '../../types/dataPages'

const CharacterDetail = () => {
  const router = useRouter()
  const { id } = router.query
  
  const { data, error, isLoading, isSuccess } = useGetCharacterDetailsQuery(id as string)

  if (error) {
    return
  }

  const character: Result = typeof data !== 'undefined' ? data : {} as Result

  return (
    <PageLayout title="Character detail">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <article className="flex flex-col gap-2">
          {isSuccess && (
            <>
              <header>
                <img src={character.image} alt={`Avatar of: ${character.name}`} />
                <div className="pt-4">
                  <PropTitle text="Name" />
                  <h2 className="text-2xl font-semibold">{character.name}</h2>
                </div>
              </header>
              <div>
                <PropTitle text="Status" />
                <p>{character.status}</p>
              </div>
              <div>
                <PropTitle text="Species" />
                <p>{character.species}</p>
              </div>
              <div>
                <PropTitle text="Type" />
                <p>{character.type}</p>
              </div>
              <div>
                <PropTitle text="Gender" />
                <p>{character.gender}</p>
              </div>
              <div>
                <PropTitle text="Origin" />
                <p>{character.origin.name}</p>
                <p>{character.origin.url}</p>
              </div>
              <div>
                <PropTitle text="Location" />
                <p>{character.location.name}</p>
                <p>{character.location.url}</p>
              </div>
              <div>
                <PropTitle text="Episodes" />
                {character.episode.map((episode, i) => (
                  <p key={i}>{episode}</p>
                ))}
              </div>
              <div>
                <PropTitle text="URL" />
                <p>{character.url}</p>
              </div>
              <div>
                <PropTitle text="Creation date" />
                <p>{character.created}</p>
              </div>
            </>
          )}
        </article>
      )}
    </PageLayout>
  )
}

export default CharacterDetail
