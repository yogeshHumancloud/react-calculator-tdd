import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  // Test for rendering
  test("renders calculator with number buttons and operation buttons", () => {
    render(<Calculator />);

    // Check if display is rendered with initial value
    expect(screen.getByTestId("display")).toHaveTextContent("0");

    // Check for number buttons using a more specific role
    const buttons = screen.getAllByRole("button");
    for (let i = 0; i <= 9; i++) {
      expect(
        buttons.some((button) => button.textContent === i.toString())
      ).toBeTruthy();
    }

    // Check for operation buttons
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "×" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "=" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "C" })).toBeInTheDocument();
  });

  // Test for addition functionality
  test("performs addition correctly", () => {
    render(<Calculator />);

    // Click buttons for "2 + 3 ="
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("display")).toHaveTextContent("5");
  });

  // Test for subtraction functionality
  test("performs subtraction correctly", () => {
    render(<Calculator />);

    // Click buttons for "7 - 4 ="
    fireEvent.click(screen.getByRole("button", { name: "7" }));
    fireEvent.click(screen.getByRole("button", { name: "-" }));
    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("display")).toHaveTextContent("3");
  });

  // Test for multiplication functionality
  test("performs multiplication correctly", () => {
    render(<Calculator />);

    // Click buttons for "6 × 8 ="
    fireEvent.click(screen.getByRole("button", { name: "6" }));
    fireEvent.click(screen.getByRole("button", { name: "×" }));
    fireEvent.click(screen.getByRole("button", { name: "8" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("display")).toHaveTextContent("48");
  });

  // Test for clear functionality
  test("clears the display when C button is clicked", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "C" }));

    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });
});
