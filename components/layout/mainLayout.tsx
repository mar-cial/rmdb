import React from 'react'

type Props = {
  children: JSX.Element
}

const MainLayout = ({children}: Props) => {
  return (
    <div className='min-h-screen text-white bg-black'>
      {children}
    </div>
  )
}

export default MainLayout