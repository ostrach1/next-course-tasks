import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoForm from "../app/ToDoForm";
import ToDoList from "../app/ToDoList";
import Page from "../app/page";

it("Zawiera komponenty ShadCN: Form, Input, Button", () => {
  render(<ToDoForm addTask={() => {}} />);
  const input = screen.getByLabelText("Zadanie");
  const button = screen.getByRole("button", { name: /dodaj/i });

  expect(input).toHaveClass("rounded-md");
  expect(button).toHaveClass("inline-flex");
});

it("Używa FormItem, FormLabel i FormControl z ShadCN", () => {
  render(<ToDoForm addTask={() => {}} />);
  const label = screen.getByText("Zadanie");
  expect(label.tagName).toBe("LABEL");
  expect(label).toHaveClass("text-sm");
});

it("Czyści pole po dodaniu zadania", async () => {
  const addTask = jest.fn();
  render(<ToDoForm addTask={addTask} />);
  const input = screen.getByLabelText("Zadanie");
  const button = screen.getByRole("button", { name: /dodaj/i });

  await userEvent.type(input, "Zadanie testowe");
  await userEvent.click(button);

  expect(addTask).toHaveBeenCalledWith("Zadanie testowe");
  expect(input).toHaveValue("");
});

it("Renderuje listę zadań na podstawie propsów w ToDoList.tsx", () => {
  const tasks = [
    { text: "Zadanie 1", done: false },
    { text: "Zadanie 2", done: true },
  ];

  render(<ToDoList tasks={tasks} />);
  expect(screen.getByText("Zadanie 1")).toBeInTheDocument();
  expect(screen.getByText("Zadanie 2")).toBeInTheDocument();
});

it("Używa komponentu Checkbox z ShadCN w ToDoList.tsx", () => {
  const tasks = [{ text: "Zadanie", done: true }];
  render(<ToDoList tasks={tasks} />);

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toHaveClass("peer");
});

it("Renderuje ToDoForm i ToDoList w page.tsx", () => {
  render(<Page />);
  expect(screen.getByLabelText("Zadanie")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /dodaj/i })).toBeInTheDocument();
});

it("Dodaje zadanie do listy i wyświetla je w page.tsx", async () => {
  render(<Page />);

  const input = screen.getByLabelText("Zadanie");
  const button = screen.getByRole("button", { name: /dodaj/i });

  await userEvent.type(input, "Nowe zadanie");
  await userEvent.click(button);

  expect(await screen.findByText("Nowe zadanie")).toBeInTheDocument();
});
