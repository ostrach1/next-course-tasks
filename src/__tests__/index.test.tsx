import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Todos from "../app/Todos";
import "@testing-library/jest-dom";

global.fetch = jest.fn();

const mockTodos = [
  { id: "1", title: "Zadanie 1" },
  { id: "2", title: "Zadanie 2" },
];

beforeEach(() => {
  jest.clearAllMocks();
});

test("Pobiera i wyświetla zadania z API", async () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    json: async () => mockTodos,
  });

  render(<Todos />);
  fireEvent.click(screen.getByText("📥 Pobierz zadania"));

  await waitFor(() => {
    expect(screen.getByText("Zadanie 1")).toBeInTheDocument();
    expect(screen.getByText("Zadanie 2")).toBeInTheDocument();
    expect(screen.getByText(/Lista zadań \(2\)/)).toBeInTheDocument();
  });
});

test("Dodaje nowe zadanie", async () => {
  (fetch as jest.Mock)
    .mockResolvedValueOnce({ json: async () => ({}) })
    .mockResolvedValueOnce({ json: async () => mockTodos });

  render(<Todos />);
  fireEvent.change(screen.getByPlaceholderText("Wpisz nazwę zadania"), {
    target: { value: "Nowe zadanie" },
  });
  fireEvent.click(screen.getByText("➕ Dodaj zadanie"));

  await waitFor(() => {
    expect(fetch).toHaveBeenCalledWith(
      "/api/todos",
      expect.objectContaining({
        method: "POST",
      })
    );
    expect(fetch).toHaveBeenCalledWith("/api/todos"); // po POST – GET
    expect(screen.getByText("Zadanie 1")).toBeInTheDocument();
  });
});

test("Trwale usuwa wszystkie zadania", async () => {
  (fetch as jest.Mock)
    .mockResolvedValueOnce({}) // DELETE
    .mockResolvedValueOnce({ json: async () => [] }); // po usunięciu

  render(<Todos />);
  fireEvent.click(screen.getByText("🗑️ Wyczyść zadania (trwale)"));

  await waitFor(() => {
    expect(fetch).toHaveBeenCalledWith("/api/todos", { method: "DELETE" });
  });
});
