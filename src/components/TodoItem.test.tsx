import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TodoItem from "./TodoItem.tsx";
import type { Todo } from "../types.ts";

describe('TodoItem', () => {
  it('Toggle checkbox', () => {
    const todo: Todo = { id: 1, text: "test", completed: false };
    const handleToggle = vi.fn();

    render(<TodoItem todo={todo} onToggle={handleToggle} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleToggle).toHaveBeenCalledWith(1);
  });
});