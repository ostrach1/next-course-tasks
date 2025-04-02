import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoForm from "../app/ToDoForm";
import ToDoList from "../app/ToDoList";

it("używa komponentów ShadCN", () => {
  render(<ToDoForm addTask={() => {}} />);
  expect(screen.getByLabelText("Zadanie")).toHaveClass("rounded-md");
  expect(screen.getByRole("button", { name: /dodaj/i })).toHaveClass(
    "inline-flex"
  );
});

it("dodaje zadanie po wysłaniu formularza", async () => {
  const addTask = jest.fn();
  render(<ToDoForm addTask={addTask} />);
  const input = screen.getByLabelText("Zadanie");
  await userEvent.type(input, "Nowe zadanie");
  await userEvent.click(screen.getByRole("button", { name: /dodaj/i }));
  expect(addTask).toHaveBeenCalledWith("Nowe zadanie");
});

it("wyświetla wszystkie zadania", () => {
  const tasks = [
    { text: "Pierwsze", done: false },
    { text: "Drugie", done: true },
  ];
  render(<ToDoList tasks={tasks} />);
  expect(screen.getByText("Pierwsze")).toBeInTheDocument();
  expect(screen.getByText("Drugie")).toBeInTheDocument();
});
