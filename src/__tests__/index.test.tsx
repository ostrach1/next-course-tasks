import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Todo } from "@/types/todo";

import Todos from "../app/Todos";

const mockTodos: Todo[] = [
  { id: "1", title: "Zadanie testowe 1", completed: false },
  { id: "2", title: "Zadanie testowe 2", completed: false },
];

it("Po kliknięciu „Dodaj” powinno wysłać żądanie", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockTodos),
    })
  ) as any;

  render(<Todos />);

  const input = screen.getByPlaceholderText(/wpisz nazwę zadania/i);
  fireEvent.change(input, { target: { value: "Testowe zadanie" } });

  const button = screen.getByRole("button", { name: /dodaj zadanie/i });
  fireEvent.click(button);

  expect(global.fetch).toHaveBeenCalledWith("/api/todos", expect.anything());
});

it("Po kliknięciu „Pobierz zadania” pobiera dane z API", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([{ id: "1", title: "Z testu", completed: false }]),
    })
  ) as any;

  render(<Todos />);

  const button = screen.getByRole("button", { name: /pobierz zadania/i });
  fireEvent.click(button);

  expect(global.fetch).toHaveBeenCalledWith("/api/todos");
});

it("Po kliknięciu „Wyczyść zadania (trwale)” wysyła DELETE", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: "Wyczyszczono" }),
    })
  ) as any;

  render(<Todos />);

  const button = screen.getByRole("button", {
    name: /wyczyść zadania \(trwale\)/i,
  });
  fireEvent.click(button);

  expect(global.fetch).toHaveBeenCalledWith("/api/todos", {
    method: "DELETE",
  });
});
