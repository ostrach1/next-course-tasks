export default function RevalidateButton({}) {
  return (
    <button
      onClick={async () => console.log("revalidate")}
      className="p-4 bg-red-500 rounded-lg mt-4"
    >
      Revalidate
    </button>
  );
}
