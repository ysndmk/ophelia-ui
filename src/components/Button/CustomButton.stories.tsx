import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    iconPosition: {
      options: ["right", "left"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = (args) => (
  <CustomButton data-test-id="Button-id" {...args} />
);
Primary.args = {
  children: "Primary",
  shape: "default",
  ghost: false,
  loading: false,
  disabled: false,
  danger: false,
};

export const GhostButton: Story = (args) => (
  <div style={{ backgroundColor: "black", padding: "10px" }}>
    <CustomButton data-test-id="Button-id" {...args} />
  </div>
);
GhostButton.args = {
  children: "Background transparent",
  shape: "default",
  type: "primary",
  ghost: true,
  loading: false,
};

export const DeleteButton: Story = (args) => (
  <div style={{ backgroundColor: "black", padding: "10px" }}>
    <CustomButton data-test-id="Button-id" {...args} />
  </div>
);
DeleteButton.args = {
  children: "Delete",
  shape: "default",
  type: "primary",
  danger: true,
};

export const FullWidth: Story = (args) => (
  <div>
    <CustomButton data-test-id="Button-id" {...args} />
  </div>
);
FullWidth.args = {
  children: "make the button fit to its parent width.",
  fullWidth: true,
};

export const ButtonWithIcon: Story = (args) => (
  <div>
    <CustomButton data-test-id="Button-id" {...args} />
  </div>
);
ButtonWithIcon.args = {
  children: "Button With Icon",
  fullWidth: false,
  iconPosition: "left",
  iconName: "test",
};
