import type { Filter } from "../types.ts";

type PropsType = {
  filter: Filter;
};

export default function Footer(props: PropsType) {
  const {filter} = props;

  return (
    <div className="flex items-center gap-5">
      <div>2 items left</div>
      <div>
        <button type="button" disabled={filter === "All"}>All</button>
        <button type="button" disabled={filter === "Active"}>Active</button>
        <button type="button" disabled={filter === "Completed"}>Completed</button>
      </div>
      <button type="button">Clear completed</button>
    </div>
  );
}
