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
      <input
        type="text"
        placeholder="Что необходимо сделать?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="border border-gray-500 rounded px-2 py-1 flex-1"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer"
      >
        Add
      </button>
    </div>
  );
}
