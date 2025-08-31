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
      />
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.text}
      </span>
    </li>
  );
}
