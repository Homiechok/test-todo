import type { Todo } from "../types.ts";

type PropsType = {
  todo: Todo;
  onToggle: (id: number) => void;
};

export default function TodoItem(props: PropsType) {
  const { todo, onToggle } = props;
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
      <label
        htmlFor={`todo-${todo.id}`}
        className={todo.completed ? "line-through text-gray-400" : ""}
      >
        {todo.text}
      </label>
    </li>
  );
}
