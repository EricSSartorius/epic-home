import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, 'svelte', 'frontend', 'web development', `react`]} />
    <div className="home"/>
  </Layout>
)

export default IndexPage
