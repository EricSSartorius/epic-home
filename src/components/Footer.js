import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterWrapper className="footer">
    <ul>
      <li><a href="https://github.com/ericssartorius" target="_blank" rel="nofollow noopener noreferrer">Github</a></li>
      <li><a href="http://www.linkedin.com/in/ericsartorius/" target="_blank" rel="nofollow noopener noreferrer">Linkedin</a></li>
      <li><a href="http://twitter.com/the_epic_life" target="_blank" rel="nofollow noopener noreferrer">Twitter</a></li>
      <li><a href="https://dribbble.com/ericssartorius" target="_blank" rel="nofollow noopener noreferrer">Dribble</a></li>
    </ul>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.footer`
  position: fixed;
  height: 50px;
  right: 0;
  left: 0;
  bottom: 0;
  background: var(--black);
  ul {
    font-family: 'BigNoodleTitling Oblique';
    display: flex;
    justify-content: center;
    li {
      margin: 10px;
      a {
        color: var(--white);
        font-size: 24px;
        &:hover {
          font-size: 32px;
        }
      }
    }
  }
`