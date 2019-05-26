import { createGlobalStyle } from 'styled-components';
import vars from './vars'
import noodleFont from '../fonts/big_noodle_titling_oblique.woff'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BigNoodleTitling Oblique';
    font-style: normal;
    font-weight: normal;
    src: local('BigNoodleTitling Oblique'), url(${noodleFont}) format('woff');
  }

  ${vars};

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', Helvetica, arial, sans-serif;
  }
  
  body {
    background-color: var(--light-grey);
    font-size: 1.6rem;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'BigNoodleTitling Oblique', Helvetica, arial, sans-serif;
  }

  h1 {
    font-size: 72px;
    text-transform: uppercase;
  } 

  h1, h2, h3, p {
    color: var(--dark-grey);
  }

  a {
    color: var(--black);
    font-weight: 800;
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    li a {
      transition: color var(--transition-time), font-size var(--transition-time) ease;
    }
  }
`;

export default GlobalStyle;
