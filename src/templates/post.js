import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const PostTemplate = ({ location, data }) => {
  const post = data.markdownRemark

  return (
    <Layout location={location}>
      <div className="project">

        <h1 className="title">{post.frontmatter.title}</h1>
        <Post dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="back">
          <Link to="/blog/" className="chevron-back">
            <svg width="23" height="36" viewBox="0 0 23 36" version="1.1">
              <title>chevron</title>
              <g id="Canvas" transform="translate(776 3726)">
                <g id="chevron">
                  <g id="g3003">
                    <g id="path3005">
                      <use href="#path0_fill" transform="matrix(6.12323e-17 1 1 -6.12323e-17 -776 -3726)" />
                    </g>
                  </g>
                </g>
              </g>
              <defs>
                <path id="path0_fill" d="M 36 18.2454C 36 17.4179 35.715 16.7152 35.1451 16.1375L 20.1027 0.89002C 19.5173 0.296673 18.8164 0 18 0C 17.1682 0 16.475 0.296673 15.9204 0.89002L 0.878049 16.1375C 0.292683 16.6996 0 17.4022 0 18.2454C 0 19.073 0.292683 19.7834 0.878049 20.3768L 2.58793 22.1334C 3.1887 22.7111 3.8896 23 4.69063 23C 5.50706 23 6.20026 22.7111 6.77022 22.1334L 18 10.7505L 29.2298 22.1334C 29.7997 22.7111 30.4929 23 31.3094 23C 32.1104 23 32.8113 22.7111 33.4121 22.1334L 35.1451 20.3768C 35.715 19.7678 36 19.0574 36 18.2454Z" />
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default PostTemplate

const Post = styled.div`
  .gatsby-resp-image-wrapper {
    max-width: 800px;
  }
`

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
  `