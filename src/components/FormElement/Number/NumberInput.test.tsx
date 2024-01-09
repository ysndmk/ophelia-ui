import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NumberInput from "./NumberInput";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: true,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Running Test for Number Input", () => {
  test("Check placeholder is correct", () => {
    render(<NumberInput placeholder="Number" />);
    const input = screen.getByPlaceholderText("Number");
    expect(input).toHaveAttribute("placeholder", "Number");
  });

  test("Check number input is disabled", () => {
    render(<NumberInput placeholder="Number" disabled={true} />);
    const input = screen.getByPlaceholderText("Number");
    expect(input).toBeDisabled();
  });

  test("Check number input is required", () => {
    render(<NumberInput placeholder="Number" required={true} />);
    const input = screen.getByPlaceholderText("Number");
    expect(input).toBeRequired();
  });
});
