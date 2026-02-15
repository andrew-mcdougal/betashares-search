import type { ChangeEvent } from "react";
import type { SearchParams } from "../types/search";
import type { Dispatch, SetStateAction } from "react";

interface FiltersProps {
  // Current search parameters from hook
  params: SearchParams;

  // Setter to update search params
  setParams: Dispatch<SetStateAction<SearchParams>>;
}

export function Filters({ params, setParams }: FiltersProps) {

  const managementApproaches = ["Active", "Passive"];

  // handle the select change
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParams((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        management_approach: e.target.value ? [e.target.value] : [],
      },
      page: 1, // reset to first page on filter change
    }));
  };

  return (

      <select
        name="management-approach-filter"
        value={params.filters?.management_approach || ""}
        onChange={handleChange}>
        <option value="">All</option>
        {managementApproaches.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
  );
}
