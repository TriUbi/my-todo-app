import styled from "styled-components";

export const ListItem = styled.li<{ $completed?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin: 8px 0;
  background-color: ${({ theme }) => theme.itemBackground || "#f9f9f9"};
  border-radius: 8px;
  color: #000000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  span {
    flex: 1;
    text-decoration: ${({ $completed }) =>
      $completed ? "line-through" : "none"};
    color: ${({ $completed }) => ($completed ? "#666666" : "#000000")};
  }

  &:hover {
    background-color: ${({ theme }) => theme.itemHover || "#e0e0e0"};
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 10px;
  transition: transform 0.2s ease;
  color: #000000;

  &:hover {
    transform: scale(1.2);
  }
`;
