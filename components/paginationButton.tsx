import React, { FC } from 'react'

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
export default PaginationButton