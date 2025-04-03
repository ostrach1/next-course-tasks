"use client";

import { useState } from "react";
import { Todo } from "../types/todo";

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {};

  const addTodo = async () => {};

  const clearTodos = async () => {};

  const resetListLocally = () => {
    setTodos([]);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        🧾 Lista zadań ({todos.length})
      </h2>

      {todos.length === 0 ? (
        <p className="mb-4 text-gray-500">Brak dostępnych zadań.</p>
      ) : (
        <ul className="mb-4">
          {todos.map((todo) => (
            <li key={todo.id} className="mb-1">
              {todo.title}
            </li>
          ))}
        </ul>
      )}

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Wpisz nazwę zadania"
        className="border px-2 py-1 mb-2 w-full rounded"
      />

      <div className="flex flex-col gap-2">
        <button
          onClick={fetchTodos}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          📥 Pobierz zadania
        </button>
        <button
          onClick={addTodo}
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          ➕ Dodaj zadanie
        </button>
        <button
          onClick={clearTodos}
          className="bg-red-600 text-white px-4 py-1 rounded"
        >
          🗑️ Wyczyść zadania (trwale)
        </button>
        <button
          onClick={resetListLocally}
          className="bg-yellow-500 text-white px-4 py-1 rounded"
        >
          🔄 Wyczyść listę (lokalnie)
        </button>
      </div>
    </div>
  );
}
