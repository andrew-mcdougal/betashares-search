import type { Meta, StoryObj } from "@storybook/react";
import { SearchResults } from "./SearchResults";
import type { SearchResult } from "../types/search";

const meta = {
  title: "Components/SearchResults",
  component: SearchResults,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof SearchResults>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data for stories
const mockResults: SearchResult[] = [
  {
    symbol: "VAS",
    display_name: "Vanguard Australian Shares Index ETF",
    fund_size: 15000000000,
    management_fee: 0.04,
    management_approach: "Passive",
    investment_suitability: "Capital growth",
    dividend_frequency: "Annually",
  },
  {
    symbol: "VGS",
    display_name: "Vanguard Global Shares Index ETF",
    fund_size: 12000000000,
    management_fee: 0.06,
    management_approach: "Passive",
    investment_suitability: "Capital growth",
    dividend_frequency: "Annually",
  },
  {
    symbol: "AFI",
    display_name: "Australian Financials ETF",
    fund_size: 8000000000,
    management_fee: 0.25,
    management_approach: "Active",
    investment_suitability: "Income",
    dividend_frequency: "Monthly",
  },
];

export const WithResults: Story = {
  args: {
    results: mockResults,
    loading: false,
    error: null,
    total: 42,
  },
};

export const Loading: Story = {
  args: {
    results: [],
    loading: true,
    error: null,
    total: 0,
  },
};

export const Error: Story = {
  args: {
    results: [],
    loading: false,
    error: "Failed to fetch search results. Please try again.",
    total: 0,
  },
};

export const NoResults: Story = {
  args: {
    results: [],
    loading: false,
    error: null,
    total: 0,
  },
};

export const LargeResultSet: Story = {
  args: {
    results: mockResults,
    loading: false,
    error: null,
    total: 234,
  },
};
