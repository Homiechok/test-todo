import TodoItem from "./TodoItem.tsx";
import type { Todo } from "../types.ts";

type PropsType = {
  todos: Todo[];
  onToggle: (id: number) => void;
};

export default function TodoList(props: PropsType) {
  const { todos, onToggle } = props;

  if (todos.length === 0) {
    return <p className="text-gray-500 p-4">Нет задач</p>;
  }

  return (
    <ul role="list" aria-label="Todo list" className="p-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}
