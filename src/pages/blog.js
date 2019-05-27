import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from "../components/seo"

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <BlogWrapper>
        <div>
          {posts && posts.filter(p => p.node.frontmatter.type === 'post').map(post => (
            <Link
              key={post.node.id}
              to={`blog${post.node.frontmatter.path}`}>
              <div className="img-wrapper">
                <Img fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid} className="project-image" alt={`${post.node.frontmatter.title} screenshot`} />
              </div>
              <h2 className="" key={post.node.frontmatter.title}>
                {post.node.frontmatter.title}
              </h2>
              <p className="date" css="margin-bottom: 100px">{post.node.frontmatter.date}</p>
            </Link >
          )
          )}
        </div>
      </BlogWrapper>
    </Layout>
  )
};

export default BlogPage

const BlogWrapper = styled.section`
  text-align: center;
  a {
    transition: font-size var(--transition-time) ease;
    &:hover {
      font-size: 26px;
    }
  }
  h2 {
    margin-bottom: 5px;
  }
  .img-wrapper {
    max-width: 800px;
    margin: auto;
  }
  .date {
    font-size: 14px;
    margin-top: 0;
    color: var(--dark-grey);
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 1.5rem;
    margin: 0;
  }
`

export const postQuery = graphql`
  query PostQuery {
    allMarkdownRemark(sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            type
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`


