import React from 'react'
import styled from 'styled-components'
// import { Link, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from "../components/SEO"

const PortfolioPage = ({ data, location }) => {
  // const projects = data.allMarkdownRemark.edges;
  return (
    <Layout location={location}>
      <SEO title="Work" />
      <PortfolioWrapper className="projects">
        <h1 className="title">Dev Projects</h1>
        <div className="center">
          <h3>Under Construction</h3>
        </div>
        {/* <div className="project-grid">
          {projects && projects.map(project => (
            <div key={project.node.frontmatter.path} className="project-single">
              <Link
                key={project.node.id}
                to={project.node.frontmatter.path} >
                <Img sizes={project.node.frontmatter.thumbnail.childImageSharp.sizes} className="project-image" />
                <div className="overlay">
                  <h2 className="" key={project.node.frontmatter.title}>
                    {project.node.frontmatter.title}
                  </h2>
                </div>
              </Link >
            </div>
          ))}
        </div> */}
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

// export const pageQuery = graphql`
//   query ProjectsQuery {
//     allMarkdownRemark(limit: 10) {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             thumbnail {
//               childImageSharp {
//                 sizes(
//                   maxWidth: 850
//                   quality: 90
//                   traceSVG: { color: "#f3f3f3" }
//                 ) {
//                   ...GatsbyImageSharpSizes_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `


