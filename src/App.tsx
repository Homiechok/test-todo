import Footer from "./components/Footer.tsx";
import TodoList from "./components/TodoList.tsx";
import TodoInput from "./components/TodoInput.tsx";
import { usePersistedTodos } from "./hooks/usePersistedTodos.ts";

export default function App() {
  usePersistedTodos();

  return (
    <div className="p-4 max-w-[40%] mx-auto">
      <h1 className="text-5xl font-bold mb-4 text-center text-gray-400">
        todos
      </h1>
      <TodoInput />
      <TodoList />
      <Footer />
    </div>
  );
}
