"use client";

import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function Page() {
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);

  const addTask = (text: string) => {
    setTasks((prev) => [...prev, { text, done: false }]);
  };

  return (
    <div className="p-5 max-w-xl mx-auto space-y-5">
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
}
