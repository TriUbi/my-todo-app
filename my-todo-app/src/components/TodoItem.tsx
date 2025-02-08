import { Todo } from "../types/types";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => toggleTodo(todo.id)}>✔</button>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
};

export default TodoItem;
