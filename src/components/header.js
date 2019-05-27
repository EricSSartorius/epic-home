import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'

const Header = ({ homePage }) => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderWrapper className={homePage && 'light-menu'}>
      <div className="header">
        <div className="header-top">
          <h1>
            <Link to="/">
              Eric Sartorius
            </Link>
          </h1>
          <div className={`wrapper-menu ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
          </div>
        </div>
      </div>
      <nav onClick={() => setOpen(false)} className={`${open ? "" : "closed"}`}>
        <ul>
          <li className="nav">
            <Link to="/about/" activeClassName="active">About</Link>
          </li>
          <li className="nav">
            <Link to="/portfolio/" activeClassName="active">Portfolio</Link>
          </li>
          <li className="nav">
            <Link to="/blog/" activeClassName="active">Blog</Link>
          </li>
          <li className="nav">
            <Link to="/contact/" activeClassName="active">Contact</Link>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


const HeaderWrapper = styled.header`
  .header {
    z-index: 99;
    position: fixed;
    width: 100%;
    margin: 0 auto;
    .header-top {
      display: flex;
      justify-content: space-between;
      padding: 1rem 1.5rem;
      h1 {
        margin: 0;
        font-size: 36px;
        a {
          color: var(--black);
        }
      }
    }
    .wrapper-menu {
      margin-top: 4px;
      width: 26px;
      height: 26px;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      transition: transform 330ms ease-out;
    }
    .wrapper-menu.open {
      transform: rotate(-45deg);  
    }
  }
  &.light-menu {
    .header-top h1 a {
      color: var(--white);
      text-shadow: 2px 2px var(--dark-grey);
    }
    nav ul li a {
      color: var(--light-grey);
      text-shadow: 1px 1px 3px var(--dark-grey);
      &:hover {
        color: var(--white);
      }
    } 
  }
  nav {
    position: fixed; 
    padding: 5rem 1.5rem;
    z-index: 9;
    ul {
      li {
        padding: 10px 0;
        margin: 0;
        a {
          color: var(--medium-grey);
          &:hover {
            color: var(--black);
          }
        }
        .active {
          color: var(--black);
        }
        &.sub-nav {
          padding: 0;
          a {
            text-transform: uppercase;
            font-size: 12px;
            margin-left: 20px;
          }
          &-movement {
            padding-bottom: 10px;
          }
        }
        &.nav {
          &-work {
            padding-bottom: 0;
          }
          a {
            font-family: 'BigNoodleTitling Oblique';
            font-size: 48px;
            &:hover {
              font-size: 72px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .header {
      .header-top {
        background: var(--dark-grey);
        h1 a {
          color: var(--white);
          text-shadow: 2px 2px var(--dark-grey);
        }
        .wrapper-menu {
          display: flex;
          .line-menu {
            background-color: #fff;
            border-radius: 1px;
            width: 100%;
            height: 6px;
          }
          .line-menu.half {
            width: 50%;
          }
          .line-menu.start {
            transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
            transform-origin: right;
          }
          &.open .line-menu.start {
            transform: rotate(-90deg) translateX(3px);
          }
          .line-menu.end {
            align-self: flex-end;
            transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
            transform-origin: left;
          }
          &.open .line-menu.end {
            transform: rotate(-90deg) translateX(-3px);
          }
        }
      } 
    }
    nav {
      overflow-y: hidden;
      max-height: 500px;
      transition-property: all;
      transition-duration: .5s;
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      width: 100%;
      background: var(--dark-grey);
      box-shadow: 0 3px 3px rgba(0,0,0,0.12), 0 3px 2px rgba(0,0,0,0.24);
      &.closed {
        padding: 0 1.5rem;
        max-height: 0;
      }
      ul {
        padding-bottom: 10px;
        li {
          .active {
            color: var(--light-grey);
          }
          a {
            color: var(--grey);
            &:hover {
              color: var(--light-grey);
            }
          }
        } 
      }
    }
  }
`