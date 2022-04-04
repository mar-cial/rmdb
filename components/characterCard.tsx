import Link from 'next/link'
import React, { FC } from 'react'
import { Result } from '../pages'
import PropTitle from './propTitle'

type Props = {
  character: Result
}

const CharacterCard = ({ character }: Props) => {
  return (
    <article className="grid gap-2 p-2 bg-gray-900 rounded-md">
      <header>
        <img src={character.image} alt={`Avatar of: ${character.name}`} className={'w-full'} />
        <div className='pt-2'>
          <PropTitle text="Name" />
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
        <button>
          <Link href={`/characters/${character.id}`} passHref>
            <a>get more details</a>
          </Link>
        </button>
      </div>
    </article>
  )
}

export default CharacterCard
