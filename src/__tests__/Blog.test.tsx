import { render, screen } from "@testing-library/react";
import Blog from "../app/Blog";

const mockEntries = [
  { title: "First Post", text: "Hello world!" },
  { title: "Second Post", text: "Next.js is cool!" },
];

describe("Blog", () => {
  it("renders a list of blog entries", () => {
    render(<Blog entries={mockEntries} />);

    expect(screen.getByText("First Post")).toBeInTheDocument();
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
    expect(screen.getByText("Second Post")).toBeInTheDocument();
    expect(screen.getByText("Next.js is cool!")).toBeInTheDocument();
  });
});
