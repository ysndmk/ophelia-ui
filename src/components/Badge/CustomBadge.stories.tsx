import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CustomBadge from "./CustomBadge";

const meta: Meta<typeof CustomBadge> = {
  component: CustomBadge,
  title: "Components/Badge",
  tags: ["autodocs"],
  argTypes: {
    shape: {
      options: ["square", "circle", ""],
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CustomBadge>;

export const Badge: Story = (args) => (
  <CustomBadge data-test-id="Badge-id" {...args} />
);

Badge.args = {
  id: "id",
  propName: "badge",
  shape: "square",
  size: "small",
  count: 23,
  onlineStatus: "online",

};

export const Avatar: Story = (args) => (
  <CustomBadge data-test-id="Badge-id" {...args} />
);

Avatar.args = {
  id: "id",
  propName: "Avatar",
  shape: "circle",
  size: "default",
  onlineStatus: "online",
  type: "avatar",
  avatarUrl: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",
};

export const Notification: Story = (args) => (
  <CustomBadge data-test-id="Badge-id" {...args} />
);

Notification.args = {
  id: "id",
  propName: "BadgeWithIcon",
  size: "small",
  count: 999,
  color: "#f5222d",
};
