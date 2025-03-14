import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
  }
  
  main {
    min-height: calc(100vh - 64px - 70px); /* Viewport height minus header and footer */
    background-color: ${props => props.theme.colors.background};
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: ${props => props.theme.transitions.default};
    
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
  
  /* Enhanced page transitions */
  .page-transition-enter {
    opacity: 0;
    transform: translateY(10px);
  }
  
  .page-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }
  
  .page-transition-exit {
    opacity: 1;
    transform: translateY(0);
  }
  
  .page-transition-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 300ms, transform 300ms;
  }
`;

export default GlobalStyle;
