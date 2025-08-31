import "./App.css";
import { useState } from "react";
import type { Filter, Todo } from "./types.ts";
import Footer from "./components/Footer.tsx";
import TodoList from "./components/TodoList.tsx";
import TodoInput from "./components/TodoInput.tsx";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "123",
      completed: true,
    },
    {
      id: 2,
      text: "1123",
      completed: false,
    },
    {
      id: 3,
      text: "11123",
      completed: true,
    },
  ]);
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">todos</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
      <Footer filter={filter} />
    </div>
  );
}
