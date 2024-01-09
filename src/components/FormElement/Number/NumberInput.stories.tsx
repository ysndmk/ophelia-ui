import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import NumberInput from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  title: "Components/CustomInputs/NumberInput",
  tags: ["autodocs"],
  argTypes: {
    controls: {
      description: "Whether to show +- controls, or set custom arrows icon",
    },
    readOnly: {
      description: "If readonly the input",
    },
    autoFocus: {
      description: "If get focus when component mounted",
    },
    status: {
      options: ["warning", "error", ""],
      control: { type: "select" },
    },
    size: {
      options: ["large", "middle", "small"],
      control: { type: "radio" },
    },
    validateStatus: {
      options: ["success", "warning", "error", "validating", ""],
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Number: Story = (args) => (
  <NumberInput data-test-id="NumberInput-id" {...args} />
);

Number.args = {
  id: "11",
  min: 1,
  max: 10,
  defaultValue: 4,
  label: "Number",
  propName: "propName",
  disabled: false,
  formatter: null, // (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  parser: null, // (value) => value!.replace(/\$\s?|(,*)/g, ""),
  prefix: "",
  size: "large",
  controls: false,
  required: false,
  status: "warning",
  placeholder: "Enter number",
  readOnly: false,
  autoFocus: false,
  validateStatus: "",
  help: "Help Message",
  hasFeedbackIcon: true,
};
