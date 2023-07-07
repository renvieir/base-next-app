import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("render as expected", () => {
    render(<Home />);

    const heading = screen.getByText("Attachment finder");

    expect(heading).toBeInTheDocument();
  });
});
