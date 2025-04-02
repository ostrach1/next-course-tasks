import { render, screen } from "@testing-library/react";
import Home from "../app/page";

jest.mock("@/app/blog-api", () => ({
  getEntries: async () => [
    { title: "Wpis z API", text: "Zawartość z backendu" },
  ],
}));

jest.mock("@/app/BlogForm", () => () => (
  <div data-testid="shadcn-form">Mockowany formularz</div>
));

describe("Strona główna (Home)", () => {
  it("Renderuje komponent Blog oraz formularz", async () => {
    render(await Home());

    expect(await screen.findByText("Wpis z API")).toBeInTheDocument();
    expect(screen.getByTestId("shadcn-form")).toBeInTheDocument();
  });
});
