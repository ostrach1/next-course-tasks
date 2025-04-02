import { Checkbox } from "@/components/ui/checkbox";

type Task = {
  text: string;
  done: boolean;
};

export default function ToDoList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center gap-2">
          <Checkbox id={`task-${index}`} checked={task.done} />
          <label htmlFor={`task-${index}`} className="text-sm">
            {task.text}
          </label>
        </div>
      ))}
    </div>
  );
}
