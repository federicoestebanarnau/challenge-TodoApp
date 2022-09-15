import { render, screen } from "@testing-library/react";
import App from "./App";
import FilterButton from "../src/components/FilterButton";
import ToDo from "./App";
import userEvent from "@testing-library/user-event";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/ToDo/);
  expect(linkElement).toBeInTheDocument();
});

describe("FilterButton", () => {
  test("Button", async () => {
    render(<FilterButton />);
    const btn = await screen.findAllByRole("button");
    expect(btn).toHaveLength(1);
  });
});

describe("ToDo", () => {
  test("botones para clickear pantalla de inicio", async () => {
    render(<ToDo />);
    const btn = await screen.findAllByRole("button");
    expect(btn).toHaveLength(12);
  });

  test("placeholder", () => {
    render(<ToDo />);
    const place = screen.getByPlaceholderText("");
    expect(place).toBeInTheDocument();
  });
});
