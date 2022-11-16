import App from "./App";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

test("App should render without errors", () => {
  render(<App />);
  expect(screen.getByText(/training app/i)).toBeInTheDocument();
});
