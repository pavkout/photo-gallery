import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
  }
  #__next{
    margin:0 auto;
    height: 100vh;
  }
 `;

export default GlobalStyles;
