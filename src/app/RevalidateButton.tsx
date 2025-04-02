"use client";

export default function RevalidateButton({
  onRevalidate,
}: {
  onRevalidate: () => Promise<void>;
}) {
  return (
    <button
      onClick={async () => await onRevalidate()}
      className="p-4 bg-red-500 rounded-lg mt-4"
    >
      Revalidate
    </button>
  );
}
