"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function UserButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (status === "authenticated") {
    return (
      <div className="relative inline-block">
        <details className="dropdown">
          <summary className="cursor-pointer">
            <img
              src={session.user?.image ?? ""}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </summary>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md text-black p-2 z-50">
            <p className="px-2 py-1 text-sm">{session.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="mt-2 w-full bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
            >
              Wyloguj się
            </button>
          </div>
        </details>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Zaloguj się przez GitHub
    </button>
  );
}
