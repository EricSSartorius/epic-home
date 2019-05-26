import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Footer from './footer'
import GlobalStyle from '../styles/global'

import bgImg from '../images/digitalnomad.jpg'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutWrapper>
        <GlobalStyle />
        <Helmet
          title="Eric Sartorius"
          meta={[
            { name: 'description', content: 'A homepage for Eric Sartorius.' },
            { name: 'keywords', content: 'homepage, eric sartorius, freelancer, front-end developer' },
            { property: 'twitter:card', content: 'summary' },
            { property: 'twitter:site', content: '@the_epic_life' },
            { property: 'twitter:title', content: 'Eric Sartorius' },
            { property: 'twitter:description', content: 'A homepage for Eric Sartorius' },
            { property: 'twitter:creator', content: 'Eric Sartorius' },
            // { property: 'twitter:image', content: 'http://ericsartorius.com/static/digitalnomad3.69da5891.jpg' },
            { property: 'og:title', content: 'Eric Sartorius' },
            { property: 'og:url', content: 'http://ericsartorius.com' },
            // { property: 'og:image', content: 'http://ericsartorius.com/static/digitalnomad3.69da5891.jpg' },
            { property: 'og:description', content: 'A homepage for Eric Sartorius' },
            { property: 'og:site_name', content: 'Eric Sartorius' },
            { name: "theme-color", content: "#2f3543" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header pathname={location && location.pathname === "/" ? "light-menu" : ""} />
        <main>{children}</main>
        <Footer />
      </LayoutWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const LayoutWrapper = styled.div`
  main {
    margin-left: var(--sidebar-width);
    padding: 5rem 2rem 5rem 0;
    width: auto;
    .title {
      text-align: center;
    }
    .home {
      background: url(${bgImg}) no-repeat bottom center fixed;
      background-size: cover;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: -1;
    }
    .projects {
      margin: auto;
      max-width: 1200px;
      .center {
        text-align: center;
      }
      .project-single {
        margin: 1rem;
        position: relative;
        .project-image {
          display: block;
          width: 100%;
          max-width: 100%;
          height: auto;
        }
        .overlay {
          h2 {
            color: var(--white);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
          }
          background-color: var(--dark-grey);
          height: 100%;
          left: 0;
          top: 0;
          right: 0;
          position: absolute;
          width: 100%;
          opacity: 0;
          transition: .5s ease;
        }
        &:hover .overlay{
          opacity: 1;
        }

      }
    }
    .project {
      .back {
        text-align: center;
        .chevron-back {
          svg {
            fill: var(--medium-grey);
          }
        }
      }
    }
    .about {
      ul {
        margin-top: 50px;
        .work-item {
          margin-bottom: 30px;
          h3 {
            margin-bottom: 5px;
          }
        }
      }
    }
    .contact {
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
    }
  }
`