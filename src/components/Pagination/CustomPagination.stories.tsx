import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CustomPagination from "./CustomPagination";

const meta: Meta<typeof CustomPagination> = {
  component: CustomPagination,
  title: "Components/Pagination",
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["default", "small"],
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CustomPagination>;

export const Pagination: Story = (args) => (
  <CustomPagination data-test-id="Pagination-id" {...args} />
);

Pagination.args = {
  id: "1",
  totalItemCount: 10,
  size: "small",
  paginationOnChange: () => {},
  showQuickJumper: true,
  defaultCurrent: 5,
  pageSize: 10,
};
