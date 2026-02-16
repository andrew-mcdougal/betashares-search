import type { SearchResult } from "../../types/search";
import styles from "./SearchResultItem.module.css";

interface SearchResultsItemProps {
  result: SearchResult; // Single result from API
}

export function SearchResultItem({ result }: SearchResultsItemProps) {
  // format fund size to dollar with no decimal places
  const fundNumber = Number(result.fund_size);
  const formattedFundSize = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 2,
  }).format(fundNumber);

  return (
    <div className={styles.card}>
      {/* Display the main info */}
      <p className={styles.symbol}>{result.symbol}</p>
      <h3 className={styles.title}>{result.display_name}</h3>
      <p className={styles.meta}>Fund Size: {formattedFundSize}</p>
      <p className={styles.meta}>Fee: {result.management_fee}%</p>
      <p className={styles.meta}>
        Management approach: {result.management_approach}
      </p>
      <p>Investment suitability: {result.investment_suitability}</p>
      <p>Dividend frequency: {result.dividend_frequency}</p>
    </div>
  );
}
