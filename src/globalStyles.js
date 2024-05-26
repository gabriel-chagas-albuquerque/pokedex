import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
  body {
    margin:0;
    padding:0;
    box-sizing:border-box;
    background-image: url("background-image.png");
    background-size:cover;
  }
`
export default GlobalStyle