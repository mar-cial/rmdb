import Head from 'next/head'
import React, { ReactNode } from 'react'
import PageTitle from '../../components/pageTitle'
import Navbar from '../navbar'

type PageLayoutProps = {
  title: string
  children: ReactNode
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className='p-4'>
      <Head>
        <title>RMDB - Rick and Morty DB</title>
      </Head>
      <PageTitle text={title} />
      <Navbar />

      {children}
    </div>
  )
}

export default PageLayout
