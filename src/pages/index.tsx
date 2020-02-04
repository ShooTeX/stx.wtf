import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Background from '../components/Background'

const IndexPage = (): JSX.Element => (
  <Layout>
    <Seo title='Welcome' />
    <Background />
    <h1>beginning of something beautiful</h1>
  </Layout>
)

export default IndexPage
