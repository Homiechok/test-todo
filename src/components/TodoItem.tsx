import type { Todo } from "../types.ts";
import { useTodoStore } from "../store/todoStore.ts";
import { EditableLabel } from "./EditableLabel.tsx";

type PropsType = {
  todo: Todo;
  onToggle: (id: number) => void;
};

export default function TodoItem(props: PropsType) {
  const { todo, onToggle } = props;
  const { removeTodo, updateTodo } = useTodoStore();

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  const handleUpdate = (newText: string) => {
    updateTodo(todo.id, newText);
  };

  return (
    <li className="flex items-center gap-2 py-1">
      <input
        id={`todo-${todo.id}`}
        type={"checkbox"}
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Todo: ${todo.text}`}
        className="
          h-4 w-4
          rounded
          border-gray-300
          text-blue-500
          focus:ring-blue-500
          cursor-pointer
          transition
        "
      />
      <EditableLabel label={todo.text} onChange={handleUpdate} />
      <button
        type="button"
        title="Удалить"
        onClick={handleDelete}
        className="
          ml-auto
          bg-red-500
          hover:bg-red-600
          text-white
          rounded
          w-6 h-6
          flex items-center justify-center
          transition
          duration-200
          cursor-pointer
          shadow-sm
        "
      >
        ×
      </button>
    </li>
  );
}
