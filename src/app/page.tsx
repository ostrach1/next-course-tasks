import Todos from "./Todos";

export default function Home() {
  return (
    <main className="max-w-lg mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-6">
        🧪 Next.js Route Handlers – To-Do
      </h1>
      <Todos />
    </main>
  );
}
