import type { Filter, Todo } from "../types.ts";
import { create } from "zustand/react";

interface TodoStore {
  todos: Todo[];
  filter: Filter;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, newText: string) => void;
  toggleTodo: (id: number) => void;
  clearCompleted: () => void;
  setFilter: (filter: Filter) => void;
  setTodos: (todos: Todo[]) => void;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  filter: "All",

  addTodo: (text: string) => set({
      todos: [...get().todos, { id: Date.now(), text, completed: false }],
    }),
  removeTodo: (id: number) => set({
    todos: get().todos.filter((t) => t.id !== id),
  }),
  updateTodo: (id: number, newText: string) => set({
    todos: get().todos.map((t) => t.id === id ? {...t, text: newText} : t)
  }),

  toggleTodo: (id) => set({
      todos: get().todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    }),

  clearCompleted: () => set({ todos: get().todos.filter((t) => !t.completed) }),

  setFilter: (filter) => set({ filter }),

  setTodos: (todos) => set({ todos }),
}));
