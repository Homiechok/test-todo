import { useState } from "react";
import type { Filter, Todo } from "./types.ts";
import Footer from "./components/Footer.tsx";
import TodoList from "./components/TodoList.tsx";
import TodoInput from "./components/TodoInput.tsx";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("All");

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return (
    <div className="p-4 max-w-[40%] mx-auto">
      <h1 className="text-5xl font-bold mb-4 text-center text-gray-400">
        todos
      </h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} />
      <Footer
        filter={filter}
        setFilter={setFilter}
        todos={todos}
        clearCompleted={() => setTodos(todos.filter((todo) => !todo.completed))}
      />
    </div>
  );
}
