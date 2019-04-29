import { createGlobalStyle } from "styled-components"

const MonospaceFallbacks = `Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace`

const GlobalStyle = createGlobalStyle`
  body {
    color: rgba(0,0,0,.7);
    background-color: #f0f0f0;
  }
  * {
    font-family: "Anonymous Pro", ${MonospaceFallbacks};
  }
`

export default GlobalStyle
