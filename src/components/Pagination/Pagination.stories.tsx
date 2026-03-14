import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const handlePageChange = (page: number) => {
  console.log("Page changed to:", page);
};

export const FirstPage: Story = {
  args: {
    page: 1,
    pageSize: 35,
    total: 150,
    onPageChange: handlePageChange,
  },
};

export const MiddlePage: Story = {
  args: {
    page: 5,
    pageSize: 35,
    total: 350,
    onPageChange: handlePageChange,
  },
};

export const LastPage: Story = {
  args: {
    page: 10,
    pageSize: 35,
    total: 350,
    onPageChange: handlePageChange,
  },
};

export const SinglePage: Story = {
  args: {
    page: 1,
    pageSize: 50,
    total: 42,
    onPageChange: handlePageChange,
  },
};

export const ManyPages: Story = {
  args: {
    page: 15,
    pageSize: 10,
    total: 500,
    onPageChange: handlePageChange,
  },
};

export const NoResults: Story = {
  args: {
    page: 1,
    pageSize: 35,
    total: 0,
    onPageChange: handlePageChange,
  },
};
