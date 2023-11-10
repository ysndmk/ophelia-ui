import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CustomPagination from "./CustomPagination";

const meta: Meta<typeof CustomPagination> = {
  component: CustomPagination,
  title: "Components/Pagination",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CustomPagination>;

export const Pagination: Story = (args) => (
  <CustomPagination data-test-id="Pagination-id" {...args} />
);

Pagination.args = {
  totalItemCount: 10,
  paginationOnChange: () => {},
  showSizeChanger: true,
  current: 5,
  pageSize: 10,
};
