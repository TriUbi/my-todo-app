import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/globalStyles";
import { AppContainer, Title, Input } from "./styles/App.styles";
import TodoList from "./components/TodoList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Todo } from "./types/types";

import { Button } from "antd";
import styled from "styled-components";

const ThemeButton = styled(Button)<{ $themeMode: string }>`
  background-color: ${({ $themeMode }) =>
    $themeMode === "light" ? "#f5f5f5" : "#444"};
  color: ${({ $themeMode }) => ($themeMode === "light" ? "#333" : "#fff")};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ $themeMode }) =>
      $themeMode === "light" ? "#e0e0e0" : "#666"};
    color: ${({ $themeMode }) => ($themeMode === "light" ? "#000" : "#ddd")};
  }
`;

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [task, setTask] = useState("");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const addTodo = () => {
    if (task.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTask("");
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <Title>JUST DO IT.</Title>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <Input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />

        <ThemeButton
          $themeMode={theme}
          onClick={addTodo}
          style={{ marginTop: "10px" }}
        >
          Add Task
        </ThemeButton>

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
