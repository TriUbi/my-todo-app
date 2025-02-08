import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
    transition: all 0.3s ease-in-out;
  }
`;

export const lightTheme = {
  body: "#ffffff",
  text: "#000000",
};

export const darkTheme = {
  body: "#000000",
  text: "#ffffff",
};
