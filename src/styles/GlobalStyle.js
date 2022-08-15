import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    padding: 0;
    border: 0;
    margin: 0;

    list-style: none;

  }
  
  #root {
    height: 100vh;
    background-color: #282a36;
  }
`;

export default GlobalStyle;
