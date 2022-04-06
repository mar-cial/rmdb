import Link from 'next/link'
import React, { FC } from 'react'
import { Character } from '../types/dataPages'
import PropTitle from './propTitle'
import { motion } from 'framer-motion'

type Props = {
  character: Character
}

const CharacterCard = ({ character }: Props) => {
  return (
    <article className="grid gap-2 p-2 bg-gray-900 rounded-md">
      <header>
        <img src={character.image} alt={`Avatar of: ${character.name}`} className={'w-full'} />
        <div className='pt-2'>
          <PropTitle text={`ID: ${character.id}`}/>
          <h2 className="text-xl font-semibold">{character.name}</h2>
        </div>
      </header>
      <div>
        <PropTitle text='Status' />
        <p>{character.status}</p>
      </div>
      <div>
        <PropTitle text='Origin' />
        <p>{character.origin.name}</p>
      </div>
      <div>
        <motion.button className='flex w-full py-1 font-medium text-center text-black bg-white rounded-md' whileHover={{y: -2}} whileTap={{y:0}}>
          <Link href={`/characters/${character.id}`} passHref>
            <a className='w-full h-full'>get more details</a>
          </Link>
        </motion.button>
      </div>
    </article>
  )
}

export default CharacterCard
