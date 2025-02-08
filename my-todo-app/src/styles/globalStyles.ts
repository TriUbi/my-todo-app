import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    min-height: 100vh;
    padding: 20px;
  }

  ::placeholder {
    color: ${({ theme }) => theme.text}88;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.primary};
  }
`;


export const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  border: "#e0e0e0",
  primary: "#007bff",
  placeholder: "#888888",
};

export const darkTheme = {
  background: "linear-gradient(135deg, #1c1c1c, #000000)",
  text: "#ffffff",
  taskText: "#000000",
  border: "#444",
  primary: "#ff6b6b",
  placeholder: "#bbbbbb",
};
