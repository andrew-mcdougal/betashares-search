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
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
    <>
      <div>
        <select
          name="management-approach-filter"
          value={params.filters?.management_approach || ""}
          onChange={handleSelectChange}
        >
          <option value="">All</option>
          {managementApproaches.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="fund-size-slider">Fund size (AUD)</label>
        <input
          type="range"
          id="fund-size-slider"
          min={0}
          max={10000}
          step={100}
          value={params.filters?.fund_size?.max || 5000}
          onChange={(e) => {
            const value = e.target.value;
            setParams((prev) => ({
              ...prev,
              page: 1,
              filters: {
                ...prev.filters,
                fund_size: { min: "0", max: value },
              },
            }));
          }}
        />
        <p>Max fund size: {params.filters?.fund_size?.max || 5000}</p>
      </div>
    </>
  );
}
