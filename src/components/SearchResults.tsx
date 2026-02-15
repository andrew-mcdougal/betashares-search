import { SearchResultItem } from "./SearchResultItem";
import type { SearchResult } from "../types/search";
import { Skeleton } from "./../layouts/Skeleton";

interface SearchResultsProps {
  results: SearchResult[]; // Array of results from hook
  loading: boolean; // True while awaiting API response
  error: string | null; // Error message if API call fails
  total: number; // Total number of results for pagination
}

export function SearchResults({
  results,
  loading,
  error,
  total,
}: SearchResultsProps) {
  if (loading) return <Skeleton count={5} />;
  if (error) return <p className={`text-red-500`}>Error: {error}</p>;
  if (results.length === 0) return <p>No results found.</p>;

  return (
    <div>
      <p className={`text-sm mb-2`}>{total} results found</p>
      {results.map((result) => (
        // Render each result using the reusable card component
        <SearchResultItem key={result.symbol} result={result} />
      ))}
    </div>
  );
}
