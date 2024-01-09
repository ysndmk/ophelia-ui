import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import CustomButton from "./CustomButton";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: true,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Running Test for Custom Button", () => {
  test("Check button is disabled", () => {
    render(<CustomButton disabled={true}>Button</CustomButton>);
    const btn = screen.getByRole("button", { name: /Button/i });
    expect(btn).toBeDisabled();
  });

  test("Check button type is ghost", () => {
    render(
      <CustomButton ghost={true} size="large">
        Button
      </CustomButton>
    );
    const btn = screen.getByRole("button", { name: /Button/i });
    expect(btn).toHaveStyle("background-color: transparent");
  });
});
