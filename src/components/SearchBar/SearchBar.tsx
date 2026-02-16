import { useState, useEffect, useRef, type ChangeEvent } from "react";
import type { SearchParams } from "../../types/search";
import type { Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  params: SearchParams;
  setParams: Dispatch<SetStateAction<SearchParams>>;
}

export function SearchBar({ params, setParams }: SearchBarProps) {
  // Local UI state for predictive suggestions.
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [, setLoading] = useState(false);

  // Used to detect clicks outside the search component
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Updates the main search query.
   * Always resets pagination to page 1 when the query changes.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParams((prev) => ({
      ...prev,
      searchText: e.target.value,
      page: 1,
    }));
  };

  /**
   * Debounced search effect.
   * Waits 300ms after typing stops before querying the API.
   * Prevents unnecessary API calls while the user is actively typing.
   */
  useEffect(() => {
    const query = params.searchText;

    // No suggestions for very short queries
    if (!query || query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timeout = setTimeout(() => {
      fetchSuggestions(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [params.searchText]);

  /**
   * Fetches predictive suggestions from the search API.
   * Guards against race conditions by ensuring the query
   * matches the latest input value.
   */
  async function fetchSuggestions(query: string) {
    if (!query || query.length < 2) return;

    // Prevent outdated responses from updating state
    if (params.searchText !== query) return;

    try {
      setLoading(true);

      const res = await fetch("https://search.betashares.services/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search_text: query,
          size: 5,
          kind: ["etf"],
        }),
      });

      const data = await res.json();

      setSuggestions(data.results || []);
      setShowSuggestions(true);
    } catch (err) {
      // In production, this could be replaced with proper logging
      console.error("Suggestion fetch failed:", err);
    } finally {
      setLoading(false);
    }
  }

  /**
   * When a suggestion is selected:
   * - Update the search query
   * - Reset pagination
   * - Close the dropdown
   */
  function handleSelect(item: any) {
    setParams((prev) => ({
      ...prev,
      searchText: item.symbol,
      page: 1,
    }));

    setShowSuggestions(false);
  }

  /**
   * Close dropdown when clicking outside the component.
   */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * Close dropdown when Escape key is pressed.
   */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.searchbarContainer}>
      <input
        type="text"
        placeholder="Search ETFs..."
        value={params.searchText}
        onChange={handleChange}
        onFocus={() => {
          // Reopen suggestions if they already exist
          if (suggestions.length > 0) setShowSuggestions(true);
        }}
        className={`${styles.searchbar} filter-field`}
      />

      {showSuggestions && suggestions.length > 0 && (
        <div className={styles.suggestions}>
          {suggestions.map((item) => (
            <div
              key={item.symbol}
              className={styles.suggestionItem}
              onClick={() => handleSelect(item)}
            >
              <strong>{item.symbol}</strong>
              <span>{item.display_name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
