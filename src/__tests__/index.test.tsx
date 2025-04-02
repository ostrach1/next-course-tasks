import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RevalidateButton from "../app/RevalidateButton";
import * as PageModule from "../app/page";
import { revalidatePath } from "next/cache";

// Mockujemy revalidatePath, żeby nie wywoływało prawdziwej rewalidacji
jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));

// ✅ 1. Czy komponent renderuje poprawnie czas i przycisk
it("Renderuje aktualny czas i przycisk Revalidate", async () => {
  const Page = PageModule.default;
  const ui = await Page();
  render(ui);

  expect(screen.getByText(/Aktualny czas/)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Revalidate/i })
  ).toBeInTheDocument();
});

// ✅ 2. Czy komponent klientowy działa i wywołuje funkcję po kliknięciu
it("RevalidateButton wywołuje onRevalidate po kliknięciu", async () => {
  const onRevalidate = jest.fn();
  render(<RevalidateButton onRevalidate={onRevalidate} />);
  const button = screen.getByRole("button", { name: /Revalidate/i });
  await userEvent.click(button);
  expect(onRevalidate).toHaveBeenCalledTimes(1);
});

// ✅ 3. Czy Server Action wywołuje revalidatePath('/')
it("Server Action wywołuje revalidatePath('/')", async () => {
  const Page = PageModule.default;
  const ui = await Page();
  render(ui);

  const button = screen.getByRole("button", { name: /Revalidate/i });
  await userEvent.click(button);

  expect(revalidatePath).toHaveBeenCalledWith("/");
});

// ✅ 4. Czy ustawiono dynamiczne generowanie strony
it("Strona główna ustawia dynamiczne renderowanie", () => {
  expect(PageModule.dynamic).toBe("force-dynamic");
});
