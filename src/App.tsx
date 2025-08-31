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
      completed: true,
    },
    {
      id: 3,
      text: "11123",
      completed: true,
    },
  ]);
  const [filter, setFilter] = useState<Filter>("All");

  return (
    <div className="app">
      <h1>todos</h1>
      <TodoInput />
      <TodoList todos={todos} />
      <Footer filter={filter} />
    </div>
  );
}
