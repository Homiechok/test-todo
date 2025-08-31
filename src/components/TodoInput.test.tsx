import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TodoInput from "./TodoInput.tsx";

describe("TodoInput", () => {
  it("Add todo on enter", () => {
    const handleAdd = vi.fn();
    render(<TodoInput onAdd={handleAdd} />);

    const input = screen.getByPlaceholderText(/What need to be done/i);

    fireEvent.change(input, { target: { value: "qwerty" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(handleAdd).toHaveBeenCalledWith("qwerty");
  });
});
