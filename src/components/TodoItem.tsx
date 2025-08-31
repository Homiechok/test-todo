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
        type={"checkbox"}
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="
          h-4 w-4
          rounded
          border-gray-300
          text-blue-500
          fouce:ring-blue-500
          cursor-pointer
          transition
        "
      />
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.text}
      </span>
    </li>
  );
}
