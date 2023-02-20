import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn golang link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn react/i);
  expect(linkElement).toBeInTheDocument();
});
