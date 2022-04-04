import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import React, { useState } from 'react'
import PageLayout from '../components/layout/pageLayout'
import PropTitle from '../components/propTitle';
import getData from '../lib/getData'
import { motion } from 'framer-motion'
import { PageData, Result } from '../types/dataPages';

export const getStaticProps: GetStaticProps = async () => {
  const randInt = Math.floor(Math.random() * 41)
  const endpoint = `https://rickandmortyapi.com/api/character/?page=${randInt}`
  const characters: PageData = await getData(endpoint)

  return {
    props: {
      info: characters.info,
      results: characters.results,
    },
  }
}

const RMAPI: NextPage = ({
  info,
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [selectedChar, setSelecterChar] = useState(0)

  const char = results[selectedChar]

  return (
    <PageLayout title="Rick and Morty API">
      <section>
        <header>
          <h2 className="text-2xl font-bold">Characters</h2>
        </header>
        
        <div className='grid gap-2 py-4 md:grid-cols-2'>
          {/* big avatar*/}
          <div className='flex flex-col gap-4 p-2 bg-gray-900 rounded-md md:flex-row'>
            <div className='flex items-center justify-center'>
              <img src={char.image} className={'rounded-md md:w-3/4'} />
            </div>

            {/* big avatar info*/ }
            <div>
              <header>
                <PropTitle text='name' />
                <h3 className='text-2xl font-semibold'>{char.name}</h3>
              </header>
              <div>
                <PropTitle text='status' />
                <p>{char.status}</p>
              </div>
              <div>
                <PropTitle text='origin' />
                <p>{char.origin.name}</p>
              </div>
              <div>
                <PropTitle text='species' />
                <p>{char.species}</p>
              </div>
            </div>
          </div>
          {/* small avatars*/}
          <div className='grid grid-cols-4 gap-2 p-2 bg-gray-900 rounded-md md:grid-cols-7'>
            {results.map((char: Result, i: number) => (
              <motion.article key={i} whileTap={{scale: 1.0}} whileHover={{scale: 1.1}}>
                <img src={char.image} alt={`Avatar of: ${char.name}`} onClick={() => setSelecterChar(i)} className={`${selectedChar === i ? 'border-2 border-white' : ''}`}/>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default RMAPI
