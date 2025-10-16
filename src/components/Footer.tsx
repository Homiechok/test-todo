import { useTodoStore } from "../store/todoStore.ts";

export default function Footer() {
  const { todos, filter, setFilter, clearCompleted } = useTodoStore();

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="flex justify-between items-center gap-5 text-sm text-gray-600">
      <span aria-live="polite">{remaining} items left</span>
      <nav role="radiogroup" aria-label="Todo filters" className="flex gap-2">
        <button
          type="button"
          role="radio"
          aria-checked={filter === "All"}
          onClick={() => setFilter("All")}
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
          role="radio"
          aria-checked={filter === "Active"}
          onClick={() => setFilter("Active")}
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
          role="radio"
          aria-checked={filter === "Completed"}
          onClick={() => setFilter("Completed")}
          className={`px-3 py-1 rounded border transition cursor-pointer ${
            filter === "Completed"
              ? "bg-green-500 text-white border-green-600"
              : "bg-gray-100 text-gray-700 border-gray-300"
          }`}
        >
          Completed
        </button>
      </nav>
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
