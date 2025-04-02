"use client";

export default function RevalidateButton({
  onRevalidate,
}: {
  onRevalidate: () => Promise<void>;
}) {
  return <button onClick={async () => await onRevalidate()}>Revalidate</button>;
}
