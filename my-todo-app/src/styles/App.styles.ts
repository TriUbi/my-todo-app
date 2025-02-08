// src/styles/App.styles.ts
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  width: 300px;
  background-color: ${({ theme }) =>
    theme.body === "#ffffff" ? "#f5f5f5" : "#222"};
  color: ${({ theme }) =>
    theme.body === "#ffffff" ? "#333" : "#f5f5f5"}; // Visible text color
  margin-bottom: 10px;
  transition: box-shadow 0.2s ease;

  &::placeholder {
    color: ${({ theme }) =>
      theme.body === "#ffffff" ? "#888" : "#bbb"}; // Subtle placeholder color
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
