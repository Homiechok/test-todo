import type { Filter, Todo } from "../types.ts";
import { create } from "zustand/react";

interface TodoStore {
  todos: Todo[];
  filter: Filter;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  clearCompleted: () => void;
  setFilter: (filter: Filter) => void;
  setTodos: (todos: Todo[]) => void;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  filter: "All",

  addTodo: (text) => set({
      todos: [...get().todos, { id: Date.now(), text, completed: false }],
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
