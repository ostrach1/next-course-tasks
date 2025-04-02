import Blog from "./Blog";
import BlogForm from "./BlogForm";
import { getEntries } from "./blog-api";

export default async function Home() {
  const entries = await getEntries();

  return (
    <div className="p-10">
      <div className="w-1/2">
        <Blog entries={entries} />
      </div>
      <div className="w-1/2">
        <BlogForm />
      </div>
    </div>
  );
}
