import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TodoListContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.todoBackground};
  border: 1px solid ${({ theme }) => theme.todoBorder};
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const TodoText = styled.span<{ completed: boolean }>`
  flex: 1;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  opacity: ${({ completed }) => (completed ? 0.7 : 1)};
  transition: all 0.2s ease;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 1rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background: ${({ theme }) => theme.deleteButton};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.deleteButtonHover};
    transform: scale(1.05);
  }
`;
