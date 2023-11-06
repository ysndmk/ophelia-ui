import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

import Input from "./Input";

describe("Running Test for Component Input", () => {
  test("Check placeholder in Input", () => {
    render(<Input placeholder="Hello component" />);
    expect(screen.getByPlaceholderText("Hello component")).toHaveAttribute(
      "placeholder",
      "Hello component"
    );
  });

  test("renders the Input Component", async () => {
    render(<Input placeholder="component" />);
    const input = screen.getByPlaceholderText("component") as HTMLInputElement;
    userEvent.type(input, "Hello world!");
    await waitFor(() => expect(input.value).toBe("Hello world!"));
  });

});
