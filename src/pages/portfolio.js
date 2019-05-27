import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"

const PortfolioPage = ({ data, location }) => {
  const projects = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title="Work" />
      <PortfolioWrapper className="projects">
        <div className="project-grid">
          {projects && projects.filter(p => p.node.frontmatter.type === 'project').map(project => (
            <div key={project.node.frontmatter.path} className="project-single">
              <Link
                key={project.node.id}
                to={`portfolio${project.node.frontmatter.path}`} >
                <Img fluid={project.node.frontmatter.thumbnail.childImageSharp.fluid} className="project-image" alt={`${project.node.frontmatter.title} screenshot`} />
                <div className="overlay">
                  <h2 className="" key={project.node.frontmatter.title}>
                    {project.node.frontmatter.title}
                  </h2>
                </div>
              </Link >
            </div>
          )
          )}
        </div>
      </PortfolioWrapper>
    </Layout>
  )
}

export default PortfolioPage

const PortfolioWrapper = styled.div`
  .project-grid {
    display:grid;
    grid-template-columns: 50% 1fr;
  }

  @media screen and (max-width: 768px) {
    .project-grid {
      display: block;
    }
    .project-single {
      margin: 1rem 0;
    }
  }
`

export const projectQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            type
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600) {
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


