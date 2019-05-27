import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import SEO from "../../components/seo"

const Blog = ({ location }) => (
  <Layout location={location}>
    <SEO title="Blog" />
    <BlogWrapper>
      <h1 className="title">Blog</h1>
      <div className="center">
        <h3>Coming soon</h3>
        <p>Check my Wordpress travel blog for now:</p>
        <h3>
          <a href="http://www.iamtheepic.com">The Epic Life</a>
        </h3>
      </div>
    </BlogWrapper>
  </Layout>
);

export default Blog

const BlogWrapper = styled.section`
  text-align: center;
  a {
    transition: font-size var(--transition-time) ease;
    &:hover {
      font-size: 26px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 1.5rem;
    margin: 0;
  }
`