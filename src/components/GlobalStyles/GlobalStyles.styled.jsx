import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    color: #333;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  p, h1, h2{
    margin: 0;
  }
`;
