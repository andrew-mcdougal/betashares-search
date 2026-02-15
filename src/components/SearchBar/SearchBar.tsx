import type { ChangeEvent } from "react";
import type { SearchParams } from "../../types/search";
import type { Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  params: SearchParams;
  // Setter to update search params
  setParams: Dispatch<SetStateAction<SearchParams>>;
}

export function SearchBar({ params, setParams }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the searchText in params and reset page to 1
    setParams((prev) => ({
      ...prev,
      searchText: e.target.value,
      page: 1,
    }));
  };

  return (
      <input
        type="text"
        placeholder="Search ETFs..."
        value={params.searchText}
        onChange={handleChange}
        className={`
          ${styles.searchbar}
          filter-field
        `}
      />
  );
}
