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
    buttonType: {
      options: [
        "primary",
        "secondary",
        "danger",
        "warning",
        "success",
        "darkBlue",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof CustomButton>;

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

export const ButtonTypes: Story = (args) => (
  <div>
    <CustomButton data-test-id="Button-id" {...args}>
      {args.children}
    </CustomButton>
  </div>
);
ButtonTypes.args = {
  children: "Custom Button Types",
  buttonType: "darkBlue",
};
