import { useState, useEffect } from "react";
import { Todo } from "./types/types";
import TodoList from "./components/TodoList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/globalStyles";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <h1>To-Do List</h1>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Añadir tarea..."
        />
        <button onClick={addTodo}>Agregar</button>
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
