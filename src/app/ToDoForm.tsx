"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-end gap-3"
      >
        <FormField
          name="text"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zadanie</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Dodaj</Button>
      </form>
    </Form>
  );
}
