import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogForm from "../app/BlogForm";

jest.mock("@/app/blog-api", () => ({
  addEntry: jest.fn(),
}));

describe("BlogForm", () => {
  it("renders inputs and submits form", async () => {
    render(<BlogForm />);

    const titleInput = screen.getByLabelText("Title");
    const contentInput = screen.getByLabelText("Content");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(titleInput, "Test Title");
    await userEvent.type(contentInput, "Test Content");
    await userEvent.click(submitButton);

    expect(titleInput).toHaveValue("");
    expect(contentInput).toHaveValue("");
  });
});
