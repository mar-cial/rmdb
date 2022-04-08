import React, { useState } from 'react'
import PageLayout from '../components/layout/pageLayout'
import PropTitle from '../components/propTitle'
import { motion } from 'framer-motion'
import { Character } from '../types/dataPages'
import { useGetAllCharactersQuery } from '../redux/rmapi'
import { NextPage } from 'next'
import checkStatus from '../lib/checkStatus'
const RMAPI: NextPage = () => {
  
  const [selectedChar, setSelecterChar] = useState(0)
  const { data, error, isLoading } = useGetAllCharactersQuery(32)

  if (typeof data === 'undefined') { return <PageLayout title='Something went wrong'/> }
  
  const info = data.info
  const characters = data.results

  const char = characters[selectedChar]
  
  console.log(info)
  console.log(characters)
  
  return (
    <PageLayout title="Rick and Morty API">
      {isLoading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <section>
          <header>
            <h2 className="text-2xl font-bold">Characters</h2>
          </header>

          <div className="grid gap-2 py-4 sm:grid-cols-2">

            {/* big avatar*/}
            <div className="grid gap-4 p-2 bg-gray-900 rounded-md sm:grid-cols-2">
              <div className="">
                <img src={char.image} className={'rounded-md w-full'} />
              </div>

              {/* big avatar info*/}
              <div>
                <header>
                  <PropTitle text="name" />
                  <h3 className="text-2xl font-semibold">{char.name}</h3>
                </header>
                <div>
                  <PropTitle text="status" />
                  <p>{checkStatus(char.status)}</p>
                </div>
                <div>
                  <PropTitle text="origin" />
                  <p>{char.origin.name}</p>
                </div>
                <div>
                  <PropTitle text="species" />
                  <p>{char.species}</p>
                </div>
              </div>
            </div>
            {/* small avatars*/}
            <div className="grid grid-cols-4 gap-2 p-2 bg-gray-900 rounded-md md:grid-cols-7">
              {characters.map((char: Character, i: number) => (
                <motion.article
                  key={i}
                  whileTap={{ scale: 1.0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={char.image}
                    alt={`Avatar of: ${char.name}`}
                    onClick={() => setSelecterChar(i)}
                    className={`${
                      selectedChar === i ? 'border-2 border-white' : ''
                    }`}
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}

export default RMAPI
