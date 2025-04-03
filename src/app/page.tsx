import { revalidatePath } from "next/cache";
import RevalidateButton from "./RevalidateButton";

export const dynamic = "force-dynamic";

// ⬇️ Server Action musi być poza komponentem
export async function onRevalidateHome() {
  "use server";
  revalidatePath("/");
}

export default function Home() {
  const now = new Date().toLocaleTimeString();

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl">Aktualny czas (z serwera)</h1>
      <p className="text-xl mt-2">{now}</p>
      <RevalidateButton onRevalidate={onRevalidateHome} />
    </main>
  );
}
