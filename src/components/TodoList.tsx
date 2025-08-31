import TodoItem from "./TodoItem.tsx";
import type { Todo } from "../types.ts";

type PropsType = {
  todos: Todo[];
};

export default function TodoList(props: PropsType) {
  const { todos } = props;
  return todos.map((todo) => <TodoItem todo={todo} />);
}
