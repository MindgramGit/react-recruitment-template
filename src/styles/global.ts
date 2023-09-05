import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: Sora, Helvetica, Arial, sans-serif;
    color: #272727;
    position: relative;
    height: 100%;
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
  }

  input, button, textarea {
    font-family: Sora, Helvetica, Arial, sans-serif;
    margin: 0;
  }

  button {
      color: inherit;
      &:active {
          color: inherit;
      }
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  #root {
    display: flex;
    min-width: 100%;
    min-height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`
