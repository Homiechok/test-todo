import { useTodoStore } from "../store/todoStore.ts";
import { useEffect } from "react";
import localforage from "localforage";
import type { Todo } from "../types.ts";

export function usePersistedTodos() {
  const { todos, setTodos } = useTodoStore();

  const TODOS_KEY = "tasks";

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const savedTodos = await localforage.getItem<Todo[]>(TODOS_KEY);
        if (savedTodos) {
          setTodos(savedTodos);
        }
      } catch (error) {
        console.error("Ошибка загрузки задач:", error);
      }
    };
    loadTodos();
  }, [setTodos]);

  useEffect(() => {
    localforage.setItem<Todo[]>(TODOS_KEY, todos).catch((error) =>
      console.error("Ошибка сохранения задач:", error)
    );
  }, [todos]);
}