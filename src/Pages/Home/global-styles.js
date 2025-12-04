import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({ menu }) => css`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;600;700;800&display=swap");

    :root {
      --bg-color: #0a0a0a;
      --primary-color: #6366f1;
      --secondary-color: #ec4899;
      --text-color: #f3f4f6;
      --text-secondary: #9ca3af;
      --glass-bg: rgba(255, 255, 255, 0.03);
      --glass-border: rgba(255, 255, 255, 0.05);
      --card-hover: rgba(255, 255, 255, 0.08);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
    }

    html {
      scroll-behavior: smooth;
      font-size: 62.5%; /* 1rem = 10px */
    }

    body {
      ${menu ? "overflow: hidden;" : "overflow-x: hidden;"}
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-color);
      color: var(--text-color);
      font-size: 1.6rem;
      line-height: 1.6;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: var(--bg-color);
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--primary-color);
        border-radius: 4px;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Outfit", sans-serif;
      font-weight: 700;
    }

    button,
    input,
    select,
    a {
      font-family: "Outfit", sans-serif;
    }

    img {
      max-width: 100%;
      display: block;
    }
  `}
`;
