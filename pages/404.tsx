import { NextPage } from 'next'
import React from 'react'
import PageLayout from '../components/layout/pageLayout'

const NotFoundPage: NextPage = () => {
  return <PageLayout title="Not found!">
    <p>:/</p>
  </PageLayout>
}

export default NotFoundPage
