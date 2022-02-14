import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', sans-serif;
  transition: all 0.50s linear;
}
body {
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.body};
  margin: 0;
  display: flex;
  height: 100vh;
  }

button {
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
}

.normal-btn {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.primary};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 3px;
}

.highlight-btn {
  background: ${({ theme }) => theme.primary} ;
  color: ${({ theme }) => theme.body};  
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 3px;
}

input {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.primary};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 3px;g
}

`;
