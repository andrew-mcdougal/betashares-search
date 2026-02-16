import type { SearchParams } from "../../types/search";
import { type Dispatch, type SetStateAction, type ChangeEvent, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import style from "./Filters.module.css";

interface FiltersProps {
  className?: string;
  // Current search parameters from hook
  params: SearchParams;

  // Setter to update search params
  setParams: Dispatch<SetStateAction<SearchParams>>;
}

// Options for filters
const managementApproaches = ["Active", "Passive"];
const investmentSuitabilities = ["Capital growth", "Income"];
const dividendFrequencies = [
  "Monthly",
  "Quarterly",
  "Semiannually",
  "Annually",
];

export function Filters({ className, params, setParams }: FiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  // handle the select change
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setParams((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        [name]: value ? [value] : [],
      },
      page: 1, // reset to first page on filter change
    }));
  };

  return (
    <div className={`sticky-filters ${className}`}>
      <SearchBar params={params} setParams={setParams} />
      {/* Primary filters */}
      <div className={`dashboard-filters-container`}>
        <div className={style.selectContainer}>
          <label htmlFor="management-approach-filter">Management Type:</label>
          <select
            className={style.select}
            id="management-approach-filter"
            name="management_approach"
            value={params.filters?.management_approach?.[0] || ""}
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

      {/* Secondary filters */}
      <button
        type="button"
        onClick={() => setShowAdvanced((prev) => !prev)}
        className={style.toggleButton}
      >
        {showAdvanced ? "Hide advanced filters" : "Show advanced filters"}
      </button>

      {showAdvanced && 
      <div className={`dashboard-filters-container pt-[2em]`}>

        <div className={style.sliderContainer}>
          <label htmlFor="management-fee-slider">
            Max management fee: {params.filters?.management_fee?.max || 2}%
          </label>
          <input
            type="range"
            id="management-fee-slider"
            min={0}
            max={5}
            step={0.1}
            value={params.filters?.management_fee?.max || 2}
            onChange={(e) => {
              const value = e.target.value;
              setParams((prev) => ({
                ...prev,
                page: 1,
                filters: {
                  ...prev.filters,
                  management_fee: { min: "0", max: value },
                },
              }));
            }}
          />
        </div>

        {/* Investment Suitability */}
        <div className={style.selectContainer}>
          <label htmlFor="investment-suitability-filter">
            Investment Suitability:
          </label>
          <select
            id="investment-suitability-filter"
            name="investment_suitability"
            className={style.select}
            value={params.filters?.investment_suitability?.[0] || ""}
            onChange={handleSelectChange}
          >
            <option value="">All</option>
            {investmentSuitabilities.map((suit) => (
              <option key={suit} value={suit}>
                {suit}
              </option>
            ))}
          </select>
        </div>

        {/* Dividend Frequency */}
        <div className={style.selectContainer}>
          <label htmlFor="dividend-frequency-filter">Dividend Frequency:</label>
          <select
            id="dividend-frequency-filter"
            name="dividend_frequency"
            className={style.select}
            value={params.filters?.dividend_frequency?.[0] || ""}
            onChange={handleSelectChange}
          >
            <option value="">All</option>
            {dividendFrequencies.map((freq) => (
              <option key={freq} value={freq}>
                {freq}
              </option>
            ))}
          </select>
        </div>
      </div>
      }
    </div>
  );
}
