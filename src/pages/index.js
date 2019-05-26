import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home"/>
  </Layout>
)

export default IndexPage