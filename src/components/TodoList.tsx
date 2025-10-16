import TodoItem from "./TodoItem.tsx";
import { useTodoStore } from "../store/todoStore.ts";

export default function TodoList() {
  const { todos, filter, toggleTodo } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  if (todos.length === 0) {
    return <p className="text-gray-500 p-4">Нет задач</p>;
  }

  return (
    <ul role="list" aria-label="Todo list" className="p-4">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
      ))}
    </ul>
  );
}
