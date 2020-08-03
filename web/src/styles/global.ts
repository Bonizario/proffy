import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #F0F0F7;
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secondary: #04D361;
    --color-secondary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }

  a, button {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(---color-background);
  }

  body, input, button, textarea {
    color: var(--color-text-base);
    font: 400 1.6rem Poppins, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  /* 700px */
  @media (min-width: 43.75em) {
    :root {
      font-size: 62.5%;
    }
  }
`;

export default GlobalStyle;
