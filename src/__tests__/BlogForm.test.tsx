import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogForm from "../app/BlogForm";

jest.mock("@/app/blog-api", () => ({
  addEntry: jest.fn(),
}));

describe("Formularz BlogForm (ShadCN)", () => {
  it("Renderuje pola formularza i przycisk submit", async () => {
    render(<BlogForm />);

    const titleInput = screen.getByLabelText("Title");
    const contentInput = screen.getByLabelText("Content");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Sprawdzenie klas ShadCN
    expect(titleInput).toHaveClass("rounded-md");
    expect(contentInput).toHaveClass("rounded-md");
    expect(submitButton).toHaveClass("inline-flex");

    // Wypełnienie i wysyłka formularza
    await userEvent.type(titleInput, "Wpis testowy");
    await userEvent.type(contentInput, "Zawartość testowa");
    await userEvent.click(submitButton);

    // Po submit inputy powinny być wyczyszczone
    expect(titleInput).toHaveValue("");
    expect(contentInput).toHaveValue("");
  });
});
