import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { type Todo } from "@/types/todo";

const filePath = "todos.json";

async function readTodos(): Promise<Todo[]> {
  try {
  } catch {
    return [];
  }
}

async function writeTodos(todos: Todo[]) {}

export async function GET() {}

export async function POST(request: Request) {}

export async function DELETE() {}
