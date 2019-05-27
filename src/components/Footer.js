import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterWrapper className="footer">
    <ul>
      <li><a href="https://github.com/ericssartorius" target="_blank" rel="nofollow noopener noreferrer">Github</a></li>
      <li><a href="http://www.linkedin.com/in/ericsartorius/" target="_blank" rel="nofollow noopener noreferrer">Linkedin</a></li>
      <li><a href="http://twitter.com/the_epic_life" target="_blank" rel="nofollow noopener noreferrer">Twitter</a></li>
      <li><a href="https://dribbble.com/ericssartorius" target="_blank" rel="nofollow noopener noreferrer">Dribble</a></li>
      <li><a href="https://instagram.com/theepiclife" target="_blank" rel="nofollow noopener noreferrer">Instagram</a></li>
    </ul>
    <p>&copy; {new Date().getFullYear()}</p>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80px;
  padding: 1rem 1.5rem;
  right: 0;
  left: 0;
  bottom: 0;
  background: var(--black);
  p {
    color: var(--grey);
    opacity: 0.6;
    font-size: 14px;
    margin-top: 5px;
  }
  ul {
    font-family: 'BigNoodleTitling Oblique';
    display: flex;
    justify-content: center;
    padding: 0;
    li {
      margin: 0 10px;
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