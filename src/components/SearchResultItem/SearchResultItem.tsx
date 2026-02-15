import type { SearchResult } from "../../types/search";
import styles from "./SearchResultItem.module.css";

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
    <div className={styles.card}>
      {/* Display the main info */}
      <h3 className={styles.title}>{result.display_name}</h3>
      <p className={styles.meta}>Fund Size: {formattedFundSize}</p>
      <p className={styles.meta}>
        Management approach: {result.management_approach}
      </p>
    </div>
  );
}
