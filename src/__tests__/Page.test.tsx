import { render, screen } from "@testing-library/react";
import Home from "../app/page";

jest.mock("@/app/blog-api", () => ({
  getEntries: async () => [{ title: "Mocked Entry", text: "Content of entry" }],
}));

jest.mock("../app/BlogForm", () => () => <div>Mocked BlogForm</div>);

describe("Home Page", () => {
  it("renders blog entries and form", async () => {
    render(await Home());

    expect(await screen.findByText("Mocked Entry")).toBeInTheDocument();
    expect(screen.getByText("Content of entry")).toBeInTheDocument();
    expect(screen.getByText("Mocked BlogForm")).toBeInTheDocument();
  });
});
