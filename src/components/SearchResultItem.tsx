import type { SearchResult } from "../types/search";

interface SearchResultsItemProps {
  result: SearchResult; // Single result from API
}

export function SearchResultItem({ result }: SearchResultsItemProps) {
  return (
    <div className={`border rounded p-4 mb-2 hover:shadow-md transition`}>
      {/* Display the main info */}
      <h3 className={`font-semibold`}>{result.display_name}</h3>
      <p className={`text-sm text-gray-600`}>{result.symbol}</p>
      <p className={`text-sm text-gray-600`}>Management approach: {result.management_approach}</p>
    </div>
  );
}
