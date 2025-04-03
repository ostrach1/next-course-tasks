import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const filePath = "todos.json";

async function getTodos(): Promise<Todo[]> {
  try {
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file);
  } catch {
    return [];
  }
}

async function addTodo(title: string): Promise<Todo> {
  const todos = await getTodos();
  const newTodo = {
    id: Math.random().toString(36).substring(2),
    title,
    completed: false,
  };
  todos.push(newTodo);
  await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
  return newTodo;
}

export async function GET() {
  const todos = await getTodos();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { title } = await request.json();
  const newTodo = await addTodo(title);
  return NextResponse.json(newTodo, { status: 201 });
}
