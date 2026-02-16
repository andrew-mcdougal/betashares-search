import { SearchResultItem } from "./SearchResultItem/SearchResultItem";
import type { SearchResult } from "../types/search";
import { Skeleton } from "./../layouts/Skeleton";

interface SearchResultsProps {
  className?: string;
  results: SearchResult[]; // Array of results from hook
  loading: boolean; // True while awaiting API response
  error: string | null; // Error message if API call fails
  total: number; // Total number of results for pagination
}

export function SearchResults({
  className,
  results,
  loading,
  error,
  total,
}: SearchResultsProps) {
  if (loading) return <Skeleton count={15} />;
  if (error) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-[5vh]">
      <p className="font-medium">Something went wrong</p>
      <p className="text-sm mt-1">{error}</p>
    </div>
  );
}

if (results.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-[5vh]">
      <p className="text-gray-600">No funds match your filters. Please change your filters and try again.</p>
    </div>
  );
}

  return (
    <div className={`${className}`}>
      <div className="dashboard-results-grid grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[1rem]">
        {results.map((result) => (
          // Render each result using the reusable card component
          <SearchResultItem key={result.symbol} result={result} />
        ))}
      </div>
      <p className={`text-center w-full p-[1em_2em_10em_2em]`}>
        {total} results found
      </p>
    </div>
  );
}
