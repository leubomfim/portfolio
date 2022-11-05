import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${() => css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

  * {
    border: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border-radius: 0;
    list-style: none;
    text-decoration: none;
  };

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #151515;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: white;
      border-radius: 3px;
    }
  }

  button, input, select {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
`}
`;
