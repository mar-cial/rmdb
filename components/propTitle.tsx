import React from 'react'

type Props = {
  text: string
}

const PropTitle = ({text}: Props) => {
  return (
    <h4 className='text-sm font-semibold text-gray-600'>{text}</h4>
  )
}

export default PropTitle