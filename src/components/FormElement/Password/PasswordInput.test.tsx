// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import PasswordInput from "./PasswordInput";

// window.matchMedia = jest.fn().mockImplementation(query => {
//     return {
//       matches: true, // Eşleşip eşleşmediğini burada ayarlayabilirsiniz.
//       media: query,
//       onchange: null,
//       addListener: jest.fn(),
//       removeListener: jest.fn(),
//     };
//   });
  

// describe("PasswordInput Component", () => {
//   it("renders correctly with default props", () => {
//     const { getByLabelText, getByPlaceholderText } = render(
//       <PasswordInput id="id" name="Password" />
//     );

//     expect(getByLabelText("Password:")).toBeInTheDocument();
//     expect(getByPlaceholderText("******")).toBeInTheDocument();
//     // Diğer özelliklere göre de testler ekleyebilirsiniz.
//   });

//   it("displays a warning status", () => {
//     const { getByLabelText } = render(
//       <PasswordInput id="id" name="Password" status="warning" />
//     );

//     const input = getByLabelText("Password:");
//     expect(input).toHaveClass("ant-input-warning");
//     // Diğer testler ekleyebilirsiniz.
//   });

//   it("allows user input and clears the input", () => {
//     const { getByLabelText, getByDisplayValue, getByTestId } = render(
//       <PasswordInput id="id" name="Password" label="Password:" allowClear={true} />
//     );

//     const input = getByLabelText("Password:");
//     const clearButton = getByTestId("PasswordInput-id").querySelector(".ant-input-clear-icon");

//     fireEvent.change(input, { target: { value: "testpassword" } });
//     expect(getByDisplayValue("testpassword")).toBeInTheDocument();

//     fireEvent.click(clearButton);
//     expect(getByDisplayValue("")).toBeInTheDocument();
//   });

//   // Diğer test senaryolarını eklemeye devam edebilirsiniz.
// });
