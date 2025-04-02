"use client";

import { useForm } from "react-hook-form";

type FormFields = {
  text: string;
};

export default function ToDoForm({
  addTask,
}: {
  addTask: (text: string) => void;
}) {
  const form = useForm<FormFields>({
    defaultValues: { text: "" },
  });

  const onSubmit = (data: FormFields) => {
    addTask(data.text);
    form.reset();
  };

  return null; // TODO: Uzupełnij komponent z użyciem ShadCN UI
}
