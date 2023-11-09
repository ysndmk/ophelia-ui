import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import PasswordInput from "./PasswordInput";
import "@testing-library/jest-dom";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: true,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Running Test for Password Input", () => {
  test("Check placeholder in Password", () => {
    render(<PasswordInput placeholder="Password" maxLength={3} />);
    const input = screen.getByPlaceholderText("Password");
    expect(input).toHaveAttribute("placeholder", "Password");
  });

  test("Check maxLength value is correct", () => {
    render(<PasswordInput placeholder="Password" maxLength={3} />);
    const input = screen.getByPlaceholderText("Password");
    expect(input).toHaveAttribute("maxLength", "3");
  });

  test("Check password input is disabled", () => {
    render(<PasswordInput placeholder="Password" disabled={true} />);
    const input = screen.getByPlaceholderText("Password");
    expect(input).toBeDisabled();
  });

  test("Check password input is required", () => {
    render(<PasswordInput placeholder="Password" required={true} />);
    const input = screen.getByPlaceholderText("Password");
    expect(input).toBeRequired();
  });
});
