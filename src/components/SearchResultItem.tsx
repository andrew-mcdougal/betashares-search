import type { SearchResult } from "../types/search";

interface SearchResultsItemProps {
  result: SearchResult; // Single result from API
}

export function SearchResultItem({ result }: SearchResultsItemProps) {

  // format fund size to dollar with no decimal places
  const sizeNumber = Number(result.fund_size);
  const formattedFundSize = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 2,
  }).format(sizeNumber);

  return (
    <div className={`dashboard-card`}>
      {/* Display the main info */}
      <h3 className={`font-semibold`}>{result.display_name}</h3>
      <p className={`text-sm text-gray-600`}>Fund Size: {formattedFundSize}</p>
      <p className={`text-sm text-gray-600`}>Management approach: {result.management_approach}</p>
    </div>
  );
}
