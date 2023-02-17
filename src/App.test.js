import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn golang link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn golang/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn golang link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn golang/i);
  expect(linkElement).toBeInTheDocument();
});
