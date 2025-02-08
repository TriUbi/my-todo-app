import { ListItem, Button } from "../styles/TodoItem.styles";
import { Todo } from "../types/types";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem completed={todo.completed}>
      <span>{todo.text}</span>
      <div>
        <Button onClick={() => toggleTodo(todo.id)}>✔</Button>
        <Button onClick={() => deleteTodo(todo.id)}>❌</Button>
      </div>
    </ListItem>
  );
};

export default TodoItem;
