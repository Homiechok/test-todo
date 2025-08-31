import type { Todo } from "../types.ts";

type PropsType = {
  todo: Todo;
};

export default function TodoItem(props: PropsType) {
  const {todo} = props;
  return <div>
    <input
      type={"checkbox"}
    />
    {todo.text}
  </div>;
}
