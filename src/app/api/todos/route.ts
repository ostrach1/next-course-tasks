import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const filePath = "todos.json";

async function readTodos(): Promise<Todo[]> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeTodos(todos: Todo[]) {
  await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
}

export async function GET() {
  const todos = await readTodos();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const todos = await readTodos();
  const { title } = await request.json();
  const newTodo: Todo = {
    id: Math.random().toString(36).substring(2),
    title: title || "Nowe zadanie",
    completed: false,
  };
  todos.push(newTodo);
  await writeTodos(todos);
  return NextResponse.json(newTodo, { status: 201 });
}

export async function DELETE() {
  await writeTodos([]);
  return NextResponse.json(
    { message: "Wyczyszczono listę zadań" },
    { status: 200 }
  );
}
