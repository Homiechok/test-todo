import { useState } from "react";

type PropsType = {
  onAdd: (text: string) => void;
};

export default function TodoInput(props: PropsType) {
  const { onAdd } = props;

  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim() === "") return;
    onAdd(value.trim());
    setValue("");
  };

  return (
    <div className="flex gap-2">
      <label htmlFor="todo-input" className="sr-only">
        New todo
      </label>
      <input
        id="todo-input"
        type="text"
        placeholder="What need to be done?"
        aria-label="New Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="border border-gray-500 rounded px-2 py-1 flex-1"
      />
      <button
        type="button"
        onClick={handleSubmit}
        aria-label="Add todo"
        className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer"
      >
        Add
      </button>
    </div>
  );
}
