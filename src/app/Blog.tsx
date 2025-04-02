import { BlogEntry } from "./types";

export default function Blog({ entries }: { entries: BlogEntry[] }) {
  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index} className="mb-4">
          <h1 className="text-xl font-bold">{entry.title}</h1>
          <div>{entry.text} </div>
        </div>
      ))}
    </div>
  );
}
