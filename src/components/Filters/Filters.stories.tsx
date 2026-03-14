import type { Meta, StoryObj } from "@storybook/react";
import { Filters } from "./Filters";
import type { SearchParams } from "../../types/search";
import { useState } from "react";

const meta = {
  title: "Components/Filters",
  component: Filters,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Filters>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to manage state for interactive stories
const FiltersWrapper = (args: React.ComponentProps<typeof Filters>) => {
  const [params, setParams] = useState<SearchParams>(args.params);

  return <Filters {...args} params={params} setParams={setParams} />;
};

const defaultParams: SearchParams = {
  searchText: "",
  page: 1,
  pageSize: 35,
  filters: {},
  orderBy: { field: "display_name", direction: "asc" },
};

export const Default: Story = {
  render: (args) => <FiltersWrapper {...args} />,
  args: {
    params: defaultParams,
    setParams: () => {},
  },
};

export const WithActiveFilters: Story = {
  render: (args) => <FiltersWrapper {...args} />,
  args: {
    params: {
      ...defaultParams,
      filters: {
        management_approach: ["Passive"],
        fund_size: { min: "0", max: "5000" },
      },
    },
    setParams: () => {},
  },
};

export const WithSearchText: Story = {
  render: (args) => <FiltersWrapper {...args} />,
  args: {
    params: {
      ...defaultParams,
      searchText: "Vanguard",
    },
    setParams: () => {},
  },
};

export const SortedByFundSize: Story = {
  render: (args) => <FiltersWrapper {...args} />,
  args: {
    params: {
      ...defaultParams,
      orderBy: { field: "fund_size", direction: "desc" },
    },
    setParams: () => {},
  },
};
