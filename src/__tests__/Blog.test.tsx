import { render, screen } from "@testing-library/react";
import Blog from "../app/Blog";

const mockEntries = [
  { title: "Pierwszy wpis", text: "Witaj świecie!" },
  { title: "Drugi wpis", text: "Next.js jest super!" },
];

describe("Komponent Blog", () => {
  it("Wyświetla listę wpisów blogowych", () => {
    render(<Blog entries={mockEntries} />);

    expect(screen.getByText("Pierwszy wpis")).toBeInTheDocument();
    expect(screen.getByText("Witaj świecie!")).toBeInTheDocument();
    expect(screen.getByText("Drugi wpis")).toBeInTheDocument();
    expect(screen.getByText("Next.js jest super!")).toBeInTheDocument();
  });
});
