import type { ChangeEvent } from "react";
import type { SearchParams } from "../types/search";
import type { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  className?: string;
  // Current search parameters from hook
  params: SearchParams;

  // Setter to update search params
  setParams: Dispatch<SetStateAction<SearchParams>>;
}

export function SearchBar({ className, params, setParams }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the searchText in params and reset page to 1
    setParams((prev) => ({
      ...prev,
      searchText: e.target.value,
      page: 1,
    }));
  };

  return (
    <div className={`${className}`}>
      <input
        type="text"
        placeholder="Search Betashares..."
        value={params.searchText}
        onChange={handleChange}
        className={`border rounded p-2 w-full`}
      />
    </div>
  );
}
