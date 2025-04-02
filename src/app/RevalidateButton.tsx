"use client";

export default function RevalidateButton({
  onRevalidate,
}: {
  onRevalidate: () => Promise<void>;
}) {
  return (
    <button
      className="mt-4 bg-red-400 rounded-lg p-4"
      onClick={async () => await onRevalidate()}
    >
      Revalidate
    </button>
  );
}
