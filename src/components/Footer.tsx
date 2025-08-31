import type { Filter, Todo } from "../types.ts";

type PropsType = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  todos: Todo[];
  clearCompleted: () => void;
};

export default function Footer(props: PropsType) {
  const { filter, setFilter, todos, clearCompleted } = props;

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="flex justify-between items-center gap-5 text-sm text-gray-600">
      <span>{remaining} items left</span>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setFilter("All")}
          disabled={filter === "All"}
          className={`px-3 py-1 rounded border transition cursor-pointer ${
            filter === "All"
              ? "bg-amber-500 text-white border-amber-600"
              : "bg-gray-100 text-gray-700 border-gray-300"
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter("Active")}
          disabled={filter === "Active"}
          className={`px-3 py-1 rounded border transition cursor-pointer ${
            filter === "Active"
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-gray-100 text-gray-700 border-gray-300"
          }`}
        >
          Active
        </button>
        <button
          type="button"
          onClick={() => setFilter("Completed")}
          disabled={filter === "Completed"}
          className={`px-3 py-1 rounded border transition cursor-pointer ${
            filter === "Completed"
              ? "bg-green-500 text-white border-green-600"
              : "bg-gray-100 text-gray-700 border-gray-300"
          }`}
        >
          Completed
        </button>
      </div>
      <button
        type="button"
        onClick={clearCompleted}
        className="px-3 py-1 rounded border bg-red-400 text-white border-red-500 cursor-pointer"
      >
        Clear completed
      </button>
    </div>
  );
}
