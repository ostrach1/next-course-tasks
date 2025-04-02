import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoForm from "../app/ToDoForm";
import ToDoList from "../app/ToDoList";
import Page from "../app/page";

it("renderuje formularz i listę zadań", () => {
  render(<Page />);

  // Czy formularz istnieje
  expect(screen.getByLabelText("Zadanie")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /dodaj/i })).toBeInTheDocument();

  // Lista zadań początkowo pusta
  expect(screen.queryByText("Pierwsze zadanie")).not.toBeInTheDocument();
});

it("dodaje nowe zadanie do listy", async () => {
  render(<Page />);

  const input = screen.getByLabelText("Zadanie");
  const button = screen.getByRole("button", { name: /dodaj/i });

  await userEvent.type(input, "Pierwsze zadanie");
  await userEvent.click(button);

  expect(await screen.findByText("Pierwsze zadanie")).toBeInTheDocument();
});

it("Używa komponentu Checkbox z ShadCN", () => {
  const tasks = [{ text: "Zadanie", done: true }];
  render(<ToDoList tasks={tasks} />);

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toHaveClass("peer");
});

it("Wyświetla wszystkie zadania", () => {
  const tasks = [
    { text: "Pierwsze", done: false },
    { text: "Drugie", done: true },
  ];
  render(<ToDoList tasks={tasks} />);
  expect(screen.getByText("Pierwsze")).toBeInTheDocument();
  expect(screen.getByText("Drugie")).toBeInTheDocument();
});

it("używa komponentów ShadCN", () => {
  render(<ToDoForm addTask={() => {}} />);

  const input = screen.getByLabelText("Zadanie");
  const button = screen.getByRole("button", { name: /dodaj/i });

  // ✅ Weryfikacja klas Tailwinda z ShadCN UI
  expect(input).toHaveClass("rounded-md");
  expect(button).toHaveClass("inline-flex");

  // ✅ Weryfikacja obecności label + form item
  const label = screen.getByText("Zadanie");
  expect(label.tagName).toBe("LABEL");
});

it("dodaje zadanie po wysłaniu formularza", async () => {
  const addTask = jest.fn();
  render(<ToDoForm addTask={addTask} />);

  const input = screen.getByLabelText("Zadanie");
  await userEvent.type(input, "Nowe zadanie");
  await userEvent.click(screen.getByRole("button", { name: /dodaj/i }));

  expect(addTask).toHaveBeenCalledWith("Nowe zadanie");
});
