import React from 'react'

type Props = {
  text: string
}

const PageTitle = ({text}: Props) => {
  return (
    <header className='py-4'>
      <h1 className='text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl'>{text}</h1>
    </header>
  )
}

export default PageTitle