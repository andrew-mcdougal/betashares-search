import type { ChangeEvent } from "react";
import type { SearchParams } from "../../types/search";
import type { Dispatch, SetStateAction } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import style from "./Filters.module.css";

interface FiltersProps {
  className?: string;
  // Current search parameters from hook
  params: SearchParams;

  // Setter to update search params
  setParams: Dispatch<SetStateAction<SearchParams>>;
}

export function Filters({ className, params, setParams }: FiltersProps) {
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
    <div className={`sticky-filters ${className}`}>
      <SearchBar params={params} setParams={setParams} />
      <div className={`dashboard-filters-container`}>
        <div className={style.selectContainer}>
          <label htmlFor="management-approach-filter">Management Type:</label>
          <select
            className={style.select}
            id="management-approach-filter"
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

        <div className={style.sliderContainer}>
          <label htmlFor="fund-size-slider">
            Max fund size: ${params.filters?.fund_size?.max || 5000} (AUD)
          </label>
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
        </div>
      </div>
    </div>
  );
}
