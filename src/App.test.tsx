import App from "./App.tsx";
import { fireEvent, screen, render } from "@testing-library/react";

it("Filter active and completed todo", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/Что необходимо сделать?/i);

  fireEvent.change(input, { target: { value: "Todo 1" } });
  fireEvent.keyDown(input, { key: "Enter" });
  fireEvent.change(input, { target: { value: "Todo 2" } });
  fireEvent.keyDown(input, { key: "Enter" });

  const checkboxes = screen.getAllByRole("checkbox");
  fireEvent.click(checkboxes[0]);

  fireEvent.click(screen.getByText(/Active/i));
  expect(screen.getByText("Todo 2")).toBeInTheDocument();
  expect(screen.queryByText("Todo 1")).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /^Completed$/i }));
  expect(screen.getByText("Todo 1")).toBeInTheDocument();
});

it("Clear completed todo", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/Что необходимо сделать?/i);

  fireEvent.change(input, { target: { value: "test123" } });
  fireEvent.keyDown(input, { key: "Enter" });

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  fireEvent.click(screen.getByText(/Clear completed/i));

  expect(screen.queryByText("test123")).not.toBeInTheDocument();
});
