import type { ChangeEvent } from "react";
import type { SearchParams } from "../types/search";

interface SearchBarProps {
  // Current search parameters from hook
  params: SearchParams;

  // Setter to update search params
  setParams: (p: Partial<SearchParams>) => void;
}

export function SearchBar({ params, setParams }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the searchText in params and reset page to 1
    setParams({ searchText: e.target.value, page: 1 });
  };

  return (
    <input
    type="text"
    placeholder="Search Betashares..."
    value={params.searchText}
    onChange={handleChange}
    className={`border rounded p-2 w-full`}
    />
  );
}